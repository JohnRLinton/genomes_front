<template>
  <el-container>
    <!-- header section strats -->
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
    <!-- end header section -->

    <!--  section -->

    <div class="mainbody">
      <div class="container">
        <!-- GWAS Infomation -->
        <div class="module">
          <el-alert
            title="GWAS Search"
            type="info"
            :closable="false"
          ></el-alert>

          <div class="mod_form">
            <el-form :inline="true" :model="gwasForm" class="demo-form-inline">
              <el-form-item label="ChrNo">
                <el-input
                  v-model="gwasForm.ChrNo"
                  placeholder="chrNumber"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="Population">
                <el-input
                  v-model="gwasForm.Population"
                  placeholder="population"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="StartPos">
                <el-input
                  v-model="gwasForm.StartPos"
                  placeholder="startPosition"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="EndPos">
                <el-input
                  v-model="gwasForm.EndPos"
                  placeholder="endPosition"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" :plain="true" @click="error"  
                  >Search</el-button
                >
              </el-form-item>
            </el-form>
            <div class="mod_tab">
              <el-table
                :data="adjustData"
                v-loading="loading"
                stripe
                border
                style="width: 100%; margin-top: 20px"
                :default-sort="{ prop: 'date', order: 'descending' }"
              >
                <el-table-column
                  fixed
                  prop="chr"
                  label="chr"
                  sortable
                ></el-table-column>
                <el-table-column prop="snp" label="snp"></el-table-column>
                <el-table-column
                  prop="bp"
                  label="bp"
                  sortable
                ></el-table-column>
                <el-table-column prop="UNADJ" label="UNADJ"></el-table-column>
                <el-table-column prop="GC" label="GC"></el-table-column>
                <el-table-column prop="BONF" label="BONF"></el-table-column>
                <el-table-column prop="HOLM" label="HOLM"></el-table-column>
                <el-table-column
                  prop="SIDAK_SS"
                  label="SIDAK_SS"
                ></el-table-column>
                <el-table-column prop="FDR_BH" label="FDR_BH"></el-table-column>
                <el-table-column prop="FDR_BY" label="FDR_BY"></el-table-column>
              </el-table>
              <el-pagination
                background
                @size-change="handleRsSizeChange"
                @current-change="handleRsCurrentChange"
                :current-page="rsPageIndex"
                layout="total, sizes, prev, pager, next"
                :total="rsTotalPage"
                :page-sizes="[20, 50, 100, 200]"
                :page-size="rsPageSize"
              >
              </el-pagination>
            </div>
          </div>
        </div>

        <!-- Manhattan Infomation -->
        <!-- <div class="module">
          <el-alert
            title="1000 Genome Manhattan Plot"
            type="info"
            :closable="false"
          ></el-alert>
          <div>
            <div class="mod_pic">
              <el-image
                :src="require('@/assets/gwas/mm.jpg')"
                :preview-src-list="mmlarge"
                :fit="contain"
              ></el-image>
            </div>
          </div>
          <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
          <div class="mod_pic">
            <el-image
              :src="require('@/assets/gwas/mc.jpg')"
              :preview-src-list="mclarge"
              :fit="contain"
            ></el-image>
          </div>
        </div> -->

        <!-- population gwas-->

        <div class="module">
          <el-alert
            title="Population GWAS Reault"
            type="info"
            :closable="false"
          ></el-alert>

          <div class="mod_tab">
            <el-table
              :data="
                gwasData.slice((currpage - 1) * pagesize, currpage * pagesize)
              "
              v-loading="loading"
              stripe
              border
              style="width: 100%; margin-top: 20px"
              :default-sort="{ prop: 'date', order: 'descending' }"
            >
              <el-table-column
                fixed
                prop="Population"
                label="Population"
                sortable
              ></el-table-column>
              <el-table-column
                prop="SuperPopulation"
                label="SuperPopulation"
                sortable
              ></el-table-column>
              <el-table-column
                prop="Count"
                label="Count"
                sortable
              ></el-table-column>
              <el-table-column
                prop="Threshold"
                label="Threshold"
                sortable
              ></el-table-column>

              <el-table-column prop="manhattanPlot" label="manhattanPlot"
                ><template slot-scope="scope">
                  <el-image
                    :src="scope.row.manhattanPlot"
                    style="width: 80px; height: 50px"
                    :preview-src-list="[scope.row.manhattanPlot]"
                  >
                    <div slot="error" class="image-slot"></div>
                  </el-image>
                </template>
              </el-table-column>
              <el-table-column prop="qqPlot" label="qqPlot"
                ><template slot-scope="scope">
                  <el-image
                    :src="scope.row.qqPlot"
                    style="width: 80px; height: 50px"
                    :preview-src-list="[scope.row.qqPlot]"
                  >
                    <div slot="error" class="image-slot"></div>
                  </el-image>
                </template>
              </el-table-column>
            </el-table>

            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              layout="total, sizes, prev, pager, next"
              :total="gwasData.length"
              :page-sizes="[10, 30, 30, 50]"
              :page-size="pagesize"
            >
            </el-pagination>
          </div>
        </div>
        <el-backtop></el-backtop>
      </div>
      <!-- footer section -->
    </div>
    <el-footer>
      <div>
        <p class="mod_footer">All Right@Lab</p>
      </div>
    </el-footer>
  </el-container>
