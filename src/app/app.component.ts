import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  state,
  group,
} from '@angular/animations';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('messageState', [
      // transition('void => *', [
      //   style({ height: 0, margin: 0, padding: 0, opacity: 0 }),
      //   animate(
      //     500,
      //     style({ height: '*', margin: '*', padding: '*', opacity: 1 })
      //   ),
      // ]),
      // transition('* => void', [
      //   style({ height: '*', margin: '*', padding: '*', opacity: 1 }),
      //   animate(500, style({ height: 0, margin: 0, padding: 0, opacity: 0 })),
      // ]),

      // transition(':enter', [
      //   style({ transform: 'translateY(-100%)' }),
      //   animate('200ms ease-in', style({ transform: 'translateY(0%)' })),
      // ]),
      // transition(':leave', [
      //   animate('200ms ease-in', style({ transform: 'translateY(-100%)' })),
      // ]),

      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('.6s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent {
  orderForm: FormGroup;
  items: FormArray;
  visible: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([]),
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: '',
    });
  }

  addItem(): void {
    this.visible = true;
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  remove(index: number) {
    this.visible = false;
    this.items.removeAt(index);
  }
}
