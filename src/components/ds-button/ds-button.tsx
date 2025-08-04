import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: false,
})
export class DsButton { 
  @Prop() buttonText: string;
  @Prop() variant: 'solid' | 'outline' | 'text' = 'solid';


  render() {
     let variantClass = '';

    switch (this.variant) {
      case 'outline':
        variantClass = 'border border-primary text-primary bg-transparent';
        break;
      case 'text':
        variantClass = 'text-primary bg-transparent';
        break;
      default:
        variantClass = 'bg-primary text-white';
        break;
    }

    return (
      <Host>
        <button
          type="button"
          class={`px-4 py-2.5 rounded text-base font-bold cursor-pointer ${variantClass}`}
        >
          {this.buttonText}
        </button>
      </Host>
    );
  }
}
