import { NotificationsStore as NS, notificationsStoreDB } from '../internal/store';
export type NotificationsStore = NS;
export const notifications: NotificationsStore = notificationsStoreDB;
