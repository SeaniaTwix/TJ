import { Mongo } from 'meteor/mongo'

export interface Post {
  _id?: Mongo.ObjectID;
  title: string;
  content: string;
  createdAt: Date;
  author: Mongo.ObjectID;
  view: number;
}