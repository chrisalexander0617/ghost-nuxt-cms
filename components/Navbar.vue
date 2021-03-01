<template>
    <div>
        <b-navbar toggleable="lg" type="light">
            <b-navbar-brand href="#">Brand</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/blog">Blog</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>
                <b-nav-item to="/contact">Contact</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>        
</template>

<style>
.navbar {
    background-color:rgb(255, 255, 255) !important;
}
</style>