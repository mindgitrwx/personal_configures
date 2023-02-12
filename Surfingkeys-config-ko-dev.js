//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Korean Specific Surfing Keys config                                                          //
// Version - 1.0 - debug copy all tab urls                                                      //
// Korean specific surfing key config                                                           //
// Please copy this url to text box [load settings from:], and 'Save'                           //
// https:   raw.githubusercontent.com/mindgitrwx/gitconventions/master/SurfingKeys-config-ko.js //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


// ------------ for page moving -------------- (every time it would be returned zero when refreshed)
var namuPage    = 0;
    wikiPage    = 0;
    stackAnswer = 0;
    naverAnswer = 0;
    codeWrapper = 0;
    lineNum     = 0;

var linkCounter = 0;

// Properties list
api.Hints.numericHints           = false;
api.Hints.characters             = "asdfgqwertzxcvbyuiopmnhlk";  // without j for esc (TODO: jj for esc when hints mode)
api.Hints.scrollKeys             = "G";
settings.caseSensitive       = true;
settings.omnibarSuggestion   = true;
settings.defaultSearchEngine = 'L';                          // Google I'm Feeling Luckey
settings.nextLinkRegex       = /((forward|>>|next)+)/i;
settings.prevLinkRegex       = /((back|<<|prev(ious)?)+)/i;
////////////////////////////////
// api.unapi.map default key api.mapings  //
////////////////////////////////
api.unmap('<Ctrl-6>');
api.unmap('<Ctrl-p>');
api.unmap('<Ctrl-n>');
api.map(']', ']]');
api.map('[', '[[');

// My default vim key binding: https://gist.github.com/millermedeiros/1262085
//--Like Nerd Tree--- TODO: FIX IT LIKE VERTICALLY
api.map(',nt', 'T');
api.map(',q', 'x');
api.mapkey(',s', 'opne new tab and split', function () {
    RUNTIME("newWindow");
});
//TODO: making spell check ,ts

// FIXME: it doesn't work
// iapi.map('<Ctrl-[>', "<Esc>");
// api.vmap('<Ctrl-[>', "<Esc>");

api.removeSearchAlias('g');
api.removeSearchAlias('w');
api.removeSearchAlias('s');

//////////////////////////
// for url heml extract //
//////////////////////////

// var request = require('request'),
//     cheerio = require('cheerio');

// request(url, function (err, res, html) {
//     if (!err) {
//         var $ = cheerio.load(html);
//     }
// })

// 광고차단 즉시 실행
//
// (function stop(){
// document.getElementById('slide-close').click(); // NULL 실행 안됨
// document.getElementByClassName('slide-close').click();
// })();

api.mapkey('on', '#3Open newtab', function () {
    api.tabOpenLink("www.google.com"); // TODO: addded api, but not work
});

// TODO: to try think conflict prefix g,c (google and github)
//General
api.addSearchAlias('L', 'Im feeling lucky','https://duckduckgo.com/?q=\\');
api.addSearchAlias('d', 'download', 'https://www.google.com/search?q=download+');
api.addSearchAlias('G', 'google', 'https://www.google.com/search?q=');

//ai
api.addSearchAlias('af', 'futurepedia', 'https://www.futurepedia.io/?searchTerm=');
api.addSearchAlias('Y', 'you', 'https://you.com/search?q=');
api.addSearchAlias('ap', 'perplexity', 'https://www.perplexity.ai/?q=');

//Microsoft
api.addSearchAlias('b', 'bing', 'https://www.bing.com/search?q=');

//GoogleTrand
api.addSearchAlias('gT', 'google trend', 'trends.google.com/trends/explore?q=');
api.addSearchAlias('gtK', 'google trend Korea', 'trends.google.com/trends/explore?geo=KR&q=');
api.addSearchAlias('gtU', 'google trend USA',  'trends.google.com/trends/explore?geo=US&q=');
api.addSearchAlias('gtI', 'google trend India', 'trends.google.com/trends/explore?geo=IN&q=');

//api
api.addSearchAlias('gM', 'Google map', 'https://www.google.com/maps?q=');
api.addSearchAlias('R', '도로명주소', 'http://www.juso.go.kr/support/AddressMainSearch.do?searchType=location_newaddr&searchKeyword=');

