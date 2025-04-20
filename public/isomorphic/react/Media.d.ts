import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface MediaProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Media wraps the non-rendered SmartClient class
 * {@link isc.Media Media} for React, allowing you to import
 *  Media for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Media extends ILogicalComponent {
    props: AsComponentXML<MediaProps>;
}
