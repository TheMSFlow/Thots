import React from "react";

const PostCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-8 animate-pulse w-full">
      <div className="grid grid-cols-[40px_1fr] gap-2 h-fit border-b pb-4">
        {/* Avatar Placeholder */}
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-500" />

        {/* Content Column */}
        <div className="flex flex-col gap-4 mt-2">
          {/* User info row */}
          <div className="flex justify-between items-center">
              <div className="w-48 h-4 bg-gray-300 dark:bg-gray-500 rounded" />
            <div className="w-4 h-4 bg-gray-300 dark:bg-gray-500 rounded" />
          </div>

          {/* Post content */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-4 bg-gray-300 dark:bg-gray-500 rounded" />
            <div className="w-5/6 h-4 bg-gray-200 dark:bg-gray-500 rounded" />
          </div>

          {/* Actions row */}
          <div className="flex flex-row gap-12 mt-2 pb-2">
            <div className="w-12 h-4 bg-gray-200 dark:bg-gray-400 rounded" />
            <div className="w-12 h-4 bg-gray-200 dark:bg-gray-400 rounded" />
            <div className="w-12 h-4 bg-gray-200 dark:bg-gray-400 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;
