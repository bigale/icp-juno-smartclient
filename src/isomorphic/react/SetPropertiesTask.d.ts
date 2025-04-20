import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface SetPropertiesTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.SetPropertiesTask.properties SetPropertiesTask.properties}.
 */
properties?: PropertyValue[];

/**
 * See {@link isc.SetPropertiesTask.targetFieldName SetPropertiesTask.targetFieldName}.
 */
targetFieldName?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SetPropertiesTask wraps the SmartClient widget class
 * {@link isc.SetPropertiesTask SetPropertiesTask} for React, allowing you to import
 * SetPropertiesTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class SetPropertiesTask extends ComponentTask {
    props: AsComponentXML<SetPropertiesTaskProps>;
}
