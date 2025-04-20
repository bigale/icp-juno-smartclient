import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface PrintCanvasTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.PrintCanvasTask.exportAsPdf PrintCanvasTask.exportAsPdf}.
 */
exportAsPdf?: boolean;

/**
 * See {@link isc.PrintCanvasTask.printWindowProperties PrintCanvasTask.printWindowProperties}.
 */
printWindowProperties?: PrintWindow;

/**
 * See {@link isc.PrintCanvasTask.printProperties PrintCanvasTask.printProperties}.
 */
printProperties?: PrintProperties;

/**
 * See {@link isc.PrintCanvasTask.exportFilename PrintCanvasTask.exportFilename}.
 */
exportFilename?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PrintCanvasTask wraps the SmartClient widget class
 * {@link isc.PrintCanvasTask PrintCanvasTask} for React, allowing you to import
 * PrintCanvasTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class PrintCanvasTask extends ComponentTask {
    props: AsComponentXML<PrintCanvasTaskProps>;
}
