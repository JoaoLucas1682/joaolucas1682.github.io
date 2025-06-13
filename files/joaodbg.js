// joaoDebugger.js | for joaolucas1682.github.io | minified for best loading

let now=new Date;console.log(`${now} : joaoDebugger initialized`),window.onerror=function(e,o,t,n,l){console.log(`Error:\n${e}\nFile: ${o}, ln: ${t}, col: ${n}\nDetails: ${l}`)};let timer,ctrlPressCount=0;document.addEventListener("keydown",(e=>{"ControlRight"===e.code&&(ctrlPressCount++,4===ctrlPressCount?(console.log("DevTools Debugger Activated by JoaoDebugger"),ctrlPressCount=0):(clearTimeout(timer),timer=setTimeout((()=>{ctrlPressCount=0}),2e3)))})),["load","resize","scroll","focus","blur","beforeunload","contextmenu","mouseleave","mouseenter"].forEach((e=>{window.addEventListener(e,(e=>{let o=new Date;console.log(`${o} : joaoDebugger: ${e.type}`)}))})),console.log(`Site Location: ${window.location.href}`),console.log(`Last Modified: ${document.lastModified}`),console.log(`User Agent: ${window.navigator.userAgent}`);


