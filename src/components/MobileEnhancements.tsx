import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, WifiOff, Share2, Phone, MessageSquare, MapPin, Vibrate, Maximize, Minimize } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';
import { toast } from 'sonner';

interface MobileEnhancementsProps {
  children: React.ReactNode;
}

const MobileEnhancements: React.FC<MobileEnhancementsProps> = ({ children }) => {
  const mobile = useMobile();
  const [showOfflineNotice, setShowOfflineNotice] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);

  // Handle offline/online status
  useEffect(() => {
    if (!mobile.isOnline) {
      setShowOfflineNotice(true);
      toast.error('You are currently offline. Some features may not work.');
    } else {
      setShowOfflineNotice(false);
      if (showOfflineNotice) {
        toast.success('Connection restored!');
      }
    }
  }, [mobile.isOnline, showOfflineNotice]);

  // Handle gesture feedback
  useEffect(() => {
    if (mobile.gesture && Math.abs(mobile.gesture.deltaX) > 50) {
      setSwipeDirection(mobile.gesture.direction);
      if (mobile.supportsVibration) {
        mobile.vibrate(50); // Light haptic feedback
      }
      
      // Clear swipe direction after animation
      setTimeout(() => setSwipeDirection(null), 300);
    }
  }, [mobile.gesture, mobile.supportsVibration, mobile.vibrate]);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'SENC - Innovation Across Industries',
      text: 'Check out SENC\'s innovative solutions across gaming, AI, creative services, and payments.',
      url: window.location.href
    };

    const shared = await mobile.shareContent(shareData);
    if (!shared) {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      } catch (error) {
        toast.error('Unable to share or copy link');
      }
    } else {
      toast.success('Content shared successfully!');
    }
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {
      mobile.exitFullscreen();
    } else {
      mobile.requestFullscreen();
    }
  };

  return (
    <div className="relative">
      {/* Offline Notice */}
      <AnimatePresence>
        {showOfflineNotice && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white p-2 text-center text-sm"
          >
            <div className="flex items-center justify-center space-x-2">
              <WifiOff className="w-4 h-4" />
              <span>You are offline. Some features may not work.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Swipe Gesture Indicator */}
      <AnimatePresence>
        {swipeDirection && mobile.isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black/70 text-white px-4 py-2 rounded-full text-sm pointer-events-none"
          >
            Swipe {swipeDirection}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Floating Action Button */}
      {mobile.isMobile && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="flex flex-col space-y-3">
            {/* Share Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShare}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
              title="Share this page"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>

            {/* Fullscreen Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleFullscreen}
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
              title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </motion.button>

            {/* Connection Status */}
            <motion.div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${
                mobile.isOnline 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                  : 'bg-gradient-to-r from-red-500 to-orange-500'
              }`}
              title={mobile.isOnline ? 'Online' : 'Offline'}
            >
              {mobile.isOnline ? <Wifi className="w-5 h-5" /> : <WifiOff className="w-5 h-5" />}
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Device Info Debug Panel (Development only) */}
      {process.env.NODE_ENV === 'development' && mobile.isMobile && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-20 left-2 bg-black/80 text-white p-2 rounded text-xs z-30 max-w-xs"
        >
          <div>Device: {mobile.isMobile ? 'Mobile' : mobile.isTablet ? 'Tablet' : 'Desktop'}</div>
          <div>Screen: {mobile.screenSize.width}x{mobile.screenSize.height}</div>
          <div>Orientation: {mobile.orientation}</div>
          <div>Touch: {mobile.supportsTouch ? 'Yes' : 'No'}</div>
          <div>Vibration: {mobile.supportsVibration ? 'Yes' : 'No'}</div>
          <div>Online: {mobile.isOnline ? 'Yes' : 'No'}</div>
          {mobile.gesture && (
            <div>Gesture: {mobile.gesture.direction} ({mobile.gesture.deltaX}, {mobile.gesture.deltaY})</div>
          )}
        </motion.div>
      )}

      {/* Main Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default MobileEnhancements;