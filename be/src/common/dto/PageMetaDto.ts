import { ApiProperty } from '@nestjs/swagger';

export interface IPageMetaDtoParameters {
    pageOptionsDto: {
        current: number;
        pageSize: number;
    };
    total: number;
}

export class PageMetaDto {
    @ApiProperty()
    readonly current: number;

    @ApiProperty()
    readonly pageSize: number;

    @ApiProperty()
    readonly total: number;

    constructor({ pageOptionsDto, total }: IPageMetaDtoParameters) {
        this.current = pageOptionsDto.current;
        this.pageSize = pageOptionsDto.pageSize;
        this.total = total;
    }
}
