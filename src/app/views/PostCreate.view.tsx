import DefaultLayout from "../layouts/Default";
import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm.features";

export default function PostCreateView() {

    usePageTitle('Novo Post');

    return <DefaultLayout>

        <PostForm />

    </DefaultLayout>
}