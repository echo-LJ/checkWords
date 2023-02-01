<template>
  <div class="add-word-container c-cover-box" >
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" v-if="wordList.lenght < 10">
        <el-form-item :label="item.label" v-for="item in addWordForm" :key="item.value" :prop="item.value">
            <el-input v-if="item.type === 'input'" :type="item.inputType" v-model="form[item.value]" :class="item.class"></el-input>
            <el-date-picker v-if="item.type === 'date'" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form[item.value]" :class="item.class"></el-date-picker>
            <el-switch v-if="item.type === 'switch'" v-model="form[item.value]"></el-switch>
            <el-input-number v-if="item.type === 'inputerNumber'" v-model="form[item.value]" controls-position="right"  :min="1" :max="365"></el-input-number>
        </el-form-item>
        <el-form-item>
            <el-button type="primary"  @click="onSubmit('form')">生成数据</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
    </el-form>
    <div>
        <!-- <span class="c-font-16">已添加单词：</span> -->
        <span class="c-font-500 c-font-16" v-for="item in wordList" :key="item.word">
            {{item.word}}
        </span>
    </div>
    <div class="c-text-m-top">
        <el-button type="primary"  @click="copyWord('form')">复制数据</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddWord",
  data() {
      return {
        form: {
          day: '',
          word: '',
          translate: '',
          phonogram: '',
          exp1:'',
          expTrans1: '',
          date: '',
          show: false
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
        console.log(61,this);
        console.log(window.wordAllObj[30]);
    },
    methods: {
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
.add-word-container {
  padding: $container-spacing;
}
</style>
