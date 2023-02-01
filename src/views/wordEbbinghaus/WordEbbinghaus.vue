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
            : {{ scope.row.phonogram }}: {{ scope.row.translate }}
          </p>
          <p v-if="scope.row.exp1.length">例句: {{ scope.row.exp1 }}</p>
          <p  v-if="scope.row.expTrans1.length">翻译: {{ scope.row.expTrans1 }}</p>
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
      </el-table-column>
      <el-table-column
        prop="two"
        label="2天"
        width="120">
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
    </el-table-column>
     <el-table-column label="长期记忆复习周期">
      <el-table-column
        prop="twenty"
        label="20天"
        width="120">
      </el-table-column>
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
      width="100">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="showDetail(scope.$index, scope.row)">编辑</el-button>
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
export default {
  name: "WordEbbinghaus",
  data() {
      return {
        tableData: [],
        form: {
          day: '',
          word: '',
          translate: '',
          phonogram: '',
          exp1:'',
          expTrans1: '',
          date: '',
          memory: false
        },
        wordList: [], //单词汇总
        rules: {
          day: [
            { required: true, message: '请填写天数', trigger: 'blur' }
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          word: [
            { required: true, message: '请填写单词', trigger: 'blur' }
          ],
          translate: [
            { required: true, message: '请填写翻译', trigger: 'blur' }
          ],
        },
        addWordForm: [
            { label: 'Day', value: 'day', class: 'c-input-300', type: 'inputerNumber'},
            { label: '日期', value: 'date', class: 'c-input-300', type: 'date' },
            { label: '单词', value: 'word', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '翻译', value: 'translate', class: 'c-input-300', type: 'input', inputType: 'textarea' },
            { label: '音标', value: 'phonogram', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '例句', value: 'exp1', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '例句翻译', value: 'expTrans1', class: 'c-input-300', type: 'input', inputType: 'text' },
        ]
      };
    },
    created(){
        this.tableData = window.wordAllArray;
    },
    methods: {
      showRemark(index, row){
        row.show = true;
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.wordList.push(this.form);
            console.log(66,window.wordAllObj);   
          }
        });
      },
      copyWord(){
        this.$copyText(JSON.stringify(this.wordList));
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style lang="scss">
@import "./../../assets/css/commonVar.scss";
.word-ebbinghaus-container {
  padding: $container-spacing;
}
</style>
