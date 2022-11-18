//////////////////////////////////////////////////////////////////////////////////////////////////
//
// Korean Specific Surfing Keys config
// Version - 1.0 - debug copy all tab urls 
// Korean specific surfing key config                                                           //
// Please copy this url to text box [load settings from:], and 'Save'                           //
// https:   raw.githubusercontent.com/mindgitrwx/gitconventions/master/SurfingKeys-config-ko.js //
//                                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// Surfing key 에서 se를 누르면 setting surfing key 의 setting으로 들어가집니다. 이때 보여지는 화면에서                   //
// Advanced mode를 선택한 후, Load settings from에 위 주소를 입력하고 Save 해주시면 몇초 지나서 이 설정이 저장될 겁니다     //
//                                                                                                                    //
// 키 맵핑할 때 주의할 점                                                                                               //
// api.map('<Ctrl-Shift-e>', 'T');                                                                                        //
// 이런식으로 맵핑하면 동작하지 않고                                                                                     //
// api.map('<Ctrl-E>', 'T');                                                                                              //
//                                                                                                                    //
// 이런 식으로 맵핑해야 함                                                                                              //
//                                                                                                                    //
// email:jonghyeon.rw@gmail.com                                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// conventions: TODO, FIXME, REFACT

// ------------ for page moving -------------- (every time it would be returned zero when refreshed)
var namuPage    = 0;
    wikiPage    = 0;
    stackAnswer = 0;  // 변수 통합 생각중
    naverAnswer = 0;
    codeWrapper = 0;
    lineNum     = 0;
// 중괄호 닫기용
var linkCounter = 0;

// Properties list
api.Hints.numericHints           = false;
api.Hints.characters             = "asdfgqwertzxcvbyuiopmnhlk";  // without j for esc (TODO: jj for esc when hints mode)
api.Hints.scrollKeys             = "G";
settings.caseSensitive       = true;
settings.omnibarSuggestion   = true;
// settings.defaultSearchEngine = 'L';                          // Google I'm Feeling Luckey
settings.nextLinkRegex       = /((forward|>>|next)+)/i;
settings.prevLinkRegex       = /((back|<<|prev(ious)?)+)/i;
////////////////////////////////
// api.unapi.map default key api.mapings  //
////////////////////////////////
api.unmap('<Ctrl-6>'); // (탭이 6개 이상 열려있을 때, ctrl-6에 키가 바인딩되어있으면 자연스럽지가 않음 )
api.unmap('<Ctrl-p>'); 
api.unmap('<Ctrl-n>'); 
api.map(']', ']]'); // 두번 누르는건 자연스럽지 않음 
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

// 바이두와 bing 을 굳이 사용할 필요가 없길래 api.unapi함 
// api.removeSearchAliasX('b');
// api.removeSearchAliasX('g');
// api.removeSearchAliasX('w');
// api.removeSearchAliasX('s');

// for surfingkeys PDF autokey-----------------------------------------
api.map('<Shift-1>', 'fs'); // 잘 되는 느낌은 아님
api.map('<Shift-2>', 'fd');
api.map('<Shift-3>', 'ff');

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
api.addSearchAliasX('L', 'Im feeling lucky','https://duckduckgo.com/?q=\\');
// api.addSearchAliasX('d', 'download', 'https://www.google.com/search?q=download+');
// api.addSearchAliasX('G', 'google', 'https://www.google.com/search?q=');

//GoogleTrand
// api.addSearchAliasX('gT', 'google trend', 'trends.google.com/trends/explore?q=');
// api.addSearchAliasX('gtK', 'google trend Korea', 'trends.google.com/trends/explore?geo=KR&q=');
// api.addSearchAliasX('gtU', 'google trend USA',  'trends.google.com/trends/explore?geo=US&q=');
// api.addSearchAliasX('gtI', 'google trend India', 'trends.google.com/trends/explore?geo=IN&q=');

//api.map
// api.addSearchAliasX('gM', 'Google api.map', 'https://www.google.com/api.maps?q=');
// api.addSearchAliasX('R', '도로명주소', 'http://www.juso.go.kr/support/AddressMainSearch.do?searchType=location_newaddr&searchKeyword=');

