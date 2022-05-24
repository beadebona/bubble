import { Redirect } from "react-router-dom"
import {Header} from "../../components/Header"
import { Main } from "../../components/Main/style"
import { SignUpForm } from "../../components/SignUpForm"
import { useAuth } from "../../providers/auth"

export const SignUp = () =>{
    const { authenticated }= useAuth()
    if(authenticated){
        return <Redirect to="/profile"/>
    }
    return (
        <Main>
            <Header/>
            <h1>Cadastro</h1>
            <SignUpForm/>
        </Main>
    )
}