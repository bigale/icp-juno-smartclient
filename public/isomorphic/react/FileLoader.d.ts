import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FileLoaderProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FileLoader wraps the SmartClient object
 * {@link isc.FileLoader FileLoader} for React, allowing you to import
 * FileLoader for use in React JS and JSX.
 * @class
 */
declare class FileLoader extends ILogicalComponent {
    props: AsComponentXML<FileLoaderProps>;
}
