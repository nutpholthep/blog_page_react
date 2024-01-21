import  { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../component/PostItem'
function AuthorPosts() {
  const [posts,setPost] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
    {posts.length > 0 ?  <div className="container posts__container">
      {posts.map(({ id, category, thumbnail, authorID, desc ,title}) => (
        <PostItem
          key={id}
          postId={id}
          category={category}
          thumbnail={thumbnail}
          authorID={authorID}
          desc={desc}
          title={title}
        />
      ))}
      </div>:<h2 className="center">No Post Found</h2>}
    </section>
  )
}

export default AuthorPosts