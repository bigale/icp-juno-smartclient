import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ClassFactoryProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ClassFactory wraps the SmartClient object
 * {@link isc.ClassFactory ClassFactory} for React, allowing you to import
 * ClassFactory for use in React JS and JSX.
 * @class
 */
declare class ClassFactory extends ILogicalComponent {
    props: AsComponentXML<ClassFactoryProps>;
}
