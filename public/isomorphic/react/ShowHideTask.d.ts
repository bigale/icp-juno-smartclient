import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface ShowHideTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.ShowHideTask.targetSectionName ShowHideTask.targetSectionName}.
 */
targetSectionName?: string;

/**
 * See {@link isc.ShowHideTask.showRecursively ShowHideTask.showRecursively}.
 */
showRecursively?: boolean;

/**
 * See {@link isc.ShowHideTask.targetTabName ShowHideTask.targetTabName}.
 */
targetTabName?: string | string;

/**
 * See {@link isc.ShowHideTask.targetFieldName ShowHideTask.targetFieldName}.
 */
targetFieldName?: string;

/**
 * See {@link isc.ShowHideTask.moveFocusToTarget ShowHideTask.moveFocusToTarget}.
 */
moveFocusToTarget?: boolean;

/**
 * See {@link isc.ShowHideTask.targetSectionTitle ShowHideTask.targetSectionTitle}.
 */
targetSectionTitle?: string;

/**
 * See {@link isc.ShowHideTask.hide ShowHideTask.hide}.
 */
hide?: boolean;

/**
 * See {@link isc.ShowHideTask.scrollIntoView ShowHideTask.scrollIntoView}.
 */
scrollIntoView?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ShowHideTask wraps the SmartClient widget class
 * {@link isc.ShowHideTask ShowHideTask} for React, allowing you to import
 * ShowHideTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class ShowHideTask extends ComponentTask {
    props: AsComponentXML<ShowHideTaskProps>;
}
