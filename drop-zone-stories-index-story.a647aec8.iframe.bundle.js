"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[4836],{"./packages/compose/build-module/hooks/use-drop-zone/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useDropZone});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_ref_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-ref-effect/index.js");function useFreshRef(value){const ref=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current=value,ref}function useDropZone({dropZoneElement,isDisabled,onDrop:_onDrop,onDragStart:_onDragStart,onDragEnter:_onDragEnter,onDragLeave:_onDragLeave,onDragEnd:_onDragEnd,onDragOver:_onDragOver}){const onDropRef=useFreshRef(_onDrop),onDragStartRef=useFreshRef(_onDragStart),onDragEnterRef=useFreshRef(_onDragEnter),onDragLeaveRef=useFreshRef(_onDragLeave),onDragEndRef=useFreshRef(_onDragEnd),onDragOverRef=useFreshRef(_onDragOver);return(0,_use_ref_effect__WEBPACK_IMPORTED_MODULE_1__.Z)((elem=>{if(isDisabled)return;const element=null!=dropZoneElement?dropZoneElement:elem;let isDragging=!1;const{ownerDocument}=element;function maybeDragStart(event){isDragging||(isDragging=!0,ownerDocument.addEventListener("dragend",maybeDragEnd),ownerDocument.addEventListener("mousemove",maybeDragEnd),onDragStartRef.current&&onDragStartRef.current(event))}function onDragEnter(event){event.preventDefault(),element.contains(event.relatedTarget)||onDragEnterRef.current&&onDragEnterRef.current(event)}function onDragOver(event){!event.defaultPrevented&&onDragOverRef.current&&onDragOverRef.current(event),event.preventDefault()}function onDragLeave(event){(function isElementInZone(targetToCheck){const{defaultView}=ownerDocument;if(!(targetToCheck&&defaultView&&targetToCheck instanceof defaultView.HTMLElement&&element.contains(targetToCheck)))return!1;let elementToCheck=targetToCheck;do{if(elementToCheck.dataset.isDropZone)return elementToCheck===element}while(elementToCheck=elementToCheck.parentElement);return!1})(event.relatedTarget)||onDragLeaveRef.current&&onDragLeaveRef.current(event)}function onDrop(event){event.defaultPrevented||(event.preventDefault(),event.dataTransfer&&event.dataTransfer.files.length,onDropRef.current&&onDropRef.current(event),maybeDragEnd(event))}function maybeDragEnd(event){isDragging&&(isDragging=!1,ownerDocument.removeEventListener("dragend",maybeDragEnd),ownerDocument.removeEventListener("mousemove",maybeDragEnd),onDragEndRef.current&&onDragEndRef.current(event))}return element.dataset.isDropZone="true",element.addEventListener("drop",onDrop),element.addEventListener("dragenter",onDragEnter),element.addEventListener("dragover",onDragOver),element.addEventListener("dragleave",onDragLeave),ownerDocument.addEventListener("dragenter",maybeDragStart),()=>{delete element.dataset.isDropZone,element.removeEventListener("drop",onDrop),element.removeEventListener("dragenter",onDragEnter),element.removeEventListener("dragover",onDragOver),element.removeEventListener("dragleave",onDragLeave),ownerDocument.removeEventListener("dragend",maybeDragEnd),ownerDocument.removeEventListener("mousemove",maybeDragEnd),ownerDocument.removeEventListener("dragenter",maybeDragStart)}}),[isDisabled,dropZoneElement])}},"./packages/compose/build-module/hooks/use-media-query/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useMediaQuery});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const matchMediaCache=new Map;function useMediaQuery(query){const source=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const mediaQueryList=function getMediaQueryList(query){if(!query)return null;let match=matchMediaCache.get(query);return match||("undefined"!=typeof window&&"function"==typeof window.matchMedia?(match=window.matchMedia(query),matchMediaCache.set(query,match),match):null)}(query);return{subscribe:onStoreChange=>mediaQueryList?(mediaQueryList.addEventListener?.("change",onStoreChange),()=>{mediaQueryList.removeEventListener?.("change",onStoreChange)}):()=>{},getValue(){var _mediaQueryList$match;return null!==(_mediaQueryList$match=mediaQueryList?.matches)&&void 0!==_mediaQueryList$match&&_mediaQueryList$match}}}),[query]);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(source.subscribe,source.getValue,(()=>!1))}},"./packages/compose/build-module/hooks/use-reduced-motion/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _use_media_query__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/compose/build-module/hooks/use-media-query/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>(0,_use_media_query__WEBPACK_IMPORTED_MODULE_0__.Z)("(prefers-reduced-motion: reduce)")},"./packages/compose/build-module/hooks/use-ref-effect/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useRefEffect});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useRefEffect(callback,dependencies){const cleanup=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node?cleanup.current=callback(node):cleanup.current&&cleanup.current()}),dependencies)}},"./packages/dom/build-module/data-transfer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getFilesFromDataTransfer(dataTransfer){const files=Array.from(dataTransfer.files);return Array.from(dataTransfer.items).forEach((item=>{const file=item.getAsFile();file&&!files.find((({name,type,size})=>name===file.name&&type===file.type&&size===file.size))&&files.push(file)})),files}__webpack_require__.d(__webpack_exports__,{f:()=>getFilesFromDataTransfer})},"./packages/icons/build-module/icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function Icon({icon,size=24,...props},ref){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon,{width:size,height:size,...props,ref})}))},"./packages/icons/build-module/library/upload.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"}))},"./packages/primitives/build-module/svg/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,G:()=>G,UL:()=>Rect,Wj:()=>SVG,x1:()=>Line,y$:()=>Path});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const Circle=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",props),G=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",props),Line=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line",props),Path=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",props),Rect=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",props),SVG=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({className,isPressed,...props},ref)=>{const appliedProps={...props,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)(className,{"is-pressed":isPressed})||void 0,"aria-hidden":!0,focusable:!1};return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",{...appliedProps,ref})}));SVG.displayName="SVG"},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),use_force_update=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-force-update.mjs"),use_is_mounted=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext._);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random()]:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.O.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||(0,use_force_update.N)()[0],isMounted=(0,use_is_mounted.t)(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:childrenToRender.map((child=>(0,jsx_runtime.jsx)(PresenceChild,{isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode,children:child},getChildKey(child))))});childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{exitingChildren.delete(key);const leftOverKeys=Array.from(allChildren.keys()).filter((childKey=>!targetKeys.includes(childKey)));if(leftOverKeys.forEach((leftOverKey=>allChildren.delete(leftOverKey))),presentChildren.current=filteredChildren.filter((presentChild=>{const presentChildKey=getChildKey(presentChild);return presentChildKey===key||leftOverKeys.includes(presentChildKey)})),!exitingChildren.size){if(!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=(0,jsx_runtime.jsx)(PresenceChild,{isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode,children:child},getChildKey(child)),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:(0,jsx_runtime.jsx)(PresenceChild,{isPresent:!0,presenceAffectsLayout,mode,children:child},getChildKey(child))})),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child)))})}},"./node_modules/framer-motion/dist/es/utils/use-force-update.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>useForceUpdate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/frame.mjs");function useForceUpdate(){const isMounted=(0,_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(),[forcedRenderCount,setForcedRenderCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),forceRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}},"./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useIsMounted});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}},"./packages/components/src/drop-zone/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),icon=__webpack_require__("./packages/icons/build-module/icon/index.js"),upload=__webpack_require__("./packages/icons/build-module/library/upload.js"),data_transfer=__webpack_require__("./packages/dom/build-module/data-transfer.js"),use_reduced_motion=__webpack_require__("./packages/compose/build-module/hooks/use-reduced-motion/index.js"),use_drop_zone=__webpack_require__("./packages/compose/build-module/hooks/use-drop-zone/index.js"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const backdrop={hidden:{opacity:0},show:{opacity:1,transition:{type:"tween",duration:.2,delay:0,delayChildren:.1}},exit:{opacity:0,transition:{duration:.2,delayChildren:0}}},foreground={hidden:{opacity:0,scale:.9},show:{opacity:1,scale:1,transition:{duration:.1}},exit:{opacity:0,scale:.9}};function DropIndicator({label}){const disableMotion=(0,use_reduced_motion.Z)(),children=(0,jsx_runtime.jsx)(motion.E.div,{variants:backdrop,initial:disableMotion?"show":"hidden",animate:"show",exit:disableMotion?"show":"exit",className:"components-drop-zone__content",style:{pointerEvents:"none"},children:(0,jsx_runtime.jsxs)(motion.E.div,{variants:foreground,children:[(0,jsx_runtime.jsx)(icon.Z,{icon:upload.Z,className:"components-drop-zone__content-icon"}),(0,jsx_runtime.jsx)("span",{className:"components-drop-zone__content-text",children:label||(0,build_module.__)("Drop files to upload")})]})});return disableMotion?children:(0,jsx_runtime.jsx)(AnimatePresence.M,{children})}function DropZoneComponent({className,label,onFilesDrop,onHTMLDrop,onDrop,...restProps}){const[isDraggingOverDocument,setIsDraggingOverDocument]=(0,react.useState)(),[isDraggingOverElement,setIsDraggingOverElement]=(0,react.useState)(),[type,setType]=(0,react.useState)(),ref=(0,use_drop_zone.Z)({onDrop(event){const files=event.dataTransfer?(0,data_transfer.f)(event.dataTransfer):[],html=event.dataTransfer?.getData("text/html");html&&onHTMLDrop?onHTMLDrop(html):files.length&&onFilesDrop?onFilesDrop(files):onDrop&&onDrop(event)},onDragStart(event){setIsDraggingOverDocument(!0);let _type="default";event.dataTransfer?.types.includes("text/html")?_type="html":(event.dataTransfer?.types.includes("Files")||(event.dataTransfer?(0,data_transfer.f)(event.dataTransfer):[]).length>0)&&(_type="file"),setType(_type)},onDragEnd(){setIsDraggingOverDocument(!1),setType(void 0)},onDragEnter(){setIsDraggingOverElement(!0)},onDragLeave(){setIsDraggingOverElement(!1)}}),classes=(0,clsx.Z)("components-drop-zone",className,{"is-active":(isDraggingOverDocument||isDraggingOverElement)&&("file"===type&&onFilesDrop||"html"===type&&onHTMLDrop||"default"===type&&onDrop),"is-dragging-over-document":isDraggingOverDocument,"is-dragging-over-element":isDraggingOverElement,[`is-dragging-${type}`]:!!type});return(0,jsx_runtime.jsx)("div",{...restProps,ref,className:classes,children:isDraggingOverElement&&(0,jsx_runtime.jsx)(DropIndicator,{label})})}DropIndicator.displayName="DropIndicator",DropZoneComponent.displayName="DropZoneComponent";const drop_zone=DropZoneComponent;try{DropZoneComponent.displayName="DropZoneComponent",DropZoneComponent.__docgenInfo={description:"`DropZone` is a component creating a drop zone area taking the full size of its parent element. It supports dropping files, HTML content or any other HTML drop event.\n\n```jsx\nimport { DropZone } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyDropZone = () => {\n  const [ hasDropped, setHasDropped ] = useState( false );\n\n  return (\n    <div>\n      { hasDropped ? 'Dropped!' : 'Drop something here' }\n      <DropZone\n        onFilesDrop={ () => setHasDropped( true ) }\n        onHTMLDrop={ () => setHasDropped( true ) }\n        onDrop={ () => setHasDropped( true ) }\n      />\n    </div>\n  );\n}\n```",displayName:"DropZoneComponent",props:{className:{defaultValue:null,description:"A CSS `class` to give to the wrapper element.",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:"`__( 'Drop files to upload' )`"},description:"A string to be shown within the drop zone area.",name:"label",required:!1,type:{name:"string"}},onDrop:{defaultValue:null,description:"The function is generic drop handler called if the `onFilesDrop` or `onHTMLDrop` are not called.\nIt receives the drop `event` object as an argument.",name:"onDrop",required:!1,type:{name:"(event: DragEvent) => void"}},onFilesDrop:{defaultValue:null,description:"The function is called when dropping a file into the `DropZone`.\nIt receives an array of dropped files as an argument.",name:"onFilesDrop",required:!1,type:{name:"(files: File[]) => void"}},onHTMLDrop:{defaultValue:null,description:"The function is called when dropping HTML into the `DropZone`.\nIt receives the HTML being dropped as an argument.",name:"onHTMLDrop",required:!1,type:{name:"(html: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/drop-zone/index.tsx#DropZoneComponent"]={docgenInfo:DropZoneComponent.__docgenInfo,name:"DropZoneComponent",path:"packages/components/src/drop-zone/index.tsx#DropZoneComponent"})}catch(__react_docgen_typescript_loader_error){}const index_story={component:drop_zone,title:"Components/DropZone",parameters:{sourceLink:"packages/components/src/drop-zone",actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=props=>(0,jsx_runtime.jsxs)("div",{style:{background:"lightgray",padding:16},children:["Drop something here",(0,jsx_runtime.jsx)(drop_zone,{...props})]});Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => {\n  return <div style={{\n    background: 'lightgray',\n    padding: 16\n  }}>\n            Drop something here\n            <DropZone {...props} />\n        </div>;\n}",...Default.parameters?.docs?.source}}}}}]);