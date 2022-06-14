// 首页
<template>
  <HeadView></HeadView>
    <MsgView :list="list"></MsgView>
</template>

<script>
import HeadView from './HeadView.vue'
import MsgView from './MsgView.vue'
export default {
//注册头部组件
    components: {
        HeadView,MsgView
    },data(){
        return {
           list:[],
        }
    },
    created() {
var api='/api/x/web-interface/dynamic/region?&jsonp=jsonp&ps=10&rid=1';
   this.axios.get(api).then((response)=> {

          console.log('开始读取');
      console.log(response.data.data.archives);
      this.list=response.data.data.archives;
    }).catch((error)=> {
      console.log(error);
    });
}

}
</script>

<style scoped>

</style>