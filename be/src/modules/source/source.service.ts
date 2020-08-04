import { Injectable } from '@nestjs/common';

import { ValidatorService } from '../../shared/services/validator.service';
import { SourceAddDto } from './dto/SourceAddDto';
import { SourcesPageDto } from './dto/SourcesPageDto';
import { SourcesPageOptionsDto } from './dto/SourcesPageOptionsDto';
import { SourceEntity } from './source.entity';
import { SourceRepository } from './source.repository';

@Injectable()
export class SourceService {
    constructor(
        public readonly sourceRepository: SourceRepository,
        public readonly validatorService: ValidatorService,
    ) {}

    async getSources(
        pageOptionsDto: SourcesPageOptionsDto,
    ): Promise<SourcesPageDto> {
        const queryBuilder = this.sourceRepository.createQueryBuilder('source');
        const qb = queryBuilder
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.pageSize)
            .where('1 = 1');

        const { name, type, sorter } = pageOptionsDto;
        if (name) {
            qb.andWhere('source.name LIKE :name', { name: `%${name}%` });
        }
        if (type) {
            qb.andWhere('source.type = :type', { type });
        }
        if (sorter && Object.keys(sorter).length > 0) {
            const firstSorter = Object.entries(sorter)[0];
            const [key, order] = firstSorter;
            qb.orderBy(key, order);
        }
        const [sources, sourcesCount] = await qb.getManyAndCount();
        return new SourcesPageDto(sources.toDtos(), {
            pageOptionsDto,
            total: sourcesCount,
        });
    }

    async addSource(sourceAddDto: SourceAddDto): Promise<SourceEntity> {
        const source = this.sourceRepository.create({
            ...sourceAddDto,
        });
        return this.sourceRepository.save(source);
    }

    async updateSource(
        id: string,
        sourceAddDto: SourceAddDto,
    ): Promise<SourceEntity> {
        const updateSource = await this.sourceRepository.findOne(id);
        updateSource.name = sourceAddDto.name;
        updateSource.type = sourceAddDto.type;
        return this.sourceRepository.save(updateSource);
    }

    async deleteSources(ids: string[]): Promise<void> {
        await this.sourceRepository.delete(ids);
    }
}
