import { FactoryProvider } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import { AmqpConnectionManagerOptions } from 'amqp-connection-manager';
import { Options } from 'amqplib';

export interface IRabbitmqConnectionOption {
    name?: string;
    urls: string[];
    connectTimeoutInSeconds: number;
    options?: AmqpConnectionManagerOptions;
}

export interface IRabbitmqAsyncConnectionOption
    extends Pick<ModuleMetadata, 'imports'> {
    name?: string;
    inject?: FactoryProvider['inject'];
    useFactory: (
        // eslint-disable-next-line @typescript-eslint/tslint/config
        ...args: any[]
    ) => IRabbitmqConnectionOption | Promise<IRabbitmqConnectionOption>;
}

export interface IExchangeOption {
    name: string;
    type?: string;
    options?: Options.AssertExchange;
}

export interface IQueueOption {
    name?: string;
    options?: Options.AssertQueue;
}
