import { Component, h, Prop, Event, EventEmitter, Host } from '@stencil/core';

@Component({
  tag: 'ds-input',
  styleUrl: 'ds-input.css',
  shadow: false, // set to true only if you handle shadow styles separately
})
export class DsInput {
  @Prop() label: string;
  @Prop() placeholder: string = '';
  @Prop() type: string = 'text';
  @Prop() value: string = '';
  @Prop() name: string;
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() error: string;

  @Event() input: EventEmitter<string>;
  @Event() blur: EventEmitter<void>;
  @Event() focus: EventEmitter<void>;

  private onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.input.emit(target.value);
  };

  render() {
    return (
      <Host>
        <div>
        {this.label && (
          <label class="block mb-1 text-sm font-medium text-gray-700">
            {this.label} {this.required ? '*' : ''}
          </label>
        )}

        <input
          class={`
            w-full h-10 px-3 py-2 text-sm rounded 
            border border-[#BBBBBD] shadow-sm
            focus:outline-none focus:ring-2 focus:ring-primary
            ${this.disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
            ${this.error ? 'border-red-500 focus:ring-red-400' : ''}
          `}
          type={this.type}
          name={this.name}
          placeholder={this.placeholder}
          value={this.value}
          disabled={this.disabled}
          required={this.required}
          onInput={this.onInput}
          onBlur={() => this.blur.emit()}
          onFocus={() => this.focus.emit()}
        />

        {this.error && (
          <p class="mt-1 text-sm text-red-500">{this.error}</p>
        )}
        </div>
      </Host>
    );
  }
}
