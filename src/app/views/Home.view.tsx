
import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";
import PostList from "../features/PostsLists.features";
import UserPerformance from "../features/UserPerformance.features";
import UserTopTags from "../features/UserTopTags.features";
import UserEarnings from "../features/UserEarnings.features";
import usePosts from "../../core/hooks/usePosts";

export default function HomeView() {

  usePageTitle('Home');

  const { paginatedPosts, loading, fetchPosts } = usePosts();

  return <DefaultLayout>

    <button onClick={() => fetchPosts({ page: 1 })}>
      disparar
    </button>
    {loading ? 'carregando' : 'finalizado'}

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32 }}>
      <UserTopTags />
      <UserEarnings />
    </div>
    <UserPerformance />
    <PostList />
  </DefaultLayout >
}