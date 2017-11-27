<template>
  <div class="m-login">
    <group>
      <x-input title="必须输入2333" novalidate required @on-blur="onBlur" @on-change="change" placeholder="请输入您的中国会员帐号">
         <i slot="label" class="icon icon-memberNo"></i>
      </x-input>
      <x-input title="必须输入2333" placeholder="请输入您的密码" type="password">
         <i slot="label" class="icon icon-password"></i>
      </x-input>
    </group>
   
  </div>
</template>

<script>
import {Group, XInput} from 'vux'
export default {
  name: 'Login',
  data () {
    return {
      vlaue: 'asdf'
    }
  },
  methods: {
    onBlur (val) {
      console.log('on blur', val)
    },
    change (val) {
      console.log('on change', val)
    }
  },
  components: {
    Group,
    XInput
  }
}
</script>

<style lang="less">
.m-login{

}
</style>
