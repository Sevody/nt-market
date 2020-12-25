import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { RSSSourceEntity } from './rss-source.entity';

@EntityRepository(RSSSourceEntity)
export class RSSSourceRepository extends Repository<RSSSourceEntity> {}
