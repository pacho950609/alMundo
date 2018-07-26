import { Component, OnInit , Input } from '@angular/core';
import { Hotel } from '../../modelos/hotel';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {

  @Input() public hoteles: Hotel[];

  constructor()
  {

  }

  ngOnInit() {
  }

}
