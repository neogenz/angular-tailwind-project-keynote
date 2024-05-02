import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-departures',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `
        <div class="container bg-opacity-65 bg-white sm:rounded-xl grid grid-cols-[auto_1fr_auto_auto] gap-2 sm:grid-cols-[1fr_8fr_1fr_1fr]">
            <div class="font-bold uppercase grid grid-cols-subgrid col-span-full border-b-[1px] border-black p-3">
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
                <div class="departure grid grid-cols-subgrid col-span-full px-3 items-center border-b-[1px] border-gray-400 last:border-0">
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
    styles: [`
        :host {
            @apply w-full;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeparturesComponent {
    items = [
        { id: 1, line: "IR90", departureDate: new Date(), direction: "Brig", track: "A" },
        { id: 2, line: "IR90", departureDate: new Date(), direction: "Genève", track: "AD" },
        { id: 3, line: "IC1", departureDate: new Date(), direction: "Zurich", track: "C" }
    ]

}
