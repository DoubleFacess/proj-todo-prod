(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{73:function(t,e,n){"use strict";var r=n(72),o=n(80),c=n.n(o),l=n(87),d=n.n(l),f=n(88),h=n.n(f),m=n(66),v=n(81),y=n(65);c.a.extend(d.a),c.a.extend(h.a);var $={components:{TaskForm:v.a,LoadingButton:y.a},mixins:[r.mixin],props:{task:{type:Object,required:!0}},data:function(){return{isToggleLoading:!1,isRemoveLoading:!1,isUpdateLoading:!1,editTask:!1,error:null,form:this.setForm(this.task)}},computed:{isDisabled:function(){return""===this.form.title||this.isUpdateLoading},isNotLoading:function(){return!(this.isToggleLoading||this.isRemoveLoading||this.isUpdateLoading)},fromNow:function(){return c()(this.task.due_at).fromNow()},toDate:function(){return c()(this.task.due_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}},watch:{task:function(){this.form=this.setForm(this.task)}},created:function(){window.addEventListener("storage",console.log("test"))},methods:{toggleCompleted:function(){var t=this;if(this.isToggleLoading)return!1;this.isToggleLoading=!0,this.error=null,Task.$update({params:{id:this.task.id},data:{is_completed:!this.task.is_completed}}).then((function(){t.isToggleLoading=!1})).catch((function(e){t.error=e.response.data,t.isToggleLoading=!1}))},updateTask:function(){if(this.$root.$emit("my-event"),this.isDisabled)return!1;this.isUpdateLoading=!0,this.error=null},cancelEdit:function(){this.editTask=!1,this.error=null,this.form.title=this.task.title,this.form.due_at=this.task.due_at},clearDueAt:function(){this.form.due_at=null},removeTask:function(){var t=this;if(this.isRemoveLoading||!window.confirm("Are you sure ? Your task will be deleted forever."))return!1;this.isRemoveLoading=!0,this.error=null,Task.$delete({params:{id:this.task.id}}).catch((function(e){t.error=e.response.data}))},setForm:function(t){return new m.a({title:this.task.title,due_at:this.task.due_at})},handleClickAway:function(){this.error=null,this.editTask&&this.isNotLoading&&this.cancelEdit()}}},k=n(8),component=Object(k.a)($,(function(){var t=this,e=t._self._c;return e("div",[e("li",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.handleClickAway,expression:"handleClickAway"}],staticClass:"my-4"},[t.editTask?e("task-form",{ref:"taskForm",attrs:{form:t.form,error:t.error}},[e("div",{staticClass:"flex items-center justify-start mt-2"},[e("div",{staticClass:"flex items-center"},[e("loading-button",{staticClass:"btn-indigo text-sm",class:{"opacity-50 cursor-not-allowed":t.isDisabled},attrs:{"is-loading":t.isUpdateLoading,icon:"check"},nativeOn:{click:function(e){return t.updateTask.apply(null,arguments)}}},[t._v("Save\n          ")]),t._v(" "),e("loading-button",{staticClass:"btn-indigo-light text-sm mx-2",class:{"opacity-50 cursor-not-allowed":t.isDisabled},attrs:{"is-loading":t.isUpdateLoading,icon:"edit"},nativeOn:{click:function(e){return t.updateTask.apply(null,arguments)}}},[t._v("Edit\n          ")]),t._v(" "),e("span",{staticClass:"ml-4 mx-4 text-gray-800 text-sm cursor-pointer hover:underline",on:{click:t.cancelEdit}},[t._v("\n            Cancel\n          ")])],1),t._v(" "),e("loading-button",{staticClass:"mx-4 text-gray-800 text-sm ml-auto",class:[t.isRemoveLoading?"opacity-50 cursor-not-allowed":"cursor-pointer hover:underline hover:text-red-500"],attrs:{"is-loading":t.isRemoveLoading,type:"button",icon:"trash"},nativeOn:{click:function(e){return t.removeTask.apply(null,arguments)}}},[t._v("\n          Delete\n        ")])],1)]):e("div",{staticClass:"bg-white leading-none rounded-lg shadow overflow-hidden p-3 mb-4"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"flex-grow"},[e("p",{staticClass:"font-semibold text-lg mx-2 text-left flex-auto cursor-pointer",class:{"line-through text-gray-500":t.task.is_completed},on:{click:function(e){t.editTask=!0}}},[t._v("\n            "+t._s(t.task.ticket)+"-"+t._s(t.task.descr)+"-"+t._s(t.task.notes)+" \n          ")]),t._v(" "),t.task.due_at?e("span",{staticClass:"flex flex-shrink-0 mr-2 mt-2 px-2 py-1 text-xs cursor-pointer",class:[t.task.is_completed?"line-through text-gray-500":"text-gray-600"],attrs:{title:t.toDate},on:{click:function(e){t.editTask=!0}}},[e("fa",{staticClass:"mr-1",attrs:{icon:["far","clock"]}}),t._v(" "+t._s(t.fromNow)+"\n          ")],1):t._e()]),t._v(" "),e("div",{staticClass:"rounded-full bg-white h-6 w-6 cursor-pointer flex items-center justify-center",class:[t.task.is_completed?"bg-indigo-500":"border-2",{"cursor-not-allowed":t.isToggleLoading}],on:{click:t.toggleCompleted}},[t.isToggleLoading?e("fa",{class:[t.task.is_completed?"text-white":"text-indigo-500"],attrs:{icon:"spinner",spin:""}}):e("fa",{staticClass:"text-white",class:{"hover:text-indigo-500":!t.task.is_completed},attrs:{icon:"check"}})],1)])])],1)])}),[],!1,null,null,null);e.a=component.exports},74:function(t,e,n){"use strict";var r=n(80),o=n.n(r),c=n(72),l=n(66),d=n(81),f=n(65),h={components:{TaskForm:d.a,LoadingButton:f.a},mixins:[c.mixin],data:function(){return{isLoading:!1,isShown:!1,error:null,form:new l.a({title:"",due_at:null})}},computed:{isDisabled:function(){return""===this.form.title||this.isLoading}},methods:{addTask:function(){var t=this;if(this.isDisabled)return!1;this.isLoading=!0,this.error=null,Task.$create({data:{title:this.form.title,due_at:o()(this.form.due_at).second(0)}}).then((function(){t.form.reset(),t.$refs.taskForm.$refs.task.focus(),t.isLoading=!1})).catch((function(e){t.error=e.response.data,t.isLoading=!1}))},clearDueAt:function(){this.form.due_at=null},cancel:function(){this.isShown=!1,this.form.reset()},handleClickAway:function(){this.isDisabled&&this.cancel()}}},m=n(8),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.handleClickAway,expression:"handleClickAway"}],staticClass:"my-4"},[e("transition",{attrs:{name:"fade-out-down",mode:"out-in"}},[t.isShown?e("task-form",{ref:"taskForm",staticClass:"animated fastest",attrs:{form:t.form,error:t.error},on:{submit:t.addTask}},[e("div",{staticClass:"flex items-center my-4"},[e("loading-button",{staticClass:"btn-indigo text-sm",class:{"opacity-50 cursor-not-allowed":t.isDisabled},attrs:{"is-loading":t.isLoading,disabled:t.isDisabled,icon:"plus"}},[t._v("\n          Add\n        ")]),t._v(" "),e("span",{staticClass:"ml-4 text-gray-800 text-sm cursor-pointer hover:underline",on:{click:t.cancel}},[t._v("\n          Cancel\n        ")])],1)]):e("button",{staticClass:"animated fastest hover:underline text-gray-800 text-sm cursor-pointer",on:{click:function(e){t.isShown=!0}}},[e("fa",{staticClass:"mr-1",attrs:{icon:"plus"}}),t._v("\n      Add task\n    ")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},80:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+d(r,2,"0")+":"+d(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:a,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",v={};v[m]=h;var y=function(t){return t instanceof w},$=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},g=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},k=f;k.l=$,k.i=y,k.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var w=function(){function d(t){this.$L=this.$L||$(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(k.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return k},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return g(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<g(t)},f.$g=function(t,e,n){return k.u(t)?this[e]:this.set(n,t)},f.year=function(t){return this.$g(t,"$y",a)},f.month=function(t){return this.$g(t,"$M",u)},f.day=function(t){return this.$g(t,"$W",i)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",r)},f.minute=function(t){return this.$g(t,"$m",n)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var c=this,l=!!k.u(o)||o,d=k.p(t),f=function(t,e){var n=k.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf(i)},h=function(t,e){return k.w(c.toDate()[t].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,v=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case a:return l?f(1,0):f(31,11);case u:return l?f(1,v):f(0,v+1);case s:var g=this.$locale().weekStart||0,w=(m<g?m+7:m)-g;return f(l?y-w:y+(6-w),v);case i:case"date":return h($+"Hours",0);case r:return h($+"Minutes",1);case n:return h($+"Seconds",2);case e:return h($+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var c,l=k.p(s),d="set"+(this.$u?"UTC":""),f=(c={},c.day=d+"Date",c.date=d+"Date",c[u]=d+"Month",c[a]=d+"FullYear",c[r]=d+"Hours",c[n]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[l],h=l===i?this.$D+(o-this.$W):o;if(l===u||l===a){var m=this.clone().set("date",1);m.$d[f](h),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else f&&this.$d[f](h);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[k.p(t)]()},f.add=function(t,o){var c,l=this;t=Number(t);var d=k.p(o),f=function(e){var n=g(l);return k.w(n.date(n.date()+Math.round(e*t)),l)};if(d===u)return this.set(u,this.$M+t);if(d===a)return this.set(a,this.$y+t);if(d===i)return f(1);if(d===s)return f(7);var h=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,m=this.$d.getTime()+t*h;return k.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=k.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,c=i.months,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},f=function(t){return k.s(s%12||12,t,"0")},h=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:k.s(o+1,2,"0"),MMM:d(i.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,a,2),ddd:d(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:k.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:k.s(u,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||m[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,l){var d,f=k.p(c),h=g(t),m=6e4*(h.utcOffset()-this.utcOffset()),v=this-h,y=k.m(this,h);return y=(d={},d[a]=y/12,d[u]=y,d[o]=y/3,d[s]=(v-m)/6048e5,d.day=(v-m)/864e5,d[r]=v/36e5,d[n]=v/6e4,d[e]=v/1e3,d)[f]||v,l?y:k.a(y)},f.daysInMonth=function(){return this.endOf(u).$D},f.$locale=function(){return v[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return k.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}();return g.prototype=w.prototype,g.extend=function(t,e){return t(e,w,g),g},g.locale=$,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=v[m],g.Ls=v,g}()},81:function(t,e,n){"use strict";n(89);var r={props:{error:{type:Object,default:null}}},o=n(8),c={components:{FormError:Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.error?e("div",{staticClass:"bg-red-100 border-t-4 border-red-500 shadow-md text-red-600 px-6 py-3 rounded relative mb-3",attrs:{role:"alert"}},[e("div",{staticClass:"flex"},[e("fa",{staticClass:"mr-2",attrs:{icon:"exclamation-triangle"}}),t._v(" "),e("div",{staticClass:"flex-grow"},[e("strong",{staticClass:"font-bold"},[t._v("\n        Whoops !\n      ")]),t._v(" "),e("span",{staticClass:"block sm:inline"},[t._v("\n        "+t._s(t.error.message)+"\n      ")])]),t._v(" "),e("span",{staticClass:"absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer",on:{click:function(e){e.preventDefault(),t.error=null}}},[e("fa",{attrs:{icon:"times"}})],1)],1)]):t._e()}),[],!1,null,null,null).exports},props:{form:{type:null,required:!0},error:{type:Object,default:null}},methods:{clearDueAt:function(){this.form.due_at=null},cancel:function(){this.form.reset()}}},l=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-4"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.$emit("submit")}}},[e("form-error",{attrs:{error:t.error}}),t._v(" "),e("div",{staticClass:"p-3 mb-4 appearance-none bg-white rounded-lg flex flex-col shadow"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"},{name:"focus",rawName:"v-focus"}],ref:"task",staticClass:"w-full mb-2 pt-1 pb-2 px-2 focus:outline-none font-semibold border-b",attrs:{placeholder:"What needs to be done?"},domProps:{value:t.form.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}}),t._v(" "),e("div",{staticClass:"flex items-center text-xs"},[e("fa",{staticClass:"mr-1 text-gray-600",attrs:{icon:["far","clock"]}}),t._v(" "),e("datetime",{attrs:{type:"datetime",placeholder:"Pianificato il","minute-step":5,"input-class":"text-gray-600"},model:{value:t.form.due_at,callback:function(e){t.$set(t.form,"due_at",e)},expression:"form.due_at"}}),t._v(" "),t.form.due_at?e("span",{staticClass:"flex-none rounded-full bg-gray-500 hover:bg-red-500 h-6 w-6 cursor-pointer flex items-center justify-center shadow",on:{click:t.clearDueAt}},[e("fa",{staticClass:"text-white",attrs:{icon:"times"}})],1):t._e()],1)]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.a=l.exports},87:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=o;var c=function(e,r,c,i){for(var u,a,s,l=c.$locale().relativeTime||o,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,h=0;h<f;h+=1){var m=d[h];m.d&&(u=i?n(e).diff(c,m.d,!0):c.diff(e,m.d,!0));var v=(t.rounding||Math.round)(Math.abs(u));if(s=u>0,v<=m.r||!m.r){v<=1&&h>0&&(m=d[h-1]);var p=l[m.l];a="string"==typeof p?p.replace("%d",v):p(v,r,m.l,s);break}}return r?a:(s?l.future:l.past).replace("%s",a)};r.to=function(t,e){return c(t,e,this,!0)},r.from=function(t,e){return c(t,e,this)};var i=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(i(this),t)},r.fromNow=function(t){return this.from(i(this),t)}}}()},88:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){var r=e.prototype,o=r.format;n.en.ordinal=function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"},r.format=function(t){var e=this,n=this.$locale(),r=this.$utils(),a=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|gggg|Do|X|x|k{1,2}|S/g,(function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return n.ordinal(e.$D);case"gggg":return e.weekYear();case"wo":return n.ordinal(e.week(),"W");case"w":case"ww":return r.s(e.week(),"w"===t?1:2,"0");case"k":case"kk":return r.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();default:return t}}));return o.bind(this)(a)}}}()},89:function(t,e,n){}}]);