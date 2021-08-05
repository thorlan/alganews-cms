import { useEffect } from "react";
import { useParams, useLocation } from "react-router";

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export default function UserView(){

    const params = useParams< {userId: string}>();
    const query = useQuery();

    useEffect(() => {

        console.log(query.get('teste'));
    }, [])

    return <div>
        <h1>Usuário - { params.userId }</h1>
    </div>
}