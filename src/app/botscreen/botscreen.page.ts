import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { conversations } from '../../mock';
import { AnimationOptions } from 'ngx-lottie';
import { IonContent, ToastController } from '@ionic/angular';
import { trigger, style, animate, transition, group, query, animateChild } from '@angular/animations';
import { AnimationController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-botscreen',
  templateUrl: './botscreen.page.html',
  styleUrls: ['./botscreen.page.scss'],
  animations: [
    trigger('text-input-container', [
      transition(':enter', [
          style({ 'max-height': "0px"}),
          group([
            animate('900ms ease-in', style({ 'max-height': "300px"}))
          ])

      ]),
      transition(':leave', [
          group([
            animate('600ms ease-out', style({ 'max-height': "0px"}))
          ])
      ])
    ]),
    trigger('textbox', [
      transition(':enter', [
          style({ opacity: '0','max-height': "0px"}),
          group([
            animate('900ms ease-in-out', style({opacity: '1', 'max-height': "200px"}))
          ])

      ]),
      transition(':leave', [
          group([
            animate('600ms ease-out', style({opacity: '0','max-height': "0px"}))
          ])
      ])
    ]),
    trigger('onboarded-container', [
      transition(':enter', [
          style({ 'max-height': "0px"}),
          group([
            animate('400ms ease-in-out', style({ 'max-height': "100%"}))
          ])

      ]),
      transition(':leave', [
          group([
            animate('400ms ease-out', style({ 'max-height': "0px"}))
          ])
      ])
    ]),
  ]
})

export class BotscreenPage implements OnInit {
  conversations: any;
  currentStep: number;
  currentStepObj: any;
  inputVal: string;
  options: { path: string; autoplay: boolean; loop: boolean; };
  ddOpts: any[];
  @ViewChild('list') list : IonContent;

  constructor(private animationCtrl: AnimationController, platform: Platform) {
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
    this.updateStep('bot', this.currentStep);
  }

  onChangeInput(e) {
    this.inputVal = e.target.value;
  }

  onSubmitBtn() {

      this.updateStep('user', 1);

  }

  onSubmitOpt(value) {
      this.inputVal = value;
      this.updateStep('user', 1);
  }

  editUserResponse(step) {
    this.inputVal = '';
    const copyConvs = this.conversations.splice(0);
    this.conversations = this.getConversationsToStep(copyConvs, step - 1);
    this.currentStep = step -1;
    this.currentStepObj = copyConvs.find(item => item.step === step - 1);
    this.list.scrollToBottom(300);
  }

  getConversationsToStep(convs, step) {
    let showConvs = [];
    convs.forEach(item => {
      if (item.step <= step) showConvs.push(item);
    });
    return showConvs;
  }

  getStepObj(step) {
    return conversations.find(item => item.step === step);
  }

  updateStep(type, nStep) {
    const nextStep = this.currentStep + nStep;
    const nextStepObjInConversations = this.getStepObj(nextStep);
    const updatedConversations = this.conversations.splice(0);
    updatedConversations.push(nextStepObjInConversations);
    const updateObj = type === 'bot' ? { loading: true, responseType: null } : { message: this.inputVal };
    updatedConversations.splice(nextStep, 1, Object.assign(nextStepObjInConversations, updateObj));
    this.conversations = updatedConversations;
    this.currentStep = nextStep;
    this.currentStepObj = Object.assign(nextStepObjInConversations, updateObj);
    if (this.currentStepObj.user === 'bot') {
      setTimeout(() => {
        this.updateBotQuestion();
      }, 1000);
    } else {
      this.updateStep('bot', 1);
      this.list.scrollToBottom(300);
    }
  }

  updateBotQuestion() {
    const nextStep = this.currentStep;
    const nextStepObjInConversations = this.getStepObj(nextStep);
    const updatedConversations = this.conversations.splice(0);
    updatedConversations.splice(nextStep, 1, { ...nextStepObjInConversations, loading: false, responseType: nextStepObjInConversations.component });
    this.conversations = updatedConversations;
    this.currentStep = nextStep;
    this.currentStepObj = { ...nextStepObjInConversations, loading: false, responseType: nextStepObjInConversations.component };
    const checkIfNextIsBot = this.getStepObj(nextStep + 1);
    this.inputVal = '';
    this.list.scrollToBottom(300);
    if (checkIfNextIsBot.user === 'bot') {
      this.updateStep('bot', 1);
    }
  }
}
