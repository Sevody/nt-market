import { HttpModule, Module } from '@nestjs/common';

import { TasksService } from './tasks.service';

@Module({
    imports: [HttpModule],
    providers: [TasksService],
})
export class TasksModule {}
