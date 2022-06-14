// 用于中转的
<template>
  <div></div>
</template>

<script>
export default {
created(){
    console.log(this.$route.params.bvid);
       this.$router.push({
            name:'detaill',
            params:{
                bvid:this.$route.params.bvid
         
            }
})
}
}
</script>

<style>

</style>