//coding -- 미완성
api.addSearchAlias('C', 'search coding', 'https://searchcode.com/?q=');
api.addSearchAlias('cA', 'Alternative', 'https://alternativeto.net/browse/search?q=');
api.addSearchAlias('cC', 'search coding', 'https://searchcode.com/?q=');
api.addSearchAlias('cW', 'chrome webstore', 'https://chrome.google.com/webstore/search/'); // chrome
api.addSearchAlias('cr', 'rfc search', 'https://rfc.fyi/?search=');
api.addSearchAlias('rfC', 'rfc search', 'https://rfc.fyi/?search=');
api.addSearchAlias('cs', 'codesandbox (online interactive IDE)', 'https://codesandbox.io/search?query=');
api.addSearchAlias('cS', 'slant (editor 비교 사이트)', 'https://www.slant.co/search?query=');
api.addSearchAlias('gH', 'github', 'https://github.com/search?q=');
api.addSearchAlias('ghS', 'githubStars', 'https://github.com/mindgitrwx?page=1&q=face&tab=stars&utf8=%E2%9C%93&utf8=%E2%9C%93&q=');
api.addSearchAlias('ss', 'slideshare', 'https://www.slideshare.net/search/slideshow?searchfrom=header&q=');
api.addSearchAlias('sd', 'soundsnap', 'https://www.soundsnap.com/search/audio/');

//language --
api.addSearchAlias('lJ', 'language Javascript', 'https://www.google.com/search?q=Javascript+');
api.addSearchAlias('lj', 'language java', 'https://www.google.com/search?q=Java+');
api.addSearchAlias('lC', 'C++', 'https://www.google.com/search?q=C++');
api.addSearchAlias('lc', 'language c', 'https://www.google.com/search?q=c+language+');
api.addSearchAlias('l#', 'language C#', 'https://www.google.com/search?q=c%23+');
api.addSearchAlias('lE', 'language E','https://ludwig.guru/s/');
api.addSearchAlias('lR', 'language R', 'https://www.google.com/search?q=languag+');
api.addSearchAlias('lr', 'language Ruby', 'https://www.google.com/search?q=Ruby+');
api.addSearchAlias('lP', 'language Python', 'https://www.google.com/search?q=Python+');
api.addSearchAlias('lp', 'language php', 'https://www.google.com/search?q=php+');
api.addSearchAlias('lK', 'language Kotlin', 'https://www.google.com/search?q=Kotlin+');
api.addSearchAlias('lS', 'language Swift', 'https://www.google.com/search?q=Swift+');
api.addSearchAlias('lQ', 'language SQL Query', 'https://www.google.com/search?q=SQL+');
api.addSearchAlias('ls', 'language Shell script', 'https://www.google.com/search?q=Shell+Schript+');
api.addSearchAlias('lT', 'language Typescript', 'https://www.google.com/search?q=TypeScript+');
api.addSearchAlias('lH', 'language HTML', 'https://www.google.com/search?q=HTML+');

//sentence search
api.addSearchAlias('S', 'sentencestack', 'https://sentencestack.com/q/');

//book
api.addSearchAlias('bS', 'snu library', 'https://primoapac01.hosted.exlibrisgroup.com/primo-explore/search?vid=82SNU&query=any,contains,');
api.addSearchAlias('bY', 'yonsei library', 'https://library.yonsei.ac.kr/main/searchBrief?q=');
api.addSearchAlias('bP', 'pnu library', 'https://lib.pusan.ac.kr/en/resource/?query=');

//rate
api.addSearchAlias('rmA', 'rate your music artist', 'https://rateyourmusic.com/search?bx=82d55e544de2ee5b27b2fd0e7153bbee&searchtype=a&searchterm=');
api.addSearchAlias('rmR', 'rate your music releases', 'https://rateyourmusic.com/search?bx=dfd8f4911473234b6e1362952e1b29e4&searchtype=l&searchterm=');

//sns
api.addSearchAlias('fB', 'faceBook(페이스북)', 'https://www.facebook.com/search/top/?q=');
api.addSearchAlias('tW', 'tWitter', 'https://twitter.com/search?q=');
api.addSearchAlias('ig', 'InstaGram HashTag', 'https://www.instagram.com/explore/tags/');
api.addSearchAlias('rD', 'redDit', 'https://www.reddit.com/search?q=');

