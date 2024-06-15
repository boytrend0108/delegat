import{_ as S,V as E,m as O,B as C,b as y,r as t,o as r,c,e as i,w as R,$ as D,d as a,g as s,f as n,F as k,i as w,p as I,h as T}from"./index-BueGtXLM.js";import{M as g}from"./MyWrongFileFormat-DdrKquMM.js";const A={name:"provider-bills",components:{ValidationErrors:E,MyWrongFileFormat:g},data(){return{note:"Выставьте счёт за свои услуги. После оплаты заказчик загрузит сюда платёжку",note2:"Заказчик еще не загрузил платежное поручение по этому счёту",is_provider_invoice:!1,is_customer_invoice:!1,number:null}},computed:{...O(["DOCS","VALIDATION_ERRORS"]),showUploadForm(){return!this.DOCS.provider_invoice[this.number].binaryFile},name(){return this.DOCS.provider_invoice[this.number].name},showItem(){return!!this.DOCS.invoice.file},showError(){if(this.VALIDATION_ERRORS)return!!this.VALIDATION_ERRORS.includes("invoice")},sortedBills(){return[...this.DOCS.provider_invoice_check].sort((e,_)=>e.id-_.id)}},methods:{...C(["GET_FILE_FROM_SERVER","GET_BILLS_FROM_SERVER","GET_CHAT_ID"]),...y(["SET_CLEAR_DOCS"])},watch:{DOCS:{handler(){setTimeout(()=>window.scrollTo(0,document.body.scrollHeight),500)},deep:!0}},mounted(){this.GET_BILLS_FROM_SERVER(this.$route.params.id),this.GET_CHAT_ID({order_id:this.$route.params.id,offer_id:this.$route.query.offer_id})},unmounted(){this.SET_CLEAR_DOCS()}},B=e=>(I("data-v-fb0df3c6"),e=e(),T(),e),b={class:"providerBills"},F=B(()=>a("h1",{class:"title"},"Счета",-1)),L={class:"notes"},V={class:"invoice-wr"},G={class:"uploadArea"};function N(e,_,M,$,d,l){const m=t("my-note"),p=t("my-download-item-from-server"),u=t("my-uploaded-item"),h=t("my-wrong-file-format"),v=t("validation-errors"),f=t("my-upload-item");return r(),c("div",b,[F,i(D,{name:"list",appear:"",class:"transition",tag:"div"},{default:R(()=>[(r(!0),c(k,null,w(l.sortedBills,(H,o)=>(r(),c("div",{class:"uploadCompBox",key:o},[a("div",L,[e.DOCS.provider_invoice_check[o].check_path?n("",!0):(r(),s(m,{key:0,note:d.note2,url:"info_red.svg"},null,8,["note"]))]),a("div",V,[e.DOCS.provider_invoice_check[o].check_path?(r(),s(p,{key:0,id:"receipt_of_payment",href:"https://docs.google.com/viewer?url=https://static.delegat.online/"+e.DOCS.provider_invoice_check[o].check_path,fileName:"Платежное поручение"},null,8,["href"])):n("",!0),e.DOCS.provider_invoice_check[o].invoice_path?(r(),s(u,{key:1,name:e.DOCS.provider_invoice_check[o].invoice_name,id:"provider_invoice",number:o},null,8,["name","number"])):n("",!0)])]))),128))]),_:1}),a("div",G,[i(m,{note:d.note,url:"info.svg"},null,8,["note"]),i(h,{id:"invoice"}),l.showError?(r(),s(v,{key:0})):n("",!0),i(f,{id:"invoice",msg:"Загрузить счёт",class:"uploadFirst"})])])}const U=S(A,[["render",N],["__scopeId","data-v-fb0df3c6"]]);export{U as default};