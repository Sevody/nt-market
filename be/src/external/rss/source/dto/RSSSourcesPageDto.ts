import { ApiProperty } from '@nestjs/swagger';

import {
    IPageMetaDtoParameters,
    PageMetaDto,
} from '../../../../common/dto/PageMetaDto';
import { RSSSourceDto } from './RSSSourceDto';

export class RSSSourcesPageDto extends PageMetaDto {
    @ApiProperty({
        type: RSSSourceDto,
        isArray: true,
    })
    readonly data: RSSSourceDto[];

    constructor(data: RSSSourceDto[], meta: IPageMetaDtoParameters) {
        super(meta);
        this.data = data;
    }
}
