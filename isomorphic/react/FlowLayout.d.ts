import React from 'react';
import { TileLayout, TileLayoutProps } from './TileLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface FlowLayoutProps extends TileLayoutProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FlowLayout wraps the SmartClient widget class
 * {@link isc.FlowLayout FlowLayout} for React, allowing you to import
 * FlowLayout for use in React JS and JSX.
 * @class
 * @extends TileLayout
 */
declare class FlowLayout extends TileLayout {
    props: AsComponentXML<FlowLayoutProps>;
}
