import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";

import { MainPageComponent } from './main-page/main-page.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { postsReducer } from './posts/store/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './posts/store/posts.effects';
import { environment } from '../environments/environment';
import {todosReducer} from "./todos/store/todo.reducer";
import {TodosEffects} from "./todos/store/todo.effect";
import {commentsReducer} from "./comments/store/comments.reducer";
import {CommentsEffects} from "./comments/store/comments.effect";
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './core/custom-route-serializer';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      posts: postsReducer,
      todos: todosReducer,
      comments: commentsReducer,
      router: routerReducer,

     }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([PostsEffects, TodosEffects, CommentsEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
