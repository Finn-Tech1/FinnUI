import{c as h}from"./chunk.ISLNSUAB.js";import{a as r,b as t,f as s}from"./chunk.X7Q42RGY.js";import{c as o}from"./chunk.3G4FHXSN.js";import{g as i}from"./chunk.OAQCUA7X.js";var e=class extends s{constructor(){super(...arguments);this.localize=new h(this);this.date=new Date;this.hourFormat="auto"}render(){let n=new Date(this.date),m=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(n.getMilliseconds()))return o`
      <time datetime=${n.toISOString()}>
        ${this.localize.date(n,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:m})}
      </time>
    `}};i([t()],e.prototype,"date",2),i([t()],e.prototype,"weekday",2),i([t()],e.prototype,"era",2),i([t()],e.prototype,"year",2),i([t()],e.prototype,"month",2),i([t()],e.prototype,"day",2),i([t()],e.prototype,"hour",2),i([t()],e.prototype,"minute",2),i([t()],e.prototype,"second",2),i([t({attribute:"time-zone-name"})],e.prototype,"timeZoneName",2),i([t({attribute:"time-zone"})],e.prototype,"timeZone",2),i([t({attribute:"hour-format"})],e.prototype,"hourFormat",2),e=i([r("sl-format-date")],e);export{e as a};
