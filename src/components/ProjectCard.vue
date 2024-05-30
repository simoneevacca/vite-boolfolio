<script>
import axios from 'axios';
export default {
    name: 'ProjectCard',
    props: ['name', 'desc', 'image', 'view', 'code', 'type', 'technology']

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
            <h3>{{ name }}</h3>
            <p>{{ desc }}</p>
            <img :src="image" alt="">
            <a :href="view">View</a>
            <a :href="code">code</a>

            <div class="info">
                {{ type }}
                {{ technology }}
                
            </div>
        </div>
    </div>
</template>