import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import Avatar from './blocks/Avatar'
import UserInfo from './blocks/UserInfo'
import Actions from './blocks/Actions'
import Expand from './buttons/Expand'
import Collapse from './buttons/Collapse'
import Comments from './blocks/Comments'
import Input from './blocks/Input'
import { Post } from '../interfaces/posts'

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

    const toggleExpanded = () => setIsExpanded(prev => !prev)

  const comments = commentsCollection?.edges?.map(edge => edge.node.comment) ?? []
  const likes = likesCollection?.edges?.[0]?.node?.like_amount || 0

  return (
    <>
        <div className='flex flex-col gap-8 mx-4 md:mx-8'>
            <div className='grid grid-cols-[40px_1fr] gap-2 h-fit border-b pb-4 '>
                <Avatar initials={users.initials} />
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between items-center w-full'>
                        <UserInfo name={users.name} username={users.username} time={time} />
                        <div 
                        onClick={toggleExpanded}
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
                        onCommentClick={toggleExpanded}
                        commentCount={comments.length}
                        likeCount={likes}


                    />



                </div>
            </div>
            {/* Collapsible Section */}
            <div className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
            >
                <div className="flex flex-col gap-0 w-full pb-10">
                    <Comments comments={comments} />
                    <Input postId={post_id} />

                </div>
            </div>
            {/* Collapsible Section End*/}
        </div>
    </>
  )
}

export default PostCard