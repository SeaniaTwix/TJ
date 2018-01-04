import { Mongo } from 'meteor/mongo'
import { TokenWithStr } from 'typed-lexer/dist/typed-lexer';

export interface Post {
  _id?: Mongo.ObjectID;
  title: string;
  content: string;
  contentData: Array<TokenWithStr<any>>;
  createdAt: Date;
  author: Mongo.ObjectID;
  view: number;
}