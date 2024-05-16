(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[3434],{"./node_modules/@ariakit/react-core/esm/__chunks/YZEJGRDQ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Separator,z:()=>useSeparator});var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),useSeparator=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__.Bi)((_a=>{var _b=_a,{orientation="horizontal"}=_b,props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__.S0)(_b,["orientation"]);return props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__.ih)({role:"separator","aria-orientation":orientation},props)})),Separator=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__.LM)((props=>{const htmlProps=useSeparator(props);return(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__.az)("hr",htmlProps)}))},"./packages/components/src/divider/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>component});__webpack_require__("./node_modules/react/index.js");var YZEJGRDQ=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/YZEJGRDQ.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),space=__webpack_require__("./packages/components/src/utils/space.ts"),rtl=__webpack_require__("./packages/components/src/utils/rtl.js");const MARGIN_DIRECTIONS={vertical:{start:"marginLeft",end:"marginRight"},horizontal:{start:"marginTop",end:"marginBottom"}},renderMargin=({"aria-orientation":orientation="horizontal",margin,marginStart,marginEnd})=>(0,emotion_react_browser_esm.iv)((0,rtl.b)({[MARGIN_DIRECTIONS[orientation].start]:(0,space.D)(null!=marginStart?marginStart:margin),[MARGIN_DIRECTIONS[orientation].end]:(0,space.D)(null!=marginEnd?marginEnd:margin)})(),"","");var _ref={name:"1u4hpl4",styles:"display:inline"};const renderDisplay=({"aria-orientation":orientation="horizontal"})=>"vertical"===orientation?_ref:void 0,renderBorder=({"aria-orientation":orientation="horizontal"})=>(0,emotion_react_browser_esm.iv)({["vertical"===orientation?"borderRight":"borderBottom"]:"1px solid currentColor"},"",""),renderSize=({"aria-orientation":orientation="horizontal"})=>(0,emotion_react_browser_esm.iv)({height:"vertical"===orientation?"auto":0,width:"vertical"===orientation?0:"auto"},"",""),DividerView=(0,emotion_styled_base_browser_esm.Z)("hr",{target:"e19on6iw0"})("border:0;margin:0;",renderDisplay," ",renderBorder," ",renderSize," ",renderMargin,";");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedDivider(props,forwardedRef){const contextProps=(0,use_context_system.y)(props,"Divider");return(0,jsx_runtime.jsx)(YZEJGRDQ.Z,{render:(0,jsx_runtime.jsx)(DividerView,{}),...contextProps,ref:forwardedRef})}UnconnectedDivider.displayName="UnconnectedDivider";const Divider=(0,context_connect.Iq)(UnconnectedDivider,"Divider"),component=Divider;try{Divider.displayName="Divider",Divider.__docgenInfo={description:"`Divider` is a layout component that separates groups of related content.\n\n```js\nimport {\n\t\t__experimentalDivider as Divider,\n\t\t__experimentalText as Text,\n\t\t__experimentalVStack as VStack,\n} from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<VStack spacing={4}>\n\t\t\t<Text>Some text here</Text>\n\t\t\t<Divider />\n\t\t\t<Text>Some more text here</Text>\n\t\t</VStack>\n\t);\n}\n```",displayName:"Divider",props:{ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"Ref<HTMLHRElement> & LegacyRef<any>"}},wrapElement:{defaultValue:null,description:"",name:"wrapElement",required:!1,type:{name:"WrapElement"}},margin:{defaultValue:null,description:"Adjusts all margins on the inline dimension.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",name:"margin",required:!1,type:{name:"SpaceInput"}},marginEnd:{defaultValue:null,description:"Adjusts the inline-end margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",name:"marginEnd",required:!1,type:{name:"SpaceInput"}},marginStart:{defaultValue:null,description:"Adjusts the inline-start margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",name:"marginStart",required:!1,type:{name:"SpaceInput"}},orientation:{defaultValue:{value:"'horizontal'"},description:"Divider's orientation. When using inside a flex container, you may need\nto make sure the divider is `stretch` aligned in order for it to be\nvisible.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/divider/component.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"packages/components/src/divider/component.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/flex/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>FlexContext,f:()=>useFlexContext});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const FlexContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({flexItemDisplay:void 0}),useFlexContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(FlexContext)},"./packages/components/src/flex/flex/hook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>useFlex});var _emotion_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/deprecated/build-module/index.js"),_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/context/use-context-system.js"),_utils_use_responsive_value__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/utils/use-responsive-value.ts"),_utils_space__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/utils/space.ts"),_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/flex/styles.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useFlex(props){const{align,className,direction:directionProp="row",expanded=!0,gap=2,justify="space-between",wrap=!1,...otherProps}=(0,_context__WEBPACK_IMPORTED_MODULE_1__.y)(function useDeprecatedProps(props){const{isReversed,...otherProps}=props;return void 0!==isReversed?((0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__.Z)("Flex isReversed",{alternative:'Flex direction="row-reverse" or "column-reverse"',since:"5.9"}),{...otherProps,direction:isReversed?"row-reverse":"row"}):otherProps}(props),"Flex"),directionAsArray=Array.isArray(directionProp)?directionProp:[directionProp],direction=(0,_utils_use_responsive_value__WEBPACK_IMPORTED_MODULE_2__.V)(directionAsArray),isColumn="string"==typeof direction&&!!direction.includes("column"),cx=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.I)();return{...otherProps,className:(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)((()=>{const base=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.iv)({alignItems:null!=align?align:isColumn?"normal":"center",flexDirection:direction,flexWrap:wrap?"wrap":void 0,gap:(0,_utils_space__WEBPACK_IMPORTED_MODULE_6__.D)(gap),justifyContent:justify,height:isColumn&&expanded?"100%":void 0,width:!isColumn&&expanded?"100%":void 0},"","");return cx(_styles__WEBPACK_IMPORTED_MODULE_7__.kC,base,isColumn?_styles__WEBPACK_IMPORTED_MODULE_7__.bg:_styles__WEBPACK_IMPORTED_MODULE_7__.h,className)}),[align,className,cx,direction,expanded,gap,isColumn,justify,wrap]),isColumn}}},"./packages/components/src/flex/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ge:()=>block,bg:()=>ItemsColumn,ck:()=>Item,h:()=>ItemsRow,kC:()=>Flex});const Flex={name:"zjik7",styles:"display:flex"},Item={name:"qgaee5",styles:"display:block;max-height:100%;max-width:100%;min-height:0;min-width:0"},block={name:"82a6rk",styles:"flex:1"},ItemsColumn={name:"13nosa1",styles:">*{min-height:0;}"},ItemsRow={name:"1pwxzk4",styles:">*{min-width:0;}"}},"./packages/components/src/text/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,x:()=>Text});__webpack_require__("./node_modules/react/index.js");var _context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/context/context-connect.ts"),_view__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/view/component.tsx"),_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/text/hook.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedText(props,forwardedRef){const textProps=(0,_hook__WEBPACK_IMPORTED_MODULE_2__.Z)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_view__WEBPACK_IMPORTED_MODULE_3__.Z,{as:"span",...textProps,ref:forwardedRef})}UnconnectedText.displayName="UnconnectedText";const Text=(0,_context__WEBPACK_IMPORTED_MODULE_4__.Iq)(UnconnectedText,"Text"),__WEBPACK_DEFAULT_EXPORT__=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"`Text` is a core component that renders text in the library, using the\nlibrary's typography system.\n\n`Text` can be used to render any text-content, like an HTML `p` or `span`.",displayName:"Text",props:{align:{defaultValue:null,description:"Adjusts the text alignment.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"inherit"'},{value:'"end"'},{value:'"start"'},{value:'"initial"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"match-parent"'}]}},adjustLineHeightForInnerControls:{defaultValue:null,description:"Automatically calculate the appropriate line-height value for contents that render text and Control elements (e.g. `TextInput`).",name:"adjustLineHeightForInnerControls",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xSmall"'}]}},color:{defaultValue:null,description:"Adjusts the text color.",name:"color",required:!1,type:{name:"Color"}},display:{defaultValue:null,description:"Adjusts the CSS display.",name:"display",required:!1,type:{name:"Display"}},isDestructive:{defaultValue:{value:"false"},description:"Renders a destructive color.",name:"isDestructive",required:!1,type:{name:"boolean"}},highlightEscape:{defaultValue:{value:"false"},description:"Escape characters in `highlightWords` which are meaningful in regular expressions.",name:"highlightEscape",required:!1,type:{name:"boolean"}},highlightCaseSensitive:{defaultValue:{value:"false"},description:"Determines if `highlightWords` should be case sensitive.",name:"highlightCaseSensitive",required:!1,type:{name:"boolean"}},highlightSanitize:{defaultValue:null,description:"Array of search words. String search terms are automatically cast to RegExps unless `highlightEscape` is true.",name:"highlightSanitize",required:!1,type:{name:"(text: string) => string"}},isBlock:{defaultValue:{value:"false"},description:"Sets `Text` to have `display: block`. Note: text truncation only works\nwhen `isBlock` is `false`.",name:"isBlock",required:!1,type:{name:"boolean"}},lineHeight:{defaultValue:null,description:"Adjusts all text line-height based on the typography system.",name:"lineHeight",required:!1,type:{name:"LineHeight<string | number>"}},optimizeReadabilityFor:{defaultValue:null,description:"The `Text` color can be adapted to a background color for optimal readability. `optimizeReadabilityFor` can accept CSS variables, in addition to standard CSS color values (e.g. Hex, RGB, HSL, etc...).",name:"optimizeReadabilityFor",required:!1,type:{name:"Color"}},size:{defaultValue:null,description:"Adjusts text size based on the typography system. `Text` can render a wide range of font sizes, which are automatically calculated and adapted to the typography system. The `size` value can be a system preset, a `number`, or a custom unit value (`string`) such as `30em`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},truncate:{defaultValue:{value:"false"},description:"Enables text truncation. When `truncate` is set, we are able to truncate the long text in a variety of ways. Note: text truncation won't work if the `isBlock` property is set to `true`",name:"truncate",required:!1,type:{name:"boolean"}},upperCase:{defaultValue:{value:"false"},description:"Uppercases the text content.",name:"upperCase",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Adjusts style variation of the text.",name:"variant",required:!1,type:{name:'"muted"'}},weight:{defaultValue:{value:"'normal'"},description:"Adjusts font-weight of the text.",name:"weight",required:!1,type:{name:"FontWeight | TextWeight"}},letterSpacing:{defaultValue:null,description:"Adjusts letter-spacing of the text.",name:"letterSpacing",required:!1,type:{name:"LetterSpacing<string | number>"}},highlightWords:{defaultValue:null,description:"Letters or words within `Text` can be highlighted using `highlightWords`.",name:"highlightWords",required:!1,type:{name:"string[]"}},ellipsis:{defaultValue:{value:"'…'"},description:"The ellipsis string when truncating the text by the `limit` prop's value.",name:"ellipsis",required:!1,type:{name:"string"}},ellipsizeMode:{defaultValue:{value:"'auto'"},description:"Determines where to truncate.  For example, we can truncate text right in\nthe middle. To do this, we need to set `ellipsizeMode` to `middle` and a\ntext `limit`.\n\n* `auto`: Trims content at the end automatically without a `limit`.\n* `head`: Trims content at the beginning. Requires a `limit`.\n* `middle`: Trims content in the middle. Requires a `limit`.\n* `tail`: Trims content at the end. Requires a `limit`.",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"none"'},{value:'"auto"'},{value:'"middle"'},{value:'"tail"'}]}},limit:{defaultValue:{value:"0"},description:"Determines the max number of characters to be displayed before the rest\nof the text gets truncated. Requires `ellipsizeMode` to assume values\ndifferent from `auto` and `none`.",name:"limit",required:!1,type:{name:"number"}},numberOfLines:{defaultValue:{value:"0"},description:"Clamps the text content to the specified `numberOfLines`, adding an\nellipsis at the end. Note: this feature ignores the value of the\n`ellipsis` prop and always displays the default `…` ellipsis.",name:"numberOfLines",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"The children elements.\n\nNote: text truncation will be attempted only if the `children` are either\nof type `string` or `number`. In any other scenarios, the component will\nnot attempt to truncate the text, and will pass through the `children`.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 524 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/text/component.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"packages/components/src/text/component.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/utils/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>space});const GRID_BASE="4px";function space(value){if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&window.CSS?.supports?.("margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(${GRID_BASE} * ${value})`}},"./packages/components/src/utils/use-responsive-value.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>useResponsiveValue});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const breakpoints=["40em","52em","64em"],useBreakpointIndex=(options={})=>{const{defaultIndex=0}=options;if("number"!=typeof defaultIndex)throw new TypeError(`Default breakpoint index should be a number. Got: ${defaultIndex}, ${typeof defaultIndex}`);if(defaultIndex<0||defaultIndex>breakpoints.length-1)throw new RangeError(`Default breakpoint index out of range. Theme has ${breakpoints.length} breakpoints, got index ${defaultIndex}`);const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultIndex);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const onResize=()=>{const newValue=breakpoints.filter((bp=>"undefined"!=typeof window&&window.matchMedia(`screen and (min-width: ${bp})`).matches)).length;value!==newValue&&setValue(newValue)};return onResize(),"undefined"!=typeof window&&window.addEventListener("resize",onResize),()=>{"undefined"!=typeof window&&window.removeEventListener("resize",onResize)}}),[value]),value};function useResponsiveValue(values,options={}){const index=useBreakpointIndex(options);if(!Array.isArray(values)&&"function"!=typeof values)return values;const array=values||[];return array[index>=array.length?array.length-1:index]}},"./node_modules/highlight-words-core/dist/index.js":module=>{module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape,caseSensitive,sanitize,searchWords,textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start,end,highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])}}]);