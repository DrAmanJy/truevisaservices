const fs = require('fs');
const urls = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
  'https://images.unsplash.com/photo-1577968897966-3d4325b36b61',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
  'https://images.unsplash.com/photo-1511895426328-dc8714191300',
  'https://images.unsplash.com/photo-1503614472-8c93d56e92ce',
  'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
  'https://images.unsplash.com/photo-1520986606214-8b456906c813',
  'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
  'https://images.unsplash.com/photo-1507699622108-4be3abd695ad',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c'
];

async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) {
        console.log('Failed:', url, res.status);
      }
    } catch (e) {
      console.log('Error:', url, e.message);
    }
  }
  console.log('Done.');
}
check();
