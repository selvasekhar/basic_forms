import { Component } from '@angular/core';
import { User } from './user';
import {EnrollmentService} from './enrollment.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-first-project';
  topics = ['Angular', 'type', 'js'];
  topicHasError=true;
  submitted = false;
  errorMsg = '';
  userForm : any

  userModel = new User ('selva', 'selvasekar@hotmail.com', '9841188153', '', 'morning', true)
  
  constructor(private _enrollmentService:EnrollmentService ){}

  validdateTopic(value: string){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false
    }
  }

  onSubmit(userForm: any){
    console.log(userForm);
//     this.submitted=true;
//  this._enrollmentService.enroll(this.userModel)
//  .subscribe(
//     data => console.log('Success' , data),
//     error => this.errorMsg = error.statusText
//  )
  }
}
 