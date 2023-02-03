<template>
  <div class="add-word-container c-cover-box c-flow-auto" >
    <div class="has-add" v-if="wordList.length > 0">
        <span class="c-font-500 c-font-16 c-font-green"> 已添加:</span>
        <span class="c-font-500 c-font-16 has-word" 
              :class="{ active: item.word === form.word, }"
              v-for="item in wordList" :key="item.word" @click="readWordDetail(item)">
            {{item.word}}
        </span>
    </div>
    <el-form ref="form" :model="form" label-width="140px" :rules="rules">
        <el-form-item :label="item.label" v-for="item in addWordFormObj" :key="item.value" :prop="item.value">
            <el-input v-if="item.type === 'input'" :type="item.inputType" v-model="form[item.value]" :class="item.class"></el-input>
            <el-date-picker v-if="item.type === 'date'" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form[item.value]" :class="item.class"></el-date-picker>
            <el-switch v-if="item.type === 'switch'" v-model="form[item.value]"></el-switch>
            <el-input-number v-if="item.type === 'inputerNumber'" v-model="form[item.value]" controls-position="right"  :min="1" :max="365"></el-input-number>
        </el-form-item>
        <el-form-item label="更新艾宾浩斯记忆">
            <el-switch v-model="ebbinghausMemory"></el-switch>
        </el-form-item>
        <div v-if="ebbinghausMemory">
            <el-form-item label="短期记忆">
                <el-checkbox-group v-model="form.shortMemory">
                    <el-checkbox :label="item.value" v-for="item in shortMemoryList" :key="item.value">{{item.label}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="中期记忆">
                <el-checkbox-group v-model="form.mediumMemory">
                    <el-checkbox :label="item.value" v-for="item in mediumMemoryList" :key="item.value">{{item.label}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="长期记忆">
                <el-checkbox-group v-model="form.longMemory">
                    <el-checkbox :label="item.value" v-for="item in longMemoryList" :key="item.value">{{item.label}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <!-- <el-form-item :label="item.label" v-for="item in memoryFormObj" :key="item.value" :prop="item.value">
                <el-input v-if="item.type === 'input'" :type="item.inputType" v-model="form[item.value]" :class="item.class"></el-input>
                <el-switch v-if="item.type === 'switch'" v-model="form[item.value]"></el-switch></el-form-item> -->
        </div>
        <el-form-item>
            <el-button type="primary"  v-if="wordList.length < 11" @click="onSubmit('form')">生成数据</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
        <!-- <el-form-item v-if="!isEdit && wordList.length > 0">
           <el-button type="primary"  @click="copyWord('form')">复制数据</el-button>
        </el-form-item> -->
        
    </el-form>
    
    <el-dialog
        title="单词重复"
        v-if="repeatDialogVisible"
        :visible.sync="repeatDialogVisible"
        width="600px">
        <div class="c-flex-center judge-container">
            <div class="c-flex-item">
                <p  class="c-font-500 c-font-16 c-font-green"> 数据库数据   </p>
            <p>
                <span class="c-font-500">{{repeatWord.word }}</span> 
                : {{repeatWord.phonogram }}
            </p>
            <p> {{repeatWord.translate }}</p>
            <p v-if="repeatWord.exp1.length">例句: {{repeatWord.exp1 }}</p>
            <p  v-if="repeatWord.expTrans1.length">翻译: {{repeatWord.expTrans1 }}</p>
            <p v-if="repeatWord.exp2.length">例句: {{repeatWord.exp2 }}</p>
            <p  v-if="repeatWord.expTrans2.length">翻译: {{repeatWord.expTrans2 }}</p>
            <p v-if="repeatWord.exp3.length">例句: {{repeatWord.exp3 }}</p>
            <p  v-if="repeatWord.expTrans3.length">翻译: {{repeatWord.expTrans3 }}</p>
            <p v-if="repeatWord.phr1.length">词组: {{repeatWord.phr1 }}</p>
            <p  v-if="repeatWord.phrTrans1.length">翻译: {{repeatWord.phrTrans1 }}</p>
            <p v-if="repeatWord.phr2.length">例句: {{repeatWord.phr2 }}</p>
            <p  v-if="repeatWord.phrTrans2.length">翻译: {{repeatWord.phrTrans2 }}</p>
            </div>
            <div class="c-flex-item">
                <p  class="c-font-500 c-font-16 c-font-green"> form数据   </p>
                <p>
                <span class="c-font-500">{{form.word }}</span> : {{form.phonogram }}
                </p>
                <p> {{form.translate }}</p>
                <p v-if="form.exp1.length">例句: {{form.exp1 }}</p>
                <p  v-if="form.expTrans1.length">翻译: {{form.expTrans1 }}</p>
                <p v-if="form.exp2.length">例句: {{form.exp2 }}</p>
                <p  v-if="form.expTrans2.length">翻译: {{form.expTrans2 }}</p>
                <p v-if="form.exp3.length">例句: {{form.exp3 }}</p>
                <p  v-if="form.expTrans3.length">翻译: {{form.expTrans3 }}</p>
                <p v-if="form.phr1.length">词组: {{form.phr1 }}</p>
                <p  v-if="form.phrTrans1.length">翻译: {{form.phrTrans1 }}</p>
                <p v-if="form.phr2.length">例句: {{form.phr2 }}</p>
                <p  v-if="form.phrTrans2.length">翻译: {{form.phrTrans2 }}</p>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="repeatDialogVisible = false">放弃</el-button>
            <el-button type="primary" @click="coverWord">覆盖</el-button>
        </span>
        </el-dialog>
  </div>
</template>

<script>
export default {
  name: "AddWord",
  data() {
      return {
        form: {
          day: 1,
          date: '',
          word: '',
          translate: '',
          phonogram: '',
          exp1:'',
          expTrans1: '',
          exp2:'',
          expTrans2: '',
          exp3:'',
          expTrans3: '',
          show: false,
          phrTrans1: '',
          phr1: '',
          phrTrans2: '',
          phr2: '',
          shortMemory: [],
           mediumMemory: [],
           longMemory:[]
        },
        cacheForm: {
          day: 1,
          date: '',
          word: '',
          translate: '',
          phonogram: '',
          exp1:'',
          expTrans1: '',
          exp2:'',
          expTrans2: '',
          exp3:'',
          expTrans3: '',
          show: false,
          phrTrans1: '',
          phr1: '',
          phrTrans2: '',
          phr2: '',
          shortMemory: [],
           mediumMemory: [],
           longMemory:[],
           relation: '',
        },
        repeatDialogVisible: false,
        repeatWord: null,
        repeatIndex: 1000,
        ebbinghausMemory: false,
        isEdit: false,
        wordList: [], //单词汇总
        rules: {
          day: [
            { required: true, message: '请填写天数', trigger: 'blur' }
          ],
          date: [
            { required: true, message: '请选择日期', trigger: 'blur' }
          ],
          word: [
            { required: true, message: '请填写单词', trigger: 'blur' }
          ],
          translate: [
            { required: true, message: '请填写翻译', trigger: 'blur' }
          ],
        },
        addWordFormObj: [
            { label: 'Day', value: 'day', class: 'c-input-300', type: 'inputerNumber'},
            { label: '日期', value: 'date', class: 'c-input-300', type: 'date' },
            { label: '单词', value: 'word', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '音标', value: 'phonogram', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '翻译', value: 'translate', class: 'c-input-300', type: 'input', inputType: 'textarea' },
            { label: '例句', value: 'exp1', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '例句翻译', value: 'expTrans1', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '例句', value: 'exp2', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '例句翻译', value: 'expTrans2', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '例句', value: 'exp3', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '例句翻译', value: 'expTrans3', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '词组', value: 'phr1', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '词组翻译', value: 'phrTrans1', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '词组', value: 'phr2', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '词组翻译', value: 'phrTrans2', class: 'c-input-300', type: 'input', inputType: 'text' },
            { label: '关联', value: 'relation', class: 'c-input-300', type: 'input', inputType: 'textarea' },
        ],
        shortMemoryList: [
            {label: '1天', value: 'one'},
            {label: '2天', value: 'two'},
            {label: '3天', value: 'three'}
        ],
        mediumMemoryList: [
            {label: '5天', value: 'five'},
            {label: '8天', value: 'eight'},
            {label: '15天', value: 'fifteen'}
        ],
        longMemoryList: [
            {label: '1个月', value: 'oneM'},
            {label: '3个月', value: 'threeM'},
            {label: '6个月', value: 'sixM'}
        ],
      };
    },
    created(){
        if(this.$route.query){
            this.isEdit = this.$route.query.isEdit || false;
        }
        if(this.isEdit){
            this.form = Object.assign({}, this.form, this.$route.params);
        }
        let wordDay = `word${this.form.day}`;
            this.wordList = window.wordAllObj[wordDay] || [];
    },
    watch: {
        'form.day'(bool) {
            let wordDay = `word${this.form.day}`;
            this.wordList = window.wordAllObj[wordDay] || [];
        }
    },
    methods: {
        readWordDetail(item){
            this.form = Object.assign({}, this.form, item);
        },
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(!this.wordList.length) {
                        this.wordList.push(this.form);
                    } else {
                        
                        this.wordList.forEach((item, index) => {
                            console.log(index, item);
                            if(item.word === this.form.word) {
                                this.repeatIndex = index ;
                            }
                        });
                        if(this.repeatIndex !== 1000) {
                            this.repeatWord = this.wordList[this.repeatIndex];
                            this.repeatDialogVisible = true;
                            return;
                        } else {
                            this.wordList.push(Object.assign({}, this.form));
                        }
                    }
                    this.$copyText(JSON.stringify(this.wordList));
                    this.$message.success('添加成功，请复制数据到表中！'); 
                    this.repeatIndex = 1000;
                }
            });
        },
        coverWord(){
            this.repeatDialogVisible = false;
            this.wordList[this.repeatIndex] = Object.assign({}, this.form);;
            this.$copyText(JSON.stringify(this.wordList));
            this.$message.success('添加成功，请复制数据到表中！'); 
        },
        copyWord(){
            this.$copyText(JSON.stringify(this.wordList));
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
            this.form = Object.assign({}, this.cacheForm, {
                day: this.wordList[0].day || 1,
                date: this.wordList[0].date || ''
            });
            this.repeatIndex = 1000;
        }
    }
};
</script>

<style lang="scss">
@import "./../../assets/css/commonVar.scss";
.add-word-container {
  padding: $container-spacing;
  padding-top: $container-spacing * 1.5;
  position: relative;
  .has-add{
    position: fixed;
    background: $white;
    top:0px;
    height: auto;
    left: 0px;
    padding: 20px 0px 20px 40px;
    width: $aside-width;
    z-index: 1;
    // box-shadow: 0 2px 3px -1px rgba($black, 0.3);
    .has-word{
        display: block;
        &:hover, &.active{
            color: $primary;
        }
    }

  }
  .judge-container{
    border: 1px solid $silver;
    p{
        margin-left: 20px;
        padding: auto;
        line-height: 30px;
    }
  }
}
</style>
