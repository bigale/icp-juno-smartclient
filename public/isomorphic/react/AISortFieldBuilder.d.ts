import React from 'react';
import { AIFieldBuilder, AIFieldBuilderProps } from './AIFieldBuilder';
import { AsComponentXML } from './core/ReactComponent';


declare interface AISortFieldBuilderProps extends AIFieldBuilderProps {

/**
 * See {@link isc.AISortFieldBuilder.instructionsTextStart AISortFieldBuilder.instructionsTextStart}.
 */
instructionsTextStart?: string;

/**
 * See {@link isc.AISortFieldBuilder.titleFieldTitle AISortFieldBuilder.titleFieldTitle}.
 */
titleFieldTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AISortFieldBuilder wraps the SmartClient widget class
 * {@link isc.AISortFieldBuilder AISortFieldBuilder} for React, allowing you to import
 * AISortFieldBuilder for use in React JS and JSX.
 * @class
 * @extends AIFieldBuilder
 */
declare class AISortFieldBuilder extends AIFieldBuilder {
    props: AsComponentXML<AISortFieldBuilderProps>;
}
