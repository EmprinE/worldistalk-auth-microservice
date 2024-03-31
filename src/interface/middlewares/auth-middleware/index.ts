import { ok, unauthorized, tryCatch } from '@src/interface/helpers';
import { BuildAuthMiddleWare } from './protocols';

const buildAuthMiddleware: BuildAuthMiddleWare =
  ({ loadAccountByToken }) =>
  async (httpRequest) => {
    const header = httpRequest.headers?.cookie;
    if (header) {
      const accessToken = JSON.parse(header.split('=')[1]).accessToken;
      const account = await loadAccountByToken(accessToken);
      if (account) {
        return ok({ accountId: account.id });
      }
    }
    return unauthorized();
  };

export const authMiddleware = tryCatch(buildAuthMiddleware);
