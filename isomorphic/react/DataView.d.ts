import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface DataViewProps extends VLayoutProps {

/**
 * See {@link isc.DataView.minMemberLength DataView.minMemberLength}.
 */
minMemberLength?: number;

/**
 * See {@link isc.DataView.dataViewLoaded() DataView.dataViewLoaded()}.
 */
dataViewLoaded?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DataView wraps the SmartClient widget class
 * {@link isc.DataView DataView} for React, allowing you to import
 * DataView for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class DataView extends VLayout {
    props: AsComponentXML<DataViewProps>;
}
