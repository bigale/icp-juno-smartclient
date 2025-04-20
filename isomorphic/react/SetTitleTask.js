import { ComponentTask } from './ComponentTask';

export class SetTitleTask extends ComponentTask {
    static ISC_CLASS_NAME = 'SetTitleTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"textFormula":{"className":"UserSummary"},"targetTabName":["TabName","GlobalId"]};

}
