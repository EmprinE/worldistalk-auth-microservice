import { badRequest, unauthorized, tryCatch, okCookie } from '@src/interface/helpers';
import { BuildSigninController } from './protocols';

const buildSigninController: BuildSigninController =
  ({ validation, authentication }) =>
  async (httpRequest) => {
    const error = validation(httpRequest.body);
    if (error) {
      return badRequest(error);
    }
    const { email, password } = httpRequest.body;
    const accessToken = await authentication({ email, password });
    if (!accessToken) {
      return unauthorized();
    }
    return okCookie({ accessToken });
  };

export const signinController = tryCatch(buildSigninController);
