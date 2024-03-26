import { BuildDbAddAccount } from './protocols';

export const dbAddAccount: BuildDbAddAccount =
  ({ passwordHash, addAccountRepository }) =>
  async ({ email, firstName, lastName, password, age, creator, profilePicture }) => {
    const hashedPassword = await passwordHash(password);
    const result = await addAccountRepository({
      email,
      firstName,
      lastName,
      password: hashedPassword,
      age,
      creator,
      profilePicture
    });
    return result;
  };
