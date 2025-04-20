import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface ScreenLoaderProps extends VLayoutProps {

/**
 * See {@link isc.ScreenLoader.setDataContextBinding() ScreenLoader.setDataContextBinding()}.
 */
setDataContextBinding?: Function;

/**
 * See {@link isc.ScreenLoader.dataContextBinding ScreenLoader.dataContextBinding}.
 */
dataContextBinding?: DataContextBinding;

/**
 * See {@link isc.ScreenLoader.loadingMessage ScreenLoader.loadingMessage}.
 */
loadingMessage?: string;

/**
 * See {@link isc.ScreenLoader.dataContextChanged() ScreenLoader.dataContextChanged()}.
 */
dataContextChanged?: Function;

/**
 * See {@link isc.ScreenLoader.editProxyConstructor ScreenLoader.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.ScreenLoader.showLoadingMessage ScreenLoader.showLoadingMessage}.
 */
showLoadingMessage?: boolean;

/**
 * See {@link isc.ScreenLoader.screenLoaderURL ScreenLoader.screenLoaderURL}.
 */
screenLoaderURL?: string;

/**
 * See {@link isc.ScreenLoader.screenName ScreenLoader.screenName}.
 */
screenName?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ScreenLoader wraps the SmartClient widget class
 * {@link isc.ScreenLoader ScreenLoader} for React, allowing you to import
 * ScreenLoader for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class ScreenLoader extends VLayout {
    props: AsComponentXML<ScreenLoaderProps>;
}
