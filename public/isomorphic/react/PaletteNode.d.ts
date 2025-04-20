import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface PaletteNodeProps {

/**
 * See {@link isc.PaletteNode.icon PaletteNode.icon}.
 */
icon?: string;

/**
 * See {@link isc.PaletteNode.idPrefix PaletteNode.idPrefix}.
 */
idPrefix?: string;

/**
 * See {@link isc.PaletteNode.idName PaletteNode.idName}.
 */
idName?: string;

/**
 * See {@link isc.PaletteNode.defaults PaletteNode.defaults}.
 */
defaults?: Properties;

/**
 * See {@link isc.PaletteNode.recreateOnChange PaletteNode.recreateOnChange}.
 */
recreateOnChange?: boolean;

/**
 * See {@link isc.PaletteNode.placeholderImage PaletteNode.placeholderImage}.
 */
placeholderImage?: string;

/**
 * See {@link isc.PaletteNode.canDuplicate PaletteNode.canDuplicate}.
 */
canDuplicate?: boolean;

/**
 * See {@link isc.PaletteNode.editNodeProperties PaletteNode.editNodeProperties}.
 */
editNodeProperties?: EditNode;

/**
 * See {@link isc.PaletteNode.editProxyProperties PaletteNode.editProxyProperties}.
 */
editProxyProperties?: EditProxy;

/**
 * See {@link isc.PaletteNode.liveObject PaletteNode.liveObject}.
 */
liveObject?: Object;

/**
 * See {@link isc.PaletteNode.alwaysUsePlaceholder PaletteNode.alwaysUsePlaceholder}.
 */
alwaysUsePlaceholder?: boolean;

/**
 * See {@link isc.PaletteNode.type PaletteNode.type}.
 */
type?: string;

/**
 * See {@link isc.PaletteNode.title PaletteNode.title}.
 */
title?: string;

/**
 * See {@link isc.PaletteNode.requiredProperties PaletteNode.requiredProperties}.
 */
requiredProperties?: string;

/**
 * See {@link isc.PaletteNode.placeholderProperties PaletteNode.placeholderProperties}.
 */
placeholderProperties?: Label;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PaletteNode wraps the SmartClient object
 * {@link isc.PaletteNode PaletteNode} for React, allowing you to import
 * PaletteNode for use in React JS and JSX.
 * @class
 */
declare class PaletteNode extends ILogicalComponent {
    props: AsComponentXML<PaletteNodeProps>;
}
