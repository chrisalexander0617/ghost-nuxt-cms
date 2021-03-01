<template>
    <div class="single-post-wrapper">
        <div class="container py-5 px-4">
            <div class="row">
                <div class="col-lg-8 col-md-12 mx-auto text-center mb-5">
                    <h1 class="slug-title mb-5">{{post.title}}<span class="electric-text">.</span></h1>
                    <img class="w-100" :src="post.feature_image" alt="">
                </div>
            </div>
            <div class="row py-5">
                <div class="col-lg-8 mx-auto d-flex flex-row">
                    <img class="author-image flex-start" src="https://i2.wp.com/worldbusinessfitness.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg?ssl=1" alt="">
                    <h6 class="align-self-center ml-3 author-name">Christopher Clemmons</h6>
                    <div>
              
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-md-12 mx-auto content-col"> 
                    <div v-html="post.html">{{post.html}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { getSinglePost } from '../../api/posts';

export default {
    async asyncData ({ params }) { //takes the name of the article clicked
        const post = await getSinglePost(params.slug); 
        const url = `https://digyt.co/` + params.slug;
        console.log(post)
        return { 
            post:post,
            //feature_image:post.feature_image,
            author:post.author,
            feature_image:post.feature_image,
            url:url,
            encodedURI:''
        }
    },
    created() {
        const encodedURI = encodeURIComponent(this.url);
        return this.encodedURI = encodeURI(this.url);
    },
    //Dynamic SEO
    head(){
        return {
        title:this.post.meta_title,
        titleTemplate: '%s | The D Blog ',
        meta: [
                {
                    hid:'description',
                    name:'description',
                    content:this.post.meta_description // dynamic seo description
                },
                /* 
                Code injection for meta keywords (SEO)
                */
                {
                    hid:'keywords',
                    name:'keywords',
                    content:this.post.codeinjection_head 
                }  
            ]
        }
    },
    methods: {
        capitalize(){
            return this.title.toUppercase();
        }
    }
}
</script>

<style>
    .slug-title {
        font-size: calc(27px + 6 * ((90vw - 20px) / 380));
        font-family: 'Poppins';
    }
    .single-post-wrapper {
        padding-top:50px;
    }

    .author-image {
        height:70px;
        width:auto;
        border-radius: 50%;
    }

    .author-name {
        font-family: 'Poppins';

    }

    .single-post-wrapper h2 {
        margin-bottom:3rem;
        margin-top:60px;
        font-size: calc(16px + 6 * ((110vw - 20px) / 580));
        font-family: 'Poppins';
        font-weight: 600;
    }

    .single-post-wrapper h3 {
                font-size: calc(16px + 6 * ((60vw - 20px) / 880));
    }

    .single-post-wrapper p {
        text-align: justify;
        margin-bottom:2rem;
        color:rgb(77, 77, 77);
        font-size:17px;
    }

    blockquote {
        font-weight:400;
    }

    @media (max-width:1024px) {
      .single-post-wrapper .container {
            padding:0px;
        }
    }
</style>