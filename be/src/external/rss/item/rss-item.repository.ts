import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { RSSItemEntity } from './rss-item.entity';

@EntityRepository(RSSItemEntity)
export class RSSItemRepository extends Repository<RSSItemEntity> {}
