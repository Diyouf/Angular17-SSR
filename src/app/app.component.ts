
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title !: string
  isVisible:boolean = false
  constructor(private router: Router) { }

  data = [
    {
      "company": "ABC Inc.",
      "contact": "John Smith",
      "country": "United States"
    },
    {
      "company": "XYZ Ltd.",
      "contact": "Jane Doe",
      "country": "Canada"
    },
    {
      "company": "123 GmbH",
      "contact": "Max Mustermann",
      "country": "Germany"
    },
    {
      "company": "Tech Solutions Co.",
      "contact": "Emily Johnson",
      "country": "United Kingdom"
    },
    {
      "company": "Global Innovations",
      "contact": "Carlos Sanchez",
      "country": "Spain"
    },
    {
      "company": "Pacific Ventures",
      "contact": "Li Wei",
      "country": "China"
    }
  ]

  getInputData(event: Event) {
    this.title = (event.target as HTMLInputElement).value ?? 'hai'
  }

  onUserNav() {
    this.isVisible = !this.isVisible
  }
}
