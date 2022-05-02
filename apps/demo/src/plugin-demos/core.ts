import { EventData, Page } from '@nativescript/core';
import { DemoSharedCore } from '@demo/shared';
import { Notification } from '@awarns/notifications';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;

  page.bindingContext = getDemoViewModel();

  getDemoViewModel().setupDemo();
}

export function navigatedTo(args: EventData) {
  const page = <Page>args.object;

  const vm = getDemoViewModel();
  vm.notificationCallbacks.setupNotificationTapListener((notification) => showNotificationModal(notification, page));
  vm.notificationCallbacks.setupNotificationClearedListener();
}

export function exportTap() {
  getDemoViewModel().handleExportTap();
}

export function clearTap() {
  getDemoViewModel().handleClearTap();
}

export function loadMoreItemsReq() {
  getDemoViewModel().loadMore();
}

function showNotificationModal(notification: Notification, page: Page) {
  const context = notification;
  const closeCallback = null;
  const fullscreen = true;
  const animated = true;

  try {
    page.showModal('notification-handler/notification-handler-root', {
      context,
      closeCallback,
      fullscreen,
      animated,
    });
  } catch (err) {
    console.error(`Could not show modal: ${err.stack ? err.stack : JSON.stringify(err)}`);
  }
}

export class DemoModel extends DemoSharedCore {}

let _vm: DemoModel;
function getDemoViewModel() {
  if (!_vm) {
    _vm = new DemoModel();
  }
  return _vm;
}
