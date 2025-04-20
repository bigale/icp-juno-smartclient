import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface VLayoutProps extends LayoutProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * VLayout wraps the SmartClient widget class
 * {@link isc.VLayout VLayout} for React, allowing you to import
 * VLayout for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class VLayout extends Layout {
    props: AsComponentXML<VLayoutProps>;
}
