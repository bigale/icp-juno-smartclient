import React from 'react';
import { HTMLFlow, HTMLFlowProps } from './HTMLFlow';
import { AsComponentXML } from './core/ReactComponent';


declare interface HTMLPaneProps extends HTMLFlowProps {

/**
 * See {@link isc.HTMLPane.contentsURL HTMLPane.contentsURL}.
 */
contentsURL?: string;

/**
 * See {@link isc.HTMLPane.contentsType HTMLPane.contentsType}.
 */
contentsType?: string;

/**
 * See {@link isc.HTMLPane.autoDeriveContentsType HTMLPane.autoDeriveContentsType}.
 */
autoDeriveContentsType?: boolean;

/**
 * See {@link isc.HTMLPane.contentsURLParams HTMLPane.contentsURLParams}.
 */
contentsURLParams?: Object;

/**
 * See {@link isc.HTMLPane.contents HTMLPane.contents}.
 */
contents?: string;

/**
 * See {@link isc.HTMLPane.supportsContentsAsPage HTMLPane.supportsContentsAsPage}.
 */
supportsContentsAsPage?: boolean;

/**
 * See {@link isc.HTMLPane.defaultHeight HTMLPane.defaultHeight}.
 */
defaultHeight?: number;

/**
 * See {@link isc.HTMLPane.overflow HTMLPane.overflow}.
 */
overflow?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HTMLPane wraps the SmartClient widget class
 * {@link isc.HTMLPane HTMLPane} for React, allowing you to import
 * HTMLPane for use in React JS and JSX.
 * @class
 * @extends HTMLFlow
 */
declare class HTMLPane extends HTMLFlow {
    props: AsComponentXML<HTMLPaneProps>;
}
