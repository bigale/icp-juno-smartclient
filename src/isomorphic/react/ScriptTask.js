import { Task } from './Task';

export class ScriptTask extends Task {
    static ISC_CLASS_NAME = 'ScriptTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"isAsync":"Boolean","passThruOutput":"Boolean"};

}
