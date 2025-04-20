import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiLinkSelectionProps {

/**
 * See {@link isc.MultiLinkSelection.getSelection() MultiLinkSelection.getSelection()}.
 */
getSelection?: Function;

/**
 * See {@link isc.MultiLinkSelection.deselect() MultiLinkSelection.deselect()}.
 */
deselect?: Function;

/**
 * See {@link isc.MultiLinkSelection.getSelectedRecords() MultiLinkSelection.getSelectedRecords()}.
 */
getSelectedRecords?: Function;

/**
 * See {@link isc.MultiLinkSelection.select() MultiLinkSelection.select()}.
 */
select?: Function;

/**
 * See {@link isc.MultiLinkSelection.selectSingle() MultiLinkSelection.selectSingle()}.
 */
selectSingle?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiLinkSelection wraps the non-rendered SmartClient class
 * {@link isc.MultiLinkSelection MultiLinkSelection} for React, allowing you to import
 *  MultiLinkSelection for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class MultiLinkSelection extends ILogicalComponent {
    props: AsComponentXML<MultiLinkSelectionProps>;
}
