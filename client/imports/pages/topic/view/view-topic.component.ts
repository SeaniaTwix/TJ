import { ViewThreadComponent } from './../../../components/thread/view/view-thread.component';
import { ViewPostComponent } from './../../../components/posts/view/view-post.component';
import { ForumLexer } from 'imports/lib/syntax/lexer';
import { Post } from 'imports/models/post';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { ElementRef, ViewChild } from '@angular/core';
import { MeteorObservable } from 'meteor-rxjs';
import { Threads } from 'imports/collections/threads';

@Component({
  selector: 'page-view-topic',
  templateUrl: 'view-topic.html'
})
export class ViewTopicPage {

  thread: ViewPostComponent;
  lexer: ForumLexer;

  @ViewChild('thread') thd;

  constructor() {
    this.lexer = new ForumLexer();
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    console.log((this.thd as ViewThreadComponent));
  }
}