
import usePageTitle from "../../core/hooks/usePageTitle"
import EditorsList from "../features/EditorsList.features";
import DefaultLayout from "../layouts/Default";

export default function HomeView() {

    usePageTitle('Lista de editores');

    return <DefaultLayout>
       <EditorsList />
    </DefaultLayout >
}