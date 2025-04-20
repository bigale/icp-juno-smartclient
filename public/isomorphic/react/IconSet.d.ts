import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface IconSetProps {

/**
 * See {@link isc.IconSet.mappings IconSet.mappings}.
 */
mappings?: Object;

/**
 * See {@link isc.IconSet.stockIcons IconSet.stockIcons}.
 */
stockIcons?: Object;

/**
 * See {@link isc.IconSet.name IconSet.name}.
 */
name?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * IconSet wraps the SmartClient object
 * {@link isc.IconSet IconSet} for React, allowing you to import
 * IconSet for use in React JS and JSX.
 * @class
 */
declare class IconSet extends ILogicalComponent {
    props: AsComponentXML<IconSetProps>;
}
