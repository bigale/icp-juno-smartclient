import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FontLoaderProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FontLoader wraps the non-rendered SmartClient class
 * {@link isc.FontLoader FontLoader} for React, allowing you to import
 *  FontLoader for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class FontLoader extends ILogicalComponent {
    props: AsComponentXML<FontLoaderProps>;
}
