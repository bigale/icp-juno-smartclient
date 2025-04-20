import { ProcessElement } from './ProcessElement';

export class ComponentTask extends ProcessElement {
    static ISC_CLASS_NAME = 'ComponentTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"componentBaseClass":["String",{"className":"String","isArray":true}],"componentRequiresDataSource":"boolean","targetBaseClass":["String",{"className":"String","isArray":true}]};

}
