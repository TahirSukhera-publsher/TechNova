// ================= DATA (Link ke jagah # lagaya hai) =================
const products = [
    { id: 1, name: "iPhone 14 Pro", price: 450000, icon: "📱", desc: "Titanium design", link: "https://www.daraz.pk/products/14-256gb-pta-i636666631-s2968854073.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253AIphone%252B14%253Bnid%253A636666631%253Bsrc%253ALazadaMainSrp%253Brn%253Aa0d2d425b99b46360e71ee5fce1b69f4%253Bregion%253Apk%253Bsku%253A636666631_PK%253Bprice%253A269999%253Bclient%253Adesktop%253Bsupplier_id%253A6005048400195%253Bbiz_source%253Ah5_external%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A20000395%253Bitem_id%253A636666631%253Bsku_id%253A2968854073%253Bshop_id%253A1177758%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=269999&priceCompare=skuId%3A2968854073%3Bsource%3Alazada-search-voucher%3Bsn%3Aa0d2d425b99b46360e71ee5fce1b69f4%3BoriginPrice%3A26999900%3BdisplayPrice%3A26999900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769693493789&ratingscore=&request_id=a0d2d425b99b46360e71ee5fce1b69f4&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.0&stock=1" },
    { id: 2, name: "Samsung S25 Ultra", price: 420000, icon: "📱", desc: "Galaxy AI powered", link: "https://www.daraz.pk/products/s25-12gb-8-gb-8-3nm-uhd-8k-67-1-mp-11-i671355824-s3169982891.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Asamsung%252Bs24%252Bultra%253Bnid%253A671355824%253Bsrc%253ALazadaMainSrp%253Brn%253A4a3e9e59b552766528e0f71e3ed31a14%253Bregion%253Apk%253Bsku%253A671355824_PK%253Bprice%253A435999%253Bclient%253Adesktop%253Bsupplier_id%253A1000333%253Bbiz_source%253Ah5_pdp%253Bslot%253A6%253Butlog_bucket_id%253A470687%253Basc_category_id%253A3%253Bitem_id%253A671355824%253Bsku_id%253A3169982891%253Bshop_id%253A112187%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=435999&priceCompare=skuId%3A3169982891%3Bsource%3Alazada-search-voucher%3Bsn%3A4a3e9e59b552766528e0f71e3ed31a14%3BoriginPrice%3A43599900%3BdisplayPrice%3A43599900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769693588650&ratingscore=&request_id=4a3e9e59b552766528e0f71e3ed31a14&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.6&stock=1" },
    { id: 3, name: "MacBook pro M2", price: 280000, icon: "💻", desc: "Super fast laptop", link: "https://www.daraz.pk/products/2023-m2-16-16gb-1tb-ssd-i591439269-s2729089873.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Amacbook%252Bair%252Bm2%253Bnid%253A591439269%253Bsrc%253ALazadaMainSrp%253Brn%253Ad9e97b0d326b511d32221da946c3569a%253Bregion%253Apk%253Bsku%253A591439269_PK%253Bprice%253A400000%253Bclient%253Adesktop%253Bsupplier_id%253A6005235040197%253Bbiz_source%253Ah5_pdp%253Bslot%253A5%253Butlog_bucket_id%253A470687%253Basc_category_id%253A7902%253Bitem_id%253A591439269%253Bsku_id%253A2729089873%253Bshop_id%253A1786126%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=4E%205&priceCompare=skuId%3A2729089873%3Bsource%3Alazada-search-voucher%3Bsn%3Ad9e97b0d326b511d32221da946c3569a%3BoriginPrice%3A40000000%3BdisplayPrice%3A40000000%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769693707590&ratingscore=&request_id=d9e97b0d326b511d32221da946c3569a&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.5&stock=1" },
    { id: 4, name: "iPad Pro 12.9", price: 180000, icon: "📟", desc: "Ultimate tablet", link: "https://www.daraz.pk/products/pro-2018-129-retina-display-64-storage-wifi-premium-performance-buy-now-on-daraz-daraz-tablets-tablets-6-months-warranty-i588214196-s2713183429.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Aipad%252Bpro%252B12.9%253Bnid%253A588214196%253Bsrc%253ALazadaMainSrp%253Brn%253Aa1881d8eef1ba60b79032a121d3ad34b%253Bregion%253Apk%253Bsku%253A588214196_PK%253Bprice%253A149999%253Bclient%253Adesktop%253Bsupplier_id%253A6005046354959%253Bbiz_source%253Ah5_external%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A20000410%253Bitem_id%253A588214196%253Bsku_id%253A2713183429%253Bshop_id%253A1149427%253BtemplateInfo%253A&freeshipping=1&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=149999&priceCompare=skuId%3A2713183429%3Bsource%3Alazada-search-voucher%3Bsn%3Aa1881d8eef1ba60b79032a121d3ad34b%3BoriginPrice%3A14999900%3BdisplayPrice%3A14999900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769693819427&ratingscore=&request_id=a1881d8eef1ba60b79032a121d3ad34b&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.0&stock=1" },
    { id: 5, name: "Sony Headphones", price: 65000, icon: "🎧", desc: "Noise cancelling", link: "https://www.daraz.pk/products/sho7205bk28-oneill-i577851818-s2664445683.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Asonic%252Bheadphone%253Bnid%253A577851818%253Bsrc%253ALazadaMainSrp%253Brn%253A1afa24f4de63a45bfe4ed383fc8dc20b%253Bregion%253Apk%253Bsku%253A577851818_PK%253Bprice%253A3999%253Bclient%253Adesktop%253Bsupplier_id%253A6005248320970%253Bbiz_source%253Ah5_external%253Bslot%253A7%253Butlog_bucket_id%253A470687%253Basc_category_id%253A156%253Bitem_id%253A577851818%253Bsku_id%253A2664445683%253Bshop_id%253A1827171%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=3999&priceCompare=skuId%3A2664445683%3Bsource%3Alazada-search-voucher%3Bsn%3A1afa24f4de63a45bfe4ed383fc8dc20b%3BoriginPrice%3A399900%3BdisplayPrice%3A399900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769693888136&ratingscore=&request_id=1afa24f4de63a45bfe4ed383fc8dc20b&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.7&stock=1" },
    { id: 6, name: "Apple Watch Ultra", price: 160000, icon: "⌚", desc: "Rugged watch", link: "https://www.daraz.pk/products/apple-watch-ultra-2-i530324716-s2494512523.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Aapple%252Bwatch%253Bnid%253A530324716%253Bsrc%253ALazadaMainSrp%253Brn%253Ac5209895d8e2a56757d1716198c65b6e%253Bregion%253Apk%253Bsku%253A530324716_PK%253Bprice%253A6999%253Bclient%253Adesktop%253Bsupplier_id%253A6005103680270%253Bbiz_source%253Ah5_pdp%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A20000416%253Bitem_id%253A530324716%253Bsku_id%253A2494512523%253Bshop_id%253A1446897%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Khyber%20Pakhtunkhwa&price=6999&priceCompare=skuId%3A2494512523%3Bsource%3Alazada-search-voucher%3Bsn%3Ac5209895d8e2a56757d1716198c65b6e%3BoriginPrice%3A699900%3BdisplayPrice%3A699900%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769693966744&ratingscore=&request_id=c5209895d8e2a56757d1716198c65b6e&review=&sale=2&search=1&source=search&spm=a2a0e.searchlist.list.0&stock=1" },
    { id: 7, name: "Canon Camera", price: 150000, icon: "📷", desc: "Pro DSLR", link: "https://www.daraz.pk/products/canon-250d-dslr-camera-with-18-55mm-lens-4k-video-i806949483-s3703579882.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Acanon%252Bcamera%253Bnid%253A806949483%253Bsrc%253ALazadaMainSrp%253Brn%253A5e90cfe92c738617714e5ff60ddcb978%253Bregion%253Apk%253Bsku%253A806949483_PK%253Bprice%253A169999%253Bclient%253Adesktop%253Bsupplier_id%253A6005434016347%253Bbiz_source%253Ah5_pdp%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A5883%253Bitem_id%253A806949483%253Bsku_id%253A3703579882%253Bshop_id%253A2204435%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=169999&priceCompare=skuId%3A3703579882%3Bsource%3Alazada-search-voucher%3Bsn%3A5e90cfe92c738617714e5ff60ddcb978%3BoriginPrice%3A16999900%3BdisplayPrice%3A16999900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769694074896&ratingscore=&request_id=5e90cfe92c738617714e5ff60ddcb978&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.0&stock=1" },
    { id: 8, name: "Google pixle 10Pro", price: 250000, icon: "📱", desc: "Action camera", link: "https://www.daraz.pk/products/9-xl-16gb256gb-pta-i943514301-s4003411764.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Agoogle%252Bpixel%252B10%252Bpro%253Bnid%253A943514301%253Bsrc%253ALazadaMainSrp%253Brn%253Abf170a8155718a329a8f115299c7487f%253Bregion%253Apk%253Bsku%253A943514301_PK%253Bprice%253A249999%253Bclient%253Adesktop%253Bsupplier_id%253A6005014515062%253Bbiz_source%253Ah5_external%253Bslot%253A2%253Butlog_bucket_id%253A470687%253Basc_category_id%253A20000395%253Bitem_id%253A943514301%253Bsku_id%253A4003411764%253Bshop_id%253A703343%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=249999&priceCompare=skuId%3A4003411764%3Bsource%3Alazada-search-voucher%3Bsn%3Abf170a8155718a329a8f115299c7487f%3BoriginPrice%3A24999900%3BdisplayPrice%3A24999900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769694282773&ratingscore=&request_id=bf170a8155718a329a8f115299c7487f&review=&sale=1&search=1&source=search&spm=a2a0e.searchlist.list.2&stock=1" },
    { id: 9, name: "PlayStation 5", price: 150000, icon: "🎮", desc: "Next-gen console", link: "https://www.daraz.pk/products/ps5-5-i658784562-s3107984103.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Apalystation%252B5%253Bnid%253A658784562%253Bsrc%253ALazadaMainSrp%253Brn%253A52668d90e08ede9760561c2e74d561c3%253Bregion%253Apk%253Bsku%253A658784562_PK%253Bprice%253A265000%253Bclient%253Adesktop%253Bsupplier_id%253A6005392496348%253Bbiz_source%253Ah5_pdp%253Bslot%253A8%253Butlog_bucket_id%253A470687%253Basc_category_id%253A10002914%253Bitem_id%253A658784562%253Bsku_id%253A3107984103%253Bshop_id%253A2102805%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=2.65E%205&priceCompare=skuId%3A3107984103%3Bsource%3Alazada-search-voucher%3Bsn%3A52668d90e08ede9760561c2e74d561c3%3BoriginPrice%3A26500000%3BdisplayPrice%3A26500000%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769694399065&ratingscore=&request_id=52668d90e08ede9760561c2e74d561c3&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.8&stock=1" },
    { id: 10, name: "Nintendo Switch", price: 55000, icon: "🕹️", desc: "Gaming on go", link: "https://www.daraz.pk/products/nintendo-switch-oled-model-w-neon-red-neon-blue-joy-con-i617892300-s2883336094.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253ANintendo%252BSwitch%253Bnid%253A617892300%253Bsrc%253ALazadaMainSrp%253Brn%253A27749a120f66ebafad34bc9bd83e7b0f%253Bregion%253Apk%253Bsku%253A617892300_PK%253Bprice%253A97999%253Bclient%253Adesktop%253Bsupplier_id%253A6005022204503%253Bbiz_source%253Ah5_external%253Bslot%253A2%253Butlog_bucket_id%253A470687%253Basc_category_id%253A10002924%253Bitem_id%253A617892300%253Bsku_id%253A2883336094%253Bshop_id%253A840259%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=97999&priceCompare=skuId%3A2883336094%3Bsource%3Alazada-search-voucher%3Bsn%3A27749a120f66ebafad34bc9bd83e7b0f%3BoriginPrice%3A9799900%3BdisplayPrice%3A9799900%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769694494189&ratingscore=&request_id=27749a120f66ebafad34bc9bd83e7b0f&review=&sale=1&search=1&source=search&spm=a2a0e.searchlist.list.2&stock=1" },
    { id: 11, name: "DJI Drone", price: 95000, icon: "🚁", desc: "4K Camera drone", link: "https://www.daraz.pk/products/hd-2mp-i418060543-s2023557807.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253ADJI%252BDrone%253Bnid%253A418060543%253Bsrc%253ALazadaMainSrp%253Brn%253A2a1c2f0ada8a8b9f7a43e2be0c73838d%253Bregion%253Apk%253Bsku%253A418060543_PK%253Bprice%253A22500%253Bclient%253Adesktop%253Bsupplier_id%253A6005029338868%253Bbiz_source%253Ah5_external%253Bslot%253A25%253Butlog_bucket_id%253A470687%253Basc_category_id%253A9353%253Bitem_id%253A418060543%253Bsku_id%253A2023557807%253Bshop_id%253A931132%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=2.25E%204&priceCompare=skuId%3A2023557807%3Bsource%3Alazada-search-voucher%3Bsn%3A2a1c2f0ada8a8b9f7a43e2be0c73838d%3BoriginPrice%3A2250000%3BdisplayPrice%3A2250000%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769694568193&ratingscore=&request_id=2a1c2f0ada8a8b9f7a43e2be0c73838d&review=0&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.25&stock=1" },
    { id: 12, name: "Logitech Keyboard", price: 28000, icon: "⌨️", desc: "Wireless keyboard", link: "https://www.daraz.pk/products/-i882185828-s3905605456.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253ALogitech%252BKeyboard%253Bnid%253A882185828%253Bsrc%253ALazadaMainSrp%253Brn%253A877aa1ddce3e9270df39d61bbf693577%253Bregion%253Apk%253Bsku%253A882185828_PK%253Bprice%253A1400%253Bclient%253Adesktop%253Bsupplier_id%253A6005361440234%253Bbiz_source%253Ah5_external%253Bslot%253A13%253Butlog_bucket_id%253A470687%253Basc_category_id%253A7846%253Bitem_id%253A882185828%253Bsku_id%253A3905605456%253Bshop_id%253A2025550%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=1.4E%203&priceCompare=skuId%3A3905605456%3Bsource%3Alazada-search-voucher%3Bsn%3A877aa1ddce3e9270df39d61bbf693577%3BoriginPrice%3A140000%3BdisplayPrice%3A140000%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769694642780&ratingscore=&request_id=877aa1ddce3e9270df39d61bbf693577&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.13&stock=1" },
    { id: 13, name: "Samsung Monitor", price: 60000, icon: "🖥️", desc: "49 inch screen", link: "https://www.daraz.pk/products/lc27rg50fqmxue-27-240hz-i506201932-s2414143249.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253ASamsung%252BMonitor%253Bnid%253A506201932%253Bsrc%253ALazadaMainSrp%253Brn%253Aee49f7bcd47cad380e68297051d9f291%253Bregion%253Apk%253Bsku%253A506201932_PK%253Bprice%253A95000%253Bclient%253Adesktop%253Bsupplier_id%253A6005051070747%253Bbiz_source%253Ah5_external%253Bslot%253A2%253Butlog_bucket_id%253A470687%253Basc_category_id%253A20000187%253Bitem_id%253A506201932%253Bsku_id%253A2414143249%253Bshop_id%253A1215982%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=9.5E%204&priceCompare=skuId%3A2414143249%3Bsource%3Alazada-search-voucher%3Bsn%3Aee49f7bcd47cad380e68297051d9f291%3BoriginPrice%3A9500000%3BdisplayPrice%3A9500000%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769694739754&ratingscore=&request_id=ee49f7bcd47cad380e68297051d9f291&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.2&stock=1" },
    { id: 14, name: "Apple TV 4K", price: 45000, icon: "📺", desc: "Cinema experience", link: "https://www.daraz.pk/products/hy300-pro-a10-p30-hy320-k300-hcs-350-max-android-111213-1080p-30000-hour-play-i911086233-s4013937714.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253AApple%252BTV%252B4K%253Bnid%253A911086233%253Bsrc%253ALazadaMainSrp%253Brn%253A46bca4c1d423815c7c1c4fc816073c53%253Bregion%253Apk%253Bsku%253A911086233_PK%253Bprice%253A15449%253Bclient%253Adesktop%253Bsupplier_id%253A6005188576400%253Bbiz_source%253Ah5_external%253Bslot%253A2%253Butlog_bucket_id%253A470687%253Basc_category_id%253A194%253Bitem_id%253A911086233%253Bsku_id%253A4013937714%253Bshop_id%253A1662648%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=15449&priceCompare=skuId%3A4013937714%3Bsource%3Alazada-search-voucher%3Bsn%3A46bca4c1d423815c7c1c4fc816073c53%3BoriginPrice%3A1544900%3BdisplayPrice%3A1544900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769694824962&ratingscore=4.5&request_id=46bca4c1d423815c7c1c4fc816073c53&review=34&sale=85&search=1&source=search&spm=a2a0e.searchlist.list.2&stock=1" },
    { id: 15, name: "Kindle Reader", price: 35000, icon: "📚", desc: "E-ink display", link: "https://www.daraz.pk/products/dell-original-chromebook-3180-6th-generation-windows-11-installed-116-inches-full-hd-display-4-to-6-hours-battery-4gb-ram-128gb-ssd-storage-with-free-charger-i579017213-s2670188713.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253AKindle%252BReader%253Bnid%253A579017213%253Bsrc%253ALazadaMainSrp%253Brn%253Acd690a92f1a79865f8fb3ed78d402e3e%253Bregion%253Apk%253Bsku%253A579017213_PK%253Bprice%253A15500%253Bclient%253Adesktop%253Bsupplier_id%253A6005170400289%253Bbiz_source%253Ah5_external%253Bslot%253A14%253Butlog_bucket_id%253A470687%253Basc_category_id%253A7%253Bitem_id%253A579017213%253Bsku_id%253A2670188713%253Bshop_id%253A1600388%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=1.55E%204&priceCompare=skuId%3A2670188713%3Bsource%3Alazada-search-voucher%3Bsn%3Acd690a92f1a79865f8fb3ed78d402e3e%3BoriginPrice%3A1550000%3BdisplayPrice%3A1550000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769694879144&ratingscore=5.0&request_id=cd690a92f1a79865f8fb3ed78d402e3e&review=3&sale=5&search=1&source=search&spm=a2a0e.searchlist.list.14&stock=1" },
    { id: 16, name: "Bose Speaker", price: 45000, icon: "🔊", desc: "Waterproof speaker", link: "https://www.daraz.pk/products/sbs-503-bash-10-i896522435-s3933270992.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253ABose%252BSpeaker%253Bnid%253A896522435%253Bsrc%253ALazadaMainSrp%253Brn%253A3641017f2ec697b18ccc38adfcd878b3%253Bregion%253Apk%253Bsku%253A896522435_PK%253Bprice%253A2500%253Bclient%253Adesktop%253Bsupplier_id%253A6005234656212%253Bbiz_source%253Ah5_external%253Bslot%253A7%253Butlog_bucket_id%253A470687%253Basc_category_id%253A5700%253Bitem_id%253A896522435%253Bsku_id%253A3933270992%253Bshop_id%253A1785459%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=2.5E%203&priceCompare=skuId%3A3933270992%3Bsource%3Alazada-search-voucher%3Bsn%3A3641017f2ec697b18ccc38adfcd878b3%3BoriginPrice%3A250000%3BdisplayPrice%3A250000%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769694932152&ratingscore=&request_id=3641017f2ec697b18ccc38adfcd878b3&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.7&stock=1" },
    { id: 17, name: "Razer Mouse", price: 18000, icon: "🖱️", desc: "Gaming mouse", link: "https://www.daraz.pk/products/-i894486636-s3930472719.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253ARazer%252BMouse%253Bnid%253A894486636%253Bsrc%253ALazadaMainSrp%253Brn%253A98f16a299359fb0d3f37667b409024c3%253Bregion%253Apk%253Bsku%253A894486636_PK%253Bprice%253A7499%253Bclient%253Adesktop%253Bsupplier_id%253A6005248656449%253Bbiz_source%253Ah5_external%253Bslot%253A8%253Butlog_bucket_id%253A470687%253Basc_category_id%253A20000405%253Bitem_id%253A894486636%253Bsku_id%253A3930472719%253Bshop_id%253A1826594%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=7499&priceCompare=skuId%3A3930472719%3Bsource%3Alazada-search-voucher%3Bsn%3A98f16a299359fb0d3f37667b409024c3%3BoriginPrice%3A749900%3BdisplayPrice%3A749900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769694983370&ratingscore=&request_id=98f16a299359fb0d3f37667b409024c3&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.8&stock=1" },
    { id: 18, name: "Samsung SSD 1TB", price: 15000, icon: "💾", desc: "Portable drive", link: "https://www.daraz.pk/products/samsung-990-pro-ssd-1tb-2tb-4tb-with-heatsink-m2-2280-pci-express-gen-40-x4-upto-7450mbs-for-ps5-gaming-pc-video-editing-heavy-graphics-nvme-20-v7-v-nand-3bit-mlc-i412698772-s1970163187.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253ASamsung%252BSSD%252B1TB%253Bnid%253A412698772%253Bsrc%253ALazadaMainSrp%253Brn%253A770b2d80403ce59de477387242590a36%253Bregion%253Apk%253Bsku%253A412698772_PK%253Bprice%253A74500%253Bclient%253Adesktop%253Bsupplier_id%253A1027676%253Bbiz_source%253Ah5_external%253Bslot%253A7%253Butlog_bucket_id%253A470687%253Basc_category_id%253A10002892%253Bitem_id%253A412698772%253Bsku_id%253A1970163187%253Bshop_id%253A139396%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=7.45E%204&priceCompare=skuId%3A1970163187%3Bsource%3Alazada-search-voucher%3Bsn%3A770b2d80403ce59de477387242590a36%3BoriginPrice%3A7450000%3BdisplayPrice%3A7450000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769695086638&ratingscore=5.0&request_id=770b2d80403ce59de477387242590a36&review=1&sale=11&search=1&source=search&spm=a2a0e.searchlist.list.7&stock=1" },
    { id: 19, name: "Anker PowerBank", price: 8000, icon: "🔋", desc: "20000 mAh", link: "https://www.daraz.pk/products/225-usb-c-a1647-20000mah-20000-usb-c-a1647-225-mah-usb-c-20000mah-i913173619-s3957499637.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253AAnker%252BPowerBank%253Bnid%253A913173619%253Bsrc%253ALazadaMainSrp%253Brn%253A35be720bc5dd4055733507f77914c702%253Bregion%253Apk%253Bsku%253A913173619_PK%253Bprice%253A14297%253Bclient%253Adesktop%253Bsupplier_id%253A6005469392928%253Bbiz_source%253Ah5_external%253Bslot%253A15%253Butlog_bucket_id%253A470687%253Basc_category_id%253A9562%253Bitem_id%253A913173619%253Bsku_id%253A3957499637%253Bshop_id%253A2282769%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=14297&priceCompare=skuId%3A3957499637%3Bsource%3Alazada-search-voucher%3Bsn%3A35be720bc5dd4055733507f77914c702%3BoriginPrice%3A1429700%3BdisplayPrice%3A1429700%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769695136812&ratingscore=&request_id=35be720bc5dd4055733507f77914c702&review=&sale=1&search=1&source=search&spm=a2a0e.searchlist.list.15&stock=1" },
    { id: 20, name: "Google Pixel 8 Pro", price: 180000, icon: "📱", desc: "AI Camera", link: "https://www.daraz.pk/products/8-12-128-256-i927462482-s3984535451.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253AGoogle%252BPixel%252B8%252BPro%253Bnid%253A927462482%253Bsrc%253ALazadaMainSrp%253Brn%253A00f34f021d9f6a7c034eff5e8d50e8f6%253Bregion%253Apk%253Bsku%253A927462482_PK%253Bprice%253A149999%253Bclient%253Adesktop%253Bsupplier_id%253A6005071509006%253Bbiz_source%253Ah5_external%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A3%253Bitem_id%253A927462482%253Bsku_id%253A3984535451%253Bshop_id%253A1377865%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=149999&priceCompare=skuId%3A3984535451%3Bsource%3Alazada-search-voucher%3Bsn%3A00f34f021d9f6a7c034eff5e8d50e8f6%3BoriginPrice%3A14999900%3BdisplayPrice%3A14999900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769695174680&ratingscore=&request_id=00f34f021d9f6a7c034eff5e8d50e8f6&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.0&stock=1" },
    { id: 21, name: "Huawei MatePad", price: 90000, icon: "📱", desc: "Productivity tablet", link: "https://www.daraz.pk/products/3-96-100-2-16-4800mah-i927391059-s3984360926.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253AHuawei%252BMatePad%253Bnid%253A927391059%253Bsrc%253ALazadaMainSrp%253Brn%253Ae8c55f51e698d194f810b986037e2183%253Bregion%253Apk%253Bsku%253A927391059_PK%253Bprice%253A15499%253Bclient%253Adesktop%253Bsupplier_id%253A6005060406707%253Bbiz_source%253Ah5_external%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A7%253Bitem_id%253A927391059%253Bsku_id%253A3984360926%253Bshop_id%253A1325859%253BtemplateInfo%253A&freeshipping=1&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=15499&priceCompare=skuId%3A3984360926%3Bsource%3Alazada-search-voucher%3Bsn%3Ae8c55f51e698d194f810b986037e2183%3BoriginPrice%3A1549900%3BdisplayPrice%3A1549900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769695219032&ratingscore=&request_id=e8c55f51e698d194f810b986037e2183&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.0&stock=1" },
    { id: 22, name: "Philips Hue Bulb", price: 120, icon: "💡", desc: "Smart color bulb", link: "https://www.daraz.pk/products/philips-hue-a60-e27-white-ambiance-pack-of-12-bulbs-1-bridge-v21-i313227749-s1918290022.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253APhilips%252BHue%252BBulb%253Bnid%253A313227749%253Bsrc%253ALazadaMainSrp%253Brn%253A50f834fdcf2986e1dce6a36c6a84fa2f%253Bregion%253Apk%253Bsku%253A313227749_PK%253Bprice%253A50000%253Bclient%253Adesktop%253Bsupplier_id%253A6005013630343%253Bbiz_source%253Ah5_external%253Bslot%253A1%253Butlog_bucket_id%253A470687%253Basc_category_id%253A10000643%253Bitem_id%253A313227749%253Bsku_id%253A1918290022%253Bshop_id%253A603892%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=5E%204&priceCompare=skuId%3A1918290022%3Bsource%3Alazada-search-voucher%3Bsn%3A50f834fdcf2986e1dce6a36c6a84fa2f%3BoriginPrice%3A5000000%3BdisplayPrice%3A5000000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769695252894&ratingscore=&request_id=50f834fdcf2986e1dce6a36c6a84fa2f&review=&sale=1&search=1&source=search&spm=a2a0e.searchlist.list.1&stock=1" },
    { id: 23, name: "Meta Quest 3", price: 140000, icon: "👓", desc: "VR Headset", link: "https://www.daraz.pk/products/3-128-gb-i437301962-s2156250933.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253AMeta%252BQuest%252B3%253Bnid%253A437301962%253Bsrc%253ALazadaMainSrp%253Brn%253A1a268b84e8da9f21335eff5e447b8526%253Bregion%253Apk%253Bsku%253A437301962_PK%253Bprice%253A173999%253Bclient%253Adesktop%253Bsupplier_id%253A6005014845124%253Bbiz_source%253Ah5_external%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A9797%253Bitem_id%253A437301962%253Bsku_id%253A2156250933%253Bshop_id%253A725794%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=173999&priceCompare=skuId%3A2156250933%3Bsource%3Alazada-search-voucher%3Bsn%3A1a268b84e8da9f21335eff5e447b8526%3BoriginPrice%3A17399900%3BdisplayPrice%3A17399900%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769695333385&ratingscore=&request_id=1a268b84e8da9f21335eff5e447b8526&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.0&stock=1" },
    { id: 24, name: "JBL Speaker", price: 25000, icon: "🔉", desc: "Powerful bass", link: "https://www.daraz.pk/products/rgb-i947959838-s4012663854.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253AJBL%252BSpeaker%253Bnid%253A947959838%253Bsrc%253ALazadaMainSrp%253Brn%253Ac578dcbee3ec424c1a27896c220aa767%253Bregion%253Apk%253Bsku%253A947959838_PK%253Bprice%253A1100%253Bclient%253Adesktop%253Bsupplier_id%253A6005287312458%253Bbiz_source%253Ah5_external%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A7528%253Bitem_id%253A947959838%253Bsku_id%253A4012663854%253Bshop_id%253A1899045%253BtemplateInfo%253A&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Punjab&price=1.1E%203&priceCompare=skuId%3A4012663854%3Bsource%3Alazada-search-voucher%3Bsn%3Ac578dcbee3ec424c1a27896c220aa767%3BoriginPrice%3A110000%3BdisplayPrice%3A110000%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1769695378803&ratingscore=&request_id=c578dcbee3ec424c1a27896c220aa767&review=&sale=0&search=1&source=search&spm=a2a0e.searchlist.list.0&stock=1" }
];


