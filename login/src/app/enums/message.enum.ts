export enum MessageType {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}
export enum MessageStyle {
  MESSAGE = 'w-full rounded-full border-2 font-semibold flex items-center justify-center px-6 py-3',
  ERROR = MESSAGE + ' border-error text-error bg-errorBg',
}
