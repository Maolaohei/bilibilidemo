//信息流
<template>

  <div style="margin-top:4.5rem" v-show="show"></div>
   <div class="row" v-for="(item,i) in list" :key="i" @click="detaill(item.bvid)" >
        <div class='fm' >
            <img :src="item.pic">
 
        </div>
        <div class='title'>
            <p>{{item.title}}</p>
        </div>
   </div>
   
  

</template>

<script>
export default {

 emits: ['list'],
 data() {
    return {

        }
 },methods:{
    detaill(bvid){
    console.log(bvid);
       this.$router.push({name:'empty',params: { bvid: bvid }})
      
    },
    },

props: {
        show: {
            type: Boolean,
            default: true
        },
        list: {
            //type是数组
            type: Array,
            //默认值
            default: function(){
                return []
            },
           
            
        },
        

},

}

</script>

<style scope>

.row{
 display: inline;   
  height: 8rem;
        width: 47%;
    padding: 2.13333vw 1.33333vw;
    display: inline-block;
    background:#ffffff
}


.fm{

height: 9.5rem;
}
.fm img{
height: 9.5rem;
    width: 100%;
    position: relative;
    z-index: 0;
}
.title{
    height: 2.8rem;
    overflow: hidden;;
        font-size: 3.2vw;
}
.title p{
    margin: 0;
}
.play{
    position: absolute;
    height: 1rem;
    top: 1;
    right: 0;
    color: #ffffff;
    font-size: 1.33333vw;
}
</style>