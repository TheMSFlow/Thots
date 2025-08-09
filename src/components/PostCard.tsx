import { useState } from 'react'
import { useQuery } from '@apollo/client';
import Avatar from './blocks/Avatar'
import UserInfo from './blocks/UserInfo'
import Actions from './blocks/Actions'
import Expand from './buttons/Expand'
import Collapse from './buttons/Collapse'
import Comments from './blocks/Comments'
import Input from './blocks/Input'
import { Post } from '../interfaces/posts'
import { useMutation } from '@apollo/client';
import { UPDATE_LIKE_AMOUNT } from '../graphql/mutations/incrementLikes';
import { GET_COMMENTS_BY_POST_ID } from '../graphql/queries/getCommentsByPostId';
import { GetCommentsByPostIdData } from '../interfaces/posts';
import { useNavigate } from 'react-router-dom'
import { Link, useLocation } from "react-router-dom";

type PostCardProps = Post

const PostCard = ({
  post_id,
  content,
  hashtag,
  time,
  users,
  likesCollection,
  commentsCollection
}: PostCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const likeNode = likesCollection?.edges?.[0]?.node
    const [likeCount, setLikeCount] = useState(Number(likeNode?.like_amount) || 0)
    const likeId = likeNode?.id
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/"

    const [updateLike] = useMutation(UPDATE_LIKE_AMOUNT)

    const handleLike = async () => {
    if (!likeId) return

    try {
        await updateLike({
        variables: {
            id: likeId,
            like_amount: String(Number(likeCount) + 1),
        },
        })

        setLikeCount((prev) => prev + 1)
    } catch (err) {
        console.error('Like update failed', err)
    }
    }


    const toggleExpanded = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(prev => !prev);
    };

    // Fetch comments for this post live from cache/server
  const { data, refetch } = useQuery<GetCommentsByPostIdData>(GET_COMMENTS_BY_POST_ID, {
    variables: { postId: post_id },
    fetchPolicy: "network-only",
  });

  const comments = data?.commentsCollection?.edges?.map(edge => edge.node.comment) ?? [];

  const handleShareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/post/${post_id}`, { state: { openShareModal: true } })
  }


  return (
    <>
        <div className='flex flex-col mx-4 md:mx-8 hover:bg-[#f3f3f376] rounded-lg'>
            <Link 
                to={`/post/${post_id}`}
                className='grid grid-cols-[40px_1fr] gap-2 h-fit border-b pb-4'>
                <Avatar initials={users.initials} />
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between items-center w-full'>
                        <UserInfo name={users.name} username={users.username} time={time} />
                        <div 
                        onClick={(e) => toggleExpanded(e)}
                        className="transition-transform duration-300 ease-in-out cursor-pointer"
                        >
                            <div
                                className={`transform transition-transform duration-500 ${
                                isExpanded ? 'rotate-180' : 'rotate-0'
                                }`}
                            >
                                {isExpanded ? <Collapse /> : <Expand />}
                            </div>
                        </div>

                    </div>
                    <p>{content} <span className='text-accent'>{hashtag}</span></p>
                    <Actions
                        onCommentClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleExpanded(e);
                        }}
                        onLikeClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleLike();
                        }}
                        onShareClick={handleShareClick}
                        commentCount={comments.length}
                        likeCount={likeCount}
                    />



                </div>
            </Link>
            {/* Collapsible Section */}
            <div 
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
            >
                <div className="flex flex-col gap-0 w-full pb-10">
                    <Comments comments={comments} />
                    <Input postId={post_id} onCommentAdded={refetch}  />

                </div>
            </div>
            {/* Collapsible Section End*/}
        </div>
    </>
  )
}

export default PostCard