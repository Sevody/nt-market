export enum SourceType {
  MANUAL = 'MANUAL',
  SPIDER = 'SPIDER',
  WECHAT = 'WECHAT',
  LINE = 'LINE',
  TELEGRAM = 'TELEGRAM',
}

export interface TableListItem {
  id: string;
  name: string;
  type: SourceType;
  updatedAt: Date;
  createdAt: Date;
}

export interface TableListItemParams {
  id?: string;
  name: string;
  type: SourceType;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListParams {
  name?: string,
  type?: SourceType,
  updatedAt?: Date,
  pageSize?: number;
  current?: number;
  filter?: { [key: string]: any };
  sorter?: { [key: string]: any };
}
