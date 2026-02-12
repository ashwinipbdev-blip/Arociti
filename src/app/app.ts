import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Api } from './services/api'


interface registerresponse {
  status:boolean;
  message:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
})

export class App {
  registerForm!: FormGroup
  constructor(private fb:FormBuilder, private api:Api){
   this.registerForm = this.fb.group({
     firstname:['',Validators.required],
     lastname:['',Validators.required],
     email:['',Validators.required],
     phone:['',Validators.required],
     password:['',Validators.required]
    })
  }
  protected readonly title = signal('artociti-frontend');
  
  categories = [
    { name: 'Relief Murals', img: 'https://www.artociti.com/cdn/shop/files/Relief_Murals_300x.jpg' },
    { name: 'Heritage Replicas', img: 'https://www.artociti.com/cdn/shop/files/Heritage_Replicas_300x.jpg' },
    { name: '3D Abstract Art', img: 'https://www.artociti.com/cdn/shop/files/3D_Abstract_Art_300x.jpg' },
    { name: 'Canvases', img: 'https://www.artociti.com/cdn/shop/files/Canvas_300x.jpg' },
    { name: 'Wall Accents', img: 'https://www.artociti.com/cdn/shop/files/Wall_Accents_300x.jpg' },
    { name: 'Statues', img: 'https://www.artociti.com/cdn/shop/files/Statues_300x.jpg' }
  ];

  bestSellers = [
    { 
      title: '2.5 feet Buddha Face Wall Hanging', 
      price: 3100, 
      oldPrice: 5999, 
      discount: '-48%', 
      rating: 4.4,
      img: 'https://www.artociti.com/cdn/shop/files/Buddha_Face_300x.jpg' 
    },
    { 
      title: 'Tirupati Balaji 3D Relief Mural', 
      price: 2000, 
      oldPrice: 3999, 
      discount: '-50%', 
      rating: 4.86,
      img: 'https://www.artociti.com/cdn/shop/files/Balaji_300x.jpg' 
    },
    { 
      title: '3X2 feet 7 Horse 3D Relief Art', 
      price: 7500, 
      oldPrice: 15000, 
      discount: '-58%', 
      rating: 5.0,
      img: 'https://www.artociti.com/cdn/shop/files/7_Horses_300x.jpg' 
    },
    { 
      title: 'Ethnic Wall Decor Jharokha', 
      price: 3700, 
      oldPrice: 6200, 
      discount: '-40%', 
      rating: 4.7,
      img: 'https://www.artociti.com/cdn/shop/files/Jharokha_300x.jpg' 
    }
  ];

  collections = [
    { name: 'God Figures', img: 'assets/god-figures.jpg' },
    { name: 'Budget Friendly', img: 'assets/budget-friendly.jpg' },
    { name: 'Abstract Art', img: 'assets/abstract-art.jpg' }
  ];

  landscapeProducts = [
    { title: 'Exotic Birds & Lush Foliage', price: 10799, oldPrice: 21499, discount: '-50%', img: 'assets/landscape1.jpg' },
    { title: 'Botanical Garden with Birds', price: 10799, oldPrice: 21499, discount: '-51%', img: 'assets/landscape2.jpg' },
    { title: 'Abstract Human Figures', price: 10799, oldPrice: 21000, discount: '-49%', img: 'assets/landscape3.jpg' }
  ];

  featuredCollections = [
    { name: 'Canvas Paintings', items: '120+ Items', img: 'https://www.artociti.com/cdn/shop/files/Canvas_Paintings_Collection.jpg' },
    { name: 'Wall Murals', items: '80+ Items', img: 'https://www.artociti.com/cdn/shop/files/Wall_Murals_Collection.jpg' },
    { name: 'Home Decor', items: '200+ Items', img: 'https://www.artociti.com/cdn/shop/files/Home_Decor_Collection.jpg' },
    { name: 'Special Editions', items: '45+ Items', img: 'https://www.artociti.com/cdn/shop/files/Special_Editions.jpg' }
  ];


 isSidebarOpen = false;
  isLoginModalOpen = false;
  isSignUpModalOpen=false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  goToLogin() {
    // If mobile, close sidebar first
    this.isSidebarOpen = false;
    this.isSignUpModalOpen=false;
    // Open the login popup/modal
    this.isLoginModalOpen = true;
  }

  closeLogin() {
    this.isLoginModalOpen = false;
  }

  openSignUp(){
     // If mobile, close sidebar first
    this.isSidebarOpen = false;
    // Open the login popup/modal
    this.isSignUpModalOpen = true;
    this.isLoginModalOpen = false;
  }
  closeSIgnUp(){
    this.isSignUpModalOpen = false;
  }


  register() {
  const formValue = this.registerForm.value;
  // Tell the post method what type of data to expect
  this.api.post('auth/register', formValue).subscribe((resp) => {
    const data = resp as registerresponse
    if (data.status) {
      alert(data.message);
    }
  });
}
}
