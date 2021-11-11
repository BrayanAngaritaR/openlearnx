import React from "react";
import { connect } from "frontity";
import Featured from "../../components/Featured";
import Link from "../../components/Link";

const Posts = ({ state }) => {
   const data = state.source.get(state.router.link);
   return (
      <>
      <div class="card" style="width: 18rem;">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>

         <p>Posts ({data.items.length}) </p>
         {data.items.map(({ id }) => {
         const post = state.source.post[id];
         return (
            <article key={id}>
               <Link
               href={post.link}
               element="post"
               >
                  <Featured imgID={post.featured_media} element="post" />
                  <h5 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h5>
                  <p>{post.title.date}</p>
                  <hr></hr>
               </Link>
            </article>
         );
      })}
      </>
   );
};

export default connect(Posts);
