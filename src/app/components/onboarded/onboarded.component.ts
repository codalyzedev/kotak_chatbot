import { Component, OnInit,  ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: 'app-onboarded',
  templateUrl: './onboarded.component.html',
  styleUrls: ['./onboarded.component.scss'],
})
export class OnboardedComponent implements OnInit {

  ngState: boolean
  constructor(private changeRef: ChangeDetectorRef) {
    this.ngState= true;
  }

  ngOnInit() {
  }

  options: AnimationOptions = {
    path: "assets/animations/Bella Intro.json",
    autoplay: true,
    loop: false
  };

  options2: AnimationOptions = {
    path: "assets/animations/Bella Loop.json",
    autoplay: true,
    loop: true
  };

  confetti: AnimationOptions = {
    path: "assets/animations/Confetti.json",
    autoplay: true,
    loop: false
  };

  wttp: AnimationOptions = {
    path: "assets/animations/WttP.json",
    autoplay: true,
    loop: false
  };


  complete() {
    console.log(" complete => ")

    if(this.ngState) {
      this.ngState= false;
      this.options = {
        ...this.options,
        ...this.options2
      }
      this.changeRef.detectChanges();


    }
  }

  complete2() {
    console.log(" complete22222 => ")
  }

  destroy() {
console.log("destroyed")
  }
  error() {
console.log("error")
  }

  destroy2() {
    console.log("destroyed222222")
      }
      error2() {
    console.log("error222222")
      }

      loop() {
        console.log("loop")
          }

          loop2() {
            console.log("loop222222")
              }


}
