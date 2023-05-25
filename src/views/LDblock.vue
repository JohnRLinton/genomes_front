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
        <!-- LDBlockShow Infomation -->
        <div class="module">
          <el-alert
            title="LDBlock Search"
            type="info"
            :closable="false"
          ></el-alert>
          <div class="mod_form">
            <el-form
              :inline="true"
              :model="LDBlockForm"
              class="demo-form-inline"
            >
              <el-form-item label="ChrNo">
                <el-input
                  v-model="LDBlockForm.ChrNo"
                  placeholder="chrNumber"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="StartPos">
                <el-input
                  v-model="LDBlockForm.StartPos"
                  placeholder="startPosition"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="EndPos">
                <el-input
                  v-model="LDBlockForm.EndPos"
                  placeholder="endPosition"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="getLDBlock">Search</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="mod_pic">
            <el-image
              :src="LDBlockpic"
              :preview-src-list="LDBlocklarge"
              :fit="contain"
            ></el-image>
          </div>
        </div>

        <!-- LD decay Search -->
        <div class="module">
          <el-alert
            title="LD decay Search"
            type="info"
            :closable="false"
          ></el-alert>
          <div class="mod_form">
            <el-form
              :inline="true"
              :model="lddecayForm"
              class="demo-form-inline"
               style="margin-left:200px"
            >
              <el-form-item label="Population">
                <el-input v-model="lddecayForm.population" placeholder="population" clearable></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="error">Search</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="mod_pic">
            <el-image
              :src="LDdecaypic"
              :preview-src-list="chblarge"
            ></el-image>
          </div>
        </div>

        <!-- LD-decay Plot -->
        <div class="module">
          <el-alert
            title="1000 Genome LD Decay Information"
            type="info"
            :closable="false"
          ></el-alert>
          <div class="mod_tab">
            <el-table
              :data="
                lddeacyData.slice(
                  (currpage - 1) * pagesize,
                  currpage * pagesize
                )
              "
              v-loading="loading"
              stripe
              border
              style="width: 100%; margin-top: 20px"
              :default-sort="{ prop: 'date', order: 'descending' }"
            >
              <el-table-column
                fixed
                prop="population"
                label="population"
                sortable
              ></el-table-column>
              <el-table-column
                prop="count"
                label="count"
                sortable
              ></el-table-column>
              <el-table-column prop="LDdecayPlot" label="LDdecayPlot"
                ><template slot-scope="scope">
                  <el-image
                    :src="scope.row.LDdecayPlot"
                    style="width: 80px; height: 50px"
                    :preview-src-list="[scope.row.LDdecayPlot]"
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
              :total="lddeacyData.length"
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
      lddeacyData: [
        {
          population: "EAS",
          count: 504,
          LDdecayPlot: require("@/assets/ld/eas.png"),
        },
        {
          population: "SAS",
          count: 489,
          LDdecayPlot: require("@/assets/ld/sas.png"),
        },
        ,
        {
          population: "EUR",
          count: 503,
          LDdecayPlot: require("@/assets/ld/eur.png"),
        },
        ,
        {
          population: "AMR",
          count: 347,
          LDdecayPlot: require("@/assets/ld/amr.png"),
        },
        ,
        {
          population: "AFR",
          count: 661,
          LDdecayPlot: require("@/assets/ld/afr.png"),
        },
        ,
        {
          population: "Super",
          count: 2504,
          LDdecayPlot: require("@/assets/ld/super.png"),
        },
      ],

      LDBlockpic:[],
      LDdecaypic:[],
      pagesize: 10,
      currpage: 1,
      loading: false, //加载显示
      LDBlockForm: {
        ChrNo: "",
        StartPos: "",
        EndPos: "",
      },
      lddecayForm:{
        population:"",
      },
      LDBlocklarge: [require("@/assets/ld/detail.png")],
      chblarge: [require("@/assets/ld/chb.png")],
      SNPdensitylarge: [require("@/assets/img/SNPdensity.png")],
      manhattanlarge: [require("@/assets/img/manhattan.png")],
      gwaslarge: [require("@/assets/img/gwas.png")],
      ldsuperlarge: [require("@/assets/ld/super.png")],
      ldeaslarge: [require("@/assets/ld/cn.png")],
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
      //   message: "请输入正确合法的人群代码！",
      //   type: "error",
      //   offset: 500,
      // });
      this.LDdecaypic=require('@/assets/ld/chb.png')
    },
    getLDBlock() {
      // this.$http({
      //   url: this.$http.adornUrl("/1000genomes/?"),
      //   method: "get",
      //   params: this.$http.adornParams({
      //     chr: this.LDBlockForm.ChrNo,
      //     startPos: this.LDBlockForm.StartPos,
      //     endPos: this.LDBlockForm.EndPos,
      //     page: this.rsPageIndex,
      //     limit: this.rsPageSize,
      //   }),
      // }).then(({ data }) => {
      //   // this.sampleVarationData = data.data;
      //   if (data && data.code === 0) {
      //     this.LDBlockData = data.data;
      //     this.rsTotalPage = data.page.totalCount;
      //   } else {
      //     this.rsTotalPage = 0;
      //   }
      // });
      this.LDBlockpic=require('@/assets/ld/detail.png')
    },
    echartsInit() {},
    handleSampleSizeChange(val) {
      this.samplePageSize = val;
      this.samplePageIndex = 1;
      this.getSample();
      console.log(`每页 ${val} 条`);
    },
    handleSampleCurrentChange(val) {
      this.samplePageIndex = val;
      this.getSample();
      console.log(`当前页: ${val}`);
    },
    handleRsSizeChange(val) {
      this.rsPageSize = val;
      this.rsPageIndex = 1;
      this.getLDBlock();
      console.log(`每页 ${val} 条`);
    },
    handleRsCurrentChange(val) {
      this.rsIndex = val;
      this.getLDBlock();
      console.log(`当前页: ${val}`);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.echartsInit();
    });
  },
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
  margin-left: 200px;
  margin-right: 50px;
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