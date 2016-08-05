/**
 * Created by lcx on 2016/8/3.
 */
import {
    Component,
    Input,
    ChangeDetectionStrategy,
    ViewEncapsulation,
} from '@angular/core';
import * as classNames from 'classnames';

@Component({
    moduleId: module.id,
    selector: 'ad-button-group',
    templateUrl: 'button-group.html',
    // styleUrls: ['button.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AdButtonGroup {
    @Input() size: 'small' | 'large' | 'default' = 'default';
    @Input() className: string;

    prefix: string = 'ant-btn-group';

    get sizeCls() {
        return (<any>{
                'large': 'lg',
                'small': 'sm'
            })[this.size] || '';
    }

    get classes() {
        return classNames({
            [this.prefix]: true,
            [`${this.prefix}-${this.sizeCls}`]: this.sizeCls,
            [this.className]: this.className,
        } as ClassArray);
    }

}