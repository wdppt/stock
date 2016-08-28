'use strict';

const userid = 'H123439169';
const password = 'boar540';

const kgie = {
  LOGIN_URL = '',
  QUERY_URL = 'https://webtrade.kgieworld.com.tw/ServicesWeb/StockTrade/QueryIPO',
  HEADERS = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-TW,zh;q=0.8,en-US;q=0.6,en;q=0.4',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Content-Length': 65,
    'Content-Type': 'application/json; charset=UTF-8',
    'Host': 'webtrade.kgieworld.com.tw',
    'Origin': 'https://webtrade.kgieworld.com.tw',
    'Referer': 'https://webtrade.kgieworld.com.tw/ServicesWeb/StockTrade/IPOOrder',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Saf
    'X-Requested-With': 'XMLHttpRequest',
  },
  LOGIN_DATA = '',
  QUERY_DATA = '{UserId: "' + userid + '", StockNo: "", APStatus: "1", OrderBy: "1"}',
}

module.exports.kgit = kgie;
