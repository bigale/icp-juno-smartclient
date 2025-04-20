import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GetPropertiesTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.GetPropertiesTask.targetFieldName GetPropertiesTask.targetFieldName}.
 */
targetFieldName?: string;

/**
 * See {@link isc.GetPropertiesTask.properties GetPropertiesTask.properties}.
 */
properties?: string[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GetPropertiesTask wraps the SmartClient widget class
 * {@link isc.GetPropertiesTask GetPropertiesTask} for React, allowing you to import
 * GetPropertiesTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GetPropertiesTask extends ComponentTask {
    props: AsComponentXML<GetPropertiesTaskProps>;
}
