//////////////////////////////////////////////////////////////////////////////////////////////////
//
// Korean Specific Surfing Keys config
// Version - 1.0 - debug copy all tab urls 
//
// Surfing keys config (SurfingKeys)                                                            //
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
// map('<Ctrl-Shift-e>', 'T');                                                                                        //
// 이런식으로 맵핑하면 동작하지 않고                                                                                     //
// map('<Ctrl-E>', 'T');                                                                                              //
//                                                                                                                    //
// 이런 식으로 맵핑해야 함                                                                                              //
//                                                                                                                    //
// email:jonghyeon.rw@gmail.com                                                                                       //
//                                                                                                                    //
// 앞으로 만들고자 하는 기능 - visualmode에서 복사를 할 시 바로 구글 번역한 후 Clipboard로 넘기는 기능
//                         - Q에서 쓰여지는 사전 데이터의 변경 
//                         - stackoverflow에서 검색시 바로 첫번째 결과의 pre데이터를 Clipboard로 넘기는 기능  
//                         - 구글 검색시 불필요한 정보를 지워주고자 하는 기능 
//                         - Chrome 상에서 cmd를 열수 있는 것으로 보이는 데 그걸 이용해서 무엇인가를 진행하는 것 
//                                                                                                                    //
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////// //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Debug 하는 방법: 다음 명령어를 사용한다.                                                                          //
// Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// conventions: TODO, FIXME, REFACT

// Anonymous "self-invoking" function - TO LOAD JQUERY

// ------------ for page moving -------------- (every time it would be returned zero when refreshed)
var namuPage    = 0;
var wikiPage    = 0;
var stackAnswer = 0;  // 변수 통합 생각중
var naverAnswer = 0;
var codeWrapper = 0;
var lineNum     = 0;
// -----------------------------------------------------
// 중괄호 닫기용
var linkCounter = 0;

// Properties list
Hints.numericHints           = false;
Hints.characters             = "asdfgqwertzxcvbyuiopmnhlkj";
Hints.scrollKeys             = "G";
settings.caseSensitive       = true;
settings.omnibarSuggestion   = true;
settings.defaultSearchEngine = 'L';                           // Google I'm Feeling Luckey
settings.nextLinkRegex       = /((forward|>>|next)+)/i;
settings.prevLinkRegex       = /((back|<<|prev(ious)?)+)/i;
//google search 바를 없애버림 
elem = document.getElementById('searchform');
if (elem !== null) {
    elem.parentNode.removeChild(elem);
}

////////////////////////////////
// unmap default key mapings  //
////////////////////////////////
unmap('<Ctrl-6>'); // (탭이 6개 이상 열려있을 때, ctrl-6에 키가 바인딩되어있으면 자연스럽지가 않음 )
map(']', ']]'); // 두번 누르는건 자연스럽지 않음 
map('[', '[[');

// 바이두와 bing 을 굳이 사용할 필요가 없길래 unmap함 
removeSearchAliasX('b')
removeSearchAliasX('g')
removeSearchAliasX('w')
removeSearchAliasX('s')

// for surfingkeys PDF autokey-----------------------------------------
map('<Shift-1>', 'fs'); // 잘 되는 느낌은 아님
map('<Shift-2>', 'fd');
map('<Shift-3>', 'ff');

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

//----------------i-----------------------------------------------------
mapkey('on', '#3Open Firefox newtab', function () {
    tabOpenLink("www.google.com");
});

//General
addSearchAliasX('L', 'Im feeling lucky', 'https://www.google.com/search?btnI=1&q=');
addSearchAliasX('G', 'Google', 'https://www.google.com/search?q=');

//map
addSearchAliasX('gM', '구글맵', 'https://www.google.com/maps?q=');
addSearchAliasX('R', '도로명주소', 'http://www.juso.go.kr/support/AddressMainSearch.do?searchType=location_newaddr&searchKeyword=');

//coding -- 미완성
addSearchAliasX('C', 'search coding', 'https://searchcode.com/?q=');
addSearchAliasX('cC', 'search coding', 'https://searchcode.com/?q=');
addSearchAliasX('cW', 'chrome webstore', 'https://chrome.google.com/webstore/search/'); // chrome
addSearchAliasX('gH', 'github', 'https://github.com/search?q=', 'o');
addSearchAliasX('cS', 'slant (editor 비교 사이트)', 'https://www.slant.co/search?query=', 'o');


//language -- 
//
addSearchAliasX('lJ', 'Javascript', 'https://www.google.com/search?q=Javascript+');
addSearchAliasX('lj', 'java', 'https://www.google.com/search?q=Java+');
//addSearchAliasX('lC', 'C++', 'https://www.google.com/search?q=C++');
addSearchAliasX('lc', 'c', 'https://www.google.com/search?q=c+language+');
addSearchAliasX('l#', 'C#', 'https://www.google.com/search?q=c%23+');
addSearchAliasX('lR', 'R', 'https://www.google.com/search?q=languag+');
addSearchAliasX('lr', 'Ruby', 'https://www.google.com/search?q=Ruby+');
addSearchAliasX('lP', 'Python', 'https://www.google.com/search?q=Python+');
addSearchAliasX('lp', 'php', 'https://www.google.com/search?q=php+');
addSearchAliasX('lK', 'Kotlin', 'https://www.google.com/search?q=Kotlin+');
addSearchAliasX('lS', 'Swi=t', 'https://www.google.com/search?q=Swift+');
addSearchAliasX('lQ', 'SQL Query', 'https://www.google.com/search?q=SQL+');
addSearchAliasX('ls', 'Shell script', 'https://www.google.com/search?q=Shell+Schript+');
addSearchAliasX('lT', 'Typescript', 'https://www.google.com/search?q=TypeScript+');
addSearchAliasX('lH', 'HTML', 'https://www.google.com/search?q=HTML+');

