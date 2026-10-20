import React from 'react';

// Official Brand SVGs with accurate brand colors and crisp vector paths
export function ReactIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <title>React</title>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

export function NodeIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <title>Node.js</title>
      <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z" fill="#539E43"/>
      <path d="M16 4.8l10.5 6.1v12.2L16 29.2 5.5 23.1V10.9L16 4.8z" fill="#333333"/>
      <path d="M16 7.5l7.8 4.5v9l-7.8 4.5-7.8-4.5v-9l7.8-4.5z" fill="#539E43"/>
    </svg>
  );
}

export function ExpressIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <title>Express.js</title>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
    </svg>
  );
}

export function CppIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>C++</title>
      <path fill="#00599C" d="M117.5 64l-53.5 53.5L10.5 64 64 10.5 117.5 64z"/>
      <path fill="#004482" d="M64 10.5L10.5 64l53.5 53.5V10.5z"/>
      <path fill="#FFF" d="M64 35.8c-15.6 0-28.2 12.6-28.2 28.2s12.6 28.2 28.2 28.2c10.4 0 19.5-5.6 24.3-14l-11.8-6.8c-2.4 4.3-7.1 7.2-12.5 7.2-8 0-14.6-6.5-14.6-14.6s6.5-14.6 14.6-14.6c5.4 0 10.1 2.9 12.5 7.2l11.8-6.8c-4.8-8.4-13.9-14-24.3-14zM86.5 59.8h-4.3v-4.3h-4.3v4.3h-4.3v4.3h4.3v4.3h4.3v-4.3h4.3v-4.3zm18 0h-4.3v-4.3h-4.3v4.3h-4.3v4.3h4.3v4.3h4.3v-4.3h4.3v-4.3z"/>
    </svg>
  );
}

export function CIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>C</title>
      <path fill="#A8B9CC" d="M117.5 64l-53.5 53.5L10.5 64 64 10.5 117.5 64z"/>
      <path fill="#5C6F84" d="M64 10.5L10.5 64l53.5 53.5V10.5z"/>
      <path fill="#FFF" d="M64 35.8c-15.6 0-28.2 12.6-28.2 28.2s12.6 28.2 28.2 28.2c10.4 0 19.5-5.6 24.3-14l-11.8-6.8c-2.4 4.3-7.1 7.2-12.5 7.2-8 0-14.6-6.5-14.6-14.6s6.5-14.6 14.6-14.6c5.4 0 10.1 2.9 12.5 7.2l11.8-6.8c-4.8-8.4-13.9-14-24.3-14z"/>
    </svg>
  );
}

export function JavaIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>Java</title>
      <path fill="#E76F00" d="M48.8 89.2c-5.7.5-11.4 1.4-16.7 3.2 0 0 11.2-4.1 27.5-4.1 14.6 0 21.6 3.6 34.6 1.4-12.8-2.3-25.1-2.3-45.4-.5zm-4.3-17.7c-4.9.4-9.8 1.2-14.4 2.8 0 0 9.7-3.6 23.7-3.6 12.6 0 18.6 3.1 29.8 1.2-11.1-2-21.7-2-39.1-.4zm34.8 28.5c-15.6 3.2-34.6 3.7-48.4 1.6-4.6-.7-9.1-1.8-13.3-3.3 0 0 9 4.3 26 5.8 20.3 1.8 45.4-1.2 54.3-6.6-6 1.1-12.2 2-18.6 2.5zm19.6-16.1c5.2-1.9 8.5-5 8.5-8.5 0-6.4-11.2-11.6-25-11.6-4.7 0-9.1.6-12.9 1.7 8.3 1.8 14.5 4.8 14.5 8.3 0 3-4.6 5.6-11.6 7.2 9.2 0 18.4 1 26.5 2.9z"/>
      <path fill="#5382A1" d="M69.8 18.2c4.1 4.5.3 9.4-4.8 13.9-6.4 5.7-10.7 10.9-4.2 18.2 4.1 4.6 2.8 8.8-3.4 13.4-3.5 2.6-6.2 5.5-6.2 9.1 0 1.9.9 3.7 2.6 5.3-2.5-.5-4.5-1.5-5.9-2.9-3.3-3.3-3.1-7.8 1.2-12 5.5-5.3 9.7-9.5 5.5-15.5-5.1-7.2-2.1-12.8 4.2-18.3 4.3-3.7 7.7-7.2 11-11.2z"/>
    </svg>
  );
}

