import React from 'react';
import { DataSource, DataSourceProps } from './DataSource';
import { AsComponentXML } from './core/ReactComponent';


declare interface FacadeDataSourceProps extends DataSourceProps {

/**
 * See {@link isc.FacadeDataSource.queuedRequests FacadeDataSource.queuedRequests}.
 */
queuedRequests?: DSRequest[];

/**
 * See {@link isc.FacadeDataSource.clearQueue() FacadeDataSource.clearQueue()}.
 */
clearQueue?: Function;

/**
 * See {@link isc.FacadeDataSource.queueRequests FacadeDataSource.queueRequests}.
 */
queueRequests?: boolean;

/**
 * See {@link isc.FacadeDataSource.setQueueRequests() FacadeDataSource.setQueueRequests()}.
 */
setQueueRequests?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FacadeDataSource wraps the SmartClient widget class
 * {@link isc.FacadeDataSource FacadeDataSource} for React, allowing you to import
 * FacadeDataSource for use in React JS and JSX.
 * @class
 * @extends DataSource
 */
declare class FacadeDataSource extends DataSource {
    props: AsComponentXML<FacadeDataSourceProps>;
}
