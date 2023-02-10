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

    <!-- mainbody start -->
    <div class="mainbody">
      <!-- umap section start -->

      <section class="course_section layout_padding">
        <div class="container-fluid pr-0">
          <div class="heading_container">
            <h2>Population Cluster</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </p>
          </div>
          <div class="course_container">
            <div class="course_owl-carousel owl-carousel owl-theme" ref="car">
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/img/super.png')"
                      :preview-src-list="superlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>Super Population</h4>
                    <p>
                      Incidunt veritatis adipisci autem repellat possimus id eos
                      praesentium, beatae repudiandae.
                    </p>
                    <a @click="jumpsup"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/img/population.png')"
                      :preview-src-list="populationlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>Population</h4>
                    <p>
                      Incidunt veritatis adipisci autem repellat possimus id eos
                      praesentium, beatae repudiandae.
                    </p>
                    <a @click="jumppop"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/img/eur.png')"
                      :preview-src-list="eurlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>EUR</h4>
                    <p>
                      Incidunt veritatis adipisci autem repellat possimus id eos
                      praesentium, beatae repudiandae.
                    </p>
                    <a @click="jumpeur"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/img/amr.png')"
                      :preview-src-list="amrlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>AMR</h4>
                    <p>
                      Incidunt veritatis adipisci autem repellat possimus id eos
                      praesentium, beatae repudiandae.
                    </p>
                    <a @click="jumpamr"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/img/afr.png')"
                      :preview-src-list="afrlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>AFR</h4>
                    <p>
                      Incidunt veritatis adipisci autem repellat possimus id eos
                      praesentium, beatae repudiandae.
                    </p>
                    <a @click="jumpafr"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/img/eas.png')"
                      :preview-src-list="easlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>EAS</h4>
                    <p>
                      Incidunt veritatis adipisci autem repellat possimus id eos
                      praesentium, beatae repudiandae.
                    </p>
                    <a @click="jumpeas"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/img/sas.png')"
                      :preview-src-list="saslarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>SAS</h4>
                    <p>
                      Incidunt veritatis adipisci autem repellat possimus id eos
                      praesentium, beatae repudiandae.
                    </p>
                    <a @click="jumpsas"> View Detail </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container">
        <div class="mod_pop">
          <el-tabs v-model="activeName" @tab-click="PopClusterClick">
            <el-tab-pane label="super" name="first">
              <div ref="superclusterechart" class="showEcharts"></div>
            </el-tab-pane>
            <el-tab-pane label="population" name="population">
              <div ref="popclusterechart" class="showEcharts"></div>
            </el-tab-pane>
          </el-tabs>
        </div>

        <div class="mod_race">
          <el-tabs v-model="activeName" @tab-click="PopClusterClick">
            <el-tab-pane label="EUR" name="first">
              <div ref="eurclusterechart" class="showEcharts"></div>
            </el-tab-pane>
            <el-tab-pane label="AMR" name="amr">
              <div ref="amrclusterechart" class="showEcharts"></div>
            </el-tab-pane>
            <el-tab-pane label="AFR" name="afr">
              <div ref="afrclusterechart" class="showEcharts"></div>
            </el-tab-pane>
            <el-tab-pane label="EAS" name="eas">
              <div ref="easclusterechart" class="showEcharts"></div>
            </el-tab-pane>
            <el-tab-pane label="SAS" name="sas">
              <div ref="sasclusterechart" class="showEcharts"></div>
            </el-tab-pane>
        
          </el-tabs>
        </div>
      </section>
      <!-- mainbody ends -->
    </div>

    <!-- footer section -->
    <el-footer>
      <div>
        <p>All Right@LuoYang</p>
      </div>
    </el-footer>
  </el-container>
</template>






