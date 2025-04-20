import { StaticTextItem } from './StaticTextItem';

export class MiniDateRangeItem extends StaticTextItem {
    static ISC_CLASS_NAME = 'MiniDateRangeItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"canTabToIcons":"Boolean","allowRelativeDates":"Boolean","fromDate":[{"className":"Date"},"RelativeDateString","TimeUnit"],"shouldSaveValue":"Boolean","rangeDialogProperties":{"className":"DateRangeDialog","isProperties":true},"autoValidate":"Boolean","canFocus":"Boolean","pickerIcon":{"className":"FormItemIcon","isProperties":true},"toDate":[{"className":"Date"},"RelativeDateString","TimeUnit"]};

}
