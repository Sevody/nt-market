import { ApiPropertyOptional } from '@nestjs/swagger';

import { LanguageType } from '../../../common/constants/language-type';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { ChannelUserEntity } from '../channel-user.entity';

export class ChannelUserDto extends AbstractDto {
    @ApiPropertyOptional()
    firstName: string;

    @ApiPropertyOptional()
    lastName: string;

    @ApiPropertyOptional()
    gender: string;

    @ApiPropertyOptional()
    avatar: string;

    @ApiPropertyOptional()
    locale: LanguageType;

    @ApiPropertyOptional()
    lineId: string;

    constructor(channelUser: ChannelUserEntity) {
        super(channelUser);
        this.firstName = channelUser.firstName;
        this.lastName = channelUser.lastName;
        this.gender = channelUser.gender;
        this.avatar = channelUser.avatar;
        this.lineId = channelUser.lineId;
    }
}
