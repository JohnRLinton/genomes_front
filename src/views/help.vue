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
          <el-alert title="Help" type="info" :closable="false"></el-alert>
          <div style="mod_div">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item
                title="What does 1000 GenomeDB do?"
                name="1"
                class="mod_title"
              >
                <div>
                  This project uses population genome data from the third stage
                  of the Thousand Genomes Project to annotate, analyze and
                  compare multiple genomes. The research contents include single
                  nucleotide polymorphism analysis, genome-wide association
                  analysis, linkage disequilibrium analysis, population
                  clustering, genetic similarity analysis, etc., and the above
                  results are visualized by relevant techniques and methods.
                  Therefore, the visualization technology and application of
                  population genomics data studied in this paper is mainly aimed
                  at building a visual website including storage, analysis and
                  display function modules, and displaying the research results
                  in a way that is easy to operate, fast, easy to maintain and
                  intuitive. This website enables other researchers to visually
                  compare and analyze the associations between populations'
                  genomes from multiple aspects and conduct related studies.
                </div>
                <div class="mod_pic">
                  <el-image
                    :src="require('@/assets/help/home.png')"
                    :preview-src-list="homelarge"
                  ></el-image>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Sample Data?" name="2">
                <div>
                  控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                </div>
                <div>
                  页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                </div>
              </el-collapse-item>
              <el-collapse-item title="SNP Analysis?" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>
                  清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                </div>
                <div>
                  帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                </div>
              </el-collapse-item>
              <el-collapse-item title="GWAS Analysis?" name="4">
                <div>
                  用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                </div>
                <div>
                  结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                </div>
              </el-collapse-item>
              <el-collapse-item title="LD Analysis?" name="4">
                <div>
                  用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                </div>
                <div>
                  结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                </div>
              </el-collapse-item>
              <el-collapse-item title="Genome Browser Analysis?" name="5">
                <div>
                  用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                </div>
                <div>
                  结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                </div>
              </el-collapse-item>
            </el-collapse>
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
    return {
      activeNames: ["1"],
      homelarge: [require("@/assets/help/home.png")],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
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
  height: 800px;
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

.mod_load {
  width: 600px;
}

.el-button {
  float: right;
}

.mod_title {
  font-family: Century;
  /* font-size: 25px;
  font-weight: bold; */
}

.mod_div{
  border: 1px solid black;
  margin-left: 10px;
}
</style>