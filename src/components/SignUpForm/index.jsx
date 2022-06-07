import { Form } from "./style";
import axios from "axios";
import { useState } from "react";
import { Input } from "../Input"
import SignpostIcon from '@mui/icons-material/Signpost';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCatalogue } from "../../providers/catalogue";
import { useAuth } from "../../providers/auth";
import { useHistory } from "react-router-dom";
import { useOrders } from "../../providers/orders";

export const SignUpForm = () =>{

  const history = useHistory();

    const {setValidate} = useCatalogue();
    const [street, setstreet] = useState("")
    const [district, setdistrict] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")

    const {access } = useAuth()
    const {updateOrders} = useOrders()

 
    const setInfostreet = (cep) =>{
        if(cep.length === 8 || cep.length === 9 ){
            axios
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => {
              setValidate(true)
              setstreet(response.data.logradouro)
              setdistrict(response.data.bairro)
              setcity(response.data.localidade)
              setstate(response.data.uf)
            });
        }   
    }
    const schema =yup.object().shape({
        email: yup.string()
          .required("Email obrigatório")
          .email("Email inválido") ,
        name: yup.string()
          .required("Nome obrigatório") ,
        password: yup.string()
          .required("Senha obrigatória"),
          //.matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})", "A senha deve conter, pelo menos: Uma letra maiúscula, Uma letra minúscula, Um número e Um caractere especial"),
        passwordConfirm: yup.string()
          .required('Confirme a senha')
          .oneOf([yup.ref('password')], 'As senhas não estão iguais'),
        number: yup.string().required()
    })

    const {
      register, 
      handleSubmit, 
      // formState:{errors}
    } = useForm({
        resolver: yupResolver(schema)
    })
    const redirect = async () =>{
      await updateOrders()
      history.push("/profile")
    }
    const submit = (data) => {
      const user = {
        email: data.email,
        password: data.password,
        name: data.name,
        cep: data.cep,
        street: street,
        number: data.number,
        district: district,
        city: city,
        state: state,
      }
      access(user, "register",redirect)
    }
    return (
        <Form onSubmit={handleSubmit(submit)}>
            <Input
            name="name" 
            label="Nome"
            register={register}
            />
            <Input 
            name="email"
            label="Email"
            register={register}
            /> 

            <Input 
            name="cep" 
            label="CEP"
            maxLength={9}
            icon={PersonPinCircleOutlinedIcon}
            callback= {setInfostreet}
            register={register}
            />
            <section>
               <Input 
                name="street" 
                label="Endereço"
                icon={SignpostIcon}
                value = {street}
                callback= {setstreet}
                autoComplete = "true"
                register={register}
                />
                <Input 
                name="number" 
                label="Número"
                register={register}
                /> 
            </section>
            <Input 
            name="district" 
            label="Bairro"
            icon={SignpostIcon}
            value = {district}
            callback={setdistrict}
            autoComplete = "true"
            register={register}
            />
            <section>
            <Input 
            name="city" 
            label="Cidade"
            icon={SignpostIcon}
            value = {city}
            autoComplete = "true"
            register={register}
            />
            <Input 
            name="state" 
            label="Estado"
            icon={SignpostIcon}
            value = {state}
            autoComplete = "true"
            register={register}
            />
            </section>
            <Input 
            name="password"
            label="Senha"
            type="password"
            register={register}
            />
            <Input 
            name="passwordConfirm"
            label="Senha"
            type="password"
            register={register}
            />
            <Button type="submit" variant="contained">Cadastrar</Button>
            <p>Já possui conta? <span onClick={()=>history.push(`/login`)}>Login</span></p>
        </Form>
    )
}