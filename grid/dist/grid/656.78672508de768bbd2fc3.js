(self.webpackChunkgrid=self.webpackChunkgrid||[]).push([[656],{1656:(e,t,r)=>{"use strict";r.r(t),r.d(t,{UsersModule:()=>q,usersProviderFactory:()=>T});var s=r(8619),a=r(1116),o=r(9283),i=function(e){return e[e.NoAccess=0]="NoAccess",e[e.Marketing=2]="Marketing",e[e.Author=4]="Author",e[e.Admin=6]="Admin",e}({}),n=r(8512),l=r(9764),u=r(2693);let c=(()=>{class e{constructor(e,t){this.http=e,this.route=t,this.endpoint="https://reqres.in/api/users/",this.ErrorMesage="",this.page=1,this.userServiceData=new n.X({page:1,per_page:0,total:0,total_pages:0,data:[{id:0,email:"",first_name:"Jon",last_name:"Doe",avatar:"",role:i.NoAccess,job:"",updatedAt:"",name:"Jon Doe"}],support:{url:"",text:""}}),this.currentUserServiceData=(0,l.D)(this.userServiceData),console.log("start users"),this.ErrorMesage="loading users",this.load()}load(){console.log("preloading users"),this.ErrorMesage="preloading users",this.route.queryParams.subscribe(e=>{void 0!==e.page?this.page=e.page:this.route.paramMap.subscribe(e=>{if(e.has("page")){const t=e.get("page");this.page=null!=t?+t:this.page}})}),this.GetPage(this.page)}HasUsers(){return void 0!==this.users&&void 0!==this.users.data}GetUsers(){return this.HasUsers()?this.users.data:null}GetErrorMesage(){return this.ErrorMesage}GetPage(e){this.http.get(this.endpoint+"?page="+e).subscribe({next:e=>{console.log(e),this.users=e,this.ErrorMesage="users data has been loaded",this.userServiceData.next(this.users)},error:e=>{this.ErrorMesage=e.error instanceof Error?"critical error loading users: "+e.error.message:"critical error",console.log(this.ErrorMesage)}})}GetProfile(e){return this.http.get(this.endpoint+e)}UpdateProfile(e,t){return this.http.put(this.endpoint+e,t)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(u.eN),s.LFG(o.gz))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),p=(()=>{class e{constructor(e,t){this.templateRef=e,this.viewContainer=t}set repeat(e){let t=this.viewContainer.length;void 0===e&&(e=0);for(let r=this.viewContainer.length;r>e;r--)this.viewContainer.remove(r-1);for(let r=t;r<e;r++)this.viewContainer.createEmbeddedView(this.templateRef,{$implicit:r})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(s.Rgc),s.Y36(s.s_b))},e.\u0275dir=s.lG2({type:e,selectors:[["","repeat",""]],inputs:{repeat:"repeat"}}),e})();function g(e,t){if(1&e&&(s.TgZ(0,"li",3),s.TgZ(1,"a",4),s._uU(2),s.qZA(),s.qZA()),2&e){const e=t.$implicit,r=s.oxw();s.ekj("active",r.page==e+1),s.xp6(1),s.hYB("href","",r.pg_href,"",e+1,"",s.LSH),s.xp6(1),s.Oqu(e+1)}}let d=(()=>{class e{constructor(){this.page=0,this.per_page=0,this.total=0,this.totalPages=0,this.pg_href="users?page=",this.hasPages=!1}ngOnInit(){this.hasPages=void 0!==this.total&&this.total>0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-pagination"]],inputs:{page:"page",per_page:"per_page",total:"total",totalPages:"totalPages",pg_href:"pg_href",hasPages:"hasPages"},decls:5,vars:2,consts:[["aria-label","...",3,"hidden"],[1,"pagination","pagination-lg"],["class","page-item",3,"active",4,"repeat"],[1,"page-item"],[1,"page-link",3,"href"]],template:function(e,t){1&e&&(s.TgZ(0,"p"),s._uU(1,"pagination works!"),s.qZA(),s.TgZ(2,"nav",0),s.TgZ(3,"ul",1),s.YNc(4,g,3,5,"li",2),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.Q6J("hidden",t.hasPages),s.xp6(2),s.Q6J("repeat",t.totalPages))},directives:[p],styles:[""]}),e})();function h(e,t){if(1&e&&(s.TgZ(0,"p"),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij("Users loaded successfuly: ",e.ErroeMessage,"")}}function m(e,t){if(1&e&&(s.TgZ(0,"p"),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij("No users were loaded: ",e.ErroeMessage,"")}}function f(e,t){if(1&e&&(s.TgZ(0,"tr"),s.TgZ(1,"th",7),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.qZA(),s.TgZ(5,"td"),s._uU(6),s.qZA(),s.TgZ(7,"td"),s._uU(8),s.qZA(),s.TgZ(9,"td"),s._UZ(10,"img",8),s.qZA(),s.qZA()),2&e){const e=t.$implicit;s.xp6(2),s.Oqu(e.id),s.xp6(2),s.Oqu(e.first_name),s.xp6(2),s.Oqu(e.last_name),s.xp6(2),s.Oqu(e.email),s.xp6(2),s.s9C("src",e.avatar,s.LSH),s.s9C("alt",e.first_name+e.last_name)}}let v=(()=>{class e{constructor(e,t){this.userService=e,this.cdr=t,this.ErroeMessage="",this.hasUsers=!1,this.pgHref="users?page="}trackItem(e,t){return t.id}get users(){var e;return null===(e=this.currentUserServiceData)||void 0===e?void 0:e.data}get page(){var e;return null===(e=this.currentUserServiceData)||void 0===e?void 0:e.page}get per_page(){var e;return null===(e=this.currentUserServiceData)||void 0===e?void 0:e.per_page}get total(){var e;return null===(e=this.currentUserServiceData)||void 0===e?void 0:e.total}get total_pages(){var e;return null===(e=this.currentUserServiceData)||void 0===e?void 0:e.total_pages}ngOnInit(){this.userService.currentUserServiceData.subscribe(e=>{console.log("logged in user has been updated"),this.hasUsers=this.userService.HasUsers(),this.ErroeMessage=this.userService.GetErrorMesage(),this.currentUserServiceData=e,this.cdr.detectChanges()})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(c),s.Y36(s.sBO))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-users"]],features:[s._Bn([c])],decls:25,vars:13,consts:[[1,"container"],[4,"ngIf","ngIfElse"],["noUsers",""],[1,"table"],["scope","col"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"page","per_page","total","totalPages","pg_href"],["scope","row"],[1,"img-fluid","img-thumbnail","rounded-circle",3,"src","alt"]],template:function(e,t){if(1&e&&(s.TgZ(0,"p"),s._uU(1,"Paginated table of users puled from api"),s.qZA(),s.TgZ(2,"div",0),s.YNc(3,h,2,1,"p",1),s.YNc(4,m,2,1,"ng-template",null,2,s.W1O),s.TgZ(6,"table",3),s.TgZ(7,"thead"),s.TgZ(8,"tr"),s.TgZ(9,"th",4),s._uU(10,"#"),s.qZA(),s.TgZ(11,"th",4),s._uU(12,"First"),s.qZA(),s.TgZ(13,"th",4),s._uU(14,"Last"),s.qZA(),s.TgZ(15,"th",4),s._uU(16,"Email"),s.qZA(),s.TgZ(17,"th",4),s._uU(18,"Avatar"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(19,"tbody"),s.YNc(20,f,11,6,"tr",5),s.qZA(),s.qZA(),s.TgZ(21,"p"),s._uU(22),s.qZA(),s._UZ(23,"app-pagination",6),s.qZA(),s._UZ(24,"router-outlet")),2&e){const e=s.MAs(5);s.xp6(3),s.Q6J("ngIf",t.hasUsers)("ngIfElse",e),s.xp6(17),s.Q6J("ngForOf",t.users)("ngForTrackBy",t.trackItem),s.xp6(2),s.HOy("page: ",t.page,", per page: ",t.per_page,", total: ",t.total,", total pages: ",t.total_pages,""),s.xp6(1),s.Q6J("page",t.page)("per_page",t.per_page)("total",t.total)("totalPages",t.total_pages)("pg_href",t.pgHref)}},directives:[a.O5,a.sg,d,o.lC],styles:[""],changeDetection:0}),e})();var Z=r(3665),U=r(1462);function A(e,t){if(1&e&&(s.TgZ(0,"option",30),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.Q6J("value",e.key),s.xp6(1),s.Oqu(e.name)}}const _=[{path:"",component:v},{path:"user-profile",component:(()=>{class e{constructor(e,t,r,s){this.userProvider=e,this.membershipProvider=t,this.fb=r,this.cdr=s,this.Roles=[{key:i.NoAccess,name:i[i.NoAccess]},{key:i.Author,name:i[i.Author]},{key:i.Admin,name:i[i.Admin]},{key:i.Marketing,name:i[i.Marketing]}],this.currentUser={id:0,email:"",first_name:"Jon",last_name:"Doe",avatar:"",role:i.NoAccess,job:"",updatedAt:"",name:"Jon Doe"},t.hasValidToken()&&e.GetProfile(t.userId).subscribe(e=>{this.currentUser=e.data,this.currentUser.role=i.Admin,this.profileForm=this.userToForm()}),this.profileForm=this.userToForm()}ngOnInit(){this.profileForm=this.userToForm()}update(){const e=this.getUserFromForm();this.userProvider.UpdateProfile(this.membershipProvider.userId,e).subscribe(t=>{var r;this.currentUser.name=e.name,this.currentUser.job=e.job,this.currentUser.updatedAt=t.updatedAt,null===(r=this.profileForm.get("updatedAt"))||void 0===r||r.patchValue(this.currentUser.updatedAt),this.cdr.detectChanges()})}userToForm(){return this.fb.group({email:[this.currentUser.email],id:[this.currentUser.id],name:[this.currentUser.name,U.kI.required],firstname:[this.currentUser.first_name],surname:[this.currentUser.last_name],avatar:[this.currentUser.avatar],role:[this.currentUser.role],job:[this.currentUser.job,U.kI.required],updatedAt:[{value:this.currentUser.updatedAt,disabled:!0}]})}getUserFromForm(){var e,t,r,s;return{email:this.currentUser.email,id:this.currentUser.id,name:null===(t=null===(e=this.profileForm)||void 0===e?void 0:e.get("name"))||void 0===t?void 0:t.value,first_name:this.currentUser.first_name,last_name:this.currentUser.last_name,avatar:this.currentUser.avatar,job:null===(s=null===(r=this.profileForm)||void 0===r?void 0:r.get("job"))||void 0===s?void 0:s.value,updatedAt:this.currentUser.updatedAt,role:this.currentUser.role}}changeRole(e){var t,r;const s=e.target;null===(r=null===(t=this.profileForm)||void 0===t?void 0:t.get("role"))||void 0===r||r.setValue(this.Roles[s.selectedIndex-1].key,{onlySelf:!0})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(c),s.Y36(Z.n),s.Y36(U.qu),s.Y36(s.sBO))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-user-profile"]],features:[s._Bn([c,Z.n])],decls:48,vars:4,consts:[[1,"container"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"col-md-6"],["for","email",1,"form-label"],["type","email","id","email","formControlName","email",1,"form-control"],["for","id",1,"form-label"],["type","text","id","id","formControlName","id",1,"form-control"],[1,"col-6"],["for","name",1,"form-label"],["type","text","id","name","placeholder","name","formControlName","name",1,"form-control"],["for","job",1,"form-label"],["type","text","id","job","placeholder","job","formControlName","job",1,"form-control"],["for","firstname",1,"form-label"],["type","text","id","firstname","placeholder","","formControlName","firstname",1,"form-control"],["for","surname",1,"form-label"],["type","text","id","surname","formControlName","surname",1,"form-control"],[1,"col-md-4"],["for","role",1,"form-label"],["id","role","formControlName","role",1,"form-select","custom-select",3,"change"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-2"],["for","avatar",1,"form-label"],[3,"src"],["type","text","id","avatar","formControlName","avatar",1,"form-control"],[1,"col-12"],[1,"form-check"],["for","updatedAt",1,"form-check-label"],["type","text","id","updatedAt","formControlName","updatedAt",1,"form-control"],["type","submit",1,"btn","btn-primary"],[3,"value"]],template:function(e,t){if(1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"p"),s._uU(2),s.qZA(),s.TgZ(3,"form",1),s.NdJ("ngSubmit",function(){return t.update()}),s.TgZ(4,"div",2),s.TgZ(5,"label",3),s._uU(6,"Email"),s.qZA(),s._UZ(7,"input",4),s.qZA(),s.TgZ(8,"div",2),s.TgZ(9,"label",5),s._uU(10,"Id"),s.qZA(),s._UZ(11,"input",6),s.qZA(),s.TgZ(12,"div",7),s.TgZ(13,"label",8),s._uU(14,"name"),s.qZA(),s._UZ(15,"input",9),s.qZA(),s.TgZ(16,"div",7),s.TgZ(17,"label",10),s._uU(18,"job"),s.qZA(),s._UZ(19,"input",11),s.qZA(),s.TgZ(20,"div",7),s.TgZ(21,"label",12),s._uU(22,"firstname"),s.qZA(),s._UZ(23,"input",13),s.qZA(),s.TgZ(24,"div",2),s.TgZ(25,"label",14),s._uU(26,"surname"),s.qZA(),s._UZ(27,"input",15),s.qZA(),s.TgZ(28,"div",16),s.TgZ(29,"label",17),s._uU(30,"Role"),s.qZA(),s.TgZ(31,"select",18),s.NdJ("change",function(e){return t.changeRole(e)}),s.TgZ(32,"option",19),s._uU(33,"Choose Role"),s.qZA(),s.YNc(34,A,2,2,"option",20),s.qZA(),s.qZA(),s.TgZ(35,"div",21),s.TgZ(36,"label",22),s._uU(37,"Avatar"),s.qZA(),s._UZ(38,"img",23),s._UZ(39,"input",24),s.qZA(),s.TgZ(40,"div",25),s.TgZ(41,"div",26),s.TgZ(42,"label",27),s._uU(43," Updated Date "),s.qZA(),s._UZ(44,"input",28),s.qZA(),s.qZA(),s.TgZ(45,"div",25),s.TgZ(46,"button",29),s._uU(47,"Update"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){let e;s.xp6(2),s.hij("Hi, ",t.currentUser.first_name,""),s.xp6(1),s.Q6J("formGroup",t.profileForm),s.xp6(31),s.Q6J("ngForOf",t.Roles),s.xp6(4),s.s9C("src",null==(e=t.profileForm.get("avatar"))?null:e.value,s.LSH)}},directives:[U._Y,U.JL,U.sg,U.Fj,U.JJ,U.u,U.EJ,U.YN,U.Kr,a.sg],styles:[""]}),e})(),canActivate:[(()=>{class e{canActivate(e,t){console.log("only sign in user can activate");const r=localStorage.getItem("token");return null!=r&&""!==r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()]}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[],imports:[[o.Bz.forChild(_),U.u5,U.UX],o.Bz,U.u5,U.UX]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[c,{provide:s.ip1,useFactory:T,deps:[c,v],multi:!0}],imports:[[a.ez,b]]}),e})();function T(e){return()=>e.load()}}}]);