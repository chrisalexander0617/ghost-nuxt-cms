<template> 
    <div>
        <Header 
            class="secondary-header about-header" 
            headText="About"
        />
        <section class="about-content-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8 pl-0">
                        <img class="img-fluid mb-5" src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80" >
                        <h3 class="display-5">Hello</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Header from "../components/Header";
export default {
    components:[Header]
}
</script>

<style>
    .about-content-section {
        background-color:white;
    }
</style>