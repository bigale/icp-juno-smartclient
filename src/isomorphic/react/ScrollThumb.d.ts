import React from 'react';
import { StretchImg, StretchImgProps } from './StretchImg';
import { AsComponentXML } from './core/ReactComponent';


declare interface ScrollThumbProps extends StretchImgProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ScrollThumb wraps the SmartClient widget class
 * {@link isc.ScrollThumb ScrollThumb} for React, allowing you to import
 * ScrollThumb for use in React JS and JSX.
 * @class
 * @extends StretchImg
 */
declare class ScrollThumb extends StretchImg {
    props: AsComponentXML<ScrollThumbProps>;
}
