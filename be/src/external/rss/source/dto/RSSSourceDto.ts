import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { RSSSourceEntity } from '../rss-source.entity';

export class RSSSourceDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    @ApiPropertyOptional()
    topic: string;

    constructor(rssSource: RSSSourceEntity) {
        super(rssSource);
        this.name = rssSource.name;
        this.topic = rssSource.topic;
    }
}
