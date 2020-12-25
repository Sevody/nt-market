import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RSSChannelRepository } from './rss-channel.repository';
import { RSSItemRepository } from './rss-item.repository';
import { RSSSourceRepository } from './rss-source.repository';
import { RSSController } from './rss.controller';
import { RSSService } from './rss.service';

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
