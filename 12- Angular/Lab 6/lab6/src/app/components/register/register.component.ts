import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userSer: UsersService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumbers: this.formBuilder.array([
        this.formBuilder.control('', Validators.pattern(/^01[0125][0-9]{8}$/)),
      ]),
      address: this.formBuilder.group({
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        street: ['', Validators.required],
      }),
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get fullName() {
    return this.userForm.get('fullName');
  }
  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get mobileNumbers() {
    return this.userForm.get('mobileNumbers') as FormArray;
  }

  addMobileNumber() {
    this.mobileNumbers.push(
      this.formBuilder.control('', Validators.pattern(/^01[0125][0-9]{8}$/))
    );
  }

  removeMobileNumber(index: number) {
    this.mobileNumbers.removeAt(index);
  }

  get city() {
    return this.userForm.get('address.city');
  }
  get postalCode() {
    return this.userForm.get('address.postalCode');
  }
  get street() {
    return this.userForm.get('address.street');
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userSer.addUser(this.userForm.value).subscribe((data) => {
        this.userForm.reset();
        alert('Data has been saved!');
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
