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
            base_posts_url: '/api/projects',
        }
    },

    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/projects')
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
            <h1>Portfolio Progetti</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div class="col" v-for="project in projects.data">
                    <ProjectCard :name="project.project_name" :desc="project.description" :image="base_api_url + '/storage/' + project.preview_image
                        " :type="project.type.type_name" :technology="project.technologies" :view="project.link_view" :code="project.link_code"/>

                </div>
            </div>
        </div>

    </section>


</template>

<style scoped>

    #project {
        background-color: rgb(143, 196, 187);
    }

</style>
