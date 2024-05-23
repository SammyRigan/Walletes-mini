import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wallettes.app',
  appName: 'Wallettes',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
