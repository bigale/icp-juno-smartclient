import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ObjectLiteralProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ObjectLiteral wraps the SmartClient object
 * {@link isc.ObjectLiteral ObjectLiteral} for React, allowing you to import
 * ObjectLiteral for use in React JS and JSX.
 * @class
 */
declare class ObjectLiteral extends ILogicalComponent {
    props: AsComponentXML<ObjectLiteralProps>;
}
