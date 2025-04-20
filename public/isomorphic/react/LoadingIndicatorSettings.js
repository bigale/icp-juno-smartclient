import { ILogicalComponent } from './core/ILogicalComponent';

export class LoadingIndicatorSettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"imageHeight":"Integer","target":{"className":"Integer","isArray":true},"zIndex":"Integer","imageWidth":"Integer"};

}
