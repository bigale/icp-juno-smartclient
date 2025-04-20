import React from 'react';
import { DataSource, DataSourceProps } from './DataSource';
import { AsComponentXML } from './core/ReactComponent';


declare interface RestDataSourceProps extends DataSourceProps {

/**
 * See {@link isc.RestDataSource.dataURL RestDataSource.dataURL}.
 */
dataURL?: string;

/**
 * See {@link isc.RestDataSource.transformRequest() RestDataSource.transformRequest()}.
 */
transformRequest?: Function;

/**
 * See {@link isc.RestDataSource.fetchDataURL RestDataSource.fetchDataURL}.
 */
fetchDataURL?: string;

/**
 * See {@link isc.RestDataSource.transformResponse() RestDataSource.transformResponse()}.
 */
transformResponse?: Function;

/**
 * See {@link isc.RestDataSource.metaDataPrefix RestDataSource.metaDataPrefix}.
 */
metaDataPrefix?: string;

/**
 * See {@link isc.RestDataSource.sendMetaData RestDataSource.sendMetaData}.
 */
sendMetaData?: boolean;

/**
 * See {@link isc.RestDataSource.addDataURL RestDataSource.addDataURL}.
 */
addDataURL?: string;

/**
 * See {@link isc.RestDataSource.recordXPath RestDataSource.recordXPath}.
 */
recordXPath?: string;

/**
 * See {@link isc.RestDataSource.operationBindings RestDataSource.operationBindings}.
 */
operationBindings?: OperationBinding[];

/**
 * See {@link isc.RestDataSource.prettyPrintJSON RestDataSource.prettyPrintJSON}.
 */
prettyPrintJSON?: boolean;

/**
 * See {@link isc.RestDataSource.disableQueuing RestDataSource.disableQueuing}.
 */
disableQueuing?: boolean;

/**
 * See {@link isc.RestDataSource.xmlNamespaces RestDataSource.xmlNamespaces}.
 */
xmlNamespaces?: Object;

/**
 * See {@link isc.RestDataSource.jsonPrefix RestDataSource.jsonPrefix}.
 */
jsonPrefix?: string;

/**
 * See {@link isc.RestDataSource.xmlRecordXPath RestDataSource.xmlRecordXPath}.
 */
xmlRecordXPath?: string;

/**
 * See {@link isc.RestDataSource.dataFormat RestDataSource.dataFormat}.
 */
dataFormat?: string;

/**
 * See {@link isc.RestDataSource.jsonRecordXPath RestDataSource.jsonRecordXPath}.
 */
jsonRecordXPath?: string;

/**
 * See {@link isc.RestDataSource.dataProtocol RestDataSource.dataProtocol}.
 */
dataProtocol?: string;

/**
 * See {@link isc.RestDataSource.removeDataURL RestDataSource.removeDataURL}.
 */
removeDataURL?: string;

/**
 * See {@link isc.RestDataSource.updateDataURL RestDataSource.updateDataURL}.
 */
updateDataURL?: string;

/**
 * See {@link isc.RestDataSource.jsonSuffix RestDataSource.jsonSuffix}.
 */
jsonSuffix?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RestDataSource wraps the SmartClient widget class
 * {@link isc.RestDataSource RestDataSource} for React, allowing you to import
 * RestDataSource for use in React JS and JSX.
 * @class
 * @extends DataSource
 */
declare class RestDataSource extends DataSource {
    props: AsComponentXML<RestDataSourceProps>;
}
