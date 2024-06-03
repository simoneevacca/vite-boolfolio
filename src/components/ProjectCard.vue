<script>
import axios from 'axios';
export default {
    name: 'ProjectCard',
    props: ['name', 'desc', 'image', 'view', 'code', 'type', 'technology', 'id']

}

</script>

<template>
    <div>
        <div class="card card-body">
            <div class="d-flex justify-content-between align-items-center">
                <h2>{{ name }}</h2>
                <div class="d-flex gap-2">
                    <div class="tag" v-for="tech in technology">{{ tech.name }}</div>
                </div>

            </div>

            <p>{{ desc }}</p>
            <p>Tipologia di lavoro: <span class="tag">{{ type }}</span></p>
            <div class="d-flex gap-2 mb-3">

            </div>

            <img :src="image" alt="">
            <div class="d-flex gap-2 mt-4">

                <a class="btn btn-primary" :href="view">Guarda</a>
                <a class="btn btn-dark" :href="code"><i class="fa-brands fa-github"></i> Apri su GitHub</a>
            </div>

            <router-link class="btn btn-primary" :to="{name: 'show', params: {id: id }}">Guarda il progetto</router-link>

        </div>
    </div>
</template>

<style scoped>

   .card{
    box-shadow: 3px 3px 3px 3px rgba(255, 255, 255, 0.232);
        .tag{
            background-color: rgb(143, 196, 187);
            padding: 0 0.5rem 0 0.5rem;
            border-radius: 5px;
        }
        .btn{
            width: 50%;
        }
   }

</style>