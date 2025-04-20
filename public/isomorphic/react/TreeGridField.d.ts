import React from 'react';
import { ListGridField, ListGridFieldProps } from './ListGridField';
import { AsComponentXML } from './core/ReactComponent';


declare interface TreeGridFieldProps extends ListGridFieldProps {

/**
 * See {@link isc.TreeGridField.treeField TreeGridField.treeField}.
 */
treeField?: boolean;

/**
 * See {@link isc.TreeGridField.canExport TreeGridField.canExport}.
 */
canExport?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TreeGridField wraps the SmartClient object
 * {@link isc.TreeGridField TreeGridField} for React, allowing you to import
 * TreeGridField for use in React JS and JSX.
 * @class
 */
declare class TreeGridField extends ListGridField {
    props: AsComponentXML<TreeGridFieldProps>;
}
