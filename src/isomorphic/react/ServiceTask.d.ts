import React from 'react';
import { Task, TaskProps } from './Task';
import { AsComponentXML } from './core/ReactComponent';


declare interface ServiceTaskProps extends TaskProps {

/**
 * See {@link isc.ServiceTask.outputField ServiceTask.outputField}.
 */
outputField?: string;

/**
 * See {@link isc.ServiceTask.outputFieldList ServiceTask.outputFieldList}.
 */
outputFieldList?: string[];

/**
 * See {@link isc.ServiceTask.values ServiceTask.values}.
 */
values?: Record;

/**
 * See {@link isc.ServiceTask.criteria ServiceTask.criteria}.
 */
criteria?: Criteria;

/**
 * See {@link isc.ServiceTask.failureElement ServiceTask.failureElement}.
 */
failureElement?: string;

/**
 * See {@link isc.ServiceTask.fixedValues ServiceTask.fixedValues}.
 */
fixedValues?: Record;

/**
 * See {@link isc.ServiceTask.sort ServiceTask.sort}.
 */
sort?: SortSpecifier[];

/**
 * See {@link isc.ServiceTask.exportFormat ServiceTask.exportFormat}.
 */
exportFormat?: string;

/**
 * See {@link isc.ServiceTask.passThruOutput ServiceTask.passThruOutput}.
 */
passThruOutput?: boolean;

/**
 * See {@link isc.ServiceTask.groupBy ServiceTask.groupBy}.
 */
groupBy?: string[];

/**
 * See {@link isc.ServiceTask.operationType ServiceTask.operationType}.
 */
operationType?: string;

/**
 * See {@link isc.ServiceTask.fixedCriteria ServiceTask.fixedCriteria}.
 */
fixedCriteria?: Criteria;

/**
 * See {@link isc.ServiceTask.dataSource ServiceTask.dataSource}.
 */
dataSource?: DataSource | string;

/**
 * See {@link isc.ServiceTask.operationId ServiceTask.operationId}.
 */
operationId?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ServiceTask wraps the SmartClient widget class
 * {@link isc.ServiceTask ServiceTask} for React, allowing you to import
 * ServiceTask for use in React JS and JSX.
 * @class
 * @extends Task
 */
declare class ServiceTask extends Task {
    props: AsComponentXML<ServiceTaskProps>;
}
