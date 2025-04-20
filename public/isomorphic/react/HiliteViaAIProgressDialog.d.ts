import React from 'react';
import { BuildViaAIProgressDialog, BuildViaAIProgressDialogProps } from './BuildViaAIProgressDialog';
import { AsComponentXML } from './core/ReactComponent';


declare interface HiliteViaAIProgressDialogProps extends BuildViaAIProgressDialogProps {

/**
 * See {@link isc.HiliteViaAIProgressDialog.title HiliteViaAIProgressDialog.title}.
 */
title?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HiliteViaAIProgressDialog wraps the SmartClient widget class
 * {@link isc.HiliteViaAIProgressDialog HiliteViaAIProgressDialog} for React, allowing you to import
 * HiliteViaAIProgressDialog for use in React JS and JSX.
 * @class
 * @extends BuildViaAIProgressDialog
 */
declare class HiliteViaAIProgressDialog extends BuildViaAIProgressDialog {
    props: AsComponentXML<HiliteViaAIProgressDialogProps>;
}
