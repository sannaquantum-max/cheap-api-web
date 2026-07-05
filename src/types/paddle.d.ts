export {};

declare global {
  interface Window {
    Paddle?: {
      Initialize: (config: {
        token: string;
        environment?: string;
        checkout?: {
          settings?: {
            displayMode?: string;
            theme?: string;
          };
        };
      }) => void;
      Checkout: {
        open: (config: {
          items: Array<{ priceId: string; quantity: number }>;
          customData?: Record<string, string>;
        }) => void;
      };
    };
  }
}
