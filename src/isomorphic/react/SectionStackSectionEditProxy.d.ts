import React from 'react';
import { LabelEditProxy, LabelEditProxyProps } from './LabelEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface SectionStackSectionEditProxyProps extends LabelEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SectionStackSectionEditProxy wraps the SmartClient widget class
 * {@link isc.SectionStackSectionEditProxy SectionStackSectionEditProxy} for React, allowing you to import
 * SectionStackSectionEditProxy for use in React JS and JSX.
 * @class
 * @extends LabelEditProxy
 */
declare class SectionStackSectionEditProxy extends LabelEditProxy {
    props: AsComponentXML<SectionStackSectionEditProxyProps>;
}
