import { ComponentTask } from './ComponentTask';

export class GridSetEditValueTask extends ComponentTask {
    static ISC_CLASS_NAME = 'GridSetEditValueTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"value":"Any","targetField":["Number","String"]};

}
