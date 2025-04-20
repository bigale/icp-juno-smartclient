import React from 'react';
import { PaletteNode, PaletteNodeProps } from './PaletteNode';
import { AsComponentXML } from './core/ReactComponent';


declare interface EditNodeProps extends PaletteNodeProps {

/**
 * See {@link isc.EditNode.liveObject EditNode.liveObject}.
 */
liveObject?: Object;

/**
 * See {@link isc.EditNode.editProxyProperties EditNode.editProxyProperties}.
 */
editProxyProperties?: EditProxy;

/**
 * See {@link isc.EditNode.useEditMask EditNode.useEditMask}.
 */
useEditMask?: boolean;

/**
 * See {@link isc.EditNode.canDuplicate EditNode.canDuplicate}.
 */
canDuplicate?: boolean;

/**
 * See {@link isc.EditNode.type EditNode.type}.
 */
type?: string;

/**
 * See {@link isc.EditNode.defaults EditNode.defaults}.
 */
defaults?: Properties;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EditNode wraps the SmartClient object
 * {@link isc.EditNode EditNode} for React, allowing you to import
 * EditNode for use in React JS and JSX.
 * @class
 */
declare class EditNode extends PaletteNode {
    props: AsComponentXML<EditNodeProps>;
}
