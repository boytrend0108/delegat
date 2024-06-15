import{a1 as x,m as P,I as g,a2 as ss,_ as I,a3 as es,r as d,o as t,c as h,e as R,y as ts,z as os,d as s,w as u,v as m,n as O,H as b,g as i,f as r,p as L,h as k,b as F,B as H,a4 as G,a5 as M,t as a,F as W,i as $,a6 as rs}from"./index-BueGtXLM.js";import{A as V}from"./ApplicationUploadFoto-DKtxBwh_.js";import{A as is}from"./ApplicationDocs-BMD8qhLb.js";import{b as Y}from"./ApplicationForm-DQaY3t7D.js";import{a as j,b as z,U as Q,S as ns}from"./SearchProductSummary-BKihdOH2.js";import{D as J}from"./DeletionConfirmationForm-UVl94SnE.js";import"./MyWrongFileFormat-DdrKquMM.js";const as={name:"customer-feedback-form",components:{MyRating:x},props:{user_id:[String,Number]},computed:{...P(["CURRENT_USER"])},setup(e,n){let y=g(""),E=g(0),_=g(!1);const o=g("Помогите нам улучшить сервис — оставьте отзыв о работе специалиста");function l(f){E=f,C=!1}async function c(){_.value=!0;try{await es({method:"post",url:"/review/user",data:{user_id:e.user_id,grade:E,review:y.value}}),console.log("Oтзыв отправлен"),n.emit("feedback"),_.value=!1}catch(f){console.log(f,"Ошибка отправки ордера")}}let C=ss(()=>!(y.value||E.value));return{note:o,msg:y,rating:E,setRating:l,sendCustomerFeedback:c,isBtnDisable:C,showPreloader:_}}},K=e=>(L("data-v-f0a69c7d"),e=e(),k(),e),_s={class:"customerFeedback"},ds=K(()=>s("h2",{class:"form-title"}," Оцените работу специалиста ",-1)),cs={class:"rating"},ls=K(()=>s("p",{class:"rating_stars"},"Ваша оценка",-1));function us(e,n,y,E,_,o){const l=d("my-note"),c=d("my-rating"),C=d("my-blue-btn"),f=d("my-semipolar-spinner");return t(),h("form",_s,[ds,R(l,{note:E.note},null,8,["note"]),ts(s("textarea",{class:"msg",placeholder:"Отзыв","onUpdate:modelValue":n[0]||(n[0]=T=>E.msg=T)},null,512),[[os,E.msg]]),s("div",cs,[ls,R(c,{class:"rating_stars",onRating:E.setRating},null,8,["onRating"])]),R(C,{class:O(["btn",{disabled:E.isBtnDisable}]),onClick:b(E.sendCustomerFeedback,["prevent"]),disable:E.isBtnDisable},{default:u(()=>[m(" Отправить ")]),_:1},8,["onClick","disable","class"]),E.showPreloader?(t(),i(f,{key:0,style:{margin:"20px auto"}})):r("",!0)])}const ms=I(as,[["render",us],["__scopeId","data-v-f0a69c7d"]]),hs={name:"success-subscribe",methods:{...F(["SHOW_DIALOG","SET_SHOW_SUCCESS_FORM"]),handler(){this.SET_SHOW_SUCCESS_FORM(!1),this.SHOW_DIALOG()}}},q=e=>(L("data-v-fb7a82f9"),e=e(),k(),e),Es={class:"successSubscribe"},ps=q(()=>s("h2",{class:"title"},"Благодарим за отзыв!",-1)),Ds=q(()=>s("p",{class:"msg"},"Мы приложим все усилия, чтобы сделать наш сервис ещё лучше и порадовать вас",-1)),ys=q(()=>s("p",{class:"submsg"}," © Команда Delegat ",-1));function fs(e,n,y,E,_,o){const l=d("my-blue-btn");return t(),h("div",Es,[ps,Ds,ys,R(l,{class:"btn",onClick:o.handler},{default:u(()=>[m("Ок")]),_:1},8,["onClick"])])}const Cs=I(hs,[["render",fs],["__scopeId","data-v-fb7a82f9"]]),Os={name:"customer-order-delivery",components:{ApplicationForm:Y,ApplicationDocs:is,ApplicationUploadFoto:V,CustomerFeedbackForm:ms,SuccessFeedback:Cs,SuccessPublishOrder:j,SuccessUpdateOrder:z,DeletionConfirmationForm:J,UnpublishConfirmationForm:Q},props:{order:{type:Object}},data(){return{statement:"",additional_services:[],delivery_type:"",updatedOrder:this.order,isOrderUpdated:!1,showPreloader:!1,showCustomerFeedbackForm:!1,showSuccessForm:!1,showUpdateForm:!1,showDeletionConfirmationForm:!1,showUnpublishConfirmationForm:!1,buttonAction:null}},computed:{...P(["TITLE","WEIGHT","CAPACITY","DATE_OF_READINESS","SHOW_PDF_VIEWER","DIALOG","BTN_ID","DOCS","COMMENT_FOR_SERVICE","SELECTED_ORDER","COUNTRY","CITY","APPLICATION_NAME","APPLICATION_DESCRIPTION","QUANTITY","ADDRESS_FROM","CURRENT_USER","COMMENT_FOR_SERVICE"]),showDialog(){return!!(this.showSuccessForm||this.showUpdateForm||this.showDeletionConfirmationForm||this.showUnpublishConfirmationForm)},src(){switch(this.BTN_ID){case"invoice":return this.DOCS.invoice.customer.url;case"packing_list":return this.DOCS.packing_list.url}},showUpdateBtn(){return!!this.isOrderUpdated},showPublishBtn(){return this.isOrderUpdated?!1:this.$route.query.status==="UNPUBLISHED"},showEditBtn(){return this.$route.query.status==="UNPUBLISHED"},dateCreated(){if(this.order)return this.order.created_at.split("").slice(0,10).join("")},showApplicationForm(){return!(this.$route.query.status==="IN_PROGRESS"||this.$route.query.status==="COMPLETED")}},methods:{...H(["CANCEL_CUSTOMER_ORDER","GET_PROVIDER_OFFERS","GET_CUSTOMER_ORDER_BY_ID","UNPUBLISH_ORDER","CONFIRM_ORDER","GET_IMAGE_FROM_SERVER","UPDATE_DELIVERY_ORDER","PUBLISH_ORDER"]),...F(["SET_SHOW_HEADER_DROPDOWN","SHOW_DIALOG","SET_SELECTED_ID","SET_HREF_FILE","SET_CLEAR_IMG","SET_SELECTED_ORDER","SET_CHANGE_ORDER_STATUS"]),showConfirmationForm(e){this.buttonAction=e,this.showDeletionConfirmationForm=!0},closeDialog(){this.showUpdateForm=!1,this.showSuccessForm=!1,this.showDeletionConfirmationForm=!1,this.SELECTED_ID?this.SET_SELECTED_ID(""):this.$router.push("/customer/my_applications")},publishOrder(){console.log("publish"),this.showPreloader=!0,this.PUBLISH_ORDER(this.order.id).then(()=>{this.SET_CHANGE_ORDER_STATUS(),this.$router.push(`/customer/order/${this.order.id}?status=PUBLISHED&type=delivery`),this.isOrderUpdated=!1,this.showPreloader=!1,this.showSuccessForm=!0})},edit({target:e}){const n=e.closest("svg");!n||!n.id||(this.SET_SELECTED_ID(n.id),this.SHOW_DIALOG())},updateOrder(){this.showPreloader=!0;const e={from_country:this.order.from_country,from_city:this.order.from_city,from_address:this.order.from_address,agent_fullname:this.order.agent_fullname,agent_phone_number:this.order.agent_phone_number,agent_email:this.order.agent_email,to_country:"Россия",to_city:this.order.to_city,name:this.order.name,description:this.order.description,additional_services:G(this.order.additional_services),comment_for_service:this.order.comment_for_service,gross:this.order.gross,amount:this.order.amount,cargo_volume:this.order.cargo_volume,date_of_cargo_readiness:this.order.date_of_cargo_readiness,delivery_type:M(this.order.delivery_type)};this.UPDATE_DELIVERY_ORDER(e).then(()=>{this.isOrderUpdated=!1,this.showPreloader=!1,this.showUpdateForm=!0}).catch(()=>this.showPreloader=!1)},clickHandler(){this.SET_SHOW_HEADER_DROPDOWN(!1)},cancelOrder(){console.log("emit from customer order delivery"),this.showDeletionConfirmationForm=!1,this.showPreloader=!0,this.CANCEL_CUSTOMER_ORDER(this.order.id).then(()=>{this.showPreloader=!1,this.statement="Заявка успешно удалена",setTimeout(()=>{this.statement="",this.$router.push("/customer/my_applications")},1500)}).catch(()=>this.showPreloader=!1)},unpublishOrder(){this.showUnpublishConfirmationForm=!1,this.showPreloader=!0,this.UNPUBLISH_ORDER(this.order.id).then(()=>{this.$router.push({query:{status:"UNPUBLISHED",type:"delivery"}}),this.showPreloader=!1}).catch(e=>{this.statement=e,setTimeout(()=>{this.statement=""},2e3),this.showPreloader=!1})},confirmOrder(){this.showDeletionConfirmationForm=!1,this.showPreloader=!0,this.CONFIRM_ORDER(this.order.id).then(()=>{this.$router.push({query:{status:"COMPLETED",type:"delivery"}}),this.GET_PROVIDER_OFFERS(this.$route.params.id),this.showCustomerFeedbackForm=!0,this.statement="Заявка закрыта",this.showPreloader=!1,setTimeout(()=>{this.statement="",this.SHOW_DIALOG()},1e3)}).catch(e=>{this.showPreloader=!1,this.statement=e,setTimeout(()=>{this.statement=""},2e3)})}},watch:{COUNTRY(){this.updatedOrder.from_country=this.COUNTRY},CITY(){this.updatedOrder.to_city=this.CITY},APPLICATION_NAME(){this.updatedOrder.name=this.APPLICATION_NAME},APPLICATION_DESCRIPTION(){this.updatedOrder.description=this.APPLICATION_DESCRIPTION},QUANTITY(){this.updatedOrder.amount=this.QUANTITY},WEIGHT(){this.updatedOrder.gross=this.WEIGHT},CAPACITY(){this.updatedOrder.cargo_volume=this.CAPACITY},DATE_OF_READINESS(){this.updatedOrder.date_of_cargo_readiness=this.DATE_OF_READINESS},updatedOrder:{handler(){this.isOrderUpdated=!0},deep:!0},SELECTED_ORDER:{handler(){this.isOrderUpdated=!0},deep:!0},DOCS:{handler(){this.isOrderUpdated=!0},deep:!0}},mounted(){this.SET_HREF_FILE({id:"clear"}),this.GET_IMAGE_FROM_SERVER({orderId:this.$route.params.id,size:"640"}).then(()=>this.images=this.DOCS.images.href).then(()=>{setTimeout(()=>{this.isOrderUpdated=!1},100)})}},S=e=>(L("data-v-70bf86ee"),e=e(),k(),e),Rs={class:"title"},Ss={class:"applicationInfo"},ws={class:"applicationInfo__left"},Ts={class:"applicationNum"},vs=S(()=>s("div",{class:"applicationInfo__title"}," Номер заявки ",-1)),Is={class:"applicationInfo__value"},Ls={class:"applicationDate"},ks=S(()=>s("div",{class:"applicationInfo__title"}," Coздана ",-1)),gs={class:"applicationInfo__value"},bs={key:0,class:"applicationInfo__value"},Ps={class:"button-box"},Fs={class:"scroll"},Us={class:"summary__item",id:"country"},As={class:"summary__question"},Bs={class:"answer-wr"},Ns={class:"summary__answer"},Hs={class:"summary__item",id:"cities"},qs={class:"summary__question"},Gs={class:"answer-wr"},Ms={class:"summary__answer"},Ws={class:"summary__item",id:"naming"},$s={class:"summary__question"},Vs={class:"answer-wr"},Ys={class:"summary__answer"},js={class:"summary__item",id:"product"},zs={class:"summary__question"},Qs={class:"answer-wr"},Js={class:"summary__answer"},Ks=S(()=>s("p",{class:"summary__question"}," Количество, шт ",-1)),Xs={class:"answer-wr"},Zs={class:"summary__answer"},xs=S(()=>s("p",{class:"summary__question"}," Общий вес БРУТТО, кг ",-1)),se={class:"answer-wr"},ee={class:"summary__answer"},te=S(()=>s("p",{class:"summary__question"}," Общий объём груза, м³ ",-1)),oe={class:"answer-wr"},re={class:"summary__answer"},ie=S(()=>s("p",{class:"summary__question"}," Дата готовности груза ",-1)),ne={class:"answer-wr"},ae={class:"summary__answer"},_e={class:"summary__item",id:"additional_services"},de={class:"summary__question"},ce={class:"answer-wr"},le={class:"summary__answer"},ue={class:"summary__ul"},me={key:0,class:"summary__li"},he={class:"summary__item",id:"delivery_type"},Ee={class:"summary__question"},pe={class:"answer-wr"},De={class:"summary__answer"},ye={class:"summary__item",id:"info1"},fe=S(()=>s("p",{class:"summary__question"},"Точный адрес забора груза",-1)),Ce={class:"answer-wr"},Oe={class:"summary__answer"},Re={class:"summary__item",id:"info2"},Se=S(()=>s("p",{class:"summary__question"},"Контакты представителя фабрики",-1)),we={class:"answer-wr"},Te={class:"info2-wr"},ve={class:"summary__answer"},Ie={class:"summary__answer"},Le={class:"summary__answer"},ke={key:0,class:"item__name"},ge={class:"photo-wr"},be={key:1,class:"errorMsg"},Pe={class:"btn-wr"};function Fe(e,n,y,E,_,o){const l=d("my-color-btn"),c=d("font-awesome-icon"),C=d("application-upload-foto"),f=d("application-docs"),T=d("customer-feedback-form"),U=d("success-feedback"),A=d("application-form"),v=d("my-dialog"),B=d("success-publish-order"),N=d("success-update-order"),p=d("deletion-confirmation-form"),X=d("unpublish-confirmation-form"),Z=d("my-big-spinner");return t(),h("div",{class:"applicatioinSummary",onClick:n[9]||(n[9]=b((...D)=>o.clickHandler&&o.clickHandler(...D),["stop"]))},[s("h2",Rs," Заявка "+a(y.order.name),1),s("div",Ss,[s("div",ws,[s("div",Ts,[vs,s("div",Is,a(y.order.rand_id),1)]),s("div",Ls,[ks,s("div",gs,a(o.dateCreated),1)])]),e.$route.query.status==="COMPLETED"?(t(),h("p",bs,"Заявка закрыта")):r("",!0),s("div",Ps,[e.$route.query.status==="UNPUBLISHED"?(t(),i(l,{key:0,class:"cancelBtn",onClick:n[0]||(n[0]=D=>o.showConfirmationForm("delete"))},{default:u(()=>[m(" Удалить заявку ")]),_:1})):r("",!0),o.showPublishBtn?(t(),i(l,{key:1,class:"cancelBtn",onClick:o.publishOrder},{default:u(()=>[m(" Опубликовать ")]),_:1},8,["onClick"])):r("",!0),e.$route.query.status==="PUBLISHED"?(t(),i(l,{key:2,class:"cancelBtn",onClick:n[1]||(n[1]=D=>_.showUnpublishConfirmationForm=!0)},{default:u(()=>[m(" Cнять с публикации ")]),_:1})):r("",!0),e.$route.query.status==="IN_PROGRESS"?(t(),i(l,{key:3,class:"cancelBtn",onClick:n[2]||(n[2]=D=>o.showConfirmationForm("confirm"))},{default:u(()=>[m(" Завершить ")]),_:1})):r("",!0),o.showUpdateBtn?(t(),i(l,{key:4,class:"cancelBtn",onClick:o.updateOrder},{default:u(()=>[m(" Обновить заявку ")]),_:1},8,["onClick"])):r("",!0)])]),(t(),h("p",{key:0,class:"successDelete",ref:"deleteMsg"},a(_.statement),513)),s("div",Fs,[s("section",{class:"summary",onClick:n[4]||(n[4]=(...D)=>o.edit&&o.edit(...D))},[s("div",Us,[s("p",As,a(e.TITLE.country),1),s("div",Bs,[s("p",Ns,a(e.SELECTED_ORDER.from_country),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"country"})):r("",!0)])]),s("div",Hs,[s("p",qs,a(e.TITLE.cities),1),s("div",Gs,[s("p",Ms,a(e.SELECTED_ORDER.to_city),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"cities"})):r("",!0)])]),s("div",Ws,[s("p",$s,a(e.TITLE.naming),1),s("div",Vs,[s("p",Ys,a(e.SELECTED_ORDER.name),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"naming"})):r("",!0)])]),s("div",js,[s("p",zs,a(e.TITLE.description),1),s("div",Qs,[s("p",Js,a(e.SELECTED_ORDER.description),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"description"})):r("",!0)])]),s("div",{class:O(["summary__item",{warning:!e.SELECTED_ORDER.amount}]),id:"weight"},[Ks,s("div",Xs,[s("p",Zs,a(e.SELECTED_ORDER.amount),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"description"})):r("",!0)])],2),s("div",{class:O(["summary__item",{warning:!e.SELECTED_ORDER.gross}]),id:"weight"},[xs,s("div",se,[s("p",ee,a(e.SELECTED_ORDER.gross),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"description"})):r("",!0)])],2),s("div",{class:O(["summary__item",{warning:!e.SELECTED_ORDER.cargo_volume}]),id:"capacity"},[te,s("div",oe,[s("p",re,a(e.SELECTED_ORDER.cargo_volume),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"description"})):r("",!0)])],2),s("div",{class:O(["summary__item",{warning:!e.SELECTED_ORDER.date_of_cargo_readiness}]),id:"dateOfReadiness2"},[ie,s("div",ne,[s("p",ae,a(e.SELECTED_ORDER.date_of_cargo_readiness),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"description"})):r("",!0)])],2),s("div",_e,[s("p",de,a(this.TITLE.additional_services),1),s("div",ce,[s("div",le,[s("ul",ue,[(t(!0),h(W,null,$(e.SELECTED_ORDER.additional_services,D=>(t(),h("li",{class:"summary__li",key:D.id},a(D),1))),128)),e.SELECTED_ORDER.comment_for_service?(t(),h("li",me,a(e.SELECTED_ORDER.comment_for_service),1)):r("",!0)])]),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"additional_services"})):r("",!0)])]),s("div",he,[s("p",Ee,a(this.TITLE.delivery_type),1),s("div",pe,[s("p",De,a(e.SELECTED_ORDER.delivery_type),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"delivery_type"})):r("",!0)])]),s("div",ye,[fe,s("div",Ce,[s("p",Oe,a(e.SELECTED_ORDER.from_city)+", "+a(e.SELECTED_ORDER.from_address),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"info1"})):r("",!0)])]),s("div",Re,[Se,s("div",we,[s("div",Te,[s("p",ve,"ФИО: "+a(e.SELECTED_ORDER.agent_fullname),1),s("p",Ie,"телефон: "+a(e.SELECTED_ORDER.agent_phone_number),1),s("p",Le,"email: "+a(e.SELECTED_ORDER.agent_email),1)]),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"info2"})):r("",!0)])]),e.$route.name==="search-product"||e.$route.name==="customer-order"?(t(),h("p",ke,"Приложенные фото товаров")):r("",!0),s("div",ge,[R(C,{class:"uploadFoto__box bottom"}),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",onClick:n[3]||(n[3]=D=>e.SET_CLEAR_IMG())})):r("",!0)]),e.DOCS.images.binaryFile.length>5?(t(),h("p",be," Не больше 5 фото ")):r("",!0),R(f)]),s("div",Pe,[e.$route.query.status==="UNPUBLISHED"?(t(),i(l,{key:0,class:"cancelBtn",onClick:n[5]||(n[5]=D=>o.showConfirmationForm("delete"))},{default:u(()=>[m(" Удалить заявку ")]),_:1})):r("",!0),o.showPublishBtn?(t(),i(l,{key:1,class:"cancelBtn",onClick:o.publishOrder},{default:u(()=>[m(" Опубликовать ")]),_:1},8,["onClick"])):r("",!0),e.$route.query.status==="PUBLISHED"?(t(),i(l,{key:2,class:"cancelBtn",onClick:n[6]||(n[6]=D=>this.showUnpublishConfirmationForm=!0)},{default:u(()=>[m(" Cнять с публикации ")]),_:1})):r("",!0),e.$route.query.status==="IN_PROGRESS"?(t(),i(l,{key:3,class:"cancelBtn",onClick:n[7]||(n[7]=D=>o.showConfirmationForm("confirm"))},{default:u(()=>[m(" Завершить ")]),_:1})):r("",!0),o.showUpdateBtn?(t(),i(l,{key:4,class:"cancelBtn",onClick:o.updateOrder},{default:u(()=>[m(" Обновить заявку ")]),_:1},8,["onClick"])):r("",!0)]),_.statement?(t(),h("p",{key:0,class:"successDelete",ref:"deleteMsg"},a(_.statement),513)):r("",!0)]),e.DIALOG?(t(),i(v,{key:1},{default:u(()=>[_.showCustomerFeedbackForm&&e.$route.query.status==="COMPLETED"?(t(),i(T,{key:0,user_id:e.CURRENT_USER.uid,onFeedback:n[8]||(n[8]=D=>_.showCustomerFeedbackForm=!1)},null,8,["user_id"])):r("",!0),!_.showCustomerFeedbackForm&&e.$route.query.status==="COMPLETED"?(t(),i(U,{key:1})):r("",!0),o.showApplicationForm?(t(),i(A,{key:2})):r("",!0)]),_:1})):r("",!0),o.showDialog?(t(),i(v,{key:2,onClose_dialog:o.closeDialog},{default:u(()=>[_.showSuccessForm?(t(),i(B,{key:0,onClose_dialog:o.closeDialog},null,8,["onClose_dialog"])):r("",!0),_.showUpdateForm?(t(),i(N,{key:1,onClose_dialog:o.closeDialog},null,8,["onClose_dialog"])):r("",!0),_.showDeletionConfirmationForm?(t(),i(p,{key:2,onDelete_order:o.cancelOrder,onConfirm_order:o.confirmOrder,buttonAction:_.buttonAction},null,8,["onDelete_order","onConfirm_order","buttonAction"])):r("",!0),_.showUnpublishConfirmationForm?(t(),i(X,{key:3,onUnpublish_order:o.unpublishOrder},null,8,["onUnpublish_order"])):r("",!0)]),_:1},8,["onClose_dialog"])):r("",!0),_.showPreloader?(t(),i(Z,{key:3})):r("",!0)])}const Ue=I(Os,[["render",Fe],["__scopeId","data-v-70bf86ee"]]),Ae={name:"customer-order-cost",components:{ApplicationForm:Y,ApplicationUploadFoto:V,SuccessPublishOrder:j,SuccessUpdateOrder:z,DeletionConfirmationForm:J,UnpublishConfirmationForm:Q},props:{order:{type:Object}},data(){return{statement:"",additional_services:[],delivery_type:"",isOrderUpdated:!1,showPreloader:!1,showSuccessForm:!1,showUpdateForm:!1,editForm:!1,showDeletionConfirmationForm:!1,showUnpublishConfirmationForm:!1,buttonAction:null}},computed:{...P(["TITLE","WEIGHT","CAPACITY","DATE_OF_READINESS","SHOW_PDF_VIEWER","DIALOG","BTN_ID","DOCS","DIALOG","SELECTED_ORDER","SELECTED_ID"]),showUpdateBtn(){return!!this.isOrderUpdated},showPublishBtn(){return this.isOrderUpdated?!1:this.$route.query.status==="UNPUBLISHED"},src(){switch(this.BTN_ID){case"invoice":return this.DOCS.invoice.customer.url;case"packing_list":return this.DOCS.packing_list.url}},dateCreated(){if(this.order)return this.order.created_at.split("").slice(0,10).join("")},showEditBtn(){return this.$route.query.status==="UNPUBLISHED"}},methods:{...H(["CANCEL_CUSTOMER_ORDER","GET_PROVIDER_OFFERS","GET_CUSTOMER_ORDER_BY_ID","UNPUBLISH_ORDER","PUBLISH_ORDER","CONFIRM_ORDER","GET_IMAGE_FROM_SERVER","UPDATE_COST_ORDER"]),...F(["SET_SHOW_HEADER_DROPDOWN","SET_SELECTED_ID","SHOW_DIALOG","SET_HREF_FILE","SET_CLEAR_IMG","SET_CHANGE_ORDER_STATUS"]),showConfirmationForm(e){this.buttonAction=e,this.showDeletionConfirmationForm=!0,this.SHOW_DIALOG()},closeDialog(){this.showUpdateForm=!1,this.showSuccessForm=!1,this.showUnpublishConfirmationForm=!1,this.editForm=!1},edit({target:e}){this.editForm=!0;const n=e.closest("svg");!n||!n.id||(this.SET_SELECTED_ID(n.id),console.log(this.SELECTED_ID),this.SHOW_DIALOG())},clickHandler(){this.SET_SHOW_HEADER_DROPDOWN(!1)},showDeleteWarning(){this.showDeletionConfirmationForm=!0,this.SHOW_DIALOG()},cancelOrder(){this.SHOW_DIALOG(),this.showDeletionConfirmationForm=!1,this.showPreloader=!0,this.CANCEL_CUSTOMER_ORDER(this.order.id).then(()=>{this.statement="Заявка успешно удалена",this.showPreloader=!1,setTimeout(()=>{this.statement="",this.$router.push("/customer/my_applications")},1500)})},publishOrder(){this.showPreloader=!0,this.PUBLISH_ORDER(this.$route.params.id).then(()=>{this.SET_CHANGE_ORDER_STATUS(),this.$router.push(`/customer/order/${this.$route.params.id}?status=PUBLISHED&type=cost`),this.showPreloader=!1,this.isOrderUpdated=!1,this.showSuccessForm=!0,this.SHOW_DIALOG()})},unpublishOrder(){this.showUnpublishConfirmationForm=!1,this.showPreloader=!0,this.UNPUBLISH_ORDER(this.order.id).then(()=>{this.showPreloader=!1,this.$router.push({query:{status:"UNPUBLISHED",type:"cost"}})}).catch(e=>{this.statement=e,setTimeout(()=>{this.statement=""},2e3)})},confirmOrder(){this.showDeletionConfirmationForm=!1,this.showPreloader=!0,this.CONFIRM_ORDER(this.order.id).then(()=>{this.$router.push({query:{status:"COMPLETED"}}),this.statement="Заявка закрыта",setTimeout(()=>{this.statement=""},2e3)}).catch(e=>{this.statement=e,setTimeout(()=>{this.statement=""},2e3)})},updateOrder(){this.showPreloader=!0;const e={name:this.SELECTED_ORDER.name,from_country:this.SELECTED_ORDER.from_country,from_city:this.SELECTED_ORDER.from_city,to_country:"Россия",to_city:this.SELECTED_ORDER.to_city,description:this.SELECTED_ORDER.description,gross:this.SELECTED_ORDER.gross,amount:this.SELECTED_ORDER.amount,cargo_volume:this.SELECTED_ORDER.cargo_volume,additional_services:G(this.SELECTED_ORDER.additional_services),comment_for_service:this.SELECTED_ORDER.comment_for_service,delivery_type:M(this.SELECTED_ORDER.delivery_type)};this.UPDATE_COST_ORDER(e).then(()=>{debugger;this.isOrderUpdated=!1,this.showPreloader=!1,this.showUpdateForm=!0,this.SHOW_DIALOG()}).catch(()=>this.showPreloader=!1)}},watch:{SELECTED_ORDER:{handler(){this.isOrderUpdated=!0},deep:!0},DOCS:{handler(){this.isOrderUpdated=!0},deep:!0}},mounted(){this.SET_HREF_FILE({id:"clear"}),this.GET_IMAGE_FROM_SERVER({orderId:this.$route.params.id,size:"640"}).then(()=>this.images=this.DOCS.images.href).then(()=>{setTimeout(()=>{this.isOrderUpdated=!1},100)})}},w=e=>(L("data-v-c9de180a"),e=e(),k(),e),Be={class:"title"},Ne={class:"applicationInfo"},He={class:"applicationInfo__left"},qe={class:"applicationNum"},Ge=w(()=>s("div",{class:"applicationInfo__title"},"Номер заявки",-1)),Me={class:"applicationInfo__value"},We={class:"applicationDate"},$e=w(()=>s("div",{class:"applicationInfo__title"},"Coздана",-1)),Ve={class:"applicationInfo__value"},Ye={class:"button-box"},je={class:"scroll"},ze={class:"summary__item",id:"country"},Qe={class:"summary__question"},Je={class:"answer-wr"},Ke={class:"summary__answer"},Xe={class:"summary__item",id:"cities"},Ze={class:"summary__question"},xe={class:"answer-wr"},st={class:"summary__answer"},et={class:"summary__item",id:"naming"},tt={class:"summary__question"},ot={class:"answer-wr"},rt={class:"summary__answer"},it={class:"summary__item",id:"product"},nt={class:"summary__question"},at={class:"answer-wr"},_t={class:"summary__answer"},dt=w(()=>s("p",{class:"summary__question"}," Количество, шт ",-1)),ct={class:"answer-wr"},lt={class:"summary__answer"},ut=w(()=>s("p",{class:"summary__question"}," Общий вес БРУТТО, кг ",-1)),mt={class:"answer-wr"},ht={class:"summary__answer"},Et=w(()=>s("p",{class:"summary__question"}," Общий объём груза, м³ ",-1)),pt={class:"answer-wr"},Dt={class:"summary__answer"},yt={class:"summary__item",id:"additional_services"},ft={class:"summary__question"},Ct={class:"answer-wr"},Ot={class:"summary__answer"},Rt={class:"summary__ul"},St={key:0,class:"summary__li"},wt={class:"summary__item",id:"delivery_type"},Tt={class:"summary__question"},vt={class:"answer-wr"},It={class:"summary__answer"},Lt={class:"summary__item",id:"info1"},kt=w(()=>s("p",{class:"summary__question"},"Точный адрес забора груза",-1)),gt={class:"answer-wr"},bt={class:"summary__answer"},Pt={key:0,class:"item__name"},Ft={class:"photo-wr"},Ut={key:1,class:"errorMsg"},At={class:"btn-wr"};function Bt(e,n,y,E,_,o){const l=d("my-color-btn"),c=d("font-awesome-icon"),C=d("application-upload-foto"),f=d("application-form"),T=d("success-publish-order"),U=d("success-update-order"),A=d("deletion-confirmation-form"),v=d("my-dialog"),B=d("unpublish-confirmation-form"),N=d("my-big-spinner");return t(),h("div",{class:"applicatioinSummary",onClick:n[8]||(n[8]=b((...p)=>o.clickHandler&&o.clickHandler(...p),["stop"]))},[s("h2",Be," Заявка "+a(y.order.name),1),s("div",Ne,[s("div",He,[s("div",qe,[Ge,s("div",Me,a(y.order.rand_id),1)]),s("div",We,[$e,s("div",Ve,a(o.dateCreated),1)])]),s("div",Ye,[e.$route.query.status==="UNPUBLISHED"?(t(),i(l,{key:0,class:"cancelBtn",onClick:n[0]||(n[0]=p=>o.showConfirmationForm("delete"))},{default:u(()=>[m(" Удалить заявку ")]),_:1})):r("",!0),o.showPublishBtn?(t(),i(l,{key:1,class:"cancelBtn",onClick:o.publishOrder},{default:u(()=>[m(" Опубликовать ")]),_:1},8,["onClick"])):r("",!0),e.$route.query.status==="PUBLISHED"?(t(),i(l,{key:2,class:"cancelBtn",onClick:n[1]||(n[1]=p=>_.showUnpublishConfirmationForm=!0)},{default:u(()=>[m(" Cнять с публикации ")]),_:1})):r("",!0),e.$route.query.status==="IN_PROGRESS"?(t(),i(l,{key:3,class:"cancelBtn",onClick:n[2]||(n[2]=p=>o.showConfirmationForm("confirm"))},{default:u(()=>[m(" Завершить ")]),_:1})):r("",!0),o.showUpdateBtn?(t(),i(l,{key:4,class:"cancelBtn",onClick:o.updateOrder},{default:u(()=>[m(" Обновить заявку ")]),_:1},8,["onClick"])):r("",!0)])]),_.statement?(t(),h("p",{key:0,class:"successDelete",ref:"deleteMsg"},a(_.statement),513)):r("",!0),s("div",je,[s("section",{class:"summary",onClick:n[4]||(n[4]=b((...p)=>o.edit&&o.edit(...p),["stop"]))},[s("div",ze,[s("p",Qe,a(this.TITLE.country),1),s("div",Je,[s("p",Ke,a(e.SELECTED_ORDER.from_country),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"country"})):r("",!0)])]),s("div",Xe,[s("p",Ze,a(this.TITLE.cities),1),s("div",xe,[s("p",st,a(e.SELECTED_ORDER.to_city),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"cities"})):r("",!0)])]),s("div",et,[s("p",tt,a(this.TITLE.naming),1),s("div",ot,[s("p",rt,a(e.SELECTED_ORDER.name),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"naming"})):r("",!0)])]),s("div",it,[s("p",nt,a(this.TITLE.description),1),s("div",at,[s("p",_t,a(e.SELECTED_ORDER.description),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"description"})):r("",!0)])]),s("div",{class:O(["summary__item",{warning:!e.SELECTED_ORDER.amount}])},[dt,s("div",ct,[s("p",lt,a(e.SELECTED_ORDER.amount),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"amount"})):r("",!0)])],2),s("div",{class:O(["summary__item",{warning:!e.SELECTED_ORDER.gross}])},[ut,s("div",mt,[s("p",ht,a(e.SELECTED_ORDER.gross),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"gross"})):r("",!0)])],2),s("div",{class:O(["summary__item",{warning:!e.SELECTED_ORDER.cargo_volume}])},[Et,s("div",pt,[s("p",Dt,a(e.SELECTED_ORDER.cargo_volume),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"cargo_volume"})):r("",!0)])],2),s("div",yt,[s("p",ft,a(this.TITLE.additional_services),1),s("div",Ct,[s("div",Ot,[s("ul",Rt,[(t(!0),h(W,null,$(e.SELECTED_ORDER.additional_services,p=>(t(),h("li",{class:"summary__li",key:p.id},a(p),1))),128)),e.SELECTED_ORDER.comment_for_service?(t(),h("li",St,a(e.SELECTED_ORDER.comment_for_service),1)):r("",!0)])]),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"additional_services"})):r("",!0)])]),s("div",wt,[s("p",Tt,a(this.TITLE.delivery_type),1),s("div",vt,[s("p",It,a(e.SELECTED_ORDER.delivery_type),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"delivery_type"})):r("",!0)])]),s("div",Lt,[kt,s("div",gt,[s("p",bt,a(e.SELECTED_ORDER.from_city),1),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",id:"info1"})):r("",!0)])]),e.$route.name==="search-product"||e.$route.name==="customer-order"?(t(),h("p",Pt,"Приложенные фото товаров")):r("",!0),s("div",Ft,[R(C,{class:"uploadFoto__box bottom"}),o.showEditBtn?(t(),i(c,{key:0,icon:"pen-to-square",class:"icon-edit",onClick:n[3]||(n[3]=p=>e.SET_CLEAR_IMG())})):r("",!0)]),e.DOCS.images.binaryFile.length>5?(t(),h("p",Ut," Не больше 5 фото ")):r("",!0)])]),s("div",At,[e.$route.query.status==="UNPUBLISHED"?(t(),i(l,{key:0,class:"cancelBtn",onClick:n[5]||(n[5]=p=>o.showConfirmationForm("delete"))},{default:u(()=>[m(" Удалить заявку ")]),_:1})):r("",!0),o.showPublishBtn?(t(),i(l,{key:1,class:"cancelBtn",onClick:o.publishOrder},{default:u(()=>[m(" Опубликовать ")]),_:1},8,["onClick"])):r("",!0),e.$route.query.status==="PUBLISHED"?(t(),i(l,{key:2,class:"cancelBtn",onClick:n[6]||(n[6]=p=>this.showUnpublishConfirmationForm=!0)},{default:u(()=>[m(" Cнять с публикации ")]),_:1})):r("",!0),e.$route.query.status==="IN_PROGRESS"?(t(),i(l,{key:3,class:"cancelBtn",onClick:n[7]||(n[7]=p=>o.showConfirmationForm("confirm"))},{default:u(()=>[m(" Завершить ")]),_:1})):r("",!0),o.showUpdateBtn?(t(),i(l,{key:4,class:"cancelBtn",onClick:o.updateOrder},{default:u(()=>[m(" Обновить заявку ")]),_:1},8,["onClick"])):r("",!0)]),e.DIALOG?(t(),i(v,{key:1,onClose_dialog:o.closeDialog},{default:u(()=>[_.editForm?(t(),i(f,{key:0,onClose_dialog:o.closeDialog},null,8,["onClose_dialog"])):r("",!0),_.showSuccessForm?(t(),i(T,{key:1,onClose_dialog:o.closeDialog},null,8,["onClose_dialog"])):r("",!0),_.showUpdateForm?(t(),i(U,{key:2,onClose_dialog:o.closeDialog},null,8,["onClose_dialog"])):r("",!0),_.showDeletionConfirmationForm?(t(),i(A,{key:3,onDelete_order:o.cancelOrder,onConfirm_order:o.confirmOrder,buttonAction:_.buttonAction},null,8,["onDelete_order","onConfirm_order","buttonAction"])):r("",!0)]),_:1},8,["onClose_dialog"])):r("",!0),_.showUnpublishConfirmationForm?(t(),i(v,{key:2,onClose_dialog:o.closeDialog},{default:u(()=>[_.showUnpublishConfirmationForm?(t(),i(B,{key:0,onUnpublish_order:o.unpublishOrder},null,8,["onUnpublish_order"])):r("",!0)]),_:1},8,["onClose_dialog"])):r("",!0),_.showPreloader?(t(),i(N,{key:3})):r("",!0)])}const Nt=I(Ae,[["render",Bt],["__scopeId","data-v-c9de180a"]]),Ht={name:"customer-order",components:{CustomerOrderDelivery:Ue,SearchProductSummary:ns,CustomerOrderCost:Nt},data(){return{order:"",showPreloaderWindow:!1}},computed:{...P(["SHOW_PDF_VIEWER","DIALOG","DOCS","BTN_ID","SEARCH_PRODUCT_APPL"]),src(){switch(this.BTN_ID){case"invoice":return this.DOCS.order_invoice.url;case"order_packing_list":return this.DOCS.order_packing_list.url}}},methods:{...H(["GET_CUSTOMER_ORDER_BY_ID","GET_PROVIDER_OFFERS"]),...F(["SET_SEARCH_PRODUCT_APPL_ALL","SHOW_DIALOG","SET_CLEAR_NEW_APPLICATION","SET_CLEAR_DOCS"])},mounted(){this.showPreloaderWindow=!0,this.GET_CUSTOMER_ORDER_BY_ID(this.$route.params.id).then(e=>{switch(e.type){case"delivery":this.order=e;break;case"search":this.SET_SEARCH_PRODUCT_APPL_ALL(e);break;case"cost":this.order=e}this.showPreloaderWindow=!1}),this.GET_PROVIDER_OFFERS(this.$route.params.id),rs()},unmounted(){this.SET_CLEAR_NEW_APPLICATION(),this.SET_CLEAR_DOCS()}},qt=e=>(L("data-v-3b50a78e"),e=e(),k(),e),Gt={class:"customerOrder"},Mt=qt(()=>s("h1",{class:"visually-hidden"},"Заявка",-1)),Wt={key:3,class:"preloaderWindow"};function $t(e,n,y,E,_,o){const l=d("customer-order-delivery"),c=d("search-product-summary"),C=d("customer-order-cost"),f=d("my-semipolar-spinner");return t(),h("div",Gt,[Mt,_.order.type==="delivery"?(t(),i(l,{key:0,order:_.order},null,8,["order"])):r("",!0),e.SEARCH_PRODUCT_APPL.type==="search"&&e.$route.query.type==="search"?(t(),i(c,{key:1,class:"customerOrder__search"})):r("",!0),_.order.type==="cost"?(t(),i(C,{key:2,order:_.order},null,8,["order"])):r("",!0),_.showPreloaderWindow?(t(),h("div",Wt,[R(f)])):r("",!0)])}const Xt=I(Ht,[["render",$t],["__scopeId","data-v-3b50a78e"]]);export{Xt as default};