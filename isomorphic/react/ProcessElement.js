import { ILogicalComponent } from './core/ILogicalComponent';

export class ProcessElement extends ILogicalComponent {
    static ISC_CLASS_NAME = 'ProcessElement';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"forceSingle":"Boolean","passThruOutput":"Boolean","mockMode":"Boolean","supportsMultipleInputRecords":"Boolean","waitDuration":"Integer"};

}
