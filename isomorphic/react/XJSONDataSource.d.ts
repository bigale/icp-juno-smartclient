import React from 'react';
import { DataSource, DataSourceProps } from './DataSource';
import { AsComponentXML } from './core/ReactComponent';


declare interface XJSONDataSourceProps extends DataSourceProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * XJSONDataSource wraps the SmartClient widget class
 * {@link isc.XJSONDataSource XJSONDataSource} for React, allowing you to import
 * XJSONDataSource for use in React JS and JSX.
 * @class
 * @extends DataSource
 */
declare class XJSONDataSource extends DataSource {
    props: AsComponentXML<XJSONDataSourceProps>;
}
