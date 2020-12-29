import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { RSSChannelEntity } from './rss-channel.entity';

@EntityRepository(RSSChannelEntity)
export class RSSChannelRepository extends Repository<RSSChannelEntity> {}
