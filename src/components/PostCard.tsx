import React from 'react'
import Avatar from './blocks/Avatar'
import UserInfo from './blocks/UserInfo'
import Actions from './blocks/Actions'
import Expand from './buttons/Expand'
import Collapse from './buttons/Collapse'
import Comments from './blocks/Comments'
import Input from './blocks/Input'

const PostCard = () => {
  return (
    <>
        <div className='flex flex-col gap-4 mx-4 md:mx-8 max-w-full lg:max-w-[40rem] lg:p-12 lg:bg-[#F8F8F8] lg:rounded-2xl'>
            <div className='grid grid-cols-[40px_1fr] gap-2 h-fit border-b pb-4 '>
                <Avatar />
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between items-center w-full'>
                        <UserInfo name='Michael Steve' username='msflow' time='12h' />
                        <Expand />
                    </div>
                    <p>ALX Capstone: I just finished the Pro Frontend Development program by ALX. It ended with a social media project. View here and <span className='text-accent'>#LetMeKnowYourThots</span></p>
                    <Actions />
                </div>
            </div>
            {/* Collapsible */}
            <div className=' flex flex-col gap-0 w-full'>
                <Comments />
                <Input />
            </div>
            {/* Collapsible */}
        </div>
    </>
  )
}

export default PostCard