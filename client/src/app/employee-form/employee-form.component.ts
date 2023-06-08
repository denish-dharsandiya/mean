import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styles: [
    `.employee-form {
      max-width: 560px;
      margin-left: auto;
      margin-right: auto;
    }`
  ]
})
export class EmployeeFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<Employee> = new BehaviorSubject({});
  
  @Input()
  mode: 'add' | 'edit' = 'add';
  
  @Output()
  formValuesChanged = new EventEmitter<Employee>();

  @Output()
  formSubmitted = new EventEmitter<Employee>();

  employeeForm: FormGroup = new FormGroup({});
  isEditMode = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  //get _id() { return this.employeeForm.get('_id')!; }
  get name() { return this.employeeForm.get('name')!; }
  get position() { return this.employeeForm.get('position')!; }
  get level() { return this.employeeForm.get('level')!; }

  ngOnInit() {
    this.initialState.subscribe(employee => {
      this.employeeForm = this.fb.group({
        name: [ employee.name, [Validators.required, Validators.minLength(3) ] ],
        position: [ employee.position, [ Validators.required, Validators.minLength(5) ] ],
        level: [ employee.level, [Validators.required] ]
      });
    });

    this.employeeForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  submitForm() {
    this.formSubmitted.emit(this.employeeForm.value);
  }

  cancelForm() {
    this.router.navigate(['/employees']);
  }
}
