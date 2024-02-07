import { AbstractControl, ValidationErrors } from '@angular/forms'

export class ValidacionesInputs {

    static regexpassword(control: AbstractControl): ValidationErrors | null {
        let password: string = control.value

        const regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/

        if (regexpassword.test(password))
            return null
        else
            return { regexpassword: true }
    }

    static regexemail(control: AbstractControl): ValidationErrors | null {
        let email: string = control.value

        const regexcorreo = /^[a-zA-Z0-9À-ÿ\u00f1\u00d1]{1,30}@gmail\.com$/
        const regexcorreo1 = /^[a-zA-Z0-9À-ÿ\u00f1\u00d1]{1,30}@hotmail\.com$/
        const regexcorreo2 = /^[a-zA-Z0-9À-ÿ\u00f1\u00d1]{1,30}@yahoo\.es$/

        if (regexcorreo.test(email) || regexcorreo1.test(email) || regexcorreo2.test(email))
            return null
        else
            return { regexemail: true }
    }

    static onlywords(control: AbstractControl): ValidationErrors | null {
        let name_sur: string = control.value

        const regexstring = /^[a-zA-Z\sÀ-ÿ\u00f1\u00d1]*$/

        if (regexstring.test(name_sur))
            return null
        else
            return { onlywords: true }
    }
}
