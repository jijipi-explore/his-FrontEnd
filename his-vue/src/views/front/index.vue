<script setup lang="ts">
import { ref, type Ref } from 'vue'
import SvgIcon from '../../components/SvgIcon.vue'

let msg:Ref<string> = ref('Hello World')

const changeMsg = () => {
  msg.value = '你好'
}

</script>

<template>
  <div>
    index
    <h3>{{ msg }}</h3>
    <p>
      <el-button type="primary" @click="changeMsg">change</el-button>
    </p>
    <p>
      <SvgIcon name="assurance_fill" class="icon-svg" />
    </p>
  </div>
</template>

<style>

</style>