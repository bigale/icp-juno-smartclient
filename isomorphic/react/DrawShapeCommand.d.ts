import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawShapeCommandProps {

/**
 * See {@link isc.DrawShapeCommand.args DrawShapeCommand.args}.
 */
args?: string[];

/**
 * See {@link isc.DrawShapeCommand.type DrawShapeCommand.type}.
 */
type?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawShapeCommand wraps the SmartClient object
 * {@link isc.DrawShapeCommand DrawShapeCommand} for React, allowing you to import
 * DrawShapeCommand for use in React JS and JSX.
 * @class
 */
declare class DrawShapeCommand extends ILogicalComponent {
    props: AsComponentXML<DrawShapeCommandProps>;
}
