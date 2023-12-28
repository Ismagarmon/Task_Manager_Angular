import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidacionEmail {

    static regexemail(control: AbstractControl): ValidationErrors | null {
        let email: string = control.value

        const regexcorreo = /^[a-zA-Z0-9]{1,30}@gmail\.com$/g
        const regexcorreo1 = /^[a-zA-Z0-9]{1,30}@hotmail\.com$/g
        const regexcorreo2 = /^[a-zA-Z0-9]{1,30}@yahoo\.es$/g

        if (regexcorreo.test(email) || regexcorreo1.test(email) || regexcorreo2.test(email))
            return { regexemail: true }
        else
            return null
    }
}
