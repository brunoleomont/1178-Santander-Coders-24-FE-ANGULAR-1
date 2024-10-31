import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/user';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './formulario-reactive-forms.component.html',
  styleUrl: './formulario-reactive-forms.component.css'
})
export class FormularioReactiveFormsComponent {
  countries = ['US', 'BR', 'ES'];
  user = new User('User 1', 'user@example.com', this.countries[1]);
  form!: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required]),
      country: new FormControl(null),
    });
    // Precisa preencher todos os campos do form control
    this.form.setValue({
      username: this.user.username,
      email: this.user.email,
      country: this.user.country,
    });
    // Preencher somente os que quiser do form control
    // this.form.patchValue({
    //   username: this.user.username,
    //   // email: this.user.email,
    //   country: this.user.country
    // })
  }
  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }
  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }

}
