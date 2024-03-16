import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { delay } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  providers: [HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  fromParent !: any
  @Input() title!: string

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getdata()
  }


  getdata() {
    this.service.getJsonData().subscribe(
      (res) => {
        this.fromParent = res;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  



}
