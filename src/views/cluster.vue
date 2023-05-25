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

    <!-- mainbody start -->
    <div class="mainbody">
      <!-- umap section start -->

      <section class="course_section layout_padding">
        <div class="container-fluid pr-0">
          <div class="heading_container">
            <h2>Population Cluster</h2>
            <p>
              Cosine similarity is used to calculate the similarity of multiple
              genomes, and Umap algorithm is used for feature dimension
              reduction to achieve population clustering.
            </p>
          </div>
          <div class="course_container">
            <div class="course_owl-carousel owl-carousel owl-theme" ref="car">
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/cluster/super.png')"
                      :preview-src-list="superlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>Super Population</h4>
                    <p class="mod_p">
                      A total of 5 super populations, including European(EUR),
                      African(AFR), American(AMR), East Asian(EAS), and South
                      Asia(SAS).
                      <br /><br />
                    </p>
                    <a @click="jumpsup"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/cluster/population.png')"
                      :preview-src-list="populationlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>Population</h4>
                    <p class="mod_p">
                      A total of 26 populations,5 populations from Europe, 7
                      populations from Africa, 4 populations from the Americas,
                      5 populations from South Asia, and 5 populations from East
                      Asia.
                    </p>
                    <a @click="jumppop"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/cluster/eur.png')"
                      :preview-src-list="eurlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>EUR</h4>
                    <p class="mod_p">
                      A total of 5 populations, including Western
                      Europeans(CEU), Finns(FIN), English(GBR), Spanish(IBS) and
                      Italian(TSI).
                      <br /><br /><br />
                    </p>
                    <a @click="jumpeur"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/cluster/amr.png')"
                      :preview-src-list="amrlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>AMR</h4>
                    <p class="mod_p">
                      A total of 4 populations, including Colombians (CLM),
                      Mexican Americans (MXL), Peruvians (PUR), Puerto Ricans
                      (PUR).
                      <br /><br />
                    </p>
                    <a @click="jumpamr"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/cluster/afr.png')"
                      :preview-src-list="afrlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>AFR</h4>
                    <p class="mod_p">
                      A total of 7 populations, including Barbadian (ACB),
                      African American (ASW), Nigerian (ESN), Gambian (GWD),
                      Kenyan (LWK), Sierra Leonean (MSL), Yoruba (YRI).
                      <br /><br />
                    </p>
                    <a @click="jumpafr"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/cluster/eas.png')"
                      :preview-src-list="easlarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>EAS</h4>
                    <p class="mod_p">
                      A total of 5 populations, including North China Han (CHB),
                      South China Han (CHS), China Dai (CDX), Japan (JPT) and
                      Vietnam (KHV).
                      <br /><br />
                    </p>
                    <a @click="jumpeas"> View Detail </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <el-image
                      :src="require('@/assets/cluster/sas.png')"
                      :preview-src-list="saslarge"
                    ></el-image>
                  </div>
                  <div class="detail-box">
                    <h4>SAS</h4>
                    <p class="mod_p">
                      A total of 5 populations, including Bengali (BEB),
                      Texas Indian (GIH), British Indian (ITU), Pakistani (PJL),
                      and British Sri Lankan (STU).
                      <br><br>
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
          <el-tabs v-model="activeName" @tab-click="superClusterClick">
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
      <el-backtop></el-backtop>
      <!-- mainbody ends -->
    </div>

    <!-- footer section -->
    <el-footer>
      <div>
        <p class="mod_footer">All Right@Lab</p>
      </div>
    </el-footer>
  </el-container>
</template>






