import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { LanguageType } from '../../common/constants/language-type';
import { RSSChannelDto } from './dto/RSSChannelDto';

@Entity({ name: 'rss_channels' })
export class RSSChannelEntity extends AbstractEntity<RSSChannelDto> {
    @Column()
    sourceId: number;

    @Column()
    title: string;

    @Column()
    atomLink: string;

    @Column()
    description: string;

    @Column({ type: 'enum', enum: LanguageType })
    language: LanguageType;

    @Column()
    lastBuildDate: Date;

    dtoClass = RSSChannelDto;
}
