import{a as T}from"./chunk.CNH2QGYN.js";import{a as k}from"./chunk.TFXCRWDD.js";import{a as p,c}from"./chunk.UJEHPUK2.js";import{a as u}from"./chunk.KLRPP4NQ.js";import{a as h,d}from"./chunk.HFPOGNHG.js";import{a as E}from"./chunk.RUACWBWF.js";import{b}from"./chunk.7DJRGBBM.js";import{a as y}from"./chunk.AR2QSYXF.js";import{a as f,b as o,e as l,g as w}from"./chunk.IKUI3UUK.js";import{c as g}from"./chunk.SYBSOZNG.js";import{e as i}from"./chunk.I4CX4JT3.js";var n=class extends w{constructor(){super(...arguments);this.localize=new b(this);this.open=!1;this.placement="bottom-start";this.disabled=!1;this.stayOpenOnSelect=!1;this.distance=0;this.skidding=0;this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(e){var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var a,r,m;let s=((a=this.containingElement)==null?void 0:a.getRootNode())instanceof ShadowRoot?(m=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:m.activeElement:document.activeElement;(!this.containingElement||(s==null?void 0:s.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(e){let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handlePanelSelect(e){let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let s=t.getAllItems(),a=s[0],r=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(a),a.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let t=this.trigger.assignedElements({flatten:!0}).find(a=>k(a).start),s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,u(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,u(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await d(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=c(this,"dropdown.show",{dir:this.localize.dir()});await h(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await d(this);let{keyframes:e,options:t}=c(this,"dropdown.hide",{dir:this.localize.dir()});await h(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return g`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${E({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        ></slot>
      </sl-popup>
    `}};n.styles=T,i([l(".dropdown")],n.prototype,"popup",2),i([l(".dropdown__trigger")],n.prototype,"trigger",2),i([l(".dropdown__panel")],n.prototype,"panel",2),i([o({type:Boolean,reflect:!0})],n.prototype,"open",2),i([o({reflect:!0})],n.prototype,"placement",2),i([o({type:Boolean,reflect:!0})],n.prototype,"disabled",2),i([o({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],n.prototype,"stayOpenOnSelect",2),i([o({attribute:!1})],n.prototype,"containingElement",2),i([o({type:Number})],n.prototype,"distance",2),i([o({type:Number})],n.prototype,"skidding",2),i([o({type:Boolean})],n.prototype,"hoist",2),i([y("open",{waitUntilFirstUpdate:!0})],n.prototype,"handleOpenChange",1),n=i([f("sl-dropdown")],n);p("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});p("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});export{n as a};