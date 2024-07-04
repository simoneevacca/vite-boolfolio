<script>
import { gsap } from "gsap";

export default {
    name: 'AppHeader',

    data() {
        return {
            menu: [
                {
                    'text': 'Home',
                    'route': 'home'
                },
                {
                    'text': 'Projects',
                    'route': 'projects'
                },
                {
                    'text': 'About',
                    'route': 'about'
                },
                {
                    'text': 'Contacts',
                    'route': 'contacts'
                },


            ],



        }
    },
    mounted(){
       
        gsap.from('.img', {
            duration: 1.5,
            delay: 0.5,
            opacity: 0,
            borderRadius: '50%',
            y: -300,
            ease: 'elastic',
        })
        
    }

}
</script>

<template>
    <div class="header">
        <div class="container d-flex justify-content-between">
            <div class="jumbotron">

                <div class="row">
                    <div class="col d-flex gap-4 align-items-center">
                        <div class="img"></div>
                        <div class="me">
                            <div>Simone Vacca</div>
                            <div>Full-Stack Developer</div>
                            <div>25 anni</div>
                            <div>Roma</div>
                        </div>
                    </div>
                </div>

            </div>


            <nav>

                <router-link class="nav-items" :to="{ name: item.route }" v-for="item in menu">{{ item.text
                    }}</router-link>


            </nav>

        </div>

    </div>


</template>

<style scoped>
.header {
    background-color: rgba(0, 0, 0, 0.671);
    padding: 2rem 0;

    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 200px;

        .nav-items {
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
            /* padding-right: 2rem; */
            transition: 1s;

            &:hover {
                /* font-size: 2.5rem; */
                transform: scale(1.5);

            }
        }
    }


    .jumbotron {

        height: 250px;

        .row {


            .col {

                .img {
                    height: 250px;
                    width: 200px;
                    background-color: white;
                }

                .me {
                    color: white;
                    line-height: 40px;
                    font-size: 1.5rem;
                }
            }
        }
    }
}
</style>
