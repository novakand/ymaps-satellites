import{Aa as Tt,Ba as xi,D as Bt,E as hi,Fa as Ci,H as fi,Ha as Ii,Ia as Ti,J as Xe,K as he,Ka as Si,L as Ne,Ma as Oi,N as $e,O as zt,Oa as lt,P as je,Pa as St,R as Rt,S as st,T as Ye,Ta as Ei,U as Je,Ua as Mi,V as Pt,W as _i,_ as bt,a as gt,ba as De,bb as ki,c as yt,ca as ee,d as Ae,da as wt,db as Vi,e as vt,f as Le,g as di,h as me,ia as fe,j as Pe,la as _e,ma as Fe,na as xt,o as ui,qa as gi,ra as yi,sa as z,ta as vi,wa as Ct,xa as bi,ya as It,za as wi}from"./chunk-LHW5QCT2.js";import{$ as Ce,$b as ze,Ab as O,Bb as E,Cb as Te,D as Wt,Da as ni,E as nt,Ec as F,Fa as oi,Fb as si,Fc as Re,G as Ut,Gb as q,Hb as G,I as Zt,Ib as Z,Jb as Q,Ka as ri,Kc as mi,Lc as Vt,Ma as h,Mb as R,Nb as c,Nc as At,Ob as We,Pb as Ue,Pc as Lt,Qb as N,Qc as Dt,R as Xt,Ra as L,Rb as ne,S as Yt,Sa as ke,Sb as M,Sc as Ft,T as Jt,Tb as k,U as Ge,V as ei,Wb as Se,Xa as pe,Xb as Ze,Z as ti,Zb as Ve,_ as H,_b as T,a as le,ac as ot,b as Ke,ba as ce,bc as kt,ca as ii,cb as ie,da as V,db as Ie,dc as mt,eb as ut,ec as ht,fc as ft,gb as J,gc as ue,hb as de,hc as _t,i as Kt,ib as b,ic as X,ja as C,jc as Me,ka as I,kc as rt,l as it,la as xe,m as ae,mc as li,nc as ai,oc as oe,p as qe,sa as dt,t as Be,tb as P,tc as Oe,u as qt,uc as ci,wc as K,x as Gt,xa as U,yc as pi,zb as a}from"./chunk-OL4F4GBH.js";var re=63710088e-1,ms={centimeters:re*100,centimetres:re*100,degrees:360/(2*Math.PI),feet:re*3.28084,inches:re*39.37,kilometers:re/1e3,kilometres:re/1e3,meters:re,metres:re,miles:re/1609.344,millimeters:re*1e3,millimetres:re*1e3,nauticalmiles:re/1852,radians:1,yards:re*1.0936};function Cn(t,s,e={}){let i={type:"Feature"};return(e.id===0||e.id)&&(i.id=e.id),e.bbox&&(i.bbox=e.bbox),i.properties=s||{},i.geometry=t,i}function hs(t,s,e={}){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Ai(t[0])||!Ai(t[1]))throw new Error("coordinates must contain numbers");return Cn({type:"Point",coordinates:t},s,e)}function Ai(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}var A=11102230246251565e-32,W=134217729,at=(3+8*A)*A;function He(t,s,e,i,n){let o,r,l,f,u=s[0],_=i[0],d=0,m=0;_>u==_>-u?(o=u,u=s[++d]):(o=_,_=i[++m]);let v=0;if(d<t&&m<e)for(_>u==_>-u?(r=u+o,l=o-(r-u),u=s[++d]):(r=_+o,l=o-(r-_),_=i[++m]),o=r,l!==0&&(n[v++]=l);d<t&&m<e;)_>u==_>-u?(r=o+u,f=r-o,l=o-(r-f)+(u-f),u=s[++d]):(r=o+_,f=r-o,l=o-(r-f)+(_-f),_=i[++m]),o=r,l!==0&&(n[v++]=l);for(;d<t;)r=o+u,f=r-o,l=o-(r-f)+(u-f),u=s[++d],o=r,l!==0&&(n[v++]=l);for(;m<e;)r=o+_,f=r-o,l=o-(r-f)+(_-f),_=i[++m],o=r,l!==0&&(n[v++]=l);return(o!==0||v===0)&&(n[v++]=o),v}function ct(t,s){let e=s[0];for(let i=1;i<t;i++)e+=s[i];return e}function p(t){return new Float64Array(t)}var In=(3+16*A)*A,Tn=(2+12*A)*A,Sn=(9+64*A)*A*A,et=p(4),Li=p(8),Di=p(12),Fi=p(16),te=p(4);function On(t,s,e,i,n,o,r){let l,f,u,_,d,m,v,S,x,y,g,w,B,D,$,j,se,Y,ye=t-n,ve=e-n,be=s-o,we=i-o;D=ye*we,m=W*ye,v=m-(m-ye),S=ye-v,m=W*we,x=m-(m-we),y=we-x,$=S*y-(D-v*x-S*x-v*y),j=be*ve,m=W*be,v=m-(m-be),S=be-v,m=W*ve,x=m-(m-ve),y=ve-x,se=S*y-(j-v*x-S*x-v*y),g=$-se,d=$-g,et[0]=$-(g+d)+(d-se),w=D+g,d=w-D,B=D-(w-d)+(g-d),g=B-j,d=B-g,et[1]=B-(g+d)+(d-j),Y=w+g,d=Y-w,et[2]=w-(Y-d)+(g-d),et[3]=Y;let Ee=ct(4,et),tt=Tn*r;if(Ee>=tt||-Ee>=tt||(d=t-ye,l=t-(ye+d)+(d-n),d=e-ve,u=e-(ve+d)+(d-n),d=s-be,f=s-(be+d)+(d-o),d=i-we,_=i-(we+d)+(d-o),l===0&&f===0&&u===0&&_===0)||(tt=Sn*r+at*Math.abs(Ee),Ee+=ye*_+we*l-(be*u+ve*f),Ee>=tt||-Ee>=tt))return Ee;D=l*we,m=W*l,v=m-(m-l),S=l-v,m=W*we,x=m-(m-we),y=we-x,$=S*y-(D-v*x-S*x-v*y),j=f*ve,m=W*f,v=m-(m-f),S=f-v,m=W*ve,x=m-(m-ve),y=ve-x,se=S*y-(j-v*x-S*x-v*y),g=$-se,d=$-g,te[0]=$-(g+d)+(d-se),w=D+g,d=w-D,B=D-(w-d)+(g-d),g=B-j,d=B-g,te[1]=B-(g+d)+(d-j),Y=w+g,d=Y-w,te[2]=w-(Y-d)+(g-d),te[3]=Y;let bn=He(4,et,4,te,Li);D=ye*_,m=W*ye,v=m-(m-ye),S=ye-v,m=W*_,x=m-(m-_),y=_-x,$=S*y-(D-v*x-S*x-v*y),j=be*u,m=W*be,v=m-(m-be),S=be-v,m=W*u,x=m-(m-u),y=u-x,se=S*y-(j-v*x-S*x-v*y),g=$-se,d=$-g,te[0]=$-(g+d)+(d-se),w=D+g,d=w-D,B=D-(w-d)+(g-d),g=B-j,d=B-g,te[1]=B-(g+d)+(d-j),Y=w+g,d=Y-w,te[2]=w-(Y-d)+(g-d),te[3]=Y;let wn=He(bn,Li,4,te,Di);D=l*_,m=W*l,v=m-(m-l),S=l-v,m=W*_,x=m-(m-_),y=_-x,$=S*y-(D-v*x-S*x-v*y),j=f*u,m=W*f,v=m-(m-f),S=f-v,m=W*u,x=m-(m-u),y=u-x,se=S*y-(j-v*x-S*x-v*y),g=$-se,d=$-g,te[0]=$-(g+d)+(d-se),w=D+g,d=w-D,B=D-(w-d)+(g-d),g=B-j,d=B-g,te[1]=B-(g+d)+(d-j),Y=w+g,d=Y-w,te[2]=w-(Y-d)+(g-d),te[3]=Y;let xn=He(wn,Di,4,te,Fi);return Fi[xn-1]}function Nt(t,s,e,i,n,o){let r=(s-o)*(e-n),l=(t-n)*(i-o),f=r-l,u=Math.abs(r+l);return Math.abs(f)>=In*u?f:-On(t,s,e,i,n,o,u)}var bs=(7+56*A)*A,ws=(3+28*A)*A,xs=(26+288*A)*A*A,Cs=p(4),Is=p(4),Ts=p(4),Ss=p(4),Os=p(4),Es=p(4),Ms=p(4),ks=p(4),Vs=p(4),As=p(8),Ls=p(8),Ds=p(8),Fs=p(4),Bs=p(8),zs=p(8),Rs=p(16),Ps=p(12),Ns=p(192),$s=p(192);var Qs=(10+96*A)*A,Ks=(4+48*A)*A,qs=(44+576*A)*A*A,Gs=p(4),Ws=p(4),Us=p(4),Zs=p(4),Xs=p(4),Ys=p(4),Js=p(4),el=p(4),tl=p(8),il=p(8),nl=p(8),ol=p(8),rl=p(8),sl=p(8),ll=p(8),al=p(8),cl=p(8),pl=p(4),dl=p(4),ul=p(4),ml=p(8),hl=p(16),fl=p(16),_l=p(16),gl=p(32),yl=p(32),vl=p(48),bl=p(64),wl=p(1152),xl=p(1152);var Sl=(16+224*A)*A,Ol=(5+72*A)*A,El=(71+1408*A)*A*A,Ml=p(4),kl=p(4),Vl=p(4),Al=p(4),Ll=p(4),Dl=p(4),Fl=p(4),Bl=p(4),zl=p(4),Rl=p(4),Pl=p(24),Nl=p(24),$l=p(24),jl=p(24),Hl=p(24),Ql=p(24),Kl=p(24),ql=p(24),Gl=p(24),Wl=p(24),Ul=p(1152),Zl=p(1152),Xl=p(1152),Yl=p(1152),Jl=p(1152),ea=p(2304),ta=p(2304),ia=p(3456),na=p(5760),oa=p(8),ra=p(8),sa=p(8),la=p(16),aa=p(24),ca=p(48),pa=p(48),da=p(96),ua=p(192),ma=p(384),ha=p(384),fa=p(384),_a=p(768);var ga=p(96),ya=p(96),va=p(96),ba=p(1152);function zi(t,s){var e,i,n=0,o,r,l,f,u,_,d,m=t[0],v=t[1],S=s.length;for(e=0;e<S;e++){i=0;var x=s[e],y=x.length-1;if(_=x[0],_[0]!==x[y][0]&&_[1]!==x[y][1])throw new Error("First and last coordinates in a ring must be the same");for(r=_[0]-m,l=_[1]-v,i;i<y;i++){if(d=x[i+1],f=d[0]-m,u=d[1]-v,l===0&&u===0){if(f<=0&&r>=0||r<=0&&f>=0)return 0}else if(u>=0&&l<=0||u<=0&&l>=0){if(o=Nt(r,f,l,u,0,0),o===0)return 0;(o>0&&u>0&&l<=0||o<0&&u<=0&&l>0)&&n++}_=d,l=u,r=f}}return n%2!==0}function Ri(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Pi(t){return t.type==="Feature"?t.geometry:t}function Mn(t,s,e={}){if(!t)throw new Error("point is required");if(!s)throw new Error("polygon is required");let i=Ri(t),n=Pi(s),o=n.type,r=s.bbox,l=n.coordinates;if(r&&kn(i,r)===!1)return!1;o==="Polygon"&&(l=[l]);let f=!1;for(var u=0;u<l.length;++u){let _=zi(i,l[u]);if(_===0)return!e.ignoreBoundary;_&&(f=!0)}return f}function kn(t,s){return s[0]<=t[0]&&s[1]<=t[1]&&s[2]>=t[0]&&s[3]>=t[1]}var Pa=Mn;var Ni=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;var Vn={root:{position:"relative"}},An={root:({instance:t})=>["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]},$i=(()=>{class t extends fe{name="skeleton";style=Ni;classes=An;inlineStyles=Vn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(t)))(n||t)}})();static \u0275prov=H({token:t,factory:t.\u0275fac})}return t})();var ji=new ce("SKELETON_INSTANCE"),Ln=(()=>{class t extends Fe{$pcSkeleton=V(ji,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=V(z,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=V($i);get containerStyle(){let e=this._componentStyle?.inlineStyles.root,i;return this.size?i=Ke(le({},e),{width:this.size,height:this.size,borderRadius:this.borderRadius}):i=Ke(le({},e),{width:this.width,height:this.height,borderRadius:this.borderRadius}),i}static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(t)))(n||t)}})();static \u0275cmp=ie({type:t,selectors:[["p-skeleton"]],hostVars:5,hostBindings:function(i,n){i&2&&(P("aria-hidden",!0),Ve(n.containerStyle),T(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[ue([$i,{provide:ji,useExisting:t},{provide:_e,useExisting:t}]),de([z]),J],decls:0,vars:0,template:function(i,n){},dependencies:[me,ee],encapsulation:2,changeDetection:0})}return t})(),tc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ie({type:t});static \u0275inj=Ce({imports:[Ln,ee,ee]})}return t})();var Hi=(()=>{let s=class s{constructor(){this.load$=new ae(null),this._beamFeatures$=new ae([]),this.beamFeatures$=this._beamFeatures$.asObservable(),this.baseLayer$=new ae("scheme"),this._selectedSatellite$=new ae(null),this.selectedSatellite$=this._selectedSatellite$.asObservable(),this._satelliteGraphics$=new ae([]),this.satelliteGraphics$=this._satelliteGraphics$.asObservable(),this._coverageFeatures$=new ae({features:[],multiColor:!1}),this.coverageFeatures$=this._coverageFeatures$.asObservable()}setBeamFeatures(i){this._beamFeatures$.next(i)}clearBeamFeatures(){this._beamFeatures$.next([])}setSelectedSatellite(i){this._selectedSatellite$.next(i)}setSatelliteGraphics(i){this._satelliteGraphics$.next(i)}clearSatelliteGraphics(){this._satelliteGraphics$.next([])}setCoverageFeatures(i,n=!1,o){this._coverageFeatures$.next({features:i,multiColor:n,band:o})}clearCoverageFeatures(){this._coverageFeatures$.next({features:[],multiColor:!1})}};s.\u0275fac=function(n){return new(n||s)},s.\u0275prov=H({token:s,factory:s.\u0275fac,providedIn:"root"});let t=s;return t})();var Qi=(()=>{let s=class s{constructor(i){this.http=i,this.dragLocation$=new ae(null),this.selectedLocation$=new ae(null),this.API_KEY="86b21bb6-3702-4519-bd25-93f8cfa92b78"}suggest(i,n,o="geo,biz",r=10){let l={apikey:"23b76e0e-63d3-48f0-a3b5-e607d7c078e9",text:i,types:o,results:r};if(n){let[f,u]=n;l.bbox=`${f[0]},${f[1]}~${u[0]},${u[1]}`}return this.http.get("https://suggest-maps.yandex.ru/v1/suggest",{params:l}).pipe(Be(f=>(f.results||[]).map(u=>{let _=u.title?.text||"",d=u.subtitle?.text||"";return{label:d?`${_}, ${d}`:_,rawLabel:_,subtitle:d,uri:u.uri}})))}geocode(i){if(!i?.trim())return qe(null);let n={apikey:this.API_KEY,format:"json",geocode:i,results:1};return this.http.get("https://geocode-maps.yandex.ru/1.x/",{params:n}).pipe(Be(o=>{let r=o?.response?.GeoObjectCollection?.featureMember?.[0]?.GeoObject;if(!r?.Point?.pos)return null;let[l,f]=r.Point.pos.split(" ").map(Number),u=r.metaDataProperty?.GeocoderMetaData?.text??i;return this.selectedLocation$.next({coordinates:[l,f],label:u}),[l,f]}),nt(()=>qe(null)))}reverseGeocode(i){let n={apikey:this.API_KEY,format:"json",geocode:i.join(","),results:1};return this.http.get("https://geocode-maps.yandex.ru/1.x/",{params:n}).pipe(ei(o=>{let l=o?.response?.GeoObjectCollection?.featureMember?.[0]?.GeoObject?.metaDataProperty?.GeocoderMetaData?.text??"";this.selectedLocation$.next({coordinates:i,label:l})}),Be(()=>i),nt(()=>qe(null)))}};s.\u0275fac=function(n){return new(n||s)(ii(ui))},s.\u0275prov=H({token:s,factory:s.\u0275fac,providedIn:"root"});let t=s;return t})();var Ki=(()=>{class t extends Mi{pcFluid=V(Ct,{optional:!0,host:!0,skipSelf:!0});fluid=K(void 0,{transform:F});variant=K();size=K();inputSize=K();pattern=K();min=K();max=K();step=K();minlength=K();maxlength=K();$variant=Oe(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(t)))(n||t)}})();static \u0275dir=ut({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[J]})}return t})();var Bn=["data-p-icon","chevron-down"],qi=(()=>{class t extends bi{static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(t)))(n||t)}})();static \u0275cmp=ie({type:t,selectors:[["","data-p-icon","chevron-down"]],features:[J],attrs:Bn,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(i,n){i&1&&(xe(),si(0,"path",0))},encapsulation:2})}return t})();var Gi=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var zn=["removeicon"],Rn=["*"];function Pn(t,s){if(t&1){let e=Q();O(0,"img",4),R("error",function(n){C(e);let o=c();return I(o.imageError(n))}),E()}if(t&2){let e=c();T(e.cx("image")),a("pBind",e.ptm("image"))("src",e.image,ri)("alt",e.alt)}}function Nn(t,s){if(t&1&&Te(0,"span",6),t&2){let e=c(2);T(e.icon),a("pBind",e.ptm("icon"))("ngClass",e.cx("icon"))}}function $n(t,s){if(t&1&&b(0,Nn,1,4,"span",5),t&2){let e=c();a("ngIf",e.icon)}}function jn(t,s){if(t&1&&(O(0,"div",7),ze(1),E()),t&2){let e=c();T(e.cx("label")),a("pBind",e.ptm("label")),h(),ot(e.label)}}function Hn(t,s){if(t&1){let e=Q();O(0,"span",11),R("click",function(n){C(e);let o=c(3);return I(o.close(n))})("keydown",function(n){C(e);let o=c(3);return I(o.onKeydown(n))}),E()}if(t&2){let e=c(3);T(e.removeIcon),a("pBind",e.ptm("removeIcon"))("ngClass",e.cx("removeIcon")),P("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function Qn(t,s){if(t&1){let e=Q();xe(),O(0,"svg",12),R("click",function(n){C(e);let o=c(3);return I(o.close(n))})("keydown",function(n){C(e);let o=c(3);return I(o.onKeydown(n))}),E()}if(t&2){let e=c(3);T(e.cx("removeIcon")),a("pBind",e.ptm("removeIcon")),P("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function Kn(t,s){if(t&1&&(q(0),b(1,Hn,1,6,"span",9)(2,Qn,1,5,"svg",10),G()),t&2){let e=c(2);h(),a("ngIf",e.removeIcon),h(),a("ngIf",!e.removeIcon)}}function qn(t,s){}function Gn(t,s){t&1&&b(0,qn,0,0,"ng-template")}function Wn(t,s){if(t&1){let e=Q();O(0,"span",13),R("click",function(n){C(e);let o=c(2);return I(o.close(n))})("keydown",function(n){C(e);let o=c(2);return I(o.onKeydown(n))}),b(1,Gn,1,0,null,14),E()}if(t&2){let e=c(2);T(e.cx("removeIcon")),a("pBind",e.ptm("removeIcon")),P("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel),h(),a("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Un(t,s){if(t&1&&(q(0),b(1,Kn,3,2,"ng-container",3)(2,Wn,2,6,"span",8),G()),t&2){let e=c();h(),a("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),h(),a("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Zn={root:({instance:t})=>["p-chip p-component",{"p-disabled":t.disabled}],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Wi=(()=>{class t extends fe{name="chip";style=Gi;classes=Zn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(t)))(n||t)}})();static \u0275prov=H({token:t,factory:t.\u0275fac})}return t})();var Ui=new ce("CHIP_INSTANCE"),$t=(()=>{class t extends Fe{$pcChip=V(Ui,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=V(z,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new L;onImageError=new L;visible=!0;get removeAriaLabel(){return this.config.getTranslation(wt.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}_chipProps;_componentStyle=V(Wi);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="removeicon"?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(t)))(n||t)}})();static \u0275cmp=ie({type:t,selectors:[["p-chip"]],contentQueries:function(i,n,o){if(i&1&&(N(o,zn,4),N(o,De,4)),i&2){let r;M(r=k())&&(n.removeIconTemplate=r.first),M(r=k())&&(n.templates=r)}},hostVars:5,hostBindings:function(i,n){i&2&&(P("aria-label",n.label),T(n.cn(n.cx("root"),n.styleClass)),Ze("display",!n.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",disabled:[2,"disabled","disabled",F],removable:[2,"removable","removable",F],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[ue([Wi,{provide:Ui,useExisting:t},{provide:_e,useExisting:t}]),de([z]),J],ngContentSelectors:Rn,decls:6,vars:4,consts:[["iconTemplate",""],[3,"pBind","class","src","alt","error",4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"],[4,"ngIf"],[3,"error","pBind","src","alt"],[3,"pBind","class","ngClass",4,"ngIf"],[3,"pBind","ngClass"],[3,"pBind"],["role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"pBind","class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"click","keydown","pBind","ngClass"],["data-p-icon","times-circle","role","button",3,"click","keydown","pBind"],["role","button",3,"click","keydown","pBind"],[4,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&(We(),Ue(0),b(1,Pn,1,5,"img",1)(2,$n,1,1,"ng-template",null,0,oe)(4,jn,2,4,"div",2)(5,Un,3,2,"ng-container",3)),i&2){let o=Se(3);h(),a("ngIf",n.image)("ngIfElse",o),h(3),a("ngIf",n.label),h(),a("ngIf",n.removable)}},dependencies:[me,gt,Ae,Le,Tt,ee,z],encapsulation:2,changeDetection:0})}return t})(),Ac=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ie({type:t});static \u0275inj=Ce({imports:[$t,ee,ee]})}return t})();var Zi=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Xn=`
    ${Zi}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Yn={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},Xi=(()=>{class t extends fe{name="inputtext";style=Xn;classes=Yn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(t)))(n||t)}})();static \u0275prov=H({token:t,factory:t.\u0275fac})}return t})();var Yi=new ce("INPUTTEXT_INSTANCE"),Ji=(()=>{class t extends Ei{hostName="";ptInputText=K();bindDirectiveInstance=V(z,{self:!0});$pcInputText=V(Yi,{optional:!0,skipSelf:!0})??void 0;ngControl=V(Ii,{optional:!0,self:!0});pcFluid=V(Ct,{optional:!0,host:!0,skipSelf:!0});pSize;variant=K();fluid=K(void 0,{transform:F});invalid=K(void 0,{transform:F});$variant=Oe(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=V(Xi);constructor(){super(),ci(()=>{this.ptInputText()&&this.directivePT.set(this.ptInputText())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=function(i){return new(i||t)};static \u0275dir=ut({type:t,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(i,n){i&1&&R("input",function(r){return n.onInput(r)}),i&2&&T(n.cx("root"))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[ue([Xi,{provide:Yi,useExisting:t},{provide:_e,useExisting:t}]),de([z]),J]})}return t})(),Uc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ie({type:t});static \u0275inj=Ce({})}return t})();var en=["content"],eo=["overlay"],to=["*"],io=(t,s,e)=>({showTransitionParams:t,hideTransitionParams:s,transform:e}),no=t=>({value:"visible",params:t}),oo=t=>({mode:t}),ro=t=>({$implicit:t});function so(t,s){t&1&&Z(0)}function lo(t,s){if(t&1){let e=Q();O(0,"div",3,1),R("click",function(n){C(e);let o=c(2);return I(o.onOverlayContentClick(n))})("@overlayContentAnimation.start",function(n){C(e);let o=c(2);return I(o.onOverlayContentAnimationStart(n))})("@overlayContentAnimation.done",function(n){C(e);let o=c(2);return I(o.onOverlayContentAnimationDone(n))}),Ue(2),b(3,so,1,0,"ng-container",4),E()}if(t&2){let e=c(2);T(e.cn(e.cx("content"),e.contentStyleClass)),a("pBind",e.ptm("content"))("@overlayContentAnimation",X(10,no,rt(6,io,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),h(3),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",X(14,ro,X(12,oo,e.overlayMode)))}}function ao(t,s){if(t&1){let e=Q();O(0,"div",3,0),R("click",function(){C(e);let n=c();return I(n.onOverlayClick())}),b(2,lo,4,16,"div",2),E()}if(t&2){let e=c();T(e.cn(e.cx("root"),e.styleClass)),a("pBind",e.ptm("root")),h(2),a("ngIf",e.visible)}}var co=`
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`,po={host:"p-overlay-host",root:({instance:t})=>["p-overlay p-component",{"p-overlay-modal p-overlay-mask p-overlay-mask-enter":t.modal,"p-overlay-center":t.modal&&t.overlayResponsiveDirection==="center","p-overlay-top":t.modal&&t.overlayResponsiveDirection==="top","p-overlay-top-start":t.modal&&t.overlayResponsiveDirection==="top-start","p-overlay-top-end":t.modal&&t.overlayResponsiveDirection==="top-end","p-overlay-bottom":t.modal&&t.overlayResponsiveDirection==="bottom","p-overlay-bottom-start":t.modal&&t.overlayResponsiveDirection==="bottom-start","p-overlay-bottom-end":t.modal&&t.overlayResponsiveDirection==="bottom-end","p-overlay-left":t.modal&&t.overlayResponsiveDirection==="left","p-overlay-left-start":t.modal&&t.overlayResponsiveDirection==="left-start","p-overlay-left-end":t.modal&&t.overlayResponsiveDirection==="left-end","p-overlay-right":t.modal&&t.overlayResponsiveDirection==="right","p-overlay-right-start":t.modal&&t.overlayResponsiveDirection==="right-start","p-overlay-right-end":t.modal&&t.overlayResponsiveDirection==="right-end"}],content:"p-overlay-content"},tn=(()=>{class t extends fe{name="overlay";style=co;classes=po;static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(t)))(n||t)}})();static \u0275prov=H({token:t,factory:t.\u0275fac})}return t})(),nn=new ce("OVERLAY_INSTANCE"),uo=Dt([At({transform:"{{transform}}",opacity:0}),Vt("{{showTransitionParams}}")]),mo=Dt([Vt("{{hideTransitionParams}}",At({transform:"{{transform}}",opacity:0}))]),on=(()=>{class t extends Fe{overlayService;zone;$pcOverlay=V(nn,{optional:!0,skipSelf:!0})??void 0;hostName="";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return lt.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return lt.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return lt.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return lt.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=K(void 0);visibleChange=new L;onBeforeShow=new L;onShow=new L;onBeforeHide=new L;onHide=new L;onAnimationStart=new L;onAnimationDone=new L;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=K();$appendTo=Oe(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=V(tn);bindDirectiveInstance=V(z,{self:!0});documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(Pe(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return le(le({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return le(le({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return fi(this.target,this.el?.nativeElement)}constructor(e,i){super(),this.overlayService=e,this.zone=i}onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}show(e,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&he(this.targetEl),this.modal&&Bt(this.document?.body,"p-overflow-hidden")}hide(e,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&he(this.targetEl),this.modal&&hi(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&xt.alignOverlay(this.overlayEl,this.targetEl,this.$appendTo())}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&St.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),this.hostAttrSelector()&&this.overlayEl&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),xt.appendOverlay(this.overlayEl,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo()),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&Bt(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let i=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.visible&&(this.show(i,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(i,!0),this.modalVisible=!1,this.unbindListeners(),xt.appendOverlay(this.overlayEl,this.targetEl,this.$appendTo()),St.clear(i),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",e)}handleEvents(e,i){this[e].emit(i),this.options&&this.options[e]&&this.options[e](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](i)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new gi(this.targetEl,e=>{(!this.listener||this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let n=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&n}):n)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!je()}):!je())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!je()}):!je())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),St.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static \u0275fac=function(i){return new(i||t)(pe(bt),pe(ke))};static \u0275cmp=ie({type:t,selectors:[["p-overlay"]],contentQueries:function(i,n,o){if(i&1&&(N(o,en,4),N(o,De,4)),i&2){let r;M(r=k())&&(n.contentTemplate=r.first),M(r=k())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(ne(eo,5),ne(en,5)),i&2){let o;M(o=k())&&(n.overlayViewChild=o.first),M(o=k())&&(n.contentViewChild=o.first)}},inputs:{hostName:"hostName",visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[ue([tn,{provide:nn,useExisting:t},{provide:_e,useExisting:t}]),de([z]),J],ngContentSelectors:to,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"class","pBind","click",4,"ngIf"],[3,"click","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(We(),b(0,ao,3,4,"div",2)),i&2&&a("ngIf",n.modalVisible)},dependencies:[me,Ae,Le,ee,z],encapsulation:2,data:{animation:[mi("overlayContentAnimation",[Lt(":enter",[Ft(uo)]),Lt(":leave",[Ft(mo)])])]},changeDetection:0})}return t})();var rn=["content"],ho=["item"],fo=["loader"],_o=["loadericon"],go=["element"],yo=["*"],jt=(t,s)=>({$implicit:t,options:s}),vo=t=>({numCols:t}),an=t=>({options:t}),bo=()=>({styleClass:"p-virtualscroller-loading-icon"}),wo=(t,s)=>({rows:t,columns:s});function xo(t,s){t&1&&Z(0)}function Co(t,s){if(t&1&&(q(0),b(1,xo,1,0,"ng-container",10),G()),t&2){let e=c(2);h(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Me(2,jt,e.loadedItems,e.getContentOptions()))}}function Io(t,s){t&1&&Z(0)}function To(t,s){if(t&1&&(q(0),b(1,Io,1,0,"ng-container",10),G()),t&2){let e=s.$implicit,i=s.index,n=c(3);h(),a("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",Me(2,jt,e,n.getOptions(i)))}}function So(t,s){if(t&1&&(O(0,"div",11,3),b(2,To,2,5,"ng-container",12),E()),t&2){let e=c(2);Ve(e.contentStyle),T(e.cn(e.cx("content"),e.contentStyleClass)),a("pBind",e.ptm("content")),h(2),a("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function Oo(t,s){if(t&1&&Te(0,"div",13),t&2){let e=c(2);T(e.cx("spacer")),a("ngStyle",e.spacerStyle)("pBind",e.ptm("spacer"))}}function Eo(t,s){t&1&&Z(0)}function Mo(t,s){if(t&1&&(q(0),b(1,Eo,1,0,"ng-container",10),G()),t&2){let e=s.index,i=c(4);h(),a("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",X(4,an,i.getLoaderOptions(e,i.both&&X(2,vo,i.numItemsInViewport.cols))))}}function ko(t,s){if(t&1&&(q(0),b(1,Mo,2,6,"ng-container",14),G()),t&2){let e=c(3);h(),a("ngForOf",e.loaderArr)}}function Vo(t,s){t&1&&Z(0)}function Ao(t,s){if(t&1&&(q(0),b(1,Vo,1,0,"ng-container",10),G()),t&2){let e=c(4);h(),a("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",X(3,an,_t(2,bo)))}}function Lo(t,s){if(t&1&&(xe(),Te(0,"svg",15)),t&2){let e=c(4);T(e.cx("loadingIcon")),a("spin",!0)("pBind",e.ptm("loadingIcon"))}}function Do(t,s){if(t&1&&b(0,Ao,2,5,"ng-container",6)(1,Lo,1,4,"ng-template",null,5,oe),t&2){let e=Se(2),i=c(3);a("ngIf",i.loaderIconTemplate||i._loaderIconTemplate)("ngIfElse",e)}}function Fo(t,s){if(t&1&&(O(0,"div",11),b(1,ko,2,1,"ng-container",6)(2,Do,3,2,"ng-template",null,4,oe),E()),t&2){let e=Se(3),i=c(2);T(i.cx("loader")),a("pBind",i.ptm("loader")),h(),a("ngIf",i.loaderTemplate||i._loaderTemplate)("ngIfElse",e)}}function Bo(t,s){if(t&1){let e=Q();q(0),O(1,"div",7,1),R("scroll",function(n){C(e);let o=c();return I(o.onContainerScroll(n))}),b(3,Co,2,5,"ng-container",6)(4,So,3,7,"ng-template",null,2,oe)(6,Oo,1,4,"div",8)(7,Fo,4,5,"div",9),E(),G()}if(t&2){let e=Se(5),i=c();h(),T(i.cn(i.cx("root"),i.styleClass)),a("ngStyle",i._style)("pBind",i.ptm("root")),P("id",i._id)("tabindex",i.tabindex),h(2),a("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",e),h(3),a("ngIf",i._showSpacer),h(),a("ngIf",!i.loaderDisabled&&i._showLoader&&i.d_loading)}}function zo(t,s){t&1&&Z(0)}function Ro(t,s){if(t&1&&(q(0),b(1,zo,1,0,"ng-container",10),G()),t&2){let e=c(2);h(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Me(5,jt,e.items,Me(2,wo,e._items,e.loadedColumns)))}}function Po(t,s){if(t&1&&(Ue(0),b(1,Ro,2,8,"ng-container",16)),t&2){let e=c();h(),a("ngIf",e.contentTemplate||e._contentTemplate)}}var No=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,$o={root:({instance:t})=>["p-virtualscroller",{"p-virtualscroller-inline":t.inline,"p-virtualscroller-both p-both-scroll":t.both,"p-virtualscroller-horizontal p-horizontal-scroll":t.horizontal}],content:"p-virtualscroller-content",spacer:"p-virtualscroller-spacer",loader:({instance:t})=>["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!t.loaderTemplate}],loadingIcon:"p-virtualscroller-loading-icon"},sn=(()=>{class t extends fe{name="virtualscroller";css=No;classes=$o;static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(t)))(n||t)}})();static \u0275prov=H({token:t,factory:t.\u0275fac})}return t})();var ln=new ce("SCROLLER_INSTANCE"),cn=(()=>{class t extends Fe{zone;componentName="virtualScroller";bindDirectiveInstance=V(z,{self:!0});$pcScroller=V(ln,{optional:!0,skipSelf:!0})??void 0;hostName="";get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n)),Object.entries(e).forEach(([i,n])=>this[`${i}`]!==n&&(this[`${i}`]=n)))}onLazyLoad=new L;onScroll=new L;onScrollIndexChange=new L;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:Array.isArray(e)?e.slice(this._appendOnly?0:this.first.cols,this.last.cols):e):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=V(sn);constructor(e){super(),this.zone=e}onInit(){this.setInitialState()}onChanges(e){let i=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:n,currentValue:o}=e.loading;this.lazy&&n!==o&&o!==this.d_loading&&(this.d_loading=o,i=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:n,currentValue:o}=e.numToleratedItems;n!==o&&o!==this.d_numToleratedItems&&(this.d_numToleratedItems=o)}if(e.options){let{previousValue:n,currentValue:o}=e.options;this.lazy&&n?.loading!==o?.loading&&o?.loading!==this.d_loading&&(this.d_loading=o.loading,i=!0),n?.numToleratedItems!==o?.numToleratedItems&&o?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=o.numToleratedItems)}this.initialized&&!i&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&(this.init(),this.calculateAutoSize())}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewInit(){Promise.resolve().then(()=>{this.viewInit()})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host")),this.initialized||this.viewInit()}onDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1}viewInit(){Pe(this.platformId)&&!this.initialized&&zt(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=$e(this.elementViewChild?.nativeElement),this.defaultHeight=Ne(this.elementViewChild?.nativeElement),this.defaultContentWidth=$e(this.contentEl),this.defaultContentHeight=Ne(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.bindResizeListener(),setTimeout(()=>{this.setSpacerSize(),this.setSize(),this.calculateOptions(),this.cd.detectChanges()},1))}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||Xe(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,(this.d_loading===void 0||this.d_loading===!1)&&(this.d_loading=this._loading||!1),this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=this.loaderArr.length>0?this.loaderArr:[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,i="auto"){if(this.both?e.every(o=>o>-1):e>-1){let o=this.first,{scrollTop:r=0,scrollLeft:l=0}=this.elementViewChild?.nativeElement,{numToleratedItems:f}=this.calculateNumItems(),u=this.getContentPosition(),_=this.itemSize,d=(g=0,w)=>g<=w?0:g,m=(g,w,B)=>g*w+B,v=(g=0,w=0)=>this.scrollTo({left:g,top:w,behavior:i}),S=this.both?{rows:0,cols:0}:0,x=!1,y=!1;this.both?(S={rows:d(e[0],f[0]),cols:d(e[1],f[1])},v(m(S.cols,_[1],u.left),m(S.rows,_[0],u.top)),y=this.lastScrollPos.top!==r||this.lastScrollPos.left!==l,x=S.rows!==o.rows||S.cols!==o.cols):(S=d(e,f),this.horizontal?v(m(S,_,u.left),r):v(l,m(S,_,u.top)),y=this.lastScrollPos!==(this.horizontal?l:r),x=S!==o),this.isRangeChanged=x,y&&(this.first=S)}}scrollInView(e,i,n="auto"){if(i){let{first:o,viewport:r}=this.getRenderedRange(),l=(_=0,d=0)=>this.scrollTo({left:_,top:d,behavior:n}),f=i==="to-start",u=i==="to-end";if(f){if(this.both)r.first.rows-o.rows>e[0]?l(r.first.cols*this._itemSize[1],(r.first.rows-1)*this._itemSize[0]):r.first.cols-o.cols>e[1]&&l((r.first.cols-1)*this._itemSize[1],r.first.rows*this._itemSize[0]);else if(r.first-o>e){let _=(r.first-1)*this._itemSize;this.horizontal?l(_,0):l(0,_)}}else if(u){if(this.both)r.last.rows-o.rows<=e[0]+1?l(r.first.cols*this._itemSize[1],(r.first.rows+1)*this._itemSize[0]):r.last.cols-o.cols<=e[1]+1&&l((r.first.cols+1)*this._itemSize[1],r.first.rows*this._itemSize[0]);else if(r.last-o<=e+1){let _=(r.first+1)*this._itemSize;this.horizontal?l(_,0):l(0,_)}}}else this.scrollToIndex(e,n)}getRenderedRange(){let e=(o,r)=>r||o?Math.floor(o/(r||o)):0,i=this.first,n=0;if(this.elementViewChild?.nativeElement){let{scrollTop:o,scrollLeft:r}=this.elementViewChild.nativeElement;if(this.both)i={rows:e(o,this._itemSize[0]),cols:e(r,this._itemSize[1])},n={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{let l=this.horizontal?r:o;i=e(l,this._itemSize),n=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:n}}}calculateNumItems(){let e=this.getContentPosition(),i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,o=(u,_)=>_||u?Math.ceil(u/(_||u)):0,r=u=>Math.ceil(u/2),l=this.both?{rows:o(n,this._itemSize[0]),cols:o(i,this._itemSize[1])}:o(this.horizontal?i:n,this._itemSize),f=this.d_numToleratedItems||(this.both?[r(l.rows),r(l.cols)]:r(l));return{numItemsInViewport:l,numToleratedItems:f}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:i}=this.calculateNumItems(),n=(l,f,u,_=!1)=>this.getLast(l+f+(l<u?2:3)*u,_),o=this.first,r=this.both?{rows:n(this.first.rows,e.rows,i[0]),cols:n(this.first.cols,e.cols,i[1],!0)}:n(this.first,e,i);this.last=r,this.numItemsInViewport=e,this.d_numToleratedItems=i,this._showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:o.cols}:0:o,last:Math.min(this._step?this._step:this.last,this._items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,i]=[$e(this.contentEl),Ne(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),i!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[n,o]=[$e(this.elementViewChild.nativeElement),Ne(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=n<this.defaultWidth?n+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=o<this.defaultHeight?o+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,i=!1){return this._items?Math.min(i?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),i=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),n=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),o=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),r=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:i,right:n,top:o,bottom:r,x:i+n,y:o+r}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement,i=e.parentElement?.parentElement,n=e.offsetWidth,o=i?.offsetWidth||0,r=this._scrollWidth||`${n||o}px`,l=e.offsetHeight,f=i?.offsetHeight||0,u=this._scrollHeight||`${l||f}px`,_=(d,m)=>e.style[d]=m;this.both||this.horizontal?(_("height",u),_("width",r)):_("height",u)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),i=(n,o,r,l=0)=>this.spacerStyle=Ke(le({},this.spacerStyle),{[`${n}`]:(o||[]).length*r+l+"px"});this.both?(i("height",this._items,this._itemSize[0],e.y),i("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?i("width",this._columns||this._items,this._itemSize,e.x):i("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let i=e?e.first:this.first,n=(r,l)=>r*l,o=(r=0,l=0)=>this.contentStyle=Ke(le({},this.contentStyle),{transform:`translate3d(${r}px, ${l}px, 0)`});if(this.both)o(n(i.cols,this._itemSize[1]),n(i.rows,this._itemSize[0]));else{let r=n(i,this._itemSize);this.horizontal?o(r,0):o(0,r)}}}onScrollPositionChange(e){let i=e.target;if(!i)throw new Error("Event target is null");let n=this.getContentPosition(),o=(y,g)=>y?y>g?y-g:y:0,r=(y,g)=>g||y?Math.floor(y/(g||y)):0,l=(y,g,w,B,D,$)=>y<=D?D:$?w-B-D:g+D-1,f=(y,g,w,B,D,$,j)=>y<=$?0:Math.max(0,j?y<g?w:y-$:y>g?w:y-2*$),u=(y,g,w,B,D,$=!1)=>{let j=g+B+2*D;return y>=D&&(j+=D+1),this.getLast(j,$)},_=o(i.scrollTop,n.top),d=o(i.scrollLeft,n.left),m=this.both?{rows:0,cols:0}:0,v=this.last,S=!1,x=this.lastScrollPos;if(this.both){let y=this.lastScrollPos.top<=_,g=this.lastScrollPos.left<=d;if(!this._appendOnly||this._appendOnly&&(y||g)){let w={rows:r(_,this._itemSize[0]),cols:r(d,this._itemSize[1])},B={rows:l(w.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],y),cols:l(w.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],g)};m={rows:f(w.rows,B.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],y),cols:f(w.cols,B.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],g)},v={rows:u(w.rows,m.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:u(w.cols,m.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},S=m.rows!==this.first.rows||v.rows!==this.last.rows||m.cols!==this.first.cols||v.cols!==this.last.cols||this.isRangeChanged,x={top:_,left:d}}}else{let y=this.horizontal?d:_,g=this.lastScrollPos<=y;if(!this._appendOnly||this._appendOnly&&g){let w=r(y,this._itemSize),B=l(w,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,g);m=f(w,B,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,g),v=u(w,m,this.last,this.numItemsInViewport,this.d_numToleratedItems),S=m!==this.first||v!==this.last||this.isRangeChanged,x=y}}return{first:m,last:v,isRangeChanged:S,scrollPos:x}}onScrollChange(e){let{first:i,last:n,isRangeChanged:o,scrollPos:r}=this.onScrollPositionChange(e);if(o){let l={first:i,last:n};if(this.setContentPosition(l),this.first=i,this.last=n,this.lastScrollPos=r,this.handleEvents("onScrollIndexChange",l),this._lazy&&this.isPageChanged(i)){let f={first:this._step?Math.min(this.getPageByFirst(i)*this._step,this._items.length-this._step):i,last:Math.min(this._step?(this.getPageByFirst(i)+1)*this._step:n,this._items.length)};(this.lazyLoadState.first!==f.first||this.lazyLoadState.last!==f.last)&&this.handleEvents("onLazyLoad",f),this.lazyLoadState=f}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this._showLoader){let{isRangeChanged:i}=this.onScrollPositionChange(e);(i||this._step&&this.isPageChanged())&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this._showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){Pe(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,i=je()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,i,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(zt(this.elementViewChild?.nativeElement)){let[e,i]=[$e(this.elementViewChild?.nativeElement),Ne(this.elementViewChild?.nativeElement)],[n,o]=[e!==this.defaultWidth,i!==this.defaultHeight];(this.both?n||o:this.horizontal?n:this.vertical&&o)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=i,this.defaultContentWidth=$e(this.contentEl),this.defaultContentHeight=Ne(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,i){return this.options&&this.options[e]?this.options[e](i):this[e].emit(i)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,i)=>this.getLoaderOptions(e,i),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both,scrollTo:this.scrollTo.bind(this),scrollToIndex:this.scrollToIndex.bind(this),orientation:this._orientation,scrollableElement:this.elementViewChild?.nativeElement}}getOptions(e){let i=(this._items||[]).length,n=this.both?this.first.rows+e:this.first+e;return{index:n,count:i,first:n===0,last:n===i-1,even:n%2===0,odd:n%2!==0}}getLoaderOptions(e,i){let n=this.loaderArr.length;return le({index:e,count:n,first:e===0,last:e===n-1,even:e%2===0,odd:e%2!==0,loading:this.d_loading},i)}static \u0275fac=function(i){return new(i||t)(pe(ke))};static \u0275cmp=ie({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(i,n,o){if(i&1&&(N(o,rn,4),N(o,ho,4),N(o,fo,4),N(o,_o,4),N(o,De,4)),i&2){let r;M(r=k())&&(n.contentTemplate=r.first),M(r=k())&&(n.itemTemplate=r.first),M(r=k())&&(n.loaderTemplate=r.first),M(r=k())&&(n.loaderIconTemplate=r.first),M(r=k())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(ne(go,5),ne(rn,5)),i&2){let o;M(o=k())&&(n.elementViewChild=o.first),M(o=k())&&(n.contentViewChild=o.first)}},hostVars:2,hostBindings:function(i,n){i&2&&Ze("height",n.height)},inputs:{hostName:"hostName",id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[ue([sn,{provide:ln,useExisting:t},{provide:_e,useExisting:t}]),de([z]),J],ngContentSelectors:yo,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngStyle","pBind"],[4,"ngFor","ngForOf"],["data-p-icon","spinner",3,"spin","pBind"],[4,"ngIf"]],template:function(i,n){if(i&1&&(We(),b(0,Bo,8,10,"ng-container",6)(1,Po,2,1,"ng-template",null,0,oe)),i&2){let o=Se(2);a("ngIf",!n._disabled)("ngIfElse",o)}},dependencies:[me,yt,Ae,Le,vt,It,ee,z],encapsulation:2})}return t})();var pn=`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`;var jo=["item"],Ho=["empty"],Qo=["header"],Ko=["footer"],qo=["selecteditem"],Go=["group"],Wo=["loader"],Uo=["removeicon"],Zo=["loadingicon"],Xo=["clearicon"],Yo=["dropdownicon"],Jo=["focusInput"],er=["multiIn"],tr=["multiContainer"],ir=["ddBtn"],nr=["items"],or=["scroller"],rr=["overlay"],sr=t=>({i:t}),mn=t=>({$implicit:t}),lr=(t,s,e)=>({removeCallback:t,index:s,class:e}),Et=t=>({height:t}),hn=(t,s)=>({$implicit:t,options:s}),ar=t=>({options:t}),cr=()=>({}),pr=(t,s,e)=>({option:t,i:s,scrollerOptions:e}),dr=(t,s)=>({$implicit:t,index:s});function ur(t,s){if(t&1){let e=Q();O(0,"input",18,2),R("input",function(n){C(e);let o=c();return I(o.onInput(n))})("keydown",function(n){C(e);let o=c();return I(o.onKeyDown(n))})("change",function(n){C(e);let o=c();return I(o.onInputChange(n))})("focus",function(n){C(e);let o=c();return I(o.onInputFocus(n))})("blur",function(n){C(e);let o=c();return I(o.onInputBlur(n))})("paste",function(n){C(e);let o=c();return I(o.onInputPaste(n))})("keyup",function(n){C(e);let o=c();return I(o.onInputKeyUp(n))}),E()}if(t&2){let e=c();T(e.cn(e.cx("pcInputText"),e.inputStyleClass)),a("pAutoFocus",e.autofocus)("pt",e.ptm("pcInputText"))("ngStyle",e.inputStyle)("variant",e.$variant())("invalid",e.invalid())("pSize",e.size())("fluid",e.hasFluid),P("type",e.type)("value",e.inputValue())("id",e.inputId)("autocomplete",e.autocomplete)("placeholder",e.placeholder)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function mr(t,s){if(t&1){let e=Q();xe(),O(0,"svg",21),R("click",function(){C(e);let n=c(2);return I(n.clear())}),E()}if(t&2){let e=c(2);T(e.cx("clearIcon")),a("pBind",e.ptm("clearIcon")),P("aria-hidden",!0)}}function hr(t,s){}function fr(t,s){t&1&&b(0,hr,0,0,"ng-template")}function _r(t,s){if(t&1){let e=Q();O(0,"span",22),R("click",function(){C(e);let n=c(2);return I(n.clear())}),b(1,fr,1,0,null,23),E()}if(t&2){let e=c(2);T(e.cx("clearIcon")),a("pBind",e.ptm("clearIcon")),P("aria-hidden",!0),h(),a("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function gr(t,s){if(t&1&&(q(0),b(1,mr,1,4,"svg",19)(2,_r,2,5,"span",20),G()),t&2){let e=c();h(),a("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),h(),a("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function yr(t,s){t&1&&Z(0)}function vr(t,s){if(t&1){let e=Q();O(0,"span",22),R("click",function(n){C(e);let o=c(2).index,r=c(2);return I(!r.readonly&&!r.$disabled()?r.removeOption(n,o):"")}),xe(),Te(1,"svg",31),E()}if(t&2){let e=c(4);T(e.cx("chipIcon")),a("pBind",e.ptm("chipIcon")),h(),T(e.cx("chipIcon")),P("aria-hidden",!0)}}function br(t,s){}function wr(t,s){t&1&&b(0,br,0,0,"ng-template")}function xr(t,s){if(t&1&&(O(0,"span",32),b(1,wr,1,0,null,29),E()),t&2){let e=c(2).index,i=c(2);a("pBind",i.ptm("chipIcon")),P("aria-hidden",!0),h(),a("ngTemplateOutlet",i.removeIconTemplate||i._removeIconTemplate)("ngTemplateOutletContext",rt(4,lr,i.removeOption.bind(i),e,i.cx("chipIcon")))}}function Cr(t,s){if(t&1&&b(0,vr,2,6,"span",20)(1,xr,2,8,"span",30),t&2){let e=c(3);a("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),h(),a("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}function Ir(t,s){if(t&1){let e=Q();O(0,"li",26,5)(2,"p-chip",28),R("onRemove",function(n){let o=C(e).index,r=c(2);return I(r.readonly?"":r.removeOption(n,o))}),b(3,yr,1,0,"ng-container",29)(4,Cr,2,2,"ng-template",null,6,oe),E()()}if(t&2){let e=s.$implicit,i=s.index,n=c(2);T(n.cx("chipItem",X(16,sr,i))),a("pBind",n.ptm("chipItem")),P("id",n.id+"_multiple_option_"+i)("aria-label",n.getOptionLabel(e))("aria-setsize",n.modelValue().length)("aria-posinset",i+1)("aria-selected",!0),h(2),T(n.cx("pcChip")),a("pt",n.ptm("pcChip"))("label",!n.selectedItemTemplate&&!n._selectedItemTemplate&&n.getOptionLabel(e))("disabled",n.$disabled())("removable",!0),h(),a("ngTemplateOutlet",n.selectedItemTemplate||n._selectedItemTemplate)("ngTemplateOutletContext",X(18,mn,e))}}function Tr(t,s){if(t&1){let e=Q();O(0,"ul",24,3),R("focus",function(n){C(e);let o=c();return I(o.onMultipleContainerFocus(n))})("blur",function(n){C(e);let o=c();return I(o.onMultipleContainerBlur(n))})("keydown",function(n){C(e);let o=c();return I(o.onMultipleContainerKeyDown(n))}),b(2,Ir,6,20,"li",25),O(3,"li",26)(4,"input",27,4),R("input",function(n){C(e);let o=c();return I(o.onInput(n))})("keydown",function(n){C(e);let o=c();return I(o.onKeyDown(n))})("change",function(n){C(e);let o=c();return I(o.onInputChange(n))})("focus",function(n){C(e);let o=c();return I(o.onInputFocus(n))})("blur",function(n){C(e);let o=c();return I(o.onInputBlur(n))})("paste",function(n){C(e);let o=c();return I(o.onInputPaste(n))})("keyup",function(n){C(e);let o=c();return I(o.onInputKeyUp(n))}),E()()()}if(t&2){let e=c();T(e.cx("inputMultiple")),a("pBind",e.ptm("inputMultiple"))("tabindex",-1),P("aria-orientation","horizontal")("aria-activedescendant",e.focused?e.focusedMultipleOptionId:void 0),h(2),a("ngForOf",e.modelValue()),h(),T(e.cx("inputChip")),a("pBind",e.ptm("inputChip")),h(),T(e.cx("pcInputText")),a("pAutoFocus",e.autofocus)("pBind",e.ptm("input"))("ngStyle",e.inputStyle),P("type",e.type)("id",e.inputId)("autocomplete",e.autocomplete)("name",e.name())("minlength",e.minlength())("maxlength",e.maxlength())("size",e.size())("min",e.min())("max",e.max())("pattern",e.pattern())("placeholder",e.$filled()?null:e.placeholder)("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Sr(t,s){if(t&1&&(xe(),Te(0,"svg",35)),t&2){let e=c(2);T(e.cx("loader")),a("pBind",e.ptm("loader"))("spin",!0),P("aria-hidden",!0)}}function Or(t,s){}function Er(t,s){t&1&&b(0,Or,0,0,"ng-template")}function Mr(t,s){if(t&1&&(O(0,"span",32),b(1,Er,1,0,null,23),E()),t&2){let e=c(2);T(e.cx("loader")),a("pBind",e.ptm("loader")),P("aria-hidden",!0),h(),a("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function kr(t,s){if(t&1&&(q(0),b(1,Sr,1,5,"svg",33)(2,Mr,2,5,"span",34),G()),t&2){let e=c();h(),a("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),h(),a("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Vr(t,s){if(t&1&&Te(0,"span",38),t&2){let e=c(2);a("ngClass",e.dropdownIcon),P("aria-hidden",!0)}}function Ar(t,s){if(t&1&&(xe(),Te(0,"svg",40)),t&2){let e=c(3);a("pBind",e.ptm("dropdown"))}}function Lr(t,s){}function Dr(t,s){t&1&&b(0,Lr,0,0,"ng-template")}function Fr(t,s){if(t&1&&(q(0),b(1,Ar,1,1,"svg",39)(2,Dr,1,0,null,23),G()),t&2){let e=c(2);h(),a("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),h(),a("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Br(t,s){if(t&1){let e=Q();O(0,"button",36,7),R("click",function(n){C(e);let o=c();return I(o.handleDropdownClick(n))}),b(2,Vr,1,2,"span",37)(3,Fr,3,2,"ng-container",14),E()}if(t&2){let e=c();T(e.cx("dropdown")),a("pBind",e.ptm("dropdown"))("disabled",e.$disabled()),P("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),h(2),a("ngIf",e.dropdownIcon),h(),a("ngIf",!e.dropdownIcon)}}function zr(t,s){t&1&&Z(0)}function Rr(t,s){t&1&&Z(0)}function Pr(t,s){if(t&1&&b(0,Rr,1,0,"ng-container",29),t&2){let e=s.$implicit,i=s.options;c(2);let n=Se(6);a("ngTemplateOutlet",n)("ngTemplateOutletContext",Me(2,hn,e,i))}}function Nr(t,s){t&1&&Z(0)}function $r(t,s){if(t&1&&b(0,Nr,1,0,"ng-container",29),t&2){let e=s.options,i=c(4);a("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",X(2,ar,e))}}function jr(t,s){t&1&&(q(0),b(1,$r,1,4,"ng-template",null,10,oe),G())}function Hr(t,s){if(t&1){let e=Q();O(0,"p-scroller",45,9),R("onLazyLoad",function(n){C(e);let o=c(2);return I(o.onLazyLoad.emit(n))}),b(2,Pr,1,5,"ng-template",null,1,oe)(4,jr,3,0,"ng-container",14),E()}if(t&2){let e=c(2);Ve(X(9,Et,e.scrollHeight)),a("pt",e.ptm("virtualScroller"))("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),h(4),a("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Qr(t,s){t&1&&Z(0)}function Kr(t,s){if(t&1&&(q(0),b(1,Qr,1,0,"ng-container",29),G()),t&2){c();let e=Se(6),i=c();h(),a("ngTemplateOutlet",e)("ngTemplateOutletContext",Me(3,hn,i.visibleOptions(),_t(2,cr)))}}function qr(t,s){if(t&1&&(O(0,"span"),ze(1),E()),t&2){let e=c(2).$implicit,i=c(3);h(),ot(i.getOptionGroupLabel(e.optionGroup))}}function Gr(t,s){t&1&&Z(0)}function Wr(t,s){if(t&1&&(q(0),O(1,"li",49),b(2,qr,2,1,"span",14)(3,Gr,1,0,"ng-container",29),E(),G()),t&2){let e=c(),i=e.$implicit,n=e.index,o=c().options,r=c(2);h(),T(r.cx("optionGroup")),a("pBind",r.ptm("optionGroup"))("ngStyle",X(8,Et,o.itemSize+"px")),P("id",r.id+"_"+r.getOptionIndex(n,o)),h(),a("ngIf",!r.groupTemplate),h(),a("ngTemplateOutlet",r.groupTemplate)("ngTemplateOutletContext",X(10,mn,i.optionGroup))}}function Ur(t,s){if(t&1&&(O(0,"span"),ze(1),E()),t&2){let e=c(2).$implicit,i=c(3);h(),ot(i.getOptionLabel(e))}}function Zr(t,s){t&1&&Z(0)}function Xr(t,s){if(t&1){let e=Q();q(0),O(1,"li",50),R("click",function(n){C(e);let o=c().$implicit,r=c(3);return I(r.onOptionSelect(n,o))})("mouseenter",function(n){C(e);let o=c().index,r=c().options,l=c(2);return I(l.onOptionMouseEnter(n,l.getOptionIndex(o,r)))}),b(2,Ur,2,1,"span",14)(3,Zr,1,0,"ng-container",29),E(),G()}if(t&2){let e=c(),i=e.$implicit,n=e.index,o=c().options,r=c(2);h(),T(r.cx("option",rt(14,pr,i,n,o))),a("pBind",r.getPTOptions(i,o,n,"option"))("ngStyle",X(18,Et,o.itemSize+"px")),P("id",r.id+"_"+r.getOptionIndex(n,o))("aria-label",r.getOptionLabel(i))("aria-selected",r.isSelected(i))("aria-disabled",r.isOptionDisabled(i))("data-p-focused",r.focusedOptionIndex()===r.getOptionIndex(n,o))("aria-setsize",r.ariaSetSize)("aria-posinset",r.getAriaPosInset(r.getOptionIndex(n,o))),h(),a("ngIf",!r.itemTemplate&&!r._itemTemplate),h(),a("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",Me(20,dr,i,o.getOptions?o.getOptions(n):n))}}function Yr(t,s){if(t&1&&b(0,Wr,4,12,"ng-container",14)(1,Xr,4,23,"ng-container",14),t&2){let e=s.$implicit,i=c(3);a("ngIf",i.isOptionGroup(e)),h(),a("ngIf",!i.isOptionGroup(e))}}function Jr(t,s){if(t&1&&(q(0),ze(1),G()),t&2){let e=c(4);h(),kt(" ",e.searchResultMessageText," ")}}function es(t,s){t&1&&Z(0,null,12)}function ts(t,s){if(t&1&&(O(0,"li",49),b(1,Jr,2,1,"ng-container",51)(2,es,2,0,"ng-container",23),E()),t&2){let e=c().options,i=c(2);T(i.cx("emptyMessage")),a("pBind",i.ptm("emptyMessage"))("ngStyle",X(7,Et,e.itemSize+"px")),h(),a("ngIf",!i.emptyTemplate&&!i._emptyTemplate)("ngIfElse",i.empty),h(),a("ngTemplateOutlet",i.emptyTemplate||i._emptyTemplate)}}function is(t,s){if(t&1&&(O(0,"ul",46,11),b(2,Yr,2,2,"ng-template",47)(3,ts,3,9,"li",48),E()),t&2){let e=s.$implicit,i=s.options,n=c(2);Ve(i.contentStyle),T(n.cn(n.cx("list"),i.contentStyleClass)),a("pBind",n.ptm("list")),P("id",n.id+"_list")("aria-label",n.listLabel),h(2),a("ngForOf",e),h(),a("ngIf",!e||e&&e.length===0&&n.showEmptyMessage)}}function ns(t,s){t&1&&Z(0)}function os(t,s){if(t&1&&(O(0,"div",41),b(1,zr,1,0,"ng-container",23),O(2,"div",42),b(3,Hr,5,11,"p-scroller",43)(4,Kr,2,6,"ng-container",14),E(),b(5,is,4,9,"ng-template",null,8,oe)(7,ns,1,0,"ng-container",23),E(),O(8,"span",44),ze(9),E()),t&2){let e=c();T(e.cn(e.cx("overlay"),e.panelStyleClass)),a("pBind",e.ptm("overlay"))("ngStyle",e.panelStyle),h(),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),h(),T(e.cx("listContainer")),Ze("max-height",e.virtualScroll?"auto":e.scrollHeight),a("pBind",e.ptm("listContainer"))("tabindex",-1),h(),a("ngIf",e.virtualScroll),h(),a("ngIf",!e.virtualScroll),h(3),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),h(2),kt(" ",e.selectedMessageText," ")}}var rs=`
    ${pn}

    /* For PrimeNG */
    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.focus.border.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }
`,ss={root:{position:"relative"}},ls={root:({instance:t})=>["p-autocomplete p-component p-inputwrapper",{"p-invalid":t.invalid(),"p-focus":t.focused,"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused&&!t.$disabled()||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.$disabled(),"p-autocomplete-fluid":t.hasFluid}],pcInputText:"p-autocomplete-input",inputMultiple:({instance:t})=>["p-autocomplete-input-multiple",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled"}],chipItem:({instance:t,i:s})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex()===s}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:({instance:t})=>["p-autocomplete-overlay p-component-overlay p-component",{"p-input-filled":t.$variant()==="filled","p-ripple-disabled":t.config.ripple()===!1}],listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:s,i:e,scrollerOptions:i})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(s),"p-focus":t.focusedOptionIndex()===t.getOptionIndex(e,i),"p-disabled":t.isOptionDisabled(s)}),emptyMessage:"p-autocomplete-empty-message",clearIcon:"p-autocomplete-clear-icon"},dn=(()=>{class t extends fe{name="autocomplete";style=rs;classes=ls;inlineStyles=ss;static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(t)))(n||t)}})();static \u0275prov=H({token:t,factory:t.\u0275fac})}return t})();var un=new ce("AUTOCOMPLETE_INSTANCE"),as={provide:Ci,useExisting:ti(()=>Mt),multi:!0},Mt=(()=>{class t extends Ki{overlayService;zone;$pcAutoComplete=V(un,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=V(z,{self:!0});minLength=1;minQueryLength;delay=300;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;addOnTab=!1;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;addOnBlur=!1;separator;appendTo=K(void 0);completeMethod=new L;onSelect=new L;onUnselect=new L;onAdd=new L;onFocus=new L;onBlur=new L;onDropdownClick=new L;onClear=new L;onInputKeydown=new L;onKeyUp=new L;onShow=new L;onHide=new L;onLazyLoad=new L;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;onHostClick(e){this.onContainerClick(e)}value;_suggestions=dt(null);timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;focusedMultipleOptionIndex=dt(-1);focusedOptionIndex=dt(-1);_componentStyle=V(dn);$appendTo=Oe(()=>this.appendTo()||this.config.overlayAppendTo());visibleOptions=Oe(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=Oe(()=>{let e=this.modelValue(),i=this.optionValueSelected?(this.suggestions||[]).find(n=>Je(n,e,this.equalityKey())):e;if(st(e))if(typeof e=="object"||this.optionValueSelected){let n=this.getOptionLabel(i);return n??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get searchResultMessageText(){return st(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue()?.length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(wt.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}constructor(e,i){super(),this.overlayService=e,this.zone=i}onInit(){this.id=this.id||_i("pn_id_"),this.cd.detectChanges()}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((i,n,o)=>{i.push({optionGroup:n,group:!0,index:o});let r=this.getOptionGroupChildren(n);return r&&r.forEach(l=>i.push(l)),i},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return Pt(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?Pt(this.visibleOptions().slice(0,e),n=>this.isValidOption(n)):-1;return i>-1?i:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?Ye(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.some(i=>Je(i,e,this.equalityKey())):!1:Je(this.modelValue(),e,this.equalityKey())}isOptionMatched(e,i){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===i.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL?.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.optionValue?void 0:this.dataKey}onContainerClick(e){this.$disabled()||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&he(this.inputEL?.nativeElement)}handleDropdownClick(e){let i;this.overlayVisible?this.hide(!0):(he(this.inputEL?.nativeElement),i=this.inputEL?.nativeElement?.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,i,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:i})}onInput(e){if(this.typeahead){let i=this.minQueryLength||this.minLength;this.searchTimeout&&clearTimeout(this.searchTimeout);let n=e.target.value;this.maxlength()!==null&&(n=n.split("").slice(0,this.maxlength()).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(n),n.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):n.length>=i?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,n,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let i=!1;if(this.visibleOptions()){let n=this.visibleOptions().find(o=>this.isOptionMatched(o,this.inputEL?.nativeElement?.value||""));n!==void 0&&(i=!0,!this.isSelected(n)&&this.onOptionSelect(e,n))}i||(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.$disabled())return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.$disabled()||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){if(this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.addOnBlur&&this.multiple&&!this.typeahead){let i=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();i&&!this.isSelected(i)&&(this.updateModel([...this.modelValue()||[],i]),this.onAdd.emit({originalEvent:e,value:i}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="")}this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){if(this.separator&&this.multiple&&!this.typeahead){let i=(e.clipboardData||window.clipboardData)?.getData("Text");if(i){let n=i.split(this.separator),o=[...this.modelValue()||[]];if(n.forEach(r=>{let l=r.trim();l&&!this.isSelected(l)&&o.push(l)}),o.length>(this.modelValue()||[]).length){let r=o.slice((this.modelValue()||[]).length);this.updateModel(o),r.forEach(l=>{this.onAdd.emit({originalEvent:e,value:l})}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault()}}}else this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(this.onInputKeydown.emit(e),e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:this.handleSeparatorKey(e);break}}handleSeparatorKey(e){if(this.separator&&this.multiple&&!this.typeahead&&(this.separator===e.key||typeof this.separator=="string"&&e.key===this.separator||this.separator instanceof RegExp&&e.key.match(this.separator))){let i=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();i&&!this.isSelected(i)&&(this.updateModel([...this.modelValue()||[],i]),this.onAdd.emit({originalEvent:e,value:i}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault())}}onArrowDownKey(e){if(!this.overlayVisible)return;let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}}onArrowLeftKey(e){let i=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(Rt(i.value)&&this.hasSelectedOption()?(he(this.multiContainerEL?.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:i}=e,n=i.value.length;i.setSelectionRange(0,e.shiftKey?n:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:i}=e,n=i.value.length;i.setSelectionRange(e.shiftKey?0:n,n),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){if(!this.typeahead&&!this.forceSelection&&this.multiple){let i=e.target.value?.trim();i&&!this.isSelected(i)&&(this.updateModel([...this.modelValue()||[],i]),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""))}if(this.overlayVisible)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide();else return;e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){if(this.focusedOptionIndex()!==-1){this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]);return}if(this.multiple&&!this.typeahead){let i=(this.multiInputEl?.nativeElement?.value||this.inputEL?.nativeElement?.value||"").trim();if(this.addOnTab&&i&&!this.isSelected(i)){this.updateModel([...this.modelValue()||[],i]),this.onAdd.emit({originalEvent:e,value:i}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.updateInputValue(),e.preventDefault(),this.overlayVisible&&this.hide();return}}this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(st(this.modelValue())&&!this.inputEL?.nativeElement?.value){let i=this.modelValue()[this.modelValue().length-1],n=this.modelValue().slice(0,-1);this.updateModel(n),this.onUnselect.emit({originalEvent:e,value:i})}e.stopPropagation()}}onArrowLeftKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(i)}onArrowRightKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex();i++,this.focusedMultipleOptionIndex.set(i),i>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),he(this.inputEL?.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,i,n=!0){this.multiple?(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.isSelected(i)||this.updateModel([...this.modelValue()||[],i])):this.updateModel(i),this.onSelect.emit({originalEvent:e,value:i}),n&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}search(e,i,n){i!=null&&(n==="input"&&i.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:i})))}removeOption(e,i){e.stopPropagation();let n=this.modelValue()[i],o=this.modelValue().filter((r,l)=>l!==i);this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:n}),he(this.inputEL?.nativeElement)}updateModel(e){let i=null;e&&(i=this.multiple?e.map(n=>this.getOptionValue(n)):this.getOptionValue(e)),this.value=i,this.writeModelValue(e),this.onModelChange(i),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let n=Xe(this.itemsViewChild.nativeElement,`li[id="${i}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,i){this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[i],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),e&&he(this.inputEL?.nativeElement),e&&he(this.inputEL?.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let i=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&he(this.inputEL?.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{i()},0)}clear(){this.updateModel(null),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.onClear.emit()}hasSelectedOption(){return st(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}getOptionLabel(e){return this.optionLabel?Ye(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Ye(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?Ye(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?Ye(e,this.optionGroupChildren):e.items}getPTOptions(e,i,n,o){return this.ptm(o,{context:{option:e,index:this.getOptionIndex(n,i),selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(n,i),disabled:this.isOptionDisabled(e)}})}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=Xe(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller?.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=Xe(this.itemsWrapper,".p-autocomplete-item.p-highlight");i&&i.scrollIntoView({block:"nearest",inline:"center"})}}writeControlValue(e,i){let n=this.multiple?this.visibleOptions().filter(o=>e?.some(r=>Je(r,o,this.equalityKey()))):this.visibleOptions().find(o=>Je(e,o,this.equalityKey()));this.value=e,i(Rt(n)?e:n),this.updateInputValue(),this.cd.markForCheck()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(i){return new(i||t)(pe(bt),pe(ke))};static \u0275cmp=ie({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(i,n,o){if(i&1&&(N(o,jo,5),N(o,Ho,5),N(o,Qo,5),N(o,Ko,5),N(o,qo,5),N(o,Go,5),N(o,Wo,5),N(o,Uo,5),N(o,Zo,5),N(o,Xo,5),N(o,Yo,5),N(o,De,4)),i&2){let r;M(r=k())&&(n.itemTemplate=r.first),M(r=k())&&(n.emptyTemplate=r.first),M(r=k())&&(n.headerTemplate=r.first),M(r=k())&&(n.footerTemplate=r.first),M(r=k())&&(n.selectedItemTemplate=r.first),M(r=k())&&(n.groupTemplate=r.first),M(r=k())&&(n.loaderTemplate=r.first),M(r=k())&&(n.removeIconTemplate=r.first),M(r=k())&&(n.loadingIconTemplate=r.first),M(r=k())&&(n.clearIconTemplate=r.first),M(r=k())&&(n.dropdownIconTemplate=r.first),M(r=k())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(ne(Jo,5),ne(er,5),ne(tr,5),ne(ir,5),ne(nr,5),ne(or,5),ne(rr,5)),i&2){let o;M(o=k())&&(n.inputEL=o.first),M(o=k())&&(n.multiInputEl=o.first),M(o=k())&&(n.multiContainerEL=o.first),M(o=k())&&(n.dropdownButton=o.first),M(o=k())&&(n.itemsViewChild=o.first),M(o=k())&&(n.scroller=o.first),M(o=k())&&(n.overlayViewChild=o.first)}},hostVars:4,hostBindings:function(i,n){i&1&&R("click",function(r){return n.onHostClick(r)}),i&2&&(Ve(n.sx("root")),T(n.cn(n.cx("root"),n.styleClass)))},inputs:{minLength:[2,"minLength","minLength",Re],minQueryLength:[2,"minQueryLength","minQueryLength",Re],delay:[2,"delay","delay",Re],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",F],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",F],virtualScroll:[2,"virtualScroll","virtualScroll",F],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",Re],virtualScrollOptions:"virtualScrollOptions",autoHighlight:[2,"autoHighlight","autoHighlight",F],forceSelection:[2,"forceSelection","forceSelection",F],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",F],baseZIndex:[2,"baseZIndex","baseZIndex",Re],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",F],group:[2,"group","group",F],completeOnFocus:[2,"completeOnFocus","completeOnFocus",F],showClear:[2,"showClear","showClear",F],dropdown:[2,"dropdown","dropdown",F],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",F],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",F],addOnTab:[2,"addOnTab","addOnTab",F],tabindex:[2,"tabindex","tabindex",Re],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",F],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",F],selectOnFocus:[2,"selectOnFocus","selectOnFocus",F],searchLocale:[2,"searchLocale","searchLocale",F],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",F],typeahead:[2,"typeahead","typeahead",F],addOnBlur:[2,"addOnBlur","addOnBlur",F],separator:"separator",appendTo:[1,"appendTo"]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onAdd:"onAdd",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onInputKeydown:"onInputKeydown",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[ue([as,dn,{provide:un,useExisting:t},{provide:_e,useExisting:t}]),de([z]),J],decls:9,vars:13,consts:[["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["focusInput","","multiIn",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","pt","class","ngStyle","variant","invalid","pSize","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"pBind","class","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","pRipple","",3,"pBind","class","disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","pt","hostAttrSelector","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pt","ngStyle","variant","invalid","pSize","fluid"],["data-p-icon","times",3,"pBind","class","click",4,"ngIf"],[3,"pBind","class","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","pBind","tabindex"],["role","option",3,"pBind","class",4,"ngFor","ngForOf"],["role","option",3,"pBind"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pBind","ngStyle"],[3,"onRemove","pt","label","disabled","removable"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind",4,"ngIf"],["data-p-icon","times-circle"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","class","spin",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["data-p-icon","spinner",3,"pBind","spin"],["type","button","pRipple","",3,"click","pBind","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"],[3,"pBind","ngStyle"],[3,"pBind","tabindex"],[3,"pt","items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","pt","items","itemSize","autoSize","lazy","options"],["role","listbox",3,"pBind"],["ngFor","",3,"ngForOf"],["role","option",3,"pBind","class","ngStyle",4,"ngIf"],["role","option",3,"pBind","ngStyle"],["pRipple","","role","option",3,"click","mouseenter","pBind","ngStyle"],[4,"ngIf","ngIfElse"]],template:function(i,n){if(i&1){let o=Q();b(0,ur,2,31,"input",13)(1,gr,3,2,"ng-container",14)(2,Tr,7,36,"ul",15)(3,kr,3,2,"ng-container",14)(4,Br,4,8,"button",16),O(5,"p-overlay",17,0),ft("visibleChange",function(l){return C(o),ht(n.overlayVisible,l)||(n.overlayVisible=l),I(l)}),R("onAnimationStart",function(l){return C(o),I(n.onOverlayAnimationStart(l))})("onHide",function(){return C(o),I(n.hide())}),b(7,os,10,15,"ng-template",null,1,oe),E()}i&2&&(a("ngIf",!n.multiple),h(),a("ngIf",n.$filled()&&!n.$disabled()&&n.showClear&&!n.loading),h(),a("ngIf",n.multiple),h(),a("ngIf",n.loading),h(),a("ngIf",n.dropdown),h(),a("pt",n.ptm("pcOverlay"))("hostAttrSelector",n.$attrSelector),mt("visible",n.overlayVisible),a("options",n.overlayOptions)("target","@parent")("appendTo",n.$appendTo())("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions))},dependencies:[me,gt,yt,Ae,Le,vt,on,Ji,xi,cn,yi,Tt,It,qi,$t,ee,wi,vi,z],encapsulation:2,changeDetection:0})}return t})(),fn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ie({type:t});static \u0275inj=Ce({imports:[Mt,ee,ee]})}return t})();var Ed=(()=>{let s=class s{constructor(i,n,o){this._mapService=i,this._searchService=n,this._cdr=o,this.locationSelected=new L,this.locationCleared=new L,this._destroy$=new it,this.suggestions$=new ae(null),this.search$=new it,this._watchForLoadChanges(),this._watchSelectedLocation()}_watchForLoadChanges(){this._mapService.load$.pipe(Wt(Boolean),Ge(this._destroy$)).subscribe(i=>{this._map=i,this._watchSearch()})}_watchSelectedLocation(){this._searchService.selectedLocation$.pipe(Ge(this._destroy$)).subscribe(i=>{this.value=i,this._cdr.markForCheck()})}_watchSearch(){this.search$.pipe(Jt(i=>this._searchService.suggest(i)),nt(()=>qe([])),Ge(this._destroy$)).subscribe(i=>{this.suggestions$.next([...i])})}onSearch(i){this.search$.next(i.query)}onClear(){this.value=null,this.suggestions$.next([]),this._searchService.selectedLocation$.next(null),this.locationCleared.emit()}onSelect(i){!i||!this._map||this._searchService.geocode(i.uri||i.label).subscribe(n=>{n&&(this.locationSelected.emit({coordinates:n,label:i.label}),this._map.update({location:{center:n,zoom:12,duration:400}}))})}ngOnDestroy(){this._destroy$.next(),this._destroy$.complete()}};s.\u0275fac=function(n){return new(n||s)(pe(Hi),pe(Qi),pe(pi))},s.\u0275cmp=ie({type:s,selectors:[["map-search-control"]],outputs:{locationSelected:"locationSelected",locationCleared:"locationCleared"},decls:2,vars:7,consts:[["field","label","minLength","3","delay","500","inputStyleClass","w-full pr-10 truncate","styleClass","w-full","placeholder","\u041F\u043E\u0438\u0441\u043A \u0430\u0434\u0440\u0435\u0441\u0430 / \u0433\u043E\u0440\u043E\u0434\u0430",3,"ngModelChange","completeMethod","onSelect","onClear","ngModel","suggestions","forceSelection","showClear","dropdown"]],template:function(n,o){n&1&&(O(0,"p-autocomplete",0),li(1,"async"),ft("ngModelChange",function(l){return ht(o.value,l)||(o.value=l),l}),R("completeMethod",function(l){return o.onSearch(l)})("onSelect",function(l){return o.onSelect(l.value)})("onClear",function(){return o.onClear()}),E()),n&2&&(mt("ngModel",o.value),a("suggestions",ai(1,5,o.suggestions$))("forceSelection",!0)("showClear",!0)("dropdown",!1))},dependencies:[me,Oi,Ti,Si,fn,Mt,Vi,ki,di],encapsulation:2,changeDetection:0});let t=s;return t})();var Ht;try{Ht=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ht=!1}var _n=(()=>{class t{_platformId=V(ni);isBrowser=this._platformId?Pe(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ht)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Qt(t){return Array.isArray(t)?t:[t]}var gn=new Set,Qe,vn=(()=>{class t{_platform=V(_n);_nonce=V(oi,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ds}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&ps(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ps(t,s){if(!gn.has(t))try{Qe||(Qe=document.createElement("style"),s&&Qe.setAttribute("nonce",s),Qe.setAttribute("type","text/css"),document.head.appendChild(Qe)),Qe.sheet&&(Qe.sheet.insertRule(`@media ${t} {body{ }}`,0),gn.add(t))}catch(e){console.error(e)}}function ds(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var us=(()=>{class t{_mediaMatcher=V(vn);_zone=V(ke);_queries=new Map;_destroySubject=new it;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return yn(Qt(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=yn(Qt(e)).map(r=>this._registerQuery(r).observable),o=qt(n);return o=Gt(o.pipe(Zt(1)),o.pipe(Xt(1),Ut(0))),o.pipe(Be(r=>{let l={matches:!1,breakpoints:{}};return r.forEach(({matches:f,query:u})=>{l.matches=l.matches||f,l.breakpoints[u]=f}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new Kt(r=>{let l=f=>this._zone.run(()=>r.next(f));return i.addListener(l),()=>{i.removeListener(l)}}).pipe(Yt(i),Be(({matches:r})=>({query:e,matches:r})),Ge(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function yn(t){return t.map(s=>s.split(",")).reduce((s,e)=>s.concat(e)).map(s=>s.trim())}export{Ac as a,hs as b,Mn as c,Pa as d,Ln as e,tc as f,Ji as g,Uc as h,Hi as i,Qi as j,Ed as k,us as l};