//shorten - what is.. who is.. where is..
api.addSearchAlias('wA', 'advanced', 'https://www.google.com/search?q=advanced+');
api.addSearchAlias('wB', 'basic', 'https://www.google.com/search?q=basic+');
api.addSearchAlias('wC', '분류', 'https://www.google.com/search?q=classification+of+');
api.addSearchAlias('wD', '차이점', 'https://www.google.com/search?q=difference+between+');
api.addSearchAlias('wE', '예제', 'https://www.google.com/search?q=example+of+');
api.addSearchAlias('wF', '어디서부터', 'https://www.google.com/search?q=where+from+');
api.addSearchAlias('wG', '목적', 'https://www.google.com/search?q=what+is+goal+of+');
api.addSearchAlias('wH', '역사', 'https://www.google.com/search?q=history+of+');
api.addSearchAlias('wI', '소개', 'https://www.google.com/search?q=Introduction+of+');
api.addSearchAlias('wJ', '직업', 'https://www.google.com/search?q=jo+of+');
api.addSearchAlias('wK', '한국', 'https://www.google.com/search?q=Korea+');
api.addSearchAlias('wL', '리스트', 'https://www.google.com/search?q=list+of+');
api.addSearchAlias('wM', '방법', 'https://www.google.com/search?q=method+of+');
api.addSearchAlias('wm', '뜻', 'https://www.google.com/search?q=what+is+the+meaning+of+');
api.addSearchAlias('wN', '이름', 'https://www.google.com/search?q=name+of+');
api.addSearchAlias('wO', '순서', 'https://www.google.com/search?q=order+of+');
api.addSearchAlias('wP', '문제', 'https://www.google.com/search?q=problem+of+');
api.addSearchAlias('wQ', '질문', 'https://www.google.com/search?q=questions+of+');
api.addSearchAlias('wR', '랭킹', 'https://www.google.com/search?q=rank+of+');
api.addSearchAlias('wS', '공통점', 'https://www.google.com/search?q=common+point+of+');
api.addSearchAlias('wT', '표', 'https://www.google.com/search?q=q=table+of+');
api.addSearchAlias('wU', '사용예', 'https://www.google.com/search?q=usage+of+');
api.addSearchAlias('wW', '사용예', 'https://www.google.com/search?q=usage+of+');
api.addSearchAlias('wX', '사용예', 'https://www.google.com/search?q=usage+of+');
api.addSearchAlias('wY', '사용예', 'https://www.google.com/search?q=usage+of+');
api.addSearchAlias('wZ', '사용예', 'https://www.google.com/search?q=usage+of+');

