import DefaultLayout from "../layouts/Default";
import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm.features";
import { useParams } from "react-router";

export default function PostEditView() {

    const params = useParams<{ id: string}>();

    usePageTitle('Novo Post');

    return <DefaultLayout>

        <PostForm postId={Number(params.id)}/>

    </DefaultLayout>
}