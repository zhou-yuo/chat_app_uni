import { ref } from 'vue';

const useLoginNavigate = () => {
  /**
   * 登录
   */
  const toLogin = () =>{
    uni.reLaunch({
      url: '/pages/login/login'
    })
  }

  /**
   * 注册
   */
  const toRegist = () =>{
    uni.reLaunch({
      url: '/pages/login/regist'
    })
  }

  /**
   * 忘记密码
   */
  const toForgetPassword = () =>{
    uni.reLaunch({
      url: '/pages/login/forget_password'
    })
  }

  return {
    toLogin,
    toRegist,
    toForgetPassword
  }

}

export default useLoginNavigate