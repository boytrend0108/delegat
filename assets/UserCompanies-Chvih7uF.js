import{R as i}from"./RadioListBox-vTokAvEH.js";import{m as d,b as c,B as n,_ as p,r as _,o as r,c as l,d as t,e as a,p as m,h}from"./index-CJPfqmld.js";const u={components:{RadioListBox:i},data(){return{name:"user-companies"}},computed:{...d(["BANK_ID","BANK_NAME","CURRENCY_TYPE","FID","FIRMS"]),radioLable(){return this.BANK_ID?`${this.BANK_NAME}, ${this.CURRENCY_TYPE}`:null}},methods:{...c(["SHOW_DIALOG"]),...n(["DELETE_BANK"]),changeCompany(){this.SHOW_DIALOG("addNewCompany")}}},o=s=>(m("data-v-8b29ddbe"),s=s(),h(),s),N={class:"userCompanies"},B=o(()=>t("h3",{class:"title"},"Мои фирмы",-1)),C={class:"company"},I=o(()=>t("p",{class:"subtitle"},"Фирмы",-1)),b=o(()=>t("hr",{class:"hr"},null,-1)),A=o(()=>t("p",{class:"subtitle"},"Счета",-1));function E(s,D,f,x,L,R){const e=_("radio-list-box");return r(),l("div",N,[B,t("div",C,[I,a(e,{title:"Добавить компанию",class:"radioListBox",id:"addNewCompany"}),b,A,a(e,{"data-tooltip":s.FID?"":"Сначала надо добавить компанию",title:"Добавить реквизиты",id:"addCompanyDetails",class:"radioListBox"},null,8,["data-tooltip"])])])}const v=p(u,[["render",E],["__scopeId","data-v-8b29ddbe"]]);export{v as U};