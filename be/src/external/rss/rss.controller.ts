import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { RSSChannelAddDto } from './channel/dto/RSSChannelAddDto';
import { RSSChannelDto } from './channel/dto/RSSChannelDto';
import { RSSChannelsPageDto } from './channel/dto/RSSChannelsPageDto';
import { RSSChannelsPageOptionsDto } from './channel/dto/RSSChannelsPageOptionsDto';
import { RSSItemsPageDto } from './item/dto/RSSItemsPageDto';
import { RSSItemsPageOptionsDto } from './item/dto/RSSItemsPageOptionsDto';
import { RSSService } from './rss.service';
import { RSSSourcesPageDto } from './source/dto/RSSSourcesPageDto';
import { RSSSourcesPageOptionsDto } from './source/dto/RSSSourcesPageOptionsDto';

@Controller('rss')
@ApiTags('rss')
export class RSSController {
    constructor(private _rssService: RSSService) {}

    @Get('/sources')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get rss-sources list',
        type: RSSSourcesPageDto,
    })
    getRSSSources(
        @Query() pageOptionsDto: RSSSourcesPageOptionsDto,
    ): Promise<RSSSourcesPageDto> {
        return this._rssService.getRSSSources(pageOptionsDto);
    }

    @Get('/channels')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get rss-channels list',
        type: RSSChannelsPageDto,
    })
    getRSSChannels(
        @Query() pageOptionsDto: RSSChannelsPageOptionsDto,
    ): Promise<RSSChannelsPageDto> {
        return this._rssService.getRSSChannels(pageOptionsDto);
    }

    @Post('/channel')
    addRSSChannel(
        @Body() rssChannelAddDto: RSSChannelAddDto,
    ): Promise<RSSChannelDto> {
        return this._rssService.addRSSChannel(rssChannelAddDto);
    }

    @Delete('/channel')
    deleteRSSChannel(@Body('ids') ids: string[]): Promise<void> {
        return this._rssService.deleteChannels(ids);
    }

    @Get('/items')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get rss-items list',
        type: RSSItemsPageDto,
    })
    getRSSItems(
        @Query() pageOptionsDto: RSSItemsPageOptionsDto,
    ): Promise<RSSItemsPageDto> {
        return this._rssService.getRSSItems(pageOptionsDto);
    }
}
