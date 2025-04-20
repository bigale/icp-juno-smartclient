import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface TextSettingsProps {

/**
 * See {@link isc.TextSettings.fieldList TextSettings.fieldList}.
 */
fieldList?: string[];

/**
 * See {@link isc.TextSettings.lineSeparator TextSettings.lineSeparator}.
 */
lineSeparator?: string;

/**
 * See {@link isc.TextSettings.escapingMode TextSettings.escapingMode}.
 */
escapingMode?: string;

/**
 * See {@link isc.TextSettings.fieldSeparator TextSettings.fieldSeparator}.
 */
fieldSeparator?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TextSettings wraps the non-rendered SmartClient class
 * {@link isc.TextSettings TextSettings} for React, allowing you to import
 *  TextSettings for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class TextSettings extends ILogicalComponent {
    props: AsComponentXML<TextSettingsProps>;
}
