import React, { useEffect } from "react";
import {connect} from "frontity";
import Base from "./styles/Base";

import Header from "./components/Header";
import Posts from "./pages/Blog/Posts";
import PostDetails from "./pages/Blog/PostDetails";
import PageDetails from "./pages/PageDetails";

const Root = ({ state, actions }) => {
   const data = state.source.get(state.router.link)

   useEffect(() => {
      actions.source.fetch("/posts")
   }, [])

   return (
      <>
         <Base/>
         <Header />
         { data.isFetching && <p>Loading...</p> }
         { data.isHome && <Posts/> }
         { data.isPost && <PostDetails/> }
         { data.isPage && <PageDetails/> }
         { data.isWebinarArchive && <p>Es archivo</p> }
         { data.isShowcaseArchive && <p>Es archivo</p> }
         <p>Current page {state.router.link  }</p>
      </>
   );
};

  export default connect(Root)