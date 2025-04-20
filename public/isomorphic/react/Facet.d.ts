import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FacetProps {

/**
 * See {@link isc.Facet.sortFoldersBeforeLeaves Facet.sortFoldersBeforeLeaves}.
 */
sortFoldersBeforeLeaves?: boolean;

/**
 * See {@link isc.Facet.collapsed Facet.collapsed}.
 */
collapsed?: boolean;

/**
 * See {@link isc.Facet.cellAlign Facet.cellAlign}.
 */
cellAlign?: string;

/**
 * See {@link isc.Facet.width Facet.width}.
 */
width?: number;

/**
 * See {@link isc.Facet.labelHeight Facet.labelHeight}.
 */
labelHeight?: number;

/**
 * See {@link isc.Facet.summaryTitle Facet.summaryTitle}.
 */
summaryTitle?: string;

/**
 * See {@link isc.Facet.rollupValue Facet.rollupValue}.
 */
rollupValue?: string;

/**
 * See {@link isc.Facet.minimized Facet.minimized}.
 */
minimized?: boolean;

/**
 * See {@link isc.Facet.id Facet.id}.
 */
id?: string | number;

/**
 * See {@link isc.Facet.synchColumnLayout Facet.synchColumnLayout}.
 */
synchColumnLayout?: boolean;

/**
 * See {@link isc.Facet.title Facet.title}.
 */
title?: string;

/**
 * See {@link isc.Facet.borderAfter Facet.borderAfter}.
 */
borderAfter?: string;

/**
 * See {@link isc.Facet.borderBefore Facet.borderBefore}.
 */
borderBefore?: string;

/**
 * See {@link isc.Facet.canMinimize Facet.canMinimize}.
 */
canMinimize?: boolean;

/**
 * See {@link isc.Facet.showParentsLast Facet.showParentsLast}.
 */
showParentsLast?: boolean;

/**
 * See {@link isc.Facet.indentVTree Facet.indentVTree}.
 */
indentVTree?: boolean;

/**
 * See {@link isc.Facet.separateFolders Facet.separateFolders}.
 */
separateFolders?: boolean;

/**
 * See {@link isc.Facet.height Facet.height}.
 */
height?: number;

/**
 * See {@link isc.Facet.proportionalTitle Facet.proportionalTitle}.
 */
proportionalTitle?: string;

/**
 * See {@link isc.Facet.canCollapse Facet.canCollapse}.
 */
canCollapse?: boolean;

/**
 * See {@link isc.Facet.titleAlign Facet.titleAlign}.
 */
titleAlign?: string;

/**
 * See {@link isc.Facet.inlinedValues Facet.inlinedValues}.
 */
inlinedValues?: boolean;

/**
 * See {@link isc.Facet.isTree Facet.isTree}.
 */
isTree?: boolean;

/**
 * See {@link isc.Facet.summaryValue Facet.summaryValue}.
 */
summaryValue?: string;

/**
 * See {@link isc.Facet.selectionBoundary Facet.selectionBoundary}.
 */
selectionBoundary?: string;

/**
 * See {@link isc.Facet.values Facet.values}.
 */
values?: FacetValue[];

/**
 * See {@link isc.Facet.align Facet.align}.
 */
align?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Facet wraps the non-rendered SmartClient class
 * {@link isc.Facet Facet} for React, allowing you to import
 *  Facet for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Facet extends ILogicalComponent {
    props: AsComponentXML<FacetProps>;
}
