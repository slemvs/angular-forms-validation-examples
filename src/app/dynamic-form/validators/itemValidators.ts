import { ValidatorFn, AbstractControl, FormGroup } from "@angular/forms";

export class ItemValidators {
    static codeValidator: (form: FormGroup, fieldName: string) => ValidatorFn = (form: FormGroup, fieldName: string) => {
        return function (control: AbstractControl) {
            var value = String(form.controls[fieldName].value);
            if (!String(control.value).startsWith(value)) {
                return { 'startsWith': true }
            }
            return null;
        }
    }
}