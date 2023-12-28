import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidacionPassword {

    static regexpassword(control: AbstractControl): ValidationErrors | null {
        let password: string = control.value

        const regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/g

        if (regexpassword.test(password))
            return { regexpassword: true }
        else
            return null
    }
}
