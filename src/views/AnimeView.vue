
// 排行
<template>
<HeadView></HeadView>
<MsgView :list="list"></MsgView>
  <div class='Anine'>
    
  </div>
</template>

<script>
import HeadView from './HeadView.vue'
import MsgView from './MsgView.vue'
export default {
  components:{HeadView,MsgView},
data(){
  return {
    list:[],
  }
},
created() {
  var api='/api/pgc/web/timeline/v2?season_type=1';
this.axios.get(api).then((response)=> {
  console.log('开始读取');
  console.log(response.data.result.latest);
  this.list=response.data.result.latest;
  for(var i=0;i<this.list.length;i++){
    this.list[i].pic=this.list[i].cover;
  }
  console.log(this.list);
}).catch((error)=> {
  console.log(error);
});
}
}


</script>

<style>

</style>