// VARIABLES
let cart = [];
const container = document.getElementById('product-container');
const cartCount = document.getElementById('cart-count');
const modal = document.getElementById('order-modal');

// ================= 1. PRELOADER =================
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
});

// ================= 2. SMART CURSOR =================
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

// Check: Sirf Touch-Non Device (Desktop) par chalao
if (!window.matchMedia("(pointer: coarse)").matches) {
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot moves instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline moves with smooth lag (Optimized)
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 100, fill: "forwards" });
    });
    
    // Link/Button par Hover Effect
    document.querySelectorAll('a, button, .cart-trigger').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(0, 243, 255, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });
}

// ================= 3. RENDER PRODUCTS + 3D TILT =================
function renderProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        // 3D Tilt Events
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);

        card.innerHTML = `
            <span class="product-icon">${product.icon}</span>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
            <span class="product-price">Rs. ${product.price.toLocaleString()}</span>
            
            <button class="btn-card" onclick="addToCart(${product.id})">Add to Cart</button>
            <a href="${product.link}" class="daraz-btn" target="_blank">Buy on Daraz</a>
        `;
        container.appendChild(card);
    });
}

// Tilt Logic
function handleTilt(e) {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;
    
    // Calculate Rotation (Limit to 20deg)
    const rotateX = (mouseY / (window.innerHeight / 2)) * -20; 
    const rotateY = (mouseX / (window.innerWidth / 2)) * 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
}

