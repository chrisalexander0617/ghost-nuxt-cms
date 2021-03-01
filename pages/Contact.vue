<template> 
    <div>
        <Header 
            class="secondary-header contact-header" 
            headText="Contact"
        />
        <section>
        <ContactForm />
        </section>
    </div>
</template>

<script>
import Header from "../components/Header";
import ContactForm from '../components/ContactForm';
export default {
    components:[Header, ContactForm]
}
</script>


<style>
    .contact-header {
        background-color:white;
    }
    .contact-header .btn, .contact-header .img-fluid {
        display:none;
    }
</style>