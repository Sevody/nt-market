import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { LanguageType } from '../../../../common/constants/language-type';

export class RSSChannelAddDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    sourceId: number;

    @IsString()
    @ApiProperty()
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    atomLink: string;

    @ApiProperty()
    description: string;

    @ApiPropertyOptional({ enum: LanguageType })
    @ApiProperty()
    @IsEnum(LanguageType)
    language: LanguageType;
}
