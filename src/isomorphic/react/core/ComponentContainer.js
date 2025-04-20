import { SC }     from './SC';
import { Canvas } from '../Canvas';

export class ComponentContainer extends Canvas {
    static ISC_CLASS_NAME = 'ReactComponentContainer';

    static PROPERTY_TYPES = {
        "component": {
            "className": "Object"
        }
    }

    getPropertyValue(propName, propObj, ...otherArgs) {
        if (propName == "component") this.component = propObj.children;
        return super.getPropertyValue(propName, propObj, ...otherArgs);
    }

    __createSCInstance(className, config) {
        config.renderComponent = this.renderContainedComponent.bind(this);
        return super.__createSCInstance(className, config);
    }

    renderContainedComponent(targetElement) {
        SC.render(this.component, targetElement);
    }

    static CHILD_TYPE_MAPPING = {
        "Any": "component"
    };
}
