"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[6623],{55988:(e,t,o)=>{o.d(t,{_K:()=>m,z3:()=>g});var i=o(39228),n=o(26325),a=o(45297),r=o(57431),s=o(89049),l=o(44630),d=o(91286),c=o(71111),u=o(31209),p=function(e,t,o,i){return new(o||(o=Promise))((function(n,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function s(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,s)}l((i=i.apply(e,t||[])).next())}))};const h=(0,c.atom)(s.hA);h.debugLabel="collectionCandidateAtom";const{useAtomService:m,useServiceState:f,useServiceDispatchers:g}=(0,u.i)(h,((e,t)=>({getCandidates(){return p(this,void 0,void 0,(function*(){const{user:o}=(0,r.x)();if(o){t(h,(e=>Object.assign(Object.assign({},e),{loading:!0})));try{const r=(0,l.bv)(e,h,{secUid:o.secUid}),s=yield function(e){return p(this,void 0,void 0,(function*(){return i.hd.get("/api/collection/candidate/item_list/",{query:e,baseUrlType:2,headers:{[n.nk]:i.hd.csrfToken}})}))}(Object.assign(Object.assign({},r),{appId:a.xE,scene:155}));(0,d.Tj)(e,t,h,"collection",s,{disableReportMore:!0})}catch(e){(0,d.e_)(t,h)}}}))},resetCandidates(){t(h,Object.assign({},s.hA))}})))},23303:(e,t,o)=>{o.d(t,{l:()=>A});var i=o(2787),n=o(40099),a=o(30543),r=o(58542),s=o(25616),l=o(32125),d=o(24834),c=o(92866),u=o(3797),p=o(74364);const h=(0,i.Y)(u.C,{size:72}),m=(0,n.memo)((function({listInfo:{statusCode:e},detailInfo:{reset:t,loadMore:o}}){const a=(0,n.useCallback)((()=>{t(),o()}),[t,o]);return(0,i.Y)(p.QW,{statusCode:e,iconElement:h,onRefresh:a})})),f=(0,n.memo)((function(){const e=(0,s.s)(),t=(0,n.useMemo)((()=>({title:e("collectionsProfilePage_collectionPage_emptyModal_header"),desc:e("collectionsProfilePage_collectionPage_emptyModal_desc")})),[e]);return(0,i.Y)(p.LL,{iconElement:h,emptyTip:t})}));var g=o(10745),v=o(66551),y=o(8154),b=o(41952);const x=(0,n.memo)((function({detailInfo:{loadMore:e},listInfo:{list:t,loading:o,hasMore:a,statusCode:r},listKey:s}){const l=(0,n.useRef)(null),d=(0,n.useCallback)((()=>{return t=this,i=void 0,s=function*(){!o&&a&&0===r&&(yield e())},new((n=void 0)||(n=Promise))((function(e,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function r(e){try{l(s.throw(e))}catch(e){o(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(e){e(o)}))).then(a,r)}l((s=s.apply(t,i||[])).next())}));var t,i,n,s}),[o,a,r,e]);return(0,g.O9)({onHitBottom:d,elemRef:l,bottomThreshold:200}),(0,i.Y)(b.Gi,{ref:l,children:(0,i.Y)(v.Z,{pageType:121,itemList:[],itemListKey:s,loading:o,onHitBottom:()=>{},children:t.map((e=>(0,i.Y)(y.l,{itemId:e},e)))})})}));function _(){return(0,i.Y)(b.Gi,{children:(0,i.Y)(c.C,{isUser:!0})})}const C=(0,n.memo)((function({loadMore:e,reset:t,listState:o}){const a=(0,n.useMemo)((()=>({statusCode:o.statusCode,loadMore:e,reset:t})),[o.statusCode,e,t]);return(0,n.useEffect)((()=>{0===o.statusCode&&o.hasMore&&0===o.list.length&&e()}),[e,o.hasMore,o.list.length,o.statusCode]),(0,i.Y)(d.s6,{Error:m,Empty:f,List:x,Skeleton:_,detailInfo:a,listInfo:o,listKey:"collection"})}));var w=o(17446),k=o(55988),P=o(62186),S=o(65530);const I=P.default.div`
  padding: 0 12px 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > div:first-of-type {
    height: 475px;
    width: ${456}px;

    ${S.ph} {
      grid-gap: ${12}px;
      grid-template-columns: repeat(${3}, 1fr) !important;

      // could be improved with container query once supported
      div[data-e2e='collection-selector-footer'] {
        padding: 67px 8px 8px;

        & > svg:first-of-type {
          width: 13px;
          height: 13px;
        }

        & > span:first-of-type {
          font-size: 12px;
          line-height: 12px;
        }
      }
    }
  }

  & > button {
    margin: 0 12px;
  }
