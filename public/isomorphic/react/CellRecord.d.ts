import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CellRecordProps {

/**
 * See {@link isc.CellRecord.enabled CellRecord.enabled}.
 */
enabled?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CellRecord wraps the SmartClient object
 * {@link isc.CellRecord CellRecord} for React, allowing you to import
 * CellRecord for use in React JS and JSX.
 * @class
 */
declare class CellRecord extends ILogicalComponent {
    props: AsComponentXML<CellRecordProps>;
}
