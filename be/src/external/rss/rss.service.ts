import { Injectable } from '@nestjs/common';

import { RSSChannelAddDto } from './channel/dto/RSSChannelAddDto';
import { RSSChannelsPageDto } from './channel/dto/RSSChannelsPageDto';
import { RSSChannelsPageOptionsDto } from './channel/dto/RSSChannelsPageOptionsDto';
import { RSSChannelEntity } from './channel/rss-channel.entity';
import { RSSChannelRepository } from './channel/rss-channel.repository';
import { RSSItemsPageDto } from './item/dto/RSSItemsPageDto';
import { RSSItemsPageOptionsDto } from './item/dto/RSSItemsPageOptionsDto';
import { RSSItemRepository } from './item/rss-item.repository';
import { RSSSourceAddDto } from './source/dto/RSSSourceAddDto';
import { RSSSourcesPageDto } from './source/dto/RSSSourcesPageDto';
import { RSSSourcesPageOptionsDto } from './source/dto/RSSSourcesPageOptionsDto';
import { RSSSourceEntity } from './source/rss-source.entity';
import { RSSSourceRepository } from './source/rss-source.repository';

@Injectable()
export class RSSService {
    constructor(
        public readonly rssSourceRepository: RSSSourceRepository,
        public readonly rssChannelRepository: RSSChannelRepository,
        public readonly rssItemRepository: RSSItemRepository,
    ) {}

    async getRSSSources(
        pageOptionsDto: RSSSourcesPageOptionsDto,
    ): Promise<RSSSourcesPageDto> {
        const queryBuilder = this.rssSourceRepository.createQueryBuilder(
            'rss_source',
        );
        const qb = queryBuilder
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.pageSize)
            .where('1 = 1');
        const { name, topic, sorter } = pageOptionsDto;
        if (name) {
            qb.andWhere('rss_source.name LIKE :name', { name: `%${name}%` });
        }
        if (topic) {
            qb.andWhere('rss_source.topic = :topic', { topic });
        }
        if (sorter && Object.keys(sorter).length > 0) {
            const firstSorter = Object.entries(sorter)[0];
            const [key, order] = firstSorter;
            qb.orderBy(key, order);
        }
        const [rssSources, rssSourcesCount] = await qb.getManyAndCount();
        return new RSSSourcesPageDto(rssSources.toDtos(), {
            pageOptionsDto,
            total: rssSourcesCount,
        });
    }

    async addRSSChannelBunch(
        rssSourceAddBunchDto: RSSSourceAddDto[],
    ): Promise<RSSSourceEntity[]> {
        const newSources = rssSourceAddBunchDto.map((item) =>
            this.rssSourceRepository.create({
                ...item,
            }),
        );
        return this.rssSourceRepository.save(newSources);
    }

    async getRSSChannels(
        pageOptionsDto: RSSChannelsPageOptionsDto,
    ): Promise<RSSChannelsPageDto> {
        const queryBuilder = this.rssChannelRepository.createQueryBuilder(
            'rss_channel',
        );
        const qb = queryBuilder
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.pageSize)
            .where('1 = 1');
        const { title, sourceId, sorter } = pageOptionsDto;
        if (title) {
            qb.andWhere('rss_channel.title LIKE :title', {
                title: `%${title}%`,
            });
        }
        if (sourceId) {
            qb.andWhere('rss_channel.source_id = :sourceId', { sourceId });
        }
        if (sorter && Object.keys(sorter).length > 0) {
            const firstSorter = Object.entries(sorter)[0];
            const [key, order] = firstSorter;
            qb.orderBy(key, order);
        }
        const [rssChannels, rssChannelsCount] = await qb.getManyAndCount();
        return new RSSChannelsPageDto(rssChannels.toDtos(), {
            pageOptionsDto,
            total: rssChannelsCount,
        });
    }

    async addRSSChannel(
        rssChannelAddDto: RSSChannelAddDto,
    ): Promise<RSSChannelEntity> {
        const rssChannel = this.rssChannelRepository.create({
            ...rssChannelAddDto,
        });
        return this.rssChannelRepository.save(rssChannel);
    }

    async deleteChannels(ids: string[]): Promise<void> {
        await this.rssChannelRepository.delete(ids);
    }

    async getAllRSSChannels(
        searchOptionsDto: RSSChannelsPageOptionsDto,
    ): Promise<RSSChannelEntity[]> {
        const queryBuilder = this.rssChannelRepository.createQueryBuilder(
            'rss_channel',
        );
        const qb = queryBuilder.where('1 = 1');
        const { sourceId } = searchOptionsDto;
        if (sourceId) {
            qb.andWhere('rss_channel.source_id = :sourceId', { sourceId });
        }
        return qb.getMany();
    }

    async getRSSItems(
        pageOptionsDto: RSSItemsPageOptionsDto,
    ): Promise<RSSItemsPageDto> {
        const queryBuilder = this.rssItemRepository.createQueryBuilder(
            'rss_item',
        );
        const qb = queryBuilder
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.pageSize)
            .where('1 = 1');
        const { channelId, sorter } = pageOptionsDto;
        if (channelId) {
            qb.andWhere('rss_item.channel_id = :channelId', { channelId });
        }
        if (sorter && Object.keys(sorter).length > 0) {
            const firstSorter = Object.entries(sorter)[0];
            const [key, order] = firstSorter;
            qb.orderBy(key, order);
        }
        const [rssItems, rssItemsCount] = await qb.getManyAndCount();
        return new RSSItemsPageDto(rssItems.toDtos(), {
            pageOptionsDto,
            total: rssItemsCount,
        });
    }
}
