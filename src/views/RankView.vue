// 排行
<template>
<HeadView></HeadView>
<MsgView :list="list"></MsgView>
  <div class='rank'>
    
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
  var api='/api/x/web-interface/ranking/region?&rid=1';
this.axios.get(api).then((response)=> {
  console.log('开始读取');
  console.log(response.data.data);
  this.list=response.data.data;
}).catch((error)=> {
  console.log(error);
});
}
}


</script>

<style>

</style>