import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FacetValueProps {

/**
 * See {@link isc.FacetValue.isMinimizeValue FacetValue.isMinimizeValue}.
 */
isMinimizeValue?: boolean;

/**
 * See {@link isc.FacetValue.titleHilite FacetValue.titleHilite}.
 */
titleHilite?: string;

/**
 * See {@link isc.FacetValue.selectionBoundary FacetValue.selectionBoundary}.
 */
selectionBoundary?: string;

/**
 * See {@link isc.FacetValue.collapsed FacetValue.collapsed}.
 */
collapsed?: boolean;

/**
 * See {@link isc.FacetValue.width FacetValue.width}.
 */
width?: number;

/**
 * See {@link isc.FacetValue.cellAlign FacetValue.cellAlign}.
 */
cellAlign?: string;

/**
 * See {@link isc.FacetValue.align FacetValue.align}.
 */
align?: string;

/**
 * See {@link isc.FacetValue.borderBefore FacetValue.borderBefore}.
 */
borderBefore?: string;

/**
 * See {@link isc.FacetValue.canCollapse FacetValue.canCollapse}.
 */
canCollapse?: boolean;

/**
 * See {@link isc.FacetValue.id FacetValue.id}.
 */
id?: string | number;

/**
 * See {@link isc.FacetValue.title FacetValue.title}.
 */
title?: string;

/**
 * See {@link isc.FacetValue.canEdit FacetValue.canEdit}.
 */
canEdit?: boolean;

/**
 * See {@link isc.FacetValue.canMinimize FacetValue.canMinimize}.
 */
canMinimize?: boolean;

/**
 * See {@link isc.FacetValue.borderAfter FacetValue.borderAfter}.
 */
borderAfter?: string;

/**
 * See {@link isc.FacetValue.formatCellValue() FacetValue.formatCellValue()}.
 */
formatCellValue?: Function;

/**
 * See {@link isc.FacetValue.minimized FacetValue.minimized}.
 */
minimized?: boolean;

/**
 * See {@link isc.FacetValue.getCellValue() FacetValue.getCellValue()}.
 */
getCellValue?: Function;

/**
 * See {@link isc.FacetValue.parentId FacetValue.parentId}.
 */
parentId?: string | number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FacetValue wraps the SmartClient object
 * {@link isc.FacetValue FacetValue} for React, allowing you to import
 * FacetValue for use in React JS and JSX.
 * @class
 */
declare class FacetValue extends ILogicalComponent {
    props: AsComponentXML<FacetValueProps>;
}
