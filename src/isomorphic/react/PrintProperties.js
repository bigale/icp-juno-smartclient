import { ILogicalComponent } from './core/ILogicalComponent';

export class PrintProperties extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"omitControls":{"className":"String","isArray":true},"includeControls":{"className":"String","isArray":true},"printForExport":"Boolean"};

}
