import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { SourceType } from '../../../common/constants/source-type';

export class SourceAddDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @ApiPropertyOptional({ enum: SourceType })
    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(SourceType)
    type: SourceType;
}
