import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RSSChannelRepository } from './channel/rss-channel.repository';
import { RSSItemRepository } from './item/rss-item.repository';
import { RSSController } from './rss.controller';
import { RSSService } from './rss.service';
import { RSSSourceRepository } from './source/rss-source.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            RSSSourceRepository,
            RSSChannelRepository,
            RSSItemRepository,
        ]),
    ],
    controllers: [RSSController],
    exports: [RSSService],
    providers: [RSSService],
})
export class RSSModule {}