//coding -- 미완성
//api.addSearchAliasX('C', 'search coding', 'https://searchcode.com/?q=');
//api.addSearchAliasX('cA', 'Alternative', 'https://alternativeto.net/browse/search?q=');
//api.addSearchAliasX('cC', 'search coding', 'https://searchcode.com/?q=');
//api.addSearchAliasX('cW', 'chrome webstore', 'https://chrome.google.com/webstore/search/'); // chrome
//api.addSearchAliasX('cs', 'codesandbox (online interactive IDE)', 'https://codesandbox.io/search?query=');
//api.addSearchAliasX('cS', 'slant (editor 비교 사이트)', 'https://www.slant.co/search?query=');
//api.addSearchAliasX('gH', 'github', 'https://github.com/search?q=');
//api.addSearchAliasX('ghS', 'githubStars', 'https://github.com/mindgitrwx?page=1&q=face&tab=stars&utf8=%E2%9C%93&utf8=%E2%9C%93&q=');
//api.addSearchAliasX('ss', 'slideshare', 'https://www.slideshare.net/search/slideshow?searchfrom=header&q=');
//api.addSearchAliasX('sd', 'soundsnap', 'https://www.soundsnap.com/search/audio/');

//language -- 
//
//api.addSearchAliasX('lJ', 'language Javascript', 'https://www.google.com/search?q=Javascript+');
//api.addSearchAliasX('lj', 'language java', 'https://www.google.com/search?q=Java+');
//api.addSearchAliasX('lC', 'C++', 'https://www.google.com/search?q=C++');
//api.addSearchAliasX('lc', 'language c', 'https://www.google.com/search?q=c+language+');
//api.addSearchAliasX('l#', 'language C#', 'https://www.google.com/search?q=c%23+');
//api.addSearchAliasX('lE', 'language E','https://ludwig.guru/s/');
//api.addSearchAliasX('lR', 'language R', 'https://www.google.com/search?q=languag+');
//api.addSearchAliasX('lr', 'language Ruby', 'https://www.google.com/search?q=Ruby+');
//api.addSearchAliasX('lP', 'language Python', 'https://www.google.com/search?q=Python+');
//api.addSearchAliasX('lp', 'language php', 'https://www.google.com/search?q=php+');
//api.addSearchAliasX('lK', 'language Kotlin', 'https://www.google.com/search?q=Kotlin+');
//api.addSearchAliasX('lS', 'language Swift', 'https://www.google.com/search?q=Swift+');
//api.addSearchAliasX('lQ', 'language SQL Query', 'https://www.google.com/search?q=SQL+');
//api.addSearchAliasX('ls', 'language Shell script', 'https://www.google.com/search?q=Shell+Schript+');
//api.addSearchAliasX('lT', 'language Typescript', 'https://www.google.com/search?q=TypeScript+');
//api.addSearchAliasX('lH', 'language HTML', 'https://www.google.com/search?q=HTML+');

////book
//api.addSearchAliasX('bS', 'snu library', 'https://primoapac01.hosted.exlibrisgroup.com/primo-explore/search?vid=82SNU&query=any,contains,');
//api.addSearchAliasX('bY', 'yonsei library', 'https://library.yonsei.ac.kr/main/searchBrief?q=');
//api.addSearchAliasX('bP', 'pnu library', 'https://lib.pusan.ac.kr/en/resource/?query=');

//rate
//api.addSearchAliasX('rmA', 'rate your music artist', 'https://rateyourmusic.com/search?bx=82d55e544de2ee5b27b2fd0e7153bbee&searchtype=a&searchterm=');
//api.addSearchAliasX('rmR', 'rate your music releases', 'https://rateyourmusic.com/search?bx=dfd8f4911473234b6e1362952e1b29e4&searchtype=l&searchterm=');

//sns
//api.addSearchAliasX('fB', 'faceBook(페이스북)', 'https://www.facebook.com/search/top/?q=');
//api.addSearchAliasX('tW', 'tWitter', 'https://twitter.com/search?q=');
//api.addSearchAliasX('ig', 'InstaGram HashTag', 'https://www.instagram.com/explore/tags/');
//api.addSearchAliasX('rD', 'redDit', 'https://www.reddit.com/search?q=');

