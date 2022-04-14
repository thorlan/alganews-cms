import { Post, PostService } from "danielbonifacio-sdk";
import { useCallback, useState } from "react";
import info from "../utils/info";

export default function useSinglePost() {

  const [post, setPost] = useState<Post.Detailed>();
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(function (postId: number) {
    setLoading(true);
    PostService
      .getExistingPost(postId)
      .then(setPost)
      .finally(() => setLoading(false));
  }, []);

  const publishPost = useCallback(async (postId: number) => {
    alert(postId);
    await PostService.publishExistingPost(postId);
    info({
      title: "Post publicado",
      description: "Você publicou o post com sucesso",
    });
  }, []);



  return {
    fetchPosts,
    publishPost,
    post,
    loading
  }
}