var options = {
  
  bottom: '12px', // default: '32px'
  right: '64px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  position : 'fixed',
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: 'blue', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🔆', // default: ''
  autoMatchOsTheme: true, // default: true
  
 
  
} 
const darkmode = new Darkmode(options);
darkmode.showWidget();
