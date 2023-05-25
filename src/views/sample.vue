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
        <!-- Individual Infomation   table -->
        <div class="module">
          <el-alert
            title="Individual Infomation"
            type="info"
            :closable="false"
          ></el-alert>
          <div class="mod_tab">
            <el-table
              :data="
                sampleData.slice((currpage - 1) * pagesize, currpage * pagesize)
              "
              v-loading="loading"
              stripe
              border
              style="width: 100%; margin-top: 20px"
              :default-sort="{ prop: 'date', order: 'descending' }"
            >
              <el-table-column
                fixed
                prop="sampleName"
                label="sampleName"
                sortable
              ></el-table-column>
              <el-table-column prop="sex" label="sex"></el-table-column>
              <el-table-column
                prop="bioID"
                label="bioID"
                sortable
              ></el-table-column>
              <el-table-column
                prop="populationCode"
                label="populationCode"
              ></el-table-column>
              <el-table-column
                prop="populationName"
                label="populationName"
              ></el-table-column>
              <el-table-column
                prop="superpopulationCode"
                label="superpopulationCode"
              ></el-table-column>
              <el-table-column
                prop="superpopulationName"
                label="superpopulationName"
              ></el-table-column>
            </el-table>

            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              layout="total, sizes, prev, pager, next"
              :total="sampleData.length"
              :page-sizes="[20, 50, 100, 200]"
              :page-size="pagesize"
            >
            </el-pagination>
          </div>
        </div>

        <!-- Individual Statistic -->
        <div class="module">
          <el-alert
            title="Individual Statistics"
            type="info"
            :closable="false"
          ></el-alert>

          <!--echarts start-->

          <el-row>
            <el-col :span="8">
              <div>
                <el-statistic>
                  <template slot="formatter">
                    <div
                      ref="RatioOfSup"
                      style="width: 300px; height: 300px"
                    ></div>
                  </template>
                </el-statistic>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <el-statistic>
                  <template slot="formatter">
                    <div
                      ref="RatioOfPop"
                      style="width: 300px; height: 300px"
                    ></div>
                  </template>
                </el-statistic>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <el-statistic>
                  <template slot="formatter">
                    <div
                      ref="RatioOfSex"
                      style="width: 300px; height: 300px"
                    ></div>
                  </template>
                </el-statistic>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- Varation Information -->
        <div class="module">
          <el-alert
            title="Varation Information"
            type="info"
            :closable="false"
          ></el-alert>

          <div class="mod_form">
            <el-form
              :inline="true"
              :model="VariantForm"
              class="demo-form-inline"
            >
              <el-form-item label="SampleID">
               <el-input
                  v-model="VariantForm.sampleID"
                  placeholder="SampleID"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="ChrNo">
                <el-input
                  v-model="VariantForm.ChrNo"
                  placeholder="chrNumber"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="StartPos">
                <el-input
                  v-model="VariantForm.StartPos"
                  placeholder="startPosition"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="EndPos">
                <el-input
                  v-model="VariantForm.EndPos"
                  placeholder="endPosition"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="getVariant">Search</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="mod_tab">
            <el-table
              :data="sampleVarationData"
              v-loading="loading"
              stripe
              border
              style="width: 100%; margin-top: 20px"
              :default-sort="{ prop: 'date', order: 'descending' }"
            >
              <el-table-column
                fixed
                prop="sampleID"
                label="sampleID"
                sortable
              ></el-table-column>
              <el-table-column prop="Chr" label="Chr"></el-table-column>
              <el-table-column
                prop="Pos"
                label="Pos"
                sortable
              ></el-table-column>
              <el-table-column
                prop="IsVaration"
                label="IsVaration"
              ></el-table-column>
              <el-table-column prop="RsId" label="RsId">
                <template slot-scope="scope">
                    <el-link :href="'https://asia.ensembl.org/Homo_sapiens/Variation/Sample?do=core;r=1:230709548-230710548;v='+scope.row.RsId" target="_blank">
                    {{ scope.row.RsId }}
                    </el-link>
                </template>
              </el-table-column>
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
import axios from "axios";
export default {
  data() {
    return {
      sampleData: [],
      temList: [],
      sampleVarationData: [],
      populationNum: [],
      superPopulationNum: [],
      sexNum: [],
      loading: false, //加载显示
      VariantForm: {
        SampleID: "",
        ChrNo: "",
        StartPos: "",
        EndPos: "",
      },
      // rsTabcurrentPage: this.rsTabcurrentPage,

      pagesize: 10,
      currpage: 1,

      samplePageIndex: 1,
      samplePageSize: 10,
      sampleTotalPage: 0,
      rsPageIndex: 1,
      rsPageSize: 20,
      rsTotalPage: 0,

      samplesID: [],
      // like: true,
      // value1: 4154.564,
      // value2: 2222,
      // title: "今年的增长",
      // input: "Hello Element UI!",
    };
  },
  // activated(){
  //   this.getSample();
  // },
  methods: {
    getSample() {
      // console.log("error");
      const that = this;
      axios
        .get("http://10.170.151.0:8080/1000genomes/sample/getAllSample")
        .then(function (res) {
          that.sampleData = res.data.result;
          // console.log(that.sampleData);
          // console.log("111",data.data.result);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getVariant() {
      // this.$http({
      //   url: this.$http.adornUrl("/1000genomes/?"),
      //   method: "get",
      //   params: this.$http.adornParams({
      //     sample: this.VariantForm.SampleID,
      //     chr: this.VariantForm.ChrNo,
      //     startPos: this.VariantForm.StartPos,
      //     endPos: this.VariantForm.EndPos,
      //     page: this.rsPageIndex,
      //     limit: this.rsPageSize,
      //   }),
      // }).then(({ data }) => {
      //   // this.sampleVarationData = data.data;
      //   if (data && data.code === 0) {
      //     this.sampleVarationData = data.data;
      //     this.rsTotalPage = data.page.totalCount;
      //   } else {
      //     this.rsTotalPage = 0;
      //   }
      // });
    this.sampleVarationData=[{
        "sampleID":"HG00096",
        "Chr":1,
        "Pos":10177,
        "IsVaration":"YES",
        "RsId":"rs367896724",
      },
      {
        "sampleID":"HG00096",
        "Chr":1,
        "Pos":10235,
        "IsVaration":"YES",
        "RsId":"rs540431307",
      },
      {
        "sampleID":"HG00096",
        "Chr":1,
        "Pos":10352,
        "IsVaration":"YES",
        "RsId":"rs555500075",
      },
      {
        "sampleID":"HG00096",
        "Chr":1,
        "Pos":10505,
        "IsVaration":"NO",
        "RsId":"rs548419688",
      },
      {
        "sampleID":"HG00096",
        "Chr":1,
        "Pos":10506,
        "IsVaration":"NO",
        "RsId":".",
      },]
    },
    echartsInit() {
      //Super
      let RatioOfSupChart = this.$echarts.init(this.$refs.RatioOfSup);
      RatioOfSupChart.setOption({
        title: {
          text: "Ration Of SuperPopulation",
          left: "center",
        },
        tooltip: {},
        xAxis: {
          data: ["AFR", "EUR", "EAS", "SAS", "AMR"],
        },
        yAxis: {},
        series: [
          {
            name: "SuperPopulation",
            type: "bar",
            data: [836, 659, 601, 522, 497],
          },
        ],
      });

      //population
      let RatioOfPopChart = this.$echarts.init(this.$refs.RatioOfPop);
      RatioOfPopChart.setOption({
        title: {
          text: "Ration Of Population",
          left: "center",
        },
        tooltip: {},
        xAxis: {
          data: [
            "YRI",
            "CEU",
            "IBS",
            "PUR",
            "CLM",
            "PEL",
            "KHV",
            "ACB",
            "LWK",
            "PJL",
            "GWD",
            "GIH",
            "TSI",
            "ASW",
            "CHB",
            "STU",
            "JPT",
            "GBR",
            "MXL",
            "FIN",
            "ITU",
            "CDX",
            "ESN",
            "MSL",
            "BEB",
          ],
        },
        yAxis: {},
        series: [
          {
            name: "Population",
            type: "bar",
            data: [
              186, 183, 165, 157, 139, 132, 122, 121, 116, 113, 113, 113, 112,
              111, 108, 105, 104, 104, 103, 103, 102, 100, 89, 88,
            ],
          },
        ],
      });

      //Sex
      let RatioOfSexChart = this.$echarts.init(this.$refs.RatioOfSex);
      RatioOfSexChart.setOption({
        title: {
          text: "Ration Of Sex",
          left: "center",
        },
        tooltip: {},

        series: [
          {
            name: "Gender",
            type: "pie",
            label: {
              normal: {
                position: "inner",
                show: false,
              },
            },
            data: [
              {
                value: 1569,
                name: "Female",
              },
              {
                value: 935,
                name: "Male",
              },
            ],
          },
        ],
      });
    },

    handleCurrentChange(cpage) {
      this.currpage = cpage;
      // this.getSample();
      // console.log(`当前页: ${val}`);
    },

    handleSizeChange(psize) {
      this.pagesize = psize;
    },

    // currentChangePage(list,currentPage){
    //   let from=(currentPage-1) * this.samplePageSize;
    //   let to =currentPage * this.samplePageSize;
    //   this.temList=[];
    //   for(;from<to;from++){
    //     if(list[from]){
    //       this.temList.push(list[from]);
    //     }
    //   }
    // }
    // handleRsSizeChange(val) {
    //   this.rsPageSize = val;
    //   this.rsPageIndex = 1;
    //   this.getVariant();
    //   console.log(`每页 ${val} 条`);
    // },
    // handleRsCurrentChange(val) {
    //   this.rsIndex = val;
    //   this.getVariant();
    //   console.log(`当前页: ${val}`);
    // },
  },
  mounted() {
    this.$nextTick(() => {
      this.echartsInit();
    });
  },
  created() {
    this.getSample();
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
  margin-left: 35px;
  margin-right: 35px;
  text-align: center;
  /* display:flex;
  justify-content:space-between; */
}

.mod_form {
  /* background-color: grey; */
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 30px;
}
.mod_footer {
  margin-top: 20px;
  text-align: center;
  font-family: Century;
  font-size: 16px;
}
</style>