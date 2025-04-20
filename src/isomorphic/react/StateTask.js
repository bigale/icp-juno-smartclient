import { Task } from './Task';

export class StateTask extends Task {
    static ISC_CLASS_NAME = 'StateTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"value":"Any","passThruOutput":"Boolean"};

}
