import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface HLayoutProps extends LayoutProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HLayout wraps the SmartClient widget class
 * {@link isc.HLayout HLayout} for React, allowing you to import
 * HLayout for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class HLayout extends Layout {
    props: AsComponentXML<HLayoutProps>;
}
