import { ApiPropertyOptional } from '@nestjs/swagger';

import { LanguageType } from '../../../../common/constants/language-type';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { RSSChannelEntity } from '../rss-channel.entity';

export class RSSChannelDto extends AbstractDto {
    @ApiPropertyOptional()
    sourceId: number;

    @ApiPropertyOptional()
    title: string;

    description: string;

    @ApiPropertyOptional()
    atomLink: string;

    @ApiPropertyOptional()
    language: LanguageType;

    lastBuildDate: Date;

    constructor(rssChannel: RSSChannelEntity) {
        super(rssChannel);
        this.sourceId = rssChannel.sourceId;
        this.title = rssChannel.title;
        this.description = rssChannel.description;
        this.atomLink = rssChannel.atomLink;
        this.language = rssChannel.language;
        this.lastBuildDate = rssChannel.lastBuildDate;
    }
}
