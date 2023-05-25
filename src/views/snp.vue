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
        <!-- SNP Infomation -->
        <div class="module">
          <el-alert
            title="SNP Statistics"
            type="info"
            :closable="false"
          ></el-alert>
          <el-row>
            <el-col :span="10">
              <div>
                <el-statistic>
                  <template slot="formatter">
                    <div class="mod_span">
                      <el-table :data="variantData"  style="width: 100%;font-size: 15px" :show-header="false"   cell-style="font-weight: 700;"  	>
                        <el-table-column prop="type"  >
                        </el-table-column>
                        <el-table-column prop="num" >
                        </el-table-column>
                      </el-table>
                      
                    </div>
                  </template>
                </el-statistic>
              </div>
            </el-col>
            <el-col :span="14">
              <div>
                <el-statistic>
                  <template slot="formatter">
                    <div
                      ref="RatioOfSNP"
                      style="width: 700px; height: 350px; margin: auto"
                    ></div>
                  </template>
                </el-statistic>
              </div>
            </el-col>
          </el-row>

          <el-divider><b>SNP Density Plot in All Chr</b></el-divider>
          <div class="mod_pic">
            <el-image
              :src="require('@/assets/snp/chrall_snp.jpg')"
              :preview-src-list="snplarge"
              :fit="contain"
            ></el-image>
          </div>
        </div>

        <!-- SNP density Infomation -->
        <div class="module">
          <el-alert
            title="SNP Density Information"
            type="info"
            :closable="false"
          ></el-alert>

          <div class="mod_tab">
            <el-table
              :data="
                snpData.slice((currpage - 1) * pagesize, currpage * pagesize)
              "
              v-loading="loading"
              stripe
              border
              style="width: 100%; margin-top: 20px"
              :default-sort="{ prop: 'date', order: 'descending' }"
            >
              <el-table-column
                fixed
                prop="Chr"
                label="Chr"
                sortable
              ></el-table-column>
              <el-table-column
                prop="Sites"
                label="Sites"
                sortable
              ></el-table-column>
              <el-table-column
                prop="SNPs"
                label="SNPs"
                sortable
              ></el-table-column>
              <el-table-column
                prop="INDELs"
                label="INDELs"
                sortable
              ></el-table-column>
              <el-table-column
                prop="Others"
                label="Others"
                sortable
              ></el-table-column>
              <el-table-column prop="SNPDensityPlot" label="SNPDensityPlot"
                ><template slot-scope="scope">
                  <el-image
                    :src="scope.row.SNPDensityPlot"
                    style="width: 80px; height: 50px"
                    :preview-src-list="[scope.row.SNPDensityPlot]"
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
              :total="snpData.length"
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
      snpData: [
        {
          Chr: 1,
          Sites: 6468094,
          SNPs: 6219478,
          INDELs: 248708,
          Others: 4355,
          SNPDensityPlot: require("@/assets/snp/chr1.jpg"),
        },
        {
          Chr: 2,
          Sites: 7081600,
          SNPs: 6812627,
          INDELs: 268927,
          Others: 4966,
          SNPDensityPlot: require("@/assets/snp/chr2.jpg"),
        },
        {
          Chr: 3,
          Sites: 5832276,
          SNPs: 5606501,
          INDELs: 225672,
          Others: 4219,
          SNPDensityPlot: require("@/assets/snp/chr3.jpg"),
        },
        {
          Chr: 4,
          Sites: 5732585,
          SNPs: 5503429,
          INDELs: 229295,
          Others: 4083,
          SNPDensityPlot: require("@/assets/snp/chr4.jpg"),
        },
        {
          Chr: 5,
          Sites: 5265763,
          SNPs: 5058532,
          INDELs: 207201,
          Others: 3852,
          SNPDensityPlot: require("@/assets/snp/chr5.jpg"),
        },
        {
          Chr: 6,
          Sites: 5024119,
          SNPs: 4819840,
          INDELs: 204406,
          Others: 3673,
          SNPDensityPlot: require("@/assets/snp/chr6.jpg"),
        },
        {
          Chr: 7,
          Sites: 4716715,
          SNPs: 4535875,
          INDELs: 180556,
          Others: 3713,
          SNPDensityPlot: require("@/assets/snp/chr7.jpg"),
        },
        {
          Chr: 8,
          Sites: 4597105,
          SNPs: 4436890,
          INDELs: 160212,
          Others: 3158,
          SNPDensityPlot: require("@/assets/snp/chr8.jpg"),
        },
        {
          Chr: 9,
          Sites: 3560687,
          SNPs: 3429223,
          INDELs: 131299,
          Others: 2652,
          SNPDensityPlot: require("@/assets/snp/chr9.jpg"),
        },
        {
          Chr: 10,
          Sites: 3992219,
          SNPs: 6219478,
          INDELs: 3839407,
          Others: 2780,
          SNPDensityPlot: require("@/assets/snp/chr10.jpg"),
        },
        {
          Chr: 11,
          Sites: 4045628,
          SNPs: 3893661,
          INDELs: 151738,
          Others: 2954,
          SNPDensityPlot: require("@/assets/snp/chr11.jpg"),
        },
        {
          Chr: 12,
          Sites: 3868428,
          SNPs: 3712654,
          INDELs: 155857,
          Others: 2934,
          SNPDensityPlot: require("@/assets/snp/chr12.jpg"),
        },
        {
          Chr: 13,
          Sites: 2857916,
          SNPs: 2738656,
          INDELs: 119217,
          Others: 2153,
          SNPDensityPlot: require("@/assets/snp/chr13.jpg"),
        },
        {
          Chr: 14,
          Sites: 2655067,
          SNPs: 2549636,
          INDELs: 105510,
          Others: 1931,
          SNPDensityPlot: require("@/assets/snp/chr14.jpg"),
        },
        {
          Chr: 15,
          Sites: 2424689,
          SNPs: 2329860,
          INDELs: 94853,
          Others: 1643,
          SNPDensityPlot: require("@/assets/snp/chr15.jpg"),
        },
        {
          Chr: 16,
          Sites: 2697949,
          SNPs: 2608503,
          INDELs: 89492,
          Others: 1836,
          SNPDensityPlot: require("@/assets/snp/chr16.jpg"),
        },
        {
          Chr: 17,
          Sites: 2329288,
          SNPs: 2236081,
          INDELs: 93321,
          Others: 1691,
          SNPDensityPlot: require("@/assets/snp/chr17.jpg"),
        },
        {
          Chr: 18,
          Sites: 2267185,
          SNPs: 2180048,
          INDELs: 87061,
          Others: 1747,
          SNPDensityPlot: require("@/assets/snp/chr18.jpg"),
        },
        {
          Chr: 19,
          Sites: 1832506,
          SNPs: 1759591,
          INDELs: 72918,
          Others: 1453,
          SNPDensityPlot: require("@/assets/snp/chr19.jpg"),
        },
        {
          Chr: 20,
          Sites: 1812841,
          SNPs: 1746157,
          INDELs: 66641,
          Others: 1302,
          SNPDensityPlot: require("@/assets/snp/chr20.jpg"),
        },
        {
          Chr: 21,
          Sites: 1105538,
          SNPs: 1059304,
          INDELs: 46426,
          Others: 775,
          SNPDensityPlot: require("@/assets/snp/chr21.jpg"),
        },
        {
          Chr: 22,
          Sites: 1103547,
          SNPs: 1060388,
          INDELs: 43230,
          Others: 801,
          SNPDensityPlot: require("@/assets/snp/chr22.jpg"),
        },
        {
          Chr: "X",
          Sites: 3468093,
          SNPs: 1103547,
          INDELs: 227113,
          Others: 2040,
          SNPDensityPlot: require("@/assets/snp/chrX.jpg"),
        },
        {
          Chr: "Y",
          Sites: 62042,
          SNPs: 60505,
          INDELs: 1314,
          Others: 110,
          SNPDensityPlot: require("@/assets/snp/chrY.jpg"),
        },
      ],
      variantData:[{
        type:"ChrNum:",
        num:24,
      },{
        type:"Sites:",
        num:84354814,
      },{
        type:"SNPs:",
        num:78136341,
      },{
        type:"INDELs:",
        num:3135424,
      },{
        type:"others:",
        num:58671,
      },],
      // rsTabcurrentPage: this.rsTabcurrentPage,
      pagesize: 10,
      currpage: 1,

      // like: true,
      // value1: 4154.564,
      // value2: 2222,
      // title: "今年的增长",
      // input: "Hello Element UI!",

      snplarge: [require("@/assets/snp/chrall_snp.jpg")],
      chrlarge: [require("@/assets/snp/chr2_snp.jpg")],
    };
  },
  methods: {
    echartsInit() {
      let RatioOfSNPChart = this.$echarts.init(this.$refs.RatioOfSNP);
      RatioOfSNPChart.setOption({
        title: {
          text: "Ration Of SNP",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Variant Type",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: true,
            },
            data: [
              { value: 78136341, name: "SNP" },
              { value: 3135424, name: "INDEL" },
              { value: 58671, name: "Others" },
              { value: 416023, name: "Multiallelic sites" },
              { value: 259370, name: "Multiallelic SNP sites" },
            ],
          },
        ],
      });
    },
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },

    handleSizeChange(psize) {
      this.pagesize = psize;
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
.mod_span{
  margin-top: 50px;
  margin-left: 100px;
  text-align: center;
  width: 300px;
  
}

.mod_footer {
  margin-top: 20px;
  text-align: center;
  font-family: Century;
  font-size: 16px;
}
</style>