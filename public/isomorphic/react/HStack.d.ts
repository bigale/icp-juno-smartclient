import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface HStackProps extends LayoutProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HStack wraps the SmartClient widget class
 * {@link isc.HStack HStack} for React, allowing you to import
 * HStack for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class HStack extends Layout {
    props: AsComponentXML<HStackProps>;
}
