<template>
  <div >
    <el-header>Header</el-header>
    <el-container>
      <el-aside ></el-aside>
      <el-main>Main</el-main>
      <el-aside ></el-aside>
    </el-container>
    <el-footer>Footer</el-footer>
  </div>
</template>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #eae9e5;
    color: #333;
    text-align: center;
    line-height: 200px;
    width: 100px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>