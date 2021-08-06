import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {

    return <nav>
        <List>
            <Item><Link to="/">Home</Link></Item>
            <Item><Link to="/Contato">Contato</Link></Item>
        </List>
    </nav>
}

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
`

const Item = styled.li`
    text-transform: lowercase;
    font-size: 18px;

    a {
        text-decoration: none;
        color: #274060;
    }
`;
