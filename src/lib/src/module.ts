import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {IntPhonePrefixComponent} from "./component/int-phone-prefix/int-phone-prefix.component";
import {OnlyNumberDirective} from "./directive/only-number.directive";
import {CountryPipe} from "./pipe/country.pipe";
import {CountryService} from "./service/country.service";
import {LocaleService} from "./service/locale.service";
import {TextMaskModule} from 'angular2-text-mask';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpModule,
  ],
  declarations: [
    IntPhonePrefixComponent,
    OnlyNumberDirective,
    CountryPipe
  ],
  exports: [
    IntPhonePrefixComponent
  ],
  providers: [CountryService, LocaleService]
})
export class InternationalPhoneModule {}
