import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from 'src/app/shared-module/models/brand';
import { BrandService } from 'src/app/shared-module/services/brand.service';

@Component({
  selector: 'app-add-edit-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.css']
})
export class AddEditBrandComponent implements OnInit {

  @Input() brand!: Brand;

  brandForm!: FormGroup;

  modalTitle: string = "New Brand";

  constructor(
    private brandService: BrandService,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    if(this.brand.id) this.modalTitle = "Edit brand"
    else this.modalTitle = "New brand"

    this.brandForm = this.formBuilder.group({
      name: [(this.brand)?this.brand.name:'', Validators.required]
    });
  }

  saveBrand() {
    if(this.brand.id) {
      // this.brandService.
    }
  }

  setMargin(formControlName: string): string {
    return (this.brandForm.get(formControlName)?.touched && 
    this.brandForm.get(formControlName)?.invalid)?'0rem':'1rem'
  }

  getBrand(): Brand {
    this.brand = this.brandForm.value.name;
    return this.brand;
  }

}
