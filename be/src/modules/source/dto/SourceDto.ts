'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { SourceType } from '../../../common/constants/source-type';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { SourceEntity } from '../source.entity';

export class SourceDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    @ApiPropertyOptional({ enum: SourceType })
    type: SourceType;

    constructor(source: SourceEntity) {
        super(source);
        this.name = source.name;
        this.type = source.type;
    }
}
