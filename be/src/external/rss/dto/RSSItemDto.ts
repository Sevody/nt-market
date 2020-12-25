import { AbstractDto } from '../../../common/dto/AbstractDto';
import { RSSItemEntity } from '../rss-item.entity';

export class RSSItemDto extends AbstractDto {
    title: string;

    description: string;

    pubDate: Date;

    guid: string;

    link: string;

    channelId: number;

    constructor(rssItem: RSSItemEntity) {
        super(rssItem);
        this.title = rssItem.title;
        this.description = rssItem.description;
        this.pubDate = rssItem.pubDate;
        this.guid = rssItem.guid;
        this.link = rssItem.link;
        this.channelId = rssItem.channelId;
    }
}
