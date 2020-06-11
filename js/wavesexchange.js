'use strict';

//  ---------------------------------------------------------------------------

const Exchange = require ('./base/Exchange');
const { ArgumentsRequired } = require ('./base/errors');

//  ---------------------------------------------------------------------------

module.exports = class wavesexchange extends Exchange {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'wavesexchange',
            'name': 'Waves.Exchange',
            'countries': ['CH'], // Switzerland
            'rateLimit': 500,
            'certified': true,
            'pro': false,
            'has': {
                'fetchOrderBook': true,
                'fetchOrders': true,
                'fetchOpenOrders': true,
                'fetchClosedOrders': true,
                'fetchMyTrades': true,
                'fetchTrades': true,
                'fetchBalance': true,
                'createOrder': true,
                'cancelOrder': true,
            },
            'timeframes': {
                '1m': '1m',
                '5m': '5m',
                '15m': '15m',
                '30m': '30m',
                '1h': '1h',
                '2h': '2h',
                '3h': '3h',
                '4h': '4h',
                '6h': '6h',
                '12h': '12h',
                '1d': '1d',
                '1w': '1w',
                '1M': '1M',
            },
            'urls': {
                'api': {
                    'matcher': 'http://matcher.waves.exchange',
                    'node': 'https://nodes.wavesnodes.com',
                    'public': 'https://api.wavesplatform.com/v0',
                    'private': 'https://api.waves.exchange/v1',
                    'forward': 'https://waves.exchange/api/v1/forward/matcher',
                },
                'doc': 'https://docs.waves.exchange',
            },
            'api': {
                'matcher': {
                    'get': [
                        'matcher',
                        'matcher/settings',
                        'matcher/settings/rates',
                        'matcher/balance/reserved/{publicKey}',
                        'matcher/debug/allSnashotOffsets',
                        'matcher/debug/currentOffset',
                        'matcher/debug/lastOffset',
                        'matcher/debug/oldestSnapshotOffset',
                        'matcher/orderbook',
                        'matcher/orderbook/{amountAsset}/{priceAsset}',
                        'matcher/orderbook/{baseId}/{quoteId}/publicKey/{publicKey}',
                        'matcher/orderbook/{baseId}/{quoteId}/{orderId}',
                        'matcher/orderbook/{baseId}/{quoteId}/info',
                        'matcher/orderbook/{baseId}/{quoteId}/status',
                        'matcher/orderbook/{baseId}/{quoteId}/tradeableBalance/{address}',
                        'matcher/orderbook/{publicKey}',
                        'matcher/orderbook/{publicKey}/{orderId}',
                        'matcher/orders/{address}',
                        'matcher/orders/{address}/{orderId}',
                        'matcher/transactions/{orderId}',
                    ],
                    'post': [
                        'matcher/orderbook',
                        'matcher/orderbook/market',
                        'matcher/orderbook/cancel',
                        'matcher/orderbook/{baseId}/{quoteId}/cancel',
                        'matcher/debug/saveSnapshots',
                        'matcher/orders/{address}/cancel',
                        'matcher/orders/cancel/{orderId}',
                    ],
                    'delete': [
                        'matcher/orderbook/{baseId}/{quoteId}',
                        'matcher/settings/rates/{assetId}',
                    ],
                    'put': [
                        'matcher/settings/rates/{assetId}',
                    ],
                },
                'node': {
                    'get': [
                        'addresses',
                        'addresses/balance/{address}',
                        'addresses/balance/{address}/{confirmations}',
                        'addresses/balance/details/{address}',
                        'addresses/data/{address}',
                        'addresses/data/{address}/{key}',
                        'addresses/effectiveBalance/{address}',
                        'addresses/effectiveBalance/{address}/{confirmations}',
                        'addresses/publicKey/{publicKey}',
                        'addresses/scriptInfo/{address}',
                        'addresses/scriptInfo/{address}/meta',
                        'addresses/seed/{address}',
                        'addresses/seq/{from}/{to}',
                        'addresses/validate/{address}',
                        'alias/by-address/{address}',
                        'alias/by-alias/{alias}',
                        'assets/{assetId}/distribution/{height}/{limit}',
                        'assets/balance/{address}',
                        'assets/balance/{address}/{assetId}',
                        'assets/details/{assetId}',
                        'assets/nft/{address}/limit/{limit}',
                        'blockchain/rewards',
                        'blockchain/rewards/height',
                        'blocks/address/{address}/{from}/{to}/',
                        'blocks/at/{height}',
                        'blocks/delay/{signature}/{blockNum}',
                        'blocks/first',
                        'blocks/headers/last',
                        'blocks/headers/seq/{from}/{to}',
                        'blocks/height',
                        'blocks/height/{signature}',
                        'blocks/last',
                        'blocks/seq/{from}/{to}',
                        'blocks/signature/{signature}',
                        'consensus/algo',
                        'consensus/basetarget',
                        'consensus/basetarget/{blockId}',
                        'consensus/{generatingbalance}/address',
                        'consensus/generationsignature',
                        'consensus/generationsignature/{blockId}',
                        'debug/balances/history/{address}',
                        'debug/blocks/{howMany}',
                        'debug/configInfo',
                        'debug/historyInfo',
                        'debug/info',
                        'debug/minerInfo',
                        'debug/portfolios/{address}',
                        'debug/state',
                        'debug/stateChanges/address/{address}',
                        'debug/stateChanges/info/{id}',
                        'debug/stateWaves/{height}',
                        'leasing/active/{address}',
                        'node/state',
                        'node/version',
                        'peers/all',
                        'peers/blacklisted',
                        'peers/connected',
                        'peers/suspended',
                        'transactions/address/{address}/limit/{limit}',
                        'transactions/info/{id}',
                        'transactions/status',
                        'transactions/unconfirmed',
                        'transactions/unconfirmed/info/{id}',
                        'transactions/unconfirmed/size',
                        'utils/seed',
                        'utils/seed/{length}',
                        'utils/time',
                        'wallet/seed',
                    ],
                    'post': [
                        'addresses',
                        'addresses/data/{address}',
                        'addresses/sign/{address}',
                        'addresses/signText/{address}',
                        'addresses/verify/{address}',
                        'addresses/verifyText/{address}',
                        'debug/blacklist',
                        'debug/print',
                        'debug/rollback',
                        'debug/validate',
                        'node/stop',
                        'peers/clearblacklist',
                        'peers/connect',
                        'transactions/broadcast',
                        'transactions/calculateFee',
                        'tranasctions/sign',
                        'transactions/sign/{signerAddress}',
                        'tranasctions/status',
                        'utils/hash/fast',
                        'utils/hash/secure',
                        'utils/script/compileCode',
                        'utils/script/compileWithImports',
                        'utils/script/decompile',
                        'utils/script/estimate',
                        'utils/sign/{privateKey}',
                        'utils/transactionsSerialize',
                    ],
                    'delete': [
                        'addresses/{address}',
                        'debug/rollback-to/{signature}',
                    ],
                },
                'public': {
                    'get': [
                        'candles/{baseId}/{quoteId}',
                        'transactions/exchange',
                    ],
                },
                'private': {
                    'get': [
                        'deposit/addresses/{code}',
                    ],
                    'post': [
                        'oauth2/token',
                    ],
                },
                'forward': {
                    'get': [
                        'matcher/orders/{address}',  // can't get the orders endpoint to work with the matcher api
                        'matcher/orders/{address}/{orderId}',
                    ],
                },
            },
            'commonCurrencies': {
                'WBTC': 'BTC',
                'WETH': 'ETH',
            },
            'options': {
                'allowedCandles': 1440,
                'accessToken': undefined,
                'matcherPublicKey': undefined,
                'quotes': undefined,
                'createOrderDefaultExpiry': 2419200000, // 60 * 60 * 24 * 28 * 1000
                'wavesAddress': undefined,
            },
            'requiresEddsa': true,
        });
    }

    async getQuotes () {
        let quotes = this.safeValue (this.options, 'quotes');
        if (quotes) {
            return quotes;
        } else {
            // currencies can have any name because you can create you own token
            // as a result someone can create a fake token called BTC
            // we use this mapping to determine the real tokens
            // https://docs.waves.exchange/en/waves-matcher/matcher-api#asset-pair
            const response = await this.matcherGetMatcherSettings ();
            // {
            //   "orderVersions": [
            //     1,
            //     2,
            //     3
            //   ],
            //   "success": true,
            //   "matcherPublicKey": "9cpfKN9suPNvfeUNphzxXMjcnn974eme8ZhWUjaktzU5",
            //   "orderFee": {
            //     "dynamic": {
            //       "baseFee": 300000,
            //       "rates": {
            //         "34N9YcEETLWn93qYQ64EsP1x89tSruJU44RrEMSXXEPJ": 1.22639597,
            //         "62LyMjcr2DtiyF5yVXFhoQ2q414VPPJXjsNYp72SuDCH": 0.00989643,
            //         "HZk1mbfuJpmxU1Fs4AX5MWLVYtctsNcg6e2C6VKqK8zk": 0.0395674,
            //         "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS": 0.00018814,
            //         "4LHHvYGNKJUg5hj65aGD5vgScvCBmLpdRFtjokvCjSL8": 26.19721262,
            //         "474jTeYx2r2Va35794tCScAXWJG9hU2HcgxzMowaZUnu": 0.00752978,
            //         "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p": 1.84575,
            //         "B3uGHFRpSUuGEDWjqB9LWWxafQj8VTvpMucEyoxzws5H": 0.02330273,
            //         "zMFqXuoyrn5w17PFurTqxB7GsS71fp9dfk6XFwxbPCy": 0.00721412,
            //         "5WvPKSJXzVE2orvbkJ8wsQmmQKqTv9sGBPksV4adViw3": 0.02659103,
            //         "WAVES": 1,
            //         "BrjUWjndUanm5VsJkbUip8VRYy6LWJePtxya3FNv4TQa": 0.03433583
            //       }
            //     }
            //   },
            //   "networkByte": 87,
            //   "matcherVersion": "2.1.3.5",
            //   "status": "SimpleResponse",
            //   "priceAssets": [
            //     "Ft8X1v1LTa1ABafufpaCWyVj8KkaxUWE6xBhW6sNFJck",
            //     "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p",
            //     "34N9YcEETLWn93qYQ64EsP1x89tSruJU44RrEMSXXEPJ",
            //     "Gtb1WRznfchDnTh37ezoDTJ4wcoKaRsKqKjJjy7nm2zU",
            //     "2mX5DzVKWrAJw8iwdJnV2qtoeVG9h5nTDpTqC1wb1WEN",
            //     "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
            //     "WAVES",
            //     "474jTeYx2r2Va35794tCScAXWJG9hU2HcgxzMowaZUnu",
            //     "zMFqXuoyrn5w17PFurTqxB7GsS71fp9dfk6XFwxbPCy",
            //     "62LyMjcr2DtiyF5yVXFhoQ2q414VPPJXjsNYp72SuDCH",
            //     "HZk1mbfuJpmxU1Fs4AX5MWLVYtctsNcg6e2C6VKqK8zk",
            //     "B3uGHFRpSUuGEDWjqB9LWWxafQj8VTvpMucEyoxzws5H",
            //     "5WvPKSJXzVE2orvbkJ8wsQmmQKqTv9sGBPksV4adViw3",
            //     "BrjUWjndUanm5VsJkbUip8VRYy6LWJePtxya3FNv4TQa",
            //     "4LHHvYGNKJUg5hj65aGD5vgScvCBmLpdRFtjokvCjSL8"
            //   ]
            // }
            quotes = {};
            const priceAssets = this.safeValue (response, 'priceAssets');
            for (let i = 0; i < priceAssets.length; i++) {
                quotes[priceAssets[i]] = true;
            }
            this.options['quotes'] = quotes;
            return quotes;
        }
    }

    async fetchMarkets (params = {}) {
        const quotes = await this.getQuotes ();
        const response = await this.matcherGetMatcherOrderbook (params);
        const markets = this.safeValue (response, 'markets');
        const result = {};
        for (let i = 0; i < markets.length; i++) {
            const entry = markets[i];
            const baseId = this.safeString (entry, 'amountAssetName');
            const quoteId = this.safeString (entry, 'priceAssetName');
            const base = this.safeCurrencyCode (baseId);
            const quote = this.safeCurrencyCode (quoteId);
            const baseAsset = this.safeString (entry, 'amountAsset');
            const quoteAsset = this.safeString (entry, 'priceAsset');
            const id = baseAsset + '/' + quoteAsset;
            const symbol = base + '/' + quote;
            const amountPrecision = this.safeValue (entry, 'amountAssetInfo');
            const pricePricision = this.safeValue (entry, 'priceAssetInfo');
            const precision = {
                'amount': this.safeInteger (amountPrecision, 'decimals'),
                'price': this.safeInteger (pricePricision, 'decimals'),
            };
            if (symbol in result) {
                // determine which symbol is "fake news"
                const entry = result[symbol];
                const entryCount = (entry['baseId'] in quotes) + (entry['quoteId'] in quotes);
                const myCount = (baseId in quotes) + (quoteId in quotes);
                if (entryCount > myCount) {
                    continue;
                }
            }
            result[symbol] = {
                'symbol': symbol,
                'id': id,
                'base': base,
                'quote': quote,
                'baseId': baseAsset,
                'quoteId': quoteAsset,
                'info': entry,
                'precision': precision,
            };
        }
        return result;
    }

    async fetchOrderBook (symbol, limit = undefined, params = {}) {
        await this.loadMarkets ();
        const market = this.market (symbol);
        const request = this.extend ({
            'amountAsset': market['baseId'],
            'priceAsset': market['quoteId'],
        }, params);
        if (limit !== undefined) {
            request['depth'] = limit;
        }
        const response = await this.matcherGetMatcherOrderbookAmountAssetPriceAsset (request);
        const timestamp = this.safeInteger (response, 'timestamp');
        const bids = this.parseOrderBookSide (this.safeValue (response, 'bids'), market);
        const asks = this.parseOrderBookSide (this.safeValue (response, 'asks'), market);
        return {
            'bids': bids,
            'asks': asks,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'nonce': undefined,
        };
    }

    parseOrderBookSide (bookSide, market = undefined) {
        const precision = market['precision'];
        const amountPrecision = Math.pow (10, precision['amount']);
        const pricePrecision = Math.pow (10, precision['price']);
        const result = [];
        for (let i = 0; i < bookSide.length; i++) {
            const entry = bookSide[i];
            const price = this.safeInteger (entry, 'price', 0) / pricePrecision;
            const amount = this.safeInteger (entry, 'amount', 0) / amountPrecision;
            result.push ([price, amount]);
        }
        return result;
    }

    sign (path, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        const query = this.omit (params, this.extractParams (path));
        path = this.implodeParams (path, params);
        let url = this.urls['api'][api] + '/' + path;
        const queryString = this.urlencode (query);
        if ((api === 'private') || (api === 'forward')) {
            headers = {};
            const accessToken = this.safeString (this.options, 'accessToken');
            if (accessToken) {
                headers['Authorization'] = 'Bearer ' + accessToken;
            }
            headers['content-type'] = 'application/x-www-form-urlencoded';
            url += '?' + queryString;
        } else if (api === 'matcher') {
            if (method === 'POST') {
                headers = {
                    'content-type': 'application/json',
                };
                body = this.json (query);
            } else {
                headers = query;
            }
        } else {
            if (method === 'POST') {
                headers = {
                    'content-type': 'application/json',
                };
                body = this.json (query);
            } else {
                headers = {
                    'content-type': 'application/x-www-form-urlencoded',
                };
                url += '?' + queryString;
            }
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }

    async getAccessToken () {
        if (!this.safeString (this.options, 'accessToken')) {
            const prefix = 'ffffff01';
            const expiresDelta = 60 * 60 * 24 * 7;
            const seconds = this.seconds () + expiresDelta;
            const clientId = 'waves.exchange';
            const message = 'W:' + clientId + ':' + seconds;
            const messageHex = this.binaryToBase16 (this.stringToBinary (message));
            const payload = prefix + messageHex;
            const hexKey = this.binaryToBase16 (this.base58ToBinary (this.secret));
            const signature = this.eddsa (payload, hexKey, 'ed25519');
            const request = {
                'grant_type': 'password',
                'scope': 'general',
                'username': this.apiKey,
                'password': seconds + ':' + signature,
                'client_id': clientId,
            };
            const response = await this.privatePostOauth2Token (request);
            // { access_token: 'eyJhbGciOXJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWciOiJiaTZiMVhMQlo0M1Q4QmRTSlVSejJBZGlQdVlpaFZQYVhhVjc4ZGVIOEpTM3M3NUdSeEU1VkZVOE5LRUI0UXViNkFHaUhpVFpuZ3pzcnhXdExUclRvZTgiLCJhIjoiM1A4VnpMU2EyM0VXNUNWY2tIYlY3ZDVCb043NWZGMWhoRkgiLCJuYiI6IlciLCJ1c2VyX25hbWUiOiJBSFhuOG5CQTRTZkxRRjdoTFFpU24xNmt4eWVoaml6QkdXMVRkcm1TWjFnRiIsInNjb3BlIjpbImdlbmVyYWwiXSwibHQiOjYwNDc5OSwicGsiOiJBSFhuOG5CQTRTZkxRRjdoTFFpU24xNmt4eWVoaml6QkdXMVRkcm1TWjFnRiIsImV4cCI6MTU5MTk3NTA1NywiZXhwMCI6MTU5MTk3NTA1NywianRpIjoiN2JhOTUxMTMtOGI2MS00NjEzLTlkZmYtNTEwYTc0NjlkOWI5IiwiY2lkIjoid2F2ZXMuZXhjaGFuZ2UifQ.B-XwexBnUAzbWknVN68RKT0ZP5w6Qk1SKJ8usL3OIwDEzCUUX9PjW-5TQHmiCRcA4oft8lqXEiCwEoNfsblCo_jTpRo518a1vZkIbHQk0-13Dm1K5ewGxfxAwBk0g49odcbKdjl64TN1yM_PO1VtLVuiTeZP-XF-S42Uj-7fcO-r7AulyQLuTE0uo-Qdep8HDCk47rduZwtJOmhFbCCnSgnLYvKWy3CVTeldsR77qxUY-vy8q9McqeP7Id-_MWnsob8vWXpkeJxaEsw1Fke1dxApJaJam09VU8EB3ZJWpkT7V8PdafIrQGeexx3jhKKxo7rRb4hDV8kfpVoCgkvFan',
            //   token_type: 'bearer',
            //   refresh_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWciOiJiaTZiMVhMQlo0M1Q4QmRTSlVSejJBZGlQdVlpaFZQYVhhVjc4ZGVIOEpTM3M3NUdSeEU1VkZVOE5LRUI0UXViNkFHaUhpVFpuZ3pzcnhXdExUclRvZTgiLCJhIjoiM1A4VnpMU2EyM0VXNUNWY2tIYlY3ZDVCb043NWZGMWhoRkgiLCJuYiI6IlciLCJ1c2VyX25hbWUiOiJBSFhuOG5CQTRTZkxRRjdoTFFpU24xNmt4eWVoaml6QkdXMVRkcm1TWjFnRiIsInNjb3BlIjpbImdlbmVyYWwiXSwiYXRpIjoiN2JhOTUxMTMtOGI2MS00NjEzLTlkZmYtNTEwYTc0NjlkXWI5IiwibHQiOjYwNDc5OSwicGsiOiJBSFhuOG5CQTRTZkxRRjdoTFFpU24xNmt4eWVoaml6QkdXMVRkcm1TWjFnRiIsImV4cCI6MTU5Mzk2MjI1OCwiZXhwMCI6MTU5MTk3NTA1NywianRpIjoiM2MzZWRlMTktNjI5My00MTNlLWJmMWUtZTRlZDZlYzUzZTgzIiwiY2lkIjoid2F2ZXMuZXhjaGFuZ2UifQ.gD1Qj0jfqayfZpBvNY0t3ccMyK5hdbT7dY-_5L6LxwV0Knan4ndEtvygxlTOczmJUKtnA4T1r5GBFgNMZTvtViKZIbqZNysEg2OY8UxwDaF4VPeGJLg_QXEnn8wBeBQdyMafh9UQdwD2ci7x-saM4tOAGmncAygfTDxy80201gwDhfAkAGerb9kL00oWzSJScldxu--pNLDBUEHZt52MSEel10HGrzvZkkvvSh67vcQo5TOGb5KG6nh65UdJCwr41AVz4fbQPP-N2Nkxqy0TE_bqVzZxExXgvcS8TS0Z82T3ijJa_ct7B9wblpylBnvmyj3VycUzufD6uy8MUGq32D',
            //   expires_in: 604798,
            //   scope: 'general' }
            this.options['accessToken'] = this.safeString (response, 'access_token');
            return this.options['accessToken'];
        }
    }

    async fetchOHLCV (symbol, timeframe = '1m', since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets ();
        const market = this.market (symbol);
        const request = {
            'baseId': market['baseId'],
            'quoteId': market['quoteId'],
            'interval': this.timeframes[timeframe],
        };
        if (since !== undefined) {
            request['timeStart'] = since;
        } else {
            const allowedCandles = this.safeInteger (this.options, 'allowedCandles', 1440);
            const timeframeUnix = this.parseTimeframe (timeframe) * 1000;
            const currentTime = Math.floor (this.milliseconds () / timeframeUnix) * timeframeUnix;
            const delta = (allowedCandles - 1) * timeframeUnix;
            request['timeStart'] = currentTime - delta;
        }
        const response = await this.publicGetCandlesBaseIdQuoteId (this.extend (request, params));
        // {
        //   "__type": "list",
        //   "data": [
        //     {
        //       "__type": "candle",
        //       "data": {
        //         "time": "2020-06-09T14:47:00.000Z",
        //         "open": 0.0250385,
        //         "close": 0.0250385,
        //         "high": 0.0250385,
        //         "low": 0.0250385,
        //         "volume": 0.01033012,
        //         "quoteVolume": 0.00025865,
        //         "weightedAveragePrice": 0.0250385,
        //         "maxHeight": 2099399,
        //         "txsCount": 5,
        //         "timeClose": "2020-06-09T14:47:59.999Z"
        //       }
        //     }, …
        //   ]
        // }
        const result = this.parseOHLCVs (this.safeValue (response, 'data', []), market, timeframe, since, limit);
        let lastClose = undefined;
        for (let i = result.length - 1; i >= 0; i--) {
            const entry = result[i];
            const open = entry[1];
            if (open === undefined) {
                entry[1] = lastClose;
                entry[2] = lastClose;
                entry[3] = lastClose;
                entry[4] = lastClose;
                result[i] = entry;
            }
            lastClose = entry[4];
        }
        return result;
    }

    parseOHLCV (ohlcv, market = undefined, timeframe = '1m', since = undefined, limit = undefined) {
        // { __type: 'candle',
        //   data:
        //    { time: '2020-06-05T20:46:00.000Z',
        //      open: 240.573975,
        //      close: 240.573975,
        //      high: 240.573975,
        //      low: 240.573975,
        //      volume: 0.01278413,
        //      quoteVolume: 3.075528,
        //      weightedAveragePrice: 240.573975,
        //      maxHeight: 2093895,
        //      txsCount: 5,
        //      timeClose: '2020-06-05T20:46:59.999Z' } }
        const data = this.safeValue (ohlcv, 'data');
        const timestamp = this.safeString (data, 'time');
        const open = this.safeFloat (data, 'open');
        const close = this.safeFloat (data, 'close');
        const high = this.safeFloat (data, 'high');
        const low = this.safeFloat (data, 'low');
        const volume = this.safeFloat (data, 'volume', 0);
        return [ this.parse8601 (timestamp), open, high, low, close, volume ]
    }

    async fetchDepositAddress (code, params = {}) {
        await this.getAccessToken ();
        const request = this.extend ({
            'code': code,
        }, params);
        return await this.privateGetDepositAddressesCode (request);
    }

    async fetchTransactions (code = undefined, since = undefined, limit = undefined, params = {}) {
        if (code === undefined) {
            throw new ArgumentsRequired (this.id + ' code is required for fetchTransactions');
        }
        await this.loadMarkets ();
    }

    async getMatcherPublicKey () {
        // this method returns a single string
        const matcherPublicKey = this.safeString (this.safeString (this.options, 'matcherPublicKey'));
        if (matcherPublicKey) {
            return matcherPublicKey;
        } else {
            this.options['matcherPublicKey'] = this.unjson (await this.matcherGetMatcher ());
            return this.options['matcherPublicKey'];
        }
    }

    getAssetBytes (currencyId) {
        if (currencyId === 'WAVES') {
            return this.numberToBE (0, 1);
        } else {
            return this.binaryConcat (this.numberToBE (1, 1), this.base58ToBinary (currencyId));
        }
    }

    getAssetId (currencyId) {
        if (currencyId === 'WAVES') {
            return '';
        }
        return currencyId;
    }

    priceToPrecision (symbol, price) {
        return this.toWei (price, this.markets[symbol]['precision']['price']);
    }

    amountToPrecision (symbol, amount) {
        return this.toWei (amount, this.markets[symbol]['precision']['amount']);
    }

    currencyFromPrecision (currency, amount) {
        return this.fromWei (amount, this.currencies[currency]['precision']);
    }

    getDefaultExpiry () {
        const expiry = this.safeInteger (this.options, 'createOrderDefaultExpiry');
        if (expiry) {
            return expiry;
        } else {
            this.options['createOrderDefaultExpiry'] = 60 * 60 * 24 * 28 * 1000;
            return this.options['createOrderDefaultExpiry'];
        }
    }

    async createOrder (symbol, type, side, amount, price = undefined, params = {}) {
        await this.loadMarkets ();
        const market = this.market (symbol);
        const matcherPublicKey = await this.getMatcherPublicKey ();
        const amountAsset = this.getAssetId (market['baseId']);
        const priceAsset = this.getAssetId (market['quoteId']);
        amount = parseInt (this.amountToPrecision (symbol, amount));
        price = parseInt (this.priceToPrecision (symbol, price));
        const orderType = side === 'buy' ? 0 : 1;
        const timestamp = this.milliseconds ();
        const expiration = timestamp + this.getDefaultExpiry ();
        const matcherFee = 300000;
        const byteArray = [
            this.numberToBE (3, 1),
            this.base58ToBinary (this.apiKey),
            this.base58ToBinary (matcherPublicKey),
            this.getAssetBytes (market['baseId']),
            this.getAssetBytes (market['quoteId']),
            this.numberToBE (orderType, 1),
            this.numberToBE (price, 8),
            this.numberToBE (amount, 8),
            this.numberToBE (timestamp, 8),
            this.numberToBE (expiration, 8),
            this.numberToBE (matcherFee, 8),
            this.numberToBE (0, 1),
        ];
        const binary = this.binaryConcatArray (byteArray);
        const signature = this.eddsa (this.binaryToBase16 (binary), this.binaryToBase16 (this.base58ToBinary (this.secret)), 'ed25519');
        const assetPair = {
            'amountAsset': amountAsset,
            'priceAsset': priceAsset
        };
        const body = {
            'senderPublicKey': this.apiKey,
            'matcherPublicKey': matcherPublicKey,
            'assetPair': assetPair,
            'orderType': side,
            'price': price,
            'amount': amount,
            'timestamp': timestamp,
            'expiration': expiration,
            'matcherFee': matcherFee,
            'signature': signature,
            'version': 3
        };
        const response = await this.matcherPostMatcherOrderbook (body);
        // { success: true,
        //   message:
        //    { version: 3,
        //      id: 'Do7cDJMf2MJuFyorvxNNuzS42MXSGGEq1r1hGDn1PHiS',
        //      sender: '3P8VzLSa23EW5CVckHbV7d5BoN75fF1hhFH',
        //      senderPublicKey: 'AHXn8nBA4SfLQF7hLQiSn16kxyehjizBGW1TdrmSZ1gF',
        //      matcherPublicKey: '9cpfKN9suPNvfeUNphzxXMjcnn974eme8ZhWUjaktzU5',
        //      assetPair:
        //       { amountAsset: null,
        //         priceAsset: '8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS' },
        //      orderType: 'sell',
        //      amount: 1,
        //      price: 100000000,
        //      timestamp: 1591593117995,
        //      expiration: 1594012317995,
        //      matcherFee: 300000,
        //      matcherFeeAssetId: null,
        //      signature: '2EG8zgE6Ze1X5EYA8DbfFiPXAtC7NniYBAMFbJUbzwVbHmmCKHornQfS5F32NwkHF4623KWq1U6K126h4TTqyVq',
        //      proofs:
        //       [ '2EG8zgE6Ze1X5EYA8DbfFiPXAtC7NniYBAMFbJUbzwVbHmmCKHornQfS5F32NwkHF4623KWq1U6K126h4TTqyVq' ] },
        //   status: 'OrderAccepted' }
        const value = this.safeValue (response, 'message');
        return this.parseOrder (value, market);
    }

    async cancelOrder (id, symbol = undefined, params = {}) {
        await this.loadMarkets ();
        if (symbol === undefined) {
            throw new ArgumentsRequired (this.id + ' symbol is required for cancelOrder');
        }
        const market = this.market (symbol);
        const byteArray = [
            this.base58ToBinary (this.apiKey),
            this.base58ToBinary (id),
        ];
        const binary = this.binaryConcatArray (byteArray);
        const hexSecret = this.binaryToBase16 (this.base58ToBinary (this.secret));
        const signature = this.eddsa (this.binaryToBase16 (binary), hexSecret, 'ed25519');
        const request = {
            'sender': this.apiKey,
            'orderId': id,
            'signature': signature,
            'baseId': market['baseId'],
            'quoteId': market['quoteId'],
        };
        const response = await this.matcherPostMatcherOrderbookBaseIdQuoteIdCancel (this.extend (request, params));
        // { orderId: 'Do7cDJMf2MJuFyorvxNNuzS42MXSGGEq1r1hGDn1PHiS',
        //   success: true,
        //   status: 'OrderCanceled' }
        const returnedId = this.safeString (response, 'orderId');
        return {
            'info': response,
            'id': returnedId,
            'clientOrderId': undefined,
            'timestamp': undefined,
            'datetime': undefined,
            'lastTradeTimestamp': undefined,
            'symbol': symbol,
            'type': undefined,
            'side': undefined,
            'price': undefined,
            'amount': undefined,
            'cost': undefined,
            'average': undefined,
            'filled': undefined,
            'remaining': undefined,
            'status': undefined,
            'fee': undefined,
            'trades': undefined,
        };
    }

    async fetchOrders (symbol = undefined, since = undefined, limit = undefined, params = {}) {
        if (symbol === undefined) {
            throw new ArgumentsRequired (this.id + ' fetchOrders requires symbol argument');
        }
        await this.loadMarkets ();
        const market = this.market (symbol);
        const timestamp = this.milliseconds ();
        const byteArray = [
            this.base58ToBinary (this.apiKey),
            this.numberToBE (timestamp, 8),
        ];
        const binary = this.binaryConcatArray (byteArray);
        const hexSecret = this.binaryToBase16 (this.base58ToBinary (this.secret));
        const signature = this.eddsa (this.binaryToBase16 (binary), hexSecret, 'ed25519');
        const request = {
            'Accept': 'application/json',
            'Timestamp': timestamp,
            'Signature': signature,
            'publicKey': this.apiKey,
            'baseId': market['baseId'],
            'quoteId': market['quoteId'],
        };
        const response = await this.matcherGetMatcherOrderbookBaseIdQuoteIdPublicKeyPublicKey (this.extend (request, params));
        // [ { id: '3KicDeWayY2mdrRoYdCkP3gUAoUZUNT1AA6GAtWuPLfa',
        //     type: 'sell',
        //     orderType: 'limit',
        //     amount: 1,
        //     fee: 300000,
        //     price: 100000000,
        //     timestamp: 1591651254076,
        //     filled: 0,
        //     filledFee: 0,
        //     feeAsset: 'WAVES',
        //     status: 'Accepted',
        //     assetPair:
        //      { amountAsset: null,
        //        priceAsset: '8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS' },
        //     avgWeighedPrice: 0 }, ... ]
        return this.parseOrders (response, market, since, limit);
    }

    async fetchOpenOrders (symbol = undefined, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets ();
        await this.getAccessToken ();
        const market = this.market (symbol);
        const address = await this.getWavesAddress ();
        const request = {
            'address': address,
            'activeOnly': true,
        };
        const response = await this.forwardGetMatcherOrdersAddress (request);
        return this.parseOrders (response, market, since, limit);
    }

    async fetchClosedOrders (symbol = undefined, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets ();
        await this.getAccessToken ();
        const market = this.market (symbol);
        const address = await this.getWavesAddress ();
        const request = {
            'address': address,
            'closedOnly': true,
        };
        const response = await this.forwardGetMatcherOrdersAddress (request);
        return this.parseOrders (response, market, since, limit);
    }

    parseOrderStatus (status) {
        const statuses = {
            'Cancelled': 'canceled',
            'Accepted': 'open',
            'Filled': 'closed',
        };
        return this.safeString (statuses, status, status);
    }

    getSymbolFromAssetPair (assetPair) {
        // a blank string or null can indicate WAVES
        const baseId = this.safeString (assetPair, 'amountAsset', 'WAVES');
        const quoteId = this.safeString (assetPair, 'priceAsset', 'WAVES');
        return this.safeCurrencyCode (baseId) + '/' + this.safeCurrencyCode (quoteId);
    }

    parseOrder (order, market = undefined) {
        const timestamp = this.safeInteger (order, 'timestamp');
        const side = this.safeString (order, 'type');
        const type = this.safeString (order, 'orderType');
        const id = this.safeString (order, 'id');
        let filled = this.safeString (order, 'filled');
        let price = this.safeString (order, 'price');
        let amount = this.safeString (order, 'amount');
        const assetPair = this.safeValue (order, 'assetPair');
        let symbol = undefined;
        if (assetPair !== undefined) {
            symbol = this.getSymbolFromAssetPair (assetPair);
        } else if (market !== undefined) {
            symbol = market['symbol'];
        }
        const priceCurrency = this.safeCurrencyCode (this.safeString (assetPair, 'priceAsset', 'WAVES'));
        const amountCurrency = this.safeCurrencyCode (this.safeString (assetPair, 'amountAsset', 'WAVES'));
        price = this.currencyFromPrecision (priceCurrency, price);
        amount = this.currencyFromPrecision (amountCurrency, amount);
        let cost = undefined;
        if ((price !== undefined) && (amount !== undefined)) {
            cost = price * amount;
        }
        filled = this.currencyFromPrecision (amountCurrency, filled);
        let remaining = undefined;
        if ((filled !== undefined) && (amount !== undefined)) {
            remaining = amount - filled;
        }
        const average = this.currencyFromPrecision (priceCurrency, this.safeString (order, 'avgWeighedPrice'));
        const status = this.parseOrderStatus (this.safeString (order, 'status'));
        const fee = {
            'currency': this.safeCurrencyCode (this.safeString (order, 'feeAsset')),
            'fee': this.safeString (order, 'filledFee'),
        };
        return {
            'info': order,
            'id': id,
            'clientOrderId': undefined,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'lastTradeTimestamp': undefined,
            'symbol': symbol,
            'type': type,
            'side': side,
            'price': price,
            'amount': amount,
            'cost': cost,
            'average': average,
            'filled': filled,
            'remaining': remaining,
            'status': status,
            'fee': fee,
            'trades': undefined,
        };
    }

    async getWavesAddress () {
        const cachedAddreess = this.safeString (this.options, 'wavesAddress');
        if (cachedAddreess === undefined) {
            const request = {
                'publicKey': this.apiKey,
            };
            const response = await this.nodeGetAddressesPublicKeyPublicKey (request);
            const address = this.safeString (response, 'address');
            this.options['wavesAddress'] = address;
            return this.options['wavesAddress'];
        } else {
            return cachedAddreess;
        }
    }

    async fetchBalance (params = {}) {
        // makes a lot of different requests to get all the data
        // in particular:
        // fetchMarkets, getWavesAddress,
        // getTotalBalance (doesn't include waves), getReservedBalance (doesn't include waves)
        // getReservedBalance (includes WAVES)
        // I couldn't find another way to get all the data
        await this.loadMarkets ();
        const wavesAddress = await this.getWavesAddress ();
        const request = {
            'address': wavesAddress,
        };
        const totalBalance = await this.nodeGetAssetsBalanceAddress (request);
        // {
        //   "address": "3P8VzLSa23EW5CVckHbV7d5BoN75fF1hhFH",
        //   "balances": [
        //     {
        //       "assetId": "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p",
        //       "balance": 1177200,
        //       "reissuable": false,
        //       "minSponsoredAssetFee": 7420,
        //       "sponsorBalance": 47492147189709,
        //       "quantity": 999999999775381400,
        //       "issueTransaction": {
        //         "senderPublicKey": "BRnVwSVctnV8pge5vRpsJdWnkjWEJspFb6QvrmZvu3Ht",
        //         "quantity": 1000000000000000000,
        //         "fee": 100400000,
        //         "description": "Neutrino USD",
        //         "type": 3,
        //         "version": 2,
        //         "reissuable": false,
        //         "script": null,
        //         "sender": "3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo",
        //         "feeAssetId": null,
        //         "chainId": 87,
        //         "proofs": [
        //           "3HNpbVkgP69NWSeb9hGYauiQDaXrRXh3tXFzNsGwsAAXnFrA29SYGbLtziW9JLpXEq7qW1uytv5Fnm5XTUMB2BxU"
        //         ],
        //         "assetId": "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p",
        //         "decimals": 6,
        //         "name": "USD-N",
        //         "id": "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p",
        //         "timestamp": 1574429393962
        //       }
        //     }
        //   ]
        // }
        const balances = this.safeValue (totalBalance, 'balances');
        const result = {};
        for (let i = 0; i < balances.length; i++) {
            const entry = balances[i];
            const currencyId = this.safeString (entry, 'assetId');
            const balance = this.safeFloat (entry, 'balance');
            const code = this.safeCurrencyCode (currencyId);
            result[code] = this.account ();
            result[code]['total'] = this.currencyFromPrecision (code, balance);
        }
        const timestamp = this.milliseconds ();
        const byteArray = [
            this.base58ToBinary (this.apiKey),
            this.numberToBE (timestamp, 8),
        ];
        const binary = this.binaryConcatArray (byteArray);
        const hexSecret = this.binaryToBase16 (this.base58ToBinary (this.secret));
        const signature = this.eddsa (this.binaryToBase16 (binary), hexSecret, 'ed25519');
        const matcherRequest = {
            'publicKey': this.apiKey,
            'signature': signature,
            'timestamp': timestamp,
        };
        const reservedBalance = await this.matcherGetMatcherBalanceReservedPublicKey (matcherRequest);
        // { WAVES: 200300000 }
        const reservedKeys = Object.keys (reservedBalance);
        for (let i = 0; i < reservedKeys.length; i++) {
            const currencyId = reservedKeys[i];
            const code = this.safeCurrencyCode (currencyId);
            if (!(code in result)) {
                result[code] = this.account ();
            }
            const amount = this.safeFloat (reservedBalance, currencyId);
            result[code]['used'] = this.currencyFromPrecision (code, amount);
        }
        const wavesRequest = {
            'address': wavesAddress,
        };
        const wavesTotal = await this.nodeGetAddressesBalanceAddress (wavesRequest);
        // {
        //   "address": "3P8VzLSa23EW5CVckHbV7d5BoN75fF1hhFH",
        //   "confirmations": 0,
        //   "balance": 909085978
        // }
        result['WAVES']['total'] = this.currencyFromPrecision ('WAVES', this.safeFloat (wavesTotal, 'balance'));
        const codes = Object.keys (result);
        for (let i = 0; i < codes.length; i++) {
            const code = codes[i];
            if (result[code]['used'] === undefined) {
                result[code]['used'] = 0.0;
            }
        }
        return this.parseBalance (result);
    }

    async fetchMyTrades (symbol, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets ();
        const market = this.market (symbol);
        const address = await this.getWavesAddress ();
        const request = {
            'sender': address,
            'amountAsset': market['baseId'],
            'priceAsset': market['quoteId'],
        };
        const response = await this.publicGetTransactionsExchange (request);
        const data = this.safeValue (response, 'data');
        return this.parseTrades (data, market, since, limit);
    }

    async fetchTrades (symbol, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets ();
        const market = this.market (symbol);
        const request = {
            'amountAsset': market['baseId'],
            'priceAsset': market['quoteId'],
        };
        const response = await this.publicGetTransactionsExchange (request);
        const data = this.safeValue (response, 'data');
        return this.parseTrades (data, market, since, limit);
    }

    parseTrade (trade, market = undefined) {
        // { __type: 'transaction',
        //   data:
        //    { id: 'HSdruioHqvYHeyn9hhyoHdRWPB2bFA8ujeCPZMK6992c',
        //      timestamp: '2020-06-09T19:34:51.897Z',
        //      height: 2099684,
        //      type: 7,
        //      version: 2,
        //      proofs:
        //       [ '26teDHERQgwjjHqEn4REcDotNG8M21xjou3X42XuDuCvrRkQo6aPyrswByH3UrkWG8v27ZAaVNzoxDg4teNcLtde' ],
        //      fee: 0.003,
        //      sender: '3PEjHv3JGjcWNpYEEkif2w8NXV4kbhnoGgu',
        //      senderPublicKey: '9cpfKN9suPNvfeUNphzxXMjcnn974eme8ZhWUjaktzU5',
        //      buyMatcherFee: 0.00299999,
        //      sellMatcherFee: 0.00299999,
        //      price: 0.00012003,
        //      amount: 60.80421562,
        //      order1:
        //       { id: 'CBRwP3ar4oMvvpUiGyfxc1syh41488SDi2GkrjuBDegv',
        //         senderPublicKey: 'DBXSHBz96NFsMu7xh4fi2eT9ZnyxefAHXsMxUayzgC6a',
        //         matcherPublicKey: '9cpfKN9suPNvfeUNphzxXMjcnn974eme8ZhWUjaktzU5',
        //         assetPair: [Object],
        //         orderType: 'buy',
        //         price: 0.00012003,
        //         sender: '3PJfFRgVuJ47UY4ckb74EGzEBzkHXtmG1LA',
        //         amount: 60.80424773,
        //         timestamp: '2020-06-09T19:34:51.885Z',
        //         expiration: '2020-06-10T12:31:31.885Z',
        //         matcherFee: 0.003,
        //         signature: '4cA3ZAb3XAEEXaFG7caqpto5TRbpR5PkhZpxoNQZ9ZReNvjuJQs5a3THnumv7rcqmVUiVtuHAgk2f67ANcqtKyJ8',
        //         matcherFeeAssetId: null },
        //      order2:
        //       { id: 'CHJSLQ6dfSPs6gu2mAegrMUcRiDEDqaj2GKfvptMjS3M',
        //         senderPublicKey: '3RUC4NGFZm9H8VJhSSjJyFLdiE42qNiUagDcZPwjgDf8',
        //         matcherPublicKey: '9cpfKN9suPNvfeUNphzxXMjcnn974eme8ZhWUjaktzU5',
        //         assetPair: [Object],
        //         orderType: 'sell',
        //         price: 0.00012003,
        //         sender: '3P9vKoQpMZtaSkHKpNh977YY9ZPzTuntLAq',
        //         amount: 60.80424773,
        //         timestamp: '2020-06-09T19:34:51.887Z',
        //         expiration: '2020-06-10T12:31:31.887Z',
        //         matcherFee: 0.003,
        //         signature: '3SFyrcqzou2ddZyNisnLYaGhLt5qRjKxH8Nw3s4T5U7CEKGX9DDo8dS27RgThPVGbYF1rYET1FwrWoQ2UFZ6SMTR',
        //         matcherFeeAssetId: null } } }
        const data = this.safeValue (trade, 'data');
        const datetime = this.safeString (data, 'timestamp');
        const timestamp = this.parse8601 (datetime);
        const id = this.safeString (data, 'id');
        const price = this.safeFloat (data, 'price');
        const amount = this.safeFloat (data, 'amount');
        const order1 = this.safeValue (data, 'order1');
        const order2 = this.safeValue (data, 'order2');
        let order = undefined;
        // order2 arrived after order1
        if (this.safeString (order1, 'senderPublicKey') === this.apiKey) {
            order = order1;
        } else {
            order = order2;
        }
        let symbol = undefined;
        const assetPair = this.safeValue (order, 'assetPair');
        if (assetPair !== undefined) {
            symbol = this.getSymbolFromAssetPair (assetPair);
        } else if (market !== undefined) {
            symbol = market['symbol'];
        }
        const side = this.safeString (order, 'orderType');
        const orderId = this.safeString (order, 'id');
        let cost = undefined;
        if ((price !== undefined) && (amount !== undefined)) {
            cost = price * amount;
        }
        const fee = {
            'cost': this.safeFloat (data, 'fee'),
            'currency': this.safeCurrencyCode (this.safeString (order, 'matcherFeeAssetId', 'WAVES')),
        };
        return {
            'info': trade,
            'timestamp': timestamp,
            'datetime': datetime,
            'symbol': symbol,
            'id': id,
            'order': orderId,
            'type': undefined,
            'side': side,
            'takerOrMaker': undefined,
            'price': price,
            'amount': amount,
            'cost': cost,
            'fee': fee,
        };
    }
};
