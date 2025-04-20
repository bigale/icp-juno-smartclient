import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface ReifyProps extends VLayoutProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Reify wraps the SmartClient widget class
 * {@link isc.Reify Reify} for React, allowing you to import
 * Reify for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class Reify extends VLayout {
    props: AsComponentXML<ReifyProps>;
}
