import GhostContentAPI from "@tryghost/content-api";
/* 
Create API instance with site credentials 
*/
const api = new GhostContentAPI({
    url: process.env.URL,
    key: process.env.API_KEY,
    version: "v3"
});

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all",
            /*
            Add the name of the author's slug ( Ghost admin dashboard ) 
            the number of authors you are able to add depends 
            on how many users you need on your site.  
            This will give you the option to run multiple
            websites that will allow you to choose which con∂tent to 
            display.
            */
            filter: "author:chris" 
        })
        .catch(err => {
            console.error(err);
        });
}

/* 
Single Post Fetch - 
Use this function to render the post content for a single post 
use this in _slug.vue. 
*/
export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
        //meta_title:'Test Me'
      })
      .catch(err => {
        console.error(err);
      });
  }