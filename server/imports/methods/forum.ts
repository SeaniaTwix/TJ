import { ForumSetting } from 'imports/models/forum';
import { Forums } from 'imports/collections/forums';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { MeteorObservable } from 'meteor-rxjs';

Meteor.methods({
  'forum.new': (subject: string, category: string, setting?: ForumSetting) => {

    if (setting === undefined || setting === null) {
      setting = {
        managers: new Array(),
        read: true,
        write: true,
        requirePermission: { criteria: 'user' }
      };
    }

    const _id = new Mongo.ObjectID();

    Forums.insert({
      '_id': _id,
      'subject': subject,
      'createdAt': new Date(),
      'setting': setting,
      'category': category
    });

    return _id;
  },

  'forum.remove': (forum: Mongo.ObjectID) => {
    Forums.remove({
      '_id': forum
    });

    Meteor.call('thread.remove.forum-removed', forum, (err, res) => {

    });
  },

  'forum.exists': (forum: Mongo.ObjectID) => {
    let results = Forums.find({ _id: { $exists: true } });

    return results.fetch().length > 0;
  }
});