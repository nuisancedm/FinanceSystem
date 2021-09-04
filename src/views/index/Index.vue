<template>
  <div>
    <el-row :gutter="24" class="fourcards">
      <el-col :span="6">
        <el-card shadow="always" class="in">
          <div class="fl">
            <p>本月进件</p>
            <p style="font-weight: bold">6588</p>
            <p>
              +20.34%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="out">
          <div class="fl">
            <p>本月放款</p>
            <p style="font-weight: bold">121000000</p>
            <p>
              +1.25%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-money ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allin">
          <div class="fl">
            <p>累计进件</p>
            <p style="font-weight: bold">128700</p>
            <p>
              +11.48%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-notebook-1 ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allout">
          <div class="fl">
            <p>累计放款</p>
            <p style="font-weight: bold">932123041</p>
            <p>
              +20.34%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-coin ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
    </el-row>
    <!--两个图表-->
    <el-row :gutter="12" class="twocards">
      <el-col :span="18">
        <el-card>
          <div slot="header" class="clearfix">
            <span>进件统计分析</span>
          </div>
          <div class="linechart" ref="linechart" style="height: 300px"></div>
        </el-card>
      </el-col>
      <el-col :span="6"
        ><el-card>
          <div slot="header" class="clearfix">
            <span>进件统计分析</span>
          </div>
          <div ref="circlechart" style="height: 300px"></div> </el-card
      ></el-col>
    </el-row>

    <!--时间轴和日历-->
    <el-row :gutter="12" class="timecalender">
      <el-col :span="12">
        <el-card style="height: 700px">
          <div class="block">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="calendar">
          <el-calendar v-model="value"> </el-calendar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { post } from "@/utils/http.js";
export default {
  data() {
    return {
      value: new Date(),
      //线图数据
      linedate: "",
      linenumber: "",
      //pie图数据
      circledata: "",
    };
  },

  mounted() {
    this.drawline();
    this.drawcircle();
  },

  methods: {
    drawline() {
      post("/charts", { type: "line" }).then((res) => {
        this.linedate = res.data.date;
        this.linenumber = res.data.number;

        let lineChart = this.$echarts.init(this.$refs["linechart"]);
        let option = {
          xAxis: {
            type: "category",
            data: this.linedate,
            boundaryGap: false,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: this.linenumber,
              type: "line",
              smooth: true,
              areaStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#4f88ff", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "white", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          ],
        };
        lineChart.setOption(option);
      });
    },

    drawcircle() {
      post("/charts", { type: "pie" }).then((res) => {
        this.circledata = res.data;

        let circlechart = this.$echarts.init(this.$refs["circlechart"]);
        let option = {
          tooltip: {
            trigger: "item",
          },

          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 4,
              },
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "20",
                  fontWeight: "bold",
                },
              },

              data: this.circledata,
            },
          ],
        };
        circlechart.setOption(option);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.twocards{margin-bottom: 20px;}

.ico {
  float: right;
  font-size: 90px;
  color: rgba(255, 255, 255, 0.3);
}
.in {
  background-color: #4f88ff;
}
.out {
  background-color: #f25e75;
}
.allin {
  background-color: #5050ff;
}
.allout {
  background-color: #f49b3b;
}
.fourcards {
  margin-bottom: 20px;
  p {
    line-height: 30px;
    color: #fff;
    font-size: 16px;
  }
}
.clearfix {
  text-align: center;
}
</style>