import React from 'react';
import { LayoutSpacer, LayoutSpacerProps } from './LayoutSpacer';
import { AsComponentXML } from './core/ReactComponent';


declare interface FlexSpacerProps extends LayoutSpacerProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FlexSpacer wraps the SmartClient widget class
 * {@link isc.FlexSpacer FlexSpacer} for React, allowing you to import
 * FlexSpacer for use in React JS and JSX.
 * @class
 * @extends LayoutSpacer
 */
declare class FlexSpacer extends LayoutSpacer {
    props: AsComponentXML<FlexSpacerProps>;
}
