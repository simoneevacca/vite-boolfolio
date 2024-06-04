<script>
import axios from 'axios';
export default {
    name: 'ProjectCard',
    props: ['name', 'desc', 'image', 'view', 'code', 'type', 'technology', 'id']

}

</script>

<template>
    <div>
        <div class="card ">
            <div class="d-flex justify-content-between align-items-center">
                <h2>{{ name }}</h2>
                <div class="d-flex gap-2 flex-wrap">
                    <div class="tag" v-for="tech in technology">{{ tech.name }}</div>
                </div>

            </div>

            <p>{{ desc }}</p>
            <p>Tipologia di lavoro: <span class="tag">{{ type }}</span></p>
            <div class="d-flex gap-2 mb-3">

            </div>

            <img :src="image" alt="">
            <div class="d-flex gap-2 mt-4">

                <router-link class="btn btn-primary" :to="{name: 'show', params: {id: id }}"><strong>Guarda</strong></router-link>
                <btn  class="btn btn-dark" :href="code"><i class="fa-brands fa-github"></i><strong> Apri su GitHub</strong></btn>
            </div>
            
            

        </div>
    </div>
</template>

<style scoped>

   .card{
    
    border: none;
    color: rgb(207, 207, 207);
    background-color: rgba(110, 110, 110, 0.122);
    margin: 1rem;
    padding: 2rem 1rem;
    border-radius: 30px;
    box-shadow: 10px 10px rgba(133, 133, 133, 0.167);
    transition: 1s;

    &:hover {
        background-color: black;
        z-index: 1;
        box-shadow: 0 0 0 0;
        margin: -5rem;
    }



        .tag{
            background-color: rgb(38, 33, 63);
            padding: 0 1rem;
            border-radius: 8px;
           font-weight: bold;
        }
        .btn{
            width: 50%;
        }
   }

</style>