//shorten - what is.. who is.. where is..  
//api.addSearchAliasX('wA', 'advanced', 'https://www.google.com/search?q=advanced+');
//api.addSearchAliasX('wB', 'basic', 'https://www.google.com/search?q=basic+');
//api.addSearchAliasX('wC', '분류', 'https://www.google.com/search?q=classification+of+');
//api.addSearchAliasX('wD', '차이점', 'https://www.google.com/search?q=difference+between+');
//api.addSearchAliasX('wE', '예제', 'https://www.google.com/search?q=example+of+');
//api.addSearchAliasX('wF', '어디서부터', 'https://www.google.com/search?q=where+from+');
//api.addSearchAliasX('wG', '목적', 'https://www.google.com/search?q=what+is+goal+of+');
//api.addSearchAliasX('wH', '역사', 'https://www.google.com/search?q=history+of+');
//api.addSearchAliasX('wI', '소개', 'https://www.google.com/search?q=Introduction+of');
//api.addSearchAliasX('wJ', '직업', 'https://www.google.com/search?q=jo+of+');
//api.addSearchAliasX('wK', '한국', 'https://www.google.com/search?q=Korea+');
//api.addSearchAliasX('wL', '리스트', 'https://www.google.com/search?q=list+of+');
//api.addSearchAliasX('wM', '방법', 'https://www.google.com/search?q=method+of+');
//api.addSearchAliasX('wm', '뜻', 'https://www.google.com/search?q=what+is+the+meaning+of+');
//api.addSearchAliasX('wN', '이름', 'https://www.google.com/search?q=name+of+');
//api.addSearchAliasX('wO', '순서', 'https://www.google.com/search?q=order+of+');
//api.addSearchAliasX('wP', '문제', 'https://www.google.com/search?q=problem+of+');
//api.addSearchAliasX('wQ', '질문', 'https://www.google.com/search?q=questions+of+');
//api.addSearchAliasX('wR', '랭킹', 'https://www.google.com/search?q=rank+of+');
//api.addSearchAliasX('wS', '공통점', 'https://www.google.com/search?q=common+point+of+');
//api.addSearchAliasX('wT', '표', 'https://www.google.com/search?q=q=table+of+');
//api.addSearchAliasX('wU', '사용예', 'https://www.google.com/search?q=usage+of+');
// api.addSearchAliasX('wW', '사용예', 'https://www.google.com/search?q=usage+of+'); //  w에만 지나치게 만이 추가 가능 
// api.addSearchAliasX('wX', '사용예', 'https://www.google.com/search?q=usage+of+');
// api.addSearchAliasX('wY', '사용예', 'https://www.google.com/search?q=usage+of+');
// api.addSearchAliasX('wZ', '사용예', 'https://www.google.com/search?q=usage+of+');
// 
//file 확장자
//api.addSearchAliasX('pdF', 'pdf', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Apdf+');
//api.addSearchAliasX('cpP', 'cpp', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Acpp+');
//api.addSearchAliasX('hwP', 'hwp', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Ahwp+');
//api.addSearchAliasX('ppT', 'ppt', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Appt+');
//api.addSearchAliasX('giF', 'gif', 'https://giphy.com/search/');

//translation
//api.addSearchAliasX('t', 'tlanslate Hangle to English 한글영어번역', 'https://translate.google.co.kr/?hl=ko#ko/en/');
//api.addSearchAliasX('T', 'tlanslate English to Hangle 영어한글번역', 'https://translate.google.co.kr/?hl=ko#en/ko/');
//api.addSearchAliasX('tA', 'tlanslate All 네이버사전all', 'http://dic.naver.com/search.nhn?dicQuery=');
//api.addSearchAliasX('tE', 'tlanslate Examples 네어버사전example', 'http://endic.naver.com/search_example.nhn?sLn=kr&query=');
//api.addSearchAliasX('tL', 'tlanslate lyrics 가사해석', 'https://www.google.com/search?q=가사+해석+');
//api.addSearchAliasX('ll', '가사', 'https://www.google.com/search?q=lyrics+of+');

//TODO: 검색을 통해서 google tlanslated 된 걸 clipboard에 복사 붙여넣는 것 만들기 (겹쳐서 동작하지 않음)
//api.addSearchAliasX('ty', '한글영어번역', 'https://translate.google.co.kr/?hl=ko#ko/en/');
//api.addSearchAliasX('Ty', '영어한글번역', 'https://translate.google.co.kr/?hl=ko#en/ko/');

