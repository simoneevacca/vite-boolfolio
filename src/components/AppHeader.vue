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
            ]
        }
    }
}
</script>

<template>
    <div class="nav">
        <div class="container">
            <nav class="navbar navbar-expand navbar-dark">
                <div class="nav navbar-nav">
                    <router-link :to="{name: item.route}" v-for="item in menu">{{ item.text }}</router-link>
                    <a class="nav-item nav-link active" href="#" aria-current="page">Home <span
                            class="visually-hidden">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Progetti</a>
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
