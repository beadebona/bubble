import { Redirect } from "react-router-dom"
import {Header} from "../../components/Header"
import { Main } from "../../components/Main/style"
import { ProfileCard } from "../../components/ProfileCard"
import { useAuth } from "../../providers/auth"

export const Profile = () =>{
    const { authenticated } = useAuth()

    if(!authenticated){
        <Redirect to="/login"/>
    }

    return(
        <Main>
            <Header/>
            <ProfileCard/>
        </Main>
    )
}