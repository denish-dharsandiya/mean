import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
export class Constant {
    constructor() {}

    public static validateAllFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({onlySelf: true});
            } else if (control instanceof FormGroup) {
                this.validateAllFields(control);
            }
        });
        this.findInvalidControls(formGroup);
    }

    public static findInvalidControls(form: any) {
        const invalid = [];
        const controls = form.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }
        console.log(invalid);
    }
}
