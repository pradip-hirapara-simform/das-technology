import{x as s}from"./iframe-_aySeCRZ.js";import"./preload-helper-D9Z9MdNV.js";const d={title:"Design System/Button",component:"ds-button",tags:["autodocs"],argTypes:{buttonText:{control:"text"},variant:{control:"select",options:["solid","outline","text"]}}},r=({buttonText:o,variant:a})=>s`
  <ds-button button-text="${o}" variant="${a}"></ds-button>
`,t={render:r,args:{buttonText:"Solid Button",variant:"solid"}},e={render:r,args:{buttonText:"Outline Button",variant:"outline"}},n={render:r,args:{buttonText:"Text Button",variant:"text"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    buttonText: 'Solid Button',
    variant: 'solid'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    buttonText: 'Outline Button',
    variant: 'outline'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    buttonText: 'Text Button',
    variant: 'text'
  }
}`,...n.parameters?.docs?.source}}};const c=["Solid","Outline","Text"];export{e as Outline,t as Solid,n as Text,c as __namedExportsOrder,d as default};
