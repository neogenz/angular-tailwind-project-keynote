import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-departures',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `
        <div class="container">
            <div class="header subgrid">
                <div class="line-header">
                    Ligne
                </div>
                <div class="details-header">
                    Détails
                </div>
                <div class="date-header">
                    Date
                </div>
                <div class="track-header">
                    Quai
                </div>
            </div>
            @for (item of items; track item.id) {
                <div class="departure subgrid">
                    <div class="line">
                        {{item.line}}
                    </div>
                    <div class="multiline">
                        <div class="date">
                            {{item.departureDate|date:"HH:mm"}}
                        </div>
                        <div class="direction">
                            {{item.direction}}
                        </div>
                    </div>
                    <div class="date">
                        {{item.departureDate|date:"HH:mm"}}
                    </div>
                    <div class="track">
                        {{item.track}}
                    </div>
                </div>
            }
        </div>
    `,
    styleUrl: './departures.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeparturesComponent {
    items = [
        { id: 1, line: "IR90", departureDate: new Date(), direction: "Brig", track: "A" },
        { id: 2, line: "IR90", departureDate: new Date(), direction: "Genève", track: "AD" },
        { id: 3, line: "IC1", departureDate: new Date(), direction: "Zurich", track: "C" }
    ]

}
