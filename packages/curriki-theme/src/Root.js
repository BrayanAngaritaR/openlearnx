import React, { useEffect } from "react";
import {connect} from "frontity";
import Header from "./components/Header";
import Posts from "./pages/Blog/Posts";
import PostDetails from "./pages/Blog/PostDetails";

const Root = ({ state, actions }) => {
   const data = state.source.get(state.router.link)

   useEffect(() => {
      actions.source.fetch("/posts")
   }, [])

   return (
      <>
         <Header />
         { data.isFetching && <p>Loading...</p> }
         { data.isHome && <Posts/> }
         { data.isPost && <PostDetails/> }
      </>
   );
};

  export default connect(Root)