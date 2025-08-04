import { Component, h } from '@stencil/core';

@Component({
  tag: 'main-app',
  styleUrl: 'main-app.css',
  shadow: true,
})
export class MainApp {

  render() {
    return (
      <div>
        <main> 
          <ds-button buttonText="Solid Button"></ds-button>
          <ds-button button-text="Outline Button" variant="outline"></ds-button>
          <ds-button button-text="Text Button" variant="text"></ds-button>
        </main>
      </div>
    );
  }
}
