import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ImgHTMLPropertiesProps {

/**
 * See {@link isc.ImgHTMLProperties.imgDir ImgHTMLProperties.imgDir}.
 */
imgDir?: string;

/**
 * See {@link isc.ImgHTMLProperties.width ImgHTMLProperties.width}.
 */
width?: number;

/**
 * See {@link isc.ImgHTMLProperties.extraStuff ImgHTMLProperties.extraStuff}.
 */
extraStuff?: string;

/**
 * See {@link isc.ImgHTMLProperties.src ImgHTMLProperties.src}.
 */
src?: string;

/**
 * See {@link isc.ImgHTMLProperties.name ImgHTMLProperties.name}.
 */
name?: string;

/**
 * See {@link isc.ImgHTMLProperties.height ImgHTMLProperties.height}.
 */
height?: number;

/**
 * See {@link isc.ImgHTMLProperties.eventStuff ImgHTMLProperties.eventStuff}.
 */
eventStuff?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ImgHTMLProperties wraps the SmartClient object
 * {@link isc.ImgHTMLProperties ImgHTMLProperties} for React, allowing you to import
 * ImgHTMLProperties for use in React JS and JSX.
 * @class
 */
declare class ImgHTMLProperties extends ILogicalComponent {
    props: AsComponentXML<ImgHTMLPropertiesProps>;
}
