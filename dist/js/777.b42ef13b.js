"use strict";(self["webpackChunkinterview"]=self["webpackChunkinterview"]||[]).push([[777],{3542:function(e,t,s){s.d(t,{N$:function(){return n},eY:function(){return i},n$:function(){return r}});var a=s(2641);const r=e=>a.Z.post("/user/login",e),n=e=>a.Z.post("/user/register",e),i=e=>a.Z.get("/user/currentUser")},5777:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"register-page"},[t("van-nav-bar",{attrs:{title:"面经注册"}}),t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"},{pattern:/^\w{6,16}$/,message:"用户名为6-16位字符"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),t("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"},{pattern:/^\w{6,16}$/,message:"密码为6-16位字符"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{square:"",block:"",type:"primary","native-type":"submit"}},[e._v("注册")])],1),t("router-link",{staticClass:"link",attrs:{to:"/login"}},[e._v("已有账号?点我登录捏")])],1)],1)},r=[],n=(s(817),s(3542)),i={name:"register-page",data(){return{username:"",password:""}},methods:{async onSubmit(e){try{await(0,n.N$)(e);const t=this.$toast.loading({duration:0,forbidClick:!0,message:"注册成功,一秒后切换登录页"});let s=1;const a=setInterval((()=>{s--,s?t.message=`倒计时 ${s} 秒`:(clearInterval(a),this.$toast.clear(),this.$router.push("/login"))}),1e3)}catch(t){console.log(t)}}}},o=i,l=s(6432),u=(0,l.Z)(o,a,r,!1,null,"2a8e2e6a",null),c=u.exports}}]);
//# sourceMappingURL=777.b42ef13b.js.map