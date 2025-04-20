import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface RelationPathProps {

/**
 * See {@link isc.RelationPath.path RelationPath.path}.
 */
path?: string;

/**
 * See {@link isc.RelationPath.distance RelationPath.distance}.
 */
distance?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RelationPath wraps the SmartClient object
 * {@link isc.RelationPath RelationPath} for React, allowing you to import
 * RelationPath for use in React JS and JSX.
 * @class
 */
declare class RelationPath extends ILogicalComponent {
    props: AsComponentXML<RelationPathProps>;
}
