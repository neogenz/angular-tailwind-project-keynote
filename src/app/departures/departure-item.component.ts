import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-departure-item',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>departureItem works!</p>`,
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartureItemComponent { }
