
      let global = globalThis;
      let routeParams = {};
      let pagesFunctionResponse = null;
      async function handleRequest(context){
        const request = context.request;
        const urlInfo = new URL(request.url);

        if (urlInfo.pathname !== '/' && urlInfo.pathname.endsWith('/')) {
          urlInfo.pathname = urlInfo.pathname.slice(0, -1);
        }

        let matchedFunc = false;
        
          if('/helloworld' === urlInfo.pathname) {
            matchedFunc = true;
              (() => {
  // functions/helloworld/index.js
  var json = JSON.stringify({
    "code": 0,
    "message": "Hello World"
  });
  function onRequest(context) {
    console.log(globalThis);
    return new Response(json, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "x-edgefunctions-test": "Welcome to use Pages Functions."
      }
    });
  }

        pagesFunctionResponse = onRequest;
      })();
          }
        
          if('/index' === urlInfo.pathname) {
            matchedFunc = true;
              (() => {
  // functions/index/index.js
  var json = JSON.stringify({
    "code": 0,
    "message": "Hello World"
  });
  function onRequest(context) {
    return new Response(json, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "x-edgefunctions-test": "Welcome to use Pages Functions."
      }
    });
  }

        pagesFunctionResponse = onRequest;
      })();
          }
        

        const params = {};
        if (routeParams.id) {
          const value = urlInfo.pathname.replace(routeParams.left, '');
          const splitedValue = value.split('/');
          if (splitedValue.length === 1) {
            params[routeParams.id] = splitedValue[0];
          } else {
            params[routeParams.id] = splitedValue;
          }
        }
        if(!matchedFunc){
          pagesFunctionResponse = function() {
            return new Response(null, {
              status: 404,
              headers: {
                "content-type": "text/html; charset=UTF-8",
                "x-edgefunctions-test": "Welcome to use Pages Functions.",
              },
            });
          }
        }
        return pagesFunctionResponse({request, params, env: {"TERM_PROGRAM":"Apple_Terminal","SHELL":"/bin/zsh","TERM":"xterm-256color","TMPDIR":"/var/folders/_s/q7t9gyk17xgc7sycfr1y9hmm0000gn/T/","TERM_PROGRAM_VERSION":"453","TERM_SESSION_ID":"DAE37E17-16E1-4217-8728-0BE045D26E68","USER":"h11ps","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.pvT7CWVJuJ/Listeners","PATH":"/Users/h11ps/.nvm/versions/node/v20.18.0/bin:/Users/h11ps/tencent_work/jdk/jdk1.8.0_422.jdk/Contents/Home:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/opt/homebrew/bin:/usr/local/go/bin:/Users/h11ps/.cargo/bin","__CFBundleIdentifier":"com.apple.Terminal","PWD":"/Users/h11ps/tencent_work/项目/EdgeOne/gitclone/edgeonetest2","XPC_FLAGS":"0x0","XPC_SERVICE_NAME":"0","SHLVL":"1","HOME":"/Users/h11ps","LOGNAME":"h11ps","OLDPWD":"/Users/h11ps/tencent_work/项目/EdgeOne/gitclone/edgeonetest2/functions","JAVA_8_HOME":"/Users/h11ps/tencent_work/jdk/jdk1.8.0_422.jdk/Contents/Home","JAVA_11_HOME":"/Users/h11ps/tencent_work/jdk/jdk-11.0.24.jdk/Contents/Home","JAVA_HOME":"/Users/h11ps/tencent_work/jdk/jdk1.8.0_422.jdk/Contents/Home","GOROOT":"/usr/local/go","GOPATH":"/Users/h11ps/go","GOBIN":"/usr/local/go/bin","RUSTPATH":"/Users/h11ps/.cargo/bin","NVM_DIR":"/Users/h11ps/.nvm","NVM_CD_FLAGS":"-q","NVM_BIN":"/Users/h11ps/.nvm/versions/node/v20.18.0/bin","NVM_INC":"/Users/h11ps/.nvm/versions/node/v20.18.0/include/node","LANG":"zh_CN.UTF-8","_":"/Users/h11ps/.nvm/versions/node/v20.18.0/bin/edgeone","__CF_USER_TEXT_ENCODING":"0x1F5:0x19:0x34","AppId":"1326687412"} });
      }addEventListener('fetch',event=>{return event.respondWith(handleRequest({request:event.request,params: {}, env: {"TERM_PROGRAM":"Apple_Terminal","SHELL":"/bin/zsh","TERM":"xterm-256color","TMPDIR":"/var/folders/_s/q7t9gyk17xgc7sycfr1y9hmm0000gn/T/","TERM_PROGRAM_VERSION":"453","TERM_SESSION_ID":"DAE37E17-16E1-4217-8728-0BE045D26E68","USER":"h11ps","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.pvT7CWVJuJ/Listeners","PATH":"/Users/h11ps/.nvm/versions/node/v20.18.0/bin:/Users/h11ps/tencent_work/jdk/jdk1.8.0_422.jdk/Contents/Home:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/opt/homebrew/bin:/usr/local/go/bin:/Users/h11ps/.cargo/bin","__CFBundleIdentifier":"com.apple.Terminal","PWD":"/Users/h11ps/tencent_work/项目/EdgeOne/gitclone/edgeonetest2","XPC_FLAGS":"0x0","XPC_SERVICE_NAME":"0","SHLVL":"1","HOME":"/Users/h11ps","LOGNAME":"h11ps","OLDPWD":"/Users/h11ps/tencent_work/项目/EdgeOne/gitclone/edgeonetest2/functions","JAVA_8_HOME":"/Users/h11ps/tencent_work/jdk/jdk1.8.0_422.jdk/Contents/Home","JAVA_11_HOME":"/Users/h11ps/tencent_work/jdk/jdk-11.0.24.jdk/Contents/Home","JAVA_HOME":"/Users/h11ps/tencent_work/jdk/jdk1.8.0_422.jdk/Contents/Home","GOROOT":"/usr/local/go","GOPATH":"/Users/h11ps/go","GOBIN":"/usr/local/go/bin","RUSTPATH":"/Users/h11ps/.cargo/bin","NVM_DIR":"/Users/h11ps/.nvm","NVM_CD_FLAGS":"-q","NVM_BIN":"/Users/h11ps/.nvm/versions/node/v20.18.0/bin","NVM_INC":"/Users/h11ps/.nvm/versions/node/v20.18.0/include/node","LANG":"zh_CN.UTF-8","_":"/Users/h11ps/.nvm/versions/node/v20.18.0/bin/edgeone","__CF_USER_TEXT_ENCODING":"0x1F5:0x19:0x34","AppId":"1326687412"} }))});