
import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";
import PostList from "../features/PostsLists.features";
import UserPerformance from "../features/UserPerformance.features";
import UserTopTags from "../features/UserTopTags.features";
import UserEarnings from "../features/UserEarnings.features";

export default function HomeView() {

    usePageTitle('Home');

    return <DefaultLayout>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32 }}>
            <UserTopTags />
            <UserEarnings />
        </div>
        <UserPerformance />
        <PostList />
    </DefaultLayout >
}