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
    <div class="nav">
        <div class="container">
            <nav class="navbar navbar-expand navbar-dark">
                <div class="nav navbar-nav ">
                    <router-link class="nav-item nav-link" :to="{name: item.route}" v-for="item in menu">{{ item.text }}</router-link>
                    
                </div>
            </nav>
    
        </div>

    </div>


</template>

<style scoped>

.nav{
    background-color: rgb(52, 52, 52);
}

</style>
