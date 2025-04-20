import React from 'react';
import { Tour, TourProps } from './Tour';
import { AsComponentXML } from './core/ReactComponent';


declare interface TutorialProps extends TourProps {

/**
 * See {@link isc.Tutorial.mode Tutorial.mode}.
 */
mode?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Tutorial wraps the SmartClient widget class
 * {@link isc.Tutorial Tutorial} for React, allowing you to import
 * Tutorial for use in React JS and JSX.
 * @class
 * @extends Tour
 */
declare class Tutorial extends Tour {
    props: AsComponentXML<TutorialProps>;
}
