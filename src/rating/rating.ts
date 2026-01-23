import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.html',
  styleUrl: './rating.css',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
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
