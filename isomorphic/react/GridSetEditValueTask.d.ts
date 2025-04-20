import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridSetEditValueTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.GridSetEditValueTask.value GridSetEditValueTask.value}.
 */
value?: any;

/**
 * See {@link isc.GridSetEditValueTask.targetField GridSetEditValueTask.targetField}.
 */
targetField?: number | string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridSetEditValueTask wraps the SmartClient widget class
 * {@link isc.GridSetEditValueTask GridSetEditValueTask} for React, allowing you to import
 * GridSetEditValueTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GridSetEditValueTask extends ComponentTask {
    props: AsComponentXML<GridSetEditValueTaskProps>;
}
