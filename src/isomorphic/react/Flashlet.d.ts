import React from 'react';
import { BrowserPlugin, BrowserPluginProps } from './BrowserPlugin';
import { AsComponentXML } from './core/ReactComponent';


declare interface FlashletProps extends BrowserPluginProps {

/**
 * See {@link isc.Flashlet.setSrc() Flashlet.setSrc()}.
 */
setSrc?: Function;

/**
 * See {@link isc.Flashlet.pluginsPage Flashlet.pluginsPage}.
 */
pluginsPage?: string;

/**
 * See {@link isc.Flashlet.params Flashlet.params}.
 */
params?: Object;

/**
 * See {@link isc.Flashlet.src Flashlet.src}.
 */
src?: string;

/**
 * See {@link isc.Flashlet.getPluginHandle() Flashlet.getPluginHandle()}.
 */
getPluginHandle?: Function;

/**
 * See {@link isc.Flashlet.classID Flashlet.classID}.
 */
classID?: string;

/**
 * See {@link isc.Flashlet.codeBase Flashlet.codeBase}.
 */
codeBase?: string;

/**
 * See {@link isc.Flashlet.name Flashlet.name}.
 */
name?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Flashlet wraps the SmartClient widget class
 * {@link isc.Flashlet Flashlet} for React, allowing you to import
 * Flashlet for use in React JS and JSX.
 * @class
 * @extends BrowserPlugin
 */
declare class Flashlet extends BrowserPlugin {
    props: AsComponentXML<FlashletProps>;
}
