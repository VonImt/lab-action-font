<template>
  <div class="lab-action-screen">
    <div class="scene">
      <div class="background-img">

      </div>
    </div>
    <div>
      <el-steps :active="2" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import FlipBall from '@/components/FlipBall.vue'

export default {
  name: 'Home',
  components: {
      // FlipBall,
  }
}
</script>

<style scoped lang="scss">
.lab-action-screen{
  .scene{
    position: relative;
    width: 100%;
    height: 630px;
    .background-img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>

