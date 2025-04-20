import React from 'react';
import { VStack, VStackProps } from './VStack';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiFilePickerProps extends VStackProps {

/**
 * See {@link isc.MultiFilePicker.showInWindow MultiFilePicker.showInWindow}.
 */
showInWindow?: boolean;

/**
 * See {@link isc.MultiFilePicker.title MultiFilePicker.title}.
 */
title?: string;

/**
 * See {@link isc.MultiFilePicker.minUploadFields MultiFilePicker.minUploadFields}.
 */
minUploadFields?: number;

/**
 * See {@link isc.MultiFilePicker.maxUploadFields MultiFilePicker.maxUploadFields}.
 */
maxUploadFields?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiFilePicker wraps the SmartClient widget class
 * {@link isc.MultiFilePicker MultiFilePicker} for React, allowing you to import
 * MultiFilePicker for use in React JS and JSX.
 * @class
 * @extends VStack
 */
declare class MultiFilePicker extends VStack {
    props: AsComponentXML<MultiFilePickerProps>;
}
