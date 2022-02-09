import './boilerplate.polyfill';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RabbitmqModule } from './amqp';
import { ChannelModule } from './external/channel/channel.module';
import { RSSModule } from './external/rss/rss.module';
import { contextMiddleware } from './middlewares';
import { AuthModule } from './modules/auth/auth.module';
import { MathModule } from './modules/math/math.module';
import { SourceModule } from './modules/source/source.module';
import { UserModule } from './modules/user/user.module';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
    imports: [
        /* 通用模块相关 start */
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) =>
                configService.typeOrmConfig,
            inject: [ConfigService],
        }),
        RabbitmqModule.registerAsync({
            useFactory: (configService: ConfigService) =>
                configService.amqpConfig,
            inject: [ConfigService],
        }),
        ScheduleModule.forRoot(),
        /* 通用模块相关 end */
        /* 任务调度相关 start */
        RSSModule,
        ChannelModule,
        TasksModule,
        /* 任务调度相关 end */
        /* 后台管理相关  start */
        AuthModule,
        UserModule,
        SourceModule,
        MathModule,
        /* 后台管理相关  end */
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(contextMiddleware).forRoutes('*');
    }
}
