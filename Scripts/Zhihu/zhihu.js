[rewrite_local]
# > 知乎vip 盐选内容，
^https?:\/\/((api|app|www).zhihu.com\/|.*resolv\?host)(unlimited\/go\/my_card|people\/self|bazaar\/vip_tab|sku\/reversion_sku|.*zhihu).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/zhihu.js
^https?:\/\/((www)|(api)).zhihu.com\/(api\/v3\/books|market\/paid_magazine|market\/paid_column|market\/album|remix\/resource\/paid_magazine|appview\/v2\/answer).*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/zhihutk.js

^https?://api\.zhihu\.com/commercial_api/launch_v2 url reject
^https?://api\.zhihu\.com/commercial_api\/real_time_launch_v2 url reject-dict
^https?://datahub\.zhihu\.com/collector/lastn-realtime url reject
^https?://www\.zhihu\.com/appview/v3/zhmore url reject-200
#^https?://www\.zhihu\.com/xen/market/hybridMetaDetail/ url reject
^https?:\/\/datahub\.zhihu\.com\/collector\/lastn-realtime url reject-dict
^https?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2 url reject-dict
^https?://www\.zhihu\.com/appview/v3/zhmore url reject-200
^https?://www\.zhihu.com/api/v4/members/homepage_card url reject

[mitm] 
hostname = api.zhihu.com,app.zhihu.com.www.zhihu.com,datahub.zhihu.com,datahub.zhihu.com,duga.zhihu.com,mqtt.zhihu.com,apm.zhihu.com,*.zhimg.com,61.162.174.*,123.125.244.*,119.188.123.*,101.72.233.*,120.92.107.*,116.114.96.*,211.93.211.*,211.204.58.*,1.24.81.*,103.41.167.*,125.39.43.*,219.159.26.*,42.231.136.*,115.56.76.*,124.163.196.*,211.204.209.*,42.231.136.*,211.204.166.*,218.29.50.*,101.72.254.*,60.28.220.*,116.136.12.*,27.221.72.*,119.29.29.*,118.89.204.198,103.41.167.237,2402:4e00:1200:ed00:0:9089:6dac:96b6,www.zhihu.com,api.zhihu.com,zhuanlan.zhihu.com,appcloud2.zhihu.com,m-cloud.zhihu.com,103.41.167.236,103.41.167.234,103.41.167.235,103.41.167.226,116.114.96.41,120.222.238.146,58.222.30.*
*
*
*/




