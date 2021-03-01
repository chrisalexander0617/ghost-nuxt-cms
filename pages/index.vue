<template>
  <div>
    <Header 
    class="main-header"
    headText="Ghost + Nuxt"
    lead="Amazing responsive web app template built on Nuxt and Ghost CMS"
    imgLink="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80"
    />
    <Section 
      class="section-one" 
      sectionTitle="Everything in one place." 
      sectionLead="Straight-to-the-point Ghost CMS web app built on the Nuxt framwork" 
      sectionImgLink="https://snipcart.com/media/204295/ghost.png"
      sectionBtnLink="/blog"
    />
  </div>
</template>

<script>
import Header from '../components/Header';
import Section from '../components/Section';
export default {
  compontents:[Header, Section]
}
</script>

<style>
.main-header {
  background-color:rgb(255, 255, 255);
}

.main-header .col-lg-6 {
    height:700px;
    display:flex;
}

.main-header .display-1, .lead {
  color:rgb(0, 0, 0);

}

.btn {
  border-radius: 0px;
  background:none;
}

.main-header img {
  width:100%;
  height:100%;
  object-fit: cover;
}

.main-header .container-fluid {
   padding:0rem 0rem 0rem 8rem;
}

.main-header .text-container {
    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction: column;
}

.section-one {
  background-color:black;
}

.section-one .display-4 {
  color:white;
}
.section-one p {
  color:white;
}
.section-one .img-fluid {
  filter:invert(1)
}

</style>