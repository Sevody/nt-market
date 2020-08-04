import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';
import { SourceController } from './source.controller';
import { SourceRepository } from './source.repository';
import { SourceService } from './source.service';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([SourceRepository])],
    controllers: [SourceController],
    exports: [SourceService],
    providers: [SourceService],
})
export class SourceModule {}
