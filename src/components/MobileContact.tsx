import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, MapPin, Share2, ExternalLink } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';
import { toast } from 'sonner';

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  whatsapp?: string;
}

interface MobileContactProps {
  contactInfo: ContactInfo;
  className?: string;
}

const MobileContact: React.FC<MobileContactProps> = ({ contactInfo, className = '' }) => {
  const mobile = useMobile();

  const handlePhoneCall = () => {
    if (mobile.supportsVibration) {
      mobile.vibrate(100);
    }
    mobile.callPhone(contactInfo.phone);
    toast.success('Opening phone dialer...');
  };

  const handleSMS = () => {
    if (mobile.supportsVibration) {
      mobile.vibrate(100);
    }
    mobile.sendSMS(contactInfo.phone, 'Hi SENC, I would like to know more about your services.');
    toast.success('Opening SMS...');
  };

  const handleWhatsApp = () => {
    if (!contactInfo.whatsapp) return;
    
    if (mobile.supportsVibration) {
      mobile.vibrate(100);
    }
    
    const message = encodeURIComponent('Hi SENC, I would like to know more about your services.');
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success('Opening WhatsApp...');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('Inquiry about SENC Services');
    const body = encodeURIComponent('Hi SENC Team,\n\nI would like to know more about your services.\n\nBest regards');
    const emailUrl = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    
    window.location.href = emailUrl;
    toast.success('Opening email client...');
  };

  const handleMapLocation = () => {
    if (mobile.supportsVibration) {
      mobile.vibrate(100);
    }
    mobile.openMaps(contactInfo.address);
    toast.success('Opening maps...');
  };

  const handleShare = async () => {
    const shareData = {
      title: 'SENC Contact Information',
      text: `Get in touch with SENC:\nPhone: ${contactInfo.phone}\nEmail: ${contactInfo.email}\nAddress: ${contactInfo.address}`,
      url: window.location.href
    };

    const shared = await mobile.shareContent(shareData);
    if (!shared) {
      try {
        const contactText = `SENC Contact Information:\nPhone: ${contactInfo.phone}\nEmail: ${contactInfo.email}\nAddress: ${contactInfo.address}\nWebsite: ${window.location.href}`;
        await navigator.clipboard.writeText(contactText);
        toast.success('Contact information copied to clipboard!');
      } catch (error) {
        toast.error('Unable to share contact information');
      }
    } else {
      toast.success('Contact information shared successfully!');
    }
  };

  const contactActions = [
    {
      icon: Phone,
      label: 'Call',
      action: handlePhoneCall,
      color: 'from-green-500 to-emerald-500',
      show: mobile.isMobile
    },
    {
      icon: MessageSquare,
      label: 'SMS',
      action: handleSMS,
      color: 'from-blue-500 to-cyan-500',
      show: mobile.isMobile
    },
    {
      icon: Mail,
      label: 'Email',
      action: handleEmail,
      color: 'from-purple-500 to-pink-500',
      show: true
    },
    {
      icon: MapPin,
      label: 'Location',
      action: handleMapLocation,
      color: 'from-red-500 to-orange-500',
      show: true
    },
    {
      icon: ExternalLink,
      label: 'WhatsApp',
      action: handleWhatsApp,
      color: 'from-green-600 to-green-500',
      show: !!contactInfo.whatsapp
    },
    {
      icon: Share2,
      label: 'Share',
      action: handleShare,
      color: 'from-gray-600 to-gray-500',
      show: true
    }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Contact Information Display */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-4 space-y-3"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Contact Information
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <Phone className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Phone:</span>
              <span>{contactInfo.phone}</span>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <Mail className="w-5 h-5 text-purple-500" />
              <span className="font-medium">Email:</span>
              <span className="break-all">{contactInfo.email}</span>
            </div>
            
            <div className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
              <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
              <span className="font-medium">Address:</span>
              <span className="flex-1">{contactInfo.address}</span>
            </div>
            
            {contactInfo.whatsapp && (
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <MessageSquare className="w-5 h-5 text-green-500" />
                <span className="font-medium">WhatsApp:</span>
                <span>{contactInfo.whatsapp}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {contactActions
          .filter(action => action.show)
          .map((action, index) => {
            const IconComponent = action.icon;
            return (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.action}
                className={`
                  relative overflow-hidden rounded-xl p-4 text-white font-medium
                  bg-gradient-to-r ${action.color}
                  shadow-lg hover:shadow-xl transition-all duration-300
                  flex flex-col items-center space-y-2
                  min-h-[80px] justify-center
                `}
              >
                <IconComponent className="w-6 h-6" />
                <span className="text-sm">{action.label}</span>
                
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            );
          })
        }
      </div>

      {/* Mobile-specific features notice */}
      {mobile.isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-4 border-l-4 border-blue-500"
        >
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">
                Mobile Features Available
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Tap the buttons above to directly call, send SMS, or open your preferred apps.
                {mobile.supportsVibration && ' Haptic feedback is enabled for better interaction.'}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Device capabilities info */}
      <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
        <div>Device: {mobile.isMobile ? 'Mobile' : mobile.isTablet ? 'Tablet' : 'Desktop'}</div>
        <div>Features: Touch {mobile.supportsTouch ? '✓' : '✗'}, Vibration {mobile.supportsVibration ? '✓' : '✗'}, Geolocation {mobile.supportsGeolocation ? '✓' : '✗'}</div>
      </div>
    </div>
  );
};

export default MobileContact;