import { CanvasItem } from './CanvasItem';

export class DateRangeItem extends CanvasItem {
    static ISC_CLASS_NAME = 'DateRangeItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"toDate":[{"className":"Date"},"RelativeDateString","TimeUnit"],"fromFieldProperties":{"className":"FormItem","isProperties":true},"allowRelativeDates":"Boolean","fromDate":[{"className":"Date"},"RelativeDateString","TimeUnit"],"validateCriteria":"Boolean","textFormula":{"className":"UserSummary"},"shouldSaveValue":"Boolean","toFieldProperties":{"className":"FormItem","isProperties":true},"formula":{"className":"UserFormula"},"dateRangeFormProperties":{"className":"DynamicForm","isProperties":true}};

}
