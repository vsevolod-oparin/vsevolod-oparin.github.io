(this["webpackJsonptimer-app"]=this["webpackJsonptimer-app"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),l=a(2),c=a(3),m=a(1),o=a(5),u=a(4);var d=function(e){var t=e.time,a=Math.floor(t/10)%100,n=Math.floor(t/1e3),r=Math.floor(n/60),s=Math.floor(r/60),i=a.toString().padStart(2,"0"),l=(r%60).toString().padStart(2,"0"),c=(n%60).toString().padStart(2,"0");return s.toString().concat(":",l,":",c,".",i)};function b(e){return r.a.createElement("center",null,r.a.createElement("h2",null,r.a.createElement(d,{time:e.time})))}var h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.redActive?"button button-red":"button button-red button-disable",t=this.props.blueActive?"button button-blue":"button button-blue button-disable",a=r.a.createElement("a",{className:e,onClick:this.props.redClick,href:"#"},"Red Team finished"),n=r.a.createElement("a",{className:t,onClick:this.props.blueClick,href:"#"},"Blue Team finished");return r.a.createElement("div",{className:"doubleTimer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column column-10"}),r.a.createElement("div",{className:"column"},r.a.createElement(b,{time:this.props.redTime})),r.a.createElement("div",{className:"column"},r.a.createElement(b,{time:this.props.blueTime})),r.a.createElement("div",{className:"column column-10"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column column-10"}),r.a.createElement("div",{className:"column"},r.a.createElement("center",null,a)),r.a.createElement("div",{className:"column"},r.a.createElement("center",null,n)),r.a.createElement("div",{className:"column column-10"})))}}]),a}(r.a.Component);h.defaultProps={redTime:0,blueTime:0,redActive:!0,blueActive:!0};var v=h,p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){var t=e.target.gameLink.value;this.props.update(t),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column column-20"}),r.a.createElement("div",{className:"column column-50"},r.a.createElement("input",{type:"text",placeholder:"https://codenames.game/room/tik-tak-toe",id:"gameLink"})),r.a.createElement("div",{className:"column column-10"},r.a.createElement("input",{className:"button",type:"submit",value:"Send"})),r.a.createElement("div",{className:"column column-20"})))))}}]),a}(r.a.Component),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("h1",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("center",null,r.a.createElement("h2",null,"Time Settings")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column column-10"}),r.a.createElement("div",{className:"column column-40"},r.a.createElement("label",{for:"nameField"},"First Turn: "),r.a.createElement("input",{type:"text",placeholder:"mm:ss",id:"firstTurn",value:"6:00"})),r.a.createElement("div",{className:"column column-40"},r.a.createElement("label",{for:"nameField"},"Other Turns: "),r.a.createElement("input",{type:"text",placeholder:"mm:ss",id:"turn",value:"4:00"})),r.a.createElement("div",{className:"column column-10"})))),r.a.createElement(p,{update:this.props.update}))}}]),a}(r.a.Component),E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.story.map((function(e){return r.a.createElement("tr",{key:e.idx},r.a.createElement("td",null,r.a.createElement("b",{className:"record-"+e.team},"red"==e.team?"R":"B"," ",r.a.createElement(d,{time:e.time}))))}));return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column column-10"}),r.a.createElement("div",{className:"column"},r.a.createElement("center",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Steps"))),r.a.createElement("tbody",null,e)))),r.a.createElement("div",{className:"column column-10"}))}}]),a}(r.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).any2s=n.any2s.bind(Object(m.a)(n)),n.s2rr=n.s2rr.bind(Object(m.a)(n)),n.s2br=n.s2br.bind(Object(m.a)(n)),n.rr2rp=n.rr2rp.bind(Object(m.a)(n)),n.rp2rr=n.rp2rr.bind(Object(m.a)(n)),n.br2bp=n.br2bp.bind(Object(m.a)(n)),n.bp2br=n.bp2br.bind(Object(m.a)(n)),n.rr2br=n.rr2br.bind(Object(m.a)(n)),n.br2rr=n.br2rr.bind(Object(m.a)(n)),n.bp2rr=n.bp2rr.bind(Object(m.a)(n)),n.rp2br=n.rp2br.bind(Object(m.a)(n)),n.runRed=n.runRed.bind(Object(m.a)(n)),n.runBlue=n.runBlue.bind(Object(m.a)(n)),n.resume=n.resume.bind(Object(m.a)(n)),n.pause=n.pause.bind(Object(m.a)(n)),n.reset=n.reset.bind(Object(m.a)(n)),n.tick=n.tick.bind(Object(m.a)(n)),n.settingsToggleOn=n.settingsToggleOn.bind(Object(m.a)(n)),n.settingsToggleOff=n.settingsToggleOff.bind(Object(m.a)(n)),n.updateTime=10,n.intervalId=null,n.state={stateId:0,addedTime:0,startedTime:0,iid:null,story:[],settingsOff:!0,ctm:n.tm()},n}return Object(c.a)(a,[{key:"tick",value:function(){this.setState({ctm:this.tm()})}},{key:"tm",value:function(){return(new Date).getTime()}},{key:"any2s",value:function(){console.log("a2s"),null!==this.state.iid&&clearInterval(this.state.iid),this.setState((function(e){return console.log(e.iid),{stateId:0,story:[],iid:null,addedTime:0}}))}},{key:"s2rr",value:function(){console.log("s2rr");var e=setInterval(this.tick,this.updateTime);this.setState((function(t){return console.log(e),{stateId:1,iid:e,startedTime:this.tm()}}))}},{key:"s2br",value:function(){console.log("s2br");var e=setInterval(this.tick,this.updateTime);this.setState((function(t){return{stateId:2,iid:e,startedTime:this.tm()}}))}},{key:"rr2rp",value:function(){console.log("rr2rp"),clearInterval(this.state.iid),this.setState((function(e){return{stateId:3,addedTime:e.addedTime+this.tm()-e.startedTime,iid:null}}))}},{key:"rp2rr",value:function(){console.log("rp2rr");var e=setInterval(this.tick,this.updateTime);this.setState((function(t){return{stateId:1,iid:e,startedTime:this.tm()}}))}},{key:"br2bp",value:function(){console.log("br2bp"),clearInterval(this.state.iid),this.setState((function(e){return{stateId:4,addedTime:e.addedTime+this.tm()-e.startedTime,iid:null}}))}},{key:"bp2br",value:function(){console.log("bp2br");var e=setInterval(this.tick,this.updateTime);this.setState((function(t){return{stateId:2,iid:e,startedTime:this.tm()}}))}},{key:"rr2br",value:function(){console.log("rr2br"),this.setState((function(e){e.story;var t={team:"red",time:this.tm()-e.startedTime+e.addedTime,idx:e.story.length};return{stateId:2,story:e.story.concat([t]),startedTime:this.tm(),addedTime:0}}))}},{key:"br2rr",value:function(){console.log("br2rr"),this.setState((function(e){e.story;var t={team:"blue",time:this.tm()-e.startedTime+e.addedTime,idx:e.story.length};return{stateId:1,story:e.story.concat([t]),startedTime:this.tm(),addedTime:0}}))}},{key:"bp2rr",value:function(){console.log("bp2rr");var e=setInterval(this.tick,this.updateTime);this.setState((function(t){t.story;var a={team:"blue",time:t.addedTime,idx:t.story.length};return{stateId:1,story:t.story.concat([a]),iid:e,startedTime:this.tm(),addedTime:0}}))}},{key:"rp2br",value:function(){console.log("rp2br");var e=setInterval(this.tick,this.updateTime);this.setState((function(t){t.story;var a={team:"red",time:t.addedTime,idx:t.story.length};return{stateId:2,story:t.story.concat([a]),iid:e,startedTime:this.tm(),addedTime:0}}))}},{key:"runBlue",value:function(){({0:this.s2br,1:this.rr2br,3:this.rp2br,4:this.bp2br})[this.state.stateId]()}},{key:"runRed",value:function(){({0:this.s2rr,2:this.br2rr,3:this.rp2rr,4:this.bp2rr})[this.state.stateId]()}},{key:"resume",value:function(){({3:this.rp2rr,4:this.bp2br})[this.state.stateId]()}},{key:"pause",value:function(){({1:this.rr2rp,2:this.br2bp})[this.state.stateId]()}},{key:"reset",value:function(){this.any2s()}},{key:"settingsToggleOn",value:function(){this.setState({settingsOff:!0})}},{key:"settingsToggleOff",value:function(){this.setState({settingsOff:!1})}},{key:"render",value:function(){var e;e=this.state.settingsOff?r.a.createElement("a",{className:"button button-outline",onClick:this.settingsToggleOff},"Settings"):r.a.createElement("a",{className:"button",onClick:this.settingsToggleOn},"Save");var t=this.tm()-this.state.startedTime,a=0;a=1===this.state.stateId?t+this.state.addedTime:a,a=3===this.state.stateId?this.state.addedTime:a;var n=0;n=2===this.state.stateId?t+this.state.addedTime:n,n=4===this.state.stateId?this.state.addedTime:n;var s=0==this.state.stateId?"button button-outline button-disable":"button button-outline";console.log(s);var i=r.a.createElement("div",{className:"column column-10"},r.a.createElement("center",null,r.a.createElement("a",{className:s,onClick:this.pause},"Pause"))),l=r.a.createElement("div",{className:"column column-10"},r.a.createElement("a",{className:"button button-outline",onClick:this.reset},"Reset")),c=r.a.createElement("div",{className:"column column-20"},r.a.createElement("a",{className:"button",onClick:this.resume},"Resume"));return r.a.createElement("div",{className:"timer-logic"},r.a.createElement(v,{blueActive:2!=this.state.stateId&&4!=this.state.stateId,redActive:1!=this.state.stateId&&3!=this.state.stateId,redTime:a,blueTime:n,redClick:this.runRed,blueClick:this.runBlue}),r.a.createElement(E,{story:this.state.story}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column column-10"}),this.state.stateId<3?i:"",this.state.stateId>=3?c:"",this.state.stateId>=3?l:"",r.a.createElement("div",{className:"column"}),r.a.createElement("div",{className:"column column-10"},r.a.createElement("center",null,e)),r.a.createElement("div",{className:"column column-10"})),this.state.settingsOff?"":r.a.createElement(f,{update:this.props.linkSetter}))}}]),a}(r.a.Component);function k(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("center",null,r.a.createElement("h4",null,"Game Link: ",r.a.createElement("a",{href:e.href},e.name)))))}var y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setLink=n.setLink.bind(Object(m.a)(n)),n.state={settingsOff:!0,gameLink:null,suffix:null},n}return Object(c.a)(a,[{key:"setLink",value:function(e){var t=e.split("/");t.length;var a=t[t.length-1];this.setState({gameLink:e,suffix:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("h1",null,r.a.createElement("span",null)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("center",null,r.a.createElement("h1",null,"Codenames Timer")))),null===this.state.suffix?r.a.createElement(p,{update:this.setLink}):"",null!==this.state.suffix?r.a.createElement(k,{href:this.state.gameLink,name:this.state.suffix}):"",null!==this.state.suffix?r.a.createElement(g,{linkSetter:this.setLink}):""))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.0016323d.chunk.js.map