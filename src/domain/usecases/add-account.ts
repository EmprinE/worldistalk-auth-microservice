import { AccountModel } from '@src/domain/models';

export type AddAccount = (params: AddAccount.Params) => AddAccount.Response;

export namespace AddAccount {
  export type Params = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
    creator: boolean;
    profilePicture: { binData: Buffer };
  };
  export type Response = Promise<AccountModel>;
}
