import { PageOptionsDto } from '../../../common/dto/PageOptionsDto';
import { RSSItemDto } from './RSSItemDto';

export class RSSItemsPageOptionsDto extends PageOptionsDto<RSSItemDto> {
    channelId?: number;
}
