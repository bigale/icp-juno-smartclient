import React from 'react';
import { ImgHTMLProperties, ImgHTMLPropertiesProps } from './ImgHTMLProperties';
import { AsComponentXML } from './core/ReactComponent';


declare interface ImgPropertiesProps extends ImgHTMLPropertiesProps {

/**
 * See {@link isc.ImgProperties.imgDir ImgProperties.imgDir}.
 */
imgDir?: string;

/**
 * See {@link isc.ImgProperties.src ImgProperties.src}.
 */
src?: string;

/**
 * See {@link isc.ImgProperties.height ImgProperties.height}.
 */
height?: number;

/**
 * See {@link isc.ImgProperties.name ImgProperties.name}.
 */
name?: string;

/**
 * See {@link isc.ImgProperties.eventStuff ImgProperties.eventStuff}.
 */
eventStuff?: string;

/**
 * See {@link isc.ImgProperties.width ImgProperties.width}.
 */
width?: number;

/**
 * See {@link isc.ImgProperties.extraStuff ImgProperties.extraStuff}.
 */
extraStuff?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ImgProperties wraps the SmartClient object
 * {@link isc.ImgProperties ImgProperties} for React, allowing you to import
 * ImgProperties for use in React JS and JSX.
 * @class
 */
declare class ImgProperties extends ImgHTMLProperties {
    props: AsComponentXML<ImgPropertiesProps>;
}
