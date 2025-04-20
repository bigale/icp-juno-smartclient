import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface VisibleMethodProps {

/**
 * See {@link isc.VisibleMethod.language VisibleMethod.language}.
 */
language?: string;

/**
 * See {@link isc.VisibleMethod.scriptImport VisibleMethod.scriptImport}.
 */
scriptImport?: string;

/**
 * See {@link isc.VisibleMethod.script VisibleMethod.script}.
 */
script?: string;

/**
 * See {@link isc.VisibleMethod.name VisibleMethod.name}.
 */
name?: string;

/**
 * See {@link isc.VisibleMethod.args VisibleMethod.args}.
 */
args?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * VisibleMethod wraps the SmartClient object
 * {@link isc.VisibleMethod VisibleMethod} for React, allowing you to import
 * VisibleMethod for use in React JS and JSX.
 * @class
 */
declare class VisibleMethod extends ILogicalComponent {
    props: AsComponentXML<VisibleMethodProps>;
}
