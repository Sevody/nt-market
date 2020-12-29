import { ApiProperty } from '@nestjs/swagger';

import {
    IPageMetaDtoParameters,
    PageMetaDto,
} from '../../../../common/dto/PageMetaDto';
import { RSSChannelDto } from './RSSChannelDto';

export class RSSChannelsPageDto extends PageMetaDto {
    @ApiProperty({
        type: RSSChannelDto,
        isArray: true,
    })
    readonly data: RSSChannelDto[];

    constructor(data: RSSChannelDto[], meta: IPageMetaDtoParameters) {
        super(meta);
        this.data = data;
    }
}
