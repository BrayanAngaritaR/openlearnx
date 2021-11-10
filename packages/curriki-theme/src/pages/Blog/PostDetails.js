import React from "react";
import {connect} from "frontity";

const PostDetails = ({ state, element }) => {
   const data = state.source.get(state.router.link)
   const post = state.source[data.type][data.id]
   const author = state.source.author[post.author]
   return (
      <>
         <h2>{post.title.rendered}</h2>
         <h2>Writen by: {author.name}</h2>
         <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </>
   )
}

export default connect(PostDetails);