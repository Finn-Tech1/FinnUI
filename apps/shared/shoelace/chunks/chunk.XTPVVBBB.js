import{a as d}from"./chunk.SSNJICZ7.js";import{b as c}from"./chunk.RHW2XED2.js";import{a as m}from"./chunk.JUX3LFDW.js";import{a as n,d as a,f as u}from"./chunk.X7Q42RGY.js";import{c as r}from"./chunk.3G4FHXSN.js";import{g as o}from"./chunk.OAQCUA7X.js";var i=class extends u{constructor(){super(...arguments);this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(e={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.getAttribute("role")!=="menuitem"||!e.includeDisabled&&t.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){let t=this.getAllItems({includeDisabled:!1}),s=e.disabled?t[0]:e;t.forEach(l=>{l.setAttribute("tabindex",l===s?"0":"-1")})}typeToSelect(e){var s;let t=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?e.metaKey||e.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let l of t){let f=(s=l.shadowRoot)==null?void 0:s.querySelector("slot:not([name])");if(c(f).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(l),l.focus();break}}}handleClick(e){let s=e.target.closest("sl-menu-item");(s==null?void 0:s.disabled)===!1&&m(this,"sl-select",{detail:{item:s}})}handleKeyDown(e){if(e.key==="Enter"){let t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){let t=this.getAllItems({includeDisabled:!1}),s=this.getCurrentItem(),l=s?t.indexOf(s):0;if(t.length>0){e.preventDefault(),e.key==="ArrowDown"?l++:e.key==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=t.length-1),l<0&&(l=t.length-1),l>t.length-1&&(l=0),this.setCurrentItem(t[l]),t[l].focus();return}}this.typeToSelect(e)}handleMouseDown(e){let t=e.target;t.getAttribute("role")==="menuitem"&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems({includeDisabled:!1});e.length>0&&this.setCurrentItem(e[0])}render(){return r`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};i.styles=d,o([a("slot")],i.prototype,"defaultSlot",2),i=o([n("sl-menu")],i);export{i as a};
