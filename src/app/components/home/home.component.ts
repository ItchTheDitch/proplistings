import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import {FlashMessagesService} from 'angular2-flash-messages';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    public flashMessage:FlashMessagesService
  ) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
