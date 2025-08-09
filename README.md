# Project Nexus 
# Thots - Social Media Feed

A React + TypeScript social media feed app featuring posts, likes, comments, and share functionality with smooth navigation and live updates.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
  - [Running the App](#running-the-app)  
  - [Post Feed](#post-feed)  
  - [Likes](#likes)  
  - [Comments](#comments)  
  - [Sharing Posts](#sharing-posts)  
- [Code Structure](#code-structure)  
- [GraphQL API](#graphql-api)  
- [Example Components](#example-components)  
- [Known Issues](#known-issues)  

---

## Features

- Dynamic post feed showing user info, content, hashtags, and timestamps  
- Like button with immediate UI update and backend persistence  
- Expandable comment section with live comments fetched via GraphQL  
- Share modal supporting native sharing or copy-to-clipboard  
- Navigation to dedicated post pages, optionally opening share modal automatically  
- Responsive and accessible design  

---

## Tech Stack

- React (TypeScript)  
- Apollo Client (GraphQL)  
- React Router DOM  
- Tailwind CSS  
- React Hot Toast  
- Supabase

---

## Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/TheMSFlow/Thots.git
cd thots
npm install
npm start

---

## Usage
### Running the App
- Run npm start to launch the app locally. Visit http://localhost:3000.

### Post Feed
- Posts display user avatar (initials), name, username, content, hashtags, and time.
- Expand/collapse comments with the arrow icon.

### Likes
- Click the Like button to increase like count.
- Likes update instantly and persist via a GraphQL mutation.

### Comments
- Expand comment section by clicking the comment icon or arrow.
- Add comments via input field. Comments update live via GraphQL query.

### Sharing Posts
- Click the Share button to navigate to the post page.
- The post page will open the share modal automatically based on navigation state.
- Share modal supports native sharing or copying the post URL.
- Close modal by clicking Close

---

## Code Structure

src/
├── components/
│   ├── PostCard.tsx           # Post UI: content, likes, comments, share button
│   ├── ShareModal.tsx         # Modal to share post link
│   ├── Comments.tsx           # Comments list
│   ├── Input.tsx              # Comment input field
│   ├── Actions.tsx            # Like, Comment, Share buttons
│   ├── Avatar.tsx             # User avatar
│   ├── UserInfo.tsx           # User name, username, time
│   ├── Expand.tsx             # Expand icon
│   ├── Collapse.tsx           # Collapse icon
├── graphql/
│   ├── queries/
│   │   ├── getPost.ts         # Query post by ID
│   │   ├── getComments.ts     # Query comments by post ID
│   ├── mutations/
│       ├── incrementLikes.ts  # Mutation to update like count
├── interfaces/
│   ├── posts.ts               # TypeScript types and interfaces
├── pages/
│   ├── PostPage.tsx           # Dedicated post page, loads post and optionally shows ShareModal

---

## GraphQL API

| Query / Mutation                      | Description                   | Variables                           |
| ------------------------------------- | ----------------------------- | ----------------------------------- |
| `GET_POST_BY_ID(post_id)`             | Fetches a single post by ID   | `post_id: string`                   |
| `GET_COMMENTS_BY_POST_ID(postId)`     | Fetches comments for a post   | `postId: string`                    |
| `UPDATE_LIKE_AMOUNT(id, like_amount)` | Updates like count for a post | `id: string`, `like_amount: string` |

---

## Example Components Overview
### PostCard.tsx
- Displays post details, like count, comment count, user info.
- Handles toggling comments, likes, and share navigation.
- Uses Apollo useMutation and useQuery for likes and comments.
- Navigates to post page with openShareModal state on share click.

### ShareModal.tsx
- Modal overlay with native share support or fallback to copy link.
- Takes postId and onClose callback as props.
- Displays share message editable textarea (if supported).
- Uses React Hot Toast for success/error notifications.

### PostPage.tsx
- Loads a post by ID from URL params using GraphQL.
- Automatically shows ShareModal if location.state.openShareModal is true.
- Handles modal close state.
- Evicts Apollo cache on unmount to refresh post feed data.


---


## Known Issues
- Native sharing depends on browser support (navigator.share).
- Comments and likes are fetched with network-only policy, may affect performance if used heavily.

