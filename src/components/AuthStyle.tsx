import { createTheme } from '@aws-amplify/ui-react';

export const customTheme = createTheme({
  name: 'custom',
  tokens: {
   
    components: {
      authenticator: {
        router: {
         // boxShadow: `0 0 16px red`,
          borderWidth: '0',
        },
        form: {
         // padding: `100px`,
        },
      },
      button: {
        primary: {
         // backgroundColor: 'red',
        },
      },
    },
  },
});