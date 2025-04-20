import React from 'react';
import { FileItem, FileItemProps } from './FileItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface ViewFileItemProps extends FileItemProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ViewFileItem wraps the SmartClient widget class
 * {@link isc.ViewFileItem ViewFileItem} for React, allowing you to import
 * ViewFileItem for use in React JS and JSX.
 * @class
 * @extends FileItem
 */
declare class ViewFileItem extends FileItem {
    props: AsComponentXML<ViewFileItemProps>;
}
