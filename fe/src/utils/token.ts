import { MAGIC } from '@/utils/constant';

class Token {
  private authToken: string = localStorage.getItem(MAGIC.AuthToken) || '';

  get token() {
    return this.authToken || '';
  }

  set token(token) {
    localStorage.setItem(MAGIC.AuthToken, token || '');
    this.authToken = token || '';
  }

  /** 清除本地关于token的储存 */
  public clear() {
    this.authToken = '';
    localStorage.removeItem(MAGIC.AuthToken);
  }
}

export const token = new Token();
export default token;
