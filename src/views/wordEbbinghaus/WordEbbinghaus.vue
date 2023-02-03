<template>
    <div class="word-ebbinghaus-container c-cover-box" >
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="序号"
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      label="单词"
      prop="word"
      width="120">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>
            <span class="c-font-500">{{ scope.row.word }}</span> 
            : {{ scope.row.phonogram }}
          </p>
          <p> {{ scope.row.translate }}</p>
          <p v-if="scope.row.exp1.length">例句: {{ scope.row.exp1 }}</p>
          <p  v-if="scope.row.expTrans1.length">翻译: {{ scope.row.expTrans1 }}</p>
          <p v-if="scope.row.exp2.length">例句: {{ scope.row.exp2 }}</p>
          <p  v-if="scope.row.expTrans2.length">翻译: {{ scope.row.expTrans2 }}</p>
          <p v-if="scope.row.exp3.length">例句: {{ scope.row.exp3 }}</p>
          <p  v-if="scope.row.expTrans3.length">翻译: {{ scope.row.expTrans3 }}</p>
          <p v-if="scope.row.phr1.length">词组: {{ scope.row.phr1 }}</p>
          <p  v-if="scope.row.phrTrans1.length">翻译: {{ scope.row.phrTrans1 }}</p>
          <p v-if="scope.row.phr2.length">例句: {{ scope.row.phr2 }}</p>
          <p  v-if="scope.row.phrTrans2.length">翻译: {{ scope.row.phrTrans2 }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.word }}</el-tag>
          </div>
        </el-popover>
      </template>
      </el-table-column>
    <el-table-column
      label="Day"
      prop="day"
      width="70">
    </el-table-column>
     <el-table-column
      label="日期"
      prop="date"
      width="100">
    </el-table-column>
    <el-table-column label="短期记忆复习周期">
      <el-table-column
        prop="one"
        label="1天"
        width="120">
         <template slot-scope="scope">
          <p class="c-font-center">{{ scope.row.shortMemory.includes('one')?  '✔️': '⭕️' }}</p>
        </template>
      </el-table-column>
      <!-- const faceJson = { '[/wx]': 'face_wx', '[/han]': 'face_han', '[/am]': 'face_am', '[/by]': 'face_by', '[/bs]': 'face_bs', '[/bz]': 'face_bz', '[/bx]': 'face_bx', '[/dk]': 'face_dk', '[/dx]': 'face_dx', '[/tx]': 'face_tx', '[/baib]': 'face_baib', '[/gz2]': 'face_gz2', '[/heng]': 'face_heng', '[/yhh]': 'face_yhh', '[/hxiao]': 'face_hxiao', '[/hy]': 'face_hy', '[/je]': 'face_je', '[/jy]': 'face_jy', '[/jl]': 'face_jl', '[/ku]': 'face_ku', '[/lhan]': 'face_lhan', '[/llei]': 'face_llei', '[/shh]': 'face_shh', '[/tc]': 'face_tc', '[/xia]': 'face_xia', '[/xu]': 'face_xu', '[/yx]': 'face_yx', '[/zhk]': 'face_zhk', '[/tu]': 'face_tu', '[/tp]': 'face_tp', '[/ex]': 'face_ex', '[/nu]': 'face_nu', '[/gg]': 'face_gg', '[/hxiu]': 'face_hxiu', '[/hx]': 'face_hx', '[/jk]': 'face_jk', '[/ka]': 'face_ka', '[/kl]': 'face_kl', '[/kun]': 'face_kun', '[/lh]': 'face_lh', '[/ng]': 'face_ng', '[/girl]': 'face_girl', '[/wq]': 'face_wq', '[/qq]': 'face_qq', '[/se]': 'face_se', '[/shuai]': 'face_shuai', '[/yun]': 'face_yun', '[/zhu]': 'face_zhu', '[/yw]': 'face_yw', '[/fd]': 'face_fd', '[/fdou]': 'face_fdou', '[/qd]': 'face_qd', '[/money]': 'face_money', '[/huiy]': 'face_huiy', '[/ws]': 'face_ws', '[/gz1]': 'face_gz1', '[/ok]': 'face_ok', '[/bq]': 'face_bq', '[/cj]': 'face_cj', '[/lh2]': 'face_lh2', '[/sl]': 'face_sl', '[/yb]': 'face_yb', '[/coffee]': 'face_coffee', '[/xh]': 'face_xh', '[/xs]': 'face_xs', '[/ax]': 'face_ax', '[/ppq]': 'face_ppq', '[/dao]': 'face_dao', '[/zq]': 'face_zq', '[/dh]': 'face_dh', '[/dsj]': 'face_dsj', '[/email]': 'face_email', '[/jiub]': 'face_jiub', '[/lw]': 'face_lw', '[/music]': 'face_music', '[/pj]': 'face_pj', '[/sj]': 'face_sj', '[/xg]': 'face_xg', '[/yaow]': 'face_yaow' }
       -->
     
      <el-table-column
        prop="two"
        label="2天"
        width="120">
        <template slot-scope="scope">
           <p class="c-font-center">{{ scope.row.shortMemory.includes('two')?  '✔️': '⭕️' }}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="three"
        label="3天"
        width="120">
      </el-table-column>
    </el-table-column>
    <el-table-column label="中期记忆复习周期">
      <el-table-column
        prop="five"
        label="5天"
        width="120">
      </el-table-column>
      <el-table-column
        prop="seven"
        label="7天"
        width="120">
      </el-table-column>
      <el-table-column
        prop="twelve"
        label="12天"
        width="120">
      </el-table-column>
      <el-table-column
        prop="twenty"
        label="20天"
        width="120">
      </el-table-column>
    </el-table-column>
     <el-table-column label="长期记忆复习周期">
      
      <el-table-column
        prop="oneM"
        label="1个月"
        width="120">
      </el-table-column>
     <el-table-column
        prop="threeM"
        label="3个月"
        width="120">
      </el-table-column>
      <el-table-column
        prop="sixM"
        label="6个月"
        width="120">
      </el-table-column>
    </el-table-column>
    <el-table-column
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="editWord(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="showDetail(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import * as routerNames from "../../router/routerNames.ts";
export default {
  name: "WordEbbinghaus",
  data() {
      return {
        tableData: []
      };
    },
    created(){
        this.tableData = window.wordAllArray;
        // console.log(this.getDate(2),new Date());
    },
    methods: {
      showRemark(index, row){
        row.show = true;
      },
      editWord(row) {
        this.$router.push({ name: routerNames.ADDWORD, params: row, query:{isEdit:true}});
      },
      getDate(num){
        let date = new Date();
        date.setDate(date.getDate() + num);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        if(month >=1 && month <=9){
            month = `0${month}`;
        }
        if(day >=1 && day <=9){
            day = `0${day}`;
        }
        return  `${year}-${month}-${day}`;
      }
    }
};
</script>

<style lang="scss">
@import "./../../assets/css/commonVar.scss";
.word-ebbinghaus-container {
  padding: $container-spacing;
  overflow: auto;
}
</style>
