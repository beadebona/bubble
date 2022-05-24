import { Redirect } from "react-router-dom"
import {Form} from "../../components/Form"
import {Header} from "../../components/Header"
import { Main } from "../../components/Main/style"
import { useAuth } from "../../providers/auth"

export const Login = ()=>{
    const { authenticated }= useAuth()
    if(authenticated){
        return <Redirect to="/profile"/>
    }

    return(
        <Main>
            <Header/>
            <Form/>
        </Main>
    )
}

