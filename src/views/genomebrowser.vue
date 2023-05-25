<template>
<el-container>
    <el-header>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index">
            <span> 1000Genomes </span>
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div
              class="d-flex mx-auto flex-column flex-lg-row align-items-center"
            >
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="index"
                    >Home <span class="sr-only">(current)</span></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="sample"> Sample</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="cluster"> Cluster</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="SNP"> SNP</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="GWAS"> GWAS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="LDblock">LDBlock</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="genomebrowser">GenomeBrowser</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="download">Download</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="help">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </el-header>

<div class="mainbody">

<div class="jbrowse_linear_view">4444</div>
</div>



  <!-- footer section -->
  <el-footer>
      <div>
        <p>All Right@LuoYang</p>
      </div>
    </el-footer>
  <!-- footer section -->

</el-container>
</template>


<script src="/static/js/custom.js"></script>
<script src="/static/js/slick.min.js"></script>
<script>
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";
import "@/assets/css/font-awesome.min.css";
  export default{
    components: {
    
    }
  } 
</script>

<style>
.el-header,
.el-footer {
  background-color: white;
  color: #333;
  text-align: center;
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

.mainbody {
  background-color: #eae9e5;
}

.mod_pop {
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: white;
}

.mod_race{
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: white;
}

.showEcharts {
  width: 700px;
  height: 700px;
  position: relative;
  margin: auto;
}

.jbrowse_linear_view{
  min-height: 700px;
}
</style>