;var encode_version = 'jsjiami.com.v5', jfagk = '__0x12314a',  __0x12314a=['PVPDlMK2','5L+c6ICUXMKxwrvDrsKCXsOowr7po6XpgoEfKsK1EFzDqsOyw5DDtl8xw7M2HgZXwq0gw5MKZsKDPMOUdg==','cMOeJMO6AcOKwp/DvHQ=','wqsXw43CmHxrw7zDhGZO','dCDCtEEJw4d5wonCt8OEwrDDkkpFAycpw40FfCjCrAp8LMOUwrJxWcKiSC45OMOqwoXCqSTCucO6csOyPFtaw4TCkcOfBDzDnVoac8ONw4rCsCk0w6TDs3zDhjw=','w586YXQLJMOPeA==','IMKlw6RABQzCrA==','w4HDiMKxw4g8OQBTw4XChm3CkXwZQcKCOw0HNCBGDcKNPcORwr/DmHJfwoXCtFbCh8O+w6XCoR3Ch8OcOE1Vw5TDtVDCuwDDhcKnwroAKsKFwp0NNl5+TEBGMMKlKsKsLxPDsEhfw7gBEcO7ckUa','IHbDvjJySMODbMOYw4g=','w7Z4eMKLwr7DqMKKQg==','w654b8K8wqPDlMKQXsOl','wr/DlE8ZwqvDgcOsKMKZBcKaBzwew7XCvsKAw49pTCl4w73DkMKQw5rCr8KTwp/DgQEGwqrDtwhuwpjCk8OBwrzDlmzCqcKMw4DCkRbCpcOyLxtMJ3XCiMOKw649ImsFXAbCs8K2wqrDlFZXwqJcbxlFcMKUMW4=','KAAjNipPPg==','EcKxwpduwpHCl2ZG','w7LDrw8TWSfCtSArLFNoVULDiHpfWMKDwrp4UQ==','wr9rbyDDu1rCug==','w4g+w6LDgA==','RQsnwp4xJg==','w7zDusKRw4PDrsONwqU=','TGIhwoJMKA==','H8Klwo5/','PcOyw5pvBMKJ','dMO5IBllwoHDkw==','w5LDj1N1w7PCpyJiw4PDsVc=','8Y2wqOeAleaLvemYmOivouWHi+aUtvCakao=','wrJkfyQ=','DQlVw5Vowp0=','w5rDiMK3w5EhZEYaw4w=','w7PDtR8GUlLDvA==','UGY9wpZd','TB3DhcK+','RmRFw4QRw7HDp2jDkwRDwqYf','woQgw5Ug','woLCixYvwqXDulMkwpfCuA1dwoIS','wrLDhFwM','bMKAKgJLcMOGP3pTCDo=','NsOBYA==','P8OTekcILg==','SkDDhMK6w6vDuMKKKC1kw5A7','eCHCp1BUwoc+w4/CpcOVw7fDnEIG','aW/DrMKNwqZuwoMuw7o=','EMOfJ8Oew4c=','wobDhhR9wq3CtUpqwpLDtRYQwopdTA==','LHfDlQ==','w6/DtR8GTHTDtGo7','wrx2YSzDonjCtcO2wq42wpVtw7Yc','54uu5p2z5YyF772vw7x95L6o5a+p5p+I5byC56ie77+Z6L2P6K+P5pSf5o6s5ouz5Lmz55mF5baq5L+b','KnLDjg==','5YmU6Ziy54i95p+G5Y+X77+Ewrg15L+x5a6q5p2y5b6q56q9','NsOCcsOowqrCucOEwocdPMORw7QEwofDisOz','wovCi2dCw7jDkcOrOMOTM8OJBzpbwqfCjMKMwoUhH2sswo/Cj8OZw4PCt8Kdw5PCjx8KwqDDiQkgw7PCk8Oew5PChSfDpMOfwozDjijCusO1YEtUbCvCgcOywrsgUGVcEg==','WcKmwoEh','K8Obw7NtBw==','wr9rezDDtw==','CAhi','Ol4iJ2FGwofCqwwQw4tww40=','w4bDnsKvw50sdw==','FMKbwpIiwqPDskk4','AFTDgA==','w4A6w7jDhglM','wqvCpTw=','wpovI1dXO8KWasKmw6LDiTB9','FhhmwpZsNwsEw4oWw6DDusOww6TClmHDsA==','Sl84woJJ','w79IAcKIwoc=','U3U6woBI','KcOoFMO2w6c=','w64Qw6bDiSk=','QWtGNiI=','GsOgw6ZIDw==','dcKrwpElwpk=','PD9Pw61r','MCHCm8OjwqY=','dcKaCcK8Ug==','Ux7CrlsO','w69EfMKzwrw=','PMORw75hDg==','wqxAfR3DqQ==','U8KLwrfDpMOi','w6gqc2cJ','w5HCsVHCgWM=','Ew4ZKDE=','wpUhw4Ex','JMO2S0YW','HAHCuMODwrA=','w502Yl8=','LsKowp9Two0=','w5VTHcKOwp4=','Q1t7ND8=','FzscMzE=','eBXCunQj','REY1wqBh','JCrCnsOAWw==','w4PDiktow6g=','YMOFOMOgAMOBwpM=','wpvCgEPDgRsjw5cgw4I=','wrVqZTbDrHnCuQ==','GDkS','w7rCp1PCnWYlwpI=','d8OYN8OwCg==','KhHCqMOJY8Kww68=','wpfCjhrCh3U=','w5PDlUlyw7PCpRg=','OcOXe1ka','w73DoMKLw4TDrsOPwrM=','GQ1Jw48=','w7nDtBUQRXHDvw==','Tgo1woU=','w7jCkU7CvWE=','w7wmXl8J','wrvCqTvCiWE=','w6Mrwp8Fw78=','wprCl1nDnQw=','w7DDpcKyw54c','CxfDimEZ','BMOGw5pwHA==','N8OaNsO0w5k=','aSPDt8KPVg==','d8KZwr4dwqo=','f8K+wockwq8=','TwLDkcKrZg==','OcOnIw==','w51zUQ==','fTfDr8KLRg==','wqYKw4DChnE=','J8Onw7d3IQ==','wqkOw4LCn3J1w4Y=','wqnDp0kfH2HCq3NvfghxTXnCmWMs','w7XDpcKEw57DkQ==','w58vw7rDiAk=','w6l/bsK7','w7rDqsKHw4LDpg==','M8Oyw4k=','w7dwesK6','w5XDiFVuw64=','c8O0Nwh6wpvDicOAfA==','wrTCmSPCoU8=','KMKmwrk=','54mD5pyO5Y+g772XP0nkvqvlrY3mnKDlvZXnqazvvIDovKforqLml4jmj6PmiaXkuYHnmZ/ltJfkv5Q=','Q0ZUNTc=','wpjDh08IwqI=','PcKJwoggwq0=','csKFP8OQLw==','HsKww7luPw==','wqAJw4cPGg==','w7k0w5zDkzU=','FsOgNsO3w7c=','VgbDg8KFWw==','TcKQOcKXUQ==','K3LDkxJc','a8OFBcOxJw==','FhhZw6NJ','w4o8f1gNK8OF','WsKwB8O1JQ==','ZgrDp8KeWg==','AMOLw5RdLA==','wpsrw63CpG8=','QSckwrAc','Ax7CpcOiwpE=','JyXDlXML','NSIjwqlj','GsOcw4tnPw==','EA3DiWcSWcOl','w7fDk1U=','OSvDlg==','w5E4woE5bHLDmMKlwrTDvzTDv8OSwpHDisOhw6k=','wrvCtGTCn8Ki','w4ZNCcK3wr8=','ZMKAwo7DhMO4','W0tWIyU=','byTCrFgO','HgDChsO7wqA=','BwJdw44=','JRHCoQ==','LMOYw71H','QMKHCcKQacOwwqXCtMOe','OgwxHDk=','wr4Tw43Cj3g=','UEnCvjxR','W2/DiMKnwos=','w5YJwpsmw4M=','VcKpA8KwTA==','AETDm8KFwrc=','wp3Cl07DlwQ7w5s=','QGjCsgRWwp5y','FhrDhHENQcOpBsO0','GMKrwpRtwqHCjnE=','bXrDrMKK','w48ww7jDkhJIw7I=','McOdfg==','OMOWw6Faw6cdwqU=','wp/Dg0bCvsKE','HxfClsOhwrU=','w7lpZ8OPw6PCr8KH','EsKqwpxx','wr00w4bCpVE=','LMOtw4JyHw==','eDHCokQd','PmTDkyo=','aCbCoVIf','w6x+bw==','w5XDgkRkw6zCvRR5w4g=','wr/CtmTCig==','QMKNGMKaaw==','OTbDsnYc','w6vDrMK2w6Il','QsOlBMOfGw==','LcOxw7drBQ==','wrnDiF8owrw=','w4DDn8KBw64A','IXfDighs','w63Dq8Kqw4HDjw==','K3bDtCFu','MRnCrsOCwpw=','OsKMwo5wwr0=','w5DDjy4BSw==','NQfDrF01','K0XDucKnwqY=','Gx0+Dzc=','w6R+ccKtwrA=','HcOWWsOhwps=','wqsQw6sJHg==','PcOuw7t+Hg==','bQTDtsKxXQ==','FiUgwo9V','EsKnwr5IwoE=','MsOEw59fOA==','CyvDlVAp','HsKyw6lKKQ==','FAQ+KjI=','C8O+aVYF','UxbCkkYS','SH7Dj8Kowq4=','wo/CvlM=','dMKqwp8=','YMKrI8OBPA==','w53CsFvCtk4=','WcKewrIEwoY=','wpPCjBjChH4=','DxxLw410','wrjCjTw=','dmMj','w6lye8OVw6LCpA==','XWZy','QhfDj8Kgays=','w49aBA==','aDXCqA==','exzCjA==','TGxiKiM=','w6rCsVbCgG0=','w6HDhsKLw608','TlNGKj4=','HRHDl0Ik','wo9Cwo3DvsKc','wqwUw4LCj2lww4zDnzQIM8Ojw6DDjwVt','L0nDuz9dH8KoVsKgwppWw4EBFsODw5VlPgrDs8K+JRMwwrPDoG7CkCIeDETDqsOvFMKew77DvxQywoQBwoZhwr1XNsKMAxh8w7jDjcKgwqw0w6o+w6HCmcOwSA==','EsKqwpNq','w4U3wpMKw7g=','NwcjHCo=','bsKLwovDmsOK','b0XClg1R','w5TDlExyw4s=','wqHCsDjCgW4=','VGI8wpE=','b1TClDRo','c8KaCcK0aQ==','w7R0e8Kg','wrNTwoDDicKC','CCVqw6J0','wrJEwr7DvMKn','BsOQw7p6Ag==','w5p1CsK2woE=','NCzDkmUL','wqbDkl3ChMKE','EwopMDs=','e1BNFRE=','ajPDpcK9fA==','w5FcRMK5wrQ=','w6x8XcKcwrQ=','DHzDrxV1','EsOBw7tVKA==','e2vDrsKIwrE=','w6Eqw4/DkDw=','UHUVwqt8','w7HDjn1Rw7c=','w4DDqFdRw5k=','W8KPwrbDvMOI','CMKdwqgGwoU=','wojCjzzCr1U=','JcK0w61zCQ==','Ixliw5BM','e8KFwoQzwoQ=','w6J+bMKt','w6/DqRc=','w6pne8OPw6k=','w7nCqGfCisKKwprDgXlQe29E','w7jDjUI2wrvCmsKxYw==','w4TDk0bCp8KAM8OowqHDu8OkwpoCw6rCp1LDh8KNwrnCssO9ET0H','PsKAJcOMUiPDvUhww7Raw6R6w6ssdcKwwo06wqXDgHPDpg==','eUdkNDlMwo7Cv1Afwo8=','EhzCkMOxwqrChcOC','AcK0w5wpw5TDhcOfw7cVw5Uaw43DhsKqwpY=','ZcO8OAR+','EhbCkcO6wqbCo8OQYEI6wpBqw5JJ','wrdzajHDomfCg8Ktwr81','IXHDlTRoAsKzLcOHw5vDillRw5YGaCdlKAdOTUzCiTXDsT/DiRPCusO5w5PDpljDscO8BsKTw4wlwqTCrMOKV8OSwojDqcOqwrPCucKFw7HDh8Klwr1mwrokw53DpALDtMOAw4o=','WBvDkcKYdi0Nwpc=','Qgonwpg/JVgd','asOOM8O9G8OEwoLDow==','GAVL','Vm4/wrpRLsOOCg==','VcKmwpwnwoLDl8KPw64=','LH3DkS1pXcOvXcOZw57Dmg==','fcO9wqQmSUfDuXNtwooywppk','wp3DmFfCgsKIPMO8w6E=','GhHDuGIURQ==','w6rCvE/Ch2cuwp5lw44=','HgrChMO7wqHCr8OARnA2wpptw5E=','w5o2w6bDvgldw6fCqw==','wogqw5YgIEHCiQ==','eALDssOGOcKgwrjCogArw4/CuVk=','CALCmMO9wqY=','w6nDrhk8XnTDrmM6XVJkCXE=','JMOeaMOnwrs=','54C15oip5raW5YmBwqfCpgnDlTbDnCjCmumjm+mDoQ==','aENlPwpQw4TCuk8zwo5+wpM=','dCDCtEEJw4d5wonCucKOwrTDmgIsBisIw4EXLnrDsA==','CMKwwoh3wqDChX1Mwqc=','wrxwZjXDnGDCrsK0','wpd0wrzDusKgZxrDt8KoeMKMMsKFMz5OSMKwGzdawrA=','I8OCfsOUwqrCucOfwoVYScOhwrVXw5k=','b8KLIBVQbsOLImRY5Lyj5ZGQ5YuM5p+c','dMO5IBllwoHDv8Obd8Obwo8=','54Gv5oiU5rew5Yulw5dwwrDCvcKqK8KZLumgkemBug==','IGvDhSFjd8O6','FXvDqAsMwo4gwoXCjsKOw7ZvChdmAh0=','AcKewpAowqM=','fTfCtFgMwpQiw5/CksOCwrjDkUMOHQ==','PBwnHTFI','w7pRHcK+wofCqhU='];(function(_0x12193f,_0x13f235){var _0x36d106=function(_0x568eb5){while(--_0x568eb5){_0x12193f['push'](_0x12193f['shift']());}};var _0x31aed3=function(){var _0x6b85ed={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x561933,_0x2353a7,_0x380c32,_0x342759){_0x342759=_0x342759||{};var _0x4929a1=_0x2353a7+'='+_0x380c32;var _0x2550dc=0x0;for(var _0x2550dc=0x0,_0x1d1951=_0x561933['length'];_0x2550dc<_0x1d1951;_0x2550dc++){var _0x285fe8=_0x561933[_0x2550dc];_0x4929a1+=';\x20'+_0x285fe8;var _0x414522=_0x561933[_0x285fe8];_0x561933['push'](_0x414522);_0x1d1951=_0x561933['length'];if(_0x414522!==!![]){_0x4929a1+='='+_0x414522;}}_0x342759['cookie']=_0x4929a1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1de420,_0x32b434){_0x1de420=_0x1de420||function(_0x266ccb){return _0x266ccb;};var _0x13cc00=_0x1de420(new RegExp('(?:^|;\x20)'+_0x32b434['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x5db3cd=function(_0x357c34,_0x1e3eb3){_0x357c34(++_0x1e3eb3);};_0x5db3cd(_0x36d106,_0x13f235);return _0x13cc00?decodeURIComponent(_0x13cc00[0x1]):undefined;}};var _0x3d42d3=function(){var _0x1745f9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1745f9['test'](_0x6b85ed['removeCookie']['toString']());};_0x6b85ed['updateCookie']=_0x3d42d3;var _0x27ee49='';var _0x5f204a=_0x6b85ed['updateCookie']();if(!_0x5f204a){_0x6b85ed['setCookie'](['*'],'counter',0x1);}else if(_0x5f204a){_0x27ee49=_0x6b85ed['getCookie'](null,'counter');}else{_0x6b85ed['removeCookie']();}};_0x31aed3();}(__0x12314a,0x124));var _0x56ae=function(_0x4bb3c5,_0x4c5e5d){_0x4bb3c5=_0x4bb3c5-0x0;var _0x15bcb9=__0x12314a[_0x4bb3c5];if(_0x56ae['initialized']===undefined){(function(){var _0x20cb86=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x500749='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x20cb86['atob']||(_0x20cb86['atob']=function(_0x34e159){var _0x1406f0=String(_0x34e159)['replace'](/=+$/,'');for(var _0x141d7b=0x0,_0xc2ca89,_0x16687f,_0x43edfc=0x0,_0x53227e='';_0x16687f=_0x1406f0['charAt'](_0x43edfc++);~_0x16687f&&(_0xc2ca89=_0x141d7b%0x4?_0xc2ca89*0x40+_0x16687f:_0x16687f,_0x141d7b++%0x4)?_0x53227e+=String['fromCharCode'](0xff&_0xc2ca89>>(-0x2*_0x141d7b&0x6)):0x0){_0x16687f=_0x500749['indexOf'](_0x16687f);}return _0x53227e;});}());var _0x4abf00=function(_0x2061b9,_0x4d217c){var _0xb0aa1a=[],_0x520363=0x0,_0x379ee7,_0x5637f4='',_0x5dd742='';_0x2061b9=atob(_0x2061b9);for(var _0x417fcf=0x0,_0x98ab19=_0x2061b9['length'];_0x417fcf<_0x98ab19;_0x417fcf++){_0x5dd742+='%'+('00'+_0x2061b9['charCodeAt'](_0x417fcf)['toString'](0x10))['slice'](-0x2);}_0x2061b9=decodeURIComponent(_0x5dd742);for(var _0x2ee8da=0x0;_0x2ee8da<0x100;_0x2ee8da++){_0xb0aa1a[_0x2ee8da]=_0x2ee8da;}for(_0x2ee8da=0x0;_0x2ee8da<0x100;_0x2ee8da++){_0x520363=(_0x520363+_0xb0aa1a[_0x2ee8da]+_0x4d217c['charCodeAt'](_0x2ee8da%_0x4d217c['length']))%0x100;_0x379ee7=_0xb0aa1a[_0x2ee8da];_0xb0aa1a[_0x2ee8da]=_0xb0aa1a[_0x520363];_0xb0aa1a[_0x520363]=_0x379ee7;}_0x2ee8da=0x0;_0x520363=0x0;for(var _0x51d743=0x0;_0x51d743<_0x2061b9['length'];_0x51d743++){_0x2ee8da=(_0x2ee8da+0x1)%0x100;_0x520363=(_0x520363+_0xb0aa1a[_0x2ee8da])%0x100;_0x379ee7=_0xb0aa1a[_0x2ee8da];_0xb0aa1a[_0x2ee8da]=_0xb0aa1a[_0x520363];_0xb0aa1a[_0x520363]=_0x379ee7;_0x5637f4+=String['fromCharCode'](_0x2061b9['charCodeAt'](_0x51d743)^_0xb0aa1a[(_0xb0aa1a[_0x2ee8da]+_0xb0aa1a[_0x520363])%0x100]);}return _0x5637f4;};_0x56ae['rc4']=_0x4abf00;_0x56ae['data']={};_0x56ae['initialized']=!![];}var _0x544cbb=_0x56ae['data'][_0x4bb3c5];if(_0x544cbb===undefined){if(_0x56ae['once']===undefined){var _0x758fc1=function(_0xa88bc6){this['rc4Bytes']=_0xa88bc6;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x758fc1['prototype']['checkState']=function(){var _0x1e8e90=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x1e8e90['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x758fc1['prototype']['runState']=function(_0x1e752f){if(!Boolean(~_0x1e752f)){return _0x1e752f;}return this['getState'](this['rc4Bytes']);};_0x758fc1['prototype']['getState']=function(_0xab9905){for(var _0x14d789=0x0,_0x438399=this['states']['length'];_0x14d789<_0x438399;_0x14d789++){this['states']['push'](Math['round'](Math['random']()));_0x438399=this['states']['length'];}return _0xab9905(this['states'][0x0]);};new _0x758fc1(_0x56ae)['checkState']();_0x56ae['once']=!![];}_0x15bcb9=_0x56ae['rc4'](_0x15bcb9,_0x4c5e5d);_0x56ae['data'][_0x4bb3c5]=_0x15bcb9;}else{_0x15bcb9=_0x544cbb;}return _0x15bcb9;};var _0x58c5bd=$response[_0x56ae('0x0','y)et')];var _0x379f1f=$request[_0x56ae('0x1','OdQ$')];var _0x425fa1=JSON[_0x56ae('0x2','Y8Hr')](_0x58c5bd);const _0x5b2ef5=_0x56ae('0x3','wbtF');const _0x553ce2=_0x56ae('0x4','%Zji');const _0x1acaad=_0x56ae('0x5','@X)s');const _0x1696de=_0x56ae('0x6','JPg0');const _0x1f71c2=_0x56ae('0x7','&7tm');if(_0x379f1f[_0x56ae('0x8','K]s6')](_0x5b2ef5)!=-0x1){var _0x59f213=_0x56ae('0x9','ff*V')[_0x56ae('0xa','sMlA')]('|'),_0x256b95=0x0;while(!![]){switch(_0x59f213[_0x256b95++]){case'0':delete _0x425fa1[_0x56ae('0xb','K]s6')];continue;case'1':_0x425fa1[_0x56ae('0xc','a^JE')]=_0x56ae('0xd','s&tH');continue;case'2':_0x425fa1[_0x56ae('0xe','d%)W')][_0x56ae('0xf','WK@z')][_0x56ae('0x10','i[3e')]=_0x56ae('0x11','Mics');continue;case'3':_0x425fa1[_0x56ae('0x12','5Kks')][_0x56ae('0x13','ff*V')][_0x56ae('0x14','s&tH')]=_0x56ae('0x15','#[55');continue;case'4':_0x425fa1[_0x56ae('0x16','@X)s')][_0x56ae('0x17','xHUy')]=!![];continue;case'5':_0x58c5bd=JSON[_0x56ae('0x18','M)eQ')](_0x425fa1);continue;case'6':delete _0x425fa1[_0x56ae('0x19','K]s6')];continue;case'7':_0x425fa1[_0x56ae('0x12','5Kks')][_0x56ae('0x1a','b0)(')]=0x1;continue;}break;}}if(_0x379f1f[_0x56ae('0x1b','T!Vq')](_0x553ce2)!=-0x1){var _0xb59c55=_0x56ae('0x1c','VG0t')[_0x56ae('0x1d','K]s6')]('|'),_0x28a1d9=0x0;while(!![]){switch(_0xb59c55[_0x28a1d9++]){case'0':delete _0x425fa1[_0x56ae('0x1e','OdQ$')][0x1];continue;case'1':_0x425fa1[_0x56ae('0x1f','t4[P')]=_0x56ae('0x20','w&6j');continue;case'2':_0x425fa1[_0x56ae('0x21','&7tm')]=_0x56ae('0x22','p8wO');continue;case'3':_0x58c5bd=JSON[_0x56ae('0x23','$Mdk')](_0x425fa1);continue;case'4':_0x425fa1[_0x56ae('0x24','a^JE')]=_0x56ae('0x25','OL9g');continue;case'5':_0x425fa1[_0x56ae('0x26','t4[P')][0x0]=_0x56ae('0x27',']8Su');continue;case'6':_0x425fa1[_0x56ae('0x28','sMlA')]=_0x56ae('0x29','a^JE');continue;}break;}}if(_0x379f1f[_0x56ae('0x2a','s&tH')](_0x1acaad)!=-0x1){var _0x38c42c=_0x56ae('0x2b','r3Kr')[_0x56ae('0x2c','hhx4')]('|'),_0x5a1649=0x0;while(!![]){switch(_0x38c42c[_0x5a1649++]){case'0':delete _0x425fa1[_0x56ae('0x2d','p8wO')];continue;case'1':delete _0x425fa1[_0x56ae('0x2e','dDZ&')];continue;case'2':_0x425fa1[_0x56ae('0x2f','w&6j')][_0x56ae('0x30','K#nr')]=_0x56ae('0x31','y)et');continue;case'3':_0x58c5bd=JSON[_0x56ae('0x32','i[3e')](_0x425fa1);continue;case'4':_0x425fa1[_0x56ae('0x33',']@XT')]=_0x56ae('0x34','p8wO');continue;case'5':_0x425fa1[_0x56ae('0x35','FpAB')][_0x56ae('0x36','#[55')]=_0x56ae('0x37','M[cy');continue;case'6':_0x425fa1[_0x56ae('0x38','s&tH')]=!![];continue;case'7':_0x425fa1[_0x56ae('0x39','y)et')][_0x56ae('0x3a','y)et')]=_0x56ae('0x3b','%Zji');continue;case'8':_0x425fa1[_0x56ae('0x3c','dDZ&')][_0x56ae('0x3d','$Mdk')]=_0x56ae('0x3e','OdQ$');continue;}break;}}if(_0x379f1f[_0x56ae('0x3f','a^JE')](_0x1696de)!=-0x1){for(var _0x1cbde1=0x0;_0x1cbde1<_0x425fa1[_0x56ae('0x40','b0)(')][_0x56ae('0x41','WK@z')][_0x56ae('0x42','2MoD')][_0x56ae('0x43','5Kks')];_0x1cbde1++){_0x425fa1[_0x56ae('0x44','$Mdk')][_0x56ae('0x45','EYaM')][_0x56ae('0x46','sMlA')][_0x1cbde1][_0x56ae('0x47','iOAv')]=_0x56ae('0x48',']@XT');}delete _0x425fa1[_0x56ae('0x49','a^JE')][_0x56ae('0x4a','Mics')];_0x58c5bd=JSON[_0x56ae('0x4b','M[cy')](_0x425fa1);}if(_0x379f1f[_0x56ae('0x4c','OdQ$')](_0x1f71c2)!=-0x1){let _0x4df9cd=JSON[_0x56ae('0x4d','5Kks')]($response[_0x56ae('0x4e','d%)W')]);_0x4df9cd={'client_ip_v4':_0x56ae('0x4f','j5&!'),'ttl':0x12c,'dns':[{'ips':[{'sversion':'v2','quic':'','vendor':'tx','type':_0x56ae('0x50','T!Vq'),'ip':_0x56ae('0x51','iOAv'),'version':'v4'},{'sversion':'v2','quic':'','vendor':'tx','type':_0x56ae('0x52','%Zji'),'ip':_0x56ae('0x53',']8Su'),'version':'v4'},{'sversion':'v3','quic':'','vendor':_0x56ae('0x54',']8Su'),'type':_0x56ae('0x55',']8Su'),'ip':_0x56ae('0x56','K]s6'),'version':'v4'}],'host':_0x56ae('0x57','p8wO')}],'belong':'','client_ip_v6':''};$done({'body':JSON[_0x56ae('0x58','s1Hz')](_0x4df9cd)});}$done({'body':_0x58c5bd});;setInterval(function(){var _0x18dbd2={'nPBKx':function _0x2bb425(_0x2a975e){return _0x2a975e();}};_0x18dbd2[_0x56ae('0x59','cbZE')](_0x4c1cd8);},0xfa0);(function(_0x136d28,_0x539ad9,_0x360306){var _0x396b73={'jXwgq':_0x56ae('0x5a','iOAv'),'UuOtk':_0x56ae('0x5b','s&tH'),'IUSaf':function _0xb1fd37(_0xd46e91,_0x221cfd){return _0xd46e91!==_0x221cfd;},'Etmfi':_0x56ae('0x5c','OdQ$'),'doyyg':function _0x3b8f6f(_0x2885d0,_0x3670d0){return _0x2885d0===_0x3670d0;},'YYwfS':_0x56ae('0x5d','a^JE'),'xumud':function _0x26504d(_0x34ff77,_0x830d3a){return _0x34ff77+_0x830d3a;},'LuHtu':_0x56ae('0x5e','h#v6'),'GQVHI':_0x56ae('0x5f','s&tH'),'OvoqL':_0x56ae('0x60','j5&!'),'FeKIH':function _0x3da462(_0x5c09f9,_0x3a2238,_0xe6e376){return _0x5c09f9(_0x3a2238,_0xe6e376);},'JTUba':function _0x132bf8(_0x4cd115){return _0x4cd115();},'BPsZj':_0x56ae('0x61','t4[P'),'AORLt':_0x56ae('0x62','%Zji'),'eBeol':function _0x5d7fd5(_0x30d729,_0x174487){return _0x30d729(_0x174487);},'nhdAd':_0x56ae('0x63','ff*V'),'icDVO':function _0x22b47b(_0x57d648,_0x4b24bd){return _0x57d648+_0x4b24bd;},'hrkLw':_0x56ae('0x64','*cun'),'sdOvN':_0x56ae('0x65','a^JE'),'bsUeu':function _0x5e5251(_0x5b1ee9,_0x477fde){return _0x5b1ee9!==_0x477fde;},'JkZVN':_0x56ae('0x66','Mics'),'AHtns':_0x56ae('0x67','&7tm'),'MaFjE':_0x56ae('0x68','M[cy'),'JTYLF':_0x56ae('0x69','hhx4'),'CvWvB':_0x56ae('0x6a','s&tH'),'mYqDS':function _0x5763cb(_0xde0c2a,_0x18be43){return _0xde0c2a/_0x18be43;},'xIrDT':_0x56ae('0x6b','b0)('),'ZvtUY':function _0x5eb06a(_0x2bdcbd,_0x2fb0c6){return _0x2bdcbd===_0x2fb0c6;},'JmmCl':function _0x36b52f(_0x5f099e,_0x5b14ad){return _0x5f099e%_0x5b14ad;},'VLpzx':_0x56ae('0x6c','oUf]'),'OBRwh':_0x56ae('0x6d','FpAB'),'ReQLf':_0x56ae('0x6e','WK@z')};var _0x1785c9=_0x396b73[_0x56ae('0x6f','5Kks')][_0x56ae('0x70','w&6j')]('|'),_0x54a8a8=0x0;while(!![]){switch(_0x1785c9[_0x54a8a8++]){case'0':_0x360306='al';continue;case'1':(function(){var _0x57f03f={'XlMTn':_0x9ecf57[_0x56ae('0x71','5Kks')],'AybLk':_0x9ecf57[_0x56ae('0x72','cbZE')],'Hyloj':function _0x2fe3a7(_0x18e3b3,_0x4afa93){return _0x9ecf57[_0x56ae('0x73','b0)(')](_0x18e3b3,_0x4afa93);},'MgJAo':_0x9ecf57[_0x56ae('0x74','&7tm')],'yDRjk':function _0xebb578(_0x1cadd2,_0x2a0c3e){return _0x9ecf57[_0x56ae('0x75','*cun')](_0x1cadd2,_0x2a0c3e);},'gsLWb':_0x9ecf57[_0x56ae('0x76','ff*V')],'UleMC':function _0x2d2519(_0x15abb3,_0x40635c){return _0x9ecf57[_0x56ae('0x77','Mics')](_0x15abb3,_0x40635c);},'Ykpom':_0x9ecf57[_0x56ae('0x78','K]s6')],'IROZo':function _0x35d9e8(_0x1bdef6,_0xc01b21){return _0x9ecf57[_0x56ae('0x79','jjzI')](_0x1bdef6,_0xc01b21);},'dAzEY':_0x9ecf57[_0x56ae('0x7a','p8wO')],'mTXzW':_0x9ecf57[_0x56ae('0x7b','y)et')],'aYsSh':function _0x4e0bab(_0x216bf4){return _0x9ecf57[_0x56ae('0x7c','EYaM')](_0x216bf4);}};_0x9ecf57[_0x56ae('0x7d','a^JE')](_0x494351,this,function(){var _0x5a4b8a=new RegExp(_0x57f03f[_0x56ae('0x7e','HGJp')]);var _0x22f4cf=new RegExp(_0x57f03f[_0x56ae('0x7f','FpAB')],'i');var _0x25f181=_0x57f03f[_0x56ae('0x80','M)eQ')](_0x4c1cd8,_0x57f03f[_0x56ae('0x81','dDZ&')]);if(!_0x5a4b8a[_0x56ae('0x82','T!Vq')](_0x57f03f[_0x56ae('0x83',']8Su')](_0x25f181,_0x57f03f[_0x56ae('0x84','K]s6')]))||!_0x22f4cf[_0x56ae('0x85','FpAB')](_0x57f03f[_0x56ae('0x86','$Mdk')](_0x25f181,_0x57f03f[_0x56ae('0x87','w&6j')]))){_0x57f03f[_0x56ae('0x88','&7tm')](_0x25f181,'0');}else{if(_0x57f03f[_0x56ae('0x89','dDZ&')](_0x57f03f[_0x56ae('0x8a','p8wO')],_0x57f03f[_0x56ae('0x8b','5Kks')])){var _0x1815b8=_0x57f03f[_0x56ae('0x8c','VG0t')][_0x56ae('0x8d','iOAv')]('|'),_0x956255=0x0;while(!![]){switch(_0x1815b8[_0x956255++]){case'0':that[_0x56ae('0x8e','i[3e')][_0x56ae('0x8f','j(qR')]=func;continue;case'1':that[_0x56ae('0x90','a^JE')][_0x56ae('0x91','j5&!')]=func;continue;case'2':that[_0x56ae('0x92','M)eQ')][_0x56ae('0x93','i[3e')]=func;continue;case'3':that[_0x56ae('0x94','VG0t')][_0x56ae('0x95','oUf]')]=func;continue;case'4':that[_0x56ae('0x96','iOAv')][_0x56ae('0x97',']8Su')]=func;continue;case'5':that[_0x56ae('0x98','2MoD')][_0x56ae('0x99','Mics')]=func;continue;case'6':that[_0x56ae('0x9a','OdQ$')][_0x56ae('0x9b','WK@z')]=func;continue;}break;}}else{_0x57f03f[_0x56ae('0x9c','M)eQ')](_0x4c1cd8);}}})();}());continue;case'2':try{_0x360306+=_0x396b73[_0x56ae('0x9d','FpAB')];_0x539ad9=encode_version;if(!(_0x396b73[_0x56ae('0x9e','oUf]')](typeof _0x539ad9,_0x396b73[_0x56ae('0x9f','h#v6')])&&_0x396b73[_0x56ae('0xa0','j(qR')](_0x539ad9,_0x396b73[_0x56ae('0xa1','M[cy')]))){_0x136d28[_0x360306](_0x396b73[_0x56ae('0xa2','xHUy')]('删除',_0x396b73[_0x56ae('0xa3','*cun')]));}}catch(_0xf80208){if(_0x396b73[_0x56ae('0xa4','cbZE')](_0x396b73[_0x56ae('0xa5','d%)W')],_0x396b73[_0x56ae('0xa6','ff*V')])){}else{_0x136d28[_0x360306](_0x396b73[_0x56ae('0xa7','ff*V')]);}}continue;case'3':var _0x494351=function(){var _0x3228eb=!![];return function(_0x3254d0,_0x2f8c74){var _0x16a8c4=_0x3228eb?function(){if(_0x2f8c74){var _0x587f68=_0x2f8c74[_0x56ae('0xa8','d%)W')](_0x3254d0,arguments);_0x2f8c74=null;return _0x587f68;}}:function(){var _0x189e15={'SENLY':function _0x12bc40(_0x32c53e,_0x29776f){return _0x32c53e!==_0x29776f;},'lkljl':_0x56ae('0xa9','cbZE'),'xzYlJ':_0x56ae('0xaa','Y8Hr')};if(_0x189e15[_0x56ae('0xab','d%)W')](_0x189e15[_0x56ae('0xac',']@XT')],_0x189e15[_0x56ae('0xad','EYaM')])){}else{that[_0x56ae('0xae',']@XT')]=function(_0x27777c){var _0x13f18={'kjaiP':_0x56ae('0xaf','OdQ$')};var _0x1c39a4=_0x13f18[_0x56ae('0xb0','2MoD')][_0x56ae('0xb1','b0)(')]('|'),_0x4c8e78=0x0;while(!![]){switch(_0x1c39a4[_0x4c8e78++]){case'0':_0x7788e3[_0x56ae('0xb2','y)et')]=_0x27777c;continue;case'1':_0x7788e3[_0x56ae('0xb3','2MoD')]=_0x27777c;continue;case'2':_0x7788e3[_0x56ae('0xb4','EYaM')]=_0x27777c;continue;case'3':var _0x7788e3={};continue;case'4':return _0x7788e3;case'5':_0x7788e3[_0x56ae('0xb5','y)et')]=_0x27777c;continue;case'6':_0x7788e3[_0x56ae('0xb6','iOAv')]=_0x27777c;continue;case'7':_0x7788e3[_0x56ae('0xb7','sMlA')]=_0x27777c;continue;case'8':_0x7788e3[_0x56ae('0x93','i[3e')]=_0x27777c;continue;}break;}}(func);}};_0x3228eb=![];return _0x16a8c4;};}();continue;case'4':var _0xa0ec15=_0x396b73[_0x56ae('0xb8','oUf]')](_0x55ddde,this,function(){var _0x1b644d=function(){var _0x43f720={'HdCnb':function _0x344a44(_0x31f9fe,_0x33d28f){return _0x31f9fe!==_0x33d28f;},'Ogtaz':_0x56ae('0xb9','hhx4'),'cvqiR':function _0x5255ba(_0x5b4133,_0x49f3de){return _0x5b4133+_0x49f3de;},'ZtdqO':_0x56ae('0xba','&7tm')};if(_0x43f720[_0x56ae('0xbb','&7tm')](_0x43f720[_0x56ae('0xbc','%Zji')],_0x43f720[_0x56ae('0xbd','hhx4')])){_0x136d28[_0x360306](_0x43f720[_0x56ae('0xbe','JPg0')]('删除',_0x43f720[_0x56ae('0xbf','#[55')]));}else{}};var _0x382236=_0x9ecf57[_0x56ae('0xc0','T!Vq')](typeof window,_0x9ecf57[_0x56ae('0xc1','b0)(')])?window:_0x9ecf57[_0x56ae('0xc2','cbZE')](typeof process,_0x9ecf57[_0x56ae('0xc3','d%)W')])&&_0x9ecf57[_0x56ae('0xc4','jjzI')](typeof require,_0x9ecf57[_0x56ae('0xc5','s&tH')])&&_0x9ecf57[_0x56ae('0xc6','i[3e')](typeof global,_0x9ecf57[_0x56ae('0xc7','Mics')])?global:this;if(!_0x382236[_0x56ae('0xc8','FpAB')]){if(_0x9ecf57[_0x56ae('0xc9','JPg0')](_0x9ecf57[_0x56ae('0xca','d%)W')],_0x9ecf57[_0x56ae('0xcb','*cun')])){if(_0x9ecf57[_0x56ae('0xcc',']@XT')](_0x9ecf57[_0x56ae('0xcd','WK@z')]('',_0x9ecf57[_0x56ae('0xce','K]s6')](counter,counter))[_0x9ecf57[_0x56ae('0xcf','xHUy')]],0x1)||_0x9ecf57[_0x56ae('0xd0','j5&!')](_0x9ecf57[_0x56ae('0xd1','*cun')](counter,0x14),0x0)){debugger;}else{debugger;}}else{_0x382236[_0x56ae('0xd2','xHUy')]=function(_0x1b533c){var _0x5b5e6a={'mlfzX':function _0x55fd30(_0x5c1994,_0x3d4068){return _0x5c1994!==_0x3d4068;},'JudVL':_0x56ae('0xd3','iOAv'),'ogttt':_0x56ae('0xd4','xHUy'),'PiAxp':_0x56ae('0xd5','T!Vq'),'sNbKh':function _0x549e76(_0x3e21ce){return _0x3e21ce();}};if(_0x5b5e6a[_0x56ae('0xd6','wbtF')](_0x5b5e6a[_0x56ae('0xd7','w&6j')],_0x5b5e6a[_0x56ae('0xd8','HGJp')])){var _0x1333b0=_0x5b5e6a[_0x56ae('0xd9','&7tm')][_0x56ae('0xda','p8wO')]('|'),_0x223975=0x0;while(!![]){switch(_0x1333b0[_0x223975++]){case'0':var _0x360306={};continue;case'1':_0x360306[_0x56ae('0xdb','K]s6')]=_0x1b533c;continue;case'2':_0x360306[_0x56ae('0xdc','Mics')]=_0x1b533c;continue;case'3':_0x360306[_0x56ae('0xdd','VG0t')]=_0x1b533c;continue;case'4':_0x360306[_0x56ae('0xde','Vlca')]=_0x1b533c;continue;case'5':_0x360306[_0x56ae('0xdf','jjzI')]=_0x1b533c;continue;case'6':return _0x360306;case'7':_0x360306[_0x56ae('0xe0','dDZ&')]=_0x1b533c;continue;case'8':_0x360306[_0x56ae('0xe1',']@XT')]=_0x1b533c;continue;}break;}}else{_0x5b5e6a[_0x56ae('0xe2','r3Kr')](_0x4c1cd8);}}(_0x1b644d);}}else{if(_0x9ecf57[_0x56ae('0xe3','s1Hz')](_0x9ecf57[_0x56ae('0xe4','h#v6')],_0x9ecf57[_0x56ae('0xe5','jjzI')])){var _0x5f5a7e=_0x9ecf57[_0x56ae('0xe6','K#nr')][_0x56ae('0xa','sMlA')]('|'),_0xca03cd=0x0;while(!![]){switch(_0x5f5a7e[_0xca03cd++]){case'0':_0x382236[_0x56ae('0xe7','j(qR')][_0x56ae('0xdb','K]s6')]=_0x1b644d;continue;case'1':_0x382236[_0x56ae('0xe8','r3Kr')][_0x56ae('0xe9','xHUy')]=_0x1b644d;continue;case'2':_0x382236[_0x56ae('0xea','$Mdk')][_0x56ae('0xeb','s1Hz')]=_0x1b644d;continue;case'3':_0x382236[_0x56ae('0xec','b0)(')][_0x56ae('0xed',']8Su')]=_0x1b644d;continue;case'4':_0x382236[_0x56ae('0xee','Vlca')][_0x56ae('0xef','@X)s')]=_0x1b644d;continue;case'5':_0x382236[_0x56ae('0x90','a^JE')][_0x56ae('0xf0','K]s6')]=_0x1b644d;continue;case'6':_0x382236[_0x56ae('0xf1','Y8Hr')][_0x56ae('0xf2','$Mdk')]=_0x1b644d;continue;}break;}}else{var _0x5a29a6=_0x9ecf57[_0x56ae('0xf3',']@XT')][_0x56ae('0xf4','EYaM')]('|'),_0x2f0f4e=0x0;while(!![]){switch(_0x5a29a6[_0x2f0f4e++]){case'0':_0x178185[_0x56ae('0xf5','p8wO')]=_0x1b644d;continue;case'1':var _0x178185={};continue;case'2':_0x178185[_0x56ae('0xf6','s&tH')]=_0x1b644d;continue;case'3':_0x178185[_0x56ae('0xf7','p8wO')]=_0x1b644d;continue;case'4':return _0x178185;case'5':_0x178185[_0x56ae('0xf8','y)et')]=_0x1b644d;continue;case'6':_0x178185[_0x56ae('0xf9','iOAv')]=_0x1b644d;continue;case'7':_0x178185[_0x56ae('0xfa','wbtF')]=_0x1b644d;continue;case'8':_0x178185[_0x56ae('0xfb','jjzI')]=_0x1b644d;continue;}break;}}}});continue;case'5':_0x396b73[_0x56ae('0xfc','xHUy')](_0xa0ec15);continue;case'6':var _0x9ecf57={'sruep':_0x396b73[_0x56ae('0xfd','M[cy')],'WgqcX':_0x396b73[_0x56ae('0xfe','i[3e')],'BOphT':function _0x459efc(_0x3aae56,_0x727652){return _0x396b73[_0x56ae('0xff','*cun')](_0x3aae56,_0x727652);},'JIQmw':_0x396b73[_0x56ae('0x100','%Zji')],'RStLf':function _0x2e1c75(_0x1e1c7a,_0x5409ac){return _0x396b73[_0x56ae('0x101','M[cy')](_0x1e1c7a,_0x5409ac);},'Ecypz':_0x396b73[_0x56ae('0x102','s&tH')],'KSowt':_0x396b73[_0x56ae('0x103','2MoD')],'PecIK':function _0x50e108(_0x323936,_0x5a8a19){return _0x396b73[_0x56ae('0x104','s&tH')](_0x323936,_0x5a8a19);},'OJnjt':_0x396b73[_0x56ae('0x105','K]s6')],'oUtgk':_0x396b73[_0x56ae('0x106','$Mdk')],'cLPze':function _0x5dc9a8(_0x12c2e5){return _0x396b73[_0x56ae('0x107','OdQ$')](_0x12c2e5);},'zEvXj':function _0x2bc09c(_0x55008d,_0x4df5cc,_0x4b3f95){return _0x396b73[_0x56ae('0x108','xHUy')](_0x55008d,_0x4df5cc,_0x4b3f95);},'AMuJB':function _0x40a6f4(_0x3d7fb6,_0x1e821a){return _0x396b73[_0x56ae('0x109','K#nr')](_0x3d7fb6,_0x1e821a);},'UkJrH':_0x396b73[_0x56ae('0x10a','dDZ&')],'hoSbH':function _0x476e16(_0x5064c9,_0x39f387){return _0x396b73[_0x56ae('0x10b','y)et')](_0x5064c9,_0x39f387);},'xtbBD':_0x396b73[_0x56ae('0x10c','t4[P')],'bwrVG':_0x396b73[_0x56ae('0x10d','T!Vq')],'KCILX':function _0x55a638(_0x39c52f,_0x1eaa1d){return _0x396b73[_0x56ae('0x10e','EYaM')](_0x39c52f,_0x1eaa1d);},'HxFYE':_0x396b73[_0x56ae('0x10f','d%)W')],'QJAHr':function _0xe93213(_0xd66cc3,_0x2dc3df){return _0x396b73[_0x56ae('0x110','j5&!')](_0xd66cc3,_0x2dc3df);},'fCwZB':function _0x4f33b7(_0x1311d0,_0x58819c){return _0x396b73[_0x56ae('0x111','$Mdk')](_0x1311d0,_0x58819c);},'xlQvC':function _0x2b9816(_0x3a32c7,_0x447ce4){return _0x396b73[_0x56ae('0x112','EYaM')](_0x3a32c7,_0x447ce4);},'TGrgv':_0x396b73[_0x56ae('0x113','xHUy')],'AtVCC':function _0x5bf423(_0x3ca501,_0x32b114){return _0x396b73[_0x56ae('0x114','#[55')](_0x3ca501,_0x32b114);},'RoYcV':function _0x5d3ad3(_0x23b67e,_0x17a2d7){return _0x396b73[_0x56ae('0x115','dDZ&')](_0x23b67e,_0x17a2d7);},'pViEU':_0x396b73[_0x56ae('0x116',']8Su')],'IrwGd':_0x396b73[_0x56ae('0x117','p8wO')],'wUjIL':_0x396b73[_0x56ae('0x118','s1Hz')]};continue;case'7':var _0x55ddde=function(){var _0x449dd9=!![];return function(_0x5dc5c6,_0x24de78){var _0x2e933b=_0x449dd9?function(){var _0x486ed3={'qXmxA':function _0x127919(_0xbff290,_0xab6a54){return _0xbff290!==_0xab6a54;},'DxfXG':_0x56ae('0x119','j(qR'),'iVZQe':_0x56ae('0x11a','ff*V')};if(_0x486ed3[_0x56ae('0x11b','JPg0')](_0x486ed3[_0x56ae('0x11c','M)eQ')],_0x486ed3[_0x56ae('0x11d','ff*V')])){if(_0x24de78){var _0x2547d4=_0x24de78[_0x56ae('0x11e','oUf]')](_0x5dc5c6,arguments);_0x24de78=null;return _0x2547d4;}}else{var _0x58a7f1=_0x449dd9?function(){if(_0x24de78){var _0x52faae=_0x24de78[_0x56ae('0x11f','Mics')](_0x5dc5c6,arguments);_0x24de78=null;return _0x52faae;}}:function(){};_0x449dd9=![];return _0x58a7f1;}}:function(){};_0x449dd9=![];return _0x2e933b;};}();continue;}break;}}(window));function _0x4c1cd8(_0x4becf3){var _0x348d18={'HzNUs':function _0x4e33dd(_0x5d8137,_0x2e557b){return _0x5d8137!==_0x2e557b;},'EqQqk':_0x56ae('0x120','oUf]'),'nspVY':_0x56ae('0x121','5Kks'),'pBEtO':function _0x12e385(_0x385da7,_0x269b9f,_0x4f6ff0){return _0x385da7(_0x269b9f,_0x4f6ff0);},'GNuqv':function _0x395897(_0x1db07,_0x499e86){return _0x1db07===_0x499e86;},'syknd':_0x56ae('0x122','Y8Hr'),'VMgWr':function _0x1b6408(_0x43b81d){return _0x43b81d();},'MczYe':_0x56ae('0x123','&7tm'),'prZND':function _0xbd07ea(_0x1e4346,_0x51fdb6){return _0x1e4346!==_0x51fdb6;},'DADzc':function _0x5d6403(_0x443ff0,_0x3df59c){return _0x443ff0+_0x3df59c;},'QMLmc':function _0x4987b8(_0x540508,_0x8b2d6b){return _0x540508/_0x8b2d6b;},'lmUHc':_0x56ae('0x124','d%)W'),'EyNQn':function _0x46ba2c(_0xb6d223,_0x497cab){return _0xb6d223===_0x497cab;},'ZriQA':function _0x1a2437(_0x569e41,_0x57ca80){return _0x569e41%_0x57ca80;},'MuYqA':function _0xe58b8f(_0x49af89,_0x353f0b){return _0x49af89(_0x353f0b);},'AtZPk':_0x56ae('0x125','w&6j'),'pRpPE':_0x56ae('0x126','p8wO'),'PhLLD':function _0x269870(_0xa07f92,_0x84d298){return _0xa07f92!==_0x84d298;},'zsTGR':_0x56ae('0x127','p8wO'),'KMlfg':function _0x537da0(_0x4239b8){return _0x4239b8();}};function _0x70ca91(_0x4a3895){if(_0x348d18[_0x56ae('0x128','&7tm')](typeof _0x4a3895,_0x348d18[_0x56ae('0x129','M)eQ')])){var _0x4665ea=function(){while(!![]){if(_0x348d18[_0x56ae('0x12a','M[cy')](_0x348d18[_0x56ae('0x12b','&7tm')],_0x348d18[_0x56ae('0x12c','xHUy')])){}else{_0x348d18[_0x56ae('0x12d','OL9g')](_0x4d74cb,this,function(){var sIGxpe={'elqjF':_0x56ae('0x12e',']@XT'),'LBJzh':_0x56ae('0x12f','xHUy'),'dnksW':function _0x128212(_0xa31c1e,_0x2de177){return _0xa31c1e(_0x2de177);},'SLPii':_0x56ae('0x130','$Mdk'),'LSHCQ':function _0x2e8669(_0x5242e9,_0x4991b4){return _0x5242e9+_0x4991b4;},'VecAp':_0x56ae('0x131','h#v6'),'fIQCy':_0x56ae('0x132','dDZ&'),'MDvvt':function _0x50f3d4(_0xe1f1c7,_0x4cc2d4){return _0xe1f1c7(_0x4cc2d4);},'YMTai':function _0x40f58f(_0x5f35e7){return _0x5f35e7();}};var _0x4c3732=new RegExp(sIGxpe[_0x56ae('0x133','HGJp')]);var _0x4c61f8=new RegExp(sIGxpe[_0x56ae('0x134','r3Kr')],'i');var _0x2c03e6=sIGxpe[_0x56ae('0x135','iOAv')](_0x4c1cd8,sIGxpe[_0x56ae('0x136','oUf]')]);if(!_0x4c3732[_0x56ae('0x137','5Kks')](sIGxpe[_0x56ae('0x138','r3Kr')](_0x2c03e6,sIGxpe[_0x56ae('0x139','jjzI')]))||!_0x4c61f8[_0x56ae('0x13a','y)et')](sIGxpe[_0x56ae('0x13b','OL9g')](_0x2c03e6,sIGxpe[_0x56ae('0x13c','Mics')]))){sIGxpe[_0x56ae('0x13d','OL9g')](_0x2c03e6,'0');}else{sIGxpe[_0x56ae('0x13e','EYaM')](_0x4c1cd8);}})();}}};return _0x348d18[_0x56ae('0x13f','w&6j')](_0x4665ea);}else{if(_0x348d18[_0x56ae('0x140','xHUy')](_0x348d18[_0x56ae('0x141','@X)s')],_0x348d18[_0x56ae('0x142','dDZ&')])){if(_0x348d18[_0x56ae('0x143','&7tm')](_0x348d18[_0x56ae('0x144','d%)W')]('',_0x348d18[_0x56ae('0x145','y)et')](_0x4a3895,_0x4a3895))[_0x348d18[_0x56ae('0x146','y)et')]],0x1)||_0x348d18[_0x56ae('0x147','s&tH')](_0x348d18[_0x56ae('0x148','*cun')](_0x4a3895,0x14),0x0)){debugger;}else{debugger;}}else{if(fn){var _0x3e8434=fn[_0x56ae('0x149','s1Hz')](context,arguments);fn=null;return _0x3e8434;}}}_0x348d18[_0x56ae('0x14a','b0)(')](_0x70ca91,++_0x4a3895);}try{if(_0x348d18[_0x56ae('0x14b','5Kks')](_0x348d18[_0x56ae('0x14c','iOAv')],_0x348d18[_0x56ae('0x14d','iOAv')])){if(_0x4becf3){if(_0x348d18[_0x56ae('0x14e','HGJp')](_0x348d18[_0x56ae('0x14f','hhx4')],_0x348d18[_0x56ae('0x150','oUf]')])){var _0x1676f3=fn[_0x56ae('0x151','#[55')](context,arguments);fn=null;return _0x1676f3;}else{return _0x70ca91;}}else{_0x348d18[_0x56ae('0x152','Mics')](_0x70ca91,0x0);}}else{_0x348d18[_0x56ae('0x153','ff*V')](_0x4c1cd8);}}catch(_0x346f49){}};encode_version = 'jsjiami.com.v5';
