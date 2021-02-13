import { Component, OnInit } from '@angular/core';
import { conversations } from '../../mock';

@Component({
  selector: 'app-botscreen',
  templateUrl: './botscreen.page.html',
  styleUrls: ['./botscreen.page.scss'],
})
export class BotscreenPage implements OnInit {
  conversations: any;

  constructor() { 
    this.conversations = conversations;
  }

  ngOnInit() {
  }

}
