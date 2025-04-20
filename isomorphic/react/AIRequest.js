import { ILogicalComponent } from './core/ILogicalComponent';

export class AIRequest extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"cancellationController":{"className":"CancellationController"},"responseMinimum":"Number","temperature":"Number","messages":{"className":"AIMessageWithSource","isArray":true},"responseMaximum":"Number"};

}
