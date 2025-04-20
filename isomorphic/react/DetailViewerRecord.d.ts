import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DetailViewerRecordProps {

/**
 * See {@link isc.DetailViewerRecord.linkText DetailViewerRecord.linkText}.
 */
linkText?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DetailViewerRecord wraps the SmartClient object
 * {@link isc.DetailViewerRecord DetailViewerRecord} for React, allowing you to import
 * DetailViewerRecord for use in React JS and JSX.
 * @class
 */
declare class DetailViewerRecord extends ILogicalComponent {
    props: AsComponentXML<DetailViewerRecordProps>;
}
