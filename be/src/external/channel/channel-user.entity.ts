import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { LanguageType } from '../../common/constants/language-type';
import { ChannelUserDto } from './dto/ChannelUserDto';

@Entity({ name: 'channel_users' })
export class ChannelUserEntity extends AbstractEntity<ChannelUserDto> {
    @Column()
    lineId: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    gender: string;

    @Column()
    avatar: string;

    @Column()
    locale: LanguageType;

    dtoClass = ChannelUserDto;
}
