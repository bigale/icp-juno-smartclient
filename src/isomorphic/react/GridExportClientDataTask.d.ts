import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridExportClientDataTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.GridExportClientDataTask.requestProperties GridExportClientDataTask.requestProperties}.
 */
requestProperties?: DSRequest;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridExportClientDataTask wraps the SmartClient widget class
 * {@link isc.GridExportClientDataTask GridExportClientDataTask} for React, allowing you to import
 * GridExportClientDataTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GridExportClientDataTask extends ComponentTask {
    props: AsComponentXML<GridExportClientDataTaskProps>;
}
