import { ILogicalComponent } from './core/ILogicalComponent';

export class Process extends ILogicalComponent {
    static ISC_CLASS_NAME = 'Process';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"state":{"className":"Record"},"sequences":{"className":"ProcessSequence","isArray":true},"elements":{"className":"ProcessElement","isArray":true},"wizard":"Boolean","traceContext":{"className":"Object"},"mockMode":"Boolean","defaultWaitDuration":"Integer","autoStart":"Boolean"};

}
