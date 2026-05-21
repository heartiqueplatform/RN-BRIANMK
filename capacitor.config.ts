import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nursebrianmk.com',
  appName: 'NURSE BRIAN MK',
  webDir: 'dist/client',
  server: {
    // This is the Magic Link!
    url: 'https://rn-brianmk.vercel.app/',
    cleartext: true
  }
};

export default config;