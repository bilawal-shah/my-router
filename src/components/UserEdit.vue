<template>
    <div>
        <h2>This is user edit component</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ut.</p>
        <!-- <p>Loaded id :{{ id }}</p> -->
        <button class="btn btn-primary" @click="navigatetohome">Go to home </button>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    // data(){
    //     return {
    //         id: this.$route.params.id,


    //     }
    // },
    // watch:{
    //     '$route'(to){
    //         this.id=to.params.id
    //     }

    // },
    methods:{
    navigatetohome(){
        this.$router.push('/');
    }
}

}

</script>