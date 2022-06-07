import { Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { useAuth } from "../../providers/auth"
import { useOrders } from "../../providers/orders"
import { Input } from "../Input"
import StyledForm from "./style"
export const Form = () =>{
  const { register, handleSubmit } = useForm()
  const history = useHistory()
  const { access } = useAuth()
  const {updateOrders} = useOrders()
  
  const redirect = async () =>{
    await updateOrders()
    history.push("/profile")
  }
  const onSubmit = (data) =>{
    access(data, "login",redirect)
  }
    return(
        <StyledForm onSubmit={handleSubmit(onSubmit)}>               
          <Input
            name="email"
            label="Email"
            register={register}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            register={register}
          />
        <Button
          variant="contained" 
          size="large"
          type="submit"
          >
            LOGIN
        </Button>
        <p>Não possui conta?<span onClick={()=>history.push(`/signup`)}> Registre-se</span></p>
        </StyledForm>
    )
}
