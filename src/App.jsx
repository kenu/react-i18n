import { useTranslation } from 'react-i18next';
import './App.css'
import Settings from './Settings.jsx'

function App() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('welcome')}</h1>
      <Settings />
    </>
  )
}

export default App
