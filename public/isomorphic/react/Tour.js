import { Process } from './Process';

export class Tour extends Process {
    static ISC_CLASS_NAME = 'Tour';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"windowDefaults":{"className":"Canvas","isProperties":true},"canCancel":"Boolean","autoReset":"Boolean","notifyMessageSettings":{"className":"NotifySettings"},"showProgress":"Boolean","showProgressPercent":"Boolean","allowDropOnDescendants":"boolean","showCancelButton":"Boolean","cancelSteps":{"className":"ProcessElement","isArray":true},"steps":{"className":"ProcessElement","isArray":true},"showInputValidationMessage":"Boolean"};

}
