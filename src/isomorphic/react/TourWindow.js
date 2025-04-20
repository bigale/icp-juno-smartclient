import { Window } from './Window';

export class TourWindow extends Window {
    static ISC_CLASS_NAME = 'TourWindow';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"contentComponents":{"className":"Canvas","isArray":true},"showCancelButton":"Boolean","actionButtonProperties":{"className":"IButton","isProperties":true},"cancelButtonProperties":{"className":"IButton","isProperties":true},"showProgressPercentInline":"Boolean","showProgressPercent":"Boolean","showProgress":"Boolean","cancelButtonDisabled":"Boolean","showActionButton":"Boolean"};

}
