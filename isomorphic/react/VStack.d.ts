import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface VStackProps extends LayoutProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * VStack wraps the SmartClient widget class
 * {@link isc.VStack VStack} for React, allowing you to import
 * VStack for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class VStack extends Layout {
    props: AsComponentXML<VStackProps>;
}
