import{P as U,a as D}from"./ProgressBarMob-DrVkHtz_.js";import{_ as l,r,o as n,c as d,e as c,p as h,h as P,d as t,m as $,b as y,y as R,z as A,k as I,t as f,B as L,f as C,w,v as x,g as S,x as H}from"./index-CJPfqmld.js";import{P as O,S as k}from"./SearchProductSummary-CoIziFCX.js";import{A as B}from"./ApplicationUploadFoto-BuFRFUlh.js";import{U as M}from"./UserCompanies-Chvih7uF.js";import"./DeletionConfirmationForm-8PC7RKvb.js";import"./RadioListBox-vTokAvEH.js";const V={name:"search-product-comp"},N=e=>(h("data-v-49675e54"),e=e(),P(),e),q={class:"searchProductComp"},W=N(()=>t("h1",{class:"title"},"Поиск товара",-1));function G(e,s,p,u,o,a){const _=r("my-search-product-input");return n(),d("div",q,[W,c(_,{lable:"Название товара",placeholder:"Название товара или код",class:"inputbox",id:"name"}),c(_,{lable:"Предполагаемое кол-во",placeholder:"Предполагаемое кол-во",class:"inputbox",id:"amount"})])}const F=l(V,[["render",G],["__scopeId","data-v-49675e54"]]),z={name:"product-description",data(){return{note:"Можете заполнить не все поля, с оставшимися вам поможет наш специалист. Он напишет, как только вы оплатите услугу",value:"",selectSample:["Не выбрано","Да","Нет"]}},computed:{...$(["SEARCH_PRODUCT_APPL"])},methods:{...y(["SET_SEARCH_PRODUCT_APPL"]),saveInput(){const e={id:"description",value:this.value};this.SET_SEARCH_PRODUCT_APPL(e)}},mounted(){this.value=this.SEARCH_PRODUCT_APPL.description}},g=e=>(h("data-v-c7d0631c"),e=e(),P(),e),j={class:"productDescription"},J=g(()=>t("h1",{class:"title"},"Характеристики товара",-1)),K=g(()=>t("p",{class:"lable"},"Описание функционала",-1));function Q(e,s,p,u,o,a){const _=r("my-note"),i=r("my-search-product-input"),v=r("my-select-input");return n(),d("div",j,[J,c(_,{note:o.note,url:"info_red.svg",class:"note"},null,8,["note"]),c(i,{lable:"Размер",placeholder:"Например, 20×30×30 см",class:"inputbox",id:"one_volume"}),c(i,{lable:"Материал",placeholder:"Материал",class:"inputbox",id:"material"}),c(i,{lable:"Цвет",placeholder:"Цвет",class:"inputbox",id:"color"}),c(v,{class:"mySelectInput",id:"package",title:"Упаковка",value:o.selectSample},null,8,["value"]),c(v,{class:"mySelectInput",id:"sample_for_replication",title:"Образец для утверждения тиража",value:o.selectSample},null,8,["value"]),K,R(t("textarea",{placeholder:"Описание функционала",class:"text-area",id:"description",onInput:s[0]||(s[0]=(...m)=>a.saveInput&&a.saveInput(...m)),"onUpdate:modelValue":s[1]||(s[1]=m=>o.value=m)},null,544),[[A,o.value]])])}const X=l(z,[["render",Q],["__scopeId","data-v-c7d0631c"]]),Y={name:"product-photo",components:{ApplicationUploadFoto:B},data(){return{value:""}},computed:{...$(["SEARCH_PRODUCT_APPL"])},methods:{...y(["SET_SEARCH_PRODUCT_APPL"]),saveInput(){const e={id:"note",value:this.value};this.SET_SEARCH_PRODUCT_APPL(e)}},mounted(){this.value=this.SEARCH_PRODUCT_APPL.note}},Z=e=>(h("data-v-071afde6"),e=e(),P(),e),ee={class:"productPhoto"},te=Z(()=>t("h1",{class:"title"},"Примечание и фото",-1));function se(e,s,p,u,o,a){const _=r("application-upload-foto");return n(),d("div",ee,[te,R(t("textarea",{placeholder:"Примечание и параметры товара",class:"text-area",id:"note","onUpdate:modelValue":s[0]||(s[0]=i=>o.value=i),onInput:s[1]||(s[1]=(...i)=>a.saveInput&&a.saveInput(...i))},null,544),[[A,o.value]]),c(_,{class:"uploadFoto"})])}const oe=l(Y,[["render",se],["__scopeId","data-v-071afde6"]]),ae={name:"pay-methods"},ce={class:"payMethods"},re=I('<h3 class="title" data-v-61368e40> Способ оплаты </h3><div class="input-wr" data-v-61368e40><input type="radio" name="method" id="bank_cart" class="input" data-v-61368e40><label for="bank_cart" class="label" data-v-61368e40> Банковская карта </label></div><div class="input-wr" data-v-61368e40><input type="radio" name="method" id="corp_cart" class="input" data-v-61368e40><label for="corp_cart" class="label" data-v-61368e40> Корпоративная карта </label></div><div class="input-wr" data-v-61368e40><input type="radio" name="method" id="by_bill" checked class="input" data-v-61368e40><label for="by_bill" class="label" data-v-61368e40> Выставление счета </label></div>',4),ne=[re];function ie(e,s,p,u,o,a){return n(),d("div",ce,ne)}const _e=l(ae,[["render",ie],["__scopeId","data-v-61368e40"]]),de={name:"service-item"},b=e=>(h("data-v-4550d964"),e=e(),P(),e),le={class:"service-item"},pe={class:"header"},ue=b(()=>t("div",{class:"header_notPublished"},"Неоплачена",-1)),me=b(()=>t("div",{class:"header_published"},"В работе",-1)),he=b(()=>t("div",{class:"header_finished"},"Завершена",-1)),Pe={class:"header_right"},ve={class:"service-item__main"},fe={class:"service-item__title"},Se=b(()=>t("footer",{class:"service-item__footer"},[t("p",{class:"service-item__price"}," 15000 руб ")],-1));function Ce(e,s,p,u,o,a){return n(),d("div",le,[t("header",pe,[ue,me,he,t("div",Pe," №10"+f()+"   Создана 10.10.10"+f(),1)]),t("main",ve,[t("h3",fe," Название услуги "+f(),1)]),Se])}const be=l(de,[["render",Ce],["__scopeId","data-v-4550d964"]]),$e={name:"service-payment",components:{ServiceItem:be,PayMethods:_e,UserCompanies:M},data(){return{msg:"",showPreloader:!1}},computed:{...$(["SEARCH_PRODUCT_APPL","CURRENT_USER"])},methods:{...L(["GET_BILL"]),getBill(){debugger;if(!this.CURRENT_USER){this.$router.push("/customer/signin");return}this.showPreloader=!0;const e={product_name:this.SEARCH_PRODUCT_APPL.name,product_amount:this.SEARCH_PRODUCT_APPL.amount,one_volume:this.SEARCH_PRODUCT_APPL.one_volume,material:this.SEARCH_PRODUCT_APPL.material,color:this.SEARCH_PRODUCT_APPL.color,package:this.SEARCH_PRODUCT_APPL.package,sample_for_replication:this.SEARCH_PRODUCT_APPL.sample_for_replication,description_of_functionality:this.SEARCH_PRODUCT_APPL.description,is_logo:this.SEARCH_PRODUCT_APPL.is_logo,is_brand:this.SEARCH_PRODUCT_APPL.brand_name,location_logo:this.SEARCH_PRODUCT_APPL.location_logo,note:this.SEARCH_PRODUCT_APPL.note};this.GET_BILL(e).then(s=>{this.showPreloader=!1,this.msg=s,setTimeout(()=>{this.msg=""},2e3)}).catch(s=>{this.showPreloader=!1,this.msg=s,setTimeout(()=>{this.msg=""},2e3)})}}},E=e=>(h("data-v-c6b33e4a"),e=e(),P(),e),ye={class:"ServicePayment"},Re=E(()=>t("h1",{class:"title"}," Оплата услуги ",-1)),Ae={class:"btn-wr"},ge={key:0,class:"msg"},Ee=E(()=>t("div",{class:"price-wr"},[t("p",{class:"text"}," К оплате "),t("p",{class:"price"}," 15 000 руб ")],-1));function Te(e,s,p,u,o,a){const _=r("service-item"),i=r("pay-methods"),v=r("user-companies"),m=r("my-blue-btn"),T=r("my-semipolar-spinner");return n(),d("div",ye,[Re,c(_),c(i,{class:"payMethods"}),c(v,{class:"userCompanies"}),t("div",Ae,[o.msg?(n(),d("div",ge,f(o.msg),1)):C("",!0),c(m,{onClick:a.getBill},{default:w(()=>[x(" Получить счёт ")]),_:1},8,["onClick"]),Ee,o.showPreloader?(n(),S(T,{key:1})):C("",!0)])])}const Ue=l($e,[["render",Te],["__scopeId","data-v-c6b33e4a"]]),De={components:{ProgressBar:U,ProgressBarMob:D,SearchProductComp:F,ProductDescription:X,ProductLogo:O,ProductPhoto:oe,SearchProductSummary:k,ServicePayment:Ue},name:"search-product",data(){return{innerWidth:window.innerWidth}},computed:{component(){return this.$route.query.step},showProgressBar(){return!(innerWidth<600||this.$route.query.step==="SearchProductSummary"||this.$route.query.step==="ServicePayment")},showProgressBarMob(){return!(innerWidth>600||this.$route.query.step==="SearchProductSummary"||this.$route.query.step==="ServicePayment")}},created(){console.log("created"),window.addEventListener("beforeunload",e=>{(this.$route.name==="search-product"||this.$route.name==="customer-page")&&(e.preventDefault(),e.returnValue="")})}},Ie={class:"searchProductPage"};function Le(e,s,p,u,o,a){const _=r("progress-bar"),i=r("progress-bar-mob");return n(),d("div",Ie,[(n(),S(H(a.component))),a.showProgressBar?(n(),S(_,{key:0,class:"progress"})):C("",!0),a.showProgressBarMob?(n(),S(i,{key:1})):C("",!0)])}const Ve=l(De,[["render",Le],["__scopeId","data-v-663b126e"]]);export{Ve as default};