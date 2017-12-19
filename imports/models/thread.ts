import { Mongo } from 'meteor/mongo'
import { Post } from 'imports/models/post';

export interface Thread {
  _id?: Mongo.ObjectID;
  author: Mongo.ObjectID;
  tags: Array<string>;
  root: Post;
  children: Array<Post>;
  master: Mongo.ObjectID;
  likes: Array<Mongo.ObjectID>;
}