(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{131:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return templateSourceCode}));var _home_travis_build_randolphtellis_vue3_transitions_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(201),templateSourceCode=(__webpack_require__(22),__webpack_require__(50),__webpack_require__(46),__webpack_require__(18),__webpack_require__(11),function templateSourceCode(templateSource,args,replacing){void 0===replacing&&(replacing='v-bind="$props"');return templateSource.replace(replacing,Object.keys(args).map((function(key){return function propToSource(key,val){switch(Object(_home_travis_build_randolphtellis_vue3_transitions_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.a)(val)){case"object":return":"+key+'="'+JSON.stringify(val)+'"\n';case"boolean":return val?key+"\n":"";case"string":return key+'="'+val+'"\n';default:return":"+key+'="'+val+'"\n'}}(key,args[key])})).join(" "))})},202:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue_esm_bundler=__webpack_require__(9);var esm_typeof=__webpack_require__(201),tslib_es6=__webpack_require__(64),entry_exit_props_props=(__webpack_require__(74),__webpack_require__(42),{duration:{type:[Number,Object],default:500},entry:{type:String,default:"center",validator:function validator(value){return["center","left","right","top","bottom"].includes(value)}},exit:{type:String,default:"center",validator:function validator(value){return["center","left","right","top","bottom"].includes(value)}},appear:{type:Boolean,required:!1},mode:{type:String,required:!1,validator:function validator(value){return["out-in","in-out"].includes(value)}},group:{type:Boolean,required:!1},tag:{type:String,required:!1},persisted:{type:Boolean,required:!1}}),base_transition_componentvue_type_script_lang_ts=Object(vue_esm_bundler.defineComponent)({name:"base-transition-component",props:Object(tslib_es6.a)(Object(tslib_es6.a)({},entry_exit_props_props),{name:{type:String,default:null,required:!0}}),setup:function setup(props,_a){var emit=_a.emit,baseProps=Object(vue_esm_bundler.computed)((function(){props.entry;var withoutEntry=Object(tslib_es6.b)(props,["entry"]),withoutEntryExit=(withoutEntry.exit,Object(tslib_es6.b)(withoutEntry,["exit"]));withoutEntryExit.group;return Object(tslib_es6.b)(withoutEntryExit,["group"])})),defaultDuration=Object(vue_esm_bundler.ref)(500),durationObj=Object(vue_esm_bundler.computed)((function(){var _a,_b,enter=props.duration||defaultDuration.value,leave=props.duration||defaultDuration.value;return"object"===Object(esm_typeof.a)(props.duration)&&(enter=(null===(_a=props.duration)||void 0===_a?void 0:_a.enter)||defaultDuration.value,leave=(null===(_b=props.duration)||void 0===_b?void 0:_b.leave)||defaultDuration.value),{enter:enter,leave:leave}}));return{baseProps:baseProps,insertDuration:function insertDuration(el){var _a,_b,_c;if(el){if(props.group)for(var slotItems=el.children,i=0;i<slotItems.length;i++)(null===(_a=slotItems[i])||void 0===_a?void 0:_a.style)&&(slotItems[i].style.transitionDuration=(null===(_b=durationObj.value)||void 0===_b?void 0:_b.enter)+"ms");else el.style&&(el.style.transitionDuration=(null===(_c=durationObj.value)||void 0===_c?void 0:_c.enter)+"ms");emit("onEnter",el)}},insertLeaveDuration:function insertLeaveDuration(el){var _a,_b,_c;if(el){if(props.group)for(var slotItems=el.children,i=0;i<slotItems.length;i++)(null===(_a=slotItems[i])||void 0===_a?void 0:_a.style)&&(slotItems[i].style.transitionDuration=(null===(_b=durationObj.value)||void 0===_b?void 0:_b.leave)+"ms");else el.style&&(el.style.transitionDuration=(null===(_c=durationObj.value)||void 0===_c?void 0:_c.leave)+"ms");emit("onLeave",el)}}}}});base_transition_componentvue_type_script_lang_ts.render=function render(_ctx,_cache,$props,$setup,$data,$options){return _ctx.group?(Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)(vue_esm_bundler.TransitionGroup,Object(vue_esm_bundler.mergeProps)({key:0},_ctx.baseProps,{onEnter:_cache[1]||(_cache[1]=$event=>_ctx.insertDuration(_ctx.$el)),onBeforeLeave:_cache[2]||(_cache[2]=$event=>_ctx.insertLeaveDuration(_ctx.$el)),name:_ctx.name}),{default:Object(vue_esm_bundler.withCtx)(()=>[Object(vue_esm_bundler.renderSlot)(_ctx.$slots,"default")]),_:3},16,["name"])):(Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)(vue_esm_bundler.Transition,Object(vue_esm_bundler.mergeProps)({key:1},_ctx.baseProps,{onEnter:_cache[3]||(_cache[3]=$event=>_ctx.insertDuration(_ctx.$el)),onBeforeLeave:_cache[4]||(_cache[4]=$event=>_ctx.insertLeaveDuration(_ctx.$el)),name:_ctx.name}),{default:Object(vue_esm_bundler.withCtx)(()=>[Object(vue_esm_bundler.renderSlot)(_ctx.$slots,"default")]),_:3},16,["name"]))};const __vuedocgen_export_0=base_transition_componentvue_type_script_lang_ts;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"base-transition-component",exportName:"default",description:"",tags:{},props:[{name:"name",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"null"}}],slots:[{name:"default",description:"The default slot"}]}},416:function(module,exports,__webpack_require__){var content=__webpack_require__(809);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(278).default)("5b03e66a",content,!0,{})},417:function(module,exports,__webpack_require__){var content=__webpack_require__(811);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(278).default)("bcf88e78",content,!0,{})},418:function(module,exports,__webpack_require__){var content=__webpack_require__(813);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(278).default)("cdf2a60e",content,!0,{})},463:function(module,exports,__webpack_require__){__webpack_require__(464),__webpack_require__(620),__webpack_require__(621),__webpack_require__(814),__webpack_require__(818),__webpack_require__(820),__webpack_require__(821),__webpack_require__(819),__webpack_require__(815),__webpack_require__(822),__webpack_require__(823),module.exports=__webpack_require__(806)},531:function(module,exports){},621:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(186)},806:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(186).configure)([__webpack_require__(807),__webpack_require__(808)],module,!1)}).call(this,__webpack_require__(180)(module))},807:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=807},808:function(module,exports,__webpack_require__){var map={"./stories/fade-in-out/fade-in-out.stories.ts":816,"./stories/slide-in-out/slide-in-out.stories.ts":817};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=808},809:function(module,exports,__webpack_require__){(exports=__webpack_require__(277)(!1)).push([module.i,".group-move-enter{transition:transform 800ms ease}.group-move-leave{transition:transform 800ms ease;position:absolute}.single-wrap{padding-top:25px;height:100px;width:100px}.single-item{padding:5px}.group-wrap{padding:20px 0}.group-item{display:inline-block;margin:10px}.card{height:100px;width:100px;border-radius:8px;background:linear-gradient(135deg, #012d15 0%, #2f8252 100%)}.story-buttons{display:inline-block;padding:0.7em 1.4em;margin-right:10px;border-radius:4px;border:1px solid transparent;box-sizing:border-box;text-decoration:none;cursor:pointer;text-transform:uppercase;font-weight:400;color:#FFFFFF;background:#012d15;text-align:center;position:relative;transition:all ease-in}.story-buttons:hover,.story-buttons:focus{background:#024621;border:1px solid #012d15}\n",""]),module.exports=exports},810:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(417)},811:function(module,exports,__webpack_require__){(exports=__webpack_require__(277)(!1)).push([module.i,".vt_fio-c-c-enter-active{transition:opacity ease-in}.vt_fio-c-c-leave-to{opacity:0;transition:opacity ease-in}.vt_fio-c-c-enter-from{opacity:0;transition:opacity ease-in}.vt_fio-c-c-enter-to,.vt_fio-c-c-leave-from{opacity:1}.vt_fio-c-l-enter-active{transition:opacity ease-in}.vt_fio-c-l-leave-to{opacity:0;transition:all ease-in;transform:translate3d(-10%, 0, 0)}.vt_fio-c-l-enter-from{opacity:0;transition:all ease-in;transform:translate3d(-10%, 0, 0)}.vt_fio-c-l-enter-to,.vt_fio-c-l-leave-from{opacity:1}.vt_fio-c-r-enter-active{transition:opacity ease-in}.vt_fio-c-r-leave-to{opacity:0;transition:all ease-in;transform:translate3d(10%, 0, 0)}.vt_fio-c-r-enter-from{opacity:0;transition:all ease-in;transform:translate3d(10%, 0, 0)}.vt_fio-c-r-enter-to,.vt_fio-c-r-leave-from{opacity:1}.vt_fio-c-t-enter-active{transition:opacity ease-in}.vt_fio-c-t-leave-to{opacity:0;transition:all ease-in;transform:translate3d(0, -10%, 0)}.vt_fio-c-t-enter-from{opacity:0}.vt_fio-c-t-enter-to,.vt_fio-c-t-leave-from{opacity:1}.vt_fio-c-b-enter-active{transition:opacity ease-in}.vt_fio-c-b-leave-to{opacity:0;transition:all ease-in;transform:translate3d(0, 10%, 0)}.vt_fio-c-b-enter-from{opacity:0;transition:all ease-in;transform:translate3d(0, 10%, 0)}.vt_fio-c-b-enter-to,.vt_fio-c-b-leave-from{opacity:1}.vt_fio-l-c-enter-active{transition:all ease-in;transform:translate3d(-10%, 0, 0)}.vt_fio-l-c-leave-to{opacity:0;transition:all ease-in}.vt_fio-l-c-enter-from{opacity:0}.vt_fio-l-c-enter-to,.vt_fio-l-c-leave-from{opacity:1;transform:translate3d(0, 0, 0)}.vt_fio-l-l-enter-active{transition:all ease-in;transform:translate3d(-10%, 0, 0)}.vt_fio-l-l-leave-to{opacity:0;transition:all ease-in;transform:translate3d(-10%, 0, 0)}.vt_fio-l-l-enter-from{opacity:0}.vt_fio-l-l-enter-to,.vt_fio-l-l-leave-from{opacity:1;transform:translate3d(0, 0, 0)}.vt_fio-l-r-enter-active{transition:all ease-in;transform:translate3d(-10%, 0, 0)}.vt_fio-l-r-leave-to{opacity:0;transition:all ease-in;transform:translate3d(10%, 0, 0)}.vt_fio-l-r-enter-from{opacity:0}.vt_fio-l-r-enter-to,.vt_fio-l-r-leave-from{opacity:1;transform:translate3d(0, 0, 0)}.vt_fio-l-t-enter-active{transition:all ease-in;transform:translate3d(-10%, 0, 0)}.vt_fio-l-t-leave-to{opacity:0;transition:all ease-in;transform:translate3d(0, -10%, 0)}.vt_fio-l-t-enter-from{opacity:0}.vt_fio-l-t-enter-to,.vt_fio-l-t-leave-from{opacity:1;transform:translate3d(0, 0, 0)}.vt_fio-l-b-enter-active{transition:all ease-in;transform:translate3d(-10%, 0, 0)}.vt_fio-l-b-leave-to{opacity:0;transition:all ease-in;transform:translate3d(0, 10%, 0)}.vt_fio-l-b-enter-from{opacity:0}.vt_fio-l-b-enter-to,.vt_fio-l-b-leave-from{opacity:1;transform:translate3d(0, 0, 0)}\n",""]),module.exports=exports},812:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(418)},813:function(module,exports,__webpack_require__){(exports=__webpack_require__(277)(!1)).push([module.i,".vt_sio-l-r-enter-active{transition:all ease-in;transform:translate3d(-100%, 0, 0)}.vt_sio-l-r-leave-to{opacity:0;transition:all ease-in;transform:translate3d(100%, 0, 0)}.vt_sio-l-r-enter-from{opacity:0}.vt_sio-l-r-enter-to,.vt_sio-l-r-leave-from{opacity:1;transform:translate3d(0, 0, 0)}.vt_sio-l-l-enter-active{transition:all ease-in;transform:translate3d(-100%, 0, 0)}.vt_sio-l-l-leave-to{opacity:0;transition:all ease-in;transform:translate3d(-100%, 0, 0)}.vt_sio-l-l-enter-from{opacity:0}.vt_sio-l-l-enter-to,.vt_sio-l-l-leave-from{opacity:1;transform:translate3d(0, 0, 0)}.vt_sio-l-t-enter-active{transition:all ease-in;transform:translate3d(-100%, 0, 0)}.vt_sio-l-t-leave-to{opacity:0;transition:all ease-in;transform:translate3d(0, -100%, 0)}.vt_sio-l-t-enter-from{opacity:0}.vt_sio-l-t-enter-to,.vt_sio-l-t-leave-from{opacity:1;transform:translate3d(0, 0, 0)}.vt_sio-l-b-enter-active{transition:all ease-in;transform:translate3d(-100%, 0, 0)}.vt_sio-l-b-leave-to{opacity:0;transition:all ease-in;transform:translate3d(0, 100%, 0)}.vt_sio-l-b-enter-from{opacity:0}.vt_sio-l-b-enter-to,.vt_sio-l-b-leave-from{opacity:1;transform:translate3d(0, 0, 0)}.vt_sio-r-r-enter-active{transition:all ease-in;transform:translate3d(100%, 0, 0)}.vt_sio-r-r-leave-to{opacity:0;transition:all ease-in;transform:translate3d(100%, 0, 0)}.vt_sio-r-r-enter-from{opacity:0}.vt_sio-r-r-enter-to,.vt_sio-r-r-leave-from{opacity:1;transform:translate3d(0, 0, 0)}.vt_sio-r-l-enter-active{transition:all ease-in;transform:translate3d(100%, 0, 0)}.vt_sio-r-l-leave-to{opacity:0;transition:all ease-in;transform:translate3d(-100%, 0, 0)}.vt_sio-r-l-enter-from{opacity:0}.vt_sio-r-l-enter-to,.vt_sio-r-l-leave-from{opacity:1;transform:translate3d(0, 0, 0)}.vt_sio-r-t-enter-active{transition:all ease-in;transform:translate3d(100%, 0, 0)}.vt_sio-r-t-leave-to{opacity:0;transition:all ease-in;transform:translate3d(0, -100%, 0)}.vt_sio-r-t-enter-from{opacity:0}.vt_sio-r-t-enter-to,.vt_sio-r-t-leave-from{opacity:1;transform:translate3d(0, 0, 0)}.vt_sio-r-b-enter-active{transition:all ease-in;transform:translate3d(100%, 0, 0)}.vt_sio-r-b-leave-to{opacity:0;transition:all ease-in;transform:translate3d(0, 100%, 0)}.vt_sio-r-b-enter-from{opacity:0}.vt_sio-r-b-enter-to,.vt_sio-r-b-leave-from{opacity:1;transform:translate3d(0, 0, 0)}\n",""]),module.exports=exports},816:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Single",(function(){return fade_in_out_stories_Single})),__webpack_require__.d(__webpack_exports__,"Group",(function(){return fade_in_out_stories_Group}));__webpack_require__(11);var tslib_es6=__webpack_require__(64),vue_esm_bundler=__webpack_require__(9);__webpack_require__(416);__webpack_require__(74),__webpack_require__(42);var base_transition_component=__webpack_require__(202),fade_in_outvue_type_script_lang_ts=Object(vue_esm_bundler.defineComponent)({name:"fade-in-out",components:{BaseTransitionComponent:base_transition_component.a},props:{duration:{type:[Number,Object],default:500},entry:{type:String,default:"center",validator:function validator(value){return["center","left"].includes(value)}},exit:{type:String,default:"center",validator:function validator(value){return["center","left","right","top","bottom"].includes(value)}},appear:{type:Boolean,required:!1},mode:{type:String,required:!1,validator:function validator(value){return["out-in","in-out"].includes(value)}},group:{type:Boolean,required:!1},tag:{type:String,required:!1},persisted:{type:Boolean,required:!1}},setup:function setup(props){var transitionType=Object(vue_esm_bundler.ref)("fio"),firstChar=function firstChar(type){return type.substring(0,1)},transitionName=Object(vue_esm_bundler.computed)((function(){return"vt_"+transitionType.value+"-"+firstChar(props.entry)+"-"+firstChar(props.exit)}));return{props:props,transitionType:transitionType,transitionName:transitionName}}});__webpack_require__(810);fade_in_outvue_type_script_lang_ts.render=function render(_ctx,_cache,$props,$setup,$data,$options){const _component_BaseTransitionComponent=Object(vue_esm_bundler.resolveComponent)("BaseTransitionComponent");return Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)(_component_BaseTransitionComponent,Object(vue_esm_bundler.mergeProps)(_ctx.props,{name:_ctx.transitionName}),{default:Object(vue_esm_bundler.withCtx)(()=>[Object(vue_esm_bundler.renderSlot)(_ctx.$slots,"default")]),_:3},16,["name"])};var fade_in_out=fade_in_outvue_type_script_lang_ts;fade_in_outvue_type_script_lang_ts.__docgenInfo={displayName:"fade-in-out",exportName:"default",description:"",tags:{},props:[{name:"duration",description:"Specifies the duration of the transition in milliseconds. \nAlso accepts separate values for enter and leave durations `e.g { enter: 500, leave: 800 }`",type:{name:"number|object"},defaultValue:{func:!1,value:"500"}},{name:"entry",description:"The entry style animation type. \nAccepts `center` `left`",type:{name:"string"},defaultValue:{func:!1,value:"'center'"},values:["center","left"]},{name:"exit",description:"The exit style animation type.\nAccepts `center` `left` `right` `top` `bottom`",type:{name:"string"},defaultValue:{func:!1,value:"'center'"},values:["center","left","right","top","bottom"]},{name:"appear",description:"Whether to apply the transition on initial render.",type:{name:"boolean"},required:!1},{name:"mode",description:"Controls the timing sequence of leaving/entering transitions. \nAccepts `out-in` or `in-out` \nRequired when used with router-view. \nOnly exposed when group is false",type:{name:"string"},required:!1,values:["out-in","in-out"]},{name:"group",description:"Whether transition effects are for multiple elements/components. \nEvery child in a group must be uniquely keyed for the animations to work properly.",type:{name:"boolean"},required:!1},{name:"tag",description:"If not defined, renders without a root element. \nOnly usable if group is true.",type:{name:"string"},required:!1},{name:"persisted",description:"Speed up transitions by skipping hooks. \nOnly to be used if elements are show/hidden, e.g v-show. \nDoes not work if elements are inserted/removed, e.g v-if",type:{name:"boolean"},required:!1}],slots:[{name:"default"}]};var template_source=__webpack_require__(131),fade_in_out_stories_Single=(__webpack_exports__.default={title:"Entry & Exit Animations/FadeInOut",component:fade_in_out,argTypes:{entry:{control:{type:"select",options:["center","left"]}},exit:{control:{type:"select",options:["center","left","right","top","bottom"]}},duration:{control:{type:"object"},defaultValue:{enter:500,leave:800}},mode:{control:{type:"select",required:!1,options:["out-in","in-out"]}},appear:{control:{type:"boolean",required:!1}},tag:{control:{type:"text",required:!1}},group:{control:{type:"boolean",required:!1}}}},function Single(args,_a){var argTypes=_a.argTypes;return{props:Object.keys(argTypes),components:{FadeInOut:fade_in_out},setup:function setup(){var fade=Object(vue_esm_bundler.ref)(!0);return{args:args,fade:fade,autoTrigger:function autoTrigger(){fade.value=!fade.value}}},template:'\n  <div>\n    <button class="story-buttons" @click="autoTrigger">Trigger animation</button>\n    <div class="single-wrap">\n      <FadeInOut v-bind="args">\n        <div v-if="fade" class="card single-item"></div>\n      </FadeInOut>\n    </div>\n  </div>\n  '}});fade_in_out_stories_Single.args={entry:"center",exit:"center",duration:800,appear:!0},fade_in_out_stories_Single.parameters={docs:{source:{code:Object(template_source.a)('\n<button @click="fade = !fade">Trigger fade</button>\n\n<FadeInOut\n v-bind="$props">\n  <div v-if="fade">\n    \x3c!--  Place content here --\x3e\n  </div>\n</FadeInOut>\n',fade_in_out_stories_Single.args)}}};var fade_in_out_stories_Group=function Group(args){return{components:{FadeInOut:fade_in_out},setup:function setup(){var items=Object(vue_esm_bundler.ref)([1]),nextNum=Object(vue_esm_bundler.ref)(10);return{args:args,items:items,addItem:function addItem(){items.value.push(nextNum.value++)},removeItem:function removeItem(){1!==items.value.length&&items.value.pop()}}},template:'\n    <div>\n      <button class="story-buttons" @click="addItem">Add item</button>\n      <button class="story-buttons" @click="removeItem">Remove item</button>\n      <FadeInOut v-bind="args" class="group-wrap">\n        <div v-for="(item, i) in items.slice().reverse()" class=" card group-item" :key="item"></div>\n      </FadeInOut>\n    </div>\n    '}};fade_in_out_stories_Group.args={entry:"left",exit:"bottom",duration:800,group:!0,tag:"div",moveClass:"group-move-enter",leaveActiveClass:"group-move-leave"},fade_in_out_stories_Group.parameters={docs:{source:{code:Object(template_source.a)('\n/** template **/\n<button @click="addItem">Add item</button>\n<button @click="removeItem">Remove item</button>\n\n<FadeInOut\n v-bind="$props">\n  \n  \x3c!-- Group content must be keyed --\x3e\n  <div v-for="item in items" :key="item" class="list-item">\n    {{ item }}\n  </div>\n\n</FadeInOut>\n/** template **/\n\n<style lang="css">\n  .group-move-enter {\n    transition: transform 800ms ease;\n  }\n  .group-move-leave {\n    transition: transform 800ms ease;\n    position: absolute;\n  }\n  .list-item {\n    display: inline-block;\n  }\n</style>\n',fade_in_out_stories_Group.args)}}},fade_in_out_stories_Single.parameters=Object(tslib_es6.a)({storySource:{source:'(args: any, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { FadeInOut },\n  setup() {\n    const fade = ref<boolean>(true)\n\n    const autoTrigger = () => {\n      fade.value = !fade.value\n    }\n\n    return { args, fade, autoTrigger }\n  },\n  template: `\n  <div>\n    <button class="story-buttons" @click="autoTrigger">Trigger animation</button>\n    <div class="single-wrap">\n      <FadeInOut v-bind="args">\n        <div v-if="fade" class="card single-item"></div>\n      </FadeInOut>\n    </div>\n  </div>\n  `\n})'}},fade_in_out_stories_Single.parameters),fade_in_out_stories_Group.parameters=Object(tslib_es6.a)({storySource:{source:'(args: any) => {\n\n  return {\n    components: { FadeInOut },\n    setup() {\n      const items = ref<number[]>([1])\n\n      const nextNum = ref<number>(10)\n\n      const addItem = () => {\n        items.value.push(nextNum.value++)\n      }\n\n      const removeItem = () => {\n        if (items.value.length !== 1) {\n          items.value.pop();\n        }\n      }\n\n      return { args, items, addItem, removeItem }\n    },\n    template: `\n    <div>\n      <button class="story-buttons" @click="addItem">Add item</button>\n      <button class="story-buttons" @click="removeItem">Remove item</button>\n      <FadeInOut v-bind="args" class="group-wrap">\n        <div v-for="(item, i) in items.slice().reverse()" class=" card group-item" :key="item"></div>\n      </FadeInOut>\n    </div>\n    `\n  };\n}'}},fade_in_out_stories_Group.parameters)},817:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Single",(function(){return slide_in_out_stories_Single})),__webpack_require__.d(__webpack_exports__,"Group",(function(){return slide_in_out_stories_Group}));__webpack_require__(11);var tslib_es6=__webpack_require__(64),vue_esm_bundler=__webpack_require__(9);__webpack_require__(416);__webpack_require__(74),__webpack_require__(42);var base_transition_component=__webpack_require__(202),slide_in_outvue_type_script_lang_ts=Object(vue_esm_bundler.defineComponent)({name:"slide-in-out",components:{BaseTransitionComponent:base_transition_component.a},props:{duration:{type:[Number,Object],default:500},entry:{type:String,default:"left",validator:function validator(value){return["left","right"].includes(value)}},exit:{type:String,default:"left",validator:function validator(value){return["left","right","top","bottom"].includes(value)}},appear:{type:Boolean,required:!1},mode:{type:String,required:!1,validator:function validator(value){return["out-in","in-out"].includes(value)}},group:{type:Boolean,required:!1},tag:{type:String,required:!1},persisted:{type:Boolean,required:!1}},setup:function setup(props){var transitionType=Object(vue_esm_bundler.ref)("sio"),firstChar=function firstChar(type){return type.substring(0,1)},transitionName=Object(vue_esm_bundler.computed)((function(){return"vt_"+transitionType.value+"-"+firstChar(props.entry)+"-"+firstChar(props.exit)}));return{props:props,transitionType:transitionType,transitionName:transitionName}}});__webpack_require__(812);slide_in_outvue_type_script_lang_ts.render=function render(_ctx,_cache,$props,$setup,$data,$options){const _component_BaseTransitionComponent=Object(vue_esm_bundler.resolveComponent)("BaseTransitionComponent");return Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)(_component_BaseTransitionComponent,Object(vue_esm_bundler.mergeProps)(_ctx.props,{name:_ctx.transitionName}),{default:Object(vue_esm_bundler.withCtx)(()=>[Object(vue_esm_bundler.renderSlot)(_ctx.$slots,"default")]),_:3},16,["name"])};var slide_in_out=slide_in_outvue_type_script_lang_ts;slide_in_outvue_type_script_lang_ts.__docgenInfo={displayName:"slide-in-out",exportName:"default",description:"",tags:{},props:[{name:"duration",description:"Specifies the duration of the transition in milliseconds. \nAlso accepts separate values for enter and leave durations `e.g { enter: 500, leave: 800 }`",type:{name:"number|object"},defaultValue:{func:!1,value:"500"}},{name:"entry",description:"The entry style animation type. \nAccepts `left` `right`",type:{name:"string"},defaultValue:{func:!1,value:"'left'"},values:["left","right"]},{name:"exit",description:"The exit style animation type.\nAccepts left` `right` `top` `bottom`",type:{name:"string"},defaultValue:{func:!1,value:"'left'"},values:["left","right","top","bottom"]},{name:"appear",description:"Whether to apply the transition on initial render.",type:{name:"boolean"},required:!1},{name:"mode",description:"Controls the timing sequence of leaving/entering transitions. \nAccepts `out-in` or `in-out` \nRequired when used with router-view. \nOnly exposed when group is false",type:{name:"string"},required:!1,values:["out-in","in-out"]},{name:"group",description:"Whether transition effects are for multiple elements/components. \nEvery child in a group must be uniquely keyed for the animations to work properly.",type:{name:"boolean"},required:!1},{name:"tag",description:"If not defined, renders without a root element. \nOnly usable if group is true.",type:{name:"string"},required:!1},{name:"persisted",description:"Speed up transitions by skipping hooks. \nOnly to be used if elements are show/hidden, e.g v-show. \nDoes not work if elements are inserted/removed, e.g v-if",type:{name:"boolean"},required:!1}],slots:[{name:"default"}]};var template_source=__webpack_require__(131),slide_in_out_stories_Single=(__webpack_exports__.default={title:"Entry & Exit Animations/SlideInOut",component:slide_in_out,argTypes:{entry:{control:{type:"select",options:["left","right"]}},exit:{control:{type:"select",options:["left","right","top","bottom"]}},duration:{control:{type:"object"},defaultValue:{enter:500,leave:800}},mode:{control:{type:"select",required:!1,options:["out-in","in-out"]}},appear:{control:{type:"boolean",required:!1}},tag:{control:{type:"text",required:!1}},group:{control:{type:"boolean",required:!1}}}},function Single(args,_a){var argTypes=_a.argTypes;return{props:Object.keys(argTypes),components:{SlideInOut:slide_in_out},setup:function setup(){var slide=Object(vue_esm_bundler.ref)(!0);return{args:args,slide:slide,autoTrigger:function autoTrigger(){slide.value=!slide.value}}},template:'\n  <div>\n    <button class="story-buttons" @click="autoTrigger">Trigger animation</button>\n    <div class="single-wrap">\n      <SlideInOut v-bind="args">\n        <div v-if="slide" class="card single-item"></div>\n      </SlideInOut>\n    </div>\n  </div>\n  '}});slide_in_out_stories_Single.args={entry:"left",exit:"right",duration:800,appear:!0},slide_in_out_stories_Single.parameters={docs:{source:{code:Object(template_source.a)('\n<button @click="slide = !slide">Trigger animation</button>\n\n<SlideInOut\n v-bind="$props">\n  <div v-if="slide">\n    \x3c!--  Place content here --\x3e\n  </div>\n</SlideInOut>\n',slide_in_out_stories_Single.args)}}};var slide_in_out_stories_Group=function Group(args){return{components:{SlideInOut:slide_in_out},setup:function setup(){var items=Object(vue_esm_bundler.ref)([1]),nextNum=Object(vue_esm_bundler.ref)(10);return{args:args,items:items,addItem:function addItem(){items.value.push(nextNum.value++)},removeItem:function removeItem(){1!==items.value.length&&items.value.pop()}}},template:'\n    <div>\n      <button class="story-buttons" @click="addItem">Add item</button>\n      <button class="story-buttons" @click="removeItem">Remove item</button>\n      <SlideInOut v-bind="args" class="group-wrap">\n        <div v-for="(item, i) in items.slice().reverse()" class="card group-item" :key="item"></div>\n      </SlideInOut>\n    </div>\n    '}};slide_in_out_stories_Group.args={entry:"left",exit:"top",duration:800,group:!0,tag:"div",moveClass:"group-move-enter",leaveActiveClass:"group-move-leave"},slide_in_out_stories_Group.parameters={docs:{source:{code:Object(template_source.a)('\n/** template **/\n<button @click="addItem">Add item</button>\n<button @click="removeItem">Remove item</button>\n\n<SlideInOut\n v-bind="$props">\n  \n  \x3c!-- Group content must be keyed --\x3e\n  <div v-for="item in items" :key="item" class="list-item">\n    {{ item }}\n  </div>\n\n</SlideInOut>\n/** template **/\n\n<style lang="css">\n  .group-move-enter {\n    transition: transform 800ms ease;\n  }\n  .group-move-leave {\n    transition: transform 800ms ease;\n    position: absolute;\n  }\n  .list-item {\n    display: inline-block;\n  }\n</style>\n',slide_in_out_stories_Group.args)}}},slide_in_out_stories_Single.parameters=Object(tslib_es6.a)({storySource:{source:'(args: any, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { SlideInOut },\n  setup() {\n    const slide = ref<boolean>(true)\n\n    const autoTrigger = () => {\n      slide.value = !slide.value\n    }\n\n    return { args, slide, autoTrigger }\n  },\n  template: `\n  <div>\n    <button class="story-buttons" @click="autoTrigger">Trigger animation</button>\n    <div class="single-wrap">\n      <SlideInOut v-bind="args">\n        <div v-if="slide" class="card single-item"></div>\n      </SlideInOut>\n    </div>\n  </div>\n  `\n})'}},slide_in_out_stories_Single.parameters),slide_in_out_stories_Group.parameters=Object(tslib_es6.a)({storySource:{source:'(args: any) => {\n\n  return {\n    components: { SlideInOut },\n    setup() {\n      const items = ref<number[]>([1])\n\n      const nextNum = ref<number>(10)\n\n      const addItem = () => {\n        items.value.push(nextNum.value++)\n      }\n\n      const removeItem = () => {\n        if (items.value.length !== 1) {\n          items.value.pop();\n        }\n      }\n\n      return { args, items, addItem, removeItem }\n    },\n    template: `\n    <div>\n      <button class="story-buttons" @click="addItem">Add item</button>\n      <button class="story-buttons" @click="removeItem">Remove item</button>\n      <SlideInOut v-bind="args" class="group-wrap">\n        <div v-for="(item, i) in items.slice().reverse()" class="card group-item" :key="item"></div>\n      </SlideInOut>\n    </div>\n    `\n  };\n}'}},slide_in_out_stories_Group.parameters)},823:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(11),__webpack_require__(38),__webpack_require__(45),__webpack_require__(412),__webpack_require__(35),__webpack_require__(36),__webpack_require__(413),__webpack_require__(414),__webpack_require__(415);var client_api=__webpack_require__(828),esm=__webpack_require__(6),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0},previewTabs:{docs:{hidden:!1,theme:__webpack_require__(196).a.dark}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[463,2,3]]]);