</template>


<script src="./static/js/custom.js"></script>
<script src="./static/js/slick.min.js"></script>
<script>
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";
import "@/assets/css/font-awesome.min.css";
export default {
  data() {
    return {
      gwasData: [
        {
          Population: "ACB",
          SuperPopulation: "AFR",
          Count: 96,
          Threshold: 2e-9,
          manhattanPlot: require("@/assets/gwas/mm.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "ASW",
          SuperPopulation: "AFR",
          Count: 61,
          Threshold: 2e-9,
          manhattanPlot: require("@/assets/gwas/ceu2.jpg"),
          qqPlot: require("@/assets/gwas/ceu3.jpg"),
        },
        {
          Population: "ESN",
          SuperPopulation: "AFR",
          Count: 99,
          Threshold: 2e-9,
          manhattanPlot: require("@/assets/gwas/fin2.jpg"),
          qqPlot: require("@/assets/gwas/fin3.jpg"),
        },
        {
          Population: "GWD",
          SuperPopulation: "AFR",
          Count: 113,
          Threshold: 2e-9,
          manhattanPlot: require("@/assets/gwas/gbr2.jpg"),
          qqPlot: require("@/assets/gwas/gbr3.jpg"),
        },
        {
          Population: "LWK",
          SuperPopulation: "AFR",
          Count: 99,
          Threshold: 2e-9,
          manhattanPlot: require("@/assets/gwas/jpt2.jpg"),
          qqPlot: require("@/assets/gwas/jpt3.jpg"),
        },
        {
          Population: "MSL",
          SuperPopulation: "AFR",
          Count: 85,
          Threshold: 2e-9,
          manhattanPlot: require("@/assets/gwas/pjl2.jpg"),
          qqPlot: require("@/assets/gwas/pjl3.jpg"),
        },
        {
          Population: "YRI",
          SuperPopulation: "AFR",
          Count: 108,
          Threshold: 2e-9,
          manhattanPlot: require("@/assets/gwas/tsi2.jpg"),
          qqPlot: require("@/assets/gwas/tsi3.jpg"),
        },
        {
          Population: "CLM",
          SuperPopulation: "AMR",
          Count: 94,
          Threshold: 2e-9,
          manhattanPlot: require("@/assets/gwas/ibs2.jpg"),
          qqPlot: require("@/assets/gwas/ibs3.jpg"),
        },
        {
          Population: "MXL",
          SuperPopulation: "AMR",
          Count: 64,
          Threshold: 2e-9,
          manhattanPlot: require("@/assets/gwas/gih2.jpg"),
          qqPlot: require("@/assets/gwas/gih3.jpg"),
        },
        {
          Population: "PEL",
          SuperPopulation: "AMR",
          Count: 85,
          Threshold:2e-9,
          manhattanPlot: require("@/assets/gwas/itu2.jpg"),
          qqPlot: require("@/assets/gwas/itu3.jpg"),
        },
        {
          Population: "PUR",
          SuperPopulation: "AMR",
          Count: 104,
          Threshold: 2e-9,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "CDX",
          SuperPopulation: "EAS",
          Count: 93,
          Threshold: 2e-9,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "CHB",
          SuperPopulation: "EAS",
          Count: 103,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "CHS",
          SuperPopulation: "EAS",
          Count: 105,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "JPT",
          SuperPopulation: "EAS",
          Count: 104,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "KHV",
          SuperPopulation: "EAS",
          Count: 99,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "CEU",
          SuperPopulation: "EUR",
          Count: 99,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "FIN",
          SuperPopulation: "EUR",
          Count: 99,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "GBR",
          SuperPopulation: "EUR",
          Count: 91,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "IBS",
          SuperPopulation: "EUR",
          Count: 107,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "TSI",
          SuperPopulation: "EUR",
          Count: 107,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "BEB",
          SuperPopulation: "SAS",
          Count: 86,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "GIH",
          SuperPopulation: "SAS",
          Count: 103,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "ITU",
          SuperPopulation: "SAS",
          Count: 102,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "PJL",
          SuperPopulation: "SAS",
          Count: 96,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
        {
          Population: "STU",
          SuperPopulation: "SAS",
          Count: 102,
          Threshold: 0,
          manhattanPlot: require("@/assets/gwas/mc.jpg"),
          qqPlot: require("@/assets/gwas/qq.jpg"),
        },
      ],

      pagesize: 10,
      currpage: 1,
      adjustData: [],
      gwasForm: {
        ChrNo: "",
        Population: "",
        StartPos: "",
        EndPos: "",
      },

      mmlarge: [require("@/assets/gwas/mm.jpg")],
      mclarge: [require("@/assets/gwas/mc.jpg")],
    };
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },

    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    error() {
      // this.$message({
      //   showClose: true,
      //   message: "请输入正确合法的字段！",
      //   type: "error",
      //   offset: 100,
      // });
      this.adjustData=[{
          chr: 22,
          snp: "22:32784047",
          bp: 32784047,
          UNADJ: 7.037e-9,
          GC: 7.037e-9,
          BONF: 0.0005576,
          HOLM: 0.0005576,
          SIDAK_SS: 0.0005574,
          FDR_BH: 0.0005576,
          FDR_BY: 0.006612,
        },
        {
          chr: 22,
          snp: "22:37531560",
          bp: 37531560,
          UNADJ: 4.392e-7,
          GC: 4.392e-7,
          BONF: 0.0348,
          HOLM: 0.0348,
          SIDAK_SS: 0.0342,
          FDR_BH: 0.0174,
          FDR_BY: 0.2063,
        },
        {
          chr: 22,
          snp: "22:32784047",
          bp: 32784047,
          UNADJ: 7.037e-9,
          GC: 7.037e-9,
          BONF: 0.0005576,
          HOLM: 0.0005576,
          SIDAK_SS: 0.0005574,
          FDR_BH: 0.0005576,
          FDR_BY: 0.006612,
        },
        {
          chr: 22,
          snp: "22:46628119",
          bp: 46628119,
          UNADJ: 1.048e-6,
          GC: 1.048e-6,
          BONF: 0.08304,
          HOLM: 0.08304,
          SIDAK_SS: 0.07968,
          FDR_BH: 0.02768,
          FDR_BY: 0.3282,
        },
        {
          chr: 22,
          snp: "22:18835134",
          bp: 18835134,
          UNADJ: 1.429e-6,
          GC: 1.429e-6,
          BONF: 0.1132,
          HOLM: 0.1132,
          SIDAK_SS: 0.107,
          FDR_BH: 0.0283,
          FDR_BY: 0.3356,
        },]
    },
  },
  mounted() {},
};
</script>

<style>
.el-row {
  margin-top: 20px;
  margin-bottom: 20px;
  /* &:last-child {
      margin-bottom: 0;
    } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-divider {
  margin-top: 20px;
  margin-bottom: 20px;
}

.el-input {
  width: 150px;
}

.el-alert {
  margin-bottom: 20px;
}

.like {
  cursor: pointer;
  font-size: 25px;
  display: inline-block;
}

.el-pagination {
  float: right;
  margin-top: 20px;
  margin-bottom: 20px;
}

.el-table {
  float: center;
  text-align: center;
}

.el-header,
.el-footer {
  background-color: white;
  color: #333;
  text-align: center;
  /* line-height: auto; */
}

.el-main {
  background-color: #eae9e5;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 20px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.module {
  background-color: white;
  margin-top: 40px;
  overflow: hidden;
  margin-bottom: 40px;
}

.mainbody {
  background-color: #eae9e5;
}

.mod_tab {
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  text-align: center;
  /* display:flex;
  justify-content:space-between; */
}

.mod_form {
  /* background-color: grey; */
  margin-top: 30px;
  text-align: center;
}

.mod_pic {
  margin: auto;
  text-align: center;
  width: 700px;
}
.el-image {
  width: 700px;
}

.mod_footer {
  margin-top: 20px;
  text-align: center;
  font-family: Century;
  font-size: 16px;
}
</style>