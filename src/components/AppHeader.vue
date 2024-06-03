<script>

export default {
    name: 'AppHeader',

    data(){
        return {
            menu: [
                {
                    'text' : 'Home',
                    'route' : 'home'
                },
                {
                    'text' : 'Projects',
                    'route' : 'projects'
                },
                {
                    'text' : 'About',
                    'route' : 'about'
                },
                {
                    'text' : 'Contacts',
                    'route' : 'contacts'
                },
            ]
        }
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
                
                    <router-link class="nav-items" :to="{name: item.route}" v-for="item in menu">{{ item.text }}</router-link>
                    
                
            </nav>
    
        </div>

    </div>


</template>

<style scoped>

.header{
    background-color: black;
    padding: 2rem 0;

    nav{
        display: flex;
        flex-direction: column;
        justify-content:space-around;

        .nav-items{
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
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
