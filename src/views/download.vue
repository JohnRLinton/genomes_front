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
      <div class="container">
        <div class="module">
          <el-alert title="Download" type="info" :closable="false"></el-alert>
          <div>
            <div class="mod_h4">
              The Sample dataset can be downloaded at the
              following link
            </div>
            <div class="mod_load">
            <span class="mod_down">Sample Dataset</span>
             <el-button type="primary" @click="download"
              >download<i class="el-icon-upload el-icon--right"></i
            ></el-button>
            </div>
            <!-- <el-divider></el-divider> -->
            <div class="mod_h4">
              The population Genome Clustering dataset can be downloaded at the
              following link
            </div>
            <div class="mod_load">
            <span class="mod_down">Population clustering Dataset</span>
              <el-button type="primary"
              >download<i class="el-icon-upload el-icon--right"></i
            ></el-button>
            </div>
            <!-- <el-divider></el-divider> -->
            <div class="mod_h4">
              The SNP Analysis dataset can be downloaded at the
              following link
            </div>
            <div class="mod_load">
            <span class="mod_down">SNP Analysis Dataset</span>
             <el-button type="primary"
              >download<i class="el-icon-upload el-icon--right"></i
            ></el-button>
            </div>
            <!-- <el-divider></el-divider> -->
            <div class="mod_h4">
              The GWAS Analysis dataset can be downloaded at the
              following link
            </div>
            <div class="mod_load">
            
            <span class="mod_down">GWAS Analysis Dataset</span>
             <el-button type="primary"
              >download<i class="el-icon-upload el-icon--right"></i
            ></el-button>
             
            </div>
            <!-- <el-divider></el-divider> -->
            <div class="mod_h4">
              The LD Analysis dataset can be downloaded at the
              following link
            </div>
            <div class="mod_load">
            <span class="mod_down">LD Analysis Dataset</span>
             <el-button type="primary" style="margin-bottom:60px"
              >download<i class="el-icon-upload el-icon--right"></i
            ></el-button>
           </div>
            
          </div>
        </div>
      </div>
    </div>
    <!-- footer section -->
    <el-footer>
      <div>
        <p class="mod_footer">All Right@Lab</p>
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
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    download(){
      window.location.href='http://localhost:8080/static/sample/integrated_call_samples_v3.20200731.ALL.ped'
    },
  },
};
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

.el-main {
  background-color: #eae9e5;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-divider--horizontal {
  border: 1px solid white;
}
.module {
  background-color: white;
  /* margin-top: 20px; */
  overflow: hidden;
  /* margin-bottom: 20px; */

  /* height: 500px; */
  background-color: white;
  margin-top: 40px;
  overflow: hidden;
  margin-bottom: 40px;
}

.mod_intro {
  text-align: justify;
  font-family: Century;
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
}

.mod_h3 {
  padding: 10px;
  font-family: Century;
  font-size: 18px;
  font-weight: bold;
  margin-top: -15px;
  margin-bottom: -5px;
}
.mod_h1 {
  padding: 10px;
  font-family: Century;
  margin-top: -15px;
}
.mod_footer {
  margin-top: 20px;
  text-align: center;
  font-family: Century;
  font-size: 16px;
}

.el-divider--horizontal {
  border: 1px solid #e1e3e7;
}

.mainbody {
  background-color: #eae9e5;
}

.mod_h4 {
  /* margin-top: 0px; */
  /* margin-left: 20px; */
  margin-top: 60px;
  margin-left: 30px;
  font-family: Century;
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 20px;
}
.mod_down {
  margin-top: 50px;
  margin-left: 30px;
  font-family: Century;
  font-size: 18px;
  font-style: italic;
  
}

.mod_load{
  width: 600px;
}

.el-button{
  float:right;
  
}
</style>