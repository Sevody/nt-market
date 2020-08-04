import type { RequestInterceptor } from 'umi-request';

import { token } from '@/utils/token';

export const tokenInterceptor: RequestInterceptor = function setAuthorization (url, options) {
  const headers: any = {...options.headers};
  headers.Authorization = `Bearer ${token.token}`;
  return { url, options: { ...options, headers } };
};
