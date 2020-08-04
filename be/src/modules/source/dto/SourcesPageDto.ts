import { ApiProperty } from '@nestjs/swagger';

import {
    IPageMetaDtoParameters,
    PageMetaDto,
} from '../../../common/dto/PageMetaDto';
import { SourceDto } from './SourceDto';

export class SourcesPageDto extends PageMetaDto {
    @ApiProperty({
        type: SourceDto,
        isArray: true,
    })
    readonly data: SourceDto[];

    constructor(data: SourceDto[], meta: IPageMetaDtoParameters) {
        super(meta);
        this.data = data;
    }
}
