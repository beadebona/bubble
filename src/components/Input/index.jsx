import { useState } from "react"
import { useCatalogue } from "../../providers/catalogue"
import {InputStyled} from "./style"

export const Input = ({ icon:Icon, callback, autoComplete,  label, name, register, ...rest }) =>{

    const [isValid, setIsValid] = useState(false)
    const {validate} = useCatalogue();

    const handleChange = (value) =>{
        if(value !== ""){
          setIsValid(true)  
        }
        if(!!callback){
         callback(value)   
        }
        
    }

    return (
        <>
            <InputStyled 
            valid={autoComplete?(validate):(isValid)}
            autoComplete={autoComplete}
            >
            
                <label>{label.toUpperCase()}</label>
                {/* <Icon/> */}
                <input
                {...rest} 
                {...register(name)}
                onChange={(evt) => {handleChange(evt.target.value)}}/>

            </InputStyled>
        </>
    )
}
