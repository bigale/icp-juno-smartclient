import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridSelectRecordsTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.GridSelectRecordsTask.criteria GridSelectRecordsTask.criteria}.
 */
criteria?: Criteria;

/**
 * See {@link isc.GridSelectRecordsTask.scrollIntoView GridSelectRecordsTask.scrollIntoView}.
 */
scrollIntoView?: boolean;

/**
 * See {@link isc.GridSelectRecordsTask.select GridSelectRecordsTask.select}.
 */
select?: boolean;

/**
 * See {@link isc.GridSelectRecordsTask.selectMultiple GridSelectRecordsTask.selectMultiple}.
 */
selectMultiple?: boolean;

/**
 * See {@link isc.GridSelectRecordsTask.keepExistingSelection GridSelectRecordsTask.keepExistingSelection}.
 */
keepExistingSelection?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridSelectRecordsTask wraps the SmartClient widget class
 * {@link isc.GridSelectRecordsTask GridSelectRecordsTask} for React, allowing you to import
 * GridSelectRecordsTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GridSelectRecordsTask extends ComponentTask {
    props: AsComponentXML<GridSelectRecordsTaskProps>;
}