//naver : naver is one of the most famous potal site of korea
//api.addSearchAliasX('N', 'naver', 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=');
//api.addSearchAliasX('nM', 'naverapi.map', 'https://api.map.naver.com/?query=');
//api.addSearchAliasX('nA', 'naver all 네이버사전all', 'http://dic.naver.com/search.nhn?dicQuery=');
//api.addSearchAliasX('nD', 'naver Dictionary 네이버사전all', 'http://dic.naver.com/search.nhn?dicQuery=');
//api.addSearchAliasX('nE', 'naver Example 네어버사전example', 'http://endic.naver.com/search_example.nhn?sLn=kr&query=');

//Daum : daum is one of the most famous potal site of korea
//api.addSearchAliasX('D', '다음', 'https://search.daum.net/search?w=');
//api.addSearchAliasX('dA', '다음 사전all', 'http://dic.daum.net/search.do?q=');
//api.addSearchAliasX('dD', '다음 사전all', 'http://dic.daum.net/search.do?q=');
//api.addSearchAliasX('dE', '다음 사전example', 'http://endic.naver.com/search_example.nhn?sLn=kr&query=');
//api.addSearchAliasX('dM', '다음 api.map', 'http://local.daum.net/api.map/index.jsp?q=');

//Shopping : without amazon, all the sites are korean-specific sites.
//api.addSearchAliasX('aZ', '아마존', 'https://www.amazon.com/s/?field-keywords=');
//api.addSearchAliasX('sA', 'shop아마존', 'https://www.amazon.com/s/?field-keywords='); // gmarket 과 자리를 바꿔야 할 지 고민 
//api.addSearchAliasX('sE', 'shopEbay', 'https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw='); 
//api.addSearchAliasX('sC', 'shop 쿠팡', 'http://www.coupang.com/np/search?component=&q=');
//api.addSearchAliasX('sD', 'shop 다나와', 'http://search.danawa.com/dsearch.php?k1=');
//api.addSearchAliasX('sI', 'shop 인터파크', 'http://isearch.interpark.com/isearch?q=');
//api.addSearchAliasX('sT', 'shop 티몬', 'http://search.ticketmonster.co.kr/search/?keyword=');
//api.addSearchAliasX('sY', 'shop yes24', 'http://www.yes24.com/searchcorner/Search?keywordAd=&keyword=&domain=ALL&qdomain=%C0%FC%C3%BC&Wcode=001_005&query=');
//api.addSearchAliasX('sW', 'shop 위메프', 'http://search.wemakeprice.com/search?search_cate=top&search_keyword=');
//api.addSearchAliasX('saU', 'shop 옥션', 'http://search.auction.co.kr/search/search.aspx?keyword=');
//api.addSearchAliasX('sG', '지마켓', ''); 쿼리를 알 수 없음
//api.addSearchAliasX('s11', 'shop 11번가', 'http://search.11st.co.kr/Search.tmall?kwd=');
//api.addSearchAliasX('siH', 'shop 아이허브', ' https://kr.iherb.com/search?kw=');
//api.addSearchAliasX('s11', 'shop 11번가', 'http://search.11st.co.kr/Search.tmall?kwd=');
//api.addSearchAliasX('sdC', 'shop 다이닝코드 (음식점)', 'https://www.diningcode.com/isearch.php?query=');

//music
//api.addSearchAliasX('msC', 'soundcloud', 'https://soundcloud.com/search?q=');
//api.addSearchAliasX('msI', 'soundcloudid', 'https://soundcloud.com/');
//api.addSearchAliasX('mS', 'spotify', 'https://open.spotify.com/search/results/');
//api.addSearchAliasX('msA', 'spotify Albums', 'https://open.spotify.com/search/albums/');
//api.addSearchAliasX('mL', 'meLon', 'https://www.melon.com/search/total/index.htm?q=');
//api.addSearchAliasX('mfM', 'lastFm', 'https://www.last.fm/search?q=');
//api.addSearchAliasX('mH', 'Hiphople', 'http://hiphople.com/index.php?_filter=search&mid=lyrics&search_keyword=');
//api.addSearchAliasX('mG', 'Genius', 'https://genius.com/search?q=');
//api.addSearchAliasX('mP', 'Pitchfork', 'https://pitchfork.com/search/?query=');
//api.addSearchAliasX('mC', 'metaCritic', 'http://www.metacritic.com/search/all/');