//file
api.addSearchAlias('pdF', 'pdf', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Apdf+');
api.addSearchAlias('cpP', 'cpp', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Acpp+');
api.addSearchAlias('hwP', 'hwp', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Ahwp+');
api.addSearchAlias('ppT', 'ppt', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Appt+');
api.addSearchAlias('giF', 'gif', 'https://giphy.com/search/');

//translation
api.addSearchAlias('t', 'tlanslate Hangle to English 한글영어번역', 'https://translate.google.co.kr/?hl=ko#ko/en/');
api.addSearchAlias('T', 'tlanslate English to Hangle 영어한글번역', 'https://translate.google.co.kr/?hl=ko#en/ko/');
api.addSearchAlias('tA', 'tlanslate All 네이버사전all', 'http://dic.naver.com/search.nhn?dicQuery=');
api.addSearchAlias('tE', 'tlanslate Examples 네어버사전example', 'http://endic.naver.com/search_example.nhn?sLn=kr&query=');
api.addSearchAlias('tL', 'tlanslate lyrics 가사해석', 'https://www.google.com/search?q=가사+해석+');
api.addSearchAlias('ll', '가사', 'https://www.google.com/search?q=lyrics+of+');

//TODO: 검색을 통해서 google tlanslated 된 걸 clipboard에 복사 붙여넣는 것 만들기
api.addSearchAlias('ty', '한글영어번역', 'https://translate.google.co.kr/?hl=ko#ko/en/');
api.addSearchAlias('Ty', '영어한글번역', 'https://translate.google.co.kr/?hl=ko#en/ko/');

//naver : naver is one of the most famous potal site of korea
api.addSearchAlias('N', 'naver', 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=');
api.addSearchAlias('nM', 'navermap', 'https://map.naver.com/?query=');
api.addSearchAlias('nA', 'naver all 네이버사전all', 'http://dic.naver.com/search.nhn?dicQuery=');
api.addSearchAlias('nD', 'naver Dictionary 네이버사전all', 'http://dic.naver.com/search.nhn?dicQuery=');
api.addSearchAlias('nE', 'naver Example 네어버사전example', 'http://endic.naver.com/search_example.nhn?sLn=kr&query=');

//Daum : daum is one of the most famous potal site of korea
api.addSearchAlias('D', '다음', 'https://search.daum.net/search?w=');
api.addSearchAlias('dA', '다음 사전all', 'http://dic.daum.net/search.do?q=');
api.addSearchAlias('dD', '다음 사전all', 'http://dic.daum.net/search.do?q=');
api.addSearchAlias('dE', '다음 사전example', 'http://endic.naver.com/search_example.nhn?sLn=kr&query=');
api.addSearchAlias('dM', '다음 map', 'http://local.daum.net/map/index.jsp?q=');

//Shopping : without amazon, all the sites are korean-specific sites.
api.addSearchAlias('aZ', '아마존', 'https://www.amazon.com/s/?field-keywords=');
api.addSearchAlias('sA', 'shop아마존', 'https://www.amazon.com/s/?field-keywords='); // gmarket 과 자리를 바꿔야 할 지 고민
api.addSearchAlias('sE', 'shopEbay', 'https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=');
api.addSearchAlias('sC', 'shop 쿠팡', 'http://www.coupang.com/np/search?component=&q=');
api.addSearchAlias('sI', 'shop 인터파크', 'http://isearch.interpark.com/isearch?q=');
api.addSearchAlias('sY', 'shop yes24', 'http://www.yes24.com/searchcorner/Search?keywordAd=&keyword=&domain=ALL&qdomain=%C0%FC%C3%BC&Wcode=001_005&query=');

//music
api.addSearchAlias('msC', 'soundcloud', 'https://soundcloud.com/search?q=');
api.addSearchAlias('msI', 'soundcloudid', 'https://soundcloud.com/');
api.addSearchAlias('mS', 'spotify', 'https://open.spotify.com/search/results/');
api.addSearchAlias('msA', 'spotify Albums', 'https://open.spotify.com/search/albums/');
api.addSearchAlias('mL', 'meLon', 'https://www.melon.com/search/total/index.htm?q=');
api.addSearchAlias('mfM', 'lastFm', 'https://www.last.fm/search?q=');
api.addSearchAlias('mH', 'Hiphople', 'http://hiphople.com/index.php?_filter=search&mid=lyrics&search_keyword=');
api.addSearchAlias('mG', 'Genius', 'https://genius.com/search?q=');
api.addSearchAlias('mP', 'Pitchfork', 'https://pitchfork.com/search/?query=');
api.addSearchAlias('mC', 'metaCritic', 'http://www.metacritic.com/search/all/');

//Video
api.addSearchAlias('y', 'youtube', 'https://www.youtube.com/results?search_query=');
api.addSearchAlias('yg', 'youglish', 'https://youglish.com/pronounce/');

//Wiki
api.addSearchAlias('nW', '나무위키', 'https://namu.wiki/w/');
api.addSearchAlias('eW', '영문위키', 'https://www.wikiwand.com/en/');
api.addSearchAlias('kW', '한글위키', 'https://www.wikiwand.com/ko/');

//papaers
api.addSearchAlias('pG', 'paper 구글 스콜라', 'https://scholar.google.co.kr/scholar?hl=ko&as_sdt=0%2C5&q=');
api.addSearchAlias('pB', 'paper (biology) nCBI', 'http://www.ncbi.nlm.nih.gov/search/?term=');
api.addSearchAlias('pR', 'paper RISS', 'http://www.riss.kr/search/Search.do?detailSearch=false&searchGubun=true&strQuery=&queryText=&exQuery=&colName=all&query=');
api.addSearchAlias('pE', 'paper ELSEVIER', 'https://www.elsevier.com/search-results?query=');
api.addSearchAlias('pC', 'paper with code', 'https://paperswithcode.com/search?q_meta=&q_type=&q=');
api.addSearchAlias('pN', 'paper Nature', 'https://www.nature.com/search?q=');

// FIXME: focus 관련 명령어는 바로 redirect 되지 않음
api.mapkey('osA', '#7 open stackoverflow ask', function () {
    window.location.replace("https://stackoverflow.com/questions/ask");
    //It cannot be happened document.getElementById('title').focus();      // 제목에 포커스
    //
    //document.getElementById('wmd-input').focus();
});

api.mapkey('ouA', '#7 open ubuntu ask', function () {
    window.location.replace("https://askubuntu.com/questions/ask");
    //It cannot be happened document.getElementById('title').focus();      // 제목에 포커스
    //
    //document.getElementById('wmd-input').focus();
});

api.mapkey('oSA', '#7 open stackoverflow ask', function () {
    window.location.replace("https://stackoverflow.com/questions/ask").getElementById('wmd-input').addEventListener('paste', handlePaste).focus();
    // It cannot be happened
    // document.getElementById('wmd-input').addEventListener('paste',handlePaste).focus();
});

api.mapkey('oR', '#7 open reddit write', function () {
    window.location.replace("https://www.reddit.com/submit");
});

api.mapkey('oGM', '#7 open gmail send ', function () {
    window.location.replace("https://mail.google.com/mail/u/1/#inbox?compose=new")
});

api.mapkey('oGD', '#7 open google docs send ', function () {
    window.location.replace("https://docs.google.com/document/u/0/")
});

api.mapkey('oGI', '#7 open gist', function () {
    window.location.replace("https://gist.github.com/")
});

api.mapkey('oP', '#7 open pastebin', function () {
    window.location.replace("https://pastebin.com/")
});

api.mapkey('oGB', '#7 open google Book', function () {
    window.location.replace("https://books.google.com/books?")
});

api.mapkey('oK', '#7 open kindle', function () {
    window.location.replace("https://read.amazon.com/")
});

api.mapkey('Q', '#1Click on an Image or a button', function () {
    function imageToBlob(imageURL) {
        const img = new Image;
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        img.crossOrigin = "";
        img.src = imageURL;
        return new Promise(resolve => {
            img.onload = function () {
                c.width = this.naturalWidth;
                c.height = this.naturalHeight;
                ctx.drawImage(this, 0, 0);
                c.toBlob((blob) => {
                    https://www.w3.org/          // here the image is a blob
                    resolve(blob);
                }, "image/png", 0.75);
            };
        });
    }
    async function copyImage(imageURL){
        const blob = await imageToBlob(imageURL);
        const item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([item]);
    }
    api.Hints.create("img, button", function (element) {
        copyImage(element.src);
    });
});

api.mapkey('gq', '#1get image address with wget', function () {
    async function copyImageAddress(imgAddress){
        imageFormats = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp", "ico", "tiff", "tif", "jfif", "pjpeg", "pjp", "avif", "apng"];
        // if imgAddress string has imageFormats, then cut the trailing address after the imageFormats
        for (var i = 0; i < imageFormats.length; i++) {

            if (imgAddress.includes(imageFormats[i])) {
                imgAddress = imgAddress.split(imageFormats[i])[0] + imageFormats[i];
                api.Clipboard.write("wget " + imgAddress);
                break;
            }
        }
    }
    api.Hints.create("img, button", function (element) {
        copyImageAddress(element.src);
    });
});





// wiki를 copy 할때 [1] 이런 정보가 나오는 것이 annoying 하므로 없애준다.
api.vmapkey('y', "copy without reference notation on wikipedia", function () {
    api.Clipboard.write(window.getSelection().toString().replace(/\[[0-9]*\]/g, "test")); // TODO: 동작하지 않음
}, {
    domain: /www\.wikiwand\.com/i
}); // TODO: 여러 도메인을 한꺼번에 집어 넣는 것 추가해야 함

api.mapkey('ymr', '#7Copy multiple link regex URLs to the clipboard', function () {
    var linksToYank = [];
    api.Hints.create('*[href]', function (element) {
        linksToYank.push('domain: ' + '\/' + element.href.slice(8, ).split('/')[0].replace(/\./g, "\\\.") + '\/' + 'i');
        api.Clipboard.write(linksToYank.join('\n'));
    }, {
        multipleHits: true
    });
});

//TODO: git clone , get id
api.mapkey('yg', '#7 git clone', function () {
    api.Hints.create('git clone ' + window.location.href + '.git', function(element) {
        api.Clipboard.write('git clone ' + window.location.href + '.git');
    });
    // api.Clipboard.write('git clone ' + window.location.href + '.git');
}, {
    domain: /github\.com/i
});

api.mapkey('yg', '#7 git blog', function () {
    var address = window.location.href.split(".");
    var githubId = address[0].replace(/(^\w+:|^)\/\//, '');
    var githubAddress = 'github.com' + '/' + githubId;
    api.Clipboard.write(githubAddress);
    window.location.href(githubAddress);
})

//TODO: git clone , get id
api.mapkey('yG', '#7 git clone', function () {
    api.Clipboard.write('git clone ' + window.location.href + '.git');
}, {
    domain: /github\.com/i
});

api.mapkey('yE', '#7 Yank Element info. copy link element id or classname', function () {
    var linksToYank = [];
    api.Hints.create("", function (element) {
        linksToYank.push('id: ' + element.id + '\n');
        linksToYank.push('innertext: ' + element.innerText + '\n');
        linksToYank.push('className: ' + element.className + '\n');
        linksToYank.push('href: ' + element.href + '\n');
        linksToYank.push('type: ' + element.type + '\n');
        linksToYank.push('style: ' + element.style + '\n');
        linksToYank.push('src: ' + element.src + '\n');
        linksToYank.push('alt: ' + element.alt + '\n');
        (api.Clipboard.write(linksToYank.join('\n')));
    });
});

// ADD: read like this yank element ~~~
api.mapkey('yeI', '#7 Yank Element info. copy link element id or classname', function (element) { (api.Clipboard.write('element.id')); });
api.mapkey('yeC', '#7 Yank Element info. copy link element id or classname', function (element) { (api.Clipboard.write('element.className')); });
api.mapkey('yeT', '#7 Yank Element info. copy link element id or classname', function (element) { (api.Clipboard.write('element.type')); });
api.mapkey('yeS', '#7 Yank Element info. copy link element id or classname', function (element) { (api.Clipboard.write('element.style')); });
api.mapkey('yeA', '#7 Yank Element info. copy link element id or classname', function (element) { (api.Clipboard.write('element.alt')); });

api.mapkey('ymE', '#7 Yank Multiple Element info  (copy multiple link element id or classname)', function () {
    var linksToYank = [];
    api.Hints.create('*[href]', function (element) {

        linksToYank.push('id: ' + element.id + '\n');
        linksToYank.push('innertext: ' + element.innerText + '\n');
        linksToYank.push('className: ' + element.className + '\n');
        (api.Clipboard.write(linksToYank.join('\n')));
    }, {
        multipleHits: true
    });
});

api.mapkey('ymR', '#7Copy multiple link Regex URLs to the clipboard and add commas', function () {
    var linksToYank = [];
    api.Hints.create('*[href]', function (element) {
        if (linkCounter === 0) {
            api.Clipboard.write('{')
        }
        linksToYank.push('"' + element.href + '"', );
        api.Clipboard.write(linksToYank.join('\n'));
        linkCounter++;
    }, {
        multipleHits: true
    });
});

// Copy url as regex of SurfingKeys
api.mapkey('yr', "Copy url as regex", function () {
    api.Clipboard.write('domain: ' + '\/' + window.location.href.slice(8, ).split('/')[0].replace(/\./g, "\\\.") + '\/' + 'i');
});


// pre is often used for insert codeblocks on webpage. some code blocks just in pre,
// yQ와 동일함
api.mapkey('gyq', "Copy first pre and exist", function () {
    var cssSelector = "pre";

    var elements = getVisibleElements(function (e, v) {
        if (e.matches(cssSelector)) {
            v.push(e);
        }
    });
    if (elements.length === 0 &&
        document.querySelector(cssSelector) !== null) {
        document.querySelector(cssSelector).scrollIntoView();
        elements = getVisibleElements(function (e, v) {
            if (e.matches(cssSelector)) {
                v.push(e);
            }
        });
    }
    api.Clipboard.write(elements[0].innerText);
    RUNTIME("closeTab");
});
api.mapkey('yQ', "Copy first pre", function () {
    var cssSelector = "pre";

    var elements = getVisibleElements(function (e, v) {
        if (e.matches(cssSelector)) {
            v.push(e);
        }
    });
    if (elements.length === 0 &&
        document.querySelector(cssSelector) !== null) {
        document.querySelector(cssSelector).scrollIntoView();
        elements = getVisibleElements(function (e, v) {
            if (e.matches(cssSelector)) {
                v.push(e);
            }
        });
    }
    api.Clipboard.write(elements[0].innerText);
});

// for get search url
api.mapkey('yk', "Copy url before Keyowrd insertion", function () {
    api.Clipboard.write(window.location.href.split('=')[0] + '=');
});
// surrounded
api.mapkey('"yy', "surround url with double quotation mark", function () {
    api.Clipboard.write('"' + window.location.href + '"');
});
// for get badename
api.mapkey('yb', "Copy basename url (last path)", function () {
    api.Clipboard.write(window.location.href.split('/').pop());
});

//////////////////////////////////////////////////////////
// visualmode setting - vsual mode에 진입했을 때 동작가능 //
//////////////////////////////////////////////////////////
api.vmapkey('"y', "surround selection with doube quotation mark", function () {
    api.Clipboard.write('"' + window.getSelection().toString().replace(/\n/g, " ") + '"');
});
api.vmapkey('<y', "surround selection ", function () {
    api.Clipboard.write('<' + window.getSelection().toString() + '>');
});
api.mapkey('(y', "surround selection ", function () {
    api.Clipboard.write('(' + window.getSelection().toString() + ')');
});
api.mapkey('[y', "surround selection ", function () {
    api.Clipboard.write('[' + window.getSelection().toString() + ']');
});
api.vmapkey('{y', "surround selection ", function () {
    api.Clipboard.write('{' + window.getSelection().toString() + '}');
});
api.vmapkey('/*y', "surround selection ", function () {
    api.Clipboard.write('/*' + window.getSelection().toString() + '*/');
});
api.vmapkey('<--!y', "surround selection ", function () {
    api.Clipboard.write('<--!' + window.getSelection().toString() + '-->');
});
api.vmapkey('~y', "surround selection ", function () {
    var UpperSelected = window.getSelection().toString()
    api.Clipboard.write(UpperSelected.toUpperCase());
});
api.vmapkey('~jy', "Remove enter", function () {
    api.Clipboard.write(window.getSelection().toString().replace(/\n/g, " "));
});
api.vmapkey('~cy', "Added comma", function () {
    api.Clipboard.write(window.getSelection().toString().replace(/[ ,]+/g, ","));
});
api.vmapkey('~dy', "Delete first 1 character", function () {
    api.Clipboard.write(window.getSelection().toString().substr(1));
});
api.vmapkey('~Dy', "Delete surrounded", function () {
    api.Clipboard.write(window.getSelection().toString().slice(1, -1));
});
api.vmapkey('~sy', "Remove special character (blank is not considered as special character", function () { //TODO: Black is not work
    api.Clipboard.write(window.getSelection().toString().replace(/[^A-Z0-9:blank:]/ig, ""));
});
api.vmapkey('~dy', "Markdown Strikethrough", function () {
    api.Clipboard.write('~~ ' + window.getSelection().toString() + ' ~~');
});

// markdown
api.vmapkey('miy', "Markdown italic", function () {
    api.Clipboard.write('*' + window.getSelection().toString() + '*');
});
api.vmapkey('mby', "Markdown bold", function () {
    api.Clipboard.write('**' + window.getSelection().toString() + '**');
});
api.vmapkey('mly', "Markdown link", function () {
    api.Clipboard.write('[replaceit](' + window.getSelection().toString() + ')');
});
api.vmapkey('msy', "Markdown Strikethrough", function () {
    api.Clipboard.write('~~ ' + window.getSelection().toString() + ' ~~');
});
// etc
api.mapkey('"yma', '#7Copy multiple link URLs to the clipboard', function () {
    var linksToYank = [];
    api.Hints.create('*[href]', function (element) {
        linksToYank.push('"' + element.href + '"');
        api.Clipboard.write(linksToYank.join('\n'));
    }, {
        multipleHits: true
    });
});

//setting
api.mapkey('gs', '#12 go Setting - Open Chrome Settings', function () {
    tabOpenLink("chrome://settings/");
});
api.mapkey('gE', '#12 go Extensions - Open Chrome extensions Shortcut setting', function () {
    tabOpenLink("chrome://extensions/shortcuts");
});
// intellij bind
api.mapkey('<Ctrl-Alt-s>', '#12Open Chrome Settings', function () {
    tabOpenLink("chrome://settings/");
});

api.map('<Ctrl-V>', 'sm'); // markdown preview

api.mapkey('D', '', function () {
    pageHeadLine = document.querySelectorAll("pre");
    if (pageHeadLine.length > codeWrapper) {
        codeWrapper++;
    }
    pageHeadLine[codeWrapper].scrollIntoView();
});
api.mapkey('U', '', function () {
    pageHeadLine = document.querySelectorAll("pre");
    if (0 < codeWrapper) {
        codeWrapper--;
    }
    pageHeadLine[codeWrapper].scrollIntoView();
});

api.mapkey('D', '나무위키 목차 대단위 다운스크롤', function () {
    pageHeadLine = document.querySelectorAll(".wiki-heading");
    if (pageHeadLine.length > namuPage) {
        namuPage++;
    }
    pageHeadLine[namuPage].scrollIntoView();
}, {
    domain: /namu\.wiki/i
});
api.mapkey('U', '나무위키 목차 대단위 up스크롤', function () {
    pageHeadLine = document.querySelectorAll(".wiki-heading");
    if (0 < namuPage) {
        namuPage--;
    }
    pageHeadLine[namuPage].scrollIntoView();
}, {
    domain: /namu\.wiki/i
});

api.mapkey('D', '위키 목차 대단위 다운스크롤', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (pageHeadLine.length > wikiPage) {
        wikiPage++;
    }
    wikiPage++;
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /\.wikipedia\.org/i
});
api.mapkey('U', '위키 목차 대단위 up스크롤', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (0 < wikiPage) {
        wikiPage--;
    }
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /\.wikipedia\.org/i
});


api.mapkey('D', '위키 목차 대단위 다운스크롤', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (pageHeadLine.length > wikiPage) {
        wikiPage++;
    }
    wikiPage++;
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /en\.wiktionary\.org/i
});

api.mapkey('U', '위키 목차 대단위 up스크롤', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (0 < wikiPage) {
        wikiPage--;
    }
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /en\.wiktionary\.org/i
});
api.mapkey('D', 'wikiwand 목차 대단위 스크롤 ', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (pageHeadLine.length > wikiPage) {
        wikiPage++;
    }
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /www\.wikiwand\.com/i
});
api.mapkey('U', 'wikiwand 목차  up 스크롤 ', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (0 < wikiPage) {
        wikiPage--;
    }
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /www\.wikiwand\.com/i
});

