import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface ComponentTaskProps extends ProcessElementProps {

/**
 * See {@link isc.ComponentTask.unsupportedComponentMessage ComponentTask.unsupportedComponentMessage}.
 */
unsupportedComponentMessage?: string;

/**
 * See {@link isc.ComponentTask.componentBaseClass ComponentTask.componentBaseClass}.
 */
componentBaseClass?: string | string[];

/**
 * See {@link isc.ComponentTask.componentRequiresDataSource ComponentTask.componentRequiresDataSource}.
 */
componentRequiresDataSource?: boolean;

/**
 * See {@link isc.ComponentTask.targetBaseClass ComponentTask.targetBaseClass}.
 */
targetBaseClass?: string | string[];

/**
 * See {@link isc.ComponentTask.getTargetComponent() ComponentTask.getTargetComponent()}.
 */
getTargetComponent?: Function;

/**
 * See {@link isc.ComponentTask.componentId ComponentTask.componentId}.
 */
componentId?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ComponentTask wraps the SmartClient widget class
 * {@link isc.ComponentTask ComponentTask} for React, allowing you to import
 * ComponentTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class ComponentTask extends ProcessElement {
    props: AsComponentXML<ComponentTaskProps>;
}
