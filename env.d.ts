declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_WHATSAPP_NUMBER: string;
    NEXT_PUBLIC_WHATSAPP_MESSAGE: string;
    NEXT_PUBLIC_FORMATTED_WHATSAPP_NUMBER: string;
    NEXT_PUBLIC_CONTACT_EMAIL: string;
    NEXT_PUBLIC_APPLICATION_URL: string;
    NODE_ENV: 'production' | 'development' | 'test'
  }
}
