import './boilerplate.polyfill';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RabbitmqModule } from './amqp';
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
        AuthModule,
        UserModule,
        SourceModule,
        MathModule,
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) =>
                configService.typeOrmConfig,
            inject: [ConfigService],
        }),
        ScheduleModule.forRoot(),
        TasksModule,
        RabbitmqModule.registerAsync({
            useFactory: (configService: ConfigService) =>
                configService.amqpConfig,
            inject: [ConfigService],
        }),
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(contextMiddleware).forRoutes('*');
    }
}
