import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { RoleType } from '../../common/constants/role-type';
import { StatusType } from '../../common/constants/status-type';
import { UserDto } from './dto/UserDto';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
    @Column({ type: 'enum', enum: StatusType, default: StatusType.ENABLE })
    status: StatusType;

    @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
    role: RoleType;

    @Column({ unique: true, nullable: true })
    username: string;

    @Column()
    realName: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    mobile: string;

    @Column()
    email: string;

    @Column()
    avatar: string;

    dtoClass = UserDto;
}
