import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface HiddenPaletteProps {

/**
 * See {@link isc.HiddenPalette.data HiddenPalette.data}.
 */
data?: PaletteNode[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HiddenPalette wraps the non-rendered SmartClient class
 * {@link isc.HiddenPalette HiddenPalette} for React, allowing you to import
 *  HiddenPalette for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class HiddenPalette extends ILogicalComponent {
    props: AsComponentXML<HiddenPaletteProps>;
}
