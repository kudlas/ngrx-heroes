import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UpdateHero} from '../../actions/update.actions';
import {HeroesState} from '../../heroes.reducer';
import {Store} from '@ngrx/store';
import {Hero} from '../../models/hero.model';

@Component({
    selector: 'app-update-form',
    templateUrl: './update-form.component.html',
    styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

    @Input()
    data: Hero;

    @Output()
    valueChange = new EventEmitter();

    detailForm: FormControl;
    shakeInput: boolean = false;

    constructor(private store: Store<HeroesState>) {
        this.detailForm = new FormControl(``, [
            Validators.required,
            Validators.minLength(2)
        ]);
    }

    ngOnInit() {
        this.detailForm.setValue(this.data.title);
    }

    updateName() {
        if (this.isFormOk()) {
            this.store.dispatch(new UpdateHero({id: this.data.id, title: this.detailForm.value}));
        } else {
            this.shakeInput = true;

            setTimeout(() => {
                this.shakeInput = false;
            }, 820);
        }
    }

    isFormOk() {
        return !(this.detailForm.invalid && (this.detailForm.dirty || this.detailForm.touched));
    }

    valueChanged(e) {
        this.valueChange.emit(this.detailForm.value);
    }

}
