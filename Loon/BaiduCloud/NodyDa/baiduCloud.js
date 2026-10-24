[Script]
#百度网盘
response if ${url} ~= /https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user/i then script("https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js") with tag="BaiduCloud", timeout=60, requires_body=true
response if ${url} ~= /https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user/i then script("https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js") with tag="BaiduCloud", requires_body=true


[Mitm]
hostname = pan.baidu.com
