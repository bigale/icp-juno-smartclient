import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface ListPropertiesPaneProps extends LayoutProps {

/**
 * See {@link isc.ListPropertiesPane.startNumberFormProperties ListPropertiesPane.startNumberFormProperties}.
 */
startNumberFormProperties?: DynamicForm;

/**
 * See {@link isc.ListPropertiesPane.sampleTileLayoutProperties ListPropertiesPane.sampleTileLayoutProperties}.
 */
sampleTileLayoutProperties?: TileLayout;

/**
 * See {@link isc.ListPropertiesPane.startNumberFieldTitle ListPropertiesPane.startNumberFieldTitle}.
 */
startNumberFieldTitle?: string;

/**
 * See {@link isc.ListPropertiesPane.startNumberFieldProperties ListPropertiesPane.startNumberFieldProperties}.
 */
startNumberFieldProperties?: SpinnerItem;

/**
 * See {@link isc.ListPropertiesPane.listPropertiesChanged() ListPropertiesPane.listPropertiesChanged()}.
 */
listPropertiesChanged?: Function;

/**
 * See {@link isc.ListPropertiesPane.sampleTileProperties ListPropertiesPane.sampleTileProperties}.
 */
sampleTileProperties?: Canvas;

/**
 * See {@link isc.ListPropertiesPane.listProperties ListPropertiesPane.listProperties}.
 */
listProperties?: ListProperties;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ListPropertiesPane wraps the SmartClient widget class
 * {@link isc.ListPropertiesPane ListPropertiesPane} for React, allowing you to import
 * ListPropertiesPane for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class ListPropertiesPane extends Layout {
    props: AsComponentXML<ListPropertiesPaneProps>;
}
