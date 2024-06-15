import{Z as D,b as m,_ as O,r as n,o as t,c as o,d as s,t as _,f as a,v as S,F as f,i as v,e as T,w as I,p as g,h as y,ad as G,m as U,B as N,g as h}from"./index-CJPfqmld.js";const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgB5ZNhDcIwEIVfOwQgoRIGBsgcIAEcDAk4mAGYBCTMQiUgAQG05TUEsizZet1+7v3pNbl+7evdAauTkibu7uGgAo5e42rP6jWWpyGUDqh5e104dGUbtouBTuPC5UlP5RRUbDmKEFN4dAwNAqwrUA3tZwEl0GxgCrr5Je1voSX9JCL6Xvz90wejKm7/RWFLGMyVwnLLmpZ52PAh9t2zPKsoY7BsYAqWBZTAosSTwkq2KVgWkKPXENhMwVaqD3pqZiYBShdoAAAAAElFTkSuQmCC",k={name:"customer-application-for-spec",props:{order:{type:Object}},data(){return{description:this.order.description}},computed:{dateCreated(){return this.order.created_at.split("").slice(0,10).join("")},innerWidth(){return window.innerWidth},additional_services(){return D(this.order.additional_services)}},methods:{...m(["SWITCH_SHOW_DETAILED_APPL","SET_CUSTOMER_ORDER"]),goToOrder(){this.SET_CUSTOMER_ORDER(this.order),this.$router.push(`/provider/application/${this.order.id}?status=${this.order.status}`)}}},l=e=>(g("data-v-43b25604"),e=e(),y(),e),L={class:"customerApplication"},F={class:"header"},B={class:"title-box"},M={class:"title"},V={class:"header__top-right"},W={key:0,class:"hr"},Y={key:1,class:"address"},Q={class:"address__el"},Z=l(()=>s("p",{class:"address__el-up"},"Страна-эспортёр",-1)),q={class:"address__el_down"},H={class:"address__el"},K=l(()=>s("p",{class:"address__el-up"},"Город доставки",-1)),X={class:"address__el_down"},j={key:2,class:"address"},x={class:"address__el_down"},z=l(()=>s("img",{src:b,alt:"маршрут доставки"},null,-1)),J={class:"address__el_down"},$=l(()=>s("hr",{class:"hr"},null,-1)),ee={class:"description"},se={class:"services__ul"},te={key:0,class:"services__li"},re={class:"services__ul"},oe=l(()=>s("p",{class:"title-description"},"Описание товаров",-1)),ie={class:"item-desciption"};function _e(e,c,i,E,d,r){const A=n("my-white-btn");return t(),o("div",L,[s("div",F,[s("div",B,[s("h3",M,_(i.order.name),1),s("div",V," № "+_(i.order.rand_id)+"   Создан "+_(r.dateCreated),1)])]),r.innerWidth>600?(t(),o("hr",W)):a("",!0),r.innerWidth>600?(t(),o("div",Y,[s("div",Q,[Z,s("p",q,_(i.order.from_country),1)]),s("div",H,[K,s("p",X,_(i.order.to_city),1)])])):a("",!0),r.innerWidth<600?(t(),o("div",j,[s("p",x,_(i.order.from_country),1),z,s("p",J,_(i.order.to_city),1)])):a("",!0),$,s("div",ee,[s("ul",se,[S(" Заказчику требуются услуги "),(t(!0),o(f,null,v(r.additional_services,(u,p)=>(t(),o("li",{class:"services__li",key:p},_(u),1))),128)),i.order.comment_for_service?(t(),o("li",te,_(i.order.comment_for_service),1)):a("",!0)]),s("div",re,[oe,s("p",ie,_(d.description),1)])]),T(A,{class:"btn",onClick:r.goToOrder},{default:I(()=>[S("Подробнее")]),_:1},8,["onClick"])])}const de=O(k,[["render",_e],["__scopeId","data-v-43b25604"]]),ce={components:{CustApplForSpec:de,OrderFilterProvider:G},data(){return{orders:[],my_offers:[],filteredOrders:[],filteredByCoutry:[],filteredByServicies:[],showPreloader:!1,scroll:null}},computed:{...U(["PAGE","FILTER_SERVICES","FILTER_COUNTRY","DIALOG","CUSTOMER_ORDERS","INPUT_VALIDATION_ERR"]),orderList(){return this.FILTER_COUNTRY.length?this.orders.filter(e=>this.FILTER_COUNTRY.includes(e.from_country)):this.orders}},methods:{...N(["GET_CUSTOMER_ORDERS","GET_MY_OFFERS","GET_ORDERS_FOR_PROVIDER"]),...m(["SET_PAGE","SHOW_DIALOG","SET_NEW_OFFER_IN_PROGRESS"]),collectOrders(){const e=new Set([...this.filteredByServicies,...this.filteredByCoutry]);return Array.from(e)}},watch:{CUSTOMER_ORDERS:{handler(){this.showPreloader=!0,this.FILTER_SERVICES.length?this.PAGE===0?(this.orders=[],this.orders=this.CUSTOMER_ORDERS):this.orders=[...this.orders,...this.CUSTOMER_ORDERS]:this.orders=[...this.orders,...this.CUSTOMER_ORDERS],this.showPreloader=!1},deep:!0,flush:"post",immediate:!1}},mounted(){this.SET_PAGE(!0),this.showPreloader=!0;debugger;this.GET_CUSTOMER_ORDERS({status:"published",order_type:"delivery",page:this.PAGE,page_size:10}).then(()=>{const e={rootMargin:"0px",threshold:.1},c=E=>{if(E[0].isIntersecting){this.SET_PAGE();const d={status:"published",order_type:"delivery",page:this.PAGE,page_size:10};this.FILTER_SERVICES.length&&this.FILTER_SERVICES.forEach(r=>d[r]=!0),this.GET_CUSTOMER_ORDERS(d).then(r=>{this.orders=[...this.orders,...r.data]})}};new IntersectionObserver(c,e).observe(this.$refs.observer)}).catch(e=>{this.showPreloader=!1,console.log(e)}),this.GET_ORDERS_FOR_PROVIDER({status:"in_progress",page:0}).then(e=>{var c;((c=e[0])==null?void 0:c.offer_id)>localStorage.getItem("lastOffer")?this.SET_NEW_OFFER_IN_PROGRESS(!0):this.SET_NEW_OFFER_IN_PROGRESS(!1)})}},ne=e=>(g("data-v-2c88e14f"),e=e(),y(),e),ae=ne(()=>s("h1",{class:"title"},"Поиск заказов",-1)),le={key:1},he={key:0,class:"msg"},Ee={key:1},Ae={key:0,class:"msg"},ue={ref:"observer",class:"observer"};function pe(e,c,i,E,d,r){const A=n("my-validation-error-msg"),u=n("my-big-spinner"),p=n("cust-appl-for-spec"),C=n("order-filter-provider"),w=n("my-dialog");return t(),o("div",null,[ae,s("div",{class:"fiters",onClick:c[0]||(c[0]=(...R)=>e.SHOW_DIALOG&&e.SHOW_DIALOG(...R))},"Фильтры"),e.INPUT_VALIDATION_ERR?(t(),h(A,{key:0,errorMsg:e.INPUT_VALIDATION_ERR},null,8,["errorMsg"])):(t(),o("div",le,[!d.orders.length&&!d.showPreloader?(t(),o("p",he," Новых заказов пока нет")):(t(),o("div",Ee,[!r.orderList.length&&!d.showPreloader?(t(),o("p",Ae," Заявок с такими фильтрами нет")):a("",!0)]))])),d.showPreloader?(t(),h(u,{key:2})):(t(!0),o(f,{key:3},v(r.orderList,(R,P)=>(t(),h(p,{key:P,order:R},null,8,["order"]))),128)),s("div",ue,null,512),e.DIALOG?(t(),h(w,{key:4},{default:I(()=>[T(C)]),_:1})):a("",!0)])}const Se=O(ce,[["render",pe],["__scopeId","data-v-2c88e14f"]]);export{Se as default};