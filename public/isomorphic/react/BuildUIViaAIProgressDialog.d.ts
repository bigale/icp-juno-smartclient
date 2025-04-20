import React from 'react';
import { BuildViaAIProgressDialog, BuildViaAIProgressDialogProps } from './BuildViaAIProgressDialog';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildUIViaAIProgressDialogProps extends BuildViaAIProgressDialogProps {

/**
 * See {@link isc.BuildUIViaAIProgressDialog.title BuildUIViaAIProgressDialog.title}.
 */
title?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildUIViaAIProgressDialog wraps the SmartClient widget class
 * {@link isc.BuildUIViaAIProgressDialog BuildUIViaAIProgressDialog} for React, allowing you to import
 * BuildUIViaAIProgressDialog for use in React JS and JSX.
 * @class
 * @extends BuildViaAIProgressDialog
 */
declare class BuildUIViaAIProgressDialog extends BuildViaAIProgressDialog {
    props: AsComponentXML<BuildUIViaAIProgressDialogProps>;
}
