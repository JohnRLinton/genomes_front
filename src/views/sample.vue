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
        <!-- Individual Infomation -->
        <div class="module">
          <el-alert
            title="Individual Infomation"
            type="info"
            :closable="false"
          ></el-alert>
          <div class="mod_tab">
            <el-table
              :data="sampleData"
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
              <el-table-column prop="sex" label="sex"></el-table-column>
              <el-table-column
                prop="BioID"
                label="BioSampleID"
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
                prop="SupCode"
                label="SuperPopulationCode"
              ></el-table-column>
              <el-table-column
                prop="SupName"
                label="SuperPopulationName"
              ></el-table-column>
            </el-table>

            <el-pagination
              background
              @size-change="handleSampleSizeChange"
              @current-change="handleSampleCurrentChange"
              :current-page="samplePageIndex"
              layout="total, sizes, prev, pager, next"
              :total="sampleTotalPage"
              :page-sizes="[20, 50, 100, 200]"
              :page-size="samplePageSize"
            >
            </el-pagination>
          </div>
        </div>

        <!-- Individual Statistic -->
        <div class="module">
          <el-alert
            title="Individual Statistic"
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
                <el-statistic title="Ratio of Population">
                  <template slot="formatter"> 456/2 </template>
                </el-statistic>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <el-statistic title="Ratio of Men to Women">
                  <template slot="formatter"> 456/2 </template>
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
                <el-select
                  v-model="VariantForm.SampleID"
                  placeholder="SampleID"
                >
                  <el-option
                    v-for="id in samplesID"
                    :label="id.id"
                    :value="id.id"
                    :key="id.id"
                  ></el-option>
                </el-select>
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
              <el-table-column prop="RsId" label="RsId"></el-table-column>
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
        <p>All Right@</p>
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
      sampleData: [],
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
      samplePageIndex: 1,
      samplePageSize: 20,
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
  methods: {
    getSample() {
      this.$http({
        url: this.$http.adornUrl("/1000genomes/sample/getAllsample"),
        method: "get",
        params: this.$http.adornParams({
          page: this.samplePageIndex,
          limit: this.samplePageSize,
        }),
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.sampleData = data.data;
          this.populationNum = data.NumPopulation;
          this.superPopulationNum = data.NumSuperPopulation;
          this.sexNum = data.NumSex;
          this.sampleTotalPage = data.page.totalCount;
          this.samplesID = data.sampleID;
        } else {
          this.sampleTotalPage = 0;
        }
      });
    },
    getVariant() {
      this.$http({
        url: this.$http.adornUrl("/1000genomes/?"),
        method: "get",
        params: this.$http.adornParams({
          sample: this.VariantForm.SampleID,
          chr: this.VariantForm.ChrNo,
          startPos: this.VariantForm.StartPos,
          endPos: this.VariantForm.EndPos,
          page: this.rsPageIndex,
          limit: this.rsPageSize,
        }),
      }).then(({ data }) => {
        // this.sampleVarationData = data.data;
        if (data && data.code === 0) {
          this.sampleVarationData = data.data;
          this.rsTotalPage = data.page.totalCount;
        } else {
          this.rsTotalPage = 0;
        }
      });
    },
    echartsInit() {
      let RatioOfSupChart = this.$echarts.init(this.$refs.RatioOfSup);
      RatioOfSupChart.setOption({
        title: {
          text: "Ration Of SuperPopulation",
          left: "center",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
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
      this.getVariant();
      console.log(`每页 ${val} 条`);
    },
    handleRsCurrentChange(val) {
      this.rsIndex = val;
      this.getVariant();
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
  margin-left: 50px;
  margin-right: 30px;
}
</style>