<template>
    <header>
        <div class="container-fluid">
            <div class="row px-0">
                <div class="col-lg-6 text-container px-0">
                    <h1 class="display-1">{{headText}}.</h1>
                    <p class="lead">{{lead}}</p>
                    <a class="btn btn-outline-dark">Learn More</a>.
                </div>
                <div class="col-lg-6 px-0">
                    <img class="img-fluid" :src="imgLink" alt="">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props:{
        headText:String,
        lead:String,
        imgLink:String
    }
}
</script>

<style>

</style>