import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { SourceEntity } from './source.entity';

@EntityRepository(SourceEntity)
export class SourceRepository extends Repository<SourceEntity> {}
