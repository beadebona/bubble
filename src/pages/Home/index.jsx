import Display from "../../components/Display";
import {Header} from "../../components/Header";
import { Main } from "../../components/Main/style";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useCatalogue} from "../../providers/catalogue";

export const Home = () => {
    const { filterInput} = useCatalogue();
    
    return (
        <Main>
        <Header>
            <IconButton className="searchBtn" color="primary" aria-label="cart" >
                <input
                
                onChange={(evt) =>filterInput(evt.target.value.toLowerCase())}
                />
                <SearchIcon/>
            </IconButton> 
        </Header>
        <Display/>
        </Main>
    )
}
