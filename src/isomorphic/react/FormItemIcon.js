import { ILogicalComponent } from './core/ILogicalComponent';

export class FormItemIcon extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"neverDisable":"boolean","inline":"Boolean","showError":"boolean","showRTL":"Boolean","src":["SCImgURL",{"className":"SCStatefulImgConfig"}],"showDisabledOnFocus":"Boolean","showFocused":"Boolean","visibleWhen":{"className":"AdvancedCriteria"},"tabIndex":"int","hspace":"Integer","enableWhen":{"className":"AdvancedCriteria"},"width":"number","disabled":"Boolean","height":"number","showOnFocus":"Boolean","disableOnReadOnly":"boolean","showFocusedWithItem":"boolean","canFocus":"Boolean","showOver":"boolean"};

}