//Video
//api.addSearchAliasX('Y', 'youtube', 'https://www.youtube.com/results?search_query=');
//api.addSearchAliasX('yg', 'youglish', 'https://youglish.com/pronounce/');

//Wiki
//api.addSearchAliasX('nW', '나무위키', 'https://namu.wiki/w/');
//api.addSearchAliasX('eW', '영문위키', 'https://www.wikiwand.com/en/');
//api.addSearchAliasX('kW', '한글위키', 'https://www.wikiwand.com/ko/');

//papaers
//api.addSearchAliasX('pG', 'paper 구글 스콜라', 'https://scholar.google.co.kr/scholar?hl=ko&as_sdt=0%2C5&q=');
//api.addSearchAliasX('pB', 'paper (biology) nCBI', 'http://www.ncbi.nlm.nih.gov/search/?term=');
//api.addSearchAliasX('pR', 'paper RISS', 'http://www.riss.kr/search/Search.do?detailSearch=false&searchGubun=true&strQuery=&queryText=&exQuery=&colName=all&query=');
//api.addSearchAliasX('pE', 'paper ELSEVIER', 'https://www.elsevier.com/search-results?query=');
//api.addSearchAliasX('pC', 'paper CiteSheer', 'http://citeseerx.ist.psu.edu/search?q=');
//api.addSearchAliasX('pN', 'paper Nature', 'https://www.nature.com/search?q=');

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
    api.Hints.create("img, button", function (element) {
        element;
        element.src;
        // Clipboard.write(element.src);
        // TODO: Copy 하는 방법은 없는지 알아보기
    });
});

// wiki를 copy 할때 [1] 이런 정보가 나오는 것이 annoying 하므로 없애준다. 
api.vmapkey('y', "copy without reference notation on wikipedia", function () {
    Clipboard.write(window.getSelection().toString().replace(/\[[0-9]*\]/g, "test")); // TODO: 동작하지 않음 
}, {
    domain: /www\.wikiwand\.com/i
}); // TODO: 여러 도메인을 한꺼번에 집어 넣는 것 추가해야 함 

api.mapkey('ymr', '#7Copy multiple link regex URLs to the clipboard', function () {
    var linksToYank = [];
    api.Hints.create('*[href]', function (element) {
        linksToYank.push('domain: ' + '\/' + element.href.slice(8, ).split('/')[0].replace(/\./g, "\\\.") + '\/' + 'i');
        Clipboard.write(linksToYank.join('\n'));
    }, {
        multipleHits: true
    });
});

//TODO: git clone , get id
api.mapkey('yg', '#7 git clone', function () {
    Clipboard.write('git clone ' + window.location.href + '.git');
}, {
    domain: /github\.com/i
});

api.mapkey('yg', '#7 git blog', function () {
    var address = window.location.href.split(".");
    var githubId = address[0].replace(/(^\w+:|^)\/\//, '');
    var githubAddress = 'github.com' + '/' + githubId;
    Clipboard.write(githubAddress);
    window.location.href(githubAddress);
})

//TODO: git clone , get id
api.mapkey('yG', '#7 git clone', function () {
    Clipboard.write(window.location.href + '.git');
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
        (Clipboard.write(linksToYank.join('\n')));
    });
});

// ADD: read like this yank element ~~~
api.mapkey('yeI', '#7 Yank Element info. copy link element id or classname', function (element) { (Clipboard.write('element.id')); });
api.mapkey('yeC', '#7 Yank Element info. copy link element id or classname', function (element) { (Clipboard.write('element.className')); });
api.mapkey('yeT', '#7 Yank Element info. copy link element id or classname', function (element) { (Clipboard.write('element.type')); });
api.mapkey('yeS', '#7 Yank Element info. copy link element id or classname', function (element) { (Clipboard.write('element.style')); });
api.mapkey('yeA', '#7 Yank Element info. copy link element id or classname', function (element) { (Clipboard.write('element.alt')); });

