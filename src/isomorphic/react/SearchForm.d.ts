import React from 'react';
import { DynamicForm, DynamicFormProps } from './DynamicForm';
import { AsComponentXML } from './core/ReactComponent';


declare interface SearchFormProps extends DynamicFormProps {

/**
 * See {@link isc.SearchForm.criteriaChanged() SearchForm.criteriaChanged()}.
 */
criteriaChanged?: Function;

/**
 * See {@link isc.SearchForm.canEditFieldAttribute SearchForm.canEditFieldAttribute}.
 */
canEditFieldAttribute?: string;

/**
 * See {@link isc.SearchForm.useMultiSelectForValueMaps SearchForm.useMultiSelectForValueMaps}.
 */
useMultiSelectForValueMaps?: boolean;

/**
 * See {@link isc.SearchForm.showFilterFieldsOnly SearchForm.showFilterFieldsOnly}.
 */
showFilterFieldsOnly?: boolean;

/**
 * See {@link isc.SearchForm.search() SearchForm.search()}.
 */
search?: Function;

/**
 * See {@link isc.SearchForm.searchOnEnter SearchForm.searchOnEnter}.
 */
searchOnEnter?: boolean;

/**
 * See {@link isc.SearchForm.criteriaChangedDelay SearchForm.criteriaChangedDelay}.
 */
criteriaChangedDelay?: number;

/**
 * See {@link isc.SearchForm.storeDisplayValues SearchForm.storeDisplayValues}.
 */
storeDisplayValues?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SearchForm wraps the SmartClient widget class
 * {@link isc.SearchForm SearchForm} for React, allowing you to import
 * SearchForm for use in React JS and JSX.
 * @class
 * @extends DynamicForm
 */
declare class SearchForm extends DynamicForm {
    props: AsComponentXML<SearchFormProps>;
}
