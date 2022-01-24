import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'microfrontend-create-product';
  notification: boolean = false;
  constructor(private readonly appService: AppService) { }

  createProductForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });


  submit(event: any) {
    event.preventDefault();
    if (this.createProductForm.valid) {
      const { name } = this.createProductForm.value
      this.appService.createProduct(name).subscribe(() => this.showNotification())
    }
  }

  showNotification() {
    this.notification = true
    setTimeout(() => {
      this.notification = false
    }, 3000)
  }

  hideNotification() {
    this.notification = false
  }
}
