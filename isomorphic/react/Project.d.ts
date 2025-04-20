import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ProjectProps {

/**
 * See {@link isc.Project.destroy() Project.destroy()}.
 */
destroy?: Function;

/**
 * See {@link isc.Project.createScreen() Project.createScreen()}.
 */
createScreen?: Function;

/**
 * See {@link isc.Project.getScreenNames() Project.getScreenNames()}.
 */
getScreenNames?: Function;

/**
 * See {@link isc.Project.getDataSourceNames() Project.getDataSourceNames()}.
 */
getDataSourceNames?: Function;

/**
 * See {@link isc.Project.getDataSource() Project.getDataSource()}.
 */
getDataSource?: Function;

/**
 * See {@link isc.Project.createStartScreen() Project.createStartScreen()}.
 */
createStartScreen?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Project wraps the non-rendered SmartClient class
 * {@link isc.Project Project} for React, allowing you to import
 *  Project for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Project extends ILogicalComponent {
    props: AsComponentXML<ProjectProps>;
}
