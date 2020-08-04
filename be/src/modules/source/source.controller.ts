import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    Query,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthGuard } from '../../guards/auth.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { SourceAddDto } from './dto/SourceAddDto';
import { SourceDto } from './dto/SourceDto';
import { SourcesPageDto } from './dto/SourcesPageDto';
import { SourcesPageOptionsDto } from './dto/SourcesPageOptionsDto';
import { SourceService } from './source.service';

@Controller('sources')
@ApiTags('sources')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class SourceController {
    constructor(private _sourceService: SourceService) {}

    @Get('/')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get sources list',
        type: SourcesPageDto,
    })
    getSources(
        @Query() pageOptionsDto: SourcesPageOptionsDto,
    ): Promise<SourcesPageDto> {
        return this._sourceService.getSources(pageOptionsDto);
    }

    @Post('/')
    addSource(@Body() sourceAddDto: SourceAddDto): Promise<SourceDto> {
        return this._sourceService.addSource(sourceAddDto);
    }

    @Put(':id')
    updateSource(
        @Param('id') id: string,
        @Body() sourceAddDto: SourceAddDto,
    ): Promise<SourceDto> {
        return this._sourceService.updateSource(id, sourceAddDto);
    }

    @Delete('/')
    deleteSources(@Body('ids') ids: string[]): Promise<void> {
        return this._sourceService.deleteSources(ids);
    }
}
