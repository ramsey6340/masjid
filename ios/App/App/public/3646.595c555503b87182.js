"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3646],{3646:(P,r,o)=>{o.r(r),o.d(r,{TestPageModule:()=>h});var d=o(6814),f=o(95),i=o(9843),u=o(1430),g=o(5861),e=o(9468),p=o(5171);const m=[{path:"",component:(()=>{var t;class l{constructor(n){this.recitationService=n}ngOnInit(){}uploadFile(){var n=this;return(0,g.Z)(function*(){const a=document.getElementById("fileInput");if(a.files&&a.files.length>0){const c=a.files[0];console.log("Nom du fichier :",c.name),console.log("Taille du fichier :",c.size,"octets");const v={id:null,apiUrl:null,duration:0,readerId:"DMfFKyFucSDh0oYYbDzN",recitationNumber:114,surah:null,downloadUrl:null};yield n.recitationService.addRecitation(v,c)}else console.log("Aucun fichier s\xe9lectionn\xe9.")})()}}return(t=l).\u0275fac=function(n){return new(n||t)(e.Y36(p.g))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-test"]],decls:12,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["type","file","id","fileInput","accept",".mp3"],[3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"sal"),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e._uU(8,"Hello World"),e.qZA()()(),e._UZ(9,"input",4),e.TgZ(10,"button",5),e.NdJ("click",function(){return a.uploadFile()}),e._uU(11,"Upload"),e.qZA()()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0))},dependencies:[i.W2,i.Gu,i.wd,i.sr]}),l})()}];let T=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(m),u.Bz]}),l})(),h=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,f.u5,i.Pc,T]}),l})()}}]);