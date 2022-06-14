//详细
<template>
<DetailheadView></DetailheadView>
  <div class="detail" style="margin-top:3.5rem">
    <div class="fm">
      <img :src="this.list.data.pic" style="height: 13.5rem;" />
    </div>
    <div class="border">
    <div class="title">{{ list.data.title }}    </div>
    <div class="like" style=" display: inline-block;">点赞:<span style="color:red">{{ list.data.stat.like }}</span>
    <div style=" display: inline-block;margin-left:12.9rem" @click="desc">{{ text }}</div></div>

    <div v-show="show" class="desc" style="color:#ccc;font-size:0.75rem;margin-left:0.5rem">介绍:{{ list.data.desc }}</div>
    </div>
    <!-- 作者信息 -->
    <div class="author" style="border-bottom:1px solid #ccc">
      <div class="avatar-img">
        <img :src="list.data.owner.face" />
      </div>
      <div class="name">{{ list.data.owner.name }}</div>
      <div class="time">播放量<span>{{list.data.stat.reply}} &nbsp;&nbsp;&nbsp;</span>分享:<span >{{list.data.stat.share}}</span></div>
    </div>


    <!-- 菜单 -->
    <div class="recommend" style="    padding-top: 0.4rem;">
      <div class="title" style="">相关推荐</div>
      <div class="pl">评论(未开放)</div>
      </div>
      <MsgView :list="tuijian" :show='headshow'></MsgView>
    <!-- list:{{ list.data }} -->
  </div>
</template>

<script>
import DetailheadView from '../views/DetailheadView.vue'
import MsgView from './MsgView.vue'
export default {
  components: {
    MsgView,DetailheadView
  },
  name: "DetailView",
  data() {
    return {
      bvid: this.$route.params.bvid,
      list: [],
      headshow:false,
      show: false,
      text: "点击展开",
      tuijian:[]
    };
  },
  methods: {
    desc() {
      console.log("你点击了展开");
      if (this.show == false) {
   
        console.log("展开");
        this.text = "点击收回";
             this.show = true;
      } else {
       
        console.log("收回");
        this.text = "点击展开";
         this.show = false;
      }
    },
  },
  created() {
    //本视频的推荐
    console.log('开始')
    console.log(this.bvid);
    var api = "/api/x/web-interface/view?bvid=" + this.bvid;
    var api2="/api/x/web-interface/archive/related?bvid="+ this.bvid;
    this.axios.get(api2).then((response) => {
      console.log("开始读取推荐信息");
      console.log(response.data);
      this. tuijian = response.data.data;
    });
    this.axios
      .get(api)
      .then((response) => {
        console.log("开始读取");
        console.log(response.data);
        this.list = response.data;

        console.log(this.list);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.fm {
  display: flex;
height: 13.5rem;

width: 100%;

}
.title {
  height: auto;
  font-size: 1rem;
 margin-left: 0.5rem;
}
.desc{
    height: auto;
     
}
.border{
    background: #fff;
    height:auto;
}
.like{
  margin-left: 0.5rem;
}

/* 视频作者 */
.author{
  display: flex;
  height: 2rem;
}

.avatar-img{
  flex: 1;
}
.avatar-img img{

  height: 1.5rem;
  border-radius:1rem;
  margin-left: 0.5rem;
}
.name{
  flex: 3;
 
}
.time{
  flex:4
}

/* 菜单 */
.recommend{
  display:flex;
  height: 2rem;
  border-bottom: 1px solid #ccc;
}
.recommend .title{flex: 1;text-align: center; border-right: 1px solid #ccc;}
.recommend .pl{flex: 1;text-align: center;}
</style>