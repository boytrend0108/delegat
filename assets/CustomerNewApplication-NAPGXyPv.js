import{_ as E,A as g,a as $,m as I,b as q,r as i,o as e,c as p,d as c,t as v,e as a,f as s,g as o,p as S,h as D}from"./index-CJPfqmld.js";import{A as L,a as b}from"./ApplicationAdditionInfo-izoz-DVQ.js";import{A as N,a as w}from"./ApplicationForm-BukldAMN.js";import{A as P}from"./ApplicationCheck-DzKE98U0.js";import"./ApplicationUploadFoto-BuFRFUlh.js";import"./ApplicationDocs-CZUIwnfV.js";import"./MyWrongFileFormat-heQpOvM6.js";const V={name:"customer-new-application",components:{ApplicationProgressBar:g,ApplProgressBarMob:$,ApplicationDescription:L,ApplicationServices:N,ApplicationShipping:w,ApplicationCheck:P,ApplicationAdditionInfo:b},data(){return{innerWidth:window.innerWidth}},computed:{...I(["TITLE"]),setTitle(){return this.$route.query.step==="cities"?this.TITLE.cities:this.$route.query.step==="naming"?this.TITLE.naming:this.$route.query.step==="ApplicationDescription"?this.TITLE.description:this.$route.query.step==="additional_services"?this.TITLE.additional_services:this.$route.query.step==="delivery_type"?this.TITLE.delivery_type:this.$route.query.step==="info"?this.TITLE.info:this.$route.query.step==="check"?this.TITLE.check:""}},methods:{...q(["SET_INPUT","SAVE_INPUT_VALUE","SET_SHOW_HEADER_DROPDOWN"]),select(t){let r=t.target.textContent;this.SAVE_INPUT_VALUE(r),this.SET_INPUT(this.$route)},clickHandler(){this.SET_SHOW_HEADER_DROPDOWN(!1)}},created(){window.addEventListener("beforeunload",t=>{(this.$route.name==="customer-new-application"||this.$route.name==="customer-page")&&(t.preventDefault(),t.returnValue="")})}},W=t=>(S("data-v-eae2f302"),t=t(),D(),t),H={class:"title"},B={class:"main"},C={key:0,class:"section"},O=W(()=>c("h3",{class:"form__title"},"Адрес доставки груза",-1)),U={key:1,class:"section"};function x(t,r,R,M,l,n){const _=i("my-input"),u=i("my-info-input"),d=i("application-description"),h=i("application-services"),m=i("application-shipping"),y=i("application-addition-info"),f=i("application-check"),T=i("application-progress-bar"),k=i("appl-progress-bar-mob");return e(),p("div",{onClick:r[0]||(r[0]=(...A)=>n.clickHandler&&n.clickHandler(...A)),class:"newApplicationPage"},[c("h1",H,v(n.setTitle),1),c("main",B,[this.$route.query.step==="cities"?(e(),p("section",C,[a(_,{class:"selector__input"}),O,a(u,{name:"toAddress"})])):s("",!0),this.$route.query.step==="naming"?(e(),p("section",U,[a(_,{class:"selector__input"})])):s("",!0),this.$route.query.step==="ApplicationDescription"?(e(),o(d,{key:2,class:"description"})):s("",!0),this.$route.query.step==="additional_services"?(e(),o(h,{key:3,class:"servises"})):s("",!0),this.$route.query.step==="delivery_type"?(e(),o(m,{key:4,class:"shipping"})):s("",!0),this.$route.query.step==="info"?(e(),o(y,{key:5})):s("",!0),this.$route.query.step==="check"?(e(),o(f,{key:6})):s("",!0),this.$route.query.step!=="check"&&l.innerWidth>600?(e(),o(T,{key:7})):s("",!0),this.$route.query.step!=="check"&&l.innerWidth<600?(e(),o(k,{key:8,class:"progress-mobile"})):s("",!0)])])}const X=E(V,[["render",x],["__scopeId","data-v-eae2f302"]]);export{X as default};