import React from 'react';
import { LayoutEditProxy, LayoutEditProxyProps } from './LayoutEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridEditProxyProps extends LayoutEditProxyProps {

/**
 * See {@link isc.GridEditProxy.generateEditableHilites GridEditProxy.generateEditableHilites}.
 */
generateEditableHilites?: boolean;

/**
 * See {@link isc.GridEditProxy.canResizeFields GridEditProxy.canResizeFields}.
 */
canResizeFields?: boolean;

/**
 * See {@link isc.GridEditProxy.saveGroupBy GridEditProxy.saveGroupBy}.
 */
saveGroupBy?: boolean;

/**
 * See {@link isc.GridEditProxy.generateEditableSummaries GridEditProxy.generateEditableSummaries}.
 */
generateEditableSummaries?: boolean;

/**
 * See {@link isc.GridEditProxy.canAddFormulaFields GridEditProxy.canAddFormulaFields}.
 */
canAddFormulaFields?: boolean;

/**
 * See {@link isc.GridEditProxy.saveFieldOrder GridEditProxy.saveFieldOrder}.
 */
saveFieldOrder?: boolean;

/**
 * See {@link isc.GridEditProxy.saveFieldFrozenState GridEditProxy.saveFieldFrozenState}.
 */
saveFieldFrozenState?: boolean;

/**
 * See {@link isc.GridEditProxy.canReorderFields GridEditProxy.canReorderFields}.
 */
canReorderFields?: boolean;

/**
 * See {@link isc.GridEditProxy.getInlineEditText() GridEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;

/**
 * See {@link isc.GridEditProxy.canGroupBy GridEditProxy.canGroupBy}.
 */
canGroupBy?: boolean;

/**
 * See {@link isc.GridEditProxy.canEditHilites GridEditProxy.canEditHilites}.
 */
canEditHilites?: boolean;

/**
 * See {@link isc.GridEditProxy.saveFieldVisibility GridEditProxy.saveFieldVisibility}.
 */
saveFieldVisibility?: boolean;

/**
 * See {@link isc.GridEditProxy.setInlineEditText() GridEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;

/**
 * See {@link isc.GridEditProxy.saveFilterCriteria GridEditProxy.saveFilterCriteria}.
 */
saveFilterCriteria?: boolean;

/**
 * See {@link isc.GridEditProxy.canAddSummaryFields GridEditProxy.canAddSummaryFields}.
 */
canAddSummaryFields?: boolean;

/**
 * See {@link isc.GridEditProxy.saveSort GridEditProxy.saveSort}.
 */
saveSort?: boolean;

/**
 * See {@link isc.GridEditProxy.generateEditableFormulas GridEditProxy.generateEditableFormulas}.
 */
generateEditableFormulas?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridEditProxy wraps the SmartClient widget class
 * {@link isc.GridEditProxy GridEditProxy} for React, allowing you to import
 * GridEditProxy for use in React JS and JSX.
 * @class
 * @extends LayoutEditProxy
 */
declare class GridEditProxy extends LayoutEditProxy {
    props: AsComponentXML<GridEditProxyProps>;
}
