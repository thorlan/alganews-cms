import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Default";

export default function ContactView(){
    
    usePageTitle('Contato');
    
    return <DefaultLayout>
        <h1>Contatos</h1>
    </DefaultLayout>
}