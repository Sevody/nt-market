import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { ChannelUserEntity } from './channel-user.entity';

@EntityRepository(ChannelUserEntity)
export class ChannelUserRepository extends Repository<ChannelUserEntity> {}
