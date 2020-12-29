import { LanguageType } from '../../../../common/constants/language-type';
import { PageOptionsDto } from '../../../../common/dto/PageOptionsDto';
import { RSSChannelDto } from './RSSChannelDto';

export class RSSChannelsPageOptionsDto extends PageOptionsDto<RSSChannelDto> {
    sourceId?: number;
    title?: string;
    atomLink?: string;
    language?: LanguageType;
}