`,Y=P.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 8px 8px 4px 8px;
  & > .leading {
    width: 88px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  & > .title {
    flex: 1;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
    color: ${e=>e.theme.colors.UIText1};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > .trailing {
    width: 88px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`,A=(0,n.memo)((function({isFromCreateCollection:e,open:t,onOpenChange:o,onCommit:d,onPrev:c,loading:u}){const p=(0,s.s)(),[h,m]=(0,k._K)((e=>e),l.bN),f=(0,w.Xq)(),g=(0,n.useMemo)((()=>0!==h.list.length||e?0===f.size&&e?(0,i.Y)(r.I05,{variant:"secondary",label:p("live_done"),onClick:d,loading:u}):(0,i.Y)(r.I05,{label:p("collectionsProfilePage_favoritesPage_selectVideosModal_btn2",{d_numOfVideos:f.size}),disabled:0===f.size,onClick:d,loading:u}):(0,i.Y)(r.I05,{variant:"secondary",label:p("Close"),onClick:()=>o(!1),loading:u})),[p,f.size,e,d,u,h.list.length,o]),v=(0,n.useCallback)((t=>{"Escape"===t.key?o(!1):"Enter"===t.key&&(h.list.length>0||e)&&d()}),[h.list.length,e,d,o]);return(0,n.useEffect)((()=>{if(t)return document.addEventListener("keydown",v,!0),()=>{document.removeEventListener("keydown",v,!0)}}),[v,t]),(0,i.FD)(r.nOL,{width:"large",style:{maxWidth:"480px",zIndex:3001},open:t,onOpenChange:o,outsidePressDismiss:0===f.size,children:[(0,i.FD)(Y,{children:[(0,i.Y)("div",{className:"leading",children:c&&(0,i.Y)(r.PH3,{icon:(0,i.Y)(r.VMf,{autoMirror:!0}),onClick:c})}),(0,i.Y)("div",{className:"title",children:p("collectionsProfilePage_favoritesPage_selectVideosModal_header")}),(0,i.Y)("div",{className:"trailing",children:(0,i.Y)(r.PH3,{"aria-label":"close",icon:(0,i.Y)(a.g,{}),onClick:()=>o(!1)})})]}),(0,i.FD)(I,{children:[(0,i.Y)(C,{listState:h,loadMore:m.getCandidates,reset:m.resetCandidates}),g]})]})}))},73174:(e,t,o)=>{o.d(t,{l:()=>c});var i=o(40099),n=o(50299),a=o(87934),r=o(25616),s=o(93608),l=o(28086),d=function(e,t,o,i){return new(o||(o=Promise))((function(n,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function s(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,s)}l((i=i.apply(e,t||[])).next())}))};function c({onSuccess:e,enterMethod:t,playModeForTea:o}){const c=(0,r.s)(),u=(0,n.Z)(),[{isFetching:p},h]=(0,l.I)(a.m,{resetStateBeforeDispatch:!0}),m=(0,i.useCallback)((({statusCode:i,collectionId:n,selectedVideosToAdd:a})=>{if(0===i){s.f.sendEvent("add_vids_to_collection",{enter_method:t,play_mode:o});const i=1===a.size?c("collectionsProfilePage_collectionsPage_topSection_addToastSingular"):c("collectionsProfilePage_collectionsPage_topSection_addToastPlural",{d_numOfVideos:a.size});u({success:!0,message:i}),e(n)}else u({success:!1,message:c("Sorry, something wrong with the server, please try again.")})}),[u,c,t,e,o]);return[p,(0,i.useCallback)(((e,t)=>d(this,void 0,void 0,(function*(){t.size>0&&(yield h({collectionId:e,commitIds:[...t].join(",")},(({statusCode:o})=>m({statusCode:o,collectionId:e,selectedVideosToAdd:t}))))}))),[h,m])]}},17446:(e,t,o)=>{o.d(t,{B6:()=>r,Xq:()=>s,fi:()=>d});var i=o(71111),n=o(31209);const a=(0,i.atom)(new Set),{useAtomService:r,useServiceState:s,useServiceDispatchers:l,getStaticApi:d}=(0,n.i)(a,((e,t)=>({toggle(e){t(a,(t=>{const o=new Set(t);return t.has(e)?o.delete(e):o.add(e),o}))},set(e){t(a,new Set(e))},clear(){t(a,new Set)}})))},8154:(e,t,o)=>{o.d(t,{l:()=>g});var i=o(2787),n=o(40099),a=o(58542),r=o(60484),s=o(53438),l=o(31344),d=o(60072),c=o(77170),u=o(32125),p=o(63185),h=o(80635),m=o(17446),f=o(41952);const g=(0,n.memo)((function({itemId:e,isOverlay:t}){const[o,g]=(0,m.B6)((t=>t.has(e))),v=(0,d.F3)((t=>t[e]),u.bN),{video:{cover:y,zoomCover:b},desc:x}=(0,n.useMemo)((()=>(0,r.L$)(v)),[v]),{playCount:_}=(0,c.D)(v),C=(0,n.useMemo)((()=>({zoomCover:b,cover:y,quality:"480"})),[b,y]),w=(0,s.mx)(v),k=w||!t,P=(0,n.useCallback)((()=>{g.toggle(e)}),[g,e]),S=(0,n.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),P()}),[P]),I=(0,n.useCallback)((e=>{13!==e.keyCode&&32!==e.keyCode||P()}),[P]),Y=(0,r.D1)(null!=_?_:0),{ratio:A}=l.f.compact;return(0,i.Y)(f.xO,{isOverlay:t,onClick:S,onKeyDown:I,children:(0,i.FD)(h.w,{e2eTag:"collection-item",ratio:A,borderRadius:"4px",onKeyDown:I,children:[(0,i.FD)(p.NR,{children:[(0,i.Y)(f.xl,{label:"",checked:o,onChange:P}),k&&(0,i.Y)(f.zj,{video:C,alt:x,hidePhotoIcon:t&&w})]}),!t&&(0,i.FD)(f.xk,{"data-e2e":"collection-selector-footer",children:[(0,i.Y)(a.bt4,{}),(0,i.Y)("span",{children:Y})]})]})})}))},41952:(e,t,o)=>{o.d(t,{Gi:()=>d,xO:()=>p,xk:()=>u,xl:()=>c,zj:()=>h});var i=o(62186),n=o(58542),a=o(32545),r=o(92060),s=o(63185),l=o(56999);const d=i.default.div`
  overflow: auto;

  scroll-behavior: smooth;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`,c=(0,i.default)(n.h$y)`
  position: absolute;
  top: ${8}px;
  inset-inline-end: ${8}px;
  pointer-events: none;
  z-index: 1;

  & > .TUXCheckboxStandalone--circle > .TUXCheckboxStandalone-indicator {
    border-radius: 50%;
    border: 2.26px solid ${e=>e.theme.colors.ConstTextInverse};
  }

  & > .TUXCheckbox-labelContainer {
    display: none;
  }
`,u=(0,i.default)(r.xk)`
  display: flex;
  align-items: center;
  height: unset;
  color: ${e=>e.theme.colors.ConstTextInverse};
  gap: 4px;
  padding: 67px 13px 8px;
  pointer-events: none;

  & > svg:first-of-type {
    width: 18px;
    height: 18px;
  }

  & > span:first-of-type {
    font-size: 16px;
    font-weight: 500;
  }
`,p=(0,i.default)(s.iP,{target:"e18o3lv10"})((({isOverlay:e})=>[e&&{position:"absolute",top:0,zIndex:1,height:"100%",width:"100%",[`${l.h9}`]:{visibility:"hidden"}}]),"label:DivSelectorItemContainer;"),h=(0,i.default)(a.x)`
  clip-path: ${e=>e.hidePhotoIcon?"circle(14px at calc(100% - 20px) 20px)":"none"};
  pointer-events: ${e=>e.hidePhotoIcon?"none":"auto"};
`},92866:(e,t,o)=>{o.d(t,{C:()=>d,p:()=>c});var i=o(2787),n=o(40099),a=o(88920),r=o(48933),s=o(99051);function l({data:{mode:e,aspectRatio:t}}){return(0,i.Y)(s.pQ,{mode:e,aspectRatio:t})}const d=(0,n.memo)((function({mode:e,aspectRatio:t=208/276,isMasonry:o,isUser:d}){const{isInProductHoldout:c}=(0,a.Vv)(),u=!c,p=(0,n.useMemo)((()=>{if(!o)return Array(24).fill(t);const e=[3/4,3/4,4/3,16/9,9/16,9/16,9/16,1];return Array.from({length:24},(()=>e[Math.floor(Math.random()*e.length)]))}),[o,t]),h=o?(0,i.Y)(r.k,{items:p.map((t=>({mode:e,aspectRatio:t}))),render:l}):p.map(((t,o)=>(0,i.Y)(l,{index:o,data:{mode:e,aspectRatio:t}},o)));return(0,i.Y)(s.Ct,{mode:e,isMasonry:o,useLargerGrid:d&&u,children:h})})),c=(0,n.memo)((function({row:e=4,gap:t="18px",radius:o="8px",cardWidth:n="226px",cardHeight:a="302px"}){return(0,i.Y)(s.z_,{children:new Array(e).fill(1).map(((e,t)=>e+t)).map((e=>{return r=e,(0,i.Y)(s.C2,{children:new Array(3).fill(1).map(((e,t)=>e+t)).map((e=>(0,i.Y)(s.Ql,{cardWidth:n,cardHeight:a,gap:t,radius:o},e)))},r);var r}))})}))},99051:(e,t,o)=>{o.d(t,{C2:()=>u,Ct:()=>l,Ql:()=>p,pQ:()=>d,z_:()=>c});var i=o(75431),n=o(62186),a=o(72153),r=o(65530);const s=(0,i.i7)({"0%":{backgroundPositionX:"200%"},"100%":{backgroundPositionX:"-150%"}}),l=r.ph,d=(0,n.default)("div",{target:"e15jf4tc0"})((({theme:e,mode:t,aspectRatio:o=208/276})=>[{borderRadius:"explore"===t?"8px":"4px",position:"relative",width:"100%",paddingTop:100/o+"%",backgroundColor:e.colors.BGPlaceholderDefault,backgroundImage:"linear-gradient(90deg, rgba(22, 24, 35, 0) 0%, rgba(22, 24, 35, .04) 50%, rgba(22, 24, 35, 0) 100%)",backgroundSize:"200% 100%",backgroundRepeat:"no-repeat",animation:`${s} cubic-bezier(0, 0, 1, 1) 1.5s infinite`}]),"label:DivSkeletonCard;"),c=(0,n.default)("div",{target:"e15jf4tc1"})({display:"flex",flexDirection:"column",paddingTop:"20px"},"label:DivSkeletonContainerV1;"),u=(0,n.default)("div",{target:"e15jf4tc2"})({display:"flex"},"label:DivSkeletonRowContainer;"),p=(0,n.default)("div",{target:"e15jf4tc3"})((({theme:e,cardWidth:t,cardHeight:o,gap:i,radius:n})=>[(0,a.mp)({direction:e.direction,marginEnd:i}),{width:t,height:o,borderRadius:n,marginBottom:i,display:"block",float:"left",overflow:"hidden",flex:"0 0 auto",backgroundColor:e.colors.BGPlaceholderDefault,backgroundImage:"linear-gradient(90deg, rgba(22, 24, 35, 0) 0%, rgba(22, 24, 35, .04) 50%, rgba(22, 24, 35, 0) 100%)",backgroundSize:"200% 100%",backgroundRepeat:"no-repeat",animation:`${s} cubic-bezier(0, 0, 1, 1) 1.5s infinite`}]),"label:DivSkeletonCardV1;")},25047:(e,t,o)=>{o.d(t,{H:()=>f});var i=o(2787),n=o(40099),a=o(53873),r=o(61595),s=o(76579),l=o(51664),d=o(13685),c=o(35656),u=o(64738),p=o(9782),h=o(93608),m=o(20024);const f=(0,n.memo)((({isFTC:e,user:t,e2eTag:o,size:f=116,quality:g="Medium"})=>{const{uniqueId:v,secUid:y}=t,b=m.Rg("avatar-stable-url-hook",{user:t}),x=t[`avatar${g}`],[_]=(0,u.useAtom)(r.K),{livePreviewSonAb:C}=(0,s.Ru)(),w=_.isLive&&"v2"!==C&&"v3"!==C,k=(0,l.AL)({user:t,enterMethod:"others_photo"}),P=(0,n.useMemo)((()=>({enter_from_merge:k.enter_from_merge,enter_method:k.enter_method})),[k]),{livePreviewAb:S}=(0,s.$7)(),I="v2"!==S&&"v3"!==S||_.isError;(0,n.useEffect)((()=>{w&&p.mx.handleLiveShow({enter_from_merge:k.enter_from_merge,enter_method:k.enter_method,follow_status:k.follow_status,anchor_id:k.anchor_id,room_id:k.room_id,action_type:k.action_type,previous_page:h.f.commonParams.previous_page})}),[w]);const Y=(0,n.useCallback)((()=>{w&&p.mx.handleRecLivePlay({enter_from_merge:k.enter_from_merge,enter_method:k.enter_method,follow_status:k.follow_status,anchor_id:k.anchor_id,room_id:k.room_id,action_type:k.action_type,previous_page:h.f.commonParams.previous_page})}),[k,w]),A=()=>(0,i.Y)(d.i,{alt:null==b?void 0:b.alt,isShowLive:w,src:x,size:f,needAnimation:I,e2eTag:o,isBiggerBadge:!0});return e?(0,i.Y)(a.A,{width:96,height:96,"data-e2e":"user-avatar"}):w?(0,i.Y)(c.B,{uniqueId:v,secUid:y,teaParams:k,extraQuery:P,onClick:Y,children:A()}):A()}))},67396:(e,t,o)=>{o.d(t,{w:()=>s});var i=o(2787),n=o(40099),a=o(58542),r=o(43291);const s=(0,n.memo)((0,n.forwardRef)((function(e,t){return(0,i.Y)(r.iS,Object.assign({ref:t,role:"button",label:"",variant:"secondary",leadingIcon:(0,i.Y)(a.aCW,{})},e))})))},95958:(e,t,o)=>{o.d(t,{S:()=>s,t:()=>l});var i=o(2787),n=o(47236),a=o(6990),r=o(67396);const s=(0,n.Ay)({resolved:{},chunkName:()=>"share",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!o.m[t]},importAsync:()=>Promise.all([o.e(9443),o.e(1799),o.e(5956),o.e(8564),o.e(1735),o.e(2396),o.e(2924),o.e(5877),o.e(8014),o.e(4161),o.e(8871),o.e(7485),o.e(5985),o.e(3895),o.e(7284),o.e(4091),o.e(2820),o.e(2615),o.e(6157),o.e(2223),o.e(8788),o.e(3862),o.e(6711),o.e(3976)]).then(o.bind(o,72353)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return o(t)},resolve:()=>72353},Object.assign({fallback:(0,i.Y)(r.w,{})},a.KE)),l=(0,n.Ay)({resolved:{},chunkName:()=>"revamp",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!o.m[t]},importAsync:()=>Promise.all([o.e(9443),o.e(1799),o.e(5956),o.e(8564),o.e(5985),o.e(3895),o.e(7284),o.e(4091),o.e(2820),o.e(6157),o.e(2223),o.e(8788),o.e(3862),o.e(6711),o.e(9820)]).then(o.bind(o,24913)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return o(t)},resolve:()=>24913},Object.assign({fallback:(0,i.Y)(r.w,{})},a.KE))},43291:(e,t,o)=>{o.d(t,{$7:()=>l,Dx:()=>s,iS:()=>d});var i=o(62186),n=o(72153),a=o(58542),r=o(88091);const s=(0,i.default)("div",{target:"efrkfhz0"})([{position:"relative",display:"flex",flexDirection:"row",alignItems:"center",gap:"12px",marginTop:"20px"}],"label:DivButtonPanelWrapper;"),l=(0,i.default)(a.I05,{target:"efrkfhz1"})((0,n.jJ)({max:r.f5.Small-1,style:{minWidth:"0 !important",width:"40px !important",paddingLeft:"0 !important",paddingRight:"0 !important","& > :first-child":{"& > .TUXButton-label":{display:"none !important"}}}},{min:r.f5.Small,style:{minWidth:"0 !important",width:"fit-content","& > :first-of-type":{"& > .TUXButton-iconContainer":{display:"none !important"},"& > .TUXButton-label":{margin:"unset !important"}}}}),"label:StyledTUXResponsiveButton;"),d=(0,i.default)(a.I05,{target:"efrkfhz2"})({minWidth:"0 !important",width:"40px !important",paddingLeft:"0 !important",paddingRight:"0 !important","& > :first-of-type":{"& > .TUXButton-label":{display:"none !important"}}},"label:StyledTUXIconOnlyButton;")},73713:(e,t,o)=>{o.d(t,{N:()=>n,R:()=>a});var i=o(39228);const n=e=>i.hd.get("/webcast/room/preload_room/",{query:e,baseUrlType:4}),a=e=>i.hd.get("/webcast/room/check_alive/",{query:e,baseUrlType:4})},61595:(e,t,o)=>{o.d(t,{K:()=>r,r:()=>l});var i=o(58632),n=o(71111),a=o(73713);const r=(0,n.atom)({isLive:!1,isError:!1,isBlock:!1}),s=(0,n.atom)({isFatal:!1,isEnd:!1,roomInfo:null}),l=(0,n.atom)((e=>e(s)),((e,t,o)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){try{const e=yield(0,a.N)(o);if(!(null==e?void 0:e.data))throw Error("no data");t(s,{roomInfo:e.data,isFatal:!0,isEnd:!0})}catch(e){t(s,{roomInfo:null,isFatal:!0,isEnd:!0})}}))))}}]);