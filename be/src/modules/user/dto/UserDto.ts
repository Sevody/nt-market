import { ApiPropertyOptional } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
    @ApiPropertyOptional({ enum: RoleType })
    role: RoleType;

    @ApiPropertyOptional()
    username: string;

    @ApiPropertyOptional()
    realName: string;

    @ApiPropertyOptional()
    mobile: string;

    @ApiPropertyOptional()
    email: string;

    @ApiPropertyOptional()
    avatar: string;

    constructor(user: UserEntity) {
        super(user);
        this.username = user.username;
        this.realName = user.realName;
        this.role = user.role;
        this.email = user.email;
        this.avatar = user.avatar;
        this.mobile = user.mobile;
    }
}
