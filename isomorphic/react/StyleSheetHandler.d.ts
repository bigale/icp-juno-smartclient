import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface StyleSheetHandlerProps {

/**
 * See {@link isc.StyleSheetHandler.renameClass() StyleSheetHandler.renameClass()}.
 */
renameClass?: Function;

/**
 * See {@link isc.StyleSheetHandler.loaded() StyleSheetHandler.loaded()}.
 */
loaded?: Function;

/**
 * See {@link isc.StyleSheetHandler.autoLoad StyleSheetHandler.autoLoad}.
 */
autoLoad?: boolean;

/**
 * See {@link isc.StyleSheetHandler.unload() StyleSheetHandler.unload()}.
 */
unload?: Function;

/**
 * See {@link isc.StyleSheetHandler.setCssText() StyleSheetHandler.setCssText()}.
 */
setCssText?: Function;

/**
 * See {@link isc.StyleSheetHandler.name StyleSheetHandler.name}.
 */
name?: string;

/**
 * See {@link isc.StyleSheetHandler.modifyClass() StyleSheetHandler.modifyClass()}.
 */
modifyClass?: Function;

/**
 * See {@link isc.StyleSheetHandler.cssText StyleSheetHandler.cssText}.
 */
cssText?: string;

/**
 * See {@link isc.StyleSheetHandler.injectCssText() StyleSheetHandler.injectCssText()}.
 */
injectCssText?: Function;

/**
 * See {@link isc.StyleSheetHandler.filterCssText() StyleSheetHandler.filterCssText()}.
 */
filterCssText?: Function;

/**
 * See {@link isc.StyleSheetHandler.removeClass() StyleSheetHandler.removeClass()}.
 */
removeClass?: Function;

/**
 * See {@link isc.StyleSheetHandler.getClassList() StyleSheetHandler.getClassList()}.
 */
getClassList?: Function;

/**
 * See {@link isc.StyleSheetHandler.injectSheet() StyleSheetHandler.injectSheet()}.
 */
injectSheet?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StyleSheetHandler wraps the non-rendered SmartClient class
 * {@link isc.StyleSheetHandler StyleSheetHandler} for React, allowing you to import
 *  StyleSheetHandler for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class StyleSheetHandler extends ILogicalComponent {
    props: AsComponentXML<StyleSheetHandlerProps>;
}