export function JavascriptIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>JavaScript</title>
      <path fill="#F7DF1E" d="M1.4 1.4h125.2v125.2H1.4z"/>
      <path d="M117.6 104.9c-1.8 10.4-11.2 14.9-23.7 14.9-20.9 0-27.4-12.3-27.4-23.3h16.2c.7 7.3 4.7 10.5 11.2 10.5 5.6 0 9.8-3.1 9.8-7.9 0-6.1-5.1-8.5-13.6-12.2l-4.7-2c-13.5-5.8-22.5-13.4-22.5-28 0-14.8 11.5-25.9 29.5-25.9 17.5 0 26.7 9.9 27.7 22.4H98.9c-.8-5.3-4.2-8.8-10.4-8.8-5.2 0-8.6 3.3-8.6 7.4 0 5.2 3.6 7.5 11.8 11.1l4.7 2c16 6.8 24.3 14 24.3 28.5zm-59.9-53v51.2c0 9.1-4.7 13.4-13.4 13.4-8.1 0-12.8-4.5-14.8-9.8l13.5-8c1.3 2.9 2.9 4.8 5.7 4.8 2.2 0 3.8-1.1 3.8-4.9V51.9h15.2z"/>
    </svg>
  );
}

export function MongoIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>MongoDB</title>
      <path fill="#499D4A" d="M65.4 2.8c-1.3-.7-2.9-.6-4.1.2C54.4 7.6 22 34.6 24.2 73.1c1.8 31.9 26.5 48.7 37 51.6.8.2 1.6.3 2.4.3.4 0 .9 0 1.3-.1 10.5-2.8 35.8-19.4 38.6-51.5 3.3-37.4-28-64.7-38.1-70.6zM64 117.8c-.3 0-.6 0-.9-.1-.2-.1-17.6-6.6-21.5-28.7-2.9-16.7 1.6-32.9 13.5-49.3 2.6-3.6 5.6-7.3 8.9-11.2v89.3zm20.8-28.7c-3.7 20.9-19.9 27.8-20.8 28.2V28.5c3.3 3.9 6.3 7.6 8.9 11.2 11.9 16.4 16.4 32.6 13.5 49.4-.5 0-1.1 0-1.6 0z"/>
    </svg>
  );
}

export function MysqlIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>MySQL</title>
      <path fill="#00758F" d="M64 14C36.4 14 14 36.4 14 64s22.4 50 50 50 50-22.4 50-50-22.4-50-50-50zm0 82c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
      <path fill="#F29111" d="M64 42c-12.1 0-22 9.9-22 22s9.9 22 22 22 22-9.9 22-22-9.9-22-22-22z"/>
    </svg>
  );
}

export function FirebaseIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>Firebase</title>
      <path fill="#FFA000" d="M25.6 98.3l17.2-106c.4-2.5 3.3-3.8 5.4-2.3l18.4 13.4 14.8-28.2c1.4-2.7 5.2-2.7 6.6 0l42.4 80.8-104.8 42.3z"/>
      <path fill="#F57C00" d="M81.4 75.5l-19.8-37.8-14.8 28.2-21.2-15.5-12.8 79.1L81.4 75.5z"/>
      <path fill="#FFCA28" d="M64 125.7l61.6-34.6-18.4-93.5c-.5-2.6-3.7-3.6-5.6-1.8L64 125.7z"/>
    </svg>
  );
}

export function PostmanIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>Postman</title>
      <circle cx="64" cy="64" r="60" fill="#FF6C37"/>
      <path fill="#FFF" d="M84.2 46.2l-38.3 12-5.7 18.2 18.2-5.7 38.3-12-12.5-12.5zm-22.3 22.3l-7.7 2.4 2.4-7.7 5.3 5.3z"/>
    </svg>
  );
}

