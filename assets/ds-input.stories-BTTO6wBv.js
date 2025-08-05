import{x as n}from"./iframe-_aySeCRZ.js";import"./preload-helper-D9Z9MdNV.js";const d={title:"Design System/Input",component:"ds-input",tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},type:{control:"text"},value:{control:"text"},name:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},error:{control:"text"}},parameters:{actions:{handles:["input","blur","focus"]}}},o=e=>n`
  <ds-input
    label=${e.label}
    placeholder=${e.placeholder}
    type=${e.type}
    value=${e.value}
    name=${e.name}
    ?disabled=${e.disabled}
    ?required=${e.required}
    error=${e.error}
  ></ds-input>
`,a={render:o,args:{label:"Email",placeholder:"you@example.com",type:"email",name:"email",value:"",required:!1,disabled:!1,error:""}},r={render:o,args:{label:"Email",placeholder:"you@example.com",type:"email",name:"email",value:"invalid-email",required:!0,disabled:!1,error:"Please enter a valid email."}},l={render:o,args:{label:"Email",placeholder:"you@example.com",type:"email",name:"email",value:"",disabled:!0,required:!1,error:""}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    name: 'email',
    value: '',
    required: false,
    disabled: false,
    error: ''
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    name: 'email',
    value: 'invalid-email',
    required: true,
    disabled: false,
    error: 'Please enter a valid email.'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    name: 'email',
    value: '',
    disabled: true,
    required: false,
    error: ''
  }
}`,...l.parameters?.docs?.source}}};const i=["Default","WithError","Disabled"];export{a as Default,l as Disabled,r as WithError,i as __namedExportsOrder,d as default};
