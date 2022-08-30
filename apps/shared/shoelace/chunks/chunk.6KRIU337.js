import{a as i}from"./chunk.DBCWAMJH.js";import{a as r}from"./chunk.JUX3LFDW.js";import{a as c,b as a,e as y,f}from"./chunk.X7Q42RGY.js";import{a as u}from"./chunk.LV6OEXWK.js";import{c as d}from"./chunk.3G4FHXSN.js";import{a as h}from"./chunk.HDSSVW7K.js";import{g as e}from"./chunk.OAQCUA7X.js";var t=class extends f{constructor(){super(...arguments);this.hasStarted=!1;this.name="none";this.play=!1;this.delay=0;this.direction="normal";this.duration=1e3;this.easing="linear";this.endDelay=0;this.fill="auto";this.iterations=1/0;this.iterationStart=0;this.playbackRate=1}get currentTime(){var n,s;return(s=(n=this.animation)==null?void 0:n.currentTime)!=null?s:0}set currentTime(n){this.animation&&(this.animation.currentTime=n)}connectedCallback(){super.connectedCallback(),this.createAnimation(),this.handleAnimationCancel=this.handleAnimationCancel.bind(this),this.handleAnimationFinish=this.handleAnimationFinish.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleAnimationChange(){!this.hasUpdated||this.createAnimation()}handleAnimationFinish(){this.play=!1,this.hasStarted=!1,r(this,"sl-finish")}handleAnimationCancel(){this.play=!1,this.hasStarted=!1,r(this,"sl-cancel")}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,r(this,"sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var o,m;let n=(o=h.easings[this.easing])!=null?o:this.easing,s=(m=this.keyframes)!=null?m:h[this.name],l=(await this.defaultSlot).assignedElements()[0];return!l||!s?!1:(this.destroyAnimation(),this.animation=l.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:n,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,r(this,"sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}cancel(){var n;(n=this.animation)==null||n.cancel()}finish(){var n;(n=this.animation)==null||n.finish()}render(){return d` <slot @slotchange=${this.handleSlotChange}></slot> `}};t.styles=u,e([y("slot")],t.prototype,"defaultSlot",2),e([a()],t.prototype,"name",2),e([a({type:Boolean,reflect:!0})],t.prototype,"play",2),e([a({type:Number})],t.prototype,"delay",2),e([a()],t.prototype,"direction",2),e([a({type:Number})],t.prototype,"duration",2),e([a()],t.prototype,"easing",2),e([a({attribute:"end-delay",type:Number})],t.prototype,"endDelay",2),e([a()],t.prototype,"fill",2),e([a({type:Number})],t.prototype,"iterations",2),e([a({attribute:"iteration-start",type:Number})],t.prototype,"iterationStart",2),e([a({attribute:!1})],t.prototype,"keyframes",2),e([a({attribute:"playback-rate",type:Number})],t.prototype,"playbackRate",2),e([i("name"),i("delay"),i("direction"),i("duration"),i("easing"),i("endDelay"),i("fill"),i("iterations"),i("iterationsStart"),i("keyframes")],t.prototype,"handleAnimationChange",1),e([i("play")],t.prototype,"handlePlayChange",1),e([i("playbackRate")],t.prototype,"handlePlaybackRateChange",1),t=e([c("sl-animation")],t);export{t as a};
