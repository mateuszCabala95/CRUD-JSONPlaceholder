import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {IUser} from '../IUser.model';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private user: UsersService,
  ) {
  }

  ngOnInit(): void {
  }





  newUserNameForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  newUserAddressForm: FormGroup = new FormGroup({
    street: new FormControl(''),
    suite: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl(''),
  })


  newUserCompanyForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    catchPhrase: new FormControl(''),
    bs: new FormControl(''),
  })


  onSubmitUser() {
   const newUserData: Partial<IUser> = {
      name: this.newUserNameForm.value.name,
      username: this.newUserNameForm.value.username,
      email: this.newUserNameForm.value.email,

      address: {
        street: this.newUserAddressForm.value.street,
        suite: this.newUserAddressForm.value.suite,
        city: this.newUserAddressForm.value.city,
        zipcode: this.newUserAddressForm.value.zipcode,
      },

      company: {
        name:this.newUserCompanyForm.value.name,
        catchPhrase: this.newUserCompanyForm.value.catchPhrase,
        bs: this.newUserCompanyForm.value.bs,
      }
    };

   this.user.addUser(newUserData).subscribe(data =>  {
     console.log(data);
   }  )


  }




}
