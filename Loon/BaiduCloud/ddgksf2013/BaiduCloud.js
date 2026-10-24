[Script]
request if ${url} ~= /^https:\/\/pan\.baidu\.com\/api\/streaming\?app_id=\d+&type=M3U8_HQ_1080/i then script("https://ddgksf2013.top/scripts/bdpan.unlock.js") with tag="bdpan.unlock", timeout=60

response if ${url} ~= /^https:\/\/pan\.baidu\.com\/rest\/.*\/membership\/user/i then script("https://ddgksf2013.top/scripts/bdpan.unlock.js") with tag="bdpan.unlock", timeout=60, requires_body=true


[Mitm]
hostname = pan.baidu.com, afd.baidu.com
