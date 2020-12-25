import { ApiProperty } from '@nestjs/swagger';

import {
    IPageMetaDtoParameters,
    PageMetaDto,
} from '../../../common/dto/PageMetaDto';
import { RSSItemDto } from './RSSItemDto';

export class RSSItemsPageDto extends PageMetaDto {
    @ApiProperty({
        type: RSSItemDto,
        isArray: true,
    })
    readonly data: RSSItemDto[];

    constructor(data: RSSItemDto[], meta: IPageMetaDtoParameters) {
        super(meta);
        this.data = data;
    }
}
