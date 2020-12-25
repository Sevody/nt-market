import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChannelUserRepository } from './channel-user.repository';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';

@Module({
    imports: [TypeOrmModule.forFeature([ChannelUserRepository])],
    controllers: [ChannelController],
    exports: [ChannelService],
    providers: [ChannelService],
})
export class ChannelModule {}
