<template>
    
<div>
    <h2>This is user detail page</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati suscipit quae ipsam libero?</p>
    <p> The loaded id :{{ $route.params.id }}</p>
    <router-link tag="button" :to="link" class="btn btn-primary">UserApp</router-link>
    <button @click="confirmed=true" class="btn btn-primary">confirm</button>
</div>
</template>
<script>
export default {
    data(){
        return {
            link:{
                name:'Myuserapp',
                params:{
                    id: this.$route.params.id
                },
                query:
                {
                locale:'en',
                q:100 
            },
            hash: '#data'


            },
            confirmed: false,
        }
    },
    beforeRouteLeave(to,from,next) {
        if (this.confirmed){
            next();
        }
        else {
            if (confirm('Are you sure ??')){
                next();
            }
            else {
                next(false);
        }
    }
//     beforeRouteEnter(to,from,next){
     
//   next(false);
        

//     }
}
}
</script>