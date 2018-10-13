import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user =  localStorage.getItem('currentUser');
    console.log(this.user);
  }

}
