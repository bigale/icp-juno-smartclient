import { ILogicalComponent } from './core/ILogicalComponent';

export class JSONEncoder extends ILogicalComponent {
    static ISC_CLASS_NAME = 'JSONEncoder';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"skipNullValues":"Boolean","strictQuoting":"Boolean","skipInternalProperties":"Boolean","prettyPrint":"Boolean","showDebugOutput":"Boolean","escapeNonPrintable":"Boolean"};

}
