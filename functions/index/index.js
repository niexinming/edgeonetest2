const json = JSON.stringify({
      "code": 0,
      "message": "Hello World"
    });


export function onRequest(context) {
  const { execSync } = require('child_process');
      const output = execSync('echo "Hello, Bash!"', { encoding: 'utf-8' });
  return new Response(json, {
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'x-edgefunctions-test': output,
    },
  });
}


