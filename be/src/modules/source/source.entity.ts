import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { SourceType } from '../../common/constants/source-type';
import { SourceDto } from './dto/SourceDto';

@Entity({ name: 'sources' })
export class SourceEntity extends AbstractEntity<SourceDto> {
    @Column()
    name: string;

    @Column({ type: 'enum', enum: SourceType, default: SourceType.MANUAL })
    type: SourceType;

    dtoClass = SourceDto;
}
