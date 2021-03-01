<template>
    <div id="js-scroll-blog">
        <div :style="styles" class="container-fluid blog-card-wrapper featured-blog-post-header mb-5">
            <div v-for="(post, index) in posts" :key="index">
                <div class="text-center" v-if="post.featured === true">
                    <h1 class="text-white display-4 text-center blog-page-h1">{{post.title}}<span class="electric-text">.</span></h1>
                    <nuxt-link class="" :to="{path:'blog/' + post.slug}">
                        <button class="btn mx-auto">Learn More</button>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="blog-card-wrapper container-fluid">
            <div class="row py-5">
                <div class="col-12">
                    <h2>Latests Posts</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-6 col=md-12 shadow-none border-0 round mb-3 mx-auto" v-for="(post, index) in posts" :key="index">
                    <nuxt-link :to="{path:'blog/' + post.slug}">
                        <div class="card border-0">
                            <img class="img-fluid" :src="post.feature_image" alt="">
                            <div class="card-body">
                            <h5 class="blog-page-h5">{{post.title}}</h5>
                            <p>{{post.excerpt}}</p>
                            <button class="btn btn-outline-dark">Read More</button>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getPosts } from '../api/posts';
export default {
        async asyncData () {
            const posts = await getPosts();
            var featuredImage;
            var styles;

            posts.forEach(item => {
                console.log(item)
                if(item.featured === true){
                    featuredImage = item.feature_image;
                }
            });
            styles = `background: linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url(${featuredImage}; background-size:cover; background-position:center;`
            return { 
                posts: posts,
                featuredImage: featuredImage,
                styles:styles 
            }
    },
    created() {
        const encodedURI = encodeURIComponent(this.url);
        return this.encodedURI = encodeURI(this.url);
    },
    data(){
        return {
        }
    },
}
</script>

<style scoped>
.featured-blog-post-header {
    height:auto;
    padding:200px 20%;
}

.blog-page-h1,.blog-page-h5 {
    color:black;
    font-family:'Montserrat';
    font-weight: 600;
}

.blog-page-h1 {
    font-size: calc(21px + 6 * ((160vw - 20px) / 380));
    font-family: 'Poppins';
}

p {
    font-size:.85rem;
    color:black;
    font-weight: 300;
}

.blog-card-wrapper  {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
}

.img-fluid {
    height:300px;
    width:100%;
    object-fit:cover;
}

@media (max-width:1124px){
}
</style>