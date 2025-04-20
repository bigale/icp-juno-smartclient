import { UserTask } from './UserTask';

export class TourStep extends UserTask {
    static ISC_CLASS_NAME = 'TourStep';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"allowDropOnDescendants":"Boolean","showInputValidationMessage":"Boolean","expectedValueCaseSensitive":"Boolean","showActionButton":"Boolean","showOutline":"Boolean","autoComplete":"boolean","showArrow":"Boolean","windowDefaults":{"className":"Canvas","isProperties":true},"inputValidationNotifyDelay":"Integer","expectedValue":["String","Boolean","Number",{"className":"Date"}],"showPointer":"Boolean","targetViewDefaults":{"className":"Canvas","isProperties":true},"showCancelButton":"Boolean"};

}
