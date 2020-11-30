import { HttpService, Injectable, Logger } from '@nestjs/common';
// import { Cron, Interval } from '@nestjs/schedule';
import { AxiosResponse } from 'axios';

import { RabbitmqConnection } from '../amqp';
import {
    MQ_EXCHANGE_NAME,
    MQ_EXCHANGE_TYPE,
    MQ_ROUTINGKEY_LINE,
} from '../common/constants/mq';
import { ConfigService } from '../shared/services/config.service';

@Injectable()
export class TasksService {
    private readonly _logger = new Logger(TasksService.name);
    constructor(
        private readonly _httpService: HttpService,
        private readonly _configService: ConfigService,
        private readonly _amqpConnection: RabbitmqConnection,
    ) {}

    // @Cron('5 * * * * *')
    async handleCron(): Promise<void> {
        try {
            await this._sendLineMessage();
        } catch (e) {
            this._logger.error(e);
        }
    }

    // @Interval(10000)
    async handleInterval(): Promise<void> {
        try {
            await this._sendLineMessage();
        } catch (e) {
            this._logger.error(e);
        }
    }

    private async _sendLineMessage() {
        const data = {
            id: 'Ue8f9ec4ba839d107fafb5f2417eeab10',
            content: `send form nt-market at ${+new Date()}`,
        };
        await this.sendMessageByAMQP(data);
    }

    async sendMessageByHttp(
        message: Record<string, any>,
    ): Promise<AxiosResponse> {
        const options = this._configService.ntChannelConfig;
        const response = await this._httpService
            .post('/rssbot/send', message, options)
            .toPromise();
        this._logger.log(
            `send message ${JSON.stringify(message)} by http success`,
        );
        return response;
    }

    async sendMessageByAMQP(
        message: Record<string, any> | string,
    ): Promise<void> {
        await this._amqpConnection.publish(
            {
                name: MQ_EXCHANGE_NAME,
                type: MQ_EXCHANGE_TYPE,
            },
            MQ_ROUTINGKEY_LINE,
            {
                data: message,
            },
        );
    }
}
