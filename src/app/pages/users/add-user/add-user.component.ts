import {Component, OnInit} from '@angular/core';
import {NewUserService} from '../new-user.service';
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
    private newUserService: NewUserService,
    private user: UsersService,
  ) {
  }

  onAddUser() {
    this.user.addUser(this.newUserData).subscribe(data => {
      const newUser$ = () => {
        this.newUserService.addUser(data);
        console.log(data);
      };
      newUser$()
    });
  }



  newUserData: Partial<IUser> = {
    name: '',
    username: '',
    email: '',

    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },

    company: {
      name:'',
      catchPhrase: '',
      bs: '',
    }

  };


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

  ngOnInit(): void {
  }





}
