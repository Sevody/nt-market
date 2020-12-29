import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { RSSSourceDto } from './dto/RSSSourceDto';

@Entity({ name: 'rss_sources' })
export class RSSSourceEntity extends AbstractEntity<RSSSourceDto> {
    @Column()
    name: string;

    @Column()
    topic: string;

    dtoClass = RSSSourceDto;
}