// ================= 4. CART LOGIC =================
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const item = cart.find(i => i.id === id);
    
    if(item) {
        item.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    updateCount();
    alert(`${product.name} added!`); // Simple feedback
}

function updateCount() {
    cartCount.innerText = cart.reduce((sum, item) => sum + item.qty, 0);
}

function toggleCart() {
    if(modal.style.display === 'flex') {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    } else {
        renderCart();
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
    }
}

// Close on outside click
window.onclick = function(event) {
    if (event.target == modal) toggleCart();
}

function renderCart() {
    const list = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('grand-total');
    list.innerHTML = '';
    
    if(cart.length === 0) {
        list.innerHTML = '<p class="empty-msg">Your cart is empty!</p>';
        totalEl.innerText = 'Rs. 0';
        return;
    }
    
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        list.innerHTML += `
            <div class="cart-item">
                <span>${item.name} (x${item.qty})</span>
                <span>Rs. ${(item.price * item.qty).toLocaleString()}</span>
            </div>
        `;
    });
    totalEl.innerText = `Rs. ${total.toLocaleString()}`;
}

function placeOrder() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    
    if(cart.length === 0) return alert("Cart is empty!");
    if(!name || !phone) return alert("Please fill details!");
    
    alert(`✅ Order Confirmed for ${name}! We will call you.`);
    cart = []; updateCount(); toggleCart();
    
    document.getElementById('cust-name').value = '';
    document.getElementById('cust-phone').value = '';
}

// INIT
renderProducts();