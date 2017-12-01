<template>
  <div class="m-login">
    <div class="login-logo"><i class="icon icon-Kyani"></i></div>
    <group class="login-group">
      <x-input required is-type="email" placeholder="请输入您的中国会员帐号">
         <i slot="label" class="icon icon-memberNo"></i>
      </x-input>
      <x-input placeholder="请输入您的密码" :type="this.isEye ? 'text' : 'password'">
         <i slot="label" class="icon icon-password"></i>
         <i slot="right" :class="this.isEye ? 'icon icon-eye eye-pwd' : 'icon icon-eye'" @click="changePwdType"></i>
      </x-input>
    </group>
    <div class="login-submit">
      <div class="login-other">
        <div class="login-other-info">
          <a href="">忘记密码?</a>
          <a href="">忘记帐户?</a>
        </div>
        <div class="login-other-check">
          <check-icon type="plain" :value.sync="loginCheck">记住帐号</check-icon>
        </div>
      </div>
      <x-button text="登录" type="primary" class="login-btn" @click.native="loginSubmit"></x-button>
    </div>
    <div class="account-other">
      <span class="no-account-tit">没有帐号？</span>
      <x-button text="会员注册" type="primary" class="account-btn"></x-button>
      <x-button text="消费者注册" type="primary" class="account-btn"></x-button>
    </div>
  </div>
</template>

<script>
import {Group, XInput, XButton, CheckIcon} from 'vux'
export default {
  name: 'Login',
  data () {
    return {
      vlaue: 'asdf',
      isEye: false,
      loginCheck: false
    }
  },
  methods: {
    onBlur (val) {
      console.log('on blur', val)
    },
    change (val) {
      console.log('on change', val)
    },
    changePwdType () {
      this.isEye = !this.isEye
    },
    loginSubmit () {
      console.log('loginSubmit')
    }
  },
  components: {
    Group,
    XInput,
    XButton,
    CheckIcon
  }
}
</script>

<style lang="less">
@import '~varLess';
.m-login{
  background: #fff;
  width: 100%;
  // height: 100%;
  .login-logo{
    padding: 8vw 0;
    text-align: center;
    color: #002e5e;  //#236194;
    .icon{
      font-size: (100 / 750) * 100vw;
    }
  }
  .login-group{
    .weui-cells{
      margin-top: 0;
      &:before{
      }
    }
    .weui-cell{
      padding: 0 9.3vw;
      height: 12.5vw;
      font-size: 3.75vw;
      .weui-cell__hd{
        padding-right: 1.5vw;
      }
    }
    .icon{
      font-size: 20px;
      color: #002e5e;
    }
    .icon-eye{
      vertical-align: middle;
      font-size: 23px;
      color: #c8c8c8
    }
    .eye-pwd{
      color: #002e5e;
    }
  }
  .login-submit{
    // margin-top: 14vw;
    padding: 0 9vw;
    .login-other{
      padding: 3vw 0 10vw 0;
      display: flex;
      .login-other-info{
        a{
          padding-right: 10px;
          font-size: 3.8vw;
          color: #999;
          text-decoration: underline;
        }
      }
      .login-other-check{
        flex: 1;
        align-self: flex-end;
        text-align: right;
        .vux-check-icon{
          font-size: 3.8vw;
        }
        .weui-icon-success-circle{
          color: #002e5e;
          &:before{
            color: #002e5e;
          }
        }
      }
    }
    .login-btn{
      height: 10.9vw;
      .fontvw(38);
      background: #002e5e;
      border-radius: (10 / 750) * 100vw;
      line-height: inherit;
      &:active{
        background: #002e5e;
      }
    }
  }
  .account-other{
    padding: 0 9vw;
    text-align: center;
    .no-account-tit{
      margin: (80/750)*100vw 0 (30/750)*100vw 0;
      display: block;
      line-height: 2;
      .fontvw(28);
      color: #999;
    }
    .account-btn{
      border: 1px solid #002e5e;
      background: #fff;
      color: #002e5e;
      .fontvw(38);
      &:active{
        background: #fff;
        color: #002e5e;
      }
    }
  }
}
</style>
