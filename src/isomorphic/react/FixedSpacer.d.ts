import React from 'react';
import { LayoutSpacer, LayoutSpacerProps } from './LayoutSpacer';
import { AsComponentXML } from './core/ReactComponent';


declare interface FixedSpacerProps extends LayoutSpacerProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FixedSpacer wraps the SmartClient widget class
 * {@link isc.FixedSpacer FixedSpacer} for React, allowing you to import
 * FixedSpacer for use in React JS and JSX.
 * @class
 * @extends LayoutSpacer
 */
declare class FixedSpacer extends LayoutSpacer {
    props: AsComponentXML<FixedSpacerProps>;
}
