import React from 'react';
import { DataSource, DataSourceProps } from './DataSource';
import { AsComponentXML } from './core/ReactComponent';


declare interface MockDataSourceProps extends DataSourceProps {

/**
 * See {@link isc.MockDataSource.mockData MockDataSource.mockData}.
 */
mockData?: string | Record[];

/**
 * See {@link isc.MockDataSource.mockDataPrimaryKey MockDataSource.mockDataPrimaryKey}.
 */
mockDataPrimaryKey?: string;

/**
 * See {@link isc.MockDataSource.mockDataFormat MockDataSource.mockDataFormat}.
 */
mockDataFormat?: string;

/**
 * See {@link isc.MockDataSource.mockDataType MockDataSource.mockDataType}.
 */
mockDataType?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MockDataSource wraps the SmartClient widget class
 * {@link isc.MockDataSource MockDataSource} for React, allowing you to import
 * MockDataSource for use in React JS and JSX.
 * @class
 * @extends DataSource
 */
declare class MockDataSource extends DataSource {
    props: AsComponentXML<MockDataSourceProps>;
}
