import { NewForumPage } from './../pages/admin/panel/new-forum/new-forum.component';
import { ManageForumPage } from './../pages/admin/panel/manage-forum/manage-forum.component';
import { ViewManagePanelPage } from './../pages/admin/panel/view/view-manage-panel.component';
import { ViewMessagePage } from './../pages/user/message/view/view-message.component';
import { PostboxPage } from 'client/imports/pages/user/postbox/postbox.component';

import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { HomeComponent } from '../pages/home/home.component';

import { Routes } from '@angular/router';
import { ViewTopicPage } from 'client/imports/pages/topic/view/view-topic.component';
import { AuthPage } from 'client/imports/pages/user/auth/auth.component';
import { NewTopicPage } from '../pages/topic/new/new-topic.component';
import { ViewForumPage } from 'client/imports/pages/forum/view/view-forum.component';
import { NewMessagePage } from 'client/imports/pages/user/message/new/new-message.component';

export let RouteSetting: Routes = [
  // Home Page
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'forum/view/:forum_id',
    redirectTo: '/forum/view/:forum_id/1',
    pathMatch: 'full'
  },
  {
    path: 'forum/view/:forum_id/:page',
    component: ViewForumPage
  },
  {
    path: 'topic/new/:forum_id',
    component: NewTopicPage
  },
  {
    path: 'topic/view/:topic_id/:page',
    component: ViewTopicPage
  },

  // auth pages
  {
    path: 'auth',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth/:page',
    component: AuthPage
  },

  // postbox

  {
    path: 'user/postbox',
    redirectTo: '/user/postbox/list',
    pathMatch: 'full'
  },
  {
    path: 'user/postbox/list',
    component: PostboxPage
  },
  {
    path: 'user/postbox/new',
    component: NewMessagePage
  },
  {
    path: 'user/postbox/view/:id',
    component: ViewMessagePage
  },

  // admin panel
  {
    path: 'admin/manage/',
    component: ViewManagePanelPage
  },
  {
    path: 'admin/forum/new',
    component: NewForumPage
  },
  {
    path: 'admin/forum/manage',
    component: ManageForumPage
  },

  // 404 Page
  {
    path: '**',
    component: PageNotFoundComponent
  }
]