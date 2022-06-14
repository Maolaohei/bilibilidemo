//哔哩哔哩头部
<template>
  <div class="head">
        <div class="title">
<div class="head-left" @click="f5"> <img style="margin-top: 0.4rem" src="../assets/logo.png"></div>
<div class="head-right"><img style="    margin-left: 6.5rem;
    margin-top: 0.7rem;" src="../assets/serch.png"></div>
</div>
<div class="nav">
    <ul><li v-for="(item,i) in nav" :key="i" v-on:click="go(item.url)">
        <span>{{item.name}}</span> </li></ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HeadView',
    emits: ['back'],
    data() {
        return {
        nav:[
            {
                name:'首页',
                url:'index'
            },
            {
                name:'排行',
                url:'rank'
            },
            {
                name:'动画',
                url:'anime'
            },
            {
                // name:'发现',
                // url:'find'
            },
            {
                // name:'我的',
                // url:'my'
            }
        ]   
        }
    },
    methods:{
        go(url){

console.log(url);
this.$router.push({
name:url
            })
        },f5(){
            this.$router.go(0);
        }
    }

}
</script>

<style scoped>
.head{
    width: 100%;
    position:fixed;
   
    background: #ffffff;
    height: 4.5rem;
    top: 0;
    z-index: 996;
  
}
.title{
    display: flex;
  width: 100%;
  height: 3rem;
  
}
.head-left{
      flex: 1;
   
}
.head-right{
    flex: 1;

}
ul{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
    display: inline-block;
    margin: 0rem 0rem 0rem 1rem;
    font-size: 0.5rem;
}
</style>