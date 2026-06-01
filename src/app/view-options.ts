import {AnchorLocations, DEFAULT, EVENT_TAP, Vertex} from "@visuallyjs/browser-ui";
import { PersonComponent } from "./components/person.component";

function createViewOptions(selectPerson:(p:Vertex) => any) {
    /**
     * View options map node/group types to the components used to render them and optionally to various aspects of the given vertex type's behaviour.
     */
    return {
        // For all nodes, use this component to render. It uses a `PersonComponent` to render the person's
        // card, and attaches a tap handler which invokes the selectPerson method passed in to this module.
        nodes: {
            [DEFAULT]: {
                events: {
                    [EVENT_TAP]: (p:{obj:Vertex}) => {
                        selectPerson(p.obj)
                    }
                },
                component:PersonComponent
            }
        }
    }
}

export default createViewOptions
