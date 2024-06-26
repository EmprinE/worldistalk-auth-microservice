import { Router } from 'express';
import { adaptRoute } from '@src/main/adapters';
import {
  makeSignupController,
  makeForgotPasswordController,
  makeMeController,
  makeResetPasswordController,
  makeSignInController,
  makeSignoutController,
} from '@src/main/factories/controllers';
import { auth } from '@src/main/config/auth';

export default (router: Router): void => {
  router.get('/', (req, res) => {
    console.log('Server is live');
  });
  router.post('/signup', adaptRoute(makeSignupController()));
  router.post('/signin', adaptRoute(makeSignInController()));
  router.get('/me', auth, adaptRoute(makeMeController()));
  router.patch('/forgot', adaptRoute(makeForgotPasswordController()));
  router.patch('/reset-password', adaptRoute(makeResetPasswordController()));
  router.delete('/signout', auth, adaptRoute(makeSignoutController()));
};
