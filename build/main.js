!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=require("express")},function(t,e,r){const o=r(0).Router();o.use("/api",r(2)),t.exports=o},function(t,e,r){const o=r(0).Router();o.use("/articles",r(3)),t.exports=o},function(t,e,r){const o=r(4).model("Articles"),n=r(0).Router();n.post("/",(t,e,r)=>{const{body:n}=t;if(!n.title)return e.status(422).json({errors:{title:"is required"}});if(!n.author)return e.status(422).json({errors:{author:"is required"}});if(!n.body)return e.status(422).json({errors:{body:"is required"}});const i=new o(n);return i.save().then(()=>e.json({article:i.toJSON()})).catch(r)}),n.get("/",(t,e,r)=>o.find().sort({createdAt:"descending"}).then(t=>e.json({articles:t.map(t=>t.toJSON())})).catch(r)),n.param("id",(t,e,r,n)=>o.findById(n,(o,n)=>o?e.sendStatus(404):n?(t.article=n,r()):void 0).catch(r)),n.get("/:id",(t,e,r)=>e.json({article:t.article.toJSON()})),n.patch("/:id",(t,e,r)=>{const{body:o}=t;return void 0!==o.title&&(t.article.title=o.title),void 0!==o.author&&(t.article.author=o.author),void 0!==o.body&&(t.article.body=o.body),t.article.save().then(()=>e.json({article:t.article.toJSON()})).catch(r)}),n.delete("/:id",(t,e,r)=>o.findByIdAndRemove(t.article._id).then(()=>e.sendStatus(200)).catch(r)),t.exports=n},function(t,e){t.exports=require("mongoose")}]);