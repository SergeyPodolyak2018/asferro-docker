import { Component, OnInit } from '@angular/core';


export class DataService {

	hits = [
            {
                "_index": "index",
                "_type": "domain",
                "_id": "t2-j.com",
                "_score": null,
                "_routing": "23.82.98.168",
                "_parent": "23.82.98.168",
                "_source": {
                    "hoster": "Nobis Technology Group, LLC",
                    "alexa_rank": 21068193,
                    "suffix": "com",
                    "domain_name": "t2-j.com",
                    "domain_registrar": "Magnolia Domains, LLC",
                    "refresh_date": "2018-10-04 18:38:35",
                    "dns": [
                        "v1.dnsdun.com",
                        "v1.dnsdun.net"
                    ]
                },
                "sort": [
                    1538678315000
                ],
                "inner_hits": {
                    "ip": {
                        "hits": {
                            "total": 1,
                            "max_score": 1,
                            "hits": [
                                {
                                    "_index": "index",
                                    "_type": "ip",
                                    "_id": "23.82.98.168",
                                    "_score": 1,
                                    "_source": {
                                        "ip": "23.82.98.168",
                                        "route": "23.82.0.0/16, 23.83.0.0/18, 23.80.0.0/15",
                                        "hostname": "unknown",
                                        "refresh_date": "2018-10-04 18:38:35",
                                        "location": "US"
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            {
                "_index": "index",
                "_type": "domain",
                "_id": "taishin-hokyoukan.com",
                "_score": null,
                "_routing": "112.78.125.27",
                "_parent": "112.78.125.27",
                "_source": {
                    "hoster": "Asia Pacific Network Information Centre",
                    "alexa_rank": 21068247,
                    "suffix": "com",
                    "domain_name": "taishin-hokyoukan.com",
                    "domain_registrar": "GMO Internet, Inc",
                    "refresh_date": "2018-10-04 18:38:32",
                    "dns": [
                        "ns2.dns.ne.jp",
                        "ns1.dns.ne.jp"
                    ]
                },
                "sort": [
                    1538678312000
                ],
                "inner_hits": {
                    "ip": {
                        "hits": {
                            "total": 1,
                            "max_score": 1,
                            "hits": [
                                {
                                    "_index": "index",
                                    "_type": "ip",
                                    "_id": "112.78.125.27",
                                    "_score": 1,
                                    "_source": {
                                        "web_server": "Nginx",
                                        "refresh_date": "2018-10-04 18:38:32",
                                        "location": "unknown",
                                        "ip": "112.78.125.27",
                                        "route": "unknown",
                                        "hostname": "www527b.sakura.ne.jp",
                                        "os": "unknown"
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            {
                "_index": "index",
                "_type": "domain",
                "_id": "jrtomlin.com",
                "_score": null,
                "_routing": "66.96.149.32",
                "_parent": "66.96.149.32",
                "_source": {
                    "hoster": "The Endurance International Group, Inc.",
                    "alexa_rank": 21068273,
                    "suffix": "com",
                    "domain_name": "jrtomlin.com",
                    "domain_registrar": "Domain.com, LLC",
                    "refresh_date": "2018-10-04 18:38:32",
                    "dns": [
                        "ns1.ipage.com",
                        "ns2.ipage.com"
                    ]
                },
                "sort": [
                    1538678312000
                ],
                "inner_hits": {
                    "ip": {
                        "hits": {
                            "total": 1,
                            "max_score": 1,
                            "hits": [
                                {
                                    "_index": "index",
                                    "_type": "ip",
                                    "_id": "66.96.149.32",
                                    "_score": 1,
                                    "_source": {
                                        "hostname": "32.149.96.66.static.eigbox.net",
                                        "route": "66.96.128.0/18",
                                        "os": "Linux",
                                        "refresh_date": "2018-10-02 06:32:44",
                                        "web_server": "Squid",
                                        "ip": "66.96.149.32",
                                        "location": "US"
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            {
                "_index": "index",
                "_type": "domain",
                "_id": "prince-creationsb.fr",
                "_score": null,
                "_routing": "213.186.33.87",
                "_parent": "213.186.33.87",
                "_source": {
                    "hoster": "OVH SAS",
                    "alexa_rank": 21068284,
                    "suffix": "fr",
                    "domain_name": "prince-creationsb.fr",
                    "domain_registrar": "OVH",
                    "refresh_date": "2018-10-04 18:38:32",
                    "dns": [
                        "ns13.ovh.net",
                        "dns13.ovh.net"
                    ]
                },
                "sort": [
                    1538678312000
                ],
                "inner_hits": {
                    "ip": {
                        "hits": {
                            "total": 1,
                            "max_score": 1,
                            "hits": [
                                {
                                    "_index": "index",
                                    "_type": "ip",
                                    "_id": "213.186.33.87",
                                    "_score": 1,
                                    "_source": {
                                        "hostname": "cluster014.ovh.net",
                                        "route": "213.186.32.0/19",
                                        "os": "2-Series",
                                        "refresh_date": "2018-10-02 06:31:48",
                                        "web_server": "Nginx",
                                        "ip": "213.186.33.87",
                                        "location": "FR"
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            {
                "_index": "index",
                "_type": "domain",
                "_id": "pasticceriacampidoglio.it",
                "_score": null,
                "_routing": "94.23.27.155",
                "_parent": "94.23.27.155",
                "_source": {
                    "hoster": "unknown",
                    "alexa_rank": 21068261,
                    "refresh_date": "2018-10-04 18:38:32",
                    "suffix": "it",
                    "domain_name": "pasticceriacampidoglio.it",
                    "dns": [
                        "ns3.serverlet.it",
                        "ns1.serverlet.com",
                        "ns2.serverlet.co"
                    ],
                    "domain_registrar": "Shellrent s.r.l"
                },
                "sort": [
                    1538678312000
                ],
                "inner_hits": {
                    "ip": {
                        "hits": {
                            "total": 1,
                            "max_score": 1,
                            "hits": [
                                {
                                    "_index": "index",
                                    "_type": "ip",
                                    "_id": "94.23.27.155",
                                    "_score": 1,
                                    "_source": {
                                        "hostname": "web151.shellrent.com",
                                        "route": "94.23.0.0/16",
                                        "os": "unknown",
                                        "refresh_date": "2018-10-02 06:24:27",
                                        "web_server": "Apache",
                                        "ip": "94.23.27.155",
                                        "location": "FR"
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            {
                "_index": "index",
                "_type": "domain",
                "_id": "patriotsurvivalschool.com",
                "_score": null,
                "_routing": "192.254.185.7",
                "_parent": "192.254.185.7",
                "_source": {
                    "hoster": "WEBSITEWELCOME.COM",
                    "alexa_rank": 21068304,
                    "suffix": "com",
                    "domain_name": "patriotsurvivalschool.com",
                    "domain_registrar": "GoDaddy.com, LLC",
                    "refresh_date": "2018-10-04 18:38:32",
                    "dns": [
                        "ns890.hostgator.com",
                        "ns889.hostgator.com"
                    ]
                },
                "sort": [
                    1538678312000
                ],
                "inner_hits": {
                    "ip": {
                        "hits": {
                            "total": 1,
                            "max_score": 1,
                            "hits": [
                                {
                                    "_index": "index",
                                    "_type": "ip",
                                    "_id": "192.254.185.7",
                                    "_score": 1,
                                    "_source": {
                                        "web_server": "Nginx",
                                        "refresh_date": "2018-10-04 18:38:32",
                                        "location": "US",
                                        "ip": "192.254.185.7",
                                        "route": "192.254.128.0/17",
                                        "hostname": "unknown",
                                        "os": "unknown"
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            {
                "_index": "index",
                "_type": "domain",
                "_id": "josephaudi.com",
                "_score": null,
                "_routing": "198.185.165.80",
                "_parent": "198.185.165.80",
                "_source": {
                    "hoster": "CarsForSale.com",
                    "alexa_rank": 21068271,
                    "suffix": "com",
                    "domain_name": "josephaudi.com",
                    "domain_registrar": "GoDaddy.com, LLC",
                    "refresh_date": "2018-10-04 18:38:32",
                    "dns": [
                        "ns45.domaincontrol.com",
                        "ns46.domaincontrol.com"
                    ]
                },
                "sort": [
                    1538678312000
                ],
                "inner_hits": {
                    "ip": {
                        "hits": {
                            "total": 1,
                            "max_score": 1,
                            "hits": [
                                {
                                    "_index": "index",
                                    "_type": "ip",
                                    "_id": "198.185.165.80",
                                    "_score": 1,
                                    "_source": {
                                        "ip": "198.185.165.80",
                                        "route": "198.185.165.0/24",
                                        "hostname": "unknown",
                                        "refresh_date": "2018-10-04 18:38:32",
                                        "location": "US",
                                        "web_server": "Nginx"
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            {
                "_index": "index",
                "_type": "domain",
                "_id": "bukvum.ru",
                "_score": null,
                "_routing": "178.208.83.7",
                "_parent": "178.208.83.7",
                "_source": {
                    "hoster": "McHost.Ru",
                    "alexa_rank": 21068286,
                    "suffix": "ru",
                    "domain_name": "bukvum.ru",
                    "domain_registrar": "REGTIME-RU",
                    "refresh_date": "2018-10-04 18:38:32",
                    "dns": [
                        "ns4.mchost.ru",
                        "ns3.mchost.ru",
                        "ns2.mchost.ru",
                        "ns1.mchost.ru"
                    ]
                },
                "sort": [
                    1538678312000
                ],
                "inner_hits": {
                    "ip": {
                        "hits": {
                            "total": 1,
                            "max_score": 1,
                            "hits": [
                                {
                                    "_index": "index",
                                    "_type": "ip",
                                    "_id": "178.208.83.7",
                                    "_score": 1,
                                    "_source": {
                                        "web_server": "Nginx",
                                        "refresh_date": "2018-10-02 06:18:09",
                                        "location": "RU",
                                        "ip": "178.208.83.7",
                                        "route": "178.208.83.0/24",
                                        "hostname": "s3.h.mchost.ru",
                                        "os": "unknown"
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            {
                "_index": "index",
                "_type": "domain",
                "_id": "taishinhome.com",
                "_score": null,
                "_routing": "49.212.180.29",
                "_parent": "49.212.180.29",
                "_source": {
                    "fully_loaded": {
                        "bytes_in": 0,
                        "requests": 0,
                        "time": 0
                    },
                    "wappalyzer": {},
                    "context_tags": [
                        "concept",
                        "rights",
                        "house",
                        "lixil",
                        "home",
                        "model",
                        "voice",
                        "staff"
                    ],
                    "alexa_rank": 21068248,
                    "hoster": "Asia Pacific Network Information Centre",
                    "ip": "49.212.180.29",
                    "start_render": 0,
                    "domain_name": "taishinhome.com",
                    "domain_registrar": "GMO Internet, Inc",
                    "first_byte": 0,
                    "document_complete": {
                        "bytes_in": 0,
                        "requests": 0,
                        "time": 0
                    },
                    "speed_index": 0,
                    "refresh_date": "2018-10-04 18:38:32",
                    "dns": [
                        "ns2.dns.ne.jp",
                        "ns1.dns.ne.jp"
                    ],
                    "bytes_in": 0,
                    "vat_number": "unknown",
                    "additional_ip": [],
                    "suffix": "com"
                },
                "sort": [
                    1538678312000
                ],
                "inner_hits": {
                    "ip": {
                        "hits": {
                            "total": 1,
                            "max_score": 1,
                            "hits": [
                                {
                                    "_index": "index",
                                    "_type": "ip",
                                    "_id": "49.212.180.29",
                                    "_score": 1,
                                    "_source": {
                                        "web_server": "Nginx",
                                        "refresh_date": "2018-10-04 18:38:32",
                                        "location": "unknown",
                                        "ip": "49.212.180.29",
                                        "route": "unknown",
                                        "hostname": "www2619.sakura.ne.jp",
                                        "os": "FreeBSD"
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            {
                "_index": "index",
                "_type": "domain",
                "_id": "vitoris-butik.com.ua",
                "_score": null,
                "_routing": "5.39.10.93",
                "_parent": "5.39.10.93",
                "_source": {
                    "hoster": "Internet Invest Ltd. Pavel Blotsky",
                    "alexa_rank": 21068253,
                    "suffix": "com.ua",
                    "domain_name": "vitoris-butik.com.ua",
                    "domain_registrar": "unknown",
                    "refresh_date": "2018-10-04 18:38:32",
                    "dns": []
                },
                "sort": [
                    1538678312000
                ],
                "inner_hits": {
                    "ip": {
                        "hits": {
                            "total": 1,
                            "max_score": 1,
                            "hits": [
                                {
                                    "_index": "index",
                                    "_type": "ip",
                                    "_id": "5.39.10.93",
                                    "_score": 1,
                                    "_source": {
                                        "hostname": "park.dnshosting.org",
                                        "route": "5.39.0.0/17",
                                        "os": "unknown",
                                        "refresh_date": "2018-10-02 06:22:16",
                                        "web_server": "Nginx",
                                        "ip": "5.39.10.93",
                                        "location": "FR"
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        ]

        
}