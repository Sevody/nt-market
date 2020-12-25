import { Injectable, Logger } from '@nestjs/common';
import { snakeCase } from 'typeorm/util/StringUtils';

import { Order } from '../common/constants/order';
import { ChannelService } from '../external/channel/channel.service';
import { RSSService } from '../external/rss/rss.service';

const recommendChannelId = 10;

interface ILineTextMessage {
    id: string;
    content: string;
}

@Injectable()
export class RSSJobsService {
    private readonly _logger = new Logger(RSSJobsService.name);
    constructor(
        private readonly _channelService: ChannelService,
        private readonly _rssService: RSSService,
    ) {}

    async getRSSSendLine(): Promise<ILineTextMessage[]> {
        const lineUsers = await this._channelService.getAllChannelUsers({});
        const items = await this._rssService.getRSSItems({
            channelId: recommendChannelId,
            current: 1,
            pageSize: 5,
            skip: 0,
            sorter: { [snakeCase('pubDate')]: Order.DESC },
        });
        if (items.total > 0) {
            return lineUsers.map((user) => ({
                id: user.lineId,
                content: items.data
                    .map((i) => `${i.title}\n${i.link}`)
                    .join('\n'),
            }));
        }
        return [];
    }
}
