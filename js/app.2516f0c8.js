(function(e){function t(t){for(var n,c,i=t[0],s=t[1],u=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/tutorial-rest-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={id:"app",class:"container"},o=Object(n["e"])("div",{class:"row"},[Object(n["e"])("div",{class:"col-md-12 mt-2"},[Object(n["e"])("h1",null,"Usuarios")])],-1),c={class:"row"},i={class:"col-md-12"};function s(e,t,r,s,u,l){var d=Object(n["j"])("formulario-usuario"),b=Object(n["j"])("tabla-usuarios");return Object(n["f"])(),Object(n["c"])("div",a,[o,Object(n["e"])("div",c,[Object(n["e"])("div",i,[Object(n["e"])(d,{onCrearUsuario:l.postUsuario},null,8,["onCrearUsuario"]),Object(n["e"])(b,{usuarios:u.usuarios,onEliminarUsuario:l.deleteUsuario,onActualizarUsuario:l.putUsuario},null,8,["usuarios","onEliminarUsuario","onActualizarUsuario"])])])])}r("99af"),r("4de4"),r("d81d"),r("d3b7");var u=r("2909"),l=(r("96cf"),r("1da1")),d=(r("b0c0"),{id:"tabla-usuarios"}),b={key:0,class:"alert alert-info",role:"alert"},p={class:"table"},f=Object(n["e"])("thead",null,[Object(n["e"])("tr",null,[Object(n["e"])("th",null,"Nombre"),Object(n["e"])("th",null,"Email"),Object(n["e"])("th",null,"Acciones")])],-1),m={key:0},j={key:1},O={key:2},h={key:3},v={key:4},y={key:5};function g(e,t,r,a,o,c){return Object(n["f"])(),Object(n["c"])("div",d,[r.usuarios.length?Object(n["d"])("",!0):(Object(n["f"])(),Object(n["c"])("div",b," No se han agregado usuarios ")),Object(n["e"])("table",p,[f,Object(n["e"])("tbody",null,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(r.usuarios,(function(t){return Object(n["f"])(),Object(n["c"])("tr",{key:t.id},[o.editando===t.id?(Object(n["f"])(),Object(n["c"])("td",m,[Object(n["m"])(Object(n["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(e){return t.name=e}},null,8,["onUpdate:modelValue"]),[[n["l"],t.name]])])):(Object(n["f"])(),Object(n["c"])("td",j,Object(n["k"])(t.name),1)),o.editando===t.id?(Object(n["f"])(),Object(n["c"])("td",O,[Object(n["m"])(Object(n["e"])("input",{type:"email",class:"form-control","onUpdate:modelValue":function(e){return t.email=e}},null,8,["onUpdate:modelValue"]),[[n["l"],t.email]])])):(Object(n["f"])(),Object(n["c"])("td",h,Object(n["k"])(t.email),1)),o.editando===t.id?(Object(n["f"])(),Object(n["c"])("td",v,[Object(n["e"])("button",{class:"btn btn-success",onClick:function(e){return c.guardarUsuario(t)}},"💾 Guardar",8,["onClick"]),Object(n["e"])("button",{class:"btn btn-secondary ml-2",onClick:function(e){return c.cancelarEdicion(t)}},"❌ Cancelar",8,["onClick"])])):(Object(n["f"])(),Object(n["c"])("td",y,[Object(n["e"])("button",{class:"btn btn-info",onClick:function(e){return c.editarUsuario(t)}},"✏️ Editar",8,["onClick"]),Object(n["e"])("button",{class:"btn btn-danger ml-2",onClick:function(r){return e.$emit("eliminar-usuario",t)}},"🗑️ Eliminar",8,["onClick"])]))])})),128))])])])}var k={name:"tabla-usuarios",props:{usuarios:Array},data:function(){return{editando:null}},methods:{editarUsuario:function(e){this.usuarioEditado=Object.assign({},e),this.editando=e.id},guardarUsuario:function(e){e.name.length&&e.email.length&&(this.$emit("actualizar-usuario",e),this.editando=null)},cancelarEdicion:function(e){Object.assign(e,this.usuarioEditado),this.editando=null}}};k.render=g;var U=k,w=Object(n["o"])("data-v-165b2b02");Object(n["h"])("data-v-165b2b02");var x={id:"formulario-usuario"},E={class:"container"},C={class:"row"},P={class:"col-md-4"},S={class:"form-group"},R=Object(n["e"])("label",null,"Nombre",-1),T={class:"col-md-4"},_={class:"form-group"},F=Object(n["e"])("label",null,"Email",-1),I=Object(n["e"])("div",{class:"row"},[Object(n["e"])("div",{class:"col-md-4"},[Object(n["e"])("div",{class:"form-group"},[Object(n["e"])("button",{class:"btn btn-primary"},"Añadir usuario")])])],-1),V={class:"container"},A={class:"row"},N={class:"col-md-12"},J={key:0,class:"alert alert-danger",role:"alert"},M={key:1,class:"alert alert-success",role:"alert"};Object(n["g"])();var $=w((function(e,t,r,a,o,c){return Object(n["f"])(),Object(n["c"])("div",x,[Object(n["e"])("form",{onSubmit:t[6]||(t[6]=Object(n["n"])((function(){return c.enviarFormulario.apply(c,arguments)}),["prevent"]))},[Object(n["e"])("div",E,[Object(n["e"])("div",C,[Object(n["e"])("div",P,[Object(n["e"])("div",S,[R,Object(n["m"])(Object(n["e"])("input",{ref:"name","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.usuario.name=e}),type:"text",class:["form-control",{"is-invalid":o.procesando&&e.nombreInvalido}],onFocus:t[2]||(t[2]=function(){return c.resetEstado.apply(c,arguments)}),onKeypress:t[3]||(t[3]=function(){return c.resetEstado.apply(c,arguments)})},null,34),[[n["l"],o.usuario.name]])])]),Object(n["e"])("div",T,[Object(n["e"])("div",_,[F,Object(n["m"])(Object(n["e"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.usuario.email=e}),type:"email",class:[{"is-invalid":o.procesando&&c.emailInvalido},"form-control"],onFocus:t[5]||(t[5]=function(){return c.resetEstado.apply(c,arguments)})},null,34),[[n["l"],o.usuario.email]])])])]),I]),Object(n["e"])("div",V,[Object(n["e"])("div",A,[Object(n["e"])("div",N,[o.error&&o.procesando?(Object(n["f"])(),Object(n["c"])("div",J," Debes rellenar todos los campos! ")):Object(n["d"])("",!0),o.correcto?(Object(n["f"])(),Object(n["c"])("div",M," El usuario ha sido agregada correctamente! ")):Object(n["d"])("",!0)])])])],32)])})),z={name:"formulario-usuario",data:function(){return{procesando:!1,correcto:!1,error:!1,usuario:{name:"",email:""}}},methods:{enviarFormulario:function(){this.procesando=!0,this.resetEstado(),this.nameInvalido||this.emailInvalido?this.error=!0:(this.$emit("crear-usuario",this.usuario),this.$refs.name.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.usuario={name:"",email:""})},resetEstado:function(){this.correcto=!1,this.error=!1}},computed:{nameInvalido:function(){return this.usuario.name.length<1},emailInvalido:function(){return this.usuario.email.length<1}}};r("b9f1");z.render=$,z.__scopeId="data-v-165b2b02";var D=z,G={name:"app",data:function(){return{usuarios:[]}},components:{TablaUsuarios:U,FormularioUsuario:D},methods:{getUsuarios:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return r=t.sent,t.next=6,r.json();case 6:e.usuarios=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},postUsuario:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return n=r.sent,r.next=6,n.json();case 6:a=r.sent,t.usuarios=[].concat(Object(u["a"])(t.usuarios),[a]),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},putUsuario:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return n=r.sent,r.next=6,n.json();case 6:a=r.sent,t.usuarios=t.usuarios.map((function(t){return t.id===e.id?a:t})),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteUsuario:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e.id),{method:"DELETE"});case 3:t.usuarios=t.usuarios.filter((function(t){return t.id!==e.id})),r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](0),console.error(r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()}},mounted:function(){this.getUsuarios()}};G.render=s;var K=G;Object(n["b"])(K).mount("#app")},b9f1:function(e,t,r){"use strict";r("c62b")},c62b:function(e,t,r){}});
//# sourceMappingURL=app.2516f0c8.js.map