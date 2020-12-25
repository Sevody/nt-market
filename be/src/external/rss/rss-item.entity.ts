import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { RSSItemDto } from './dto/RSSItemDto';

@Entity({ name: 'rss_items' })
export class RSSItemEntity extends AbstractEntity<RSSItemDto> {
    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    pubDate: Date;

    @Column()
    guid: string;

    @Column()
    link: string;

    @Column()
    channelId: number;

    dtoClass = RSSItemDto;
}
