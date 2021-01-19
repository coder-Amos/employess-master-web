<template>
  <div class="baseinfoBox">
    <el-row style="cursor: pointer">
      <el-col :span="5">
        <el-card shadow="hover">
          <div style="height: 6rem">
            <div
              style="
                width: 6rem;
                height: 100%;
                background-color: #6ccac9;
                text-align: center;
                padding-top: 1rem;
                float: left;
              "
            >
              <div>
                <i
                  class="el-icon-user-solid"
                  style="font-size: 3rem; color: #fff"
                ></i>
              </div>
              <div><i style="font-size: 12px; color: #fff">员工总数</i></div>
            </div>
            <div
              style="
                font-size: 2rem;
                width: 12rem;
                height: 100%;
                text-align: center;
                line-height: 6rem;
                color: #ccc;
                float: left;
              "
            >
              {{ total }}
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-card shadow="hover">
          <div style="height: 6rem">
            <div
              style="
                width: 6rem;
                height: 100%;
                background-color: #ff6c60;
                text-align: center;
                padding-top: 1rem;
                float: left;
              "
            >
              <div>
                <i
                  class="el-icon-s-platform"
                  style="font-size: 3rem; color: #fff"
                ></i>
              </div>
              <div><i style="font-size: 12px; color: #fff">开发部</i></div>
            </div>
            <div
              style="
                font-size: 2rem;
                width: 12rem;
                height: 100%;
                text-align: center;
                line-height: 6rem;
                color: #ccc;
                float: left;
              "
            >
              {{ programmer }}
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-card shadow="hover">
          <div style="height: 6rem">
            <div
              style="
                width: 6rem;
                height: 100%;
                background-color: #f8d347;
                text-align: center;
                padding-top: 1rem;
                float: left;
              "
            >
              <div>
                <i
                  class="el-icon-s-claim"
                  style="font-size: 3rem; color: #fff"
                ></i>
              </div>
              <div><i style="font-size: 12px; color: #fff">产品部</i></div>
            </div>
            <div
              style="
                font-size: 2rem;
                width: 12rem;
                height: 100%;
                text-align: center;
                line-height: 6rem;
                color: #ccc;
                float: left;
              "
            >
              {{ producter }}
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-card shadow="hover">
          <div style="height: 6rem">
            <div
              style="
                width: 6rem;
                height: 100%;
                background-color: #57c8f2;
                text-align: center;
                padding-top: 1rem;
                float: left;
              "
            >
              <div>
                <i
                  class="el-icon-video-camera"
                  style="font-size: 3rem; color: #fff"
                ></i>
              </div>
              <div><i style="font-size: 12px; color: #fff">测绘部</i></div>
            </div>
            <div
              style="
                font-size: 2rem;
                width: 12rem;
                height: 100%;
                text-align: center;
                line-height: 6rem;
                color: #ccc;
                float: left;
              "
            >
              {{ mapper }}
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top:1rem;">
      <el-col :span="15" style="background-color:#fff;height:71vh;overflow-y:auto;">
        <el-table :data="pagelist" border style="width: 100%" >
          <el-table-column prop="department" label="部门" width="100" align='center' >
            <template slot-scope="scope">
              <span v-if="scope.row.department==='开发部'" style="color:#ff6c60">{{scope.row.department}}</span>
              <span v-else-if="scope.row.department==='产品部'" style="color:#f8d347">{{scope.row.department}}</span>
              <span v-else style="color:#57c8f2">{{scope.row.department}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="100" align='center'>
          </el-table-column>
          <el-table-column prop="address" label="家庭地址" width="180" align='center'> </el-table-column>
          <el-table-column prop="tel" label="联系电话" width="180" align='center'> </el-table-column>
          <el-table-column label="是否在岗" width="100" align='center'>
            <template slot-scope="scope">
              {{ scope.row.isworking ? "是" : "否" }}
            </template>
          </el-table-column>
          <el-table-column label="操作" prop="" width="160" align='center'>
            <el-button type="primary" size="mini" plain>修改信息</el-button>
          </el-table-column>
          <el-table-column label="备注" prop="" width="200" align='center'>
          
          </el-table-column>
        </el-table>
        <div style="margin-right:1rem;float:right;">
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[1, 5, 10]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="employess_list.length">
      </el-pagination>
     </div>
      </el-col>
      <el-col :span="7" offset="1">
        <el-calendar v-model="calendars">
        </el-calendar>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "EmployessBaseInfo",
  data() {
    return {
      employess_list: [],
      total: 0,
      programmer: 0,
      mapper: 0,
      producter: 0,
      calendars:new Date(),
      pagenum:1,
      pagesize:10,
      pagelist:[]
    };
  },
  mounted() {
    this.get_employess_list();
  },
  methods: {
    handleSizeChange(val){
      this.pagesize = val
      this.get_employess_list()
    },
    handleCurrentChange(val){
      this.pagenum = val
      this.get_employess_list()
    },
    get_employess_list() {
     const payload={
        pagenum:this.pagenum,
        pagesize:this.pagesize
      }
      this.$store
        .dispatch("store_get_employess_list",payload)
        .then((res) => {
          if (res.state === 200) {
            this.employess_list = res.data;
            this.pagelist = res.paginator_data
            this.total = 0;
            this.programmer = 0;
            this.mapper = 0;
            this.producter = 0;
            this.employess_list.forEach((item) => {
              if (item.department === "开发部") {
                this.programmer += 1;
              } else if (item.department === "产品部") {
                this.mapper += 1;
              } else if (item.department === "测绘部") {
                this.producter += 1;
              }
            });
            this.total = this.programmer + this.mapper + this.producter;
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style scoped>
.baseinfoBox {
  width: 100%;
  height: 99%;
  overflow-x: hidden;
  overflow-y: auto;
}
.baseinfoBox >>> .el-card__body {
  padding: 0;
}
</style>