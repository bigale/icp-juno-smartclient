import React from 'react';
import { TextItem, TextItemProps } from './TextItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface UploadItemProps extends TextItemProps {

/**
 * See {@link isc.UploadItem.textBoxStyle UploadItem.textBoxStyle}.
 */
textBoxStyle?: string;

/**
 * See {@link isc.UploadItem.capture UploadItem.capture}.
 */
capture?: string;

/**
 * See {@link isc.UploadItem.editProxyConstructor UploadItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.UploadItem.setSelectionRange() UploadItem.setSelectionRange()}.
 */
setSelectionRange?: Function;

/**
 * See {@link isc.UploadItem.height UploadItem.height}.
 */
height?: number;

/**
 * See {@link isc.UploadItem.width UploadItem.width}.
 */
width?: number;

/**
 * See {@link isc.UploadItem.multiple UploadItem.multiple}.
 */
multiple?: boolean;

/**
 * See {@link isc.UploadItem.selectValue() UploadItem.selectValue()}.
 */
selectValue?: Function;

/**
 * See {@link isc.UploadItem.accept UploadItem.accept}.
 */
accept?: string;

/**
 * See {@link isc.UploadItem.setValue() UploadItem.setValue()}.
 */
setValue?: Function;

/**
 * See {@link isc.UploadItem.deselectValue() UploadItem.deselectValue()}.
 */
deselectValue?: Function;

/**
 * See {@link isc.UploadItem.getSelectionRange() UploadItem.getSelectionRange()}.
 */
getSelectionRange?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * UploadItem wraps the SmartClient widget class
 * {@link isc.UploadItem UploadItem} for React, allowing you to import
 * UploadItem for use in React JS and JSX.
 * @class
 * @extends TextItem
 */
declare class UploadItem extends TextItem {
    props: AsComponentXML<UploadItemProps>;
}
