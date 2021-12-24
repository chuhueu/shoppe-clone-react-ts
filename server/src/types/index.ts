import { ObjectId } from "mongoose";

export interface IMongoDBUser {
  _id?: ObjectId;
  username?: string;
  email?: string;
  password?: string;
  googleID?: string;
  facebookID?: string;
  appleID?: string;
  avatar?: string;
}
