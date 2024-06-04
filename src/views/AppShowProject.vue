<script>
import axios from 'axios';

    export default{
        name: 'AppShowProject',
        
        data() {
            return {
                
                project: '',
                base_api_url: 'http://127.0.0.1:8000',
                base_project_url: '/api/projects/',
                

               
            }
            
        },
        mounted() {
            
          
            const url = this.base_api_url + this.base_project_url + this.$route.params.id;
           
            
        axios
            .get(url)
            .then(response => {
                console.log(response);
                if(response.data.success){
                    this.project = response.data.response;

                } else {
                    this.$router.push({name: 'not-found'})
                }

            }).catch(err => {
                console.error(err)
            })
    }
    }
</script>

<template>

    <div class="container">
        
        <h1>{{ project.project_name }}</h1>
    </div>
</template>

<style>

</style>