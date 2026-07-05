'use client';

import { useEffect, useRef } from 'react';

interface PaddleCheckoutProps {
  priceId: string;
  planName: string;
  className?: string;
  children: React.ReactNode;
}

export default function PaddleCheckout({ priceId, planName, className, children }: PaddleCheckoutProps) {
  const paddleRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="paddle"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
      script.async = true;
      script.onload = () => {
        if (window.Paddle) {
          paddleRef.current = window.Paddle;
          paddleRef.current.Initialize({
            token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || '',
            environment: process.env.NEXT_PUBLIC_PADDLE_ENV || 'production',
            checkout: {
              settings: {
                displayMode: 'overlay',
                theme: 'dark',
              },
            },
          });
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  const handleCheckout = () => {
    if (paddleRef.current?.Checkout) {
      paddleRef.current.Checkout.open({
        items: [{ priceId, quantity: 1 }],
        customData: { plan: planName },
      });
    } else {
      window.open(`https://buy.paddle.com/checkout?price_id=${priceId}`, '_blank');
    }
  };

  return (
    <button onClick={handleCheckout} className={className}>
      {children}
    </button>
  );
}
