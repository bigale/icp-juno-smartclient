import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface HTMLFlowProps extends CanvasProps {

/**
 * See {@link isc.HTMLFlow.supportsContentsAsPage HTMLFlow.supportsContentsAsPage}.
 */
supportsContentsAsPage?: boolean;

/**
 * See {@link isc.HTMLFlow.fetchRelatedData() HTMLFlow.fetchRelatedData()}.
 */
fetchRelatedData?: Function;

/**
 * See {@link isc.HTMLFlow.contentsURLParams HTMLFlow.contentsURLParams}.
 */
contentsURLParams?: Object;

/**
 * See {@link isc.HTMLFlow.loadingContent() HTMLFlow.loadingContent()}.
 */
loadingContent?: Function;

/**
 * See {@link isc.HTMLFlow.setContentsURL() HTMLFlow.setContentsURL()}.
 */
setContentsURL?: Function;

/**
 * See {@link isc.HTMLFlow.autoChangeProtocol HTMLFlow.autoChangeProtocol}.
 */
autoChangeProtocol?: boolean;

/**
 * See {@link isc.HTMLFlow.captureSCComponents HTMLFlow.captureSCComponents}.
 */
captureSCComponents?: boolean;

/**
 * See {@link isc.HTMLFlow.contentLoaded() HTMLFlow.contentLoaded()}.
 */
contentLoaded?: Function;

/**
 * See {@link isc.HTMLFlow.defaultWidth HTMLFlow.defaultWidth}.
 */
defaultWidth?: number;

/**
 * See {@link isc.HTMLFlow.structuralHTMLTags HTMLFlow.structuralHTMLTags}.
 */
structuralHTMLTags?: string[];

/**
 * See {@link isc.HTMLFlow.dynamicContents HTMLFlow.dynamicContents}.
 */
dynamicContents?: boolean;

/**
 * See {@link isc.HTMLFlow.autoDeriveContentsType HTMLFlow.autoDeriveContentsType}.
 */
autoDeriveContentsType?: boolean;

/**
 * See {@link isc.HTMLFlow.contentsType HTMLFlow.contentsType}.
 */
contentsType?: string;

/**
 * See {@link isc.HTMLFlow.canSelectText HTMLFlow.canSelectText}.
 */
canSelectText?: boolean;

/**
 * See {@link isc.HTMLFlow.isPageHTML() HTMLFlow.isPageHTML()}.
 */
isPageHTML?: Function;

/**
 * See {@link isc.HTMLFlow.httpMethod HTMLFlow.httpMethod}.
 */
httpMethod?: string;

/**
 * See {@link isc.HTMLFlow.defaultHeight HTMLFlow.defaultHeight}.
 */
defaultHeight?: number;

/**
 * See {@link isc.HTMLFlow.selectContentOnSelectAll HTMLFlow.selectContentOnSelectAll}.
 */
selectContentOnSelectAll?: boolean;

/**
 * See {@link isc.HTMLFlow.contents HTMLFlow.contents}.
 */
contents?: string;

/**
 * See {@link isc.HTMLFlow.setContents() HTMLFlow.setContents()}.
 */
setContents?: Function;

/**
 * See {@link isc.HTMLFlow.iframeSandbox HTMLFlow.iframeSandbox}.
 */
iframeSandbox?: string;

/**
 * See {@link isc.HTMLFlow.overflow HTMLFlow.overflow}.
 */
overflow?: string;

/**
 * See {@link isc.HTMLFlow.transformHTML() HTMLFlow.transformHTML()}.
 */
transformHTML?: Function;

/**
 * See {@link isc.HTMLFlow.loadingMessage HTMLFlow.loadingMessage}.
 */
loadingMessage?: string;

/**
 * See {@link isc.HTMLFlow.evalScriptBlocks HTMLFlow.evalScriptBlocks}.
 */
evalScriptBlocks?: boolean;

/**
 * See {@link isc.HTMLFlow.allowCaching HTMLFlow.allowCaching}.
 */
allowCaching?: boolean;

/**
 * See {@link isc.HTMLFlow.contentsURL HTMLFlow.contentsURL}.
 */
contentsURL?: string;

/**
 * See {@link isc.HTMLFlow.handleError() HTMLFlow.handleError()}.
 */
handleError?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HTMLFlow wraps the SmartClient widget class
 * {@link isc.HTMLFlow HTMLFlow} for React, allowing you to import
 * HTMLFlow for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class HTMLFlow extends Canvas {
    props: AsComponentXML<HTMLFlowProps>;
}
