(this.webpackJsonpplayerhq=this.webpackJsonpplayerhq||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"avatars":[{"src":"https://res.cloudinary.com/arenagoodgame/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1626556232/arena_avatars/1-04_os5nmj.jpg"},{"src":"https://res.cloudinary.com/arenagoodgame/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1626556388/arena_avatars/extended_1_07_gnff5d.jpg"},{"src":"https://res.cloudinary.com/arenagoodgame/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1626556383/arena_avatars/18961875_wkxko9.jpg"},{"src":"https://res.cloudinary.com/arenagoodgame/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1626556225/arena_avatars/2203_vxmevv.jpg"},{"src":"https://res.cloudinary.com/arenagoodgame/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1626556382/arena_avatars/18514975_ahbwhz.jpg"}]}')},32:function(e){e.exports=JSON.parse('{"banners":[{"src":"https://res.cloudinary.com/arenagoodgame/image/upload/v1626557301/arena_banners/banner_1.jpg"},{"src":"https://res.cloudinary.com/arenagoodgame/image/upload/v1626557297/arena_banners/banner_2.jpg"},{"src":"https://res.cloudinary.com/arenagoodgame/image/upload/v1626557296/arena_banners/banner_3.jpg"}]}')},39:function(e,t,a){},40:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(31),i=a.n(r),c=(a(39),a(40),a(2)),o=a(3),l=a.n(o),d=a(9),u=a(10),p=a(11),h=a(13),j=a(12),b=a(20),m=a.n(b);m.a.defaults.withCredentials=!0;var x=m.a.create({baseURL:"https://arena-gg.herokuapp.com/api",timeout:1e4}),g=function(e){return x.post("/users/findUsersByID",e)},f=function(){return x.get("/friendRequests/friendRequestsFrom")},v=function(){return x.get("/friendRequests/friendRequestsTo")},O=function(e){return x.patch("/friendRequests/createFriendRequest",e)},y=function(e){return x.patch("/friendRequests/rejectFriendRequest",e)},C=function(e){return x.patch("/friendRequests/acceptFriendRequest",e)},D=a(0),k=function(e){var t=e.message,a=void 0===t?"Message":t,s=e.username,n=void 0===s?"user":s,r=e.userOnPress,i=void 0===r?function(){}:r,c=e.rejectOnPress,o=void 0===c?function(){}:c,l=e.acceptOnPress,d=void 0===l?function(){}:l,u=e.disabled,p=void 0!==u&&u,h=e.avatarSrc,j=void 0===h?"https://res.cloudinary.com/arenagoodgame/image/upl\u2026:262c35/v1626556232/arena_avatars/1-04_os5nmj.jpg":h;return Object(D.jsxs)("li",{class:"list-group-item bg-transparent",style:{display:"flex","flex-direction":"column"},children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("img",{src:j,style:{height:35,"margin-right":5,"border-radius":"50%"}}),Object(D.jsx)("a",{onClick:i,disabled:p,children:n})]}),Object(D.jsx)("div",{children:Object(D.jsx)("span",{style:{"margin-right":10},children:a})}),Object(D.jsxs)("div",{children:[Object(D.jsx)("button",{disabled:p,className:"btn btn-primary",onClick:d,style:{"margin-right":10,fontSize:"0.8em"},children:"Aceptar"}),Object(D.jsx)("button",{disabled:p,className:"btn btn-primary",onClick:o,style:{fontSize:"0.8em"},children:"Rechazar"})]})]})},S=function(e){var t=e.text,a=void 0===t?"Send":t,s=e.type,n=void 0===s?"primary":s,r=e.onPress,i=void 0===r?function(){}:r,c=e.disabled,o=e.displayed,l=void 0===o?"visibility":o;return Object(D.jsx)("button",{display:l,disabled:c,className:"btn btn-".concat(n),onClick:i,children:a})},w=function(e){var t=e.text,a=void 0===t?"User":t,s=e.onPress,n=void 0===s?function(){}:s,r=e.disabled,i=void 0!==r&&r,c=e.avatarSrc,o=void 0===c?"https://res.cloudinary.com/arenagoodgame/image/upl\u2026:262c35/v1626556232/arena_avatars/1-04_os5nmj.jpg":c;return Object(D.jsxs)("li",{class:"list-group-item bg-transparent",style:{display:"flex","flex-direction":"row","flex-wrap":"nowrap","align-content":"space-between"},children:[Object(D.jsx)("img",{src:o,style:{height:50,"margin-right":5,"border-radius":"50%"}}),Object(D.jsx)("a",{onClick:n,disabled:i,children:a})]})},R=a(14),N=a(32),U=(a(61),function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={user:JSON.parse(localStorage.getItem("user"))||{},isOpenAdmin:!1,channelsDisplay:{discordDisplay:"none",twitchDisplay:"none",skypeDisplay:"none",xboxGamertagDisplay:"none",steamUsernameDisplay:"none",playstationUsernameDisplay:"none",nintendoUsernameDisplay:"none"},controllerDisplay:{friendsDisplay:"none",friendRequestDisplay:"none",editBtnDisplay:"none",sendFriendRequestBtnDisplay:"none",deleteFriendBtnDisplay:"none"},_id:"",username:"",avatar:"",favoriteGame:"",intereses:"",platforms:"",discord:"",twitch:"",skype:"",xboxGamertag:"",steamUsername:"",playstationUsername:"",nintendoUsername:"",_friendsIds:[],_friendsData:[],_friendRequests:[],loaded:!1},e.fillFriendRequestData=function(){var t=Object(d.a)(l.a.mark((function t(a,s){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={},t.next=4,g({_id:a});case 4:r=t.sent,n.username=r.data.result.username,n.avatar=r.data.result.avatar,n.friendRequestId=s,e.state._friendRequests.push(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}(),e.fillFriendsUserData=function(){var t=Object(d.a)(l.a.mark((function t(a){var s,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s={},t.next=4,g({_id:a});case 4:n=t.sent,s.username=n.data.result.username,s.avatar=n.data.result.avatar,s._id=n.data.result._id,e.state._friendsData.push(s),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),e.getDataInit=Object(d.a)(l.a.mark((function t(){var a,s,n,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("USER",e.state.user),a=e.state.user,s=e.props.history,t.prev=3,t.next=6,g({_id:e.props.match.params.id});case 6:return n=t.sent,t.next=9,v();case 9:return r=t.sent,t.next=12,f();case 12:return i=t.sent,console.log("FRIEND REQUESTS TO",r),console.log("FRIEND REQUESTS FROM",i),t.next=17,r.data.result.map((function(t){e.fillFriendRequestData(t._from,t._id)}));case 17:return t.next=19,n.data.result._friends.map((function(t){e.fillFriendsUserData(t)}));case 19:e.setState({_id:n.data.result._id,username:n.data.result.username,avatar:n.data.result.avatar,favoriteGame:n.data.result.favoriteGame,intereses:n.data.result.intereses,platforms:n.data.result.platforms,discord:n.data.result.discord,twitch:n.data.result.twitch,skype:n.data.result.skype,xboxGamertag:n.data.result.xboxGamertag,steamUsername:n.data.result.steamUsername,playstationUsername:n.data.result.playstationUsername,nintendoUsername:n.data.result.nintendoUsername,_friendsIds:n.data.result._friends}),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(3),s.push("/");case 25:e.setState({channelsDisplay:{discordDisplay:void 0!==e.state.discord?"block":"none",twitchDisplay:void 0!==e.state.twitch?"block":"none",skypeDisplay:void 0!==e.state.skype?"block":"none",xboxGamertagDisplay:void 0!==e.state.xboxGamertag?"block":"none",steamUsernameDisplay:void 0!==e.state.steamUsername?"block":"none",playstationUsernameDisplay:void 0!==e.state.playstationUsername?"block":"none",nintendoUsernameDisplay:void 0!==e.state.nintendoUsername?"block":"none"}}),e.state._id===a._id?e.setState({controllerDisplay:{friendsDisplay:"block",friendRequestDisplay:"block",editBtnDisplay:"block",sendFriendRequestBtnDisplay:"none",deleteFriendBtnDisplay:"none"}}):void 0!==e.state.friends&&e.state._friends.includes(a._id)?e.setState({controllerDisplay:{friendsDisplay:"none",friendRequestDisplay:"none",editBtnDisplay:"none",sendFriendRequestBtnDisplay:"none",deleteFriendBtnDisplay:"block"}}):e.setState({controllerDisplay:{friendsDisplay:"none",friendRequestDisplay:"none",editBtnDisplay:"none",sendFriendRequestBtnDisplay:"block",deleteFriendBtnDisplay:"none"}}),e.setState({loaded:!0});case 28:case"end":return t.stop()}}),t,null,[[3,22]])}))),e.sendFriendRequest=Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.user,t.prev=1,t.next=4,O({_to:a._id});case 4:e.setState({controllerDisplay:{friendsDisplay:"none",friendRequestDisplay:"none",editBtnDisplay:"none",sendFriendRequestBtnDisplay:"none",deleteFriendBtnDisplay:"none"}}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])}))),e.rejectFriendRequest=function(){var t=Object(d.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y({id:a});case 3:return t.next=5,e.getDataInit();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e.acceptFriendRequest=function(){var t=Object(d.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("ID",a),t.prev=1,t.next=4,C({id:a});case 4:return t.next=6,e.getDataInit();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"componentWillMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.user,a=this.props.history,Object.keys(t).length&&void 0!==t||a.push("/"),e.next=5,this.getDataInit();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showRender",value:function(){var e=this;return this.state.loaded?Object(D.jsx)("div",{className:"bodyDiv",children:Object(D.jsxs)("div",{className:"profileContent",children:[Object(D.jsx)("div",{className:"profileTop",style:{backgroundImage:'url("'.concat(N.banners[0].src,'")')},children:Object(D.jsxs)("div",{className:"userProfile",children:[Object(D.jsx)("img",{src:R.avatars[this.state.avatar].src,alt:"avatar"}),Object(D.jsx)("span",{children:this.state.username})]})}),Object(D.jsxs)("div",{className:"profileBottom",children:[Object(D.jsxs)("div",{className:"profileLeft",style:{display:this.state.controllerDisplay.friendsDisplay},children:[Object(D.jsx)("span",{children:"Tus amigos +"}),Object(D.jsx)("ul",{className:"list-group bg-transparent",children:this.state._friendsData.map((function(t){return Object(D.jsx)(w,{text:t.username,avatarSrc:R.avatars[t.avatar].src,onPress:function(){return e.props.history.push("/user/".concat(t._id))}})}))})]}),Object(D.jsxs)("div",{className:"profileMiddle",children:[Object(D.jsxs)("div",{className:"profileData",children:[Object(D.jsx)("span",{className:"dataTitle",children:"Videojuego favorito:"}),Object(D.jsx)("span",{children:this.state.favoriteGame})]}),Object(D.jsxs)("div",{className:"profileData",children:[Object(D.jsx)("span",{className:"dataTitle",children:"Estilo de juego:"}),Object(D.jsx)("span",{children:this.state.intereses[0]})]}),Object(D.jsxs)("div",{className:"profileData",children:[Object(D.jsx)("span",{className:"dataTitle",children:"Plataforma:"}),Object(D.jsx)("span",{children:this.state.platforms})]}),Object(D.jsxs)("div",{className:"profileData",children:[Object(D.jsx)("span",{className:"dataTitle",children:"Canales:"}),Object(D.jsxs)("span",{style:{display:this.state.channelsDisplay.twitchDisplay},children:["Twitch: ",this.state.twitch]}),Object(D.jsxs)("span",{style:{display:this.state.channelsDisplay.discordDisplay},children:["Discord: ",this.state.discord]}),Object(D.jsxs)("span",{style:{display:this.state.channelsDisplay.steamUsernameDisplay},children:["Steam: ",this.state.steamUsername]}),Object(D.jsxs)("span",{style:{display:this.state.channelsDisplay.xboxGamertagDisplay},children:["Xbox Gamertag: ",this.state.xboxGamertag]}),Object(D.jsxs)("span",{style:{display:this.state.channelsDisplay.playstationUsernameDisplay},children:["PSN: ",this.state.playstationUsername]}),Object(D.jsxs)("span",{style:{display:this.state.channelsDisplay.nintendoUsernameDisplay},children:["Nintendo: ",this.state.nintendoUsername]})]})]}),Object(D.jsxs)("div",{className:"profileRight",style:{display:this.state.controllerDisplay.friendRequestDisplay},children:[Object(D.jsx)("span",{className:"profileRightTitle",children:"Solicitudes de amistad"}),Object(D.jsxs)("ul",{className:"list-group bg-transparent",children:[console.log("STATE",this.state),console.log("FRIEND REQUESTS DESDE EL RENDER ",this.state._friendRequests),this.state._friendRequests.map((function(t){return Object(D.jsx)(k,{username:t.username,avatarSrc:R.avatars[t.avatar].src,message:"Quiere ser tu amigo",onPress:function(){return e.props.history.push("/user/".concat(t._from))},acceptOnPress:function(){return e.acceptFriendRequest(t.friendRequestId)},rejectOnPress:function(){return e.rejectFriendRequest(t.friendRequestId)}})}))]})]})]}),Object(D.jsxs)("div",{className:"profileControls",children:[Object(D.jsx)("span",{style:{display:this.state.controllerDisplay.sendFriendRequestBtnDisplay},children:Object(D.jsx)(S,{text:"Enviar solicitud de amistad",onPress:function(){}})}),Object(D.jsx)("span",{style:{display:this.state.controllerDisplay.deleteFriendBtnDisplay},children:Object(D.jsx)(S,{text:"Eliminar amigo",onPress:function(){}})}),Object(D.jsx)("span",{style:{display:this.state.controllerDisplay.editBtnDisplay},children:Object(D.jsx)(S,{text:"Editar mi perfil",onPress:function(){}})}),Object(D.jsx)("span",{style:{display:"block"},children:Object(D.jsx)(S,{text:"test refresh",onPress:function(){return e.setState({loaded:!0})}})})]})]})}):Object(D.jsx)("span",{children:"Loading..."})}},{key:"render",value:function(){return this.showRender()}}]),a}(s.Component)),A=a.p+"static/media/ logo_white.fc3fac6a.png",F=a.p+"static/media/Elipse1.283c3dab.png",_=a.p+"static/media/Elipse2.ff91d788.png",E=a.p+"static/media/GroupPreview.16216825.png",B=a.p+"static/media/DashboardPreview.2bfaf5a3.png",I=(a(62),function(e){var t=e.history;return Object(D.jsxs)("div",{class:"bodyDiv",children:[Object(D.jsx)("img",{class:"elipseUp",src:_,alt:"Elipse"}),Object(D.jsxs)("div",{class:"homeContent",children:[Object(D.jsxs)("div",{class:"leftSide",children:[Object(D.jsx)("img",{src:A,alt:"Logo"}),Object(D.jsx)("img",{src:E,alt:"Group"}),Object(D.jsx)("span",{children:"A place for gamers"})]}),Object(D.jsxs)("div",{class:"rightSide",children:[Object(D.jsx)("img",{src:B,alt:"Dashboard Preview"}),Object(D.jsxs)("div",{class:"accountControls",children:[Object(D.jsx)("div",{children:Object(D.jsxs)("span",{children:[Object(D.jsx)("img",{src:"data:image/png;base64,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",alt:"Profile icon"}),"BIENVENIDO"]})}),Object(D.jsx)(S,{text:"Login",onPress:function(){return t.push("/login")}}),Object(D.jsx)(S,{text:"Signup",onPress:function(){return t.push("/signup")}})]})]})]}),Object(D.jsx)("img",{class:"elipseDown",src:F,alt:"Elipse"})]})}),J=a.p+"static/media/logo_color.81d763e3.png",q=function(){return x.get("/users/popularUsers")},P=function(e){return x.post("/users/findUsers",e)},T=function(e){return x.post("/auth/login",e)},G=function(e){return x.post("/auth/signup",e)},L=function(e){var t=e.type,a=void 0===t?"text":t,s=e.name,n=e.value,r=e.handleChange,i=void 0===r?function(){}:r,c=e.placeholder,o=void 0===c?"":c,l=e.width,d=void 0===l?100:l;return Object(D.jsx)("input",{style:{width:"".concat(d,"%")},type:a,className:"form-control-plaintext",id:s,placeholder:o,name:s,value:n,onChange:i})};a(63);console.log(R.avatars[0].src);var Q=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={user:JSON.parse(localStorage.getItem("user"))||{},isOpenAdmin:!1,userAvatar:"",popularUsers:[],tableResult:[],data:{user:"",platform:"",style:"",favoriteGame:""}},e.getDataInit=Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T({email:"miEmail@email2.com",password:"pass123"});case 3:return t.next=5,q();case 5:a=t.sent,e.setState({popularUsers:a.data.result}),e.setState({userAvatar:R.avatars[e.state.user.avatar].src}),console.log("USER AVATAR",e.state.userAvatar),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),e.handleChange=function(t){var a=e.state.data,s=t.target,n=s.name,r=s.value;a[n]=r,e.setState({data:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.data;console.log(a),""===a.username&&""===a.platform&&""===a.style&&""===a.favoriteGame||Object(d.a)(l.a.mark((function t(){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(a);case 3:s=t.sent,e.setState({tableResult:s.data.result}),console.log(e.state.tableResult),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.user,t=this.props.history;console.log(e),Object.keys(e).length&&void 0!==e||t.push("/"),this.getDataInit()}},{key:"logout",value:function(){var e=this.props.history;x.post("/auth/logout"),e.push("/")}},{key:"render",value:function(){var e=this;return Object(D.jsx)("div",{className:"bodyDiv",children:Object(D.jsxs)("div",{className:"dashboardContent",children:[Object(D.jsxs)("div",{className:"dashboardLeft",children:[Object(D.jsx)("img",{className:"dashboardLogo",src:J,alt:"Logo"}),Object(D.jsx)("div",{className:"popularUsers",children:Object(D.jsx)("ul",{className:"list-group bg-transparent",children:this.state.popularUsers.map((function(t){return Object(D.jsx)(w,{text:t.username,avatarSrc:R.avatars[t.avatar].src,onPress:function(){return e.props.history.push("/user/".concat(t._id))}})}))})})]}),Object(D.jsxs)("div",{className:"dashboardRight",children:[Object(D.jsxs)("div",{className:"head",children:[Object(D.jsx)("span",{children:"Explora"}),Object(D.jsxs)("div",{children:[Object(D.jsx)(w,{text:this.state.user.username,avatarSrc:this.state.userAvatar,onPress:function(){return e.props.history.push("/user/".concat(e.state.user._id))}}),Object(D.jsx)(S,{text:"Logout",onPress:function(){return e.logout()}})]})]}),Object(D.jsxs)("form",{onSubmit:this.handleSubmit,className:"buscador",children:[Object(D.jsx)("span",{children:"\xa1Busca personas para jugar!"}),Object(D.jsxs)("div",{className:"buscadorTop",children:[Object(D.jsxs)("span",{className:"userField",children:[Object(D.jsx)("label",{children:"Usuario:"}),Object(D.jsx)(L,{name:"user",placeholder:"Nombre de usuario",width:"90",handleChange:this.handleChange})]}),Object(D.jsx)(S,{text:"Buscar"})]}),Object(D.jsxs)("div",{className:"buscadorBot",children:[Object(D.jsxs)("span",{className:"platformField",children:[Object(D.jsx)("label",{children:"Plataforma:"}),Object(D.jsxs)("select",{className:"form-select","aria-label":"Plataforma",name:"platform",onChange:this.handleChange,children:[Object(D.jsx)("option",{style:{backgroundColor:"black"},selected:!0,children:"Donde juega"}),Object(D.jsx)("option",{style:{backgroundColor:"black"},value:"Xbox",children:"Xbox"}),Object(D.jsx)("option",{style:{backgroundColor:"black"},value:"Playstation",children:"Playstation"}),Object(D.jsx)("option",{style:{backgroundColor:"black"},value:"Nintendo",children:"Nintendo"}),Object(D.jsx)("option",{style:{backgroundColor:"black"},value:"PC",children:"PC"}),Object(D.jsx)("option",{style:{backgroundColor:"black"},value:"Mobiles",children:"Mobiles"})]})]}),Object(D.jsxs)("span",{className:"styleField",children:[Object(D.jsx)("label",{children:"Estilo:"}),Object(D.jsxs)("select",{className:"form-select","aria-label":"Estilo",name:"style",onChange:this.handleChange,children:[Object(D.jsx)("option",{style:{backgroundColor:"black"},selected:!0,children:"Estilo de juego"}),Object(D.jsx)("option",{style:{backgroundColor:"black"},value:"Casual",children:"Casual"}),Object(D.jsx)("option",{style:{backgroundColor:"black"},value:"Competitivo",children:"Competitivo"}),Object(D.jsx)("option",{style:{backgroundColor:"black"},value:"eSport",children:"eSport"})]})]}),Object(D.jsxs)("span",{className:"gameField",children:[Object(D.jsx)("label",{children:"Juego favorito:"}),Object(D.jsx)(L,{name:"favoriteGame",placeholder:"Juego favorito",width:"80",handleChange:this.handleChange})]})]})]}),Object(D.jsx)("div",{className:"tablaUsuarios",children:Object(D.jsxs)("table",{className:"table table-striped table-dark",children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"col",children:"Usuario"}),Object(D.jsx)("th",{scope:"col",children:"Juego Favorito"}),Object(D.jsx)("th",{scope:"col",children:"Estilo de juego"}),Object(D.jsx)("th",{scope:"col",children:"Donde juega"})]})}),Object(D.jsx)("tbody",{children:this.state.tableResult.map((function(t){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{onClick:function(){return e.props.history.push("/user/".concat(t._id))},children:t.username}),Object(D.jsx)("td",{children:t.favoriteGame}),Object(D.jsx)("td",{children:t.intereses}),Object(D.jsx)("td",{children:t.platforms})]})}))})]})})]})]})})}}]),a}(s.Component),K=(a(64),a.p+"static/media/login_side.9fd57a93.png"),X=a(16),H=function(e){var t=e.textLabel,a=e.type,s=void 0===a?"text":a,n=e.name,r=e.value,i=e.handleChange,c=void 0===i?function(){}:i,o=e.placeholder,l=void 0===o?"":o;return Object(D.jsxs)("div",{className:"mb-3",children:[t&&Object(D.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:t}),Object(D.jsx)("input",{type:s,className:"form-control",id:n,placeholder:l,name:n,value:r,onChange:c})]})},V=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={user:{}},e.handleChange=function(t){var a=e.state.user,s=t.target,n=s.name,r=s.value;a[n]=r,e.setState({user:a})},e.handleSubmit=function(t){var a=e.props,s=a.match,n=a.history,r=e.state.user;t.preventDefault();("/signup"===s.path?G(r):T(r)).then((function(e){localStorage.setItem("user",JSON.stringify(e.data.result)),n.push("/dashboard")})).catch((function(e){console.log("error",e.response)}))},e}return Object(p.a)(a,[{key:"render",value:function(){this.state.user;var e=this.handleChange,t=this.handleSubmit,a=this.props.match;return Object(D.jsxs)("section",{className:"auth-container",children:[Object(D.jsxs)("div",{className:"card",children:[Object(D.jsxs)("form",{onSubmit:t,children:[Object(D.jsx)("img",{src:J,width:"20%"}),"/signup"===a.path&&Object(D.jsx)(H,{name:"username",textLabel:"Nombre",placeholder:"John Snow",handleChange:e}),Object(D.jsx)(H,{name:"email",textLabel:"Correo electronico",placeholder:"j.snow@arena.com",handleChange:e}),Object(D.jsx)(H,{name:"password",textLabel:"Contrase\xf1a",type:"password",placeholder:"\xb7\xb7\xb7\xb7\xb7\xb7",handleChange:e}),"/signup"===a.path&&Object(D.jsx)(H,{name:"confirmPassword",textLabel:"Confirma  tu contrase\xf1a",placeholder:"\xb7\xb7\xb7\xb7\xb7\xb7",handleChange:e}),Object(D.jsx)(S,{text:"Entrar"})]}),Object(D.jsxs)("span",{children:[" ","".concat("/signup"!==a.path?"Aun no":"Ya"," tienes cuenta? |"),Object(D.jsx)(X.b,{to:"/signup"!==a.path?"/signup":"/login",children:"Dale aqui"})]})]}),Object(D.jsx)("img",{src:K,width:"36%"})]})}}]),a}(s.Component),Z=a(34),W=(a(73),a.p,a.p,function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={tagname:"",date:"",platform:""},e.handleChange=function(t){e.setState(Object(Z.a)({},t.target.id,t.target.value))},e}return Object(p.a)(a,[{key:"render",value:function(){return Object(D.jsx)("div",{className:"main",children:Object(D.jsx)("div",{className:"profileBody",children:Object(D.jsxs)("div",{className:"dataContainer",children:[Object(D.jsx)("div",{className:"parties",children:"LAS PARTIES"}),Object(D.jsx)("div",{className:"info",children:Object(D.jsxs)("form",{children:[Object(D.jsxs)("label",{for:"tagname",children:[" Tagname:",Object(D.jsx)("input",{type:"text",id:"tagname",value:this.state.tagname,onChange:this.handleChange})]}),Object(D.jsxs)("label",{for:"birthday",children:[" Fecha de nacimiento:",Object(D.jsx)("input",{type:"date",id:"date",onChange:this.handleChange})]}),Object(D.jsxs)("label",{for:"platform",children:[" Plataforma favorita",Object(D.jsxs)("select",{id:"platform",onChange:this.handleChange,children:[Object(D.jsx)("option",{value:"Xbox",children:"Xbox"}),Object(D.jsx)("option",{value:"Playstation",children:"Playstation"}),Object(D.jsx)("option",{value:"Nintendo",children:"Nintendo"}),Object(D.jsx)("option",{value:"PC",children:"PC"}),Object(D.jsx)("option",{value:"Mobile",children:"Mobile"})]})]}),Object(D.jsxs)("label",{for:"intereses",children:[" Estilo de Juego",Object(D.jsxs)("select",{id:"intereses",onChange:this.handleChange,children:[Object(D.jsx)("option",{value:"Casual",children:"Casual"}),Object(D.jsx)("option",{value:"Competitivo",children:"Competitivo"}),Object(D.jsx)("option",{value:"eSport",children:"eSport"})]})]}),Object(D.jsxs)("label",{for:"country",children:[" Pa\xeds",Object(D.jsxs)("select",{id:"country",onChange:this.handleChange,children:[Object(D.jsx)("option",{value:"Mexico",children:"M\xe9xico"}),Object(D.jsx)("option",{value:"Estados Unidos",children:"Estados Unidos"}),Object(D.jsx)("option",{value:"Canada",children:"Canad\xe1"})]})]}),Object(D.jsxs)("label",{for:"discord",children:[" Usuario de discord:",Object(D.jsx)("input",{type:"text",id:"discord",value:this.state.discord,onChange:this.handleChange})]}),Object(D.jsxs)("label",{for:"twitch",children:[" Usuario de twitch",Object(D.jsx)("input",{type:"text",id:"twitch",value:this.state.twitch,onChange:this.handleChange})]}),Object(D.jsxs)("label",{for:"skype",children:[" Usuario de skype:",Object(D.jsx)("input",{type:"text",id:"skype",value:this.state.skype,onChange:this.handleChange})]}),Object(D.jsxs)("label",{for:"xboxGamertag",children:[" Usuario de xboxGamertag:",Object(D.jsx)("input",{type:"text",id:"xboxGamertag",value:this.state.xboxGamertag,onChange:this.handleChange})]}),Object(D.jsxs)("label",{for:"steamUsername",children:[" Usuario de steamUsername:",Object(D.jsx)("input",{type:"text",id:"steamUsername",value:this.state.steamUsername,onChange:this.handleChange})]}),Object(D.jsxs)("label",{for:"playstationUsername",children:[" Usuario de playstationUsername:",Object(D.jsx)("input",{type:"text",id:"playstationUsername",value:this.state.playstationUsername,onChange:this.handleChange})]}),Object(D.jsxs)("label",{for:"nintendoUsername",children:[" Usuario de nintendoUsername:",Object(D.jsx)("input",{type:"text",id:"nintendoUsername",value:this.state.nintendoUsername,onChange:this.handleChange})]})]})}),Object(D.jsx)("div",{className:"friends",children:"LOS AMIGOS"})]})})})}}]),a}(n.a.Component)),M=function(){return Object(D.jsxs)(c.c,{children:[Object(D.jsx)(c.a,{exact:!0,path:"/",component:I}),Object(D.jsx)(c.a,{exact:!0,path:"/login",component:V}),Object(D.jsx)(c.a,{exact:!0,path:"/signup",component:V}),Object(D.jsx)(c.a,{exact:!0,path:"/editprofile",component:W}),Object(D.jsx)(c.a,{exact:!0,path:"/dashboard",component:Q}),Object(D.jsx)(c.a,{exact:!0,path:"/user/:id",component:U}),Object(D.jsx)(c.a,{exact:!0,path:"/user/edit",component:function(){return Object(D.jsx)("h1",{children:"Bienvenido al perfil de usuario"})}}),Object(D.jsx)(c.a,{exact:!0,path:"/party/:id",component:function(){return Object(D.jsx)("h1",{children:"Bienvenido a una party"})}}),Object(D.jsx)(c.a,{exact:!0,path:"/party/edit",component:function(){return Object(D.jsx)("h1",{children:"Bienvenido a una party"})}})]})};var z=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(M,{})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),r(e),i(e)}))};a(74);i.a.render(Object(D.jsx)(X.a,{children:Object(D.jsx)(z,{})}),document.getElementById("root")),Y()}},[[75,1,2]]]);
//# sourceMappingURL=main.5abb1ef7.chunk.js.map