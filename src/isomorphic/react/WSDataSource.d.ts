import React from 'react';
import { DataSource, DataSourceProps } from './DataSource';
import { AsComponentXML } from './core/ReactComponent';


declare interface WSDataSourceProps extends DataSourceProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * WSDataSource wraps the SmartClient widget class
 * {@link isc.WSDataSource WSDataSource} for React, allowing you to import
 * WSDataSource for use in React JS and JSX.
 * @class
 * @extends DataSource
 */
declare class WSDataSource extends DataSource {
    props: AsComponentXML<WSDataSourceProps>;
}
