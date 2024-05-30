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
            projects: []
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
    <h1>Hello</h1>

    <ProjectCard v-for="project in projects.data" :name="project.project_name" :desc="project.description"/>


</template>

<style scoped></style>
