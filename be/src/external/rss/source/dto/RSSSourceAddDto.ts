import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RSSSourceAddDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @ApiProperty()
    topic: string;
}
