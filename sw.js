/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/07/Linux常用命令/index.html","218f1885d1bc2b8ec42188450da31898"],["/2023/12/07/Redis-Configurate/index.html","24d77d160c74ae77a6e5af41a26eee57"],["/2023/12/07/Redis-Err/index.html","6e3520dd64c0d6fa5f683123823a2431"],["/2023/12/07/Redis/index.html","5062ef27d81d8302d28deaa5cb272e05"],["/2023/12/07/Spring-All/index.html","d8ec44cde42891985ba3ead653fe9bc0"],["/2023/12/07/shell编程/index.html","f1e50b39a29e8b659b079cdfeb75417f"],["/2023/12/14/design-pattern/index.html","10b4caaec10a8b2c4834b43f65337018"],["/2023/12/14/mybatis-All/index.html","289fa77a06543bb867a3d9e3f1409bc2"],["/about/index.html","d14aeca27c61030de706b8b6d8ae090a"],["/archives/index.html","a358da6bc3f4e2dff1093269f63e1b75"],["/categories/Linux/index.html","c2cf9cdffa75fb3493d0116154581f46"],["/categories/Redis/index.html","e1eecbb883ef9b1af0297a55bc8886a2"],["/categories/index.html","8544962ad914556d7934f9e57d07b747"],["/categories/设计模式/index.html","cdd23e820031fd206bace5ef09574e32"],["/categories/面试题/index.html","8793706bcbb713c39d086156c565ff28"],["/css/main.css","28e269abc4ccdc4e9d5f5d6b9fa62c4e"],["/images/1.jpg","0d483708e2ea505283eaf378fff033b3"],["/images/2.jpg","823b476dccc843dacc95ab9da73be4da"],["/images/5.jpg","be8f226e4944019e70f68f601e973387"],["/images/Java面试题/Snipaste_2023-12-12_10-24-44.png","81f24136158db140d180beab6e91d7c7"],["/images/Java面试题/Snipaste_2023-12-12_10-33-57.png","aae7af5390e92fc2c8eeb1a783b98ecf"],["/images/Java面试题/Snipaste_2023-12-14_09-34-41.png","0938a9f97616fe13cb3ad04cfa417586"],["/images/Java面试题/Snipaste_2023-12-14_09-48-47.png","6d066ec27ee2b574a4ffd9896f532734"],["/images/Java面试题/Snipaste_2023-12-14_09-53-46.png","be00a582672485b53166e8f0eb89843c"],["/images/Java面试题/Snipaste_2023-12-14_10-17-57.png","9c3a54e9f2e38558b68d69bdf4993606"],["/images/Java面试题/Snipaste_2023-12-14_10-20-14.png","fbbe37aeb8623414f3973b628c50a548"],["/images/Java面试题/Snipaste_2023-12-15_10-53-39.png","527d5caa9947eda1bafbec6554bc2b4a"],["/images/Java面试题/Snipaste_2023-12-15_11-12-07.png","a1832426a1fd75d4e258d59a25694e3e"],["/images/linuxImg/control.png","1c3cf320e1426fb72ffc330c522b4351"],["/images/linuxImg/tar.png","caf345fc18dd67b6abcf0fd680a6f0c7"],["/images/loading.gif","446100f374e93811b2ddf58ecd807d9a"],["/images/myAvatar.jpg","6b4eccbab9342318133e54ac48c7c7d4"],["/images/myBackground.jpg","4c13cd416bc2ee37aa6525bfc39216de"],["/images/shellImg/if分支.png","e96f91d9bc7f9a497238fbeade2b9c59"],["/index.html","b7af57e532892bd79b7a1c5ae14f2e82"],["/js/background.min.js","0bc54aa2b470394d8d5e09528d0c9b17"],["/js/fireworks.min.js","328b0d8606d8a4dcd30407592dd3dd1f"],["/js/lib/crypto.js","1e7b9ac1b589a495dcb506320e9f9e8e"],["/js/lib/highlight.js","72a844f86c08806457e49ff388002625"],["/js/lib/home.js","819c98c5fc2e2f4aa8bf085985e46d4d"],["/js/lib/math.js","6a4a751e46cdf4c4b9f0ae6757b4e2be"],["/js/lib/preview.js","5190026484ef1afebd2ea8ed506f0a57"],["/js/lib/search.js","4ba71ec6e05a706fa008be1c2b8bc840"],["/js/main.js","0d812aa3797a397d3ab83dd30a7db7e3"],["/js/meteor.js","256f279695a47a990dc1c18e832a8167"],["/js/myPet.js","6454cf391f976805d098e1855155b2b5"],["/sw-register.js","592922587d6621a23a869c5710df1f46"],["/tags/JavaEE/index.html","8f9ec4d02ed2a653a132856e14388cf5"],["/tags/Linux常用命令/index.html","70b41f282bd6638b734b7da0341cc887"],["/tags/Shell/index.html","d23d6ed2a73ab4358831aefa424e109c"],["/tags/index.html","8c2acf357db2ba9af934d8317f3f0a2b"],["/tags/mybatis/index.html","e525080a7f7a402e66391d06db1961a4"],["/tags/中间件/index.html","b5a7798ca88bedd7758af912a8e76a4c"],["/tags/常用配置类/index.html","ff25c69f78800eb86fce9e327e8f3f8d"],["/tags/常见Bug/index.html","e040a40ad3a5757c71ca647083401235"]];
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
