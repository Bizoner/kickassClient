import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import { ApiHandlerService } from '../api-handler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:any;
  profileImg:any;
  constructor(public router: Router,public localStorage: LocalStorageService,public apiHandler: ApiHandlerService) { }

  ngOnInit() {
    var t = this;
    if (!this.name || !this.profileImg) {
      this.apiHandler.apiCallGet('getUserById/' + this.localStorage.get('uid'), function (data) {
        var res = JSON.parse(data._body);
        t.localStorage.set('name',res.data.firstName+' '+res.data.lastName);
        t.localStorage.set('image',res.data.profileImg);
        t.name = res.data.firstName+res.data.lastName;
        t.profileImg = res.data.profileImg;
      });

    }
  }

}