// query select all 내부에서 regular expression 이 먹히지 않음
api.mapkey('D', 'stackoverflow 답변 다운 스크롤', function () {
    pageHeadLine = document.querySelectorAll(".answer");
    if (pageHeadLine.length > stackAnswer) {
        stackAnswer++;
    }
    pageHeadLine[stackAnswer].scrollIntoView();
    window.scrollBy(0, -47); // Adjust scrolling with a negative value : stackoverflow upper bar
}, {
    domain: /stackoverflow\.com/i
});
api.mapkey('U', 'stackoverflow 답변 up 스크롤 ', function () {
    pageHeadLine = document.querySelectorAll(".answer");
    if (0 < stackAnswer) {
        stackAnswer--;
    }
    pageHeadLine[stackAnswer].scrollIntoView();
    window.scrollBy(0, -47); // Adjust scrolling with a negative value here : stackoverflow upper bar
}, {
    domain: /stackoverflow\.com/i
});
api.mapkey('D', 'naver 답변 다운 스크롤', function () {
    pageHeadLine = document.querySelectorAll(".line_horizontal");
    if (pageHeadLine.length > naverAnswer) {
        naverAnswer++;
    }
    pageHeadLine[naverAnswer].scrollIntoView();
}, {
    domain: /kin\.naver\.com/i
});
api.mapkey('U', 'naver 답변 up 스크롤 ', function () {
    pageHeadLine = document.querySelectorAll(".line_horizontal");
    if (0 < naverAnswer) {
        naverAnswer--;
    }
    pageHeadLine[naverAnswer].scrollIntoView();
}, {
    domain: /kin\.naver\.com/i
});
//https://www.slideshare.net/mandrewmartin/regression-presentation
//div.j-prev-btn.arrow-left  btnPrevious
//div.j-prev-btn.arrow-right btnNext
//
//--------------End of D key and U key ----------------------

