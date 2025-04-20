import { CanvasItem } from './CanvasItem';

export class RelativeDateItem extends CanvasItem {
    static ISC_CLASS_NAME = 'RelativeDateItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"minQuantity":"int","shouldSaveValue":"Boolean","baseDate":{"className":"Date"},"valueFieldProperties":{"className":"ComboBoxItem","isProperties":true},"calculatedDateFieldProperties":{"className":"BlurbItem","isProperties":true},"pickerIconProperties":{"className":"FormItemIcon","isProperties":true},"showCalculatedDateField":"Boolean","defaultValue":[{"className":"Date"},"RelativeDateString","TimeUnit"],"valueFieldWidth":["int","String"],"useSharedPicker":"Boolean","use24HourTime":"Boolean","showPastOptions":"Boolean","centuryThreshold":"number","allowAbsoluteDates":"Boolean","endDate":{"className":"Date"},"rangeRoundingGranularity":{"className":"Object"},"showChooserWeekPicker":"Boolean","timeUnitOptions":{"className":"TimeUnit","isArray":true},"maxQuantity":"int","showFutureOptions":"Boolean","generateValidator":"Boolean","defaultQuantity":"int","pickerTimeItemProperties":{"className":"TimeItem","isProperties":true},"startDate":{"className":"Date"},"showChooserFiscalYearPicker":"Boolean","presetOptions":{"className":"Object"},"showChooserIcon":"Boolean","showPickerTimeItem":"Boolean","quantityFieldProperties":{"className":"SpinnerItem","isProperties":true}};

}
