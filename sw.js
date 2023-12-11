/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/07/Linux常用命令/index.html","e56e5e08a74407ecb7d2bdb531da845d"],["/2023/12/07/Web开发面试题/index.html","3dc874dae51e88a75e4b897397158014"],["/2023/12/07/shell编程/index.html","38d59c2bb32bb5cb5751abb464c953fe"],["/2023/12/07/spring6/index.html","0ecd41d3a19282263b59202de6bfe679"],["/about/index.html","0330407ae94e23438206ac55513c750d"],["/archives/index.html","d78bbce9c9229bc6cbaf437f16a65451"],["/categories/Java/index.html","057611379417df0116b0f36e9b3e4a78"],["/categories/Linux/index.html","b206cb2de39af666e5b995952feba57a"],["/categories/index.html","a06d1f89a517aaaffdea34cecd345d04"],["/categories/面试题/index.html","5748f836c6f6ebf6a6f830ae8526a852"],["/css/main.css","c132bd2ccb7fbd71241573237e93968a"],["/images/1.jpg","0d483708e2ea505283eaf378fff033b3"],["/images/2.jpg","823b476dccc843dacc95ab9da73be4da"],["/images/5.jpg","be8f226e4944019e70f68f601e973387"],["/images/linuxImg/control.png","1c3cf320e1426fb72ffc330c522b4351"],["/images/linuxImg/tar.png","caf345fc18dd67b6abcf0fd680a6f0c7"],["/images/loading.gif","446100f374e93811b2ddf58ecd807d9a"],["/images/myAvatar.jpg","6b4eccbab9342318133e54ac48c7c7d4"],["/images/myBackground.jpg","4c13cd416bc2ee37aa6525bfc39216de"],["/images/shellImg/if分支.png","e96f91d9bc7f9a497238fbeade2b9c59"],["/images/spring6/2097896352.png","3a83f5378bce1ad1bf0aaccaab345723"],["/images/spring6/image-20221031155315111.png","5d0a5e54c1fc9e59592c9fc5c6110c1b"],["/images/spring6/image-20221031155411978.png","b19b1e3b95c0b1302b97ee3d371df873"],["/images/spring6/image-20221031164828150.png","4f669236ce285f8c6150e2ee5429411b"],["/images/spring6/image-20221031165108003.png","7050a75053ceca4f5e2cd335a7a818f3"],["/images/spring6/image-20221031170253382.png","b8e955e63fd6f06e740e6651113d3a98"],["/images/spring6/image-20221031170725352.png","216f87dee1ceab5326292fcd79741fe7"],["/images/spring6/image-20221031170930747.png","3da7eb91e01c217b673159e32168bf02"],["/images/spring6/image-20221031172354535.png","6ff2da3fffc49b5297f2671cb534da18"],["/images/spring6/image-20221031181430720.png","1315bf69d3ba1046a5c59c12510305a4"],["/images/spring6/image-20221031214305224.png","d359e572c42ed7c50e30c80fd182af02"],["/images/spring6/image-20221031214547501.png","95892036e6e0fcc8ae8bf56c5a2069a1"],["/images/spring6/image-20221101153556681.png","41eab3c4419f2c0045e9db5fcad72f1f"],["/images/spring6/image-20221102103318844.png","f37658da6f4bb940cb26b596ba223fa2"],["/images/spring6/image-20221102103628391.png","c70ff5011e0e7e6610f456ddfe9b7b80"],["/images/spring6/image-20221102103931372.png","76c999b1e71dd55bbe1df562d56177b3"],["/images/spring6/image-20221102155523983.png","fcc1da5b5a35bcb8e20f3b3f4b554239"],["/images/spring6/image-20221201102513199.png","34ec129c66a99a694a9f59412884d8a5"],["/images/spring6/image-20221201102642526.png","987c6d57f3b75233a3fc439bc1dab293"],["/images/spring6/image-20221201103138194.png","90a8e90ec2678efb5cf39daea7611b07"],["/images/spring6/image-20221201103842379.png","67cf6ff802df40e95bd97013b32c5cbc"],["/images/spring6/image-20221201103914530.png","6d41acc4b87d29499cf672e7425d24f9"],["/images/spring6/image-20221201104003391.png","19d129f5569c472e4dc232d182dd10ae"],["/images/spring6/image-20221201104123322.png","c803ad936ef7fd4a6e42ab4dd109b799"],["/images/spring6/image-20221201104749612.png","58c9c98434dbdfc3b402a6410a4eb1ea"],["/images/spring6/image-20221201104827752.png","0a6f0b358ab884244dd842bb99997b14"],["/images/spring6/image-20221201104913541.png","b5e1dd0812a43962968f0d10c57927b1"],["/images/spring6/image-20221201105001197.png","bdc3a4f7aa0ce3c3d37b4bb5fdd0caaf"],["/images/spring6/image-20221201105416558.png","3693effabe39bab7b7f4bc972059f256"],["/images/spring6/image-20221201173958165.png","7d904d09a9738d5127b592de7d7a4d85"],["/images/spring6/image-20221205201741893.png","9a5d08e69ab84edf8081290b81ec4c83"],["/images/spring6/image-20221205202000198.png","4dc68c73e6ca5178fbc5c81aae05f28a"],["/images/spring6/image-20221205202117383.png","0276129166c86a5afa2b45718809433a"],["/images/spring6/image-20221205202154225.png","57ee4a4ea9b80db7f905ea748035ccab"],["/images/spring6/image-20221206184117531.png","2e3579e8c0563351384f90e28fca0d2f"],["/images/spring6/image-20221206220207266.png","80d7970a38aaf5ff3a6fc449cb0a965f"],["/images/spring6/image-20221206221002615.png","92f080368cf3f85945d62500a979d4b8"],["/images/spring6/image-20221206231535991.png","ddd11959693f8220ec0006de24eff08d"],["/images/spring6/image-20221206232920494.png","80a0bb2cce4eb25216e6d035a09630a3"],["/images/spring6/image-20221207102315185.png","fa03aacea1a88b395270563609616f0a"],["/images/spring6/image-20221207103020854.png","3803d1195b9a1d69c62f06efd478f020"],["/images/spring6/image-20221207110539954.png","d920abc772033c9d3ba82e6cff612f28"],["/images/spring6/image-20221207110947997.png","535de2e7a564eda41e94876bbb08cc99"],["/images/spring6/image-20221207111012582.png","178d9efeae99ad769acfbc0d001e59ea"],["/images/spring6/image-20221207111105569.png","21cf907a44da10587d8ff3f00949f00d"],["/images/spring6/image-20221207111206279.png","bbb8ce1227d69faa5adb556fbead4ce0"],["/images/spring6/image-20221207111420056.png","518cd6d55cefbbfed4eb48a75af822a8"],["/images/spring6/image-20221207111509837.png","e0ddebf79ba530eb8c8a6fd6dcb0a8d4"],["/images/spring6/image-20221207111609878.png","b8e71ab6dbc4dc275b2a63f5ef0839b1"],["/images/spring6/image-20221207111644950.png","2e6aae0674089191450bd89db7884de0"],["/images/spring6/image-20221207111731150.png","b7766038e02d57520218ca94287ce3f8"],["/images/spring6/image-20221207111947283.png","e861cb46a2257b3b41a05bda4bf6f0ce"],["/images/spring6/image-20221207112009852.png","e713c3e0ed786669f9b2a93ef397b049"],["/images/spring6/image-20221207113544080.png","5565f2605b43c316b4fdf3b22505bd8f"],["/images/spring6/image-20221207122416669.png","a5e112fdd034ca5ddcbec0e305fb3a7f"],["/images/spring6/image-20221207122500801.png","4756512d270c7e315936cf6802191c73"],["/images/spring6/image-20221207122802758.png","1bd6df2f623df23eb4c6c059ac54c9d3"],["/images/spring6/image-20221207124839565.png","cc6335a866fb0ad126469e7e4a756206"],["/images/spring6/image-20221207140024056.png","eabde130e552982c2add259e7358e226"],["/images/spring6/image-20221207142746771.png","aab1a2c362255859e8153ff443a4537a"],["/images/spring6/image-20221207152841304.png","b883523ee0a95e1c649aa61584b143e0"],["/images/spring6/image-20221207153018092.png","c14f9a1de7adb96c38df4fc000dd3fb3"],["/images/spring6/image-20221207153642253.png","93dc28df1ae559b5d0a3415a61de04fc"],["/images/spring6/image-20221207153724340.png","a96db1effbd734af89c4a92249188083"],["/images/spring6/image-20221207153755732.png","1753b43280371bd21452096a05daa74b"],["/images/spring6/image-20221207153944132.png","c916a14d5010c0dd7cb40d312218dab9"],["/images/spring6/image-20221207155009832.png","0da3402f0f7227887d82df9bc5dc2830"],["/images/spring6/image-20221207155726572.png","2e6e82bac8d92844a0b09637d7a62ca2"],["/images/spring6/image-20221207155756512.png","317de9e359849a4824830afae735413b"],["/images/spring6/image-20221209105947105.png","84e3385687b974809cf9ce23ec9b836f"],["/images/spring6/image-20221209110043449.png","84e3385687b974809cf9ce23ec9b836f"],["/images/spring6/image-20221216132844066.png","db2e77fc7748bb4b2f4cc39b60839010"],["/images/spring6/image-20221216223135162.png","529d20e374ecd7ff44326b61108a3a3b"],["/images/spring6/image-20221217115515670.png","0e370d15e89647d4d82cdb7650c107ef"],["/images/spring6/image-20221218154728062.png","64392efc313e3e5dc9144823bcebea9b"],["/images/spring6/image-20221218154808754.png","25009348b23dca13478861b1ea2b9575"],["/images/spring6/image-20221218154841001.png","6a02160b512a426cb79dc705340919aa"],["/images/spring6/image-20221218154945878.png","ece18c163b3c03773cc43d727753f96a"],["/images/spring6/image-20221219112426052.png","360564fe46f7876300778424e5052796"],["/images/spring6/img005.png","f6680aef8577da2c38eb613ad9f64420"],["/images/spring6/img007.png","db397db91ae4c6f5b8a75227c6992499"],["/images/spring6/img010.png","f468fcf98c11830c270efb819d779db8"],["/images/spring6/img014.png","e70bf07962cb28f3216ac591fdfe94ca"],["/images/spring6/img015.png","f8e542195177bd90fe2176fb96d7214f"],["/images/spring6/img016.png","e76b3080abe14a1551de695af7d38986"],["/images/spring6/img017.png","74dd77467ede25acb24af8edb8c3845d"],["/images/spring6/img018.png","2fe524a234ae412846f9c9df102d75f9"],["/images/spring6/img019.png","9ad7afe58a8b76c9781a26695587f92f"],["/images/spring6/img020.png","ea6005625c5f1211b896e6c3e4905317"],["/images/spring6/img021.png","a0b70cb3bfbfae0941e052c2ba0d8461"],["/images/spring6/img022.png","5af189f707d2061648849ef3d5690a8d"],["/images/spring6/img023.png","84eb95b76687e88d6432e01f62afb2a9"],["/images/spring6/img024.png","cb7f2153dc67ae003309c613954b89ca"],["/images/spring6/img025.png","dde1a79a9478ebecb80cbb2904a23d36"],["/images/spring6/img026.png","b353bc56aea862b1aeca6959936c5783"],["/images/spring6/img027.png","bc58e5425529244e018692a2e5ece8fa"],["/index.html","e733b40f01fd3bc56ca2db5dca505844"],["/js/background.min.js","0bc54aa2b470394d8d5e09528d0c9b17"],["/js/fireworks.min.js","328b0d8606d8a4dcd30407592dd3dd1f"],["/js/lib/crypto.js","1e7b9ac1b589a495dcb506320e9f9e8e"],["/js/lib/highlight.js","72a844f86c08806457e49ff388002625"],["/js/lib/home.js","819c98c5fc2e2f4aa8bf085985e46d4d"],["/js/lib/math.js","6a4a751e46cdf4c4b9f0ae6757b4e2be"],["/js/lib/preview.js","5190026484ef1afebd2ea8ed506f0a57"],["/js/lib/search.js","4ba71ec6e05a706fa008be1c2b8bc840"],["/js/main.js","0d812aa3797a397d3ab83dd30a7db7e3"],["/js/meteor.js","256f279695a47a990dc1c18e832a8167"],["/js/myPet.js","6454cf391f976805d098e1855155b2b5"],["/sw-register.js","0dd7ab2eed85750dc9b1082c5675d7f7"],["/tags/Linux常用命令/index.html","e00ba1089fed3765dab5fb246194387f"],["/tags/Shell/index.html","e974a1a0286c61cbcb34f4a16d41ac4a"],["/tags/Spring/index.html","bab815eb737eb8c241740003f5e9e4e7"],["/tags/index.html","3fd0c87a216368c17df7201560f6af9b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
