<script>
    import axios from 'axios';
    export default {
        name: 'ProjectCard',
        props: ['name', 'desc']

        // data(){
        //     return {
        //         projects: []
        //     }
        // },

        // mounted() {
        //     axios
        //     .get('http://127.0.0.1:8000/api/projects')
        //     .then(response=> {
        //         this.projects = response.data.results;
        //         console.log(this.projects);
        //     })
        // }


    }

</script>

<template>
    <div>
            <div class="card">
                {{name}}
                {{ desc}}
            </div>
    </div>
</template>