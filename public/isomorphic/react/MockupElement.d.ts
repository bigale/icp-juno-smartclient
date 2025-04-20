import React from 'react';
import { Img, ImgProps } from './Img';
import { AsComponentXML } from './core/ReactComponent';


declare interface MockupElementProps extends ImgProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MockupElement wraps the SmartClient widget class
 * {@link isc.MockupElement MockupElement} for React, allowing you to import
 * MockupElement for use in React JS and JSX.
 * @class
 * @extends Img
 */
declare class MockupElement extends Img {
    props: AsComponentXML<MockupElementProps>;
}
