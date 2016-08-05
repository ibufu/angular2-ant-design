/**
 * Created by lcx on 2016/7/27.
 */
import {
    Component,
    Input,
    ViewEncapsulation,
    ElementRef
} from '@angular/core';

import * as classNames from 'classnames';

import {BooleanFieldValue} from '@angular2-ant-design/core/annotations/field-value';

@Component({
    moduleId: module.id,
    selector: 'ad-button',
    templateUrl: 'button.html',
    styleUrls: ['button.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AdButton {
    @Input() type: 'primary' | 'ghost' | 'dashed';
    @Input() htmlType: 'submit' | 'button' | 'reset' = 'button';
    @Input() icon: string;
    @Input() shape: 'circle' | 'circle-outline';
    @Input() size: 'small' | 'large' | 'default' = 'default';
    @Input() @BooleanFieldValue() loading: boolean = false;
    @Input() @BooleanFieldValue() disabled: boolean = false;
    @Input() className: string;

    prefixCls: string = 'ant-btn';

    clicked: boolean = false;

    timeout: any;
    clickedTimeout: any;

    get sizeCls() {
        return (<any>{
                'large': 'lg',
                'small': 'sm'
            })[this.size] || '';
    }


    get classes() {
        return  classNames({
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.type}`]: this.type,
            [`${this.prefixCls}-${this.shape}`]: this.shape,
            [`${this.prefixCls}-${this.sizeCls}`]: !!this.sizeCls,
            [`${this.prefixCls}-loading`]: this.loading,
            [`${this.prefixCls}-clicked`]: this.clicked,
            [this.className]: this.className,
        } as ClassArray)
    }

    constructor(private _elementRef: ElementRef) {}

    handleClick() {
        this.clickedTimeout = setTimeout(() =>{
            this.clicked = true;
        }, 10);
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.clicked = false, 500);
    }

    handleMouseUp() {
        this._elementRef.nativeElement.querySelector('button').blur();
    }

}