import React from 'react';
import { BuildViaAIProgressDialog, BuildViaAIProgressDialogProps } from './BuildViaAIProgressDialog';
import { AsComponentXML } from './core/ReactComponent';


declare interface FilterViaAIProgressDialogProps extends BuildViaAIProgressDialogProps {

/**
 * See {@link isc.FilterViaAIProgressDialog.title FilterViaAIProgressDialog.title}.
 */
title?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FilterViaAIProgressDialog wraps the SmartClient widget class
 * {@link isc.FilterViaAIProgressDialog FilterViaAIProgressDialog} for React, allowing you to import
 * FilterViaAIProgressDialog for use in React JS and JSX.
 * @class
 * @extends BuildViaAIProgressDialog
 */
declare class FilterViaAIProgressDialog extends BuildViaAIProgressDialog {
    props: AsComponentXML<FilterViaAIProgressDialogProps>;
}
