(this["webpackJsonptod-o"]=this["webpackJsonptod-o"]||[]).push([[0],{117:function(e,t,n){e.exports=n(163)},163:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),c=n.n(i),o=n(75),l=n(97),s=n.n(l),d=n(13),v=n(14);function u(){var e=Object(d.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return u=function(){return e},e}var h=v.a.div(u());function g(){var e=Object(d.a)(["\n    background: lightcyan;\n    width: ",";\n    height: calc(82.5 * var(--vh));\n    margin-top: calc(7.5 * var(--vh));\n    padding: calc(5 * var(--vh));\n    overflow-y: hidden;\n    overflow-x: scroll;\n"]);return g=function(){return e},e}var f=v.a.div(g(),(function(){return window.innerHeight<window.innerWidth?"auto":"calc(150 * var(--vh))"}));function m(){var e=Object(d.a)(["\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');\n    font-family: 'Ranchers', cursive;\n    font-weight: regular;\n    padding: 0;\n    display: flex;\n    font-size: calc(4 * var(--vh));\n    color: snow;\n    user-select: none;\n    text-align: center;\n    background: royalblue;\n"]);return m=function(){return e},e}var p=v.a.div(m());function y(){var e=Object(d.a)(["\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: auto;\n    display: flex;\n"]);return y=function(){return e},e}var w=v.a.div(y());function b(){var e=Object(d.a)(["\n    margin-left: calc(1 * var(--vh));\n    height: calc(7.5 * var(--vh));\n    line-height: calc(7.5 * var(--vh));\n"]);return b=function(){return e},e}var L=v.a.div(b()),E=n(99),S=n.n(E),O=n(94),C=function(e){return r.a.createElement("img",{style:{height:e.height,width:e.width},src:S.a,alt:"",onClick:function(){alert("version: "+O.version)}})},k=function(){return r.a.createElement(p,null,r.a.createElement(w,null,r.a.createElement(C,{height:"calc(7.5 * var(--vh))",width:"calc(5 * var(--vh))"}),r.a.createElement(L,null,"todo")))};function x(){var e=Object(d.a)(["\n    display: flex;\n"]);return x=function(){return e},e}var j=v.a.div(x());function D(){var e=Object(d.a)(["\n    display: flex;\n    overflow: scroll;\n    justify-content: space-between;\n    height: calc(7.5 * var(--vh));\n    padding: calc(4 * var(--vh)) calc(4 * var(--vh)) 0 calc(4 * var(--vh));\n    width: ",";\n    background: lightsteelblue;\n    border: solid 1px darkslategray;\n    border-radius: calc(0.5 * var(--vh)) calc(0.5 * var(--vh)) 0 0;\n    border-bottom: none;\n"]);return D=function(){return e},e}var T=v.a.div(D(),(function(){return window.innerHeight<window.innerWidth?"calc((90vw - 20 * var(--vh)) / 3)":"calc((135 * var(--vh) - 20 * var(--vh)) / 3)"}));function z(){var e=Object(d.a)(["\n    margin-right: 1vw;\n    font-size: calc(1.5 * var(--vh));\n    height: calc(3 * var(--vh));\n    width: calc(3 * var(--vh));\n    margin-top: calc(-0.25 * var(--vh));\n    line-height: calc(2.9 * var(--vh));\n    text-align: center;\n    border-radius: 40%;\n    color: white;\n    background: indianred;\n"]);return z=function(){return e},e}var N=v.a.div(z()),R=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null,e.list.filter((function(t){return t.category===e.category})).length),r.a.createElement("div",{style:{fontSize:"calc(2 * var(--vh))",fontWeight:"bold"}},e.category))},M=n(102),W=n.n(M),I=n(101),J=n.n(I),P=n(100),H=n.n(P),A=n(66),G=n.n(A),_=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{style:{fontSize:"calc(2.5 * var(--vh))"},onClick:function(){e.setList(e.addList(e.category,e.list))}}),r.a.createElement(J.a,{style:{fontSize:"calc(2.5 * var(--vh))"},onClick:function(){e.setList(e.deleteList(e.choiced,e.list)),e.setChoice([])}}),"TODO"===e.category&&r.a.createElement(W.a,{style:{fontSize:"calc(2.5 * var(--vh))"},onClick:function(){e.setList(e.saveLists("category","PROGRESS",e.choiced,e.list)),e.setChoice([])}}),"PROGRESS"===e.category&&r.a.createElement(G.a,{style:{fontSize:"calc(2.5 * var(--vh))"},onClick:function(){e.setList(e.saveLists("category","DONE",e.choiced,e.list)),e.setChoice([])}}))},U=function(e){return r.a.createElement(T,null,r.a.createElement(j,{key:"mtc-".concat(e.category,"-0-flex")},r.a.createElement(R,{list:e.list,category:e.category})),r.a.createElement(j,{key:"mtc-".concat(e.category,"-1-flex")},r.a.createElement(_,{list:e.list,choiced:e.choiced,category:e.category,setList:e.setList,setCategorizedList:e.setCategorizedList,setChoice:e.setChoice,addList:e.addList,deleteList:e.deleteList,saveLists:e.saveLists})))};function B(){var e=Object(d.a)(["\n    padding: calc(4 * var(--vh));\n    padding-top: calc(1 * var(--vh));\n    height: calc(65 * var(--vh));\n    border: solid 1px darkslategray;\n    border-top: none;\n    background: lightsteelblue;\n    overflow-y: scroll;\n    width: ",";\n"]);return B=function(){return e},e}var F=v.a.div(B(),(function(){return window.innerHeight<window.innerWidth?"calc((90vw - 20 * var(--vh)) / 3)":"calc((135 * var(--vh) - 20 * var(--vh)) / 3);"})),q=n(45);function V(){var e=Object(d.a)(["\n    list-style: none;\n    padding-left: 0;\n"]);return V=function(){return e},e}var $=v.a.ul(V()),K=n(205);function Q(){var e=Object(d.a)(["\n    list-style: none;\n"]);return Q=function(){return e},e}var X=v.a.li(Q()),Y=n(25),Z=n.n(Y),ee=n(198),te=n(206),ne=n(103),ae=n.n(ne),re=n(197),ie=Object(q.c)((function(){return r.a.createElement(re.a,{style:{padding:"calc(var(--vh))",minWidth:"calc(2.5 * var(--vh))",marginRight:"calc(1 * var(--vh))"}},r.a.createElement(ae.a,{style:{fontSize:"calc(2.5 * var(--vh))",padding:"0"}}))})),ce=Z()({label:{padding:"0 calc(1 * var(--vh))"}})(te.a),oe=function(e){return r.a.createElement(j,{style:{padding:"calc(1 * var(--vh)) 0 0 calc(5 * var(--vh))"}},r.a.createElement(ce,{style:{fontSize:"calc(1.2 * var(--vh))",height:"calc(2.5 * var(--vh))",marginTop:"calc(0.5 * var(--vh))",color:"white",background:e.degreeToColorMap[e.item.degree]},label:e.item.degree}),r.a.createElement(ce,{style:{fontSize:"calc(1.2 * var(--vh))",marginLeft:"calc(0.5 * var(--vh))",height:"calc(2.5 * var(--vh))",marginTop:"calc(0.5 * var(--vh))",color:"white",background:"rgba(".concat(Math.floor(220-220*parseInt(e.item.completeness)/100),",20,").concat(Math.floor(195*parseInt(e.item.completeness)/100+60),",1)")},label:e.item.completeness+"%"}),r.a.createElement(ce,{style:{fontSize:"calc(1.2 * var(--vh))",marginLeft:"calc(0.5 * var(--vh))",height:"calc(2.5 * var(--vh))",marginTop:"calc(0.5 * var(--vh))"},label:new Date(new Date(e.item.dead_line)-new Date).getDate()-1+"days"}),r.a.createElement(ee.a,{style:{padding:"0"}},r.a.createElement(ie,null)))},le=n(204),se=n(199);function de(){var e=Object(d.a)(["\n    outline: none;\n    border: none;\n    font-size: calc(2.0 * var(--vh));\n    padding-left: calc(1 * var(--vh));\n    resize: none;\n    color: black;\n    font-weight: bold;\n    width: ",";\n"]);return de=function(){return e},e}var ve=v.a.input(de(),(function(){return window.innerHeight<window.innerWidth?"calc(((90vw - 20 * var(--vh)) / 3 - (5 * 2 * var(--vh))))":"calc((135 * var(--vh) - 20 * var(--vh)) / 3 - (6 * 2 * var(--vh)));"})),ue=function(e){return r.a.createElement(se.a,{onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},style:{marginLeft:0,height:"calc(1.5 * var(--vh))",padding:"calc(1 * var(--vh))",fontSize:"calc(1.5 * var(--vh))"},control:r.a.createElement(le.a,{value:e.item.id,style:{marginTop:"calc(4 * var(--vh))",fontSize:"calc(1.5 * var(--vh))",width:0,transform:"".concat(window.innerHeight>window.innerWidth?"scale(0.8, 0.8)":"scale(1,1)")},checked:e.choiced.includes(e.item.id),onClick:function(t){var n=parseInt(t.target.value);e.choiced.includes(n)?e.setChoice(e.choiced.filter((function(e){return e!==n}))):e.setChoice(e.choiced.concat([n]))}}),label:r.a.createElement(ve,{value:e.item.title,onChange:function(t){var n=t.target.value;e.setList(e.saveList("title",n,e.item.id,e.list))}})})},he=n(200),ge=n(104),fe=n.n(ge),me=Z()({expandIcon:{padding:0},content:{display:"".concat((window.innerHeight,window.innerWidth,"block"))}})(he.a),pe=Z()({root:{padding:"0"}})(fe.a),ye=function(e){return r.a.createElement(me,{expandIcon:r.a.createElement(pe,{style:{fontSize:"calc(2.5 * var(--vh))"}}),style:{paddingLeft:0}},e.children)},we=function(e){return r.a.createElement(ye,null,r.a.createElement(ue,{item:e.item,choiced:e.choiced,setList:e.setList,setChoice:e.setChoice,category:e.category,list:e.list,saveList:e.saveList}),r.a.createElement(oe,{item:e.item,degreeToColorMap:e.degreeToColorMap}))},be=n(202),Le=n(167);function Ee(){var e=Object(d.a)(["\n    margin-bottom: calc(5 * var(--vh));\n    outline: none;\n    display: block;\n    border: none;\n    font-size: calc(2 * var(--vh));\n    width: 90%;\n    resize: none;\n    text-wrap: nowrap;\n    overflow-wrap: break-word;\n    height: auto;\n    padding: 0;\n"]);return Ee=function(){return e},e}var Se=v.a.textarea(Ee()),Oe=function(e){return r.a.createElement(Se,{value:e.item.description,onChange:function(t){t.target.style.height="10px",t.target.style.height=String(t.target.scrollHeight)+"px";var n=t.target.value;e.setList(e.saveList("description",n,e.item.id,e.list))}})},Ce=n(203),ke=Z()({root:{fontSize:"calc(1.5 * var(--vh))"}})(Ce.a),xe=function(e){return r.a.createElement(ke,{label:r.a.createElement("div",{style:{fontSize:"calc(2.5 * var(--vh))",color:"black",lineHeight:"calc(0 * var(--vh))"}},"Dead Line"),type:"datetime-local",style:{marginTop:"calc(2 * var(--vh))"},defaultValue:e.item.dead_line.replace(/\//g,"-").replace(" ","T"),InputLabelProps:{shrink:!0},onChange:function(t){var n=t.target.value.replace(/-/g,"/").replace("T"," ");e.setList(e.saveList("dead_line",n,e.item.id,e.list))}})},je=n(207),De=n(105),Te=Z()({root:{marginTop:"".concat(window.innerHeight>window.innerWidth?"calc(-1.5 * var(--vh))":"0"),width:"30%"},valueLabel:{fontSize:"calc(1.5 * calc(var(--vh)))"}})(je.a),ze=function(e){return r.a.createElement(j,{style:{marginBottom:"calc(2 * var(--vh))",fontSize:"calc(1.5 * var(--vh))"}},r.a.createElement("div",{style:{fontSize:"calc(2.0 * var(--vh))",marginRight:"calc(1 * var(--vh))",color:"black"}},"Completeness:"),r.a.createElement(G.a,{style:{fontSize:"calc(2.5 * var(--vh))",marginRight:"calc(1 * var(--vh))"}}),r.a.createElement(Te,{defaultValue:e.item.completeness,"aria-labelledby":"discrete-slider-always",step:1,valueLabelDisplay:"auto",onChange:Object(De.a)(100,(function(t,n){Array.isArray(n)||(0===n||n)&&e.setList(e.saveList("completeness",n,e.item.id,e.list))}),!1)}),r.a.createElement("div",{style:{fontSize:"calc(2.0 * var(--vh))",marginLeft:"calc(2 * var(--vh))",width:"calc(5 * var(--vh))",color:"black"}},"[%]"))},Ne=Z()({label:{padding:"0 calc(1 * var(--vh))"}})(te.a),Re=function(e){return r.a.createElement(j,{style:{flexWrap:"wrap"}},e.degrees.map((function(t){return r.a.createElement(Ne,{key:"ch-".concat(t),label:t,style:{marginBottom:"calc(1.5 * var(--vh))",marginRight:"calc(0.5 * var(--vh))",height:"calc(2.5 * var(--vh))",lineHeight:"calc(2.6 * var(--vh))",fontSize:"calc(1.2 * var(--vh))",color:e.item.degree!==t?"rgba(0,0,0,0.87)":"white",background:e.item.degree!==t?"#e0e0e0":e.degreeToColorMap[e.item.degree]},onClick:function(){e.setList(e.saveList("degree",t,e.item.id,e.list))}})})))},Me=function(e){return r.a.createElement(be.a,{style:{padding:"calc(1.5 * var(--vh))"}},r.a.createElement(Le.a,{component:"div",color:"textSecondary"},r.a.createElement(Oe,{item:e.item,setList:e.setList,saveList:e.saveList,list:e.list}),r.a.createElement(ze,{item:e.item,setList:e.setList,saveList:e.saveList,list:e.list}),r.a.createElement(Re,{degrees:e.degrees,degreeToColorMap:e.degreeToColorMap,item:e.item,setList:e.setList,saveList:e.saveList,list:e.list}),r.a.createElement(xe,{item:e.item,setList:e.setList,saveList:e.saveList,list:e.list})))},We=Object(q.b)((function(e){return r.a.createElement(X,{tabIndex:0},r.a.createElement(K.a,{key:"ac-".concat(e.index,"-").concat(e.item.id),style:{overflow:"scroll",marginTop:"calc(1 * var(--vh))"}},r.a.createElement(we,{item:e.item,choiced:e.choiced,setList:e.setList,setChoice:e.setChoice,category:e.category,list:e.list,saveList:e.saveList,degreeToColorMap:e.degreeToColorMap}),r.a.createElement(Me,{item:e.item,setList:e.setList,saveList:e.saveList,list:e.list,degreeToColorMap:e.degreeToColorMap,degrees:e.degrees})))})),Ie=Object(q.a)((function(e){return r.a.createElement($,null,e.list.filter((function(t){return t.category===e.category})).map((function(t,n){return r.a.createElement(We,{key:"item-".concat(e.category,"-").concat(n),collection:e.category,index:n,item:t,setCategorizedList:e.setCategorizedList,list:e.list,category:e.category,choiced:e.choiced,setList:e.setList,setChoice:e.setChoice,saveList:e.saveList,degreeToColorMap:e.degreeToColorMap,degrees:e.degrees})})))})),Je=function(e){return r.a.createElement(F,null,r.a.createElement(Ie,{onSortEnd:function(t){var n=t.oldIndex,a=t.newIndex,r=(t.collection,e.list.filter((function(t){return t.category===e.category})));console.log(r),e.setList(e.exchangeList(r[n].id,r[a].id,e.list))},useDragHandle:!0,lookAxis:"y",list:e.list,category:e.category,choiced:e.choiced,setList:e.setList,setChoice:e.setChoice,saveList:e.saveList,degreeToColorMap:e.degreeToColorMap,degrees:e.degrees}))},Pe=function(e,t){var n=window.navigator.language;return[{id:e,title:"sample title",description:"sample description",dead_line:new Date((new Date).setDate((new Date).getDate()+7)).toLocaleString(n).split(" ").map((function(e,t){return 0===t?e.split("/").map((function(e){return 1===e.length?"0"+e:e})).join("/"):e.split(":").map((function(e){return 1===e.length?"0"+e:e})).join(":")})).join(" "),degree:"LOW",project_id:"",completeness:0,category:t,created:(new Date).toLocaleString(n)}]},He=function(e,t,n){var a,r,i=JSON.parse(JSON.stringify(n));if(e===t)return i;if(i.some((function(t,n){return t.id===e&&(a=n,!0)})),0!==a&&!a)return i;if(i.some((function(e,n){return e.id===t&&(r=n,!0)})),0!==r&&!r)return i;var c=i[a],o=i[r];return i[r]=c,i[a]=o,localStorage.todoDatas=JSON.stringify(i),i},Ae=function(e,t){var n=t.map((function(e){return e.id})),a=0!==t.length?function e(t,n,a){var r=t+1+Math.floor(n/2),i=a.filter((function(e){return e<r})),c=a.filter((function(e){return e>=r})),o=i.length;return 0===n?t:o===r-t?e(r,n-o,c):e(t,o,i)}(0,n.length,n):0,r=t.concat(Pe(a,e));return localStorage.todoDatas=JSON.stringify(r),r},Ge=function(e,t){var n=t.filter((function(t){return!e.includes(t.id)}));return localStorage.todoDatas=JSON.stringify(n),n},_e=function(e,t,n,a){console.log("savedList");var r,i=JSON.parse(JSON.stringify(a));return i.some((function(e,t){return e.id===n&&(r=t,!0)})),0===r||r?("PROGRESS"===t&&"TODO"!==i[r][e]||"DONE"===t&&"PROGRESS"!==i[r][e]||(i[r][e]=t,localStorage.todoDatas=JSON.stringify(i)),i):i},Ue=function(e,t,n,a){var r=JSON.parse(JSON.stringify(a));return n.forEach((function(n){var a;r.some((function(e,t){return e.id===n&&(a=t,!0)})),(0===a||a)&&("PROGRESS"===t&&"TODO"!==r[a][e]||"DONE"===t&&"PROGRESS"!==r[a][e]||(r[a][e]=t))})),localStorage.todoDatas=JSON.stringify(r),r},Be=function(){s()({url:"http://localhost:5001/zarashi/us-central1/graphql",method:"POST",headers:{"Content-Type":"application/json",Accept:"*/*"},data:{operationName:null,query:"\n            query {\n                books {\n                    title\n                }\n            }\n        ",variables:{}}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));var e=n(94).version;localStorage.appVersion=e;var t=localStorage.todoDatas&&0!==JSON.parse(localStorage.todoDatas).length?JSON.parse(localStorage.todoDatas):Pe(0,"TODO"),i=["TODO","PROGRESS","DONE"],c=["LOW","MEDIUM","HIGH","CRITICAL","PENDING"],l={CRITICAL:"red",HIGH:"orange",MEDIUM:"green",PENDING:"indigo",LOW:"blue"},d=Object(a.useState)(t),v=Object(o.a)(d,2),u=v[0],g=v[1],m=Object(a.useState)([]),p=Object(o.a)(m,2),y=p[0],w=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(f,null,r.a.createElement(h,null,i.map((function(e){return r.a.createElement(U,{key:"mtc-".concat(e),list:u,category:e,choiced:y,setList:g,setChoice:w,addList:Ae,deleteList:Ge,saveLists:Ue})}))),r.a.createElement(h,null,i.map((function(e){return r.a.createElement(Je,{key:"mt-".concat(e),list:u,category:e,choiced:y,setList:g,setChoice:w,saveList:_e,exchangeList:He,degrees:c,degreeToColorMap:l})})))))},Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function qe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Be,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tod-o",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/tod-o","/service-worker.js");Fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):qe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):qe(t,e)}))}}()},94:function(e){e.exports=JSON.parse('{"name":"tod-o","version":"0.1.0","private":true,"dependencies":{"@emotion/core":"^10.0.28","@emotion/styled":"^10.0.27","@material-ui/core":"^4.11.0","@material-ui/icons":"^4.9.1","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","@types/jest":"^24.0.0","@types/node":"^12.0.0","@types/react":"^16.9.0","@types/react-dom":"^16.9.0","axios":"^0.19.2","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.1","react-sortable-hoc":"^1.11.0","throttle-debounce":"^2.2.1","typescript":"~3.7.2"},"scripts":{"start":"react-scripts start --experimental-modules","build":"npm prune && react-scripts build","test":"react-scripts test","eject":"react-scripts eject","analyze":"node scripts/analyze.js","pre-deploy":"rm -rf docs && npm run build && mv build docs","git-auto":"git add --all && git commit -m autoPush && git push"},"homepage":"/tod-o/","eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"progress-bar-webpack-plugin":"^2.1.0","webpack-bundle-analyzer":"^3.8.0"}}')},99:function(e,t,n){e.exports=n.p+"static/media/sea-lion.2f163542.svg"}},[[117,1,2]]]);
//# sourceMappingURL=main.5d2a2d50.chunk.js.map