import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface FileItemProps extends CanvasItemProps {

/**
 * See {@link isc.FileItem.uploadItemProperties FileItem.uploadItemProperties}.
 */
uploadItemProperties?: UploadItem;

/**
 * See {@link isc.FileItem.editFormProperties FileItem.editFormProperties}.
 */
editFormProperties?: DynamicForm;

/**
 * See {@link isc.FileItem.shouldSaveValue FileItem.shouldSaveValue}.
 */
shouldSaveValue?: boolean;

/**
 * See {@link isc.FileItem.capture FileItem.capture}.
 */
capture?: string;

/**
 * See {@link isc.FileItem.displayItemProperties FileItem.displayItemProperties}.
 */
displayItemProperties?: StaticTextItem;

/**
 * See {@link isc.FileItem.viewIconSrc FileItem.viewIconSrc}.
 */
viewIconSrc?: string;

/**
 * See {@link isc.FileItem.accept FileItem.accept}.
 */
accept?: string;

/**
 * See {@link isc.FileItem.editProxyConstructor FileItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.FileItem.setMultiple() FileItem.setMultiple()}.
 */
setMultiple?: Function;

/**
 * See {@link isc.FileItem.downloadIconSrc FileItem.downloadIconSrc}.
 */
downloadIconSrc?: string;

/**
 * See {@link isc.FileItem.displayCanvasProperties FileItem.displayCanvasProperties}.
 */
displayCanvasProperties?: Canvas;

/**
 * See {@link isc.FileItem.showFileInline FileItem.showFileInline}.
 */
showFileInline?: boolean;

/**
 * See {@link isc.FileItem.multiple FileItem.multiple}.
 */
multiple?: boolean;

/**
 * See {@link isc.FileItem.displayFormProperties FileItem.displayFormProperties}.
 */
displayFormProperties?: DynamicForm;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FileItem wraps the SmartClient widget class
 * {@link isc.FileItem FileItem} for React, allowing you to import
 * FileItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class FileItem extends CanvasItem {
    props: AsComponentXML<FileItemProps>;
}
