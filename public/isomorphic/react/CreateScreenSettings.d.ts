import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CreateScreenSettingsProps {

/**
 * See {@link isc.CreateScreenSettings.verifyAsError CreateScreenSettings.verifyAsError}.
 */
verifyAsError?: boolean;

/**
 * See {@link isc.CreateScreenSettings.htmlElement CreateScreenSettings.htmlElement}.
 */
htmlElement?: string;

/**
 * See {@link isc.CreateScreenSettings.clobberDataSources CreateScreenSettings.clobberDataSources}.
 */
clobberDataSources?: boolean;

/**
 * See {@link isc.CreateScreenSettings.suppressAutoDraw CreateScreenSettings.suppressAutoDraw}.
 */
suppressAutoDraw?: boolean;

/**
 * See {@link isc.CreateScreenSettings.dataContext CreateScreenSettings.dataContext}.
 */
dataContext?: DataContext;

/**
 * See {@link isc.CreateScreenSettings.allowPlaceholders CreateScreenSettings.allowPlaceholders}.
 */
allowPlaceholders?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CreateScreenSettings wraps the SmartClient object
 * {@link isc.CreateScreenSettings CreateScreenSettings} for React, allowing you to import
 * CreateScreenSettings for use in React JS and JSX.
 * @class
 */
declare class CreateScreenSettings extends ILogicalComponent {
    props: AsComponentXML<CreateScreenSettingsProps>;
}
