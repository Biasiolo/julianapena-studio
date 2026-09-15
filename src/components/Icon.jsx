import React from 'react';
export default function Icon({ name = 'arrow', size = 22, ...props }) {
  const icons = {
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    diagonal: <path d="M6 18 18 6M6 6h12v12" />,
    leaf: <><path d="M6 18C3 7 9 4 21 3c0 12-6 18-15 15ZM3 21l12-12" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 2v6M17 2v6M3 11h18m-14 5 2 2 4-4" /></>,
    pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <path d="m8 3 2 5-3 2c2 4 3 5 7 7l2-3 5 2v4c0 1-1 2-2 2C9 21 3 15 2 5c0-1 1-2 2-2Z" />,
    whatsapp: <><path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.5-4.6A9 9 0 1 1 21 11.5Z" /><path d="m8 7 1.5 3-1 .8c.8 1.6 1.6 2.4 3.2 3.2l.8-1 3 1.5c-.5 2-2.1 2-3.8 1.2-2.9-1.3-4.4-2.8-5.7-5.7C6.2 8.3 6.2 7 8 7Z" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    bag: <><path d="M5 7h14l2 14H3L5 7Z" /><path d="M9 9V5a3 3 0 0 1 6 0v4" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{icons[name] || icons.arrow}</svg>;
}
