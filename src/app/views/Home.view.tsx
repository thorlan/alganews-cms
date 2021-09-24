
import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";
import PostList from "../features/PostsLists.features";
import UserPerformance from "../features/UserPerformance.features";
import UserTopTags from "../features/UserTopTags.features";
import UserEarnings from "../features/UserEarnings.features";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addPost, fetchPosts } from "../../core/store/Post.slice";
import selectPaginatedPosts from "../../core/selectors/selectPaginatedPosts";

export default function HomeView() {

    usePageTitle('Home');

    const dispatch = useDispatch();
    const paginatedPosts = useSelector(selectPaginatedPosts);


    const fakePost = {
        id: 42,
        slug: "como-fazer-x-coisas-com-react-js",
        title: "Como fazer X coisas com React.js",
        imageUrls: {
          default:
            "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
          small:
            "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
          medium:
            "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
          large:
            "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
        },
        editor: {
          id: 29,
          name: "Daniel Bonifacio",
          avatarUrls: {
            default:
              "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
            small:
              "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
            medium:
              "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
            large:
              "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
          },
          createdAt: "2017-03-04T00:12:45Z",
        },
        createdAt: "2020-12-04T00:12:45-03:00",
        updatedAt: "2020-12-05T00:12:45-03:00",
        published: true,
        tags: ["JavaScript"],
        canBePublished: true,
        canBeUnpublished: true,
        canBeDeleted: true,
        canBeEdited: true,
      };

    useEffect(() => {
        dispatch(addPost(fakePost));
    }, [dispatch])

    return <DefaultLayout>
       
        <button onClick={()=> dispatch(fetchPosts({page:2}))}>
            disparar
        </button>
        {
            paginatedPosts?.map(post => {
                return <li>{post.title}</li>
            })
        }
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32 }}>
            <UserTopTags />
            <UserEarnings />
        </div>
        <UserPerformance />
        <PostList />
    </DefaultLayout >
}