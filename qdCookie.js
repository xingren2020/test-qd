let CookieQDs = [
  '{"common":{"appid":1450024394,"areaid":5,"qq_ver":"8.4.17","os_ver":"iOS 13.7","mp_ver":"0.31.0","mpos_ver":"1.21.0","brand":"iPhone","model":"iPhone 11 Pro Max<iPhone12,5>","screenWidth":414,"screenHeight":896,"windowWidth":414,"windowHeight":813,"openid":"CEF4FDE28AFFDE728D6E5FCB282BAB5C","guid":2514920005,"session":"f9342p12l9zrq5o6x333tfl64o54d18z","scene":3001,"source":-1,"hasRedDot":"false","missions":-1,"caseID":-1},"dataList":[{"click1":"bookDetail_bottomBar_read_C","click2":"bookLib2_bookList_bookClick_C","route":"pages/book-read/index","refer":"pages/book-detail/index","options":{"bid":"23315827","cid":"1"},"dis":1607403862871,"ext6":46,"eventID":"bookRead_show_I","type":"shown","ccid":1,"bid":"23315827","bookStatus":1,"bookPay":1,"chapterStatus":0,"ext1":{"font":18,"bg":0,"pageMode":1},"from":"bookLib2_bookList_bookClick_C_0_23315827"}]}#https://mqqapi.reader.qq.com/mqq/addReadTimeWithBid?scene=3001&refer=-1&bid=23315827&readTime=12378&read_type=0&conttype=1&read_status=0&chapter_info=%5B%7B%221%22%3A%7B%22readTime%22%3A12378%2C%22pay_status%22%3A0%7D%7D%5D&sp=-1#{ "Accept": "*/*", "Accept-Encoding": "gzip, deflate, br", "Accept-Language": "zh-cn", "Connection": "keep-alive", "Content-Type": "application/json", "Cookie": "ywguid=2514920005;ywkey=ywIIIL2EEgTO;platform=ios;channel=mqqmina;mpVersion=0.31.0;qq_ver=8.4.17;os_ver=iOS 13.7;mpos_ver=1.21.0;platform=ios;openid=CEF4FDE28AFFDE728D6E5FCB282BAB5C", "Host": "mqqapi.reader.qq.com", "Referer": "https://appservice.qq.com/1110657249/0.31.0/page-frame.html", "User-Agent": "QQ/8.4.17.638 CFNetwork/1128.0.1 Darwin/19.6.0", "mpversion": "0.31.0", "ywsession": "f9342p12l9zrq5o6x333tfl64o54d18z" }',
  '{"common":{"appid":1450024393,"areaid":5,"qq_ver":"8.4.10.4875","os_ver":"Android 8.1.0","mp_ver":"0.31.0","mpos_ver":"1.20.0","brand":"OPPO","model":"OPPO R11","screenWidth":360,"screenHeight":640,"windowWidth":360,"windowHeight":586,"openid":"CE7B250B8BBC5B04AC2C72DD14A306CC","guid":510140162,"session":"grr2lv2goivmrryx0inun6qeh4ksccst","scene":3001,"source":-1,"hasRedDot":"false","missions":-1,"caseID":-1},"dataList":[{"click1":"bookDetail_bottomBar_read_C","click2":"bookLib2_bookList_bookClick_C","route":"pages/book-read/index","refer":"pages/book-detail/index","options":{"bid":"28126660","cid":"1"},"dis":1607404956167,"ext6":27,"eventID":"bookRead_show_I","type":"shown","ccid":1,"bid":"28126660","bookStatus":0,"bookPay":1,"chapterStatus":0,"ext1":{"font":18,"bg":0,"pageMode":1},"from":"bookLib2_bookList_bookClick_C_1_28126660"}]}#https://mqqapi.reader.qq.com/mqq/addReadTimeWithBid?scene=3001&refer=-1&bid=32057056&readTime=9708&read_type=0&conttype=1&read_status=0&chapter_info=%5B%7B%221%22%3A%7B%22readTime%22%3A9708%2C%22pay_status%22%3A0%7D%7D%5D&sp=-1#{ "ywsession": "sniw9ztb5fakfc4xnp83vfl8ayjyikxp", "Cookie": "ywguid=510140162;ywkey=ywVhb2fWbaj7;platform=ios;channel=mqqmina;mpVersion=0.30.0;qq_ver=8.4.17;os_ver=iOS 13.7;mpos_ver=1.21.0;platform=ios;openid=CE7B250B8BBC5B04AC2C72DD14A306CC", "Connection": "keep-alive", "Content-Type": "application/json", "Accept": "*/*", "Host": "mqqapi.reader.qq.com", "User-Agent": "QQ/8.4.17.638 CFNetwork/1128.0.1 Darwin/19.6.0", "Referer": "https://appservice.qq.com/1110657249/0.30.0/page-frame.html", "Accept-Language": "zh-cn", "Accept-Encoding": "gzip, deflate, br", "mpversion": "0.30.0" }',
]


// 判断github action里面是否有京东ck
if (process.env.QD_COOKIE) {
  if (process.env.QD_COOKIE.indexOf('&') > -1) {
      console.log(`您的cookie选择的是用&隔开\n`)
      CookieQDs = process.env.QD_COOKIE.split('&');
  } else if (process.env.QD_COOKIE.indexOf('\n') > -1) {
      console.log(`您的cookie选择的是用换行隔开\n`)
      CookieQDs = process.env.QD_COOKIE.split('\n');
  } else if (process.env.QD_COOKIE.indexOf('\\n') > -1) {
      //环境变量兼容腾讯云和docker下\n会被转义成\\n
      console.log(`您的cookie选择的是用换行隔开\\n`)
      CookieQDs = process.env.QD_COOKIE.split('\\n');
  } else {
      CookieQDs = [process.env.QD_COOKIE];
  }
  CookieQDs = [...new Set(CookieQDs)]
  console.log(`\n====================共有${CookieQDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieQDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieQD' + index] = CookieQDs[i];
}