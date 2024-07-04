<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';


export default {
    name: 'AppProject',

    components: {
        ProjectCard
    },

    data() {
        return {
            projects: [],
            base_api_url: 'http://127.0.0.1:8000',
            base_project_url: '/api/projects',
        }
    },

    mounted() {

        const url = this.base_api_url + this.base_project_url;


        axios
            .get(url)
            .then(response => {
                this.projects = response.data.results;
                console.log(this.projects);
        })
    }


}



</script>

<template>
    <section id="project">

        <div class="container">
            <h1>PORTFOLIO PROGETTI</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div class="col" v-for="project in projects.data">
                    <ProjectCard :name="project.project_name" :desc="project.description" :image="base_api_url + '/storage/' + project.preview_image
                        " :type="project.type.type_name" :technology="project.technologies" :view="project.link_view"
                        :code="project.link_code" :id="project.id" />

                </div>
            </div>
        </div>

    </section>


</template>

<style scoped>
#project {

    height: 100vh;

    .container {
        /* padding: 3rem 0; */

        h1 {
            padding: 3rem 0;
        }

    }

}
</style>