api.mapkey('ymE', '#7 Yank Multiple Element info  (copy multiple link element id or classname)', function () {
    var linksToYank = [];
    api.Hints.create('*[href]', function (element) {

        linksToYank.push('id: ' + element.id + '\n');
        linksToYank.push('innertext: ' + element.innerText + '\n');
        linksToYank.push('className: ' + element.className + '\n');
        (Clipboard.write(linksToYank.join('\n')));
    }, {
        multipleHits: true
    });
});

//TODO: 마지막에 끝날 때 중괄호를 닫아 주는 것 만들기  (대문자를 박을때는 맨 뒤에 박는 편이 낫겠다.) --단축키 네개 이상? 
api.mapkey('ymR', '#7Copy multiple link Regex URLs to the clipboard and add commas', function () {
    var linksToYank = [];
    api.Hints.create('*[href]', function (element) {
        if (linkCounter === 0) {
            Clipboard.write('{')
        }
        linksToYank.push('"' + element.href + '"', );
        Clipboard.write(linksToYank.join('\n'));
        linkCounter++;
    }, {
        multipleHits: true
    });
});

// Copy url as regex of SurfingKeys
api.mapkey('yr', "Copy url as regex", function () {
    Clipboard.write('domain: ' + '\/' + window.location.href.slice(8, ).split('/')[0].replace(/\./g, "\\\.") + '\/' + 'i');
});


// pre is often used for insert codeblocks on webpage. some code blocks just in pre, 
// yQ와 동일함 
api.mapkey('gyq', "Copy first pre and exist", function () {
    var cssSelector = "pre";

    //보이는 것 중에서 pre element존재하는지 찾기 
    var elements = getVisibleElements(function (e, v) {
        if (e.matches(cssSelector)) {
            v.push(e);
        }
    });
    // pre Element가 보이는 것 중에서 존재하지 않을 때 
    if (elements.length === 0 &&
        document.querySelector(cssSelector) !== null) {
        document.querySelector(cssSelector).scrollIntoView();
        elements = getVisibleElements(function (e, v) {
            if (e.matches(cssSelector)) {
                v.push(e);
            }
        });
    }
    Clipboard.write(elements[0].innerText);
    RUNTIME("closeTab");
});
api.mapkey('yQ', "Copy first pre", function () {
    var cssSelector = "pre";

    //보이는 것 중에서 pre element존재하는지 찾기 
    var elements = getVisibleElements(function (e, v) {
        if (e.matches(cssSelector)) {
            v.push(e);
        }
    });
    // pre Element가 보이는 것 중에서 존재하지 않을 때 
    if (elements.length === 0 &&
        document.querySelector(cssSelector) !== null) {
        document.querySelector(cssSelector).scrollIntoView();
        elements = getVisibleElements(function (e, v) {
            if (e.matches(cssSelector)) {
                v.push(e);
            }
        });
    }
    Clipboard.write(elements[0].innerText);
});

// for get search url
api.mapkey('yk', "Copy url before Keyowrd insertion", function () {
    Clipboard.write(window.location.href.split('=')[0] + '=');
});
// surrounded   
api.mapkey('"yy', "surround url with double quotation mark", function () {
    Clipboard.write('"' + window.location.href + '"');
});


