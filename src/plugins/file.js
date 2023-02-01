import Vue from 'vue';
const files = require.context('../data/', true, /.data.js$/);
console.log(files);
let wordAllObj = {};
let wordAllArray = [];
files.keys().forEach((key) => {
//   if (key === './file.js') return;
  // 循环文件中的导出。允许一个文件中有多个，如果只需要单个，那可以直接用下面这个
  // configArray = configArray.concat(files(key).default);
  Object.keys(files(key).default)
  .forEach((item) => {
    wordAllObj[item] = files(key).default[item];
    wordAllArray = wordAllArray.concat(files(key).default[item]);
  });
});

window.wordAllObj = wordAllObj;
window.wordAllArray = wordAllArray;

export default {
      // 工单中可输入多个 机柜编码/设备编码/SN号 搜索，用空格分开
  searchRegularConversion (value) {
    let newValue = value.trim().replace(/，/gi, ",");
    newValue = newValue.replace(/\s+/g, ',');
    newValue = newValue.replace(/,+/g, ',');
    newValue = newValue.replace(/^,+/g, '');
    newValue = newValue.replace(/,+$/g, '');
    return newValue;
  },

};
console.log(wordAllArray);