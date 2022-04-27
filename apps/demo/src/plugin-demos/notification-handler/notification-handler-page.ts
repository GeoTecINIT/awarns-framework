import { EventData, Page, Slider, View } from '@nativescript/core';
import { getNotificationHandlerService } from './notification-handler-service';
import { NotificationViewModel } from './notification-view-model';

let vm: NotificationViewModel;

export function onNavigatingTo(args: EventData) {
  const context = getNotificationHandlerService().tappedNotification;
  const page: Page = <Page>args.object;
  vm = new NotificationViewModel(context);
  page.bindingContext = vm;
}

export function onSliderLoaded(args: EventData) {
  let slider = <Slider>args.object;
  slider.on('valueChange', (args) => {
    slider = <Slider>args.object;

    vm.answers.set(slider.id, {
      title: slider.id,
      answer: slider.value,
      answerTime: new Date().getTime(),
    });
  });
}

export function submit(args: EventData) {
  vm.submitAnswers();
  closeModal(args);
}

export function closeModal(args: EventData) {
  const view: View = <View>args.object;
  view.closeModal();
}
