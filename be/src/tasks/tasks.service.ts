import { Injectable, Logger } from '@nestjs/common';

// import {
//     Cron,
//     Interval,
// } from '@nestjs/schedule';
import { MessageService } from './message.service';
import { RSSJobsService } from './rss-jobs.service';

@Injectable()
export class TasksService {
    private readonly _logger = new Logger(TasksService.name);
    constructor(
        private readonly _messageService: MessageService,
        private readonly _rssJobsService: RSSJobsService,
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
        const data = await this._rssJobsService.getRSSSendLine();
        const jobs = data.map((item) =>
            this._messageService.sendMessageByAMQP(item),
        );
        await Promise.all(jobs);
    }
}
