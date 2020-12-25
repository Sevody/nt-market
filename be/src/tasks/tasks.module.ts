import { HttpModule, Module } from '@nestjs/common';

import { ChannelModule } from '../external/channel/channel.module';
import { RSSModule } from '../external/rss/rss.module';
import { MessageService } from './message.service';
import { RSSJobsService } from './rss-jobs.service';
import { TasksService } from './tasks.service';

@Module({
    imports: [HttpModule, ChannelModule, RSSModule],
    providers: [TasksService, MessageService, RSSJobsService],
})
export class TasksModule {}
