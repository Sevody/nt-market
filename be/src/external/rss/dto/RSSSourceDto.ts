import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { RSSSourceEntity } from '../rss-source.entity';

export class RSSSourceDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    @ApiPropertyOptional()
    type: string;

    constructor(rssSource: RSSSourceEntity) {
        super(rssSource);
        this.name = rssSource.name;
        this.type = rssSource.type;
    }
}
