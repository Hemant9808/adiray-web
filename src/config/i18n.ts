import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        contactUs: 'Contact Us',
        login: 'Login',
        logout: 'Log Out',
        profile: 'Profile',
        changeLanguage: 'Change Language',
        logIntoSeeProfile: "Login to see profile"
      },
    },
    he: {
      translation: {
        contactUs: `संपर्क करें`,
        login: `लॉग इन करें`,
        logout: `लॉग आउट`,
        profile: `प्रोफ़ाइल`,
        changeLanguage: `भाषा बदलें`,
        logIntoSeeProfile: `प्रोफ़ाइल देखने के लिए लॉगिन करें`
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;