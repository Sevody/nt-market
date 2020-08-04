import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsObject, IsOptional, ValidateNested } from 'class-validator';
import { snakeCase } from 'typeorm/util/StringUtils';

import { Order } from '../../common/constants/order';

export class AbstractSearchDto<T> {
    @ApiPropertyOptional({
        default: {},
    })
    @Transform((value) => {
        // sorter: {"updatedAt":"ascend"} => sorter: {"updated_at":"ASC"}
        const sorterAdp = {};
        const sorters = JSON.parse(value);
        const entries = Object.entries(sorters);
        if (entries.length > 0) {
            entries.map(([k, v]) => {
                sorterAdp[snakeCase(k)] =
                    v === 'ascend' ? Order.ASC : Order.DESC;
                return;
            });
        }
        return sorterAdp;
    })
    @IsOptional()
    @IsObject()
    @ValidateNested()
    sorter: {
        [key in keyof T]?: Order;
    };
}
