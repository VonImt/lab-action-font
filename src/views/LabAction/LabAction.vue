<template>
  <div class="labAction">
    <el-container>
      <el-aside width="50%" class="Aside">
        <div class="title">
          单细胞克隆实验
        </div>
        <LabActionScreen />
      </el-aside>
      <el-container>
        <el-header height="60px" class="Header">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">实验资料</el-menu-item>
            <el-menu-item index="2">动画展示</el-menu-item>
            <el-menu-item index="3">练习题</el-menu-item>
          </el-menu>
        </el-header>
        <el-main>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import LabActionScreen from '@/views/LabAction/LabActionScreen.vue'

export default {
  name: 'Home',
  components: {
      LabActionScreen,
  }
}
</script>

<style scoped lang="scss">
.labAction{
  .Aside {
    height: 100%;
  }
  .Header{
    height: 200px;
  }
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

