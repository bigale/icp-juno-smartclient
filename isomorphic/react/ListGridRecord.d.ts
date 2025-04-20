import React from 'react';
import { Record, RecordProps } from './Record';
import { AsComponentXML } from './core/ReactComponent';


declare interface ListGridRecordProps extends RecordProps {

/**
 * See {@link isc.ListGridRecord.embeddedComponent ListGridRecord.embeddedComponent}.
 */
embeddedComponent?: Canvas;

/**
 * See {@link isc.ListGridRecord.backgroundComponent ListGridRecord.backgroundComponent}.
 */
backgroundComponent?: Canvas;

/**
 * See {@link isc.ListGridRecord.singleCellValue ListGridRecord.singleCellValue}.
 */
singleCellValue?: string;

/**
 * See {@link isc.ListGridRecord.isGroupSummary ListGridRecord.isGroupSummary}.
 */
isGroupSummary?: boolean;

/**
 * See {@link isc.ListGridRecord.canExpand ListGridRecord.canExpand}.
 */
canExpand?: boolean;

/**
 * See {@link isc.ListGridRecord.customStyle ListGridRecord.customStyle}.
 */
customStyle?: string;

/**
 * See {@link isc.ListGridRecord.canAcceptDrop ListGridRecord.canAcceptDrop}.
 */
canAcceptDrop?: boolean;

/**
 * See {@link isc.ListGridRecord.linkText ListGridRecord.linkText}.
 */
linkText?: string;

/**
 * See {@link isc.ListGridRecord.embeddedComponentPosition ListGridRecord.embeddedComponentPosition}.
 */
embeddedComponentPosition?: string;

/**
 * See {@link isc.ListGridRecord.detailDS ListGridRecord.detailDS}.
 */
detailDS?: DataSource;

/**
 * See {@link isc.ListGridRecord.includeInSummary ListGridRecord.includeInSummary}.
 */
includeInSummary?: boolean;

/**
 * See {@link isc.ListGridRecord.embeddedComponentFields ListGridRecord.embeddedComponentFields}.
 */
embeddedComponentFields?: string[];

/**
 * See {@link isc.ListGridRecord.canSelect ListGridRecord.canSelect}.
 */
canSelect?: boolean;

/**
 * See {@link isc.ListGridRecord.isGridSummary ListGridRecord.isGridSummary}.
 */
isGridSummary?: boolean;

/**
 * See {@link isc.ListGridRecord.enabled ListGridRecord.enabled}.
 */
enabled?: boolean;

/**
 * See {@link isc.ListGridRecord.isSeparator ListGridRecord.isSeparator}.
 */
isSeparator?: boolean;

/**
 * See {@link isc.ListGridRecord.showRollOver ListGridRecord.showRollOver}.
 */
showRollOver?: boolean;

/**
 * See {@link isc.ListGridRecord.canDrag ListGridRecord.canDrag}.
 */
canDrag?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ListGridRecord wraps the SmartClient object
 * {@link isc.ListGridRecord ListGridRecord} for React, allowing you to import
 * ListGridRecord for use in React JS and JSX.
 * @class
 */
declare class ListGridRecord extends Record {
    props: AsComponentXML<ListGridRecordProps>;
}
