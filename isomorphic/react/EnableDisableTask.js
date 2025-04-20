import { ComponentTask } from './ComponentTask';

export class EnableDisableTask extends ComponentTask {
    static ISC_CLASS_NAME = 'EnableDisableTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"disable":"Boolean","targetTabName":["TabName","GlobalId"]};

}
