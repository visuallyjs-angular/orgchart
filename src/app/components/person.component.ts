import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";
import {Component} from '@angular/core';

@Component({
  template:`<div>
  <img [src]="getImage()" [alt]="data['name']"/>
  <div>
    <span>{{data['name']}}</span>
    <span>{{data['title']}}</span>
  </div></div>`,
  standalone:true
})
export class PersonComponent extends BaseNodeComponent {
    getImage() {
        return `/avatars/${this.data['img']}`
    }
}
