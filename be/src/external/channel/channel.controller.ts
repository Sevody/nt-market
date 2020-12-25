import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ChannelUserEntity } from './channel-user.entity';
import { ChannelService } from './channel.service';
import { ChannelUserOptionsDto } from './dto/ChannelUserOptionsDto';

@Controller('channel')
@ApiTags('channel')
export class ChannelController {
    constructor(private _channelService: ChannelService) {}

    @Get('/users')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get rss-channels list',
    })
    getChannelUsers(
        @Query() searchOptionsDto: ChannelUserOptionsDto,
    ): Promise<ChannelUserEntity[]> {
        return this._channelService.getAllChannelUsers(searchOptionsDto);
    }
}
