import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridFetchDataTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.GridFetchDataTask.applyToImplicitCriteria GridFetchDataTask.applyToImplicitCriteria}.
 */
applyToImplicitCriteria?: boolean;

/**
 * See {@link isc.GridFetchDataTask.requestProperties GridFetchDataTask.requestProperties}.
 */
requestProperties?: DSRequest;

/**
 * See {@link isc.GridFetchDataTask.groupBy GridFetchDataTask.groupBy}.
 */
groupBy?: string[];

/**
 * See {@link isc.GridFetchDataTask.criteria GridFetchDataTask.criteria}.
 */
criteria?: Criteria;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridFetchDataTask wraps the SmartClient widget class
 * {@link isc.GridFetchDataTask GridFetchDataTask} for React, allowing you to import
 * GridFetchDataTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GridFetchDataTask extends ComponentTask {
    props: AsComponentXML<GridFetchDataTaskProps>;
}
