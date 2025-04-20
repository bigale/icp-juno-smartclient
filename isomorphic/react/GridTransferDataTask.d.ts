import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridTransferDataTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.GridTransferDataTask.sourceComponent GridTransferDataTask.sourceComponent}.
 */
sourceComponent?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridTransferDataTask wraps the SmartClient widget class
 * {@link isc.GridTransferDataTask GridTransferDataTask} for React, allowing you to import
 * GridTransferDataTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GridTransferDataTask extends ComponentTask {
    props: AsComponentXML<GridTransferDataTaskProps>;
}
