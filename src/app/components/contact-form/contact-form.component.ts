import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public readonly name = 'name';
  public readonly email = 'email';
  public readonly message = 'message';

  public form: FormGroup;

  constructor() {
  }

  ngOnInit() {

    this.form = new FormGroup({});
  }

}
