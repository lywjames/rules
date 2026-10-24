[Script]
# >felo实时翻译-同传与语音字幕
response if ${url} ~= /^https?:\/\/(translator|accounts).felo.me\/api\/user.*$/i then script("https://raw.githubusercontent.com/WeiGiegie/666/main/felo.js") with tag="felo", timeout=60, requires_body=true
request if ${url} ~= /^https?:\/\/translator.felo.me\/api\/translation\/thirdToken\?token_channel/i then script("https://raw.githubusercontent.com/WeiGiegie/666/main/felotk.js") with tag="felotk", timeout=60

[Mitm]
hostname = accounts.felo.me,translator.felo.me,52.78.154.178
