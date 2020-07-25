<template>
  <div class="portal">
    <el-container>
      <el-header height="200px">
        <!--<h1 class="title">模拟实验教学系统</h1>-->
        模拟实验教学系统
      </el-header>
      <el-main>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img class="img-class" src="@/assets/dna-with-nucleotides.png" >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <!--<time class="time">{{ currentDate }}</time>-->
                <el-button @click="goTo" type="text" class="button">开始实验</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import FlipBall from '@/components/FlipBall.vue'

export default {
  name: 'Home',
  components: {
      // FlipBall,
  },
  methods: {
    goTo() {
        this.$router.push({path: '/LabAction'})
    }
  }
}
</script>

<style scoped lang="scss">
.portal{
  .title {
    /*height: 200px;*/
    /*line-height: 200px;*/
    text-align: center;
    background: -webkit-radial-gradient(#fff, #eee);
    background: radial-gradient(#fff, #eee);
    margin: 0px;
  }
  .img-class{
    height: 200px;
    display: compact;
  }
}
</style>

