"use strict";(self.webpackChunkangular_calendar=self.webpackChunkangular_calendar||[]).push([[680],{9680:(st,B,d)=>{d.r(B),d.d(B,{ScheduleModule:()=>ot});var O=d(6264),ce=d(4144),s=d(4650),A=d(3238),le=d(1281),y=d(6895),I=d(9646),de=d(2843),ue=d(4128),he=d(727),k=d(8505),p=d(4004),pe=d(262),fe=d(8746),me=d(3099),ge=d(5698),ve=d(4351),ye=d(9300);class L{}class m{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const n=e.indexOf(":");if(n>0){const o=e.slice(0,n),i=o.toLowerCase(),a=e.slice(n+1).trim();this.maybeSetNormalizedName(o,i),this.headers.has(i)?this.headers.get(i).push(a):this.headers.set(i,[a])}})}:()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{let o;if(o="string"==typeof n?[n]:"number"==typeof n?[n.toString()]:n.map(i=>i.toString()),o.length>0){const i=e.toLowerCase();this.headers.set(i,o),this.maybeSetNormalizedName(e,i)}})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof m?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new m;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof m?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(t.name,e);const o=("a"===t.op?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":const i=t.value;if(i){let a=this.headers.get(e);if(!a)return;a=a.filter(c=>-1===i.indexOf(c)),0===a.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class Ce{encodeKey(t){return q(t)}encodeValue(t){return q(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const Ie=/%(\d[a-f0-9])/gi,Se={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function q(r){return encodeURIComponent(r).replace(Ie,(t,e)=>Se[e]??t)}function H(r){return`${r}`}class g{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new Ce,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Ee(r,t){const e=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[a,c]=-1==i?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=e.get(a)||[];l.push(c),e.set(a,l)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const n=t.fromObject[e],o=Array.isArray(n)?n.map(H):[H(n)];this.map.set(e,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(n=>{const o=t[n];Array.isArray(o)?o.forEach(i=>{e.push({param:n,value:i,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new g({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(H(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let n=this.map.get(t.param)||[];const o=n.indexOf(H(t.value));-1!==o&&n.splice(o,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class _e{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function z(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function K(r){return typeof Blob<"u"&&r instanceof Blob}function $(r){return typeof FormData<"u"&&r instanceof FormData}class b{constructor(t,e,n,o){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function be(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==n?n:null,i=o):i=n,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new m),this.context||(this.context=new _e),this.params){const a=this.params.toString();if(0===a.length)this.urlWithParams=e;else{const c=e.indexOf("?");this.urlWithParams=e+(-1===c?"?":c<e.length-1?"&":"")+a}}else this.params=new g,this.urlWithParams=e}serializeBody(){return null===this.body?null:z(this.body)||K(this.body)||$(this.body)||function xe(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof g?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||$(this.body)?null:K(this.body)?this.body.type||null:z(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof g?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,n=t.url||this.url,o=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,c=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let l=t.headers||this.headers,h=t.params||this.params;const v=t.context??this.context;return void 0!==t.setHeaders&&(l=Object.keys(t.setHeaders).reduce((w,f)=>w.set(f,t.setHeaders[f]),l)),t.setParams&&(h=Object.keys(t.setParams).reduce((w,f)=>w.set(f,t.setParams[f]),h)),new b(e,n,i,{params:h,headers:l,context:v,reportProgress:c,responseType:o,withCredentials:a})}}var u=(()=>((u=u||{})[u.Sent=0]="Sent",u[u.UploadProgress=1]="UploadProgress",u[u.ResponseHeader=2]="ResponseHeader",u[u.DownloadProgress=3]="DownloadProgress",u[u.Response=4]="Response",u[u.User=5]="User",u))();class we{constructor(t,e=200,n="OK"){this.headers=t.headers||new m,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class D extends we{constructor(t={}){super(t),this.type=u.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new D({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}function U(r,t){return{body:t,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials}}let X=(()=>{class r{constructor(e){this.handler=e}request(e,n,o={}){let i;if(e instanceof b)i=e;else{let l,h;l=o.headers instanceof m?o.headers:new m(o.headers),o.params&&(h=o.params instanceof g?o.params:new g({fromObject:o.params})),i=new b(e,n,void 0!==o.body?o.body:null,{headers:l,context:o.context,params:h,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const a=(0,I.of)(i).pipe((0,ve.b)(l=>this.handler.handle(l)));if(e instanceof b||"events"===o.observe)return a;const c=a.pipe((0,ye.h)(l=>l instanceof D));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe((0,p.U)(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return c.pipe((0,p.U)(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return c.pipe((0,p.U)(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return c.pipe((0,p.U)(l=>l.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:(new g).append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,U(o,n))}post(e,n,o={}){return this.request("POST",e,U(o,n))}put(e,n,o={}){return this.request("PUT",e,U(o,n))}}return r.\u0275fac=function(e){return new(e||r)(s.LFG(L))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac}),r})();var te=d(1481);const Ue=["*"];let T;function x(r){return function Xe(){if(void 0===T&&(T=null,typeof window<"u")){const r=window;void 0!==r.trustedTypes&&(T=r.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return T}()?.createHTML(r)||r}function ne(r){return Error(`Unable to find icon with the name "${r}"`)}function re(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function oe(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}class C{constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}}let M=(()=>{class r{constructor(e,n,o,i){this._httpClient=e,this._sanitizer=n,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=o}addSvgIcon(e,n,o){return this.addSvgIconInNamespace("",e,n,o)}addSvgIconLiteral(e,n,o){return this.addSvgIconLiteralInNamespace("",e,n,o)}addSvgIconInNamespace(e,n,o,i){return this._addSvgIconConfig(e,n,new C(o,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,o,i){const a=this._sanitizer.sanitize(s.q3G.HTML,o);if(!a)throw oe(o);const c=x(a);return this._addSvgIconConfig(e,n,new C("",c,i))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,o){return this._addSvgIconSetConfig(e,new C(n,null,o))}addSvgIconSetLiteralInNamespace(e,n,o){const i=this._sanitizer.sanitize(s.q3G.HTML,n);if(!i)throw oe(n);const a=x(i);return this._addSvgIconSetConfig(e,new C("",a,o))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){const n=this._sanitizer.sanitize(s.q3G.RESOURCE_URL,e);if(!n)throw re(e);const o=this._cachedIconsByUrl.get(n);return o?(0,I.of)(N(o)):this._loadSvgIconFromConfig(new C(e,null)).pipe((0,k.b)(i=>this._cachedIconsByUrl.set(n,i)),(0,p.U)(i=>N(i)))}getNamedSvgIcon(e,n=""){const o=se(n,e);let i=this._svgIconConfigs.get(o);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(n,e),i)return this._svgIconConfigs.set(o,i),this._getSvgFromConfig(i);const a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):(0,de._)(ne(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?(0,I.of)(N(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe((0,p.U)(n=>N(n)))}_getSvgFromIconSetConfigs(e,n){const o=this._extractIconWithNameFromAnySet(e,n);if(o)return(0,I.of)(o);const i=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe((0,pe.K)(c=>{const h=`Loading icon set URL: ${this._sanitizer.sanitize(s.q3G.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(h)),(0,I.of)(null)})));return(0,ue.D)(i).pipe((0,p.U)(()=>{const a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw ne(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let o=n.length-1;o>=0;o--){const i=n[o];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){const a=this._svgElementFromConfig(i),c=this._extractSvgIconFromSet(a,e,i.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe((0,k.b)(n=>e.svgText=n),(0,p.U)(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?(0,I.of)(null):this._fetchIcon(e).pipe((0,k.b)(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,o){const i=e.querySelector(`[id="${n}"]`);if(!i)return null;const a=i.cloneNode(!0);if(a.removeAttribute("id"),"svg"===a.nodeName.toLowerCase())return this._setSvgAttributes(a,o);if("symbol"===a.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(a),o);const c=this._svgElementFromString(x("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,o)}_svgElementFromString(e){const n=this._document.createElement("DIV");n.innerHTML=e;const o=n.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){const n=this._svgElementFromString(x("<svg></svg>")),o=e.attributes;for(let i=0;i<o.length;i++){const{name:a,value:c}=o[i];"id"!==a&&n.setAttribute(a,c)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[i].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){const{url:n,options:o}=e,i=o?.withCredentials??!1;if(!this._httpClient)throw function je(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==n)throw Error(`Cannot fetch icon from URL "${n}".`);const a=this._sanitizer.sanitize(s.q3G.RESOURCE_URL,n);if(!a)throw re(n);const c=this._inProgressUrlFetches.get(a);if(c)return c;const l=this._httpClient.get(a,{responseType:"text",withCredentials:i}).pipe((0,p.U)(h=>x(h)),(0,fe.x)(()=>this._inProgressUrlFetches.delete(a)),(0,me.B)());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,n,o){return this._svgIconConfigs.set(se(e,n),o),this}_addSvgIconSetConfig(e,n){const o=this._iconSetConfigs.get(e);return o?o.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){const n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let o=0;o<this._resolvers.length;o++){const i=this._resolvers[o](n,e);if(i)return Je(i)?new C(i.url,null,i.options):new C(i,null)}}}return r.\u0275fac=function(e){return new(e||r)(s.LFG(X,8),s.LFG(te.H7),s.LFG(y.K0,8),s.LFG(s.qLn))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function N(r){return r.cloneNode(!0)}function se(r,t){return r+":"+t}function Je(r){return!(!r.url||!r.options)}const qe=(0,A.pj)(class{constructor(r){this._elementRef=r}}),ze=new s.OlP("MAT_ICON_DEFAULT_OPTIONS"),Ke=new s.OlP("mat-icon-location",{providedIn:"root",factory:function $e(){const r=(0,s.f3M)(y.K0),t=r?r.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),ie=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ve=ie.map(r=>`[${r}]`).join(", "),We=/^url\(['"]?#(.*?)['"]?\)$/;let Ge=(()=>{class r extends qe{get inline(){return this._inline}set inline(e){this._inline=(0,le.Ig)(e)}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){const n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){const n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}constructor(e,n,o,i,a,c){super(e),this._iconRegistry=n,this._location=i,this._errorHandler=a,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=he.w0.EMPTY,c&&(c.color&&(this.color=this.defaultColor=c.color),c.fontSet&&(this.fontSet=c.fontSet)),o||e.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];const n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const e=this._elementsWithExternalReferences;if(e&&e.size){const n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();const n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){const e=this._elementRef.nativeElement;let n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){const o=e.childNodes[n];(1!==o.nodeType||"svg"===o.nodeName.toLowerCase())&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),n.forEach(o=>e.classList.add(o)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return"string"==typeof e?e.trim().split(" ")[0]:e}_prependPathToReferences(e){const n=this._elementsWithExternalReferences;n&&n.forEach((o,i)=>{o.forEach(a=>{i.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){const n=e.querySelectorAll(Ve),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<n.length;i++)ie.forEach(a=>{const c=n[i],l=c.getAttribute(a),h=l?l.match(We):null;if(h){let v=o.get(c);v||(v=[],o.set(c,v)),v.push({name:a,value:h[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){const[n,o]=this._splitIconName(e);n&&(this._svgNamespace=n),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,n).pipe((0,ge.q)(1)).subscribe(i=>this._setSvgElement(i),i=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${n}:${o}! ${i.message}`))})}}}return r.\u0275fac=function(e){return new(e||r)(s.Y36(s.SBq),s.Y36(M),s.$8M("aria-hidden"),s.Y36(Ke),s.Y36(s.qLn),s.Y36(ze,8))},r.\u0275cmp=s.Xpm({type:r,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:8,hostBindings:function(e,n){2&e&&(s.uIk("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),s.ekj("mat-icon-inline",n.inline)("mat-icon-no-color","primary"!==n.color&&"accent"!==n.color&&"warn"!==n.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[s.qOj],ngContentSelectors:Ue,decls:1,vars:0,template:function(e,n){1&e&&(s.F$t(),s.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0}),r})(),Ye=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[A.BQ,A.BQ]}),r})();var P=d(1206),Ze=d(9944);function Qe(r,t){if(1&r){const e=s.EpF();s.TgZ(0,"div",5)(1,"h4"),s._uU(2),s.qZA(),s.TgZ(3,"div",6)(4,"mat-icon"),s._uU(5,"alarm"),s.qZA(),s.TgZ(6,"p"),s._uU(7),s.qZA()(),s.TgZ(8,"div",6)(9,"mat-icon"),s._uU(10,"calendar_today"),s.qZA(),s.TgZ(11,"p"),s._uU(12),s.ALo(13,"date"),s.qZA()(),s.TgZ(14,"div",6)(15,"mat-icon"),s._uU(16,"list_alt"),s.qZA(),s.TgZ(17,"p"),s._uU(18),s.qZA()(),s.TgZ(19,"div",7)(20,"mat-icon",8),s.NdJ("click",function(){const i=s.CHM(e).$implicit,a=s.oxw(2);return s.KtG(a.deleteAppointmant(i.id))}),s._uU(21,"delete"),s.qZA()()()}if(2&r){const e=t.$implicit;s.xp6(2),s.Oqu(e.title),s.xp6(5),s.Oqu(e.time),s.xp6(5),s.Oqu(s.xi3(13,4,e.date,"longDate")),s.xp6(6),s.Oqu(e.description)}}function et(r,t){if(1&r){const e=s.EpF();s.TgZ(0,"div",3),s.NdJ("cdkDropListDropped",function(o){s.CHM(e);const i=s.oxw();return s.KtG(i.drop(o))}),s.YNc(1,Qe,22,7,"div",4),s.qZA()}if(2&r){const e=s.oxw();s.xp6(1),s.Q6J("ngForOf",e.appointmants)}}function tt(r,t){1&r&&s._uU(0,"You don't have appointmants")}const nt=[{path:"",component:(()=>{class r{drop(e){(0,P.bA)(this.appointmants,e.previousIndex,e.currentIndex)}constructor(e){this.appointmentService=e,this.appointmants=[],this.expandedIndex=0}ngOnInit(){this.appointmants=this.appointmentService.getappointment()}deleteAppointmant(e){const n=this.appointmants.findIndex(o=>o.id===e);this.appointmants.splice(n,1),this.appointmentService.atualizarLocalStorege(),alert("Appointment deleted succesfully!")}}return r.\u0275fac=function(e){return new(e||r)(s.Y36(Ze.H))},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-schedule"]],decls:6,vars:2,consts:[[1,"form"],["cdkDropList","","class","example-list",3,"cdkDropListDropped",4,"ngIf","ngIfElse"],["alert",""],["cdkDropList","",1,"example-list",3,"cdkDropListDropped"],["class","example-box","cdkDrag","",4,"ngFor","ngForOf"],["cdkDrag","",1,"example-box"],[1,"boxItens"],[1,"boxButton"],["color","warn",1,"buttonDelete",3,"click"]],template:function(e,n){if(1&e&&(s.TgZ(0,"h4"),s._uU(1,"Schedule"),s.qZA(),s.TgZ(2,"form",0),s.YNc(3,et,2,1,"div",1),s.YNc(4,tt,1,0,"ng-template",null,2,s.W1O),s.qZA()),2&e){const o=s.MAs(5);s.xp6(3),s.Q6J("ngIf",n.appointmants.length>0)("ngIfElse",o)}},dependencies:[Ge,P.Wj,P.Zt,y.sg,y.O5,y.uU],styles:[".example-list[_ngcontent-%COMP%]{width:500px;max-width:100%;border:solid 1px #ccc;min-height:60px;background:white;border-radius:4px;overflow:hidden}h4[_ngcontent-%COMP%]{font-weight:700;font-size:21px;color:var(--primary)}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:block;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:white;font-size:14px}.boxItens[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:.5em}.buttonDelete[_ngcontent-%COMP%]{cursor:pointer;margin-left:auto}.boxButton[_ngcontent-%COMP%]{display:flex}p[_ngcontent-%COMP%]{max-width:32em}.form[_ngcontent-%COMP%]{background-color:#fff;padding:16px;border-radius:4px;box-shadow:0 0 8px #0000001a}.form__titulo[_ngcontent-%COMP%]{text-transform:capitalize;color:var(--primary)}"]}),r})()}];let rt=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[O.Bz.forChild(nt),O.Bz]}),r})(),ot=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[O.Bz,ce.c,Ye,P._t,y.ez,rt]}),r})()}}]);