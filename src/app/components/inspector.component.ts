import {InspectorComponent, VisuallyJsModule} from '@visuallyjs/browser-ui-angular';
import {Component, Input} from '@angular/core';
import {Vertex} from "@visuallyjs/browser-ui";
import officeLocations from '../office-locations';

@Component({
  selector:"orgchart-inspector",
  imports:[VisuallyJsModule],
  template:`<div class="vjs-orgchart-inspector">

    @if(current != null) {
        <h1>{{ current.data['name'] }}</h1>
        <h2>{{ current.data['title'] }}</h2>

        <div class="vjs-orgchart-inspector-details">
            <div class="vjs-node-status-container">
                <span class="vjs-node-status" [class.vjs-node-status-online]="current.data['online']" [class.vjs-node-status-offline]="!current.data['online']"></span>
                <span class="vjs-node-status-text">{{ current.data['online'] ? 'Online' : 'Offline' }}</span>
            </div>
            <a [href]="'mailto:' + current.data['email']" class="vjs-node-email">{{current.data['email']}}</a>
            <span class="vjs-node-location">
                {{current.data['location']}}
                @if (timezone) {
                    <span class="vjs-node-timezone"> ({{getTimezoneOffset(timezone)}})</span>
                }
            </span>
        </div>

        @if(manager != null) {
            <h5>Reports to:</h5>
            <a class="vjs-orgchart-inspector-person" href="#" [attr.data-id]="manager.data['id']" (click)="selectPerson($event, manager)">
                <img [src]="getImage(manager)" [alt]="manager.data['name']"/>
                <div>
                    <span>{{ manager.data['name'] }}</span>
                    <span>{{ manager.data['title'] }}</span>
                </div>
            </a>
        }

        @if(reports.length > 0) {
            <br/>
            <h5>Reports:</h5>
            @for(r of reports; track r.data['id']) {
                <a class="vjs-orgchart-inspector-person" href="#" [attr.data-id]="r.data['id']" (click)="selectPerson($event, r)">
                    <img [src]="getImage(r)" [alt]="r.data['name']"/>
                    <div>
                        <span>{{ r.data['name'] }}</span>
                        <span>{{ r.data['title'] }}</span>
                    </div>
                </a>
            }
        }
    }
  </div>`
})
export class OrgchartInspector extends InspectorComponent {

    @Input() onSelect: (p: Vertex) => void = () => {}

    current: any = null
    manager: any = null
    reports: any[] = []

    get timezone() {
        if (!this.current) return "";
        const locationData = officeLocations.find(loc => loc.name === this.current.data['location'])
        return locationData ? locationData.timezone : ""
    }

    getTimezoneOffset(timezone: string) {
        return timezone.match(/\((UTC[+-]\d+)\)/)?.[1] || timezone;
    }

    getImage(person: any) {
        return `/avatars/${person.data.img}`
    }

    override refresh(obj: any): void {
        this.current = obj
        this.manager = obj.getTargetEdges().map((e: any) => e.source)[0]
        this.reports = obj.getSourceEdges().map((e: any) => e.target)
    }

    // override renderEmptyContainer(): void {
    //     this.current = null
    //     this.manager = null
    //     this.reports = []
    // }

    selectPerson(event: MouseEvent, person: any) {
        event.preventDefault()
        this.onSelect(person)
    }
}
