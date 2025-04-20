import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface FetchRelatedDataTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.FetchRelatedDataTask.dataSource FetchRelatedDataTask.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.FetchRelatedDataTask.recordSourceComponent FetchRelatedDataTask.recordSourceComponent}.
 */
recordSourceComponent?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FetchRelatedDataTask wraps the SmartClient widget class
 * {@link isc.FetchRelatedDataTask FetchRelatedDataTask} for React, allowing you to import
 * FetchRelatedDataTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class FetchRelatedDataTask extends ComponentTask {
    props: AsComponentXML<FetchRelatedDataTaskProps>;
}
