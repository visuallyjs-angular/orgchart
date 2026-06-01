import { Component, ViewChild } from '@angular/core';
import { VisuallyJsModule, SurfaceComponent } from "@visuallyjs/browser-ui-angular";

import renderOptions from "./render-options"
import createViewOptions from "./view-options"
import { OrgchartInspector } from "./components/inspector.component";

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule, OrgchartInspector],
  templateUrl: './app.html'
})
export class App {

  @ViewChild(SurfaceComponent) canvas!: SurfaceComponent;

  renderOptions = renderOptions
  viewOptions = createViewOptions(this.selectPerson.bind(this))

  selectPerson(obj: any) {
    this.canvas.model.setSelection(obj)
    this.canvas.surface.centerOnAndZoom(obj, 0.15)
  }

}
