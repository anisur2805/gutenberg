"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[5106],{"./packages/components/src/menu-items-choice/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/menu-items-choice/index.tsx"),_menu_group__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/menu-group/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.Z,title:"Components/MenuItemsChoice",argTypes:{onHover:{action:"onHover"},onSelect:{action:"onSelect"},value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/menu-items-choice",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=({onHover,onSelect,choices})=>{var _choices$0$value;const[choice,setChoice]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null!==(_choices$0$value=choices[0]?.value)&&void 0!==_choices$0$value?_choices$0$value:"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_menu_group__WEBPACK_IMPORTED_MODULE_3__.Z,{label:"Editor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{choices,value:choice,onSelect:(...selectArgs)=>{onSelect(...selectArgs),setChoice(...selectArgs)},onHover})})};Template.displayName="Template";const Default=Template.bind({});Default.args={choices:[{value:"arbitrary-choice-1",label:"Arbitrary Label #1",info:"Arbitrary Explanatory 1"},{value:"arbitrary-choice-2",label:"Arbitrary Label #2",info:"Arbitrary Explanatory 2"},{value:"arbitrary-choice-3",label:"Arbitrary Label #3",info:"Arbitrary Explanatory 3"}],value:"arbitrary-choice-1"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onHover,\n  onSelect,\n  choices\n}) => {\n  const [choice, setChoice] = useState(choices[0]?.value ?? '');\n  return <MenuGroup label=\"Editor\">\n            <MenuItemsChoice choices={choices} value={choice} onSelect={(...selectArgs) => {\n      onSelect(...selectArgs);\n      setChoice(...selectArgs);\n    }} onHover={onHover} />\n        </MenuGroup>;\n}",...Default.parameters?.docs?.source}}}}}]);