import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";
import {Component} from '@angular/core';
import officeLocations from '../office-locations';

@Component({
  template:`
  <div>
    <img [src]="getImage()" [alt]="data['name']"/>
    <div style="display:flex;flex-direction:column">
      <strong>{{data['name']}}</strong>
      <span class="vjs-node-title">{{data['title']}}</span>
      @if (zoom() > 1) {
        <div class="vjs-node-status-container">
          <span class="vjs-node-status" [class.vjs-node-status-online]="data['online']" [class.vjs-node-status-offline]="!data['online']"></span>
          <span class="vjs-node-status-text">{{ data['online'] ? 'Online' : 'Offline' }}</span>
        </div>
        <a [href]="'mailto:' + data['email']" class="vjs-node-email">{{data['email']}}</a>
        <span class="vjs-node-location">
            {{data['location']}}
          @if (timezone) {
            <span class="vjs-node-timezone">({{getTimezoneOffset(timezone)}})</span>
          }
        </span>
      }
    </div>
  </div>`,
  standalone:true
})
export class PersonComponent extends BaseNodeComponent {
    getImage() {
        return `/avatars/${this.data['img']}`
    }

    get timezone() {
        const locationData = officeLocations.find(loc => loc.name === this.data['location'])
        return locationData ? locationData.timezone : ""
    }

    getTimezoneOffset(timezone: string) {
        return timezone.match(/\((UTC[+-]\d+)\)/)?.[1] || timezone;
    }
}
