import { ILogicalComponent } from './core/ILogicalComponent';

export class StyleSetting extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"editorProperties":{"className":"FormItem","isProperties":true},"showAsymmetry":"Boolean","allowAsymmetry":"Boolean"};

}
