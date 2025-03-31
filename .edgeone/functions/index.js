
      let global = globalThis;

      class MessageChannel {
        constructor() {
          this.port1 = new MessagePort();
          this.port2 = new MessagePort();
        }
      }
      class MessagePort {
        constructor() {
          this.onmessage = null;
        }
        postMessage(data) {
          if (this.onmessage) {
            setTimeout(() => this.onmessage({ data }), 0);
          }
        }
      }
      global.MessageChannel = MessageChannel;

      let routeParams = {};
      let pagesFunctionResponse = null;
      async function handleRequest(context){
        const request = context.request;
        const urlInfo = new URL(request.url);

        if (urlInfo.pathname !== '/' && urlInfo.pathname.endsWith('/')) {
          urlInfo.pathname = urlInfo.pathname.slice(0, -1);
        }

        let matchedFunc = false;
        
          if('/geo' === urlInfo.pathname) {
            matchedFunc = true;
              (() => {
  // functions/geo/index.js
  function onRequest({ request }) {
    const geo = request.eo.geo;
    const res = JSON.stringify({
      geo
    });
    return new Response(res, {
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }

        pagesFunctionResponse = onRequest;
      })();
          }
        
          if('/helloworld' === urlInfo.pathname) {
            matchedFunc = true;
              (() => {
  // functions/helloworld/index.js
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var node_exports = {};
  __export(node_exports, {
    analyzeMetafile: () => analyzeMetafile,
    analyzeMetafileSync: () => analyzeMetafileSync,
    build: () => build,
    buildSync: () => buildSync,
    context: () => context,
    default: () => node_default,
    formatMessages: () => formatMessages,
    formatMessagesSync: () => formatMessagesSync,
    initialize: () => initialize,
    stop: () => stop,
    transform: () => transform,
    transformSync: () => transformSync,
    version: () => version
  });
  function onRequest({ request }) {
    console.log(node_exports.context.env);
    return new Response(JSON.stringify(node_exports.context.env), {
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
        return pagesFunctionResponse({request, params, env: {"TERM_PROGRAM":"Apple_Terminal","SHELL":"/bin/zsh","TERM":"xterm-256color","TMPDIR":"/var/folders/rr/p_59j2sx6nq77nfmm42sk0r00000gn/T/","TERM_PROGRAM_VERSION":"455","TERM_SESSION_ID":"C9FB0DD0-CABC-43A1-A2C7-BD3C12B3E779","USER":"xinmingnie","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.A6SdxrI5Oj/Listeners","PATH":"/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/Library/Frameworks/Python.framework/Versions/3.13/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/usr/local/go/bin","LaunchInstanceID":"BE3B374D-2D46-4564-A85E-7DB795886757","__CFBundleIdentifier":"com.apple.Terminal","PWD":"/Users/xinmingnie/tencent_work/项目/项目_old/EdgeOne/edgeonetest2","XPC_FLAGS":"0x0","XPC_SERVICE_NAME":"0","SHLVL":"1","HOME":"/Users/xinmingnie","LOGNAME":"xinmingnie","SECURITYSESSIONID":"186ad","OLDPWD":"/Users/xinmingnie/tencent_work/项目/项目_old/EdgeOne/edgeonetest2/functions","HOMEBREW_PREFIX":"/opt/homebrew","HOMEBREW_CELLAR":"/opt/homebrew/Cellar","HOMEBREW_REPOSITORY":"/opt/homebrew","INFOPATH":"/opt/homebrew/share/info:","LANG":"zh_CN.UTF-8","_":"/usr/local/bin/edgeone","__CF_USER_TEXT_ENCODING":"0x1F5:0x19:0x34","AppId":"1326687412"} });
      }addEventListener('fetch',event=>{return event.respondWith(handleRequest({request:event.request,params: {}, env: {"TERM_PROGRAM":"Apple_Terminal","SHELL":"/bin/zsh","TERM":"xterm-256color","TMPDIR":"/var/folders/rr/p_59j2sx6nq77nfmm42sk0r00000gn/T/","TERM_PROGRAM_VERSION":"455","TERM_SESSION_ID":"C9FB0DD0-CABC-43A1-A2C7-BD3C12B3E779","USER":"xinmingnie","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.A6SdxrI5Oj/Listeners","PATH":"/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/Library/Frameworks/Python.framework/Versions/3.13/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/usr/local/go/bin","LaunchInstanceID":"BE3B374D-2D46-4564-A85E-7DB795886757","__CFBundleIdentifier":"com.apple.Terminal","PWD":"/Users/xinmingnie/tencent_work/项目/项目_old/EdgeOne/edgeonetest2","XPC_FLAGS":"0x0","XPC_SERVICE_NAME":"0","SHLVL":"1","HOME":"/Users/xinmingnie","LOGNAME":"xinmingnie","SECURITYSESSIONID":"186ad","OLDPWD":"/Users/xinmingnie/tencent_work/项目/项目_old/EdgeOne/edgeonetest2/functions","HOMEBREW_PREFIX":"/opt/homebrew","HOMEBREW_CELLAR":"/opt/homebrew/Cellar","HOMEBREW_REPOSITORY":"/opt/homebrew","INFOPATH":"/opt/homebrew/share/info:","LANG":"zh_CN.UTF-8","_":"/usr/local/bin/edgeone","__CF_USER_TEXT_ENCODING":"0x1F5:0x19:0x34","AppId":"1326687412"} }))});