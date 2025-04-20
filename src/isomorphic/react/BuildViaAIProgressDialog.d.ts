import React from 'react';
import { Dialog, DialogProps } from './Dialog';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildViaAIProgressDialogProps extends DialogProps {

/**
 * See {@link isc.BuildViaAIProgressDialog.title BuildViaAIProgressDialog.title}.
 */
title?: string;

/**
 * See {@link isc.BuildViaAIProgressDialog.canCancel BuildViaAIProgressDialog.canCancel}.
 */
canCancel?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildViaAIProgressDialog wraps the SmartClient widget class
 * {@link isc.BuildViaAIProgressDialog BuildViaAIProgressDialog} for React, allowing you to import
 * BuildViaAIProgressDialog for use in React JS and JSX.
 * @class
 * @extends Dialog
 */
declare class BuildViaAIProgressDialog extends Dialog {
    props: AsComponentXML<BuildViaAIProgressDialogProps>;
}
