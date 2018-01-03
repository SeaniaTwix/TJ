import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  ButtonModule,
  MenubarModule,
  InputTextareaModule,
  SplitButtonModule,
  InputTextModule,
  PasswordModule,
  ChipsModule,
  FileUploadModule,
  GrowlModule,
  AutoCompleteModule
} from 'primeng/primeng';

import { AppComponent } from './app.component';

// Pages
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { HomeComponent } from '../pages/home/home.component';
import { ViewTopicPage } from '../pages/topic/view/view-topic.component';
import { AuthPage } from '../pages/user/auth/auth.component';
import { NewTopicPage } from '../pages/topic/new/new-topic.component';
import { ViewForumPage } from '../pages/forum/view/view-forum.component';
import { ViewMessagePage } from '../pages/user/message/view/view-message.component';
import { PostboxPage } from '../pages/user/postbox/postbox.component';
import { NewMessagePage } from '../pages/user/message/new/new-message.component';

// Components
import { ViewPostComponent } from '../components/posts/view/view-post.component';
import { NewPostComponent } from './../components/posts/new/new-post.component';
import { NewThreadComponent } from '../components/thread/new/new-thread.component';
import { LoginBoxComponent } from '../components/login-box/view/login-box.component';
import { ViewThreadComponent } from '../components/thread/view/view-thread.component';
import { ViewTopicListComponent } from '../components/topics/list-view/view-topics-list.component';
import { ViewTopicComponent } from '../components/topics/list-element/view-topic.component';
import { ViewMenubarComponent } from '../components/menubar/view/view-menubar.component';
import { MessageBoxComponent } from './../components/message/message-box/message-box.component';
import { BubbleComponent } from './../components/message/bubble/bubble.component';
import { ViewPostboxComponent } from '../components/message/postbox/view/view-postbox.component';
import { NewMessageComponent } from '../components/message/postbox/new/new-message.component';
import { NotifierComponent } from '../components/notification/notifier/notifier.component';
import { ViewEditorComponent } from '../components/editor/view/view-editor.component';
import { SuggestionBoxComponent } from '../components/editor/suggestion/suggestion-box.component';
import { ListMessagesComponent } from '../components/message/postbox/list/list-messages.component';

// Settings
import { RouteSetting } from './routes';

// Providers
import { AuthHelper } from 'imports/util/auth/auth-helper';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(RouteSetting),
    ButtonModule,
    MenubarModule,
    InputTextareaModule,
    SplitButtonModule,
    InputTextModule,
    PasswordModule,
    ChipsModule,
    FileUploadModule,
    GrowlModule,
    AutoCompleteModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ViewPostComponent,
    NewPostComponent,
    NewThreadComponent,
    ViewThreadComponent,
    ViewTopicPage,
    AuthPage,
    LoginBoxComponent,
    PageNotFoundComponent,
    ViewTopicListComponent,
    ViewTopicComponent,
    NewTopicPage,
    ViewForumPage,
    ViewMenubarComponent,
    BubbleComponent,
    MessageBoxComponent,
    ViewMessagePage,
    PostboxPage,
    ViewPostboxComponent,
    NewMessageComponent,
    NewMessagePage,
    ListMessagesComponent,
    NotifierComponent,
    ViewEditorComponent,
    SuggestionBoxComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    AuthHelper
  ]
})
export class AppModule { }
