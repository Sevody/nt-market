declare namespace API {
  export interface AbstractRO {
    code: number,
    msg: string,
  }

  export interface PageRO {
    success: boolean,
    total: number,
    data: any,
  }

  export interface User {
    id: string;
    role: 'USER' | 'ADMIN',
    username: string,
    createdAt: string,
    updatedAt: string,
    realName?: string,
    mobile?: string,
    email?: string,
    avatar?: string,
  }

  export interface CurrentUser extends AbstractRO {
    data: User,
  }

  export interface LoginStateType extends AbstractRO {
    data: {
      token: string,
      user: User,
    } | null
  }

  export interface NoticeIconData {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  }
}
