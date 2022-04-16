<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button v-show="seartNumAndEndNum.start > 1" @click="$emit('getPageNo', 1)">
      1
    </button>

    <button v-show="seartNumAndEndNum.start > 2">···</button>
    <!-- 中间部分 -->
    <button
      v-for="(page, index) in seartNumAndEndNum.end"
      :key="index"
      v-if="page >= seartNumAndEndNum.start"
      @click="$emit('getPageNo', page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>
    <!-- <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button> -->

    <button v-show="seartNumAndEndNum.end < totalPage - 1">···</button>
    <button
      v-show="seartNumAndEndNum.end < totalPage"
      @click="$emit('getPageNo', totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],

  computed: {
    // 总共多少页
    totalPage() {
      //向上取整
      //算出多少页
      return Math.ceil(this.total / this.pageSize);
    },
    //计算出连续的页码的起始数字与结束的数子
    seartNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      //先定义两个变量储存起始数字和结束数字
      let start = 0;
      let end = 0;
      //连续页码数字5【就是少5页】，如果出现不正常（就是不够5页）
      //不正常现象【总页数没有连续页码多】
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        // 正常现象【连续页码5，但是你的页码数一定是大于5的】
        //起始数字
        start = pageNo - parseInt(continues / 2);
        // 结束数字
        end = pageNo + parseInt(continues / 2);
        // 把不正常的现象【start数字出现0||负数】纠正
        if (start < 1) {
          start = 1;
          end = continues;
        }
        // 把出现不正常的现象【end数字大于总页码】纠正
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
    .active {
      background-color: #409eff;
    }
  }
}
</style>
