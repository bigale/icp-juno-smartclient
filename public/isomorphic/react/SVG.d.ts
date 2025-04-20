import React from 'react';
import { BrowserPlugin, BrowserPluginProps } from './BrowserPlugin';
import { AsComponentXML } from './core/ReactComponent';


declare interface SVGProps extends BrowserPluginProps {

/**
 * See {@link isc.SVG.src SVG.src}.
 */
src?: string;

/**
 * See {@link isc.SVG.pluginsPage SVG.pluginsPage}.
 */
pluginsPage?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SVG wraps the SmartClient widget class
 * {@link isc.SVG SVG} for React, allowing you to import
 * SVG for use in React JS and JSX.
 * @class
 * @extends BrowserPlugin
 */
declare class SVG extends BrowserPlugin {
    props: AsComponentXML<SVGProps>;
}
