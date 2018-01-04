import { ForumLexer } from 'imports/lib/syntax/lexer';
import { Component, Input } from '@angular/core';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { Post } from 'imports/models/post';

@Component({
  selector: 'view-post',
  templateUrl: 'view-post.html',
  styleUrls: ['view-post.scss'],
  inputs: ['data']
})
export class ViewPostComponent {
  _id: string;

  @Input() data: Post;

  post: Observable<Post[]>;
  postSubscription: Subscription;

  d = new Array();
  o = new BehaviorSubject(this.d);

  ngOnInit() {
    this.o.subscribe(next => {
      console.log(next);
    });
  }

  render(postData: Post) {
    try {

      let lexed = postData.contentData;

      let result = '';

      lexed.forEach((elem) => {
        if (elem.token === 'ThreadNumber') {
          result += '<a href="#' + elem.str + '">&gt;&gt;' + elem.str + '</a>';
        } else if (elem.token === 'Nickname') {
          result += '<a class="nickname" href="#" onClick="return false;">' + elem.str + '</a>'; 
        } else if (elem.token === 'Character') {
          result += elem.str;
        }
      });

      return result;

    } catch (ex) {

    }
  }
}