//sns
addSearchAliasX('fB', 'facebook(페이스북)', 'https://www.facebook.com/search/top/?q=');
addSearchAliasX('tW', 'twitter', 'https://twitter.com/search?q=');
addSearchAliasX('ig', 'instagram HashTag', 'https://www.instagram.com/explore/tags/');
addSearchAliasX('rD', 'reddit', 'https://www.reddit.com/search?q=');

//shorten - what is.. who is.. where is..  
addSearchAliasX('wA', 'advanced', 'https://www.google.com/search?q=advanced+');
addSearchAliasX('wB', 'basic', 'https://www.google.com/search?q=basic+');
addSearchAliasX('wC', '분류', 'https://www.google.com/search?q=classfication+of+');
addSearchAliasX('wD', '차이점', 'https://www.google.com/search?q=difference+between+');
addSearchAliasX('wE', '예제', 'https://www.google.com/search?q=example+of+');
addSearchAliasX('wF', '어디서부터', 'https://www.google.com/search?q=where+from+');
addSearchAliasX('wG', '목적', 'https://www.google.com/search?q=what+is+goal+of+');
addSearchAliasX('wH', '역사', 'https://www.google.com/search?q=history+of+');
addSearchAliasX('wI', '소개', 'https://www.google.com/search?q=Introduction+of');
addSearchAliasX('wJ', '직업', 'https://www.google.com/search?q=jo+of+');
addSearchAliasX('wK', '한국', 'https://www.google.com/search?q=Korea+');
addSearchAliasX('wL', '리스트', 'https://www.google.com/search?q=list+of+');
addSearchAliasX('wM', '방법', 'https://www.google.com/search?q=method+of+');
addSearchAliasX('wm', '뜻', 'https://www.google.com/search?q=what+is+the+meaning+of+');
addSearchAliasX('wN', '이름', 'https://www.google.com/search?q=name+of+');
addSearchAliasX('wO', '순서', 'https://www.google.com/search?q=order+of+');
addSearchAliasX('wP', '문제', 'https://www.google.com/search?q=problem+of+');
addSearchAliasX('wQ', '질문', 'https://www.google.com/search?q=questions+of+');
addSearchAliasX('wR', '랭킹', 'https://www.google.com/search?q=rank+of+');
addSearchAliasX('wS', '공통점', 'https://www.google.com/search?q=common+point+of+');
addSearchAliasX('wT', '표', 'https://www.google.com/search?q=q=table+of+');
addSearchAliasX('wU', '사용예', 'https://www.google.com/search?q=usage+of+');
// addSearchAliasX('wW', '사용예', 'https://www.google.com/search?q=usage+of+'); //  w에만 지나치게 만이 추가 가능 
// addSearchAliasX('wX', '사용예', 'https://www.google.com/search?q=usage+of+');
// addSearchAliasX('wY', '사용예', 'https://www.google.com/search?q=usage+of+');
// addSearchAliasX('wZ', '사용예', 'https://www.google.com/search?q=usage+of+');
// 
//file 확장자
addSearchAliasX('pdF', 'pdf', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Apdf+');
addSearchAliasX('cpP', 'cpp', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Acpp+');
addSearchAliasX('hwP', 'hwp', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Ahwp+');
addSearchAliasX('ppT', 'ppt', 'https://www.google.com/search?hl=en&biw=1600&bih=817&ei=ufUTW5_5FcGVmAXPqAc&q=filetype%3Appt+');

//translation
addSearchAliasX('t', '한글영어번역', 'https://translate.google.co.kr/?hl=ko#ko/en/');
addSearchAliasX('T', '영어한글번역', 'https://translate.google.co.kr/?hl=ko#en/ko/');
addSearchAliasX('tA', '네이버사전all', 'http://dic.naver.com/search.nhn?dicQuery=');
addSearchAliasX('tE', '네어버사전example', 'http://endic.naver.com/search_example.nhn?sLn=kr&query=');
addSearchAliasX('tL', '가사해석', 'https://www.google.com/search?q=가사+해석+');
addSearchAliasX('ll', '가사', 'https://www.google.com/search?q=lyrics+of+');

//TODO: 검색을 통해서 google tlanslated 된 걸 clipboard에 복사 붙여넣는 것 만들기 (겹쳐서 동작하지 않음)
addSearchAliasX('ty', '한글영어번역', 'https://translate.google.co.kr/?hl=ko#ko/en/');
addSearchAliasX('Ty', '영어한글번역', 'https://translate.google.co.kr/?hl=ko#en/ko/');
//navers
addSearchAliasX('N', 'naver', 'https://www.naver.com/?query=');
addSearchAliasX('nM', 'navermap', 'https://map.naver.com/?query=');
addSearchAliasX('nA', '네이버사전all', 'http://dic.naver.com/search.nhn?dicQuery=');
addSearchAliasX('nD', '네이버사전all', 'http://dic.naver.com/search.nhn?dicQuery=');
addSearchAliasX('nE', '네어버사전example', 'http://endic.naver.com/search_example.nhn?sLn=kr&query=');

//Damm 
addSearchAliasX('D', '다음', 'https://search.daum.net/search?w=');
addSearchAliasX('dA', '다음 사전all', 'http://dic.daum.net/search.do?q=');
addSearchAliasX('dD', '다음 사전all', 'http://dic.daum.net/search.do?q=');
addSearchAliasX('dE', '다음 사전example', 'http://endic.naver.com/search_example.nhn?sLn=kr&query=');
addSearchAliasX('dM', '다음 map', 'http://local.daum.net/map/index.jsp?q=');

//shop
addSearchAliasX('aZ', '아마존', 'https://www.amazon.com/s/?field-keywords=');
addSearchAliasX('sA', '아마존', 'https://www.amazon.com/s/?field-keywords='); // gmarket 과 자리를 바꿔야 할 지 고민 
addSearchAliasX('sC', '쿠팡', 'http://www.coupang.com/np/search?component=&q=');
addSearchAliasX('sD', '다나와', 'http://search.danawa.com/dsearch.php?k1=');
addSearchAliasX('sI', '인터파크', 'http://isearch.interpark.com/isearch?q=');
addSearchAliasX('sT', '티몬', 'http://search.ticketmonster.co.kr/search/?keyword=');
addSearchAliasX('sY', 'yes24', 'http://www.yes24.com/searchcorner/Search?keywordAd=&keyword=&domain=ALL&qdomain=%C0%FC%C3%BC&Wcode=001_005&query=');
addSearchAliasX('sW', '위메프', 'http://search.wemakeprice.com/search?search_cate=top&search_keyword=');
addSearchAliasX('saU', '옥션', 'http://search.auction.co.kr/search/search.aspx?keyword=');
//addSearchAliasX('sG', '지마켓', ''); 쿼리를 알 수 없음
addSearchAliasX('s11', '11번가', 'http://search.11st.co.kr/Search.tmall?kwd=');
addSearchAliasX('siH', '아이허브', ' https://kr.iherb.com/search?kw=');
addSearchAliasX('s11', '11번가', 'http://search.11st.co.kr/Search.tmall?kwd=');
addSearchAliasX('sdC', '다이닝코드 (음식점)', 'https://www.diningcode.com/isearch.php?query=');

//music
addSearchAliasX('msC', 'soundcloud', 'https://soundcloud.com/search?q=');
addSearchAliasX('msI', 'soundcloudid', 'https://soundcloud.com/');
addSearchAliasX('mS', 'spotify', 'https://open.spotify.com/search/results/');
addSearchAliasX('msA', 'spotify', 'https://open.spotify.com/search/albums/');
addSearchAliasX('mL', 'melon', 'https://www.melon.com/search/total/index.htm?q=');
addSearchAliasX('mfM', 'lastfm', 'https://www.last.fm/search?q=');
addSearchAliasX('mH', 'hiphople', 'http://hiphople.com/index.php?_filter=search&mid=lyrics&search_keyword=');
addSearchAliasX('mG', 'Genius', 'https://genius.com/search?q=');
addSearchAliasX('mP', 'pitchfork', 'https://pitchfork.com/search/?query=');
addSearchAliasX('mC', 'metacritic', 'http://www.metacritic.com/search/all/');

//Video
addSearchAliasX('Y', 'youtube', 'https://www.youtube.com/results?search_query=');

//Wiki
addSearchAliasX('nW', '나무위키', 'https://namu.wiki/w/');
addSearchAliasX('eW', '영문위키', 'https://www.wikiwand.com/en/');
addSearchAliasX('kW', '한글위키', 'https://www.wikiwand.com/ko/');

//papaers
addSearchAliasX('pG', '구글 스콜라', 'https://scholar.google.co.kr/scholar?hl=ko&as_sdt=0%2C5&q=');
addSearchAliasX('pN', 'nCBI', 'https://www.ncbi.nlm.nih.gov/search/?term=');
addSearchAliasX('pR', 'RISS', 'http://www.riss.kr/search/Search.do?detailSearch=false&searchGubun=true&strQuery=&queryText=&exQuery=&colName=all&query=');
addSearchAliasX('pE', 'ELSEVIER', 'https://www.elsevier.com/search-results?query=');
addSearchAliasX('pC', 'CiteSheer', 'http://citeseerx.ist.psu.edu/search?q=');

//news 
//knowledge
//blog


//TODO: image copy 는 구글 image 검색에서 잘 지원 해 주지 않는 걸로 보임 
/* mapkey('q', '#1Click on an Image or a button', function() {
    Hints.create("img, button", Hints.dispatchMouseClick);
    searchSelectedWith('http://images.google.com/searchbyimage?image_url=', false, false, '');
});
mapkey('ya', '#7Copy a link URL to the clipboard', function() {
    Hints.create('*[href]', function(element) {
        Clipboard.write(element.href);
    });
});
*/

// q의 기능을 구글 이미지 검색으로 바꿈 (주소가 정확할 경우 잘 진행됨)
mapkey('q', '#1get image link and google image search', function () {
    Hints.create("img, button", function (element) {
        Clipboard.write(element.src);
        searchSelectedWith('http://images.google.com/searchbyimage?image_url=', false, false, '');
        // TODO: Copy 하는 방법은 없는지 알아보기
    });
});

/*
function SelectText(element) {
    var doc = document;
    if (doc.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range     = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
*/

function copyElement(element) {

}

    
mapkey('Q', '#1Click on an Image or a button', function () {
    Hints.create("img, button", function (element) {
        copyElement(element);
        // Clipboard.write(element.src);
        // TODO: Copy 하는 방법은 없는지 알아보기
    });
});


function renderGoogleTranslate(res) {
    var exp = res.msg;
    if (res.data.definition) {
        var tmp = [];
        for (var reg in res.data.pronunciations) {
            tmp.push('<div>[{0}] {1}</div>'.format(reg, res.data.pronunciations[reg]));
            tmp.push('<div><audio src="{0}" controls></audio></div>'.format(res.data[reg + '_audio']));
        }
        tmp.push('<div>{0}</div>'.format(res.data.definition));
        exp = '<div>{0}</div>'.format(tmp.join('\n'));
    }
    return exp;
}
/*
mapkey('Q', '#8Open omnibar for word translation', function () {
    Front.openOmniquery({
        url: "https://translate.google.cn/#auto/en/",
        
         * or
        url: function(q) {
            return "https://api.shanbay.com/bdc/search/?word=" + q
        },
        
        query      : Visual.getWordUnderCursor(),
        style      : "opacity: 0.3;",
        parseResult: function (res) {
            var res = JSON.parse(res.text);
            return [renderGoogleTranslate(res)];
        }
    });
});

*/

// wiki를 copy 할때 [1] 이런 정보가 나오는 것이 annoying 하므로 없애준다. 
vmapkey('y', "copy without reference notation on wikipedia", function () {
    Clipboard.write(window.getSelection().toString().replace(/\[[0-9]*\]/g, "test")); // TODO: 동작하지 않음 
}, {
    domain: /www\.wikiwand\.com/i
}); // TODO: 여러 도메인을 한꺼번에 집어 넣는 것 추가해야 함 

mapkey('ymr', '#7Copy multiple link regex URLs to the clipboard', function () {
    var linksToYank = [];
    Hints.create('*[href]', function (element) {
        linksToYank.push('domain: ' + '\/' + element.href.slice(8, ).split('/')[0].replace(/\./g, "\\\.") + '\/' + 'i');
        Clipboard.write(linksToYank.join('\n'));
    }, {
        multipleHits: true
    });
});

//TODO: git clone , get id
mapkey('yg', '#7 git clone', function () {
    Clipboard.write('git clone ' +  window.location.href + '.git');
}, {
    domain: /github\.com/i
}); 
mapkey('ye', '#7 copy link element id or classname', function () {
    var linksToYank = [];
    Hints.create('*[href]', function (element) {

        linksToYank.push('id: ' + element.id + '\n');
        linksToYank.push('innertext: ' + element.innerText+ '\n');
        linksToYank.push('className: ' + element.className+ '\n');
        (Clipboard.write(linksToYank.join('\n')));
    });
});
mapkey('yme', '#7 copy multiple link element id or classname', function () {
    var linksToYank = [];
    Hints.create('*[href]', function (element) {

        linksToYank.push('id: ' + element.id + '\n');
        linksToYank.push('innertext: ' + element.innerText+ '\n');
        linksToYank.push('className: ' + element.className+ '\n');
        (Clipboard.write(linksToYank.join('\n')));
    }, {
        multipleHits: true
    });
});
//TODO: 마지막에 끝날 때 중괄호를 닫아 주는 것 만들기  (대문자를 박을때는 맨 뒤에 박는 편이 낫겠다.) --단축키 네개 이상? 
mapkey('ymR', '#7Copy multiple link regex URLs to the clipboard and add commas', function () {
    var linksToYank = [];
    Hints.create('*[href]', function (element) {
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
mapkey('yr', "Copy url as regex", function () {
    Clipboard.write('domain: ' + '\/' + window.location.href.slice(8, ).split('/')[0].replace(/\./g, "\\\.") + '\/' + 'i');
});


mapkey('gyq', "Copy first pre", function () {
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
mapkey('yQ', "Copy first pre", function () {
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
// yQ와 동일함 
mapkey('yk', "Copy url before keyowrd insertion", function () {
    Clipboard.write(window.location.href.split('=')[0] + '=');
});
// surround   
mapkey('"yy', "surround url with double quotation mark", function () {
    Clipboard.write('"' + window.location.href + '"');
});


//////////////////////////////////////////////////////////
// visualmode setting - vsual mode에 진입했을 때 동작가능 //
//////////////////////////////////////////////////////////
vmapkey('"y', "surround selection with doube quotation mark", function () {
    Clipboard.write('"' + window.getSelection().toString().replace(/\n/g, " ") + '"');
});
vmapkey('<y', "surround selection ", function () {
    Clipboard.write('<' + window.getSelection().toString() + '>');
});
vmapkey('(y', "surround selection ", function () {
    Clipboard.write('(' + window.getSelection().toString() + ')');
});
vmapkey('[y', "surround selection ", function () {
    Clipboard.write('[' + window.getSelection().toString() + ']');
});
vmapkey('{y', "surround selection ", function () {
    Clipboard.write('{' + window.getSelection().toString() + '}');
});
vmapkey('/*y', "surround selection ", function () {
    Clipboard.write('/*' + window.getSelection().toString() + '*/');
});
vmapkey('<--!y', "surround selection ", function () {
    Clipboard.write('<--!' + window.getSelection().toString() + '-->');
});
vmapkey('~y', "surround selection ", function () {
    var UpperSelected = window.getSelection().toString()
    Clipboard.write(UpperSelected.toUpperCase());
});
vmapkey('~jy', "Remove enter", function () {
    Clipboard.write(window.getSelection().toString().replace(/\n/g, " "));
});
vmapkey('~cy', "Added comma", function () {
    Clipboard.write(window.getSelection().toString().replace(/[ ,]+/g, ","));
});
vmapkey('~dy', "Delete first 1 character", function () {
    Clipboard.write(window.getSelection().toString().substr(1));
});
vmapkey('~Dy', "Delete surrounded", function () {
    Clipboard.write(window.getSelection().toString().slice(1, -1));
});
vmapkey('~sy', "Remove special character (blank is not considered as special character", function () { //TODO: Black is not work
    Clipboard.write(window.getSelection().toString().replace(/[^A-Z0-9:blank:]/ig, ""));
});
vmapkey('~dy', "Markdown Strikethrough", function () {
    Clipboard.write('~~ ' + window.getSelection().toString() + ' ~~');
});
//TODO: multiple clipboard test 동작하지 않음 FIX
vmapkey('my', '#7Copy multiple link URLs to the clipboard', function () {
    var textToYank = [];
    textToYank.push(window.getSelection.toString());
    Clipboard.write('"' + textToYank.join('\n') + '"');
});

//
vmapkey('my', '#7Copy multiple link URLs to the clipboard', function () {
    var textToYank = [];
    textToYank.push(window.getSelection.toString());
    Clipboard.write('"' + textToYank.join('\n') + '"');
});
//addSearchAliasX('ty', '한글영어번역', 'https://translate.google.co.kr/?hl=ko#ko/en/'); window.getSelection
//addSearchAliasX('Ty', '영어한글번역', 'https://translate.google.co.kr/?hl=ko#en/ko/');
// request(URL, function (err, response, html) {
//      URL로부터 가져온 페이지 소스가 html이란 변수에 담긴다.
//})
//TODO: google tlanslation auto copy make
//TODO: result_box 안에 <span> </span> 있고 그걸 auto 로 복사하는 기능 만들기
/*
vmapkey('ty', "한글 영어번역 clipboard", function () { //TODO:  
    url = "https://translate.google.co.kr/?hl=ko#ko/en/" + window.getSelection().toString();
    request(url, function(err, response, html){
        if (!err) {
            var $ = cheerio.load(html);
            Clipboard.write($('#result_box').innerText());
        }
    })
});
vmapkey('Ty', "영어 한글번역 clipboard", function () {
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
vmapkey('~diy', "remove inner double quoates strings", function () {
    Clipboard.write( window.getSelection().toString().replace(/".*"/, '""') );
});
vmapkey('~siy', "remove inner single quoates strings", function () {
    Clipboard.write( window.getSelection().toString().replace(/".*"/, '""') );
});
*/
// markdown
vmapkey('miy', "Markdown italic", function () {
    Clipboard.write('*' + window.getSelection().toString() + '*');
});
vmapkey('mby', "Markdown bold", function () {
    Clipboard.write('**' + window.getSelection().toString() + '**');
});
vmapkey('mly', "Markdown link", function () {
    Clipboard.write('[replaceit](' + window.getSelection().toString() + ')');
});
vmapkey('msy', "Markdown Strikethrough", function () {
    Clipboard.write('~~ ' + window.getSelection().toString() + ' ~~');
});
// etc
mapkey('"yma', '#7Copy multiple link URLs to the clipboard', function () {
    var linksToYank = [];
    Hints.create('*[href]', function (element) {
        linksToYank.push('"' + element.href + '"');
        Clipboard.write(linksToYank.join('\n'));
    }, {
        multipleHits: true
    });
});

//setting 
mapkey('gs', '#12Open Chrome Settings', function () {
    tabOpenLink("chrome://settings/");
});
mapkey('gE', '#12Open Chrome extensions Shortcut setting', function () {
    tabOpenLink("chrome://extensions/shortcuts");
});
// intellij bind
mapkey('<Ctrl-Alt-s>', '#12Open Chrome Settings', function () {
    tabOpenLink("chrome://settings/");
});

// 정상적으로 동작하지 않음 
// vscode bind
mapkey('<Ctrl-X>', '#12Open Chrome extensions', function () {
    tabOpenLink("chrome://extensions/");
});
// intellij bind
map('<Ctrl-E>', 'T');
map('<Ctrl-N>', 'T');
// intellij bind - 동작 하지 않음
mapkey('<Alt-F12>', '#12Open Chrome Settings', function () {
    tabOpenLink("chrome.send('inspect',[String(data.processId), String(data.routeId)])");
});

// vscode bind 동작 하지 않음  
mapkey('<Ctrl-\>', '#12Open Chrome extensions', function () {
    RUNTIME("duplicateTab");
    RUNTIME("newWindow");
});
//todo
mapkey('<Ctrl-]>', '#12Open Chrome extensions', function () {
    RUNTIME("duplicateTab");
    RUNTIME("");
});
map('<Ctrl-V>', 'sm'); // markdown preview

//-------------- D key and U key ---------------------- 함수화 필요
//TODO: add rage of scroll
//sysntax, code
/* 잘 동작하지 않음 
function DownController(lineQuery = 'pre' , offset = 0) {
    pageHeadLine = document.querySelectorAll(lineQuery);
    if(pageHeadLine.length){
        if(pageHeadLine.length > jlineNum){ lineNum++;}
        pageHeadLine[lineNum].scrollIntoView();
        window.scrollBy(0, offset); // Adjust scrolling with a negative value here : stackoverflow upper bar
    }
}
function UpController(lineQuery = 'pre' , offset = 0) {
    pageHeadLine = document.querySelectorAll(lineQuery);
    if(pageHeadLine.length){
        if(0 < lineNum){ lineNum--;}
        pageHeadLine[lineNum].scrollIntoView();
        window.scrollBy(0, offset); // Adjust scrolling with a negative value here : stackoverflow upper bar
    }
}
mapkey('D', '', DownController('pre',0));
mapkey('U', '', UpController('pre',0));
mapkey('D', '나무위키 목차 대단위 다운스크롤', DownController('.wiki-heading', 0) , {domain: /namu\.wiki/i});
mapkey('U', '나무위키 목차 대단위 up스크롤', UpController('.wiki-heading',0) , {domain: /namu\.wiki/i});
*/

mapkey('D', '', function () {
    pageHeadLine = document.querySelectorAll("pre");
    if (pageHeadLine.length > codeWrapper) {
        codeWrapper++;
    }
    pageHeadLine[codeWrapper].scrollIntoView();
});
mapkey('U', '', function () {
    pageHeadLine = document.querySelectorAll("pre");
    if (0 < codeWrapper) {
        codeWrapper--;
    }
    pageHeadLine[codeWrapper].scrollIntoView();
});

mapkey('D', '나무위키 목차 대단위 다운스크롤', function () {
    pageHeadLine = document.querySelectorAll(".wiki-heading");
    if (pageHeadLine.length > namuPage) {
        namuPage++;
    }
    pageHeadLine[namuPage].scrollIntoView();
}, {
    domain: /namu\.wiki/i
});
mapkey('U', '나무위키 목차 대단위 up스크롤', function () {
    pageHeadLine = document.querySelectorAll(".wiki-heading");
    if (0 < namuPage) {
        namuPage--;
    }
    pageHeadLine[namuPage].scrollIntoView();
}, {
    domain: /namu\.wiki/i
});

mapkey('D', '위키 목차 대단위 다운스크롤', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (pageHeadLine.length > wikiPage) {
        wikiPage++;
    }
    wikiPage++;
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /\.wikipedia\.org/i
});
mapkey('U', '위키 목차 대단위 up스크롤', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (0 < wikiPage) {
        wikiPage--;
    }
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /\.wikipedia\.org/i
});


// Domain을 여러개 넣을 수 있는가?
mapkey('D', '위키 목차 대단위 다운스크롤', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (pageHeadLine.length > wikiPage) {
        wikiPage++;
    }
    wikiPage++;
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /en\.wiktionary\.org/i
});

mapkey('U', '위키 목차 대단위 up스크롤', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (0 < wikiPage) {
        wikiPage--;
    }
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /en\.wiktionary\.org/i
});
mapkey('D', 'wikiwand 목차 대단위 스크롤 ', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (pageHeadLine.length > wikiPage) {
        wikiPage++;
    }
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /www\.wikiwand\.com/i
});
mapkey('U', 'wikiwand 목차  up 스크롤 ', function () {
    pageHeadLine = document.querySelectorAll(".mw-headline");
    if (0 < wikiPage) {
        wikiPage--;
    }
    pageHeadLine[wikiPage].scrollIntoView();
}, {
    domain: /www\.wikiwand\.com/i
});

// query select all 내부에서 regular expression 이 먹히지 않음 
mapkey('D', 'stackoverflow 답변 다운 스크롤', function () {
    pageHeadLine = document.querySelectorAll(".answer");
    if (pageHeadLine.length > stackAnswer) {
        stackAnswer++;
    }
    pageHeadLine[stackAnswer].scrollIntoView();
    window.scrollBy(0, -47); // Adjust scrolling with a negative value : stackoverflow upper bar
}, {
    domain: /stackoverflow\.com/i
});
mapkey('U', 'stackoverflow 답변 up 스크롤 ', function () {
    pageHeadLine = document.querySelectorAll(".answer");
    if (0 < stackAnswer) {
        stackAnswer--;
    }
    pageHeadLine[stackAnswer].scrollIntoView();
    window.scrollBy(0, -47); // Adjust scrolling with a negative value here : stackoverflow upper bar
}, {
    domain: /stackoverflow\.com/i
});
domain: /kin\.naver\.com/i
mapkey('D', 'naver 답변 다운 스크롤', function () {
    pageHeadLine = document.querySelectorAll(".line_horizontal");
    if (pageHeadLine.length > naverAnswer) {
        naverAnswer++;
    }
    pageHeadLine[naverAnswer].scrollIntoView();
}, {
    domain: /kin\.naver\.com/i
});
mapkey('U', 'naver 답변 up 스크롤 ', function () {
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
// https: //help.github.com/articles/using-keyboard-shortcuts/
/*
mapkey('gC', 'Go to the code tab', function () {
    document.getElementById('btnPrevious').click();
}, {
    domain: /github\.com/i
});

mapkey('gI', 'Go to the Issues tab. ', function () {
    document.getElementById('btnNext').click();
}, {
    domain: /github\.com/i
});

mapkey('gP', 'Go to the Pull requests tab.  ', function () {
    document.getElementById('btnPrevious').click();
}, {
    domain: /github\.com/i
});

mapkey('gB', 'Go to the Projects tab. "', function () {
    document.getElementById('btnPrevious').click();
}, {
    domain: /github\.com/i
});

mapkey('gW', 'Go to the Wiki tab. ', function () {
    document.getElementById('btnPrevious').click();
}, {
    domain: /github\.com/i
});
//end of github

*/

mapkey('h', '', function () {
    document.getElementById('btnPrevious').click();
}, {
    domain: /www\.slideshare\.net/i
});mapkey('h', 'slideshare previous page', function () {
    document.getElementById('btnPrevious').click();
}, {
    domain: /www\.slideshare\.net/i
});mapkey('h', 'slideshare previous page', function () {
    document.getElementById('btnPrevious').click();
}, {
    domain: /www\.slideshare\.net/i
});
// page 양 옆으로 넘길 수 있도록 하기
// TODO: slidePlayer 사이트 추가하기 
mapkey('h', 'slideshare previous page', function () {
    document.getElementById('btnPrevious').click();
}, {
    domain: /www\.slideshare\.net/i
});
mapkey('l', 'slideshare next page', function () {
    document.getElementById('btnNext').click();
}, {
    domain: /www\.slideshare\.net/i
});

// FIXME: 동작하지 않음
mapkey('h', 'slidePlayer previous page', function () {

    (function () {
        // Load the script
        var script        = document.createElement("SCRIPT");
            script.src    = 'https://code.jquery.com/jquery-3.1.1.min.js';
            script.type   = 'text/javascript';
            script.onload = function () {
            var $ = window.jQuery;
            // Use $ here...

            $("component_container control_panel").click(function () {
                var $row = $(this).closest("tr"),         // Finds the closest row <tr> 
                    $tds = $row.find("td:nth-child(2)");  // Finds the 2nd <td> element
                $tds.click();
            });
        };
    });
}, {
    domain: /slideplayer\.com/i
});

// FIXME: 동작하지 않음
mapkey('l', 'slidePlayer next page', function () {

    (function () {
        // Load the script
        var script        = document.createElement("SCRIPT");
            script.src    = 'https://code.jquery.com/jquery-3.1.1.min.js';
            script.type   = 'text/javascript';
            script.onload = function () {
            var $ = window.jQuery;
            // Use $ here...

            $(".component_container.control_panel").click(function () {
                var $row = $(this).closest("tr"),         // Finds the closest row <tr> 
                    $tds = $row.find("td:nth-child(2)");  // Finds the 2nd <td> element
                $tds.click();
            });
        };
    });
}, {
    domain: /slideplayer\.com/i
});

// TODO: 잘 동작하지 않음 (이미 단축키가 assign 되어 있는 사이트라서 그런 것 처럼 보임)
mapkey('[', 'google book previous page', function () {
    document.getElementsByClassName('gb-pagination-controls.gb-pagination-controls-left').click();
}, {
    domain: /play\.google\.com\/books/i
});
mapkey(']', 'google book next page', function () {
    document.getElementsByClassName('gb-pagination-controls.gb-pagination-controls-right').click();
}, {
    domain: /play\.google\.com\/books/i
});
// skipControl sc-ir playControls__control playControls__prev skipControl__previous
// skipControl sc-ir playControls__control playControls__next skipControl__next
// sc-button-like playbackSoundBadge__like sc-button sc-button-small sc-button-icon sc-button-responsive
//Soundcloud shortcuts
// . 이 들어가야 하는지 아닌지 테스트 
// TODO: 잘 동작하지 않음 (이미 단축키가 assign 되어 있는 사이트라서 그런 것 처럼 보임)
mapkey('J', 'soundcloud previous song', function () {
    document.getElementsByClassName('sc-ir.playControls__control.playControls__prev.skipControl__previous').click();
}, {
    domain: /soundcloud\.com/i
});
mapkey('K', 'soundcltud next song', function () {
    document.getElementsByClassName('skipControl.sc-ir.playControls__control.playControls__next.skipControl__next').click();
}, {
    domain: /soundcloud\.com/i
});
mapkey('L', 'soundcloud like', function () {
    document.getElementsByClassName('sc-button-like.playbackSoundBadge__like.sc-button.sc-button-small.sc-button-icon.sc-button-responsive').click();
}, {
    domain: /soundcloud\.com/i
});

// TODO: 동작하지 않음 (양쪽으로 다 동자확지 않음)
mapkey('<Shift-]>', '한페이지이동(주소창 숫자 증가)', function () {

    var last     = pathname.lastIndexOf('/'),
        repeats  = RUNTIME.repeats;
    var pathname = location.pathname;
    if (pathname.length > 1) {
        pathname        = pathname.endsWith('/') ? pathname.substr(0, pathname.length - 1) : pathname;
        RUNTIME.repeats = 1;
        while (repeats-- > 1) {
            var p = pathname.lastIndexOf('/', last - 1);
            if (p === -1) {
                break;
            } else {
                last = p;
            }
        }
        pathname = pathname.substr(0, last);
    }

    lastPartOfURL = window.location.href.split('/').pop();
    if (isNaN(lastPartOfURL)) {
        lastPartOfURL++;
    }
    window.location.href = location.origin + pathname + lastPartOfURL;

    Front.showPopup(window.location.href);
});

mapkey('<Shift-[>', '한페이지 뒤로이동(주소창 숫자 감소)', function () {

    var last     = pathname.lastIndexOf('/'),
        repeats  = RUNTIME.repeats;
    var pathname = location.pathname;
    if (pathname.length > 1) {
        pathname        = pathname.endsWith('/') ? pathname.substr(0, pathname.length - 1) : pathname;
        RUNTIME.repeats = 1;
        while (repeats-- > 1) {
            var p = pathname.lastIndexOf('/', last - 1);
            if (p === -1) {
                break;
            } else {
                last = p;
            }
        }
        pathname = pathname.substr(0, last);
    }

    lastPartOfURL = window.location.href.split('/').pop();
    if (isNaN(lastPartOfURL)) {
        lastPartOfURL--;
    }
    window.location.href = location.origin + pathname + lastPartOfURL;

    Front.showPopup(window.location.href);
});

// TODO: 동작하지 않음 
mapkey('zt', 'remove element', function () {

    /*
    ele = document.getElementsByClassName('ctr-p');
    elem.parentNode.removeChild(elem);
    elem = document.getElementById('slim_appbar');
    elem.parentNode.removeChild(elem);
    elem = document.getElementById('searchform');
    elem.parentNode.removeChild(elem);
    elem = document.getElementById('sfcnt');
    elem.parentNode.removeChild(elem);
    elem = document.getElementById('hdtb-msb');
    elem.parentNode.removeChild(elem);
    elem = document.getElementById('foot-cnt');
    elem.parentNode.removeChild(elem);
*/
    document.classList.remove("iUh30");
    document.classList.remove("fl");

});

//TODO: google tlanslation auto copy make: result_box 안에 <span> </span> 있고 그걸 auto 로 복사하는 기능 만들기 
//p, ''df viewer mapping 

// mapkey('D', 'github readme 스크롤', function () {
//     stackAnswer++;
//     pageHeadLine = document.querySelectorAll(".answers");
//     pageHeadLine[stackAnswer].scrollIntoView();
// },{domain: /\\pdf_viewer.html*/i});
// mapkey('U', 'github readme up 스크롤 ', function () {
//     stackAnswer--;
//     pageHeadLine = document.querySelectorAll(".answers");
//     pageHeadLine[stackAnswer].scrollIntoView();
// },{domain: /\\pdf_viewer.html*/i});

// mapkey('D', 'github readme 스크롤', function () {
//     stackAnswer++;
//     pageHeadLine = document.querySelectorAll(".wp_syntax", ".wp_");
//     pageHeadLine[stackAnswer].scrollIntoView();
// },{domain: /\\pdf_viewer.html*/i});
// mapkey('U', 'github readme up 스크롤 ', function () {
//     stackAnswer--;
//     pageHeadLine = document.querySelectorAll(".answers");
//     pageHeadLine[stackAnswer].scrollIntoView();
// },{domain: /\*pdf_viewer.html*/i});
// */

//네이버 맵 지도 이동
/*
map('h', '<ArrowLeft>', {domain: /map\.naver\.com/i});
map('j', '<ArrowDown>',  {domain: /map\.naver\.com/i});
map('k', '<ArrowUp>', {domain: /map\.naver\.com/i});
map('l', '<ArrowRight>', {domain: /map\.naver\.com/i});
*/
// 지도 이동 


/* 이것도 잘 되지 않는다 
map( '<ArrowLeft>','h');
map( '<ArrowDown>','j');
map( '<ArrowUp>','k');
map( '<Arrowright>','l');
*/

/*
unmap( 'h' );
unmap( 'j' );
unmap( 'k' );
unmap( 'l' );
map( 'h','<ArrowLeft>');
map( 'j' ,'<ArrowDown>' );
map( 'k' ,'<ArrowUp>' );
map( 'l' ,'<Arrowright>' );
*/

//TODO: it from sadid https://github.com/brookhong/Surfingkeys/issues/768
//HOTFIX:
//ISSUE: 주석에서 auto로 ISSUE를 붙여주는 것이 있었으면 좋겠다

mapkey('yA', "#7Copy all tabs url", function () {
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

// FIXME:  동작하지 않음 
mapkey('yA', "#7Copy all tabs url", function () {
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

// TODO: 두개 이상일 때는 어떻게 처리할 지 생각하기. 그리고 memo라는 id가 보편적인 id인지 생각하기 
mapkey('gm', "#7 goto memo element", function () {
    pageHeadLine = document.getElementById("memo");
    pageHeadLine.scrollIntoView();
});
// TODO: 동작 확인하기 - 동작하지 않음 
mapkey('gc', "#7 goto comment element", function () {
    $scrollTo = $("*[id^=comment]");
});

// FIXME: what is number of #? 동작하지 않음
mapkey('oWN', "#7 open notepad", function () {
    var objShell = new ActiveXObject("shell.application");
    objShell.ShellExecute("notepad.exe", "", "", "open", 1);
});

// TODO: 구글 번역 자동 clipboad 복사 동작하지 않음.
vmapkey('zT', "#7 web crolling", function () {
    (function () {
        // Load the script
        var script        = document.createElement("SCRIPT");
            script.src    = 'https://code.jquery.com/jquery-3.1.1.min.js';
            script.type   = 'text/javascript';
            script.onload = function () {
            var $ = window.jQuery;
            // Use $ here...
            var name = window.getSelection.toString();
            var url  = "http://anyorigin.com/go?url=" + encodeURIComponent("https://translate.google.co.kr/?hl=ko#ko/en/") + name + "&callback=?";
            $.get(url, function (response) {
                console.log(response);
                Clipboard.write(response);
            });
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    })();
});

//2018-06-14 21: 27: 49
// ^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:\s?\(\d+\))?(?:[-\/\s.]|\d)+$
// email regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//
//<div>
//  <img id="image" width="100" src="https://placehold.it/100x100?text=✔">
//  <button onclick="copyElement('image');">Copy image</button>
