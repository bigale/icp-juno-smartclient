import { ScriptTask } from './ScriptTask';

export class StartProcessTask extends ScriptTask {
    static ISC_CLASS_NAME = 'StartProcessTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"process":[{"className":"Process"},"String"],"isAsync":"Boolean"};

}
