import { SourceType } from '../../../common/constants/source-type';
import { PageOptionsDto } from '../../../common/dto/PageOptionsDto';
import { SourceDto } from './SourceDto';

export class SourcesPageOptionsDto extends PageOptionsDto<SourceDto> {
    name?: string;
    type?: SourceType;
}
