import type { RequestConfig } from 'umi';

import * as requestInterceptors from './requestInterceptors';
import * as responseAdaptor from './responseAdaptor';
import * as responseInterceptors from './responseInterceptors';

export const config: RequestConfig = {
  headers: {},
  errorConfig: {
    adaptor: responseAdaptor.errorConfigAdaptor,
  },
  requestInterceptors: [requestInterceptors.tokenInterceptor],
  responseInterceptors: [responseInterceptors.successInterceptor],
};
