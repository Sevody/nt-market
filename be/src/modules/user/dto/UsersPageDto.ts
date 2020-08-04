import { ApiProperty } from '@nestjs/swagger';

import {
    IPageMetaDtoParameters,
    PageMetaDto,
} from '../../../common/dto/PageMetaDto';
import { UserDto } from './UserDto';

export class UsersPageDto extends PageMetaDto {
    @ApiProperty({
        type: UserDto,
        isArray: true,
    })
    readonly data: UserDto[];

    @ApiProperty()
    readonly meta: PageMetaDto;

    constructor(data: UserDto[], meta: IPageMetaDtoParameters) {
        super(meta);
        this.data = data;
    }
}
