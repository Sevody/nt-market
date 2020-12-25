import { HttpService, Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { RabbitmqConnection } from '../amqp';
import {
    MQ_EXCHANGE_NAME,
    MQ_EXCHANGE_TYPE,
    MQ_ROUTINGKEY_LINE,
} from '../common/constants/mq';
import { ConfigService } from '../shared/services/config.service';

@Injectable()
export class MessageService {
    private readonly _logger = new Logger(MessageService.name);
    constructor(
        private readonly _httpService: HttpService,
        private readonly _configService: ConfigService,
        private readonly _amqpConnection: RabbitmqConnection,
    ) {}

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
