<script>
import ProjectCard from '../components/ProjectCard.vue';

import axios from 'axios';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    name: 'AppHome',

    components: {
        ProjectCard,

    },

    data() {
        return {
            projects: [],
            base_api_url: 'http://127.0.0.1:8000',
            base_project_url: '/api/projects-main',

        }
    },

    mounted() {

        gsap.set(['.description', '.training', '.experience'], {
            autoAlpha: 0,
            x: -500,
        })

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(['.description', '.training', '.experience'],{
            duration: 1,
            delay: 0.5,
            x: 0,
            autoAlpha: 1,
            stagger: 1,
        })
        
        gsap.to('.gear', {
            rotate: 200,
            ease: 'linear',
            scrollTrigger: {
                trigger: '.gear',
                scrub: true,
            }
        })


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



    <section class="description">
        <div class="container">
            <h1>Chi sono:</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, eius odio. Impedit libero ea dolorem
                placeat ut quod iure vel dolores assumenda, cupiditate aut! Natus assumenda quam mollitia. Minus cum
                quia aspernatur assumenda et iste eaque sit quod error corrupti aut, itaque, quae harum iusto, cumque
                numquam distinctio ipsam architecto natus! Consectetur ipsa, iusto excepturi dolorum magni repellat,
                vitae blanditiis quam sit maiores quidem accusantium veritatis et, magnam temporibus. Asperiores
                inventore a molestiae quod magni unde perferendis optio odio, dicta, provident similique nemo fugit aut?
                Asperiores modi nobis beatae aut! Autem earum maiores architecto consequatur debitis labore laborum, at
                odit.</p>
        </div>
    </section>

    <section class="training">
        <div class="container">
            <h2>Formazione:</h2>
            <ul>
                <li>2012 - 2017 ITIS E. Fermi, titolo acquisito: Perito elettronico specializzato in automazione.</li>
                <li>2024 Boolean, attestato di full stack developer.</li>
            </ul>
        </div>
    </section>



    <section class="experience">
        <div class="container">
            <h2>Esperienze lavorative:</h2>
            <ul>
                <li>2017 - 2023 Europe Net s.r.l.</li>
            </ul>
        </div>
    </section>

    <section class="skills">
        <div class="container">
            <h2>SKILLS</h2>
            <ul class="skills-list">
                <li ><img class="gear"  src="/public/img/pngegg.png" alt=""><div>HTML-5</div></li>
                <li ><img class="gear"  src="/public/img/pngegg.png" alt=""><div>CSS-3</div></li>
                <li ><img class="gear"  src="/public/img/pngegg.png" alt=""><div>BOOTSTRAP</div></li>
                <li ><img class="gear"  src="/public/img/pngegg.png" alt=""><div>JS</div></li>
                <li ><img class="gear"  src="/public/img/pngegg.png" alt=""><div>VUE.JS</div></li>
                <li ><img class="gear"  src="/public/img/pngegg.png" alt=""><div>PHP</div></li>
                <li ><img class="gear"  src="/public/img/pngegg.png" alt=""><div>LARAVEL</div></li>
                <li ><img class="gear"  src="/public/img/pngegg.png" alt=""><div>MYSQL</div></li>


                <!-- <li>HTML-5</li>
                <li>CSS-3</li>
                <li>BOOTSTRAP</li>
                <li>JS</li>
                <li>VUE.JS</li>
                <li>PHP</li>
                <li>LARAVEL</li>
                <li>MYSQL</li> -->
            </ul>
        </div>
    </section>
    



    <section class="main-projects">

        <div class="container">

            <h2>Ecco alcuni dei miei progetti</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div class="col" v-for="project in projects">
                    <ProjectCard class="" :name="project.project_name" :desc="project.description" :image="base_api_url + '/storage/' + project.preview_image
                        " :type="project.type.type_name" :technology="project.technologies" :view="project.link_view"
                        :code="project.link_code" :id="project.id" />

                </div>
            </div>
            <div class="all-projects">
                <router-link class="btn btn-light" :to="{ name: 'projects' }">Guarda tutti</router-link>
            </div>
        </div>
    </section>



</template>


<style scoped>
section {
    padding-bottom: 4rem;
}

.description {
    padding-top: 6rem;
}

.skills {
    padding: 2rem;
    background-color: black;
    color: white;
    text-align: center;

    h2 {
        padding-bottom: 2rem;
    }

    .skills-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;

        li {
            margin-bottom: 1rem;
            font-weight: bold;
            color: black;
            /* background-color: white; */
            padding: 0 1rem;
            border-radius: 10px;
            position: relative;
            >img{
                width: 120px
            };
            >div{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}

.main-projects {
    padding-top: 4rem;


    h2 {
        margin: 1rem 0 5rem 0;
        color: white;
        text-align: center;
    }


    .all-projects {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
    }

}

.description,
.training,
.experience {


    .container {



        color: rgb(207, 207, 207);
        background-color: rgba(110, 110, 110, 0.122);
        padding: 2rem;
        border-radius: 30px;
        box-shadow: 10px 10px rgba(133, 133, 133, 0.167);
        font-size: 1.1rem;
        transition: 1s;

        &:hover {
            background-color: black;
            /* transform: scale(1.2); */

        }

    }
}
</style>