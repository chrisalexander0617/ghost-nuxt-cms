<template>
    <section class="master-content-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 section-text-container">
                    <h2 class="display-4 mb-3">{{sectionTitle}}</h2>
                    <p class="mb-5">{{sectionLead}}</p>
                    <b-button :to="sectionBtnLink" class="btn btn-outline-light">See the content</b-button>
                </div>
                <div class="col-lg-6 section-image-container">
                    <img :src="sectionImgLink" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:{
        sectionTitle:String,
        sectionLead:String,
        sectionImgLink:String,
        sectionBtnLink:String
    }
}
</script>