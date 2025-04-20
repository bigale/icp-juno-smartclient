import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridViewSelectedDataTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.GridViewSelectedDataTask.selectionComponentId GridViewSelectedDataTask.selectionComponentId}.
 */
selectionComponentId?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridViewSelectedDataTask wraps the SmartClient widget class
 * {@link isc.GridViewSelectedDataTask GridViewSelectedDataTask} for React, allowing you to import
 * GridViewSelectedDataTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GridViewSelectedDataTask extends ComponentTask {
    props: AsComponentXML<GridViewSelectedDataTaskProps>;
}
