import { Injectable } from '@nestjs/common';

import { ChannelUserEntity } from './channel-user.entity';
import { ChannelUserRepository } from './channel-user.repository';
import { ChannelUserOptionsDto } from './dto/ChannelUserOptionsDto';

@Injectable()
export class ChannelService {
    constructor(public readonly channelUserRepository: ChannelUserRepository) {}

    async getAllChannelUsers(
        searchOptionsDto: ChannelUserOptionsDto,
    ): Promise<ChannelUserEntity[]> {
        const queryBuilder = this.channelUserRepository.createQueryBuilder(
            'channel_user',
        );
        const qb = queryBuilder.where('1 = 1');
        const { locale } = searchOptionsDto;
        if (locale) {
            qb.andWhere('channel_user.locale = :locale', { locale });
        }
        return qb.getMany();
    }
}
