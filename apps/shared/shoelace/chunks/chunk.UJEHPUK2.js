import{a as s,b as m}from"./chunk.I4CX4JT3.js";var f=new Map,r=new WeakMap;function l(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function a(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function u(e,t){f.set(e,l(t))}function A(e,t,n){r.set(e,m(s({},r.get(e)),{[t]:l(n)}))}function p(e,t,n){let i=r.get(e);if(i!=null&&i[t])return a(i[t],n.dir);let o=f.get(t);return o?a(o,n.dir):{keyframes:[],options:{duration:0}}}export{u as a,A as b,p as c};