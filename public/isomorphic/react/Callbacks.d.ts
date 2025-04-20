import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CallbacksProps {

/**
 * See {@link isc.Callbacks.BuildHilitesResponseCallback() Callbacks.BuildHilitesResponseCallback()}.
 */
BuildHilitesResponseCallback?: Function;

/**
 * See {@link isc.Callbacks.RemoteWindowMapCallback() Callbacks.RemoteWindowMapCallback()}.
 */
RemoteWindowMapCallback?: Function;

/**
 * See {@link isc.Callbacks.SummarizeRecordsResultCallback() Callbacks.SummarizeRecordsResultCallback()}.
 */
SummarizeRecordsResultCallback?: Function;

/**
 * See {@link isc.Callbacks.AsyncMultipleValuesGenerationResultCallback() Callbacks.AsyncMultipleValuesGenerationResultCallback()}.
 */
AsyncMultipleValuesGenerationResultCallback?: Function;

/**
 * See {@link isc.Callbacks.LoadScreenCallback() Callbacks.LoadScreenCallback()}.
 */
LoadScreenCallback?: Function;

/**
 * See {@link isc.Callbacks.AIResponseCallback() Callbacks.AIResponseCallback()}.
 */
AIResponseCallback?: Function;

/**
 * See {@link isc.Callbacks.SummarizeValueResultCallback() Callbacks.SummarizeValueResultCallback()}.
 */
SummarizeValueResultCallback?: Function;

/**
 * See {@link isc.Callbacks.BuildAIFieldRequestResponseCallback() Callbacks.BuildAIFieldRequestResponseCallback()}.
 */
BuildAIFieldRequestResponseCallback?: Function;

/**
 * See {@link isc.Callbacks.AIProgressCallback() Callbacks.AIProgressCallback()}.
 */
AIProgressCallback?: Function;

/**
 * See {@link isc.Callbacks.BuildUIViaAICustomValidator() Callbacks.BuildUIViaAICustomValidator()}.
 */
BuildUIViaAICustomValidator?: Function;

/**
 * See {@link isc.Callbacks.RPCCallback() Callbacks.RPCCallback()}.
 */
RPCCallback?: Function;

/**
 * See {@link isc.Callbacks.PlaybackCompleteCallback() Callbacks.PlaybackCompleteCallback()}.
 */
PlaybackCompleteCallback?: Function;

/**
 * See {@link isc.Callbacks.TimingDataCallback() Callbacks.TimingDataCallback()}.
 */
TimingDataCallback?: Function;

/**
 * See {@link isc.Callbacks.SummarizeRecordsPartialResultCallback() Callbacks.SummarizeRecordsPartialResultCallback()}.
 */
SummarizeRecordsPartialResultCallback?: Function;

/**
 * See {@link isc.Callbacks.MultiWindowEventCallback() Callbacks.MultiWindowEventCallback()}.
 */
MultiWindowEventCallback?: Function;

/**
 * See {@link isc.Callbacks.ValidatorConditionCallback() Callbacks.ValidatorConditionCallback()}.
 */
ValidatorConditionCallback?: Function;

/**
 * See {@link isc.Callbacks.ShiftFocusCallback() Callbacks.ShiftFocusCallback()}.
 */
ShiftFocusCallback?: Function;

/**
 * See {@link isc.Callbacks.SuggestRecordSummaryTitleCallback() Callbacks.SuggestRecordSummaryTitleCallback()}.
 */
SuggestRecordSummaryTitleCallback?: Function;

/**
 * See {@link isc.Callbacks.DSCallback() Callbacks.DSCallback()}.
 */
DSCallback?: Function;

/**
 * See {@link isc.Callbacks.ExportImageCallback() Callbacks.ExportImageCallback()}.
 */
ExportImageCallback?: Function;

/**
 * See {@link isc.Callbacks.AnimationCallback() Callbacks.AnimationCallback()}.
 */
AnimationCallback?: Function;

/**
 * See {@link isc.Callbacks.GetFieldValueCallback() Callbacks.GetFieldValueCallback()}.
 */
GetFieldValueCallback?: Function;

/**
 * See {@link isc.Callbacks.MockDSExportCallback() Callbacks.MockDSExportCallback()}.
 */
MockDSExportCallback?: Function;

/**
 * See {@link isc.Callbacks.RemoteWindowBooleanCallback() Callbacks.RemoteWindowBooleanCallback()}.
 */
RemoteWindowBooleanCallback?: Function;

/**
 * See {@link isc.Callbacks.ApplyAIFilterResponseCallback() Callbacks.ApplyAIFilterResponseCallback()}.
 */
ApplyAIFilterResponseCallback?: Function;

/**
 * See {@link isc.Callbacks.AsyncSingleValueGenerationResultCallback() Callbacks.AsyncSingleValueGenerationResultCallback()}.
 */
AsyncSingleValueGenerationResultCallback?: Function;

/**
 * See {@link isc.Callbacks.RPCQueueCallback() Callbacks.RPCQueueCallback()}.
 */
RPCQueueCallback?: Function;

/**
 * See {@link isc.Callbacks.ProcessCallback() Callbacks.ProcessCallback()}.
 */
ProcessCallback?: Function;

/**
 * See {@link isc.Callbacks.EventErrorCallback() Callbacks.EventErrorCallback()}.
 */
EventErrorCallback?: Function;

/**
 * See {@link isc.Callbacks.ShowSectionCallback() Callbacks.ShowSectionCallback()}.
 */
ShowSectionCallback?: Function;

/**
 * See {@link isc.Callbacks.HasFileVersionCallback() Callbacks.HasFileVersionCallback()}.
 */
HasFileVersionCallback?: Function;

/**
 * See {@link isc.Callbacks.BuildCriterionResponseCallback() Callbacks.BuildCriterionResponseCallback()}.
 */
BuildCriterionResponseCallback?: Function;

/**
 * See {@link isc.Callbacks.PaletteNodeCallback() Callbacks.PaletteNodeCallback()}.
 */
PaletteNodeCallback?: Function;

/**
 * See {@link isc.Callbacks.BuildUIViaAIResponseCallback() Callbacks.BuildUIViaAIResponseCallback()}.
 */
BuildUIViaAIResponseCallback?: Function;

/**
 * See {@link isc.Callbacks.HasFileCallback() Callbacks.HasFileCallback()}.
 */
HasFileCallback?: Function;

/**
 * See {@link isc.Callbacks.CanPlayCallback() Callbacks.CanPlayCallback()}.
 */
CanPlayCallback?: Function;

/**
 * See {@link isc.Callbacks.GetFileVersionCallback() Callbacks.GetFileVersionCallback()}.
 */
GetFileVersionCallback?: Function;

/**
 * See {@link isc.Callbacks.CollapseSectionCallback() Callbacks.CollapseSectionCallback()}.
 */
CollapseSectionCallback?: Function;

/**
 * See {@link isc.Callbacks.LoadProjectCallback() Callbacks.LoadProjectCallback()}.
 */
LoadProjectCallback?: Function;

/**
 * See {@link isc.Callbacks.ExpandSectionCallback() Callbacks.ExpandSectionCallback()}.
 */
ExpandSectionCallback?: Function;

/**
 * See {@link isc.Callbacks.FormattedTimingDataCallback() Callbacks.FormattedTimingDataCallback()}.
 */
FormattedTimingDataCallback?: Function;

/**
 * See {@link isc.Callbacks.TabIndexUpdatedCallback() Callbacks.TabIndexUpdatedCallback()}.
 */
TabIndexUpdatedCallback?: Function;

/**
 * See {@link isc.Callbacks.DataURLCallback() Callbacks.DataURLCallback()}.
 */
DataURLCallback?: Function;

/**
 * See {@link isc.Callbacks.RemoteWindowCallback() Callbacks.RemoteWindowCallback()}.
 */
RemoteWindowCallback?: Function;

/**
 * See {@link isc.Callbacks.DateRangeCallback() Callbacks.DateRangeCallback()}.
 */
DateRangeCallback?: Function;

/**
 * See {@link isc.Callbacks.GetFileCallback() Callbacks.GetFileCallback()}.
 */
GetFileCallback?: Function;

/**
 * See {@link isc.Callbacks.ValidationStatusCallback() Callbacks.ValidationStatusCallback()}.
 */
ValidationStatusCallback?: Function;

/**
 * See {@link isc.Callbacks.RemoteWindowErrorCallback() Callbacks.RemoteWindowErrorCallback()}.
 */
RemoteWindowErrorCallback?: Function;

/**
 * See {@link isc.Callbacks.ValidatorActionCallback() Callbacks.ValidatorActionCallback()}.
 */
ValidatorActionCallback?: Function;

/**
 * See {@link isc.Callbacks.PrintCanvasCallback() Callbacks.PrintCanvasCallback()}.
 */
PrintCanvasCallback?: Function;

/**
 * See {@link isc.Callbacks.MessagingCallback() Callbacks.MessagingCallback()}.
 */
MessagingCallback?: Function;

/**
 * See {@link isc.Callbacks.HideSectionCallback() Callbacks.HideSectionCallback()}.
 */
HideSectionCallback?: Function;

/**
 * See {@link isc.Callbacks.BuildUIViaAICustomValidationResultCallback() Callbacks.BuildUIViaAICustomValidationResultCallback()}.
 */
BuildUIViaAICustomValidationResultCallback?: Function;

/**
 * See {@link isc.Callbacks.RowCountCallback() Callbacks.RowCountCallback()}.
 */
RowCountCallback?: Function;

/**
 * See {@link isc.Callbacks.Function() Callbacks.Function()}.
 */
Function?: Function;

/**
 * See {@link isc.Callbacks.ClientOnlyDataSourceCallback() Callbacks.ClientOnlyDataSourceCallback()}.
 */
ClientOnlyDataSourceCallback?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Callbacks wraps the non-rendered SmartClient class
 * {@link isc.Callbacks Callbacks} for React, allowing you to import
 *  Callbacks for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Callbacks extends ILogicalComponent {
    props: AsComponentXML<CallbacksProps>;
}
