import type { ResponseInterceptor } from 'umi-request';

export const successInterceptor: ResponseInterceptor = async function setSuccess(response) {
  const res = await response.clone().json()
  res.success = res.code === 200;
  return res;
};
