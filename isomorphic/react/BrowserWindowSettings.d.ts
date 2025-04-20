import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface BrowserWindowSettingsProps {

/**
 * See {@link isc.BrowserWindowSettings.alwaysOnTop BrowserWindowSettings.alwaysOnTop}.
 */
alwaysOnTop?: boolean;

/**
 * See {@link isc.BrowserWindowSettings.activateOnOpen BrowserWindowSettings.activateOnOpen}.
 */
activateOnOpen?: boolean;

/**
 * See {@link isc.BrowserWindowSettings.tab BrowserWindowSettings.tab}.
 */
tab?: boolean;

/**
 * See {@link isc.BrowserWindowSettings.defaultHeight BrowserWindowSettings.defaultHeight}.
 */
defaultHeight?: number;

/**
 * See {@link isc.BrowserWindowSettings.defaultWidth BrowserWindowSettings.defaultWidth}.
 */
defaultWidth?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BrowserWindowSettings wraps the SmartClient object
 * {@link isc.BrowserWindowSettings BrowserWindowSettings} for React, allowing you to import
 * BrowserWindowSettings for use in React JS and JSX.
 * @class
 */
declare class BrowserWindowSettings extends ILogicalComponent {
    props: AsComponentXML<BrowserWindowSettingsProps>;
}
