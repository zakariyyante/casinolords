// Type definitions for Plausible Analytics
interface PlausibleOptions {
  props?: Record<string, string | number | boolean>;
  callback?: () => void;
}

interface Window {
  plausible?: (eventName: string, options?: PlausibleOptions) => void;
}