//////////////////////////////////////////////////////////
// visualmode setting - vsual mode에 진입했을 때 동작가능 //
//////////////////////////////////////////////////////////
api.vmapkey('"y', "surround selection with doube quotation mark", function () {
    Clipboard.write('"' + window.getSelection().toString().replace(/\n/g, " ") + '"');
});
api.vmapkey('<y', "surround selection ", function () {
    Clipboard.write('<' + window.getSelection().toString() + '>');
});
api.mapkey('(y', "surround selection ", function () {
    Clipboard.write('(' + window.getSelection().toString() + ')');
});
api.mapkey('[y', "surround selection ", function () {
    Clipboard.write('[' + window.getSelection().toString() + ']');
});
api.vmapkey('{y', "surround selection ", function () {
    Clipboard.write('{' + window.getSelection().toString() + '}');
});
api.vmapkey('/*y', "surround selection ", function () {
    Clipboard.write('/*' + window.getSelection().toString() + '*/');
});
api.vmapkey('<--!y', "surround selection ", function () {
    Clipboard.write('<--!' + window.getSelection().toString() + '-->');
});
api.vmapkey('~y', "surround selection ", function () {
    var UpperSelected = window.getSelection().toString()
    Clipboard.write(UpperSelected.toUpperCase());
});
api.vmapkey('~jy', "Remove enter", function () {
    Clipboard.write(window.getSelection().toString().replace(/\n/g, " "));
});
api.vmapkey('~cy', "Added comma", function () {
    Clipboard.write(window.getSelection().toString().replace(/[ ,]+/g, ","));
});
api.vmapkey('~dy', "Delete first 1 character", function () {
    Clipboard.write(window.getSelection().toString().substr(1));
});
api.vmapkey('~Dy', "Delete surrounded", function () {
    Clipboard.write(window.getSelection().toString().slice(1, -1));
});
api.vmapkey('~sy', "Remove special character (blank is not considered as special character", function () { //TODO: Black is not work
    Clipboard.write(window.getSelection().toString().replace(/[^A-Z0-9:blank:]/ig, ""));
});
api.vmapkey('~dy', "Markdown Strikethrough", function () {
    Clipboard.write('~~ ' + window.getSelection().toString() + ' ~~');
});
//api.addSearchAliasX('ty', '한글영어번역', 'https://translate.google.co.kr/?hl=ko#ko/en/'); window.getSelection
//api.addSearchAliasX('Ty', '영어한글번역', 'https://translate.google.co.kr/?hl=ko#en/ko/');
// request(URL, function (err, response, html) {
//      URL로부터 가져온 페이지 소스가 html이란 변수에 담긴다.
//})
//TODO: google tlanslation auto copy make
//TODO: result_box 안에 <span> </span> 있고 그걸 auto 로 복사하는 기능 만들기
/*
api.vmapkey('ty', "한글 영어번역 clipboard", function () { //TODO:  
    url = "https://translate.google.co.kr/?hl=ko#ko/en/" + window.getSelection().toString();
    request(url, function(err, response, html){
        if (!err) {
            var $ = cheerio.load(html);
            Clipboard.write($('#result_box').innerText());
        }
    })
});
api.vmapkey('Ty', "영어 한글번역 clipboard", function () {
    url = "https://translate.google.co.kr/?hl=ko#en/ko/" + window.getSelection().toString();
    request(url, function(err, response, html){
        if (!err) {
            var $ = cheerio.load(html);
            Clipboard.write($('#result_box').innerText());
        }
    })
});
*/

