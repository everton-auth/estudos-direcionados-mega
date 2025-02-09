import { FormControl, FormGroup, Validators } from "@angular/forms";

export class FormValidations{
    
    
    static cepValidator(control: FormControl){
        const cep = control.value;
        if(cep && cep !== ''){
            const validacep = /^[0-9]{8}$/;
            return validacep.test(cep) ? null : { cepInvalido: true }
        }
        return null;
    }

    static equalsTo(otherField: string){
        const validator = (formControl: FormControl) =>{
            if(otherField == null){
                throw new Error("É necessário informar um campo.");
            }
            if(!formControl.root || !(<FormGroup>formControl.root).controls){
                return null
            }
            const field = (<FormGroup>formControl.root).get(otherField);

            if(!field) throw new Error("É nesessário infomrar um campo válido.");
            
            if(field.value !== formControl.value) return{ equalsTo: otherField}
        }
        return validator
    }
    static getErrorMsg(fieldName: string, validatorName: string, validatorValue? : any){
        const config ={
          'required' : `${fieldName} é obrigatório.`,
          'minlength' : `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
          'maxlength' : `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
          'cepinvalido' : `CEP inválido.`,
        }
        return config[validatorName];
    }
}