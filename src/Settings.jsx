import React from 'react';
import { useTranslation } from 'react-i18next';

function Settings() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="Settings">
      <h2>{t('settings')}</h2>
      <div>
        <h3>{t('language')}</h3>
        <button onClick={() => changeLanguage('en')}>{t('english')}</button>
        <button onClick={() => changeLanguage('ko')}>{t('korean')}</button>
        <button onClick={() => changeLanguage('zh')}>{t('chinese')}</button>
      </div>
    </div>
  );
}

export default Settings;
