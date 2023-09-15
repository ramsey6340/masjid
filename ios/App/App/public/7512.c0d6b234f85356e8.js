"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7512],{7512:(L,g,i)=>{i.r(g),i.d(g,{ListCoranPageModule:()=>Z});var p=i(6814),m=i(95),r=i(9843),d=i(1430),h=i(5861),x=i(217),n=i(9468),f=i(5171),C=i(9862);const P=function(t,a){return{readerId:t,surahId:a}};function b(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"ion-card")(1,"ion-card-content",6)(2,"div",7)(3,"ion-thumbnail"),n._UZ(4,"img",8),n.TgZ(5,"span",9),n._uU(6),n.qZA()()(),n.TgZ(7,"div",10)(8,"h1"),n._uU(9),n.qZA(),n.TgZ(10,"h2"),n._uU(11),n.qZA()(),n.TgZ(12,"div")(13,"ion-icon",11),n.NdJ("click",function(s){const l=n.CHM(e).$implicit,u=n.oxw();return n.KtG(u.downloadMp3(s,l.downloadUrl,l.recitationNumber.toString()+".mp3"))}),n.qZA()()()()}if(2&t){const e=a.$implicit;n.xp6(1),n.Q6J("queryParams",n.WLB(4,P,e.readerId,e.id)),n.xp6(5),n.Oqu(null==e.surah?null:e.surah.number),n.xp6(3),n.Oqu(null==e.surah?null:e.surah.name),n.xp6(2),n.Oqu(null==e.surah?null:e.surah.englishName)}}let M=(()=>{var t;class a{constructor(o,s,c){this.route=o,this.recitationService=s,this.http=c,this.recitations=[]}ngOnInit(){var o=this;return(0,h.Z)(function*(){const s=o.route.snapshot.params.id;yield o.recitationService.getAllRecitations(s).then(c=>c.subscribe(l=>{o.recitations=l}))})()}downloadMp3(o,s,c){var l=this;return(0,h.Z)(function*(){o.stopPropagation(),yield l.http.get(s,{responseType:"blob"}).subscribe(u=>{(0,x.saveAs)(u,c)})})()}downloadAudioFile(o,s){console.log("commen\xe7ons le t\xe9l\xe9chargement du fichier"),fetch(o).then(c=>c.blob()).then(c=>{const l=window.URL.createObjectURL(c),u=document.createElement("a");u.href=l,u.download=s,document.body.appendChild(u),u.click(),window.URL.revokeObjectURL(l)}).catch(c=>{console.error("Erreur lors du t\xe9l\xe9chargement du fichier :",c)})}}return(t=a).\u0275fac=function(o){return new(o||t)(n.Y36(d.gz),n.Y36(f.g),n.Y36(C.eN))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-list-coran"]],decls:12,vars:5,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],[1,"parallax-img"],[1,"container"],[4,"ngFor","ngForOf"],["routerLink","../player",1,"radio-card",3,"queryParams"],[1,"thumb"],["alt","Silhouette of mountains","src","../../assets/icon/Vector.svg"],[2,"color","black"],["routerLink","player",1,"text"],["size","large","name","arrow-down-outline",3,"click"]],template:function(o,s){1&o&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-back-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"Coran"),n.qZA()()(),n.TgZ(6,"ion-content",2)(7,"div",3)(8,"h1"),n._uU(9,"Coran"),n.qZA()(),n.TgZ(10,"div",4),n.YNc(11,b,14,7,"ion-card",5),n.qZA()()),2&o&&(n.Q6J("translucent",!0),n.xp6(6),n.Q6J("fullscreen",!0),n.xp6(1),n.Udp("background-image","url(../../assets/illustrations/mosquee.jpg)"),n.xp6(4),n.Q6J("ngForOf",s.recitations))},dependencies:[p.sg,r.oU,r.Sm,r.PM,r.FN,r.W2,r.Gu,r.gu,r.Bs,r.wd,r.sr,r.cs,r.YI,d.rH],styles:[".container[_ngcontent-%COMP%]{width:96%;margin:25px auto auto}.container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{flex:1 1 28%;background-size:cover;height:110px;margin:10px 5px;text-align:center}.card-custom[_ngcontent-%COMP%]{padding:5px;box-shadow:10px 10px 5px #aaa;border-radius:10px}.parallax-img[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:center;background-size:cover;height:30vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;color:#fff;border-radius:0 0 40px 40px;background-color:#2c6632}ion-card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;color:#000;margin-bottom:10px}.radio-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 20px;align-items:center}.container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{height:initial;border-radius:30px;border:1px solid #ddd}ion-card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{flex-grow:1;text-align:left;padding-left:10px}.frequence[_ngcontent-%COMP%]{text-decoration:none;color:green}.card-content-ios[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:30px;text-align:right;position:absolute;bottom:0;right:30px}.thumb[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{height:75px;width:75px;border-radius:50%}.thumb[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.thumb[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:10px}.thumb[_ngcontent-%COMP%]{position:relative}.thumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;left:40%;TOP:30%;font-weight:700;font-size:23px}"]}),a})();const v=[{path:"player",component:i(3972).h},{path:":id",component:M}];let y=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[d.Bz.forChild(v),d.Bz]}),a})(),Z=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.ez,m.u5,r.Pc,y]}),a})()}}]);