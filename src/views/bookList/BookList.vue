<template>
  <div class="book-list-container c-flex-wrap c-flex-item">
    <div class="bl-item" v-for="book in bookList" :key="book.value">
      <img :src="book.img" class="bl-img"/></div>
    </div>
  </div>
</template>

<script>
import bookList from './bookList.ts';

export default {
  name: "BookList",
  components: {
  },
  data() {
    return {
      bookList: bookList
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "./../../assets/css/commonVar.scss";
.book-list-container{
  .bl-item {
    margin-bottom: $spacing * 2;
  }
  .bl-img{
    width: 130px;
    height: 160px;
  }
}
</style>
