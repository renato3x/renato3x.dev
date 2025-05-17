declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_WHATSAPP_NUMBER: string;
    NEXT_PUBLIC_WHATSAPP_MESSAGE: string;
    NEXT_PUBLIC_FORMATTED_WHATSAPP_NUMBER: string;
    NEXT_PUBLIC_CONTACT_EMAIL: string;
    NEXT_PUBLIC_APPLICATION_URL: string;
    NEXT_PUBLIC_MARQUEE_LENGTH: `${number}`;
    NODE_ENV: 'production' | 'development' | 'test'
  }
}
