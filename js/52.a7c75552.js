"use strict";(self["webpackChunkjshtcm"]=self["webpackChunkjshtcm"]||[]).push([[52],{4052:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var o=a(3396),i=a(9242),s=a(7139);const l=(0,o._)("h1",{style:{"text-align":"center"}},"请勾选期望预约挂号的时间段",-1),r={key:0,style:{color:"green"}},d={key:1,style:{color:"red"}},n={key:2,style:{color:"red"}},c=(0,o.Uk)("确定 "),p=(0,o.Uk)("停止 "),m={key:0,style:{color:"green"}},u={key:1,style:{color:"red"}},h={key:2,style:{color:"red"}},_={class:"dialog-footer"},g=(0,o.Uk)("返回"),f=(0,o.Uk)("确定"),w={class:"dialog-footer"},y=(0,o.Uk)("返回"),C=(0,o.Uk)("确定"),k=(0,o.Uk)("预约成功！请在10分钟内前往订单页面付款并停止程序运行！若未及时停止程序运行，程序将在10分钟后自动重新预约！ "),D={class:"dialog-footer"},b=(0,o.Uk)("停止程序");function S(e,t,a,S,W,v){const V=(0,o.up)("el-table-column"),N=(0,o.up)("el-table"),P=(0,o.up)("el-collapse-item"),I=(0,o.up)("el-collapse"),T=(0,o.up)("el-col"),x=(0,o.up)("el-row"),U=(0,o.up)("el-button"),j=(0,o.up)("el-divider"),z=(0,o.up)("el-dialog"),H=(0,o.up)("el-radio"),L=(0,o.up)("el-radio-group"),Z=(0,o.up)("el-alert"),J=(0,o.up)("el-progress");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",null,[l,(0,o.Wm)(x,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{style:{"max-width":"400px"}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(W.DocSch,((e,a)=>((0,o.wg)(),(0,o.iD)("div",{key:a},[(0,o.Wm)(I,{modelValue:W.activeName,"onUpdate:modelValue":t[0]||(t[0]=e=>W.activeName=e),accordion:""},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{title:e.schDate},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{data:e.schDateList,onSelectionChange:v.handleSelectionChange},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{type:"selection"}),(0,o.Wm)(V,{label:"时段",prop:"ampmName"}),(0,o.Wm)(V,{label:"医生名称",prop:"docName"}),(0,o.Wm)(V,{label:"挂号费",prop:"fee"}),(0,o.Wm)(V,{label:"状态",prop:"schState"},{default:(0,o.w5)((e=>["0"===e.row.schState?((0,o.wg)(),(0,o.iD)("span",r," 可预约 ")):"2"===e.row.schState?((0,o.wg)(),(0,o.iD)("span",d," 约满 ")):"1"===e.row.schState?((0,o.wg)(),(0,o.iD)("span",n," 停诊 ")):(0,o.kq)("",!0)])),_:1})])),_:2},1032,["data","onSelectionChange"])])),_:2},1032,["title"])])),_:2},1032,["modelValue"])])))),128))])),_:1})])),_:1}),(0,o.Wm)(x,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(U,{size:"large",style:{"margin-top":"20px"},type:"primary",onClick:v.updateSelectedPeriodTimeList},{default:(0,o.w5)((()=>[c])),_:1},8,["onClick"]),[[i.F8,W.runningState]]),(0,o.wy)((0,o.Wm)(U,{size:"large",style:{"margin-top":"20px"},type:"danger",onClick:v.StopTimer},{default:(0,o.w5)((()=>[p])),_:1},8,["onClick"]),[[i.F8,!W.runningState]])])),_:1})]),(0,o._)("div",null,[(0,o.Wm)(x,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{style:{"max-width":"400px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(j)])),_:1})])),_:1})]),(0,o._)("div",null,[(0,o.Wm)(z,{modelValue:W.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=e=>W.dialogVisible=e),title:"运行前确认已选择时段"},{footer:(0,o.w5)((()=>[(0,o._)("span",_,[(0,o.Wm)(U,{onClick:t[1]||(t[1]=e=>W.dialogVisible=!1)},{default:(0,o.w5)((()=>[g])),_:1}),(0,o.Wm)(U,{type:"primary",onClick:v.getPatCardList},{default:(0,o.w5)((()=>[f])),_:1},8,["onClick"])])])),default:(0,o.w5)((()=>[(0,o.Wm)(N,{data:W.selected_period_time_list,"default-sort":{prop:"schDate",order:"ascending"}},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{label:"日期",prop:"schDate",sortable:""}),(0,o.Wm)(V,{label:"时段",prop:"ampmName"}),(0,o.Wm)(V,{label:"科室",prop:"deptName"}),(0,o.Wm)(V,{label:"医生名称",prop:"docName"}),(0,o.Wm)(V,{label:"挂号费",prop:"fee"}),(0,o.Wm)(V,{label:"状态",prop:"schState"},{default:(0,o.w5)((e=>["0"===e.row.schState?((0,o.wg)(),(0,o.iD)("span",m," 可预约 ")):"2"===e.row.schState?((0,o.wg)(),(0,o.iD)("span",u," 约满 ")):"1"===e.row.schState?((0,o.wg)(),(0,o.iD)("span",h," 停诊 ")):(0,o.kq)("",!0)])),_:1})])),_:1},8,["data"])])),_:1},8,["modelValue"])]),(0,o._)("div",null,[(0,o.Wm)(z,{modelValue:W.PatCardDialogVisible,"onUpdate:modelValue":t[5]||(t[5]=e=>W.PatCardDialogVisible=e),title:"请选择就诊卡"},{footer:(0,o.w5)((()=>[(0,o._)("span",w,[(0,o.Wm)(U,{onClick:t[4]||(t[4]=e=>{W.PatCardDialogVisible=!1,W.PatCard=""})},{default:(0,o.w5)((()=>[y])),_:1}),(0,o.Wm)(U,{type:"primary",onClick:v.startTimer},{default:(0,o.w5)((()=>[C])),_:1},8,["onClick"])])])),default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(W.PatCardList,((e,a)=>((0,o.wg)(),(0,o.j4)(L,{key:a,modelValue:W.PatCard,"onUpdate:modelValue":t[3]||(t[3]=e=>W.PatCard=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{label:JSON.stringify(e)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.name),1)])),_:2},1032,["label"])])),_:2},1032,["modelValue"])))),128))])),_:1},8,["modelValue"])]),(0,o._)("div",null,[(0,o.Wm)(z,{modelValue:W.reservation_status,"onUpdate:modelValue":t[6]||(t[6]=e=>W.reservation_status=e),title:"预约成功！"},{footer:(0,o.w5)((()=>[(0,o._)("span",D,[(0,o.Wm)(U,{type:"primary",onClick:v.ClearTimeout},{default:(0,o.w5)((()=>[b])),_:1},8,["onClick"])])])),default:(0,o.w5)((()=>[(0,o.Wm)(Z,{closable:!1,effect:"dark",type:"success"},{default:(0,o.w5)((()=>[k])),_:1})])),_:1},8,["modelValue"])]),(0,o._)("div",null,[(0,o.Wm)(x,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{style:{"max-width":"400px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(J,{format:v.format,indeterminate:W.indeterminate,percentage:W.percentage},null,8,["format","indeterminate","percentage"])])),_:1})])),_:1})])],64)}var W=a(5484),v=a(6458),V=a(5585),N=a(7178),P=a(4870);const I=(0,W.y)();var T={name:"DoctorDetailsView",components:{},data(){return{runningState:!0,DocSch:[],activeName:(0,P.iH)("0"),selected_period_time:{},selected_period_time_list:[],dialogVisible:!1,PatCardDialogVisible:!1,PatCardList:[],PatCard:(0,P.iH)(""),percentage:(0,P.iH)(0),indeterminate:!1,timer:[],reservation_status:!1,next_round:void 0}},methods:{getDocSch(){const e={phsSign:(0,v._)(),phsId:V.D.phsid,"Content-Type":"application/json"},t={args:{docId:I.Doctor.docId,docName:I.Doctor.docName,docTitle:I.Doctor.docTitle,docPhoto:I.Doctor.docPhoto,deptId:I.Doctor.deptId,deptName:I.Doctor.deptName,hosId:I.Doctor.hosId,hosName:I.Doctor.hosName,type:"order",visitingArea:"",clinicalType:1,source:22,sysCode:I.HospitalZone.sysCode},token:I.token};this.axios.post(V.b.get_doc_sch,t,{headers:e}).then((e=>{"0"===e.data.code?this.DocSch=e.data.result.dataList:N.z8.error(e.data.message)}))},getPatCardList(){if(0===this.selected_period_time_list.length)return void N.z8.error("请选择时段");const e={phsSign:(0,v._)(),phsId:V.D.phsid,"Content-Type":"application/json"},t={args:{sysCode:I.HospitalZone.sysCode},token:I.token};this.axios.post(V.b.get_pat_card_list,t,{headers:e}).then((e=>{"0"===e.data.code?(this.PatCardList=e.data.result,this.dialogVisible=!1,this.PatCardDialogVisible=!0):N.z8.error(e.data.message)}))},getNumberSource(e){console.log(e);const t={phsSign:(0,v._)(),phsId:V.D.phsid,"Content-Type":"application/json"},a={args:{sysCode:I.HospitalZone.sysCode,ampm:e.ampm,categor:e.categor,docId:e.docId,deptId:e.deptId,hosId:e.hosId,schDate:e.schDate,schId:e.schId},token:I.token};this.axios.post(V.b.get_number_source,a,{headers:t}).then((t=>{const a=t.data.result;if(console.log(a),a.length>0)return N.z8.info("存在可预约时间，程序将尝试自动预约。"),this.add_reg(a[0],e)}))},add_reg(e,t){const a={phsSign:(0,v._)(),phsId:V.D.phsid,"Content-Type":"application/json"},o={args:{...t,...e,...I.Dept,...I.HospitalZone,...I.Doctor,...JSON.parse(this.PatCard),source:22,resDate:t.schDate,patientId:JSON.parse(this.PatCard).patienId,appointmentNumber:e.disNo},token:I.token};this.axios.post(V.b.add_reg,o,{headers:a}).then((e=>{"0"===e.data.code?(N.z8.success(e.data.message),this.StopTimer(),this.reservation_status=!0,this.next_round=setTimeout((()=>{this.reservation_status=!1,this.startTimer()}),6e5)):N.z8.error(e.data.message)}))},handleSelectionChange(e){console.log(this.activeName),this.selected_period_time[this.activeName]=e},updateSelectedPeriodTimeList(){this.selected_period_time_list=[];for(const e in this.selected_period_time)for(const t in this.selected_period_time[e])this.selected_period_time_list.push(this.selected_period_time[e][t]);this.dialogVisible=!0},startTimer(){if(""!==this.PatCard){this.PatCardDialogVisible=!1,this.indeterminate=!0,this.runningState=!1,this.percentage=100,console.log(this.PatCard),console.log(this.selected_period_time_list);for(const e in this.selected_period_time_list)console.log(this.selected_period_time_list[e]),this.timer.push(setInterval(this.getNumberSource,1e4,this.selected_period_time_list[e]));for(const e in this.selected_period_time_list)this.getNumberSource(this.selected_period_time_list[e])}else N.z8.error("请选择就诊卡")},StopTimer(){this.indeterminate=!1,this.percentage=0,this.runningState=!0;for(const e in this.timer)clearInterval(this.timer[e]);this.timer=[]},ClearTimeout(){this.reservation_status=!1,clearTimeout(this.next_round)},format(){return 100===this.percentage?"持续监测中":"尚未开始监测"}},mounted(){I.token?this.getDocSch():this.$router.push("/login")}},x=a(89);const U=(0,x.Z)(T,[["render",S]]);var j=U}}]);
//# sourceMappingURL=52.a7c75552.js.map