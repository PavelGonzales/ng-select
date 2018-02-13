import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectComponent, NG_SELECT_DEFAULT_CONFIG } from './ng-select.component';
import {
    NgOptionTemplateDirective,
    NgLabelTemplateDirective,
    NgHeaderTemplateDirective,
    NgFooterTemplateDirective
} from './ng-templates.directive';
import { VirtualScrollModule } from './virtual-scroll.component';
import { SpinnerComponent } from './spinner.component';
import { NgOptionComponent } from './ng-option.component';
import { NgOptionHighlightDirective } from './ng-option-highlight.directive' ;

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
    declarations: [
        NgSelectComponent,
        NgOptionComponent,
        NgOptionHighlightDirective,
        NgOptionTemplateDirective,
        NgLabelTemplateDirective,
        NgHeaderTemplateDirective,
        NgFooterTemplateDirective,
        SpinnerComponent
    ],
    imports: [
        CommonModule,
        VirtualScrollModule,
        PerfectScrollbarModule
    ],
    exports: [
        NgSelectComponent,
        NgOptionComponent,
        NgOptionHighlightDirective,
        NgOptionTemplateDirective,
        NgLabelTemplateDirective,
        NgHeaderTemplateDirective,
        NgFooterTemplateDirective
    ],
    providers: [
        {
            provide: NG_SELECT_DEFAULT_CONFIG,
            useValue: {
                notFoundText: 'No items found',
                typeToSearchText: 'Type to search',
                addTagText: 'Add item',
                loadingText: 'Loading...',
                clearAllText: 'Clear all',
                disableVirtualScroll: false
            }
        },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class NgSelectModule { }
