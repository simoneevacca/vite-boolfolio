<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'AppMain',

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
    <main>

        <h1>Hello</h1>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div class="col" v-for="project in projects.data">
                    <ProjectCard :name="project.project_name" :desc="project.description" :image="base_api_url + '/storage/' + project.preview_image
                        " :type="project.type.type_name" :view="project.link_view" :code="project.link_code"/>

                </div>
            </div>
        </div>

    </main>


</template>

<style scoped></style>
