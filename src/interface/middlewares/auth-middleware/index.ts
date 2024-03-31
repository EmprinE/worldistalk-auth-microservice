import { ok, unauthorized, tryCatch } from '@src/interface/helpers';
import { BuildAuthMiddleWare } from './protocols';

const buildAuthMiddleware: BuildAuthMiddleWare =
  ({ loadAccountByToken }) =>
  async (httpRequest) => {
    const cookie = httpRequest.headers?.cookie;
    if (cookie) {
      const accessToken = cookie.split('=')[1];
      const account = await loadAccountByToken(accessToken);
      if (account) {
        return ok({ accountId: account.id });
      }
    }
    return unauthorized();
  };

export const authMiddleware = tryCatch(buildAuthMiddleware);
