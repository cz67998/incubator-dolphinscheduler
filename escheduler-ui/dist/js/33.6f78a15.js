webpackJsonp([33],{1017:function(e,t,s){"use strict";t.__esModule=!0;var n=l(s(30)),a=l(s(36)),i=l(s(92)),o=l(s(222)),r=l(s(223)),u=l(s(224));function l(e){return e&&e.__esModule?e:{default:e}}t.default={name:"create-user",data:function(){return{store:i.default,router:o.default,queueList:[],userName:"",userPassword:"",tenantId:{},queueName:{},email:"",phone:"",tenantList:[],isADMIN:"ADMIN_USER"===i.default.state.user.userInfo.userType&&"account"!==o.default.history.current.name}},props:{item:Object},methods:{_ok:function(){var e=this;if(this._verification()){if(this.item&&this.item.groupName===this.groupName)return void this._submit();this.store.dispatch("security/verifyName",{type:"user",userName:this.userName}).then(function(t){e._submit()}).catch(function(t){e.$message.error(t.msg||"")})}},_verification:function(){return this.userName?this.userPassword||this.item?this.email?/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(this.email)?!(this.phone&&!/^1(3|4|5|6|7|8)\d{9}$/.test(this.phone))||(this.$message.warning(""+a.default.$t("Please enter the correct mobile phone format")),!1):(this.$message.warning(""+a.default.$t("Please enter the correct email format")),!1):(this.$message.warning(""+a.default.$t("Please enter email")),!1):(this.$message.warning(""+a.default.$t("Please enter your password")),!1):(this.$message.warning(""+a.default.$t("Please enter user name")),!1)},_getQueueList:function(){var e=this;return new Promise(function(t,s){e.store.dispatch("security/getQueueList").then(function(s){e.queueList=n.default.map(s,function(e){return{id:e.id,code:e.queueName}}),e.$nextTick(function(){e.queueName=e.queueList[0]}),t()})})},_getTenantList:function(){var e=this;return new Promise(function(t,s){e.store.dispatch("security/getTenantList").then(function(s){e.tenantList=n.default.map(s,function(e){return{id:e.id,code:e.tenantName}}),e.$nextTick(function(){e.tenantId=e.tenantList[0]}),t()})})},_submit:function(){var e=this;this.$refs.popup.spinnerLoading=!0;var t={userName:this.userName,userPassword:this.userPassword,tenantId:this.tenantId.id,email:this.email,queue:this.queueName.code,phone:this.phone};this.item&&(t.id=this.item.id),this.store.dispatch("security/"+(this.item?"updateUser":"createUser"),t).then(function(s){setTimeout(function(){e.$refs.popup.spinnerLoading=!1},800),e.$emit("onUpdate",t),e.$message.success(s.msg)}).catch(function(t){e.$message.error(t.msg||""),e.$refs.popup.spinnerLoading=!1})}},watch:{},created:function(){var e=this;this.isADMIN?Promise.all([this._getQueueList(),this._getTenantList()]).then(function(){e.item&&(e.userName=e.item.userName,e.userPassword="",e.email=e.item.email,e.phone=e.item.phone,e.tenantId=n.default.find(e.tenantList,["id",e.item.tenantId]),e.$nextTick(function(){e.queueName=n.default.find(e.queueList,["code",e.item.queue])}))}):this.item&&(this.userName=this.item.userName,this.userPassword="",this.email=this.item.email,this.phone=this.item.phone,this.tenantId.id=this.item.tenantId,this.queueName={queue:this.item.queue})},mounted:function(){},components:{mPopup:r.default,mListBoxF:u.default}}},1062:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(1017),a=s.n(n);for(var i in n)"default"!==i&&function(e){s.d(t,e,function(){return n[e]})}(i);var o=s(1063),r=s(29)(a.a,o.a,!1,null,null,null);t.default=r.exports},1063:function(e,t,s){"use strict";var n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("m-popup",{ref:"popup",attrs:{"ok-text":e.item?e.$t("Edit"):e.$t("Submit"),nameText:e.item?e.$t("Edit User"):e.$t("Create User")},on:{ok:e._ok}},[s("template",{slot:"content"},[s("div",{staticClass:"create-user-model"},[s("m-list-box-f",[s("template",{slot:"name"},[s("b",[e._v("*")]),e._v(e._s(e.$t("User Name")))]),e._v(" "),s("template",{slot:"content"},[s("x-input",{attrs:{type:"input",placeholder:e.$t("Please enter user name")},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1)],2),e._v(" "),"account"!==e.router.history.current.name?s("m-list-box-f",[s("template",{slot:"name"},[s("b",[e._v("*")]),e._v(e._s(e.$t("Password")))]),e._v(" "),s("template",{slot:"content"},[s("x-input",{attrs:{type:"input",placeholder:e.$t("Please enter your password")},model:{value:e.userPassword,callback:function(t){e.userPassword=t},expression:"userPassword"}})],1)],2):e._e(),e._v(" "),e.isADMIN?s("m-list-box-f",[s("template",{slot:"name"},[s("b",[e._v("*")]),e._v(e._s(e.$t("Tenant")))]),e._v(" "),s("template",{slot:"content"},[s("x-select",{model:{value:e.tenantId,callback:function(t){e.tenantId=t},expression:"tenantId"}},e._l(e.tenantList,function(e){return s("x-option",{key:e.id,attrs:{value:e,label:e.code}})}),1)],1)],2):e._e(),e._v(" "),e.isADMIN?s("m-list-box-f",[s("template",{slot:"name"},[s("b",[e._v("*")]),e._v(e._s(e.$t("Queue")))]),e._v(" "),s("template",{slot:"content"},[s("x-select",{model:{value:e.queueName,callback:function(t){e.queueName=t},expression:"queueName"}},e._l(e.queueList,function(e){return s("x-option",{key:e.id,attrs:{value:e,label:e.code}})}),1)],1)],2):e._e(),e._v(" "),s("m-list-box-f",[s("template",{slot:"name"},[s("b",[e._v("*")]),e._v(e._s(e.$t("Email")))]),e._v(" "),s("template",{slot:"content"},[s("x-input",{attrs:{type:"input",placeholder:e.$t("Please enter email")},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],2),e._v(" "),s("m-list-box-f",[s("template",{slot:"name"},[e._v(e._s(e.$t("Phone")))]),e._v(" "),s("template",{slot:"content"},[s("x-input",{attrs:{type:"input",placeholder:e.$t("Please enter phone number")},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1)],2)],1)])],2)},staticRenderFns:[]};t.a=n},1141:function(e,t,s){"use strict";t.__esModule=!0;var n=i(s(1280)),a=i(s(697));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"account-index",components:{mListConstruction:a.default,mInfo:n.default}}},1142:function(e,t,s){"use strict";t.__esModule=!0;var n=s(123),a=o(s(224)),i=o(s(1062));function o(e){return e&&e.__esModule?e:{default:e}}t.default={name:"user-info",data:function(){return{}},props:{},methods:Object.assign({},(0,n.mapMutations)("user",["setUserInfo"]),{_edit:function(){var e=this.userInfo,t=this,s=this.$modal.dialog({closable:!1,showMask:!0,escClose:!0,className:"v-modal-custom",transitionName:"opacityp",render:function(n){return n(i.default,{on:{onUpdate:function(e){t.setUserInfo({userName:e.userName,userPassword:e.userPassword,email:e.email,phone:e.phone}),s.remove()},close:function(){}},props:{item:e}})}})}}),watch:{},created:function(){},mounted:function(){},computed:Object.assign({},(0,n.mapState)("user",["userInfo"])),components:{mListBoxF:a.default}}},1280:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(1142),a=s.n(n);for(var i in n)"default"!==i&&function(e){s.d(t,e,function(){return n[e]})}(i);var o=s(1283);var r=function(e){s(1281)},u=s(29)(a.a,o.a,!1,r,null,null);t.default=u.exports},1281:function(e,t,s){var n=s(1282);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s(35)("4c6a8c96",n,!0,{})},1282:function(e,t,s){(e.exports=s(34)(!1)).push([e.i,".user-info-model{padding-top:30px}.user-info-model .list-box-f .text{width:200px;font-size:14px;color:#888}.user-info-model .list-box-f .cont{width:calc(100% - 210px);margin-left:10px}.user-info-model .list-box-f .cont .sp1{font-size:14px;color:#333;display:inline-block;padding-top:6px}",""])},1283:function(e,t,s){"use strict";var n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-info-model"},[s("m-list-box-f",[s("template",{slot:"name"},[e._v(e._s(e.$t("User Name")))]),e._v(" "),s("template",{slot:"content"},[s("span",{staticClass:"sp1"},[e._v(e._s(e.userInfo.userName))])])],2),e._v(" "),s("m-list-box-f",[s("template",{slot:"name"},[e._v(e._s(e.$t("Email")))]),e._v(" "),s("template",{slot:"content"},[s("span",{staticClass:"sp1"},[e._v(e._s(e.userInfo.email))])])],2),e._v(" "),s("m-list-box-f",[s("template",{slot:"name"},[e._v(e._s(e.$t("Phone")))]),e._v(" "),s("template",{slot:"content"},[s("span",{staticClass:"sp1"},[e._v(e._s(e.userInfo.phone))])])],2),e._v(" "),s("m-list-box-f",[s("template",{slot:"name"},[e._v(e._s(e.$t("Permission")))]),e._v(" "),s("template",{slot:"content"},[s("span",{staticClass:"sp1"},[e._v(e._s("GENERAL_USER"===e.userInfo.userType?""+e.$t("Ordinary users"):""+e.$t("Administrator")))])])],2),e._v(" "),s("m-list-box-f",{directives:[{name:"ps",rawName:"v-ps",value:["GENERAL_USER"],expression:"['GENERAL_USER']"}]},[s("template",{slot:"name"},[e._v(e._s(e.$t("Tenant")))]),e._v(" "),s("template",{slot:"content"},[s("span",{staticClass:"sp1"},[e._v(e._s(e.userInfo.tenantName))])])],2),e._v(" "),s("m-list-box-f",{directives:[{name:"ps",rawName:"v-ps",value:["GENERAL_USER"],expression:"['GENERAL_USER']"}]},[s("template",{slot:"name"},[e._v(e._s(e.$t("Queue")))]),e._v(" "),s("template",{slot:"content"},[s("span",{staticClass:"sp1"},[e._v(e._s(e.userInfo.queueName))])])],2),e._v(" "),s("m-list-box-f",[s("template",{slot:"name"},[e._v(e._s(e.$t("Create Time")))]),e._v(" "),s("template",{slot:"content"},[s("span",{staticClass:"sp1"},[e._v(e._s(e._f("formatDate")(e.userInfo.createTime)))])])],2),e._v(" "),s("m-list-box-f",[s("template",{slot:"name"},[e._v(e._s(e.$t("Update Time")))]),e._v(" "),s("template",{slot:"content"},[s("span",{staticClass:"sp1"},[e._v(e._s(e._f("formatDate")(e.userInfo.updateTime)))])])],2),e._v(" "),s("m-list-box-f",[s("template",{slot:"name"},[e._v(" ")]),e._v(" "),s("template",{slot:"content"},[s("x-button",{attrs:{type:"primary",shape:"circle"},on:{click:function(t){return e._edit()}}},[e._v(e._s(e.$t("Edit")))])],1)],2)],1)},staticRenderFns:[]};t.a=n},1284:function(e,t,s){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("m-list-construction",{attrs:{title:this.$t("User Information")}},[t("template",{slot:"content"},[t("m-info")],1)],2)},staticRenderFns:[]};t.a=n},644:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(1141),a=s.n(n);for(var i in n)"default"!==i&&function(e){s.d(t,e,function(){return n[e]})}(i);var o=s(1284),r=s(29)(a.a,o.a,!1,null,null,null);t.default=r.exports},663:function(e,t,s){"use strict";t.__esModule=!0,t.default={name:"list-construction",data:function(){return{}},props:{title:String}}},697:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(663),a=s.n(n);for(var i in n)"default"!==i&&function(e){s.d(t,e,function(){return n[e]})}(i);var o=s(700);var r=function(e){s(698)},u=s(29)(a.a,o.a,!1,r,null,null);t.default=u.exports},698:function(e,t,s){var n=s(699);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s(35)("70439c42",n,!0,{})},699:function(e,t,s){(e.exports=s(34)(!1)).push([e.i,"",""])},700:function(e,t,s){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home-main list-construction-model"},[t("div",{staticClass:"content-title"},[t("span",[this._v(this._s(this.title))])]),this._v(" "),t("div",{staticClass:"conditions-box"},[this._t("conditions")],2),this._v(" "),t("div",{staticClass:"list-box"},[this._t("content")],2)])},staticRenderFns:[]};t.a=n}});
//# sourceMappingURL=33.6f78a15.js.map