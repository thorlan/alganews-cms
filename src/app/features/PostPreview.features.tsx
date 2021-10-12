import { useEffect } from "react";
import styled from "styled-components";
import withBoundary from "../../core/hoc/withBoundary";
import Button from "../components/Button/Button";
import confirm from "../../core/utils/confirm";
import modal from "../../core/utils/modal";
import useSinglePost from "../../core/hooks/useSinglePost";
import Loading from "../components/Loading/Loading";
import MarkdownEditor from "../components/MarkDownEditor";

interface PostPreviewProps {
  postId: number;
}

function PostPreview(props: PostPreviewProps) {
  const { fetchPosts, loading, post, publishPost } = useSinglePost();

  function publish() {
    return publishPost(props.postId)
  } 

  function reopenModal() {
    modal({
      children: <PostPreview postId={props.postId} />,
    });
  }

  useEffect(() => {
    fetchPosts(props.postId);
  }, [fetchPosts, props.postId]);

  if (loading) return <Loading show />;

  if (!post) return null;

  return (
    <PostPreviewWrapper>
      <PostPreviewHeading>
        <PostPreviewTitle>{post.title}</PostPreviewTitle>
        <PostPreviewActions>
          <Button
            variant={"danger"}
            label={"Publicar"}
            disabled={post.published}
            onClick={() => {
              confirm({
                title: "Publicar o post?",
                onConfirm: publish,
                onCancel: reopenModal,
              });
            }}
          />
          <Button
            variant={"primary"}
            label={"Editar"}
            disabled={post.published}
            onClick={() =>
              (window.location.pathname = `/posts/editar/${props.postId}`)
            }
          />
        </PostPreviewActions>
      </PostPreviewHeading>
      <PostPreviewImage src={post.imageUrls.medium} />
      <PostPreviewContent>
        <MarkdownEditor readOnly value={post.body} />
      </PostPreviewContent>
    </PostPreviewWrapper>
  );
}


const PostPreviewWrapper = styled.div`
  background-color: #f3f8fa;
  padding: 24px;
  border: 1px solid #ccc;
  width: 655px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 6px 6px rgba(0,0,0,.05);
`

const PostPreviewHeading = styled.div`
  display: flex;
  justify-content: space-between;
`

const PostPreviewTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`

const PostPreviewActions = styled.div`
  display: flex;
  gap: 8px;
`

const PostPreviewImage = styled.img`
  height: 240px;
  width: 100%;
  object-fit: cover;
`

const PostPreviewContent = styled.div`
`


export default withBoundary(PostPreview)