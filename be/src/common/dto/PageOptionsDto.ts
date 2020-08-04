import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

import { AbstractSearchDto } from './AbstractSearchDto';

export class PageOptionsDto<T> extends AbstractSearchDto<T> {
    @ApiPropertyOptional({
        minimum: 1,
        default: 1,
    })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @IsOptional()
    readonly current: number = 1;

    @ApiPropertyOptional({
        minimum: 1,
        maximum: 50,
        default: 10,
    })
    @Type(() => Number)
    @IsInt()
    @Min(10)
    @Max(50)
    @IsOptional()
    readonly pageSize: number = 10;

    get skip(): number {
        return (this.current - 1) * this.pageSize;
    }
}
