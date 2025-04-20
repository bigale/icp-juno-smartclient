import { ComponentTask } from './ComponentTask';

export class ShowHideTask extends ComponentTask {
    static ISC_CLASS_NAME = 'ShowHideTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"showRecursively":"Boolean","targetTabName":["TabName","GlobalId"],"moveFocusToTarget":"Boolean","hide":"Boolean","scrollIntoView":"Boolean"};

}
