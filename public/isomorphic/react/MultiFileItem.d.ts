import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiFileItemProps extends CanvasItemProps {

/**
 * See {@link isc.MultiFileItem.editButtonProperties MultiFileItem.editButtonProperties}.
 */
editButtonProperties?: StatefulCanvas;

/**
 * See {@link isc.MultiFileItem.pickerAddAnotherFileButtonTitle MultiFileItem.pickerAddAnotherFileButtonTitle}.
 */
pickerAddAnotherFileButtonTitle?: string;

/**
 * See {@link isc.MultiFileItem.removeButtonPrompt MultiFileItem.removeButtonPrompt}.
 */
removeButtonPrompt?: string;

/**
 * See {@link isc.MultiFileItem.emptyMessage MultiFileItem.emptyMessage}.
 */
emptyMessage?: string;

/**
 * See {@link isc.MultiFileItem.dataSource MultiFileItem.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.MultiFileItem.pickerUploadButtonInitialTitle MultiFileItem.pickerUploadButtonInitialTitle}.
 */
pickerUploadButtonInitialTitle?: string;

/**
 * See {@link isc.MultiFileItem.removeButtonProperties MultiFileItem.removeButtonProperties}.
 */
removeButtonProperties?: StatefulCanvas;

/**
 * See {@link isc.MultiFileItem.pickerCancelButtonTitle MultiFileItem.pickerCancelButtonTitle}.
 */
pickerCancelButtonTitle?: string;

/**
 * See {@link isc.MultiFileItem.pickerUploadButtonTitle MultiFileItem.pickerUploadButtonTitle}.
 */
pickerUploadButtonTitle?: string;

/**
 * See {@link isc.MultiFileItem.pickerConstructor MultiFileItem.pickerConstructor}.
 */
pickerConstructor?: string;

/**
 * See {@link isc.MultiFileItem.pickerUploadProgressLabel MultiFileItem.pickerUploadProgressLabel}.
 */
pickerUploadProgressLabel?: string;

/**
 * See {@link isc.MultiFileItem.editButtonPrompt MultiFileItem.editButtonPrompt}.
 */
editButtonPrompt?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiFileItem wraps the SmartClient widget class
 * {@link isc.MultiFileItem MultiFileItem} for React, allowing you to import
 * MultiFileItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class MultiFileItem extends CanvasItem {
    props: AsComponentXML<MultiFileItemProps>;
}