<script>
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";
import "@/assets/css/font-awesome.min.css";
// import custom from "static/js/custom";
export default {
  data() {
    return {
      // coursal pics,
      superlarge: [require("@/assets/img/super.png")],
      populationlarge: [require("@/assets/img/population.png")],
      eurlarge: [require("@/assets/img/eur.png")],
      amrlarge: [require("@/assets/img/amr.png")],
      afrlarge: [require("@/assets/img/afr.png")],
      easlarge: [require("@/assets/img/eas.png")],
      saslarge: [require("@/assets/img/sas.png")],

      //tabs
      activeName: "first",

      //points
      allList: [],
      popList: [],
      sasList: [],
      easList: [],
      amrList: [],
      afrList: [],
      eurList: [],
    };
  },
  components: {},
  methods: {
    jumpsup(){
      this.$refs.superclusterechart.scrollIntoView(true);
    },
    jumppop(){
      this.$refs.popclusterechart.scrollIntoView(true);
    },
    jumpeur(){
      this.$refs.eurclusterechart.scrollIntoView(true);
    },
    jumpamr(){
      this.$refs.amrclusterechart.scrollIntoView(true);
    },
    jumpafr(){
      this.$refs.afrclusterechart.scrollIntoView(true);
    },
    jumpeas(){
      this.$refs.easclusterechart.scrollIntoView(true);
    },
    jumpsas(){
      this.$refs.sasclusterechart.scrollIntoView(true);
    },
    owlCarouselInit() {
      $(".course_owl-carousel").owlCarousel({
        autoplay: true,
        // loop: true,
        margin: 5,
        autoHeight: true,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        autoWidth: true,
      });
    },
    PopClusterClick() {},
    getPoints() {
      this.$http({
        url: this.$http.adornUrl("/1000genomes/getUmap"),
        method: "get",
      }).then(({ data }) => {
        this.allList = data.AllUmap;
        this.popList = data.AllUmap;
        this.sasList = data.SASUmap;
        this.afrList = data.AFRUmap;
        this.amrList = data.AMRUmap;
        this.eurList = data.EURUmap;
        this.easList = data.EASUmap;
      });
    },

    echartsInit() {
      let ClusterOfSupChart = this.$echarts.init(this.$refs.superclusterechart);
      ClusterOfSupChart.setOption({
        title: {
          text: "Cluster Of SuperPopulation",
          subtext: "Data from: 1000Genomes Phase3",
          left: "center",
        },
        grid: {
          left: "3%",
          right: "7%",
          bottom: "7%",
          containLabel: true,
        },
        tooltip: {
          // trigger: 'axis',
          showDelay: 0,
          formatter: function (params) {
            if (params.value.length > 1) {
              return (
                params.seriesName +
                " :<br/>" +
                params.value[0] +
                params.value[1]
              );
            } else {
              return (
                params.seriesName +
                " :<br/>" +
                params.name +
                " : " +
                params.value
              );
            }
          },
          axisPointer: {
            show: true,
            type: "cross",
            lineStyle: {
              type: "dashed",
              width: 1,
            },
          },
        },
        toolbox: {
          feature: {
            dataZoom: {},
            brush: {
              type: ["rect", "polygon", "clear"],
            },
          },
        },
        brush: {},
        legend: {
          data: ["Female", "Male"],
          left: "center",
          bottom: 10,
        },
        xAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value} ",
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value} ",
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "Super",
            type: "scatter",
            emphasis: {
              focus: "series",
            },
            data: this.allList,
            markArea: {
              silent: true,
              itemStyle: {
                color: "transparent",
                borderWidth: 1,
                borderType: "dashed",
              },
              data: [
                [
                  {
                    name: "Super Data Range",
                    xAxis: "min",
                    yAxis: "min",
                  },
                  {
                    xAxis: "max",
                    yAxis: "max",
                  },
                ],
              ],
            },
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
            markLine: {
              lineStyle: {
                type: "solid",
              },
              data: [{ type: "average", name: "AVG" }, { xAxis: 160 }],
            },
            itemStyle:{
              normal:{
                color:function(params){
                  if(params.data.name=="EUR"){
                    return '#fff';
                  }else if(params.data.name=="EUR"){
                    //写if else语句
                  }
                }
              }
            }
          },
        ],
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.owlCarouselInit();
    });
    this.$nextTick(() => {
      this.echartsInit();
    });
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
</style>>
