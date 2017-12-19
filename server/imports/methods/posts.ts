import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { User } from 'imports/models/user';

import * as hat from 'hat/index.js';
import { Threads } from 'imports/collections/threads';

Meteor.methods({
  'post.new': (thread: Mongo.ObjectID, title: string, content: string, author: Mongo.ObjectID) => {
    Threads.update({
      '_id': thread
    }, {
      $push: {
        children: {
          '_id': new Mongo.ObjectID(),
          'title': title,
          'content': content,
          'createdAt': new Date(),
          'author': author
        }
      }
    });
  },
  'post.remove': (post: Mongo.ObjectID) => {
    Threads.update({
      children: {
        '_id': post
      }
    }, {
      
    });
  }
});