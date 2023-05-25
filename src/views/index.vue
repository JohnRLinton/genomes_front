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

    <el-main>
      <div>
        <el-carousel :interval="4000" type="card" height="500px">
          <el-carousel-item v-for="item in pics" :key="item.id">
            <el-image
              :src="item.pic"
              style="width: 100%; height: 100%"
            ></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>

      <el-divider></el-divider>
      <div class="module">
        <h1 class="mod_h1">1000Genome DB</h1>
        <div class="mod_intro">
          The project uses population genome data from the third phase of the
          1,000 Genomes Project to annotate, analyze and compare multiple
          genomes. The research contents included single nucleotide polymorphism
          analysis, genome-wide association analysis, linkage disequilibrium
          analysis, population clustering, genetic similarity analysis, etc.,
          and the above results were visualized by relevant techniques and
          methods. By building a visual website with storage, analysis and
          display function modules, the association between population genomes
          can be visually compared and analyzed from multiple aspects.
        </div>
        <el-divider></el-divider>
        <!-- <div>
          <el-row>
            <el-col :span="12">
              <div>
                <h3 class="mod_h3">Sample</h3>
                <div class="mod_intro">
                  The sample information interface displays information about
                  individuals participating in the 1000 Genomes Project. Users
                  can enter the relevant information of the sample, query the
                  disease status of the sample, and associate it with the dbSNP
                  database.
                </div>
                <el-divider></el-divider>
                <h3 class="mod_h3">SNP</h3>
                <div class="mod_intro">
                  The SNP Analysis page provides the overall distribution and
                  statistics of SNPs on the genome of a population.
                </div>
                <el-divider></el-divider>
                <h3 class="mod_h3">LD Analysis</h3>
                <div class="mod_intro">
                  The linkage Disequilibrium analysis page shows the degree of
                  linkage among SNPs and the attenuation of linkage
                  disequilibrium.
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <h3 class="mod_h3">Cluster</h3>
                <div class="mod_intro">
                  The reduction and clustering algorithm was used to classify
                  2504 samples to further examine the similarity between
                  individuals and groups.
                </div>
                <el-divider></el-divider>
                <h3 class="mod_h3">GWAS</h3>
                <div class="mod_intro">
                  On the association analysis page, 26 populations were analyzed
                  to make statistics and check the correlation between a
                  mutation and the target trait.
                </div>
                <el-divider></el-divider>
                <h3 class="mod_h3">Genome Browser</h3>
                <div class="mod_intro">
                  The Gene Browser provides visualization of multiple genomic
                  information. Users can select the chromosome number and
                  different types, and perform the track display of relevant
                  genome sequences on the panel. The browser provides functions
                  such as zooming, dragging, and searching to facilitate users
                  to view the region sequence information.
                </div>
              </div>
            </el-col>
          </el-row>
        </div> -->
      <div class="mod_paper">
        <el-image :src="require('@/assets/img/paper-5.png')"
              style="width: 100%; height: 100%"></el-image>
      </div>
      </div>
<el-backtop></el-backtop>
    </el-main>

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
      pics: [
        {
          id: 0,
          pic: require("@/assets/snp/chrall_snp.jpg"),
        },
        {
          id: 1,
          pic: require("@/assets/gwas/mm.jpg"),
        },
        {
          id: 2,
          pic: require("@/assets/ld/super.png"),
        },
        {
          id: 3,
          pic: require("@/assets/cluster/super.png"),
        },
        // {
        //   id: 4,
        //   pic: require("@/assets/ld/detail.png"),
        // },
      ],
    };
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
  background-color: #eae9e5;
  /* margin-top: 20px; */
  overflow: hidden;
  /* margin-bottom: 20px; */
  text-align: center;
  margin-left: 230px;
  margin-right: 230px;
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
.mod_footer{
  margin-top: 20px;
  text-align: center;
  font-family: Century;
    font-size: 16px;
}
</style>