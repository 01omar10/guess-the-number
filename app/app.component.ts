import { Component } from '@angular/core';

@Component({
    selector: 'guess-app',
    template: `<nav>
                  <h1>{{title}}</h1>
              </nav>
              <section id="content">
                  <game></game>
              </section>
              `
})

export class AppComponent {
  title = "The Guess Game";
}
