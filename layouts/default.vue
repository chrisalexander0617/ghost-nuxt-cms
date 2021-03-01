<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
export default {
  components: {

  }
}
</script>

<style>
html {
  font-size: calc(12px + 6 * ((50vw - 520px) / 980));
}

.container-fluid {
  padding:1.25rem 8rem 1.25rem 8rem;
}

.navbar {
  padding:2.25rem 1.25rem 2.25rem 8rem;
}

header {
  height:auto;
  background-color:rgb(39, 39, 39);
}

.secondary-header {
  background-color:white;
}

.secondary-header .btn, .about-header .img-fluid {
        display:none;
}

.secondary-header .display-1{
        font-size:3.5rem;
}

section {
  height:auto;
  background-color:rgb(39, 39, 39);
}

section .section-text-container {
    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction: column;
}

section .section-image-container {
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
}

section .col-lg-6 {
  height:700px;
}

footer {
  background-color:black;
  position:relative;
  bottom:0;
  padding:10rem 8rem;
}

@media (max-width:520px){
  .navbar {
    padding:1.25rem 1.25rem 1.25rem 4rem !important;
  }
  .container-fluid {
    padding:1.25rem 4rem 1.25rem 4rem !important;
  }
}
</style>
