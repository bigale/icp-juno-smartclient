import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridEditRecordTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.GridEditRecordTask.initialValues GridEditRecordTask.initialValues}.
 */
initialValues?: Record;

/**
 * See {@link isc.GridEditRecordTask.editFirstRecord GridEditRecordTask.editFirstRecord}.
 */
editFirstRecord?: boolean;

/**
 * See {@link isc.GridEditRecordTask.criteria GridEditRecordTask.criteria}.
 */
criteria?: Criteria;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridEditRecordTask wraps the SmartClient widget class
 * {@link isc.GridEditRecordTask GridEditRecordTask} for React, allowing you to import
 * GridEditRecordTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GridEditRecordTask extends ComponentTask {
    props: AsComponentXML<GridEditRecordTaskProps>;
}
