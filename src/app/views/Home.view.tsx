
import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";
import PostList from "../features/PostsLists.features";
import UserPerformance from "../features/UserPerformance.features";
import UserTopTags from "../features/UserTopTags.features";
import UserEarnings from "../features/UserEarnings.features";
import usePosts from "../../core/hooks/usePosts";
import { useEffect } from "react";

export default function HomeView() {

  usePageTitle('Home');

  const { paginatedPosts, loading, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts({ page: 1 });
  },[fetchPosts])

  return <DefaultLayout>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32 }}>
      <UserTopTags />
      <UserEarnings />
    </div>
    <UserPerformance />
    <PostList />
  </DefaultLayout >
}