export function VscodeIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>Visual Studio Code</title>
      <path fill="#0065A9" d="M96.7 11.5L71.3 35.8 45.9 15.6l-13.8 6.9 26.6 23.4L32.1 69.3l13.8 6.9 25.4-20.2 25.4 24.3 19.3-9.2V20.7l-19.3-9.2z"/>
      <path fill="#007ACC" d="M96.7 11.5L32.1 69.3l13.8 6.9 50.8-40.4v-24.3z"/>
      <path fill="#1F9CF0" d="M96.7 116.5L32.1 58.7l13.8-6.9 50.8 40.4v24.3z"/>
      <path fill="#0065A9" d="M116 20.7l-19.3 15.1v56.4L116 107.3c2.4-1.2 4-3.7 4-6.5V27.2c0-2.8-1.6-5.3-4-6.5z"/>
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>Git</title>
      <path fill="#F05032" d="M124.7 57.3L70.7 3.3c-4.4-4.4-11.6-4.4-16 0L42.5 15.5l18.4 18.4c4.3-1.4 9.3-.5 12.8 3 3.5 3.5 4.4 8.5 3 12.8l17.7 17.7c4.3-1.4 9.3-.5 12.8 3 4.9 4.9 4.9 12.8 0 17.7-4.9 4.9-12.8 4.9-17.7 0-3.7-3.7-4.5-9.1-2.5-13.6L73.1 58.6v33.1c1.3.6 2.5 1.5 3.5 2.5 4.9 4.9 4.9 12.8 0 17.7-4.9 4.9-12.8 4.9-17.7 0-4.9-4.9-4.9-12.8 0-17.7 1.4-1.4 3-2.3 4.8-2.8V57.6c-1.8-.5-3.4-1.4-4.8-2.8-3.7-3.7-4.5-9.1-2.5-13.6L38.2 23.1 3.3 58c-4.4 4.4-4.4 11.6 0 16l54 54c4.4 4.4 11.6 4.4 16 0l51.4-51.4c4.4-4.4 4.4-11.5 0-15.9z"/>
    </svg>
  );
}

export function IntellijIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>IntelliJ IDEA</title>
      <rect width="128" height="128" rx="24" fill="#000"/>
      <path fill="url(#ij-grad)" d="M18 18h92v92H18z"/>
      <path fill="#FFF" d="M30 100h24v8H30zm0-72h12v48H30zm20 18h12v30H50z"/>
      <defs>
        <linearGradient id="ij-grad" x1="18" y1="18" x2="110" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE315D"/>
          <stop offset=".5" stopColor="#CB39C2"/>
          <stop offset="1" stopColor="#087CFA"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HtmlIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>HTML5</title>
      <path fill="#E44D26" d="M19.1 114.7L9.8 10.3h108.4l-9.3 104.4-44.9 12.4-44.9-12.4z"/>
      <path fill="#F16529" d="M64 118.8l37.2-10.3 7.8-88.1H64v98.4z"/>
      <path fill="#EBEBEB" d="M64 54.4H47.4l-1.1-12.9H64V28.6H32.4l3.5 38.7H64V54.4zm0 35.7l-.2.1-16.1-4.3-1-11.6H33.8l2 23.1 28.2 7.8V90.1z"/>
      <path fill="#FFF" d="M64 54.4h16.6l-1.6 17.5-15 4V89l27.1-7.5 3.3-37H64v9.9zm0-25.8v12.9h32.7l1.1-12.9H64z"/>
    </svg>
  );
}

export function CssIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <title>CSS3</title>
      <path fill="#1572B6" d="M19.1 114.7L9.8 10.3h108.4l-9.3 104.4-44.9 12.4-44.9-12.4z"/>
      <path fill="#33A9DC" d="M64 118.8l37.2-10.3 7.8-88.1H64v98.4z"/>
      <path fill="#EBEBEB" d="M64 54.4H47.4l-1.1-12.9H64V28.6H32.4l3.5 38.7H64V54.4zm0 35.7l-.2.1-16.1-4.3-1-11.6H33.8l2 23.1 28.2 7.8V90.1z"/>
      <path fill="#FFF" d="M64 54.4h16.6l-1.6 17.5-15 4V89l27.1-7.5 3.3-37H64v9.9zm0-25.8v12.9h32.7l1.1-12.9H64z"/>
    </svg>
  );
}

