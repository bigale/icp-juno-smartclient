import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface PropertiesProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Properties wraps the SmartClient object
 * {@link isc.Properties Properties} for React, allowing you to import
 * Properties for use in React JS and JSX.
 * @class
 */
declare class Properties extends ILogicalComponent {
    props: AsComponentXML<PropertiesProps>;
}
