import{_ as I,r as m,o as r,c as l,f as M,d as i,e as t,a0 as b,p as S,h as u,V as F,m as L,b as N,B as A,y as D,z as O,F as g,i as T,t as C,w as f,v,n as w,g as P}from"./index-BueGtXLM.js";const y={name:"banks-comp",data(){return{bankName_1:"Открыть с Тинькофф",bankLink_1:"https://www.tinkoff.ru/business/rko/form?utm_medium=ptr.act&utm_campaign=sme.partners&partnerId=5-2SF2EZFLP&agentSsoId=a1018632-8a13-4ffd-92a3-7891d29be335&utm_source=partner_rko_a_sme",bankLogo_1:"tinkoff.png",bankName_2:"Открыть с Точка",bankLink_2:"https://partner.tochka.com?referer1=7714476990",bankLogo_2:"tochka.png",bankName_3:"Открыть с Модульбанк",bankLink_3:"https://modulbank.ru/rko/?utm_source=agentnet&utm_medium=partner&utm_campaign=RKO_ag-7714476990",bankLogo_3:"module.png",innerWidth:window.innerWidth}}},W=n=>(S("data-v-c3797e20"),n=n(),u(),n),V={class:"banksComp"},H={key:0,src:b,alt:"банки"},G={class:"bank-wr"},B=W(()=>i("h4",{class:"banks__title"},"Ещё не являетесь юрлицом? Станьте им прямо сейчас",-1)),Y={class:"banks"};function j(n,e,E,p,s,o){const a=m("my-bank");return r(),l("div",V,[s.innerWidth<600?(r(),l("img",H)):M("",!0),i("div",G,[B,i("div",Y,[t(a,{bankName:s.bankName_1,bankLink:s.bankLink_1,bankLogo:s.bankLogo_1},null,8,["bankName","bankLink","bankLogo"]),t(a,{bankName:s.bankName_2,bankLink:s.bankLink_2,bankLogo:s.bankLogo_2},null,8,["bankName","bankLink","bankLogo"]),t(a,{bankName:s.bankName_3,bankLink:s.bankLink_3,bankLogo:s.bankLogo_3},null,8,["bankName","bankLink","bankLogo"])])])])}const $=I(y,[["render",j],["__scopeId","data-v-c3797e20"]]),U={name:"new-company-form",components:{ValidationErrors:F},data(){return{inputInn:""}},computed:{...L(["FIRMS","VALIDATION_ERRORS","COMPANIES_LIST","IS_FIRM","FID","SELECTED_FIRM","ADD_OR_CHANGE_FIRM","IS_PHONE_VALID","IS_EMAIL_VALID"]),isDisabled(){return this.SELECTED_FIRM!==""?!(this.IS_PHONE_VALID&&this.IS_EMAIL_VALID&&this.FIRMS[this.SELECTED_FIRM].address_fact&&this.FIRMS[this.SELECTED_FIRM].phone_number&&this.FIRMS[this.SELECTED_FIRM].email):!0}},methods:{...N(["SHOW_DIALOG","SET_CLICK","SET_COMPANIES_LIST","SET_NEW_COMPANY_FORM","SET_VALIDATION_ERR","SET_NEW_INN"]),...A(["SEND_NEW_COMPANY_TO_SERVER","DELETE_COMPANY","GET_COMPANIES_FROM_DADATA","UPDATE_COMPANY","SET_SHOW_PRELOADER"]),showSuggestions(){this.SET_VALIDATION_ERR("clear"),this.inputInn.length>2&&this.GET_COMPANIES_FROM_DADATA(this.inputInn)},selectCompany(n){this.inputInn=n.target.textContent.split(" ")[0],this.SET_NEW_COMPANY_FORM(this.inputInn),this.SET_COMPANIES_LIST(),this.SET_NEW_INN(!0)},hideDropdown(){this.SET_COMPANIES_LIST()},async onSubmit(){this.SET_SHOW_PRELOADER(!0);const n={inn:this.FIRMS[0].inn,kpp:this.FIRMS[0].kpp,ogrn:this.FIRMS[0].ogrn,long_name:this.FIRMS[0].long_name,director_name:this.FIRMS[0].director_name,address_fact:this.FIRMS[0].address_fact,address_jur:this.FIRMS[0].address_jur,email:this.FIRMS[0].email,phone_number:this.FIRMS[0].phone_number};switch(this.ADD_OR_CHANGE_FIRM){case"addNewCompany":this.SEND_NEW_COMPANY_TO_SERVER(n).then(()=>{this.SET_SHOW_PRELOADER(!1),this.SHOW_DIALOG()}).catch(e=>{this.SET_SHOW_PRELOADER(!1),console.log("throw==>",e)});break;case"changeFirm":this.UPDATE_COMPANY(n).then(()=>{this.SET_SHOW_PRELOADER(!1),this.SHOW_DIALOG(),this.SET_NEW_INN(!1)}).catch(e=>{this.SET_SHOW_PRELOADER(!1),console.log("throw==>",e)});break}}},mounted(){this.SELECTED_FIRM===""?this.inputInn="":this.inputInn=this.FIRMS[this.SELECTED_FIRM].inn}},d=n=>(S("data-v-273ae775"),n=n(),u(),n),z=d(()=>i("h2",{class:"form-title"},"Новая фирма",-1)),K={class:"inputInn"},Z=d(()=>i("p",{class:"formElem__title"},"ИНН",-1)),q={class:"companiesDropDown"},J={class:"btn-box"};function Q(n,e,E,p,s,o){const a=m("my-company-form-elem"),h=m("my-color-btn"),R=m("validation-errors");return r(),l("section",{class:"form",onClick:e[3]||(e[3]=(..._)=>o.hideDropdown&&o.hideDropdown(..._))},[z,i("div",K,[Z,D(i("input",{type:"text",class:"input","onUpdate:modelValue":e[0]||(e[0]=_=>s.inputInn=_),onInput:e[1]||(e[1]=(..._)=>o.showSuggestions&&o.showSuggestions(..._))},null,544),[[O,s.inputInn]]),i("ul",q,[(r(!0),l(g,null,T(n.COMPANIES_LIST,(_,k)=>(r(),l("li",{class:"dropDownItem",key:k,onClick:e[2]||(e[2]=(...c)=>o.selectCompany&&o.selectCompany(...c))},[i("p",null,C(_),1)]))),128))])]),t(a,{title:"КПП",value:n.FIRMS[0]&&n.FIRMS[0].kpp?n.FIRMS[0].kpp:"-"},null,8,["value"]),t(a,{title:"ОГРН",value:n.FIRMS[0]&&n.FIRMS[0].ogrn?n.FIRMS[0].ogrn:"-"},null,8,["value"]),t(a,{title:"Наименование",value:n.FIRMS[0]&&n.FIRMS[0].long_name?n.FIRMS[0].long_name:"-"},null,8,["value"]),t(a,{title:"Сокр. наименование",value:n.FIRMS[0]&&n.FIRMS[0].long_name?n.FIRMS[0].long_name:"-"},null,8,["value"]),t(a,{title:"Юридический адрес",value:n.FIRMS[0]&&n.FIRMS[0].address_jur?n.FIRMS[0].address_jur:"-"},null,8,["value"]),t(a,{title:"Фактический адрес",value:n.FIRMS[0]&&n.FIRMS[0].address_fact?n.FIRMS[0].address_fact:"-"},null,8,["value"]),t(a,{title:"ФИО Гендиректора",value:n.FIRMS[0]&&n.FIRMS[0].director_name?n.FIRMS[0].director_name:"-"},null,8,["value"]),t(a,{title:"Email компании",value:n.FIRMS[0]&&n.FIRMS[0].email?n.FIRMS[0].email:"-"},null,8,["value"]),t(a,{title:"Телефон компании",value:n.FIRMS[0]&&n.FIRMS[0].phone_number?n.FIRMS[0].phone_number:"-"},null,8,["value"]),i("div",J,[t(h,{onClick:o.onSubmit,class:w(["btn",{disabled:o.isDisabled}]),id:"addNewCompany",disabled:o.isDisabled},{default:f(()=>[v("Сохранить")]),_:1},8,["onClick","disabled","class"]),(r(),P(R,{key:0,"validation-errors":this.VALIDATION_ERRORS,class:"error"},null,8,["validation-errors"]))])])}const x=I(U,[["render",Q],["__scopeId","data-v-273ae775"]]);export{$ as B,x as N};
