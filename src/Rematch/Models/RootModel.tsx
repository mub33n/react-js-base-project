import User from './User';

export interface RootModel {
  User: typeof User;
}

export const models: RootModel = { User };
