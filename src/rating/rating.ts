import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.html',
  styleUrl: './rating.css',
  standalone: false,
})
export class Rating implements OnInit{

  ratingForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ratingForm = this.fb.group({
      name: ['', Validators.required],
      validationDate: ['', Validators.required],     
      locationRating: ['', Validators.required],     
      priceRating: ['', Validators.required],     
      serviceRating: ['', Validators.required],
      tasteRating: ['', Validators.required],
      arrivalRating: ['', Validators.required],     
    });
  }

  onSubmit() {    
    if(this.ratingForm) {
      console.log(this.ratingForm.value);
    }
  }  
}
