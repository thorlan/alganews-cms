import notFound from '../../assets/not_found.svg';
import Button from "../components/Button/Button";
import styled from "styled-components";
import { useHistory } from "react-router";

export default function NotFound404View(){

    const history = useHistory();

    return <NotFound404Wrapper>
       <span>Oops!</span>
       <h1>Não Encontramos esta página</h1>
       <img src={notFound} alt='Página não encontrada'/>
       <Button 
        variant='primary' 
        label='Ir para a home'
        onClick={() => history.replace('/')}
        />
    </NotFound404Wrapper>
}

const NotFound404Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 32px;

    span {
        font-size: 72px;
    }

    h1 {
        font-size: 18px;
        font-weight: 400;
    }

`;