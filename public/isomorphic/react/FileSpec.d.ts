import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FileSpecProps {

/**
 * See {@link isc.FileSpec.fileType FileSpec.fileType}.
 */
fileType?: string;

/**
 * See {@link isc.FileSpec.fileName FileSpec.fileName}.
 */
fileName?: string;

/**
 * See {@link isc.FileSpec.fileFormat FileSpec.fileFormat}.
 */
fileFormat?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FileSpec wraps the SmartClient object
 * {@link isc.FileSpec FileSpec} for React, allowing you to import
 * FileSpec for use in React JS and JSX.
 * @class
 */
declare class FileSpec extends ILogicalComponent {
    props: AsComponentXML<FileSpecProps>;
}
