import { Meteor } from 'meteor/meteor';
import { Component } from '@angular/core';
import { ForumSetting } from 'imports/models/forum';

@Component({
  selector: 'new-forum',
  templateUrl: 'new-forum.html'
})
export class NewForumComponent {
  subject: string;
  category: string;
  access: Array<string>;
  criteria: 'user' | 'admin';

  makeNewForum() {
    const subject = this.subject;
    const category = this.category;
    const settings: ForumSetting = {
      managers: new Array(),
      read: this.access.find((val) => {return val === 'read'}) === 'read',
      write: this.access.find((val) => {return val === 'write'}) === 'write',
      requirePermission: { criteria: this.criteria }
    }

    // subject: string, category: string, setting?: ForumSetting
    Meteor.call('forum.new', subject, category, settings);
  }

  test() {
    console.log(this.access);
  }
}