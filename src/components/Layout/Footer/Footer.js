// src/components/Layout/Footer/Footer.js
import React, { useState, useEffect, useRef } from 'react';
import styles from './Footer.module.css';


const Footer = () => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ name: 'KOREA', code: 'ko' });

  const languages = [
    { name: 'English', code: 'en' },
    { name: 'Latin America', code: 'es-LA' },
    { name: 'USA Spanish', code: 'es-US' },
    { name: 'Russia', code: 'ru' },
    { name: 'Brazil', code: 'pt-BR' },
    { name: 'Japan', code: 'ja' },
    { name: 'China', code: 'zh-CN' },
    { name: 'France', code: 'fr' },
    { name: 'Korea', code: 'ko' }, 
  ];

  const dropdownRef = useRef(null); 

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const handleSelectLang = (lang) => {
    setSelectedLang(lang);
    setIsLangDropdownOpen(false);
    console.log('Selected language:', lang.name, `(code: ${lang.code})`);
    alert(`Language changed to: ${lang.name}. Actual page language change needs i18n integration.`);
  };

  // Click outside for close dropdown menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <footer className={styles.footerContainer}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>UFC</div>
        <div className={styles.languageSelector} ref={dropdownRef}>
          <button onClick={toggleLangDropdown} className={styles.langButton}>
            {selectedLang.name.toUpperCase()} <span className={styles.arrow}>{isLangDropdownOpen ? '▲' : '▼'}</span>
          </button>
          {isLangDropdownOpen && (
            <ul className={styles.langDropdown}>
              {languages.map((lang) => (
                <li key={lang.code} onClick={() => handleSelectLang(lang)}>
                  {lang.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.linksColumn}>
          <h4>HELP</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li> 
            <li><a href="/contact">Contact Us</a></li>
            {/* Emergence HELP */}
          </ul>
        </div>
        <div className={styles.linksColumn}>
          <h4>LAW</h4>
          <ul>
            <li><a href="/terms">Clauses</a></li> {/* OR Terms & Conditions */}
            <li><a href="/privacy">Personal Information</a></li> {/* OR Privacy Policy */}
            {/* adding link for LAW */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;