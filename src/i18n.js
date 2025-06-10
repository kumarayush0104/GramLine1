import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to GramLINE",
      whatHelp: "What Help Do You Need?",
      askVoice: "Ask with Voice",
      knowRights: "Know Your Rights",
      findHelp: "Find Nearby Help",
      // Add more translations as needed
    }
  },
  hi: {
    translation: {
      welcome: "ग्रामलाइन में आपका स्वागत है",
      whatHelp: "आपको किस मदद की ज़रूरत है?",
      askVoice: "आवाज़ से पूछें",
      knowRights: "अपने अधिकार जानें",
      findHelp: "पास में मदद खोजें",
    }
  },
  ta: {
    translation: {
      welcome: "கிராம்லைனுக்கு வரவேற்கிறோம்",
      whatHelp: "உங்களுக்கு எந்த உதவி தேவை?",
      askVoice: "குரலால் கேளுங்கள்",
      knowRights: "உங்கள் உரிமைகளை அறியவும்",
      findHelp: "அருகிலுள்ள உதவியை கண்டறியவும்",
    }
  },
  te: {
    translation: {
      welcome: "గ్రామ్లైన్‌కు స్వాగతం",
      whatHelp: "మీకు ఏ సహాయం కావాలి?",
      askVoice: "వాయిస్‌తో అడగండి",
      knowRights: "మీ హక్కులను తెలుసుకోండి",
      findHelp: "సమీపంలో సహాయం కనుగొనండి",
    }
  },
  bn: {
    translation: {
      welcome: "গ্রামলাইন-এ স্বাগতম",
      whatHelp: "আপনার কী সাহায্য দরকার?",
      askVoice: "ভয়েস দিয়ে জিজ্ঞাসা করুন",
      knowRights: "আপনার অধিকার জানুন",
      findHelp: "নিকটস্থ সাহায্য খুঁজুন",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
