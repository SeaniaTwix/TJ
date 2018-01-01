import { Forums } from 'imports/collections/forums';
import { MeteorObservable, ObservableCursor } from 'meteor-rxjs';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Forum } from 'imports/models/forum';

@Component({
  selector: 'manage-forum',
  templateUrl: 'manage-forum.html'
})
export class ManageForumComponent implements OnInit {
  forumsCollection: ObservableCursor<Forum>;
  forumsSubscription: Subscription;

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.forumsSubscription = MeteorObservable.subscribe('db.forums').subscribe(() => {
      this.forumsCollection = Forums.find({});
    });
  }
}