import { SourceType } from '../../../common/constants/source-type';
import { PageOptionsDto } from '../../../common/dto/PageOptionsDto';
import { RSSSourceDto } from './RSSSourceDto';

export class RSSSourcesPageOptionsDto extends PageOptionsDto<RSSSourceDto> {
    name?: string;
    type?: SourceType;
}
