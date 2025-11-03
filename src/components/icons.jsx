const createIcon = (path, viewBox = '0 0 24 24') => ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    {path}
  </svg>
);

export const EnvelopeSimple = createIcon(
  <path
    d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />
);

export const GithubLogo = createIcon(
  <path
    d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.26-4.55-1.11-4.55-4.96 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03a9.57 9.57 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.56 1.4.21 2.44.11 2.7.64.7 1.03 1.6 1.03 2.7 0 3.86-2.34 4.7-4.57 4.96.36.31.69.92.69 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
    fill="currentColor"
  />
);

export const LinkedinLogo = createIcon(
  <path
    d="M5.4 8.5H8V18H5.4zM6.7 5.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm3.8 3h2.4v1.3h.04c.34-.64 1.18-1.32 2.43-1.32C17.7 8.5 19 9.87 19 12.3V18h-2.6v-5c0-1.2-.42-2-1.48-2-.81 0-1.29.55-1.5 1.08-.08.2-.1.47-.1.74V18h-2.6Z"
    fill="currentColor"
  />
);

export const MapPin = createIcon(
  <path
    d="M12 2.75a6 6 0 0 0-6 6c0 4.5 6 12.5 6 12.5s6-8 6-12.5a6 6 0 0 0-6-6Zm0 8.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />
);

export const Moon = createIcon(
  <path
    d="M12.5 3a7.5 7.5 0 0 0 0 15 7.5 7.5 0 0 0 6.6-3.9 6 6 0 1 1-6.6-11.1Z"
    stroke="currentColor"
    strokeWidth="1.5"
  />
);

export const Sun = createIcon(
  <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" fill="none" />
    <path d="M12 4V2M12 22v-2M4 12H2m20 0h-2M5.6 5.6 4.2 4.2m15.6 15.6-1.4-1.4m0-12.8 1.4-1.4M4.2 19.8l1.4-1.4" />
  </g>
);

export const DownloadSimple = createIcon(
  <path
    d="M12 3.5v10m0 0 3.5-3.5M12 13.5 8.5 10M5 16v2.5h14V16"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const Briefcase = createIcon(
  <path
    d="M4.75 7h14.5A1.75 1.75 0 0 1 21 8.75v7.5A1.75 1.75 0 0 1 19.25 18H4.75A1.75 1.75 0 0 1 3 16.25v-7.5A1.75 1.75 0 0 1 4.75 7Zm3.5-3h7.5A1.25 1.25 0 0 1 17 5.25V7H7V5.25A1.25 1.25 0 0 1 8.25 4Z"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />
);

export const GlobeSimple = createIcon(
  <path
    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c-2.5 0-4.5-4-4.5-9S9.5 3 12 3s4.5 4 4.5 9-2 9-4.5 9Zm-9-9h18"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const GraduationCap = createIcon(
  <path
    d="m3 9 9-4 9 4-9 4-9-4Zm3 3.2V14c0 2 2.7 3 6 3s6-1 6-3v-1.8"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
    strokeLinecap="round"
  />
);

export const CalendarBlank = createIcon(
  <path
    d="M6.75 5H5.5A1.5 1.5 0 0 0 4 6.5v11A1.5 1.5 0 0 0 5.5 19h13a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 18.5 5h-1.25V3.5m-10.5 0V5m0 0h10.5"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const Buildings = createIcon(
  <path
    d="M5 20V5.5A1.5 1.5 0 0 1 6.5 4h5A1.5 1.5 0 0 1 13 5.5V20m0-10h6a1 1 0 0 1 1 1V20M5 20h15M7.5 8h3m-3 3h3m4 0h3"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const Sparkle = createIcon(
  <path
    d="M12 3.5 13.2 8l4.3 1.2L13.2 10.5 12 15l-1.2-4.5-4.3-1.3L10.8 8 12 3.5Zm7 4.5.6 2.1L21 10.7l-1.4.5L19 13l-.6-1.8-1.4-.5 1.4-.6L19 8Zm-14 0 .6 2.1L7 10.7l-1.4.5L4 13l-.6-1.8L2 10.7l1.4-.6L3 8Z"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
  />
);

export const Certificate = createIcon(
  <path
    d="M12 3a6 6 0 0 0-3 11.2V21l3-1.5 3 1.5v-6.8A6 6 0 0 0 12 3Z"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />
);

export const Phone = createIcon(
  <path
    d="M15.5 21h-7a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8.5 3h7A1.5 1.5 0 0 1 17 4.5v15A1.5 1.5 0 0 1 15.5 21Zm-7-4h7"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const ArrowUp = createIcon(
  <path
    d="M12 20V5m0 0 5 5m-5-5-5 5"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);
