<template>
  <div>
    <!-- <el-form ref="form" :model="form" label-width="80px" class='loginContainer'>
      <h3 class="loginHead" style="margin-bottom:10px;">疫情信息登记</h3>
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="最近是否经过中/高风险地区？" style="padding-right=20px">
        <el-radio-group v-model="form.resource">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form-item>
    </el-form> -->
    <div class='loginContainer'>
      <div @click="test"  class="close">
        X
      </div>
      <h3 class="loginHead" style="margin-bottom:10px;">疫情信息登记</h3>
      <input type="text" placeholder="请输入用户名" class="username" v-model="username">
      <div class="col">
      <span>最近是否经过中/高风险地区？</span>
      <label><input name="area" type="radio" v-model="region" value='是'/>是 </label> 
      <label><input name="area" type="radio" />否 </label>
      </div>
      <div class="col">
      <span>最近有身体不适？例如发烧咳嗽</span>
      <label><input name="area1" type="radio" v-model="region" value='是'/>是 </label> 
      <label><input name="area1" type="radio" />否 </label>
      </div>
      <div class="col">
      <span>是否确诊新冠病例？</span>
      <label><input name="area2" type="radio" v-model="region" value='是'/>是 </label> 
      <label><input name="area2" type="radio" />否 </label>
      </div>
      <div class="col">
      <span>是否有身边朋友或亲戚确诊新冠病例？</span>
      <label><input name="area3" type="radio" v-model="region" value='是'/>是 </label> 
      <label><input name="area3" type="radio" />否 </label>
      </div>
      <input type="submit" @click="onSubmit">

    </div>
  </div>
</template>

<script>
export default {
    data() {
      return { 
          username: '',
          region: '否'
      }
    },
    methods: {
      onSubmit() {
        console.log(this.region);
        console.log(this.username);
      },
      test(){
        this.$emit('close')
      }

    }
}
</script>

<style scoped>
.loginContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 450px;
    padding: 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.loginHead {
  font-size: 25px;
  text-align: center;
  margin-top: 13px;
}
.username{
  width: 300px;
  height: 35px;
  border-radius: 5px;
  margin:0 auto 20px;
  display: block;
}
.col{
  width: 300px;
  height: 35px;
  margin:0 auto 10px;
}
[type="submit"]{
  width: 100px;
  height: 35px;
  display: block;
  margin:0 auto 10px;
}
.close{
    float: right;
    font-weight: bold;
    font-size: 20px;
    color: #cac6c6;
    margin-top: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
</style>