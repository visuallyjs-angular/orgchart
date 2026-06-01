import {
    AnchorLocations,
    EVENT_CANVAS_CLICK,
    HierarchyLayout,PlainArrowOverlay
} from "@visuallyjs/browser-ui";
import {BrowserUIAngularModel} from '@visuallyjs/browser-ui-angular';

/**
 * Render options control the basic behaviour and appearance of the UI.
 */
const renderOptions = {
    // Set elements to not be draggable
    elementsDraggable:false,
    edges:{
        // Specify we want to use the top and bottom faces of each person card to attach edges
        anchor:AnchorLocations.ContinuousTopBottom,
        // Specify an arrow at the target of each edge
        targetMarker:{
            type: PlainArrowOverlay.type,
            options: {
                width: 10,
                length: 10
            }
        }
    },
    events: {
        // on canvas click, clear the currently selected person
        [EVENT_CANVAS_CLICK]: (e:{model:BrowserUIAngularModel}) => {
            e.model.clearSelection()
        }
    },
    // zoom to fit the dataset on initial load
    zoomToFit:true,
    layout:{
        // use a Hierarchy layout.
        type: HierarchyLayout.type,
        options:{
            padding:{x:100, y:100}
        }
    }
}

export default renderOptions