/*
api.vmapkey('~diy', "remove inner double quoates strings", function () {
    Clipboard.write( window.getSelection().toString().replace(/".*"/, '""') );
});
api.vmapkey('~siy', "remove inner single quoates strings", function () {
    Clipboard.write( window.getSelection().toString().replace(/".*"/, '""') );
});
*/
// markdown
api.vmapkey('miy', "Markdown italic", function () {
    Clipboard.write('*' + window.getSelection().toString() + '*');
});
api.vmapkey('mby', "Markdown bold", function () {
    Clipboard.write('**' + window.getSelection().toString() + '**');
});
api.vmapkey('mly', "Markdown link", function () {
    Clipboard.write('[replaceit](' + window.getSelection().toString() + ')');
});
api.vmapkey('msy', "Markdown Strikethrough", function () {
    Clipboard.write('~~ ' + window.getSelection().toString() + ' ~~');
});
// etc
api.mapkey('"yma', '#7Copy multiple link URLs to the clipboard', function () {
    var linksToYank = [];
    api.Hints.create('*[href]', function (element) {
        linksToYank.push('"' + element.href + '"');
        Clipboard.write(linksToYank.join('\n'));
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


// Domain을 여러개 넣을 수 있는가?
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
    document.getElementById('btnPrevious').click();
}, {domain: /www\.slideshare\.net/i});
api.mapkey('l', 'slideshare next page', function () {
    document.getElementById('btnNext').click();
}, {domain: /www\.slideshare\.net/i});


api.mapkey('f', '#7 santatoic next', function () {
    var buttonList = document.getElementsByClassName('jsx-1583171186');
    for(var i=0;i<buttonList.length;i++){
      buttonList[i].click();
    }
}, {
    domain: /santatoeic\.com/i
});


api.mapkey('l', 'next video', function () { 
    s = window.location.hre;
    dividedURL = s.replace(/&/g, '=&').split('=');
    dividedURL[5]++; dividedURL[3]++;
    mergedURL = dividedURL.join('=').replace(/=&/g, '&')
    window.location.replace(mergedURL);
}, {domain: /osam\.kr/i});

api.mapkey('h', 'before video', function () { 
    s = window.location.hre;
    dividedURL = s.replace(/&/g, '=&').split('=');
    dividedURL[5]--; dividedURL[3]--;
    mergedURL = dividedURL.join('=').replace(/=&/g, '&')
    window.location.replace(mergedURL);
}, {domain: /osam\.kr/i});



// skipControl sc-ir playControls__control playControls__prev skipControl__previous
// skipControl sc-ir playControls__control playControls__next skipControl__next
// sc-button-like playbackSoundBadge__like sc-button sc-button-small sc-button-icon sc-button-responsive
//Soundcloud shortcuts
// . 이 들어가야 하는지 아닌지 테스트 
// TODO: 잘 동작하지 않음 (이미 단축키가 assign 되어 있는 사이트라서 그런 것 처럼 보임)
api.mapkey('J', 'soundcloud previous song', function () {
    document.getElementsByClassName('sc-ir.playControls__control.playControls__prev.skipControl__previous').click();
}, {
    domain: /soundcloud\.com/i
});
api.mapkey('K', 'soundcltud next song', function () {
    document.getElementsByClassName('skipControl.sc-ir.playControls__control.playControls__next.skipControl__next').click();
}, {
    domain: /soundcloud\.com/i
});
api.mapkey('L', 'soundcloud like', function () {
    document.getElementsByClassName('sc-button-like.playbackSoundBadge__like.sc-button.sc-button-small.sc-button-icon.sc-button-responsive').click();
}, {
    domain: /soundcloud\.com/i
});


//TODO: google tlanslation auto copy make: result_box 안에 <span> </span> 있고 그걸 auto 로 복사하는 기능 만들기 
//p, ''df viewer api.mapping 

// api.mapkey('D', 'github readme 스크롤', function () {
//     stackAnswer++;
//     pageHeadLine = document.querySelectorAll(".answers");
//     pageHeadLine[stackAnswer].scrollIntoView();
// },{domain: /\\pdf_viewer.html*/i});
// api.mapkey('U', 'github readme up 스크롤 ', function () {
//     stackAnswer--;
//     pageHeadLine = document.querySelectorAll(".answers");
//     pageHeadLine[stackAnswer].scrollIntoView();
// },{domain: /\\pdf_viewer.html*/i});

// api.mapkey('D', 'github readme 스크롤', function () {
//     stackAnswer++;
//     pageHeadLine = document.querySelectorAll(".wp_syntax", ".wp_");
//     pageHeadLine[stackAnswer].scrollIntoView();
// },{domain: /\\pdf_viewer.html*/i});
// api.mapkey('U', 'github readme up 스크롤 ', function () ,{
//     stackAnswer--;
//     pageHeadLine = document.querySelectorAll(".answers");
//     pageHeadLine[stackAnswer].scrollIntoView();
// },{domain: /\*pdf_viewer.html*/i});
// */

//네이버 맵 지도 이동
/*
api.map('h', '<ArrowLeft>', {domain: /api.map\.naver\.com/i});
api.map('j', '<ArrowDown>',  {domain: /api.map\.naver\.com/i});
api.map('k', '<ArrowUp>', {domain: /api.map\.naver\.com/i});
api.map('l', '<ArrowRight>', {domain: /api.map\.naver\.com/i});
*/
// 지도 이동 

//TODO: it from sadid https://github.com/brookhong/Surfingkeys/issues/768
//HOTFIX:
//ISSUE: 주석에서 auto로 ISSUE를 붙여주는 것이 있었으면 좋겠다

api.mapkey('yA', "#7Copy all tabs url", function () {
    //get numbers of tabs
    chrome.tabs.query({
        windowType: 'normal'
    }, function (tabs) {
        tabNums = tabs.length;
    });
    Front.showPopup('tabNums'); //debug

    var URLsToYank = [];
    chrome.tabs.query({
        'active'           : true,
        'lastFocusedWindow': true
    }, function (tabs) {
        for (i = 0; i < tabNums; i++)
            var url = tabs[i].url;
        URLsToYank.push(url);
    })();
    Clipboard.write(URLsToYank);
});

