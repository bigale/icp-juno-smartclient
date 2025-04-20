import React from 'react';
import { BrowserPlugin, BrowserPluginProps } from './BrowserPlugin';
import { AsComponentXML } from './core/ReactComponent';


declare interface ActiveXControlProps extends BrowserPluginProps {

/**
 * See {@link isc.ActiveXControl.getPluginHandle() ActiveXControl.getPluginHandle()}.
 */
getPluginHandle?: Function;

/**
 * See {@link isc.ActiveXControl.uuid ActiveXControl.uuid}.
 */
uuid?: string;

/**
 * See {@link isc.ActiveXControl.getPluginID() ActiveXControl.getPluginID()}.
 */
getPluginID?: Function;

/**
 * See {@link isc.ActiveXControl.codeBase ActiveXControl.codeBase}.
 */
codeBase?: string;

/**
 * See {@link isc.ActiveXControl.id ActiveXControl.id}.
 */
id?: string;

/**
 * See {@link isc.ActiveXControl.params ActiveXControl.params}.
 */
params?: Object;

/**
 * See {@link isc.ActiveXControl.classID ActiveXControl.classID}.
 */
classID?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ActiveXControl wraps the SmartClient widget class
 * {@link isc.ActiveXControl ActiveXControl} for React, allowing you to import
 * ActiveXControl for use in React JS and JSX.
 * @class
 * @extends BrowserPlugin
 */
declare class ActiveXControl extends BrowserPlugin {
    props: AsComponentXML<ActiveXControlProps>;
}
