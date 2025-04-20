import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface PrintPropertiesProps {

/**
 * See {@link isc.PrintProperties.omitControls PrintProperties.omitControls}.
 */
omitControls?: string[];

/**
 * See {@link isc.PrintProperties.includeControls PrintProperties.includeControls}.
 */
includeControls?: string[];

/**
 * See {@link isc.PrintProperties.printForExport PrintProperties.printForExport}.
 */
printForExport?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PrintProperties wraps the SmartClient object
 * {@link isc.PrintProperties PrintProperties} for React, allowing you to import
 * PrintProperties for use in React JS and JSX.
 * @class
 */
declare class PrintProperties extends ILogicalComponent {
    props: AsComponentXML<PrintPropertiesProps>;
}
