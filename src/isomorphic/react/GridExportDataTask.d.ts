import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridExportDataTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.GridExportDataTask.requestProperties GridExportDataTask.requestProperties}.
 */
requestProperties?: DSRequest;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridExportDataTask wraps the SmartClient widget class
 * {@link isc.GridExportDataTask GridExportDataTask} for React, allowing you to import
 * GridExportDataTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GridExportDataTask extends ComponentTask {
    props: AsComponentXML<GridExportDataTaskProps>;
}
