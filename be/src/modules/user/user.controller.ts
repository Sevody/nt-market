'use strict';

import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Query,
    UseGuards,
    UseInterceptors,
    ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { RoleType } from '../../common/constants/role-type';
import { AuthUser } from '../../decorators/auth-user.decorator';
import { Roles } from '../../decorators/roles.decorator';
import { AuthGuard } from '../../guards/auth.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
// import { UserDto } from './dto/UserDto';
import { UsersPageDto } from './dto/UsersPageDto';
import { UsersPageOptionsDto } from './dto/UsersPageOptionsDto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('users')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class UserController {
    constructor(private _userService: UserService) {}

    @Get('admin')
    @Roles(RoleType.USER)
    @HttpCode(HttpStatus.OK)
    admin(@AuthUser() user: UserEntity): string {
        return 'only for you admin: ' + user.username;
    }

    @Get('users')
    @Roles(RoleType.ADMIN)
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get users list',
        type: UsersPageDto,
    })
    getUsers(
        @Query(new ValidationPipe({ transform: true }))
        pageOptionsDto: UsersPageOptionsDto,
    ): Promise<UsersPageDto> {
        return this._userService.getUsers(pageOptionsDto);
    }

    @Get('currentUser')
    getCurrentUser(@AuthUser() user: UserEntity): any {
        return user.toDto();
        // return {
        //     name: 'シルティー2',
        //     avatar:
        //         'https://phantom-1256176746.cos.ap-chengdu.myqcloud.com/shiruthii.jpeg',
        //     userid: '00000001',
        //     email: 'shiruthii@waafuri.com',
        //     access: 'user',
        //     phone: '0752-268888888',
        // };
    }
}
