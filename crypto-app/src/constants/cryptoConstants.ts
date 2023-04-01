export const  cryptoConstants : iCryptoConstants[] = [
    {
        "id":"bitcoin",
        "rank":"1",
        "symbol":"BTC",
        "name":"Bitcoin",
        "supply":"19334100.0000000000000000",
        "maxSupply":"21000000.0000000000000000",
        "marketCapUsd":"550112592672.8919521030757900",
        "volumeUsd24Hr":"4872669287.7966603587208973",
        "priceUsd":"28452.9713135285300119",
        "changePercent24Hr":"0.4995424428042480",
        "vwap24Hr":"28496.2971111153806815",
        "explorer":"https://blockchain.info/"
},
    {
        "id":"ethereum",
        "rank":"2",
        "symbol":"ETH",
        "name":"Ethereum",
        "supply":"120457776.0000000000000000",
        "maxSupply":null,
        "marketCapUsd":"220280170491.2061557331936384",
        "volumeUsd24Hr":"3172118480.5744520811848906",
        "priceUsd":"1828.6919932110165784",
        "changePercent24Hr":"0.6190085073852714",
        "vwap24Hr":"1830.0000946530391852",
        "explorer":"https://etherscan.io/"
},
    {
        "id":"tether",
        "rank":"3",
        "symbol":"USDT",
        "name":"Tether",
        "supply":"79693860816.0085000000000000",
        "maxSupply":null,
        "marketCapUsd":"79865592940.6402384183425582",
        "volumeUsd24Hr":"9729759251.8463967536628763",
        "priceUsd":"1.0021548977910384",
        "changePercent24Hr":"0.0314292873327533",
        "vwap24Hr":"1.0011023660351067",
        "explorer":"https://www.omniexplorer.info/asset/31"
    },
    {
        "id":"binance-coin",
        "rank":"4",
        "symbol":"BNB",
        "name":"BNB",
        "supply":"166801148.0000000000000000",
        "maxSupply":"166801148.0000000000000000",
        "marketCapUsd":"52584828237.6082965355196688",
        "volumeUsd24Hr":"157623268.5022491089043838",
        "priceUsd":"315.2545942765831356",
        "changePercent24Hr":"-0.8491236136485422",
        "vwap24Hr":"317.0465904608490791",
        "explorer":"https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
    },
    {
        "id":"usd-coin",
        "rank":"5",
        "symbol":"USDC",
        "name":"USD Coin",
        "supply":"32527442703.5312080000000000",
        "maxSupply":null,
        "marketCapUsd":"32575032611.2772453095566545",
        "volumeUsd24Hr":"665520169.2774592295044997",
        "priceUsd":"1.0014630694512259",
        "changePercent24Hr":"-0.0393149892355543",
        "vwap24Hr":"1.0011712552737514",
        "explorer":"https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
]

export interface iCryptoConstants  {
        "id": string,
        "rank": string,
        "symbol": string,
        "name": string,
        "supply": string,
        "maxSupply":null | string,
        "marketCapUsd": string,
        "volumeUsd24Hr": string,
        "priceUsd": string,
        "changePercent24Hr": string,
        "vwap24Hr": string,
        "explorer": string
}