/*
window.onload = function(){
}
*/

// github default shortcut lists
// https://help.github.com/articles/using-keyboard-shortcuts/

api.mapkey('gC', 'Go to the code tab', function () {
    document.querySelectorAll('.js-selected-navigation-item.reponav-item')[0].click();
}, {
    domain: /github\.com/i
});

api.mapkey('gI', 'Go to the Issues tab. ', function () {
    document.querySelectorAll('.js-selected-navigation-item.reponav-item')[1].click();
}, {
    domain: /github\.com/i
});

api.mapkey('gP', 'Go to the Pull requests tab.  ', function () {
    document.querySelectorAll('.js-selected-navigation-item.reponav-item')[2].click();
}, {
    domain: /github\.com/i
});
api.mapkey('gB', 'Go to the Projects tab. "', function () {
    document.querySelectorAll('.js-selected-navigation-item.reponav-item')[3].click();
}, {
    domain: /github\.com/i
});

api.mapkey('gW', 'Go to the Wiki tab. ', function () {
    document.querySelectorAll('.js-selected-navigation-item.reponav-item')[4].click();
}, {
    domain: /github\.com/i
});

api.mapkey('gO', 'Go to the Overview tab. ', function () {
    document.querySelectorAll('.UnderlineNav-item')[0].click();
}, {
    domain: /github\.com/i
});
api.mapkey('gR', 'Go to the Repository tab. ', function () {
    document.querySelectorAll('.UnderlineNav-item')[1].click();
}, {
    domain: /github\.com/i
});
api.mapkey('gS', 'Go to the Stars tab. ', function () {
    document.querySelectorAll('.UnderlineNav-item')[2].click();
}, {
    domain: /github\.com/i
});

// TODO: test
api.mapkey('V', 'view', function () {
    document.querySelectorAll('.btn.btn-sm.tooltipped.tooltipped-nw')[0].click();
}, {
    domain: /github\.com/i
});
//end of github

//start of amazon
api.mapkey('gI', 'Instance click ', function () {
    document.getElementById('gwt-debug-leftNav-Instances').click();
}, {
    domain: /us-east-2\.console\.aws\.amazon\.com/i
});

api.mapkey('gS', 'security group click', function () {
    document.getElementById('gwt-debug-leftNav-SecurityGroups').click();
}, {
    domain: /us-east-2\.console\.aws\.amazon\.com/i
});

api.mapkey('gE', 'Elastic group click ', function () {
    document.getElementById('gwt-debug-leftNav-Addresses').click();
}, {
    domain: /us-east-2\.console\.aws\.amazon\.com/i
});

api.mapkey('gV', 'Volume click ', function () {
    document.getElementById('gwt-debug-leftNav-Volumes').click();
}, {
    domain: /us-east-2\.console\.aws\.amazon\.com/i
});
//end of amazon

//
// page 양 옆으로 넘길 수 있도록 하기
api.mapkey('h', 'slideshare previous page', function () {
    document.getElementById('previous-slide').click();
}, {domain: /www\.slideshare\.com/i});
api.mapkey('l', 'slideshare next page', function () {
    document.getElementById('next-slide').click();
}, {domain: /www\.slideshare\.com/i});

api.mapkey('h', 'slideserve previous page', function () {
    document.getElementById('btn_prev').click();
}, {domain: /slideserve\.com/i});
api.mapkey('l', 'slideserve next page', function () {
    document.getElementById('btn_next').click();
}, {domain: /slideserve\.com/i});

api.mapkey('h', 'slideplayer previous page', function () {
    document.querySelector("td[action='back']").click();
}, {domain: /slideplayer\.com/i});
api.mapkey('l', 'slideplayer next page', function () {
    document.querySelector("td[action='forward']").click();
}, {domain: /slideplayer\.com/i});
