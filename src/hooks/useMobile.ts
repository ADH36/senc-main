import { useState, useEffect, useCallback } from 'react';

interface TouchGesture {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  deltaX: number;
  deltaY: number;
  direction: 'left' | 'right' | 'up' | 'down' | null;
}

interface MobileFeatures {
  isOnline: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  orientation: 'portrait' | 'landscape';
  screenSize: {
    width: number;
    height: number;
  };
  devicePixelRatio: number;
  supportsTouch: boolean;
  supportsVibration: boolean;
  supportsGeolocation: boolean;
  supportsCamera: boolean;
}

export const useMobile = () => {
  const [features, setFeatures] = useState<MobileFeatures>({
    isOnline: navigator.onLine,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    orientation: 'landscape',
    screenSize: { width: window.innerWidth, height: window.innerHeight },
    devicePixelRatio: window.devicePixelRatio || 1,
    supportsTouch: 'ontouchstart' in window,
    supportsVibration: 'vibrate' in navigator,
    supportsGeolocation: 'geolocation' in navigator,
    supportsCamera: 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices
  });

  const [gesture, setGesture] = useState<TouchGesture | null>(null);

  // Detect device type
  const detectDevice = useCallback(() => {
    const width = window.innerWidth;
    const userAgent = navigator.userAgent;
    
    const isMobile = width < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';

    setFeatures(prev => ({
      ...prev,
      isMobile,
      isTablet,
      isDesktop,
      orientation,
      screenSize: { width: window.innerWidth, height: window.innerHeight }
    }));
  }, []);

  // Handle touch gestures
  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    setGesture({
      startX: touch.clientX,
      startY: touch.clientY,
      endX: touch.clientX,
      endY: touch.clientY,
      deltaX: 0,
      deltaY: 0,
      direction: null
    });
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!gesture) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - gesture.startX;
    const deltaY = touch.clientY - gesture.startY;
    
    let direction: 'left' | 'right' | 'up' | 'down' | null = null;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      direction = deltaX > 0 ? 'right' : 'left';
    } else {
      direction = deltaY > 0 ? 'down' : 'up';
    }

    setGesture({
      ...gesture,
      endX: touch.clientX,
      endY: touch.clientY,
      deltaX,
      deltaY,
      direction
    });
  }, [gesture]);

  const handleTouchEnd = useCallback(() => {
    setGesture(null);
  }, []);

  // Mobile-specific utilities
  const vibrate = useCallback((pattern: number | number[]) => {
    if (features.supportsVibration) {
      navigator.vibrate(pattern);
    }
  }, [features.supportsVibration]);

  const callPhone = useCallback((phoneNumber: string) => {
    if (features.isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    }
  }, [features.isMobile]);

  const sendSMS = useCallback((phoneNumber: string, message?: string) => {
    if (features.isMobile) {
      const smsUrl = message ? `sms:${phoneNumber}?body=${encodeURIComponent(message)}` : `sms:${phoneNumber}`;
      window.location.href = smsUrl;
    }
  }, [features.isMobile]);

  const openMaps = useCallback((address: string) => {
    const encodedAddress = encodeURIComponent(address);
    if (features.isMobile) {
      // Try to open native maps app
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        window.location.href = `maps://maps.apple.com/?q=${encodedAddress}`;
      } else {
        window.location.href = `geo:0,0?q=${encodedAddress}`;
      }
    } else {
      // Fallback to Google Maps
      window.open(`https://maps.google.com/maps?q=${encodedAddress}`, '_blank');
    }
  }, [features.isMobile]);

  const shareContent = useCallback(async (data: { title?: string; text?: string; url?: string }) => {
    if (navigator.share && features.isMobile) {
      try {
        await navigator.share(data);
        return true;
      } catch (error) {
        console.error('Error sharing:', error);
        return false;
      }
    }
    return false;
  }, [features.isMobile]);

  const requestFullscreen = useCallback(() => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  }, []);

  const exitFullscreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }, []);

  // Setup event listeners
  useEffect(() => {
    detectDevice();
    
    const handleResize = () => detectDevice();
    const handleOnline = () => setFeatures(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setFeatures(prev => ({ ...prev, isOnline: false }));
    const handleOrientationChange = () => {
      setTimeout(detectDevice, 100); // Delay to get accurate dimensions
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    if (features.supportsTouch) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('orientationchange', handleOrientationChange);
      
      if (features.supportsTouch) {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [detectDevice, handleTouchStart, handleTouchMove, handleTouchEnd, features.supportsTouch]);

  return {
    ...features,
    gesture,
    vibrate,
    callPhone,
    sendSMS,
    openMaps,
    shareContent,
    requestFullscreen,
    exitFullscreen
  };
};

export default useMobile;