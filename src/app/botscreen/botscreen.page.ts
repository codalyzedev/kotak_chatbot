import { Component, OnInit } from '@angular/core';
import { conversations } from '../../mock';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-botscreen',
  templateUrl: './botscreen.page.html',
  styleUrls: ['./botscreen.page.scss'],
})
export class BotscreenPage implements OnInit {
  conversations: any;
  currentStep: number;
  currentStepObj: any;
  inputVal: string;
  options: { path: string; autoplay: boolean; loop: boolean; };
  ddOpts: any[];

  constructor() {
    this.conversations = [];
    this.currentStep = 0;
    this.currentStepObj = conversations.find(item => item.step === this.currentStep);
    this.inputVal = '';
    this.ddOpts = ['Designer', 'Engineer', 'Doctor', 'Marketing', 'Student', 'Entrepreneur', 'Professional', 'Retired'];
  }

  loadingAnim: AnimationOptions = {
    path: "assets/animations/Typing.json",
    autoplay: true,
    loop: true
  };

  ngOnInit() {
    this.updateBotStep(this.currentStep);
  }

  onChangeInput(e) {
    this.inputVal = e.target.value;
  }

  onSubmitBtn() {
    this.updateUserStep(1);
  }

  onSubmitOpt(value) {
    this.inputVal = value;
    this.updateUserStep(1);
  }

  getConversationsToStep(step) {
    let showConvs = [];
    conversations.forEach(item => {
      if (item.step <= step) showConvs.push(item);
    });
    return showConvs;
  }

  getStepObj(step) {
    return conversations.find(item => item.step === step);
  }

  updateUserStep(nStep) {
    const nextStep = this.currentStep + nStep;
    const nextStepObjInConversations = this.getStepObj(nextStep);
    const updatedConversations = this.conversations.splice(0);
    updatedConversations.push(nextStepObjInConversations);
    updatedConversations.splice(nextStep, 1, { ...nextStepObjInConversations, message: this.inputVal });
    this.conversations = updatedConversations;
    this.currentStep = nextStep;
    this.currentStepObj = { ...nextStepObjInConversations, message: this.inputVal };
    this.updateBotStep(1);
  }

  updateBotStep(nStep) {
    const nextStep = this.currentStep + nStep;
    const nextStepObjInConversations = this.getStepObj(nextStep);
    const updatedConversations = this.conversations.splice(0);
    updatedConversations.push(nextStepObjInConversations);
    updatedConversations.splice(nextStep, 1, { ...nextStepObjInConversations, loading: true });
    this.conversations = updatedConversations;
    this.currentStep = nextStep;
    this.currentStepObj = { ...nextStepObjInConversations, loading: true };
    setTimeout(() => {
      this.updateBotQuestion();
    }, 1000);
  }

  updateBotQuestion() {
    const nextStep = this.currentStep;
    const nextStepObjInConversations = this.getStepObj(nextStep);
    const updatedConversations = this.conversations.splice(0);
    updatedConversations.splice(nextStep, 1, { ...nextStepObjInConversations, loading: false });
    this.conversations = updatedConversations;
    this.currentStep = nextStep;
    this.currentStepObj = { ...nextStepObjInConversations, loading: false };
    const checkIfNextIsBot = this.getStepObj(nextStep + 1);
    this.inputVal = '';
    if (checkIfNextIsBot.user === 'bot') {
      this.updateBotStep(1);
    }
  }
}
