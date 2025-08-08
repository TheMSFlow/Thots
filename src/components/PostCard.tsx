import React, { useState } from 'react'
import Avatar from './blocks/Avatar'
import UserInfo from './blocks/UserInfo'
import Actions from './blocks/Actions'
import Expand from './buttons/Expand'
import Collapse from './buttons/Collapse'
import Comments from './blocks/Comments'
import Input from './blocks/Input'

const PostCard = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpanded = () => setIsExpanded(prev => !prev)
  return (
    <>
        <div className='flex flex-col gap-4 mx-4 md:mx-8 max-w-full lg:max-w-[40rem] lg:p-12 lg:bg-[#F8F8F8] lg:rounded-2xl'>
            <div className='grid grid-cols-[40px_1fr] gap-2 h-fit border-b pb-4 '>
                <Avatar />
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between items-center w-full'>
                        <UserInfo name='Michael Steve' username='msflow' time='12h' />
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
                    <p>ALX Capstone: I just finished the Pro Frontend Development program by ALX. It ended with a social media project. View here and <span className='text-accent'>#LetMeKnowYourThots</span></p>
                    <Actions onCommentClick={toggleExpanded} />

                </div>
            </div>
            {/* Collapsible Section */}
            <div className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
            >
                <div className="flex flex-col gap-0 w-full">
                    <Comments />
                    <Input />
                </div>
            </div>
            {/* Collapsible Section End*/}
        </div>
    </>
  )
}

export default PostCard