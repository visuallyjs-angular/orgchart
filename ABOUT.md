### Orgchart Demo

This demo illustrates an organizational chart using VisuallyJS in an Angular application.

#### How it works

The demo uses the `vjs-surface` component to render an interactive hierarchy of people. It features custom node templates and a search/selection mechanism that centers and zooms the chart on a specific individual.

#### Components Used

- `vjs-surface`: The core canvas for rendering the organizational hierarchy.
- `vjs-controls`: Navigation and zoom controls, with undo/redo and clear functions disabled.
- `vjs-miniview`: A small navigation window.

#### Component Options

The `vjs-surface` component is configured with:
- `viewOptions`: Defines how person data is mapped to visual nodes and handles selection events.
- `renderOptions`: Specifies visual styles, hierarchies, and interaction behaviors.

The `vjs-controls` component is configured with:
- `undoRedo`: Set to `false`.
- `clear`: Set to `false`.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