<script>
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";
import "@/assets/css/font-awesome.min.css";
import axios from "axios";
// import custom from "static/js/custom";
export default {
  data() {
    return {
      // coursal pics,
      superlarge: [require("@/assets/cluster/super.png")],
      populationlarge: [require("@/assets/cluster/population.png")],
      eurlarge: [require("@/assets/cluster/eur.png")],
      amrlarge: [require("@/assets/cluster/amr.png")],
      afrlarge: [require("@/assets/cluster/afr.png")],
      easlarge: [require("@/assets/cluster/eas.png")],
      saslarge: [require("@/assets/cluster/sas.png")],

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
    jumpsup() {
      this.$refs.superclusterechart.scrollIntoView(true);
    },
    jumppop() {
      this.$refs.popclusterechart.scrollIntoView(true);
    },
    jumpeur() {
      this.$refs.eurclusterechart.scrollIntoView(true);
    },
    jumpamr() {
      this.$refs.amrclusterechart.scrollIntoView(true);
    },
    jumpafr() {
      this.$refs.afrclusterechart.scrollIntoView(true);
    },
    jumpeas() {
      this.$refs.easclusterechart.scrollIntoView(true);
    },
    jumpsas() {
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

    getPoints() {
      const that = this;
      axios
        .get("http://10.170.151.0:8080/1000genomes/umap/getUmap")
        .then(function (res) {
          for (var i = 0; i < res.data.AllUmap.length; i++) {
            var umap0 = res.data.AllUmap[i].umap0;
            var umap1 = res.data.AllUmap[i].umap1;
            var id = res.data.AllUmap[i].individualID;
            var from = res.data.AllUmap[i].population;
            var code = res.data.AllUmap[i].super;
            var itemArr = [umap0, umap1, id, from, code];
            that.allList.push(itemArr);
          }
          for (var i = 0; i < res.data.AFRUmap.length; i++) {
            var fumap0 = res.data.AFRUmap[i].umap0;
            var fumap1 = res.data.AFRUmap[i].umap1;
            var fid = res.data.AFRUmap[i].individualID;
            var ffrom = res.data.AFRUmap[i].population;
            var fcode = res.data.AFRUmap[i].super;
            var fitemArr = [fumap0, fumap1, fid, ffrom, fcode];
            that.afrList.push(fitemArr);
          }

          for (var i = 0; i < res.data.AMRUmap.length; i++) {
            var mumap0 = res.data.AMRUmap[i].umap0;
            var mumap1 = res.data.AMRUmap[i].umap1;
            var mid = res.data.AMRUmap[i].individualID;
            var mfrom = res.data.AMRUmap[i].population;
            var mcode = res.data.AMRUmap[i].super;
            var mitemArr = [mumap0, mumap1, mid, mfrom, mcode];
            that.amrList.push(mitemArr);
          }

          for (var i = 0; i < res.data.EURUmap.length; i++) {
            var uumap0 = res.data.EURUmap[i].umap0;
            var uumap1 = res.data.EURUmap[i].umap1;
            var uid = res.data.EURUmap[i].individualID;
            var ufrom = res.data.EURUmap[i].population;
            var ucode = res.data.EURUmap[i].super;
            var uitemArr = [uumap0, uumap1, uid, ufrom, ucode];
            that.eurList.push(uitemArr);
          }

          for (var i = 0; i < res.data.EASUmap.length; i++) {
            var aumap0 = res.data.EASUmap[i].umap0;
            var aumap1 = res.data.EASUmap[i].umap1;
            var aid = res.data.EASUmap[i].individualID;
            var afrom = res.data.EASUmap[i].population;
            var acode = res.data.EASUmap[i].super;
            var aitemArr = [aumap0, aumap1, aid, afrom, acode];
            that.easList.push(aitemArr);
          }

          for (var i = 0; i < res.data.SASUmap.length; i++) {
            var sumap0 = res.data.SASUmap[i].umap0;
            var sumap1 = res.data.SASUmap[i].umap1;
            var sid = res.data.SASUmap[i].individualID;
            var sfrom = res.data.SASUmap[i].population;
            var scode = res.data.SASUmap[i].super;
            var sitemArr = [sumap0, sumap1, sid, sfrom, scode];
            that.sasList.push(sitemArr);
          }
          that.echartsInit();
          // console.log(that.sampleData);
          // console.log("111",data.data.result);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    echartsInit() {
      const that = this;

      // super
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
                params.value[2] +
                " ，" +
                params.value[3] +
                " ，" +
                params.value[4] +
                " <br/>" +
                params.value[0] +
                "，" +
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
        xAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
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
            data: that.allList,
            markArea: {
              silent: true,
              itemStyle: {
                color: "transparent",
                borderWidth: 1,
                borderType: "dashed",
              },
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  if (params.value[4] == "EUR") {
                    return "#fac858";
                  } else if (params.value[4] == "AFR") {
                    return "#4EACC5";
                  } else if (params.value[4] == "AMR") {
                    return "#FF9C34";
                  } else if (params.value[4] == "EAS") {
                    return "#4E9A06";
                  } else if (params.value[4] == "SAS") {
                    return "#da0d68";
                  }
                },
              },
            },
          },
        ],
      });

      //population
      let ClusterOfPopChart = this.$echarts.init(this.$refs.popclusterechart);
      ClusterOfPopChart.setOption({
        title: {
          text: "Cluster Of 26 Population",
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
                params.value[2] +
                " ，" +
                params.value[3] +
                " ，" +
                params.value[4] +
                " <br/>" +
                params.value[0] +
                "，" +
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
        xAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
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
            data: that.allList,
            markArea: {
              silent: true,
              itemStyle: {
                color: "transparent",
                borderWidth: 1,
                borderType: "dashed",
              },
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  if (params.value[4] == "ACB") {
                    return "#4EACC5";
                  } else if (params.value[3] == "ASW") {
                    return "#FF9C34";
                  } else if (params.value[3] == "ESN") {
                    return "#4E9A06";
                  } else if (params.value[3] == "GWD") {
                    return "#2f4554";
                  } else if (params.value[3] == "LWK") {
                    return "#61a0a8";
                  } else if (params.value[3] == "MSL") {
                    return "#d48265";
                  } else if (params.value[3] == "YRI") {
                    return "#91c7ae";
                  } else if (params.value[3] == "CLM") {
                    return "#749f83";
                  } else if (params.value[3] == "MXL") {
                    return "#ca8622";
                  } else if (params.value[3] == "PEL") {
                    return "#bda29a";
                  } else if (params.value[3] == "PUR") {
                    return "#6e7074";
                  } else if (params.value[3] == "CDX") {
                    return "#546570";
                  } else if (params.value[3] == "CHB") {
                    return "#c4ccd3";
                  } else if (params.value[3] == "CHS") {
                    return "#5470c6";
                  } else if (params.value[3] == "JPT") {
                    return "#91cc75";
                  } else if (params.value[3] == "KHV") {
                    return "#fac858";
                  } else if (params.value[3] == "CEU") {
                    return "#ee6666";
                  } else if (params.value[3] == "FIN") {
                    return "#73c0de";
                  } else if (params.value[3] == "GBR") {
                    return "#3ba272";
                  } else if (params.value[3] == "IBS") {
                    return "#fc8452";
                  } else if (params.value[3] == "TSI") {
                    return "#9a60b4";
                  } else if (params.value[3] == "BEB") {
                    return "#ea7ccc";
                  } else if (params.value[3] == "GIH") {
                    return "#f6efa6";
                  } else if (params.value[3] == "ITU") {
                    return "#d88273";
                  } else if (params.value[3] == "PJL") {
                    return "#bf444c";
                  } else if (params.value[3] == "STU") {
                    return "#da0d68";
                  }
                },
              },
            },
          },
        ],
      });

      //eur
      let clusterOfEURChart = this.$echarts.init(this.$refs.eurclusterechart);
      clusterOfEURChart.setOption({
        title: {
          text: "Cluster Of EUR Population",
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
                params.value[2] +
                " ，" +
                params.value[3] +
                " ，" +
                params.value[4] +
                " <br/>" +
                params.value[0] +
                "，" +
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
        xAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "EUR",
            type: "scatter",
            emphasis: {
              focus: "series",
            },
            data: that.eurList,
            markArea: {
              silent: true,
              itemStyle: {
                color: "transparent",
                borderWidth: 1,
                borderType: "dashed",
              },
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  if (params.value[3] == "CEU") {
                    return "#ea7ccc";
                  } else if (params.value[3] == "FIN") {
                    return "#4EACC5";
                  } else if (params.value[3] == "GBR") {
                    return "#FF9C34";
                  } else if (params.value[3] == "IBS") {
                    return "#4E9A06";
                  } else if (params.value[3] == "TSI") {
                    return "#fac858";
                  }
                },
              },
            },
          },
        ],
      });

      //amr
      let ClusterOfAMRChart = this.$echarts.init(this.$refs.amrclusterechart);
      ClusterOfAMRChart.setOption({
        title: {
          text: "Cluster Of AMR Population",
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
                params.value[2] +
                " ，" +
                params.value[3] +
                " ，" +
                params.value[4] +
                " <br/>" +
                params.value[0] +
                "，" +
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
        xAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "AMR",
            type: "scatter",
            emphasis: {
              focus: "series",
            },
            data: that.amrList,
            markArea: {
              silent: true,
              itemStyle: {
                color: "transparent",
                borderWidth: 1,
                borderType: "dashed",
              },
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  if (params.value[3] == "CLM") {
                    return "#ee6666";
                  } else if (params.value[3] == "MXL") {
                    return "#4EACC5";
                  } else if (params.value[3] == "PEL") {
                    return "#FF9C34";
                  } else if (params.value[3] == "PUR") {
                    return "#4E9A06";
                  }
                },
              },
            },
          },
        ],
      });

      //afr
      let ClusterOfAFRChart = this.$echarts.init(this.$refs.afrclusterechart);
      ClusterOfAFRChart.setOption({
        title: {
          text: "Cluster Of AFR Population",
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
                params.value[2] +
                " ，" +
                params.value[3] +
                " ，" +
                params.value[4] +
                " <br/>" +
                params.value[0] +
                "，" +
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
        xAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "AFR",
            type: "scatter",
            emphasis: {
              focus: "series",
            },
            data: that.afrList,
            markArea: {
              silent: true,
              itemStyle: {
                color: "transparent",
                borderWidth: 1,
                borderType: "dashed",
              },
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  if (params.value[3] == "ACB") {
                    return "#ee6666";
                  } else if (params.value[3] == "ASW") {
                    return "#91cc75";
                  } else if (params.value[3] == "ESN") {
                    return "#FF9C34";
                  } else if (params.value[3] == "GWD") {
                    return "#eac7cc";
                  } else if (params.value[3] == "LWK") {
                    return "#ca8622";
                  } else if (params.value[3] == "MSL") {
                    return "#4EACC5";
                  } else if (params.value[3] == "YRI") {
                    return "#5470c6";
                  }
                },
              },
            },
          },
        ],
      });

      //eas
      let ClusterOfEASChart = this.$echarts.init(this.$refs.easclusterechart);
      ClusterOfEASChart.setOption({
        title: {
          text: "Cluster Of EAS Population",
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
                params.value[2] +
                " ，" +
                params.value[3] +
                " ，" +
                params.value[4] +
                " <br/>" +
                params.value[0] +
                "，" +
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
        xAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "EAS",
            type: "scatter",
            emphasis: {
              focus: "series",
            },
            data: that.easList,
            markArea: {
              silent: true,
              itemStyle: {
                color: "transparent",
                borderWidth: 1,
                borderType: "dashed",
              },
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  if (params.value[3] == "CDX") {
                    return "#ee6666";
                  } else if (params.value[3] == "CHB") {
                    return "#91cc75";
                  } else if (params.value[3] == "CHS") {
                    return "#FF9C34";
                  } else if (params.value[3] == "JPT") {
                    return "#eac7cc";
                  } else if (params.value[3] == "KHV") {
                    return "#ca8622";
                  }
                },
              },
            },
          },
        ],
      });

      //sas
      let ClusterOfSASChart = this.$echarts.init(this.$refs.sasclusterechart);
      ClusterOfSASChart.setOption({
        title: {
          text: "Cluster Of SAS Population",
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
                params.value[2] +
                " ，" +
                params.value[3] +
                " ，" +
                params.value[4] +
                " <br/>" +
                params.value[0] +
                "，" +
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
        xAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: true,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "SAS",
            type: "scatter",
            emphasis: {
              focus: "series",
            },
            data: that.sasList,
            markArea: {
              silent: true,
              itemStyle: {
                color: "transparent",
                borderWidth: 1,
                borderType: "dashed",
              },
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  if (params.value[3] == "BEB") {
                    return "#ee6666";
                  } else if (params.value[3] == "GIH") {
                    return "#91cc75";
                  } else if (params.value[3] == "ITU") {
                    return "#FF9C34";
                  } else if (params.value[3] == "PJL") {
                    return "#4EACC5";
                  } else if (params.value[3] == "STU") {
                    return "#91c7ae";
                  }
                },
              },
            },
          },
        ],
      });
    },
  },
  created() {
    this.getPoints();
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

.mod_race {
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

.mod_p {
  /* text-align:justify; */

  font-size: 18px;
}
.mod_footer {
  margin-top: 20px;
  text-align: center;
  font-family: Century;
  font-size: 16px;
}
</style>
