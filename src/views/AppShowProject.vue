<script>
import axios from 'axios';

export default {
    name: 'AppShowProject',

    data() {
        return {

            project: '',
            base_api_url: 'http://127.0.0.1:8000',
            base_project_url: '/api/projects/',



        }

    },
    mounted() {


        const url = this.base_api_url + this.base_project_url + this.$route.params.id;


        axios
            .get(url)
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    this.project = response.data.response;

                } else {
                    this.$router.push({ name: 'not-found' })
                }

            }).catch(err => {
                console.error(err)
            })
    }
}
</script>

<template>

    <div class="container text-white">

        <h1>{{ project.project_name }}</h1>
        

        <iframe width="866" height="487" :src="project.link_view" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



    </div>
</template>

<style></style>
