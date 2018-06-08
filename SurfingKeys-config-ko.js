/*
Surfing keys config (SurfingKeys)
Korean specific surfing key config
Please copy this url to text box [load settings from:], and 'Save'
https://raw.githubusercontent.com/mindgitrwx/gitconventions/master/SurfingKeys-config-ko.js

Surfing key 에서 se를 누르면 setting surfing key 의 setting으로 들어가집니다. 이때 보여지는 화면에서
Advanced mode를 선택한 후, Load settings from에 위 주소를 입력하고 Save 해주시면 몇초 지나서 이 설정이 저장될 겁니다.

키 맵핑할 때 주의할 점
map('<Ctrl-Shif-e>', 'T');
이런식으로 맵핑하면 동작하지 않고
map('<Ctrl-E>', 'T');
이런 식으로 맵핑해야 함 
jonghyeon.rw@gmail.com
*/

// for page moving
var namuPage = 0;
var wikiPage = 0;

mapkey('<Ctrl-y>', 'Show me the money', function () {
    Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});
settings.caseSensitive = true; settings.omnibarSuggestion = true;
settings.defaultSearchEngine = 'L';

//unmap (탭이 6개 이상 열려있을 때, ctrl-6에 키가 바인딩되어있으면 자연스럽지가 않음 )
unmap('<Ctrl-6>');

mapkey('on', '#3Open Firefox newtab', function() {
    tabOpenLink("www.google.com");
});
// 바이두와 bing 을 굳이 사용할 필요가 없길래 unmap함 
removeSearchAliasX('b')
removeSearchAliasX('g')
removeSearchAliasX('w')
removeSearchAliasX('s')

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
addSearchAliasX('wC', '분류', 'https://www.google.com/search?q=classfication+of');
addSearchAliasX('wD', '차이점', 'https://www.google.com/search?q=difference+between+');
addSearchAliasX('wE', '예제', 'https://www.google.com/search?q=example+of+');
addSearchAliasX('wM', '방법', 'https://www.google.com/search?q=method+of+');
addSearchAliasX('wm', '뜻', 'https://www.googlecom/search?q=what+is+the+meaning+of+');
addSearchAliasX('wR', '랭킹', 'https://www.google.com/search?q=rank+of+');
addSearchAliasX('wS', '공통점', 'https://www.google.com/search?q=common+point+of+');
addSearchAliasX('wU', '사용예', 'https://www.google.com/search?q=usage+of+');
addSearchAliasX('wL', '리스트', 'https://www.google.com/search?q=list+of+');

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

//news 
//knowledge
//blog

mapkey('Q', '#8Open omnibar for word translation', function () {
    Front.openOmniquery({
        url: 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&dt=bd&q=',
        query: Visual.getWordUnderCursor(),
        style: 'opacity: 0.8;',
        parseResult: res => [render(JSON.parse(res.text))]
    });
});
Visual.setTranslationService('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ja&dt=t&dt=bd&q=', res => render(JSON.parse(res.text)));
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
mapkey('q', '#1Click on an Image or a button', function () {
    Hints.create("img, button", function (element) {
        Clipboard.write(element.src);
        searchSelectedWith('http://images.google.com/searchbyimage?image_url=', false, false, '');
        // Todo: copy 하는 방법은 없는지 알아보기
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
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

mapkey('Q', '#1Click on an Image or a button', function () {
    Hints.create("img, button", function (element) {
        $(this).attr("contenteditable", true);
        //Select the image
        SelectText($(this).get(0));
        //Execute copy Command
        //Note: This will ONLY work directly inside a click listenner
        document.execCommand('copy');
        //Unselect the content
        window.getSelection().removeAllRanges();
        //Make the container Div uneditable again
        $(this).removeAttr("contenteditable");
        //Success!!
        alert("image copied!");
    });
});
*/

function renderGoogleTranslate(res) {
    var exp = res.msg;
    if (res.data.definition) {
        var tmp = [];
        for (var reg in res.data.pronunciations) {
            tmp.push('<div>[{0}] {1}</div>'.format(reg, res.data.pronunciations[reg]));
            tmp.push('<div><audio src="{0}" controls></audio></div>'.format(res.data[reg+'_audio']));
        }
        tmp.push('<div>{0}</div>'.format(res.data.definition));
        exp = '<div>{0}</div>'.format(tmp.join('\n'));
    }
    return exp;
}
mapkey('Q', '#8Open omnibar for word translation', function() {
    Front.openOmniquery({
        url: "https://translate.google.cn/#auto/en/",
        /*
         * or
        url: function(q) {
            return "https://api.shanbay.com/bdc/search/?word=" + q
        },
        */
        query: Visual.getWordUnderCursor(),
        style: "opacity: 0.3;",
        parseResult: function(res) {
            var res = JSON.parse(res.text);
            return [ renderGoogleTranslate(res) ];
        }
    });
});
Visual.setTranslationService("https://translate.google.cn/#auto/en/", function(res) {
    var res = JSON.parse(res.text);
    return renderShanbay(res);
});
mapkey('yk', "Copy url before keyword insertion", function () {
    Clipboard.write(window.location.href.split('=')[0] + '=');
});
// surround   
mapkey('"yy', "surround url with double quotation mark", function () {
    Clipboard.write('"' + window.location.href + '"');
});
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
vmapkey('~Dy', "Delete surronded", function () {
    Clipboard.write(window.getSelection().toString().slice(1, -1));
});
vmapkey('~sy', "Remove special character", function () {
    Clipboard.write(window.getSelection().toString().replace(/[^A-Z0-9]/ig, ""));
});
vmapkey('~dy', "Markdown Strikethrough", function () {
    Clipboard.write('~~ ' + window.getSelection().toString() + ' ~~');
});
//Todo
/*
vmapkey('~diy', "remove inner dobule quoates strings", function () {
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
mapkey('"yma', '#7Copy multiple link URLs to the clipboard', function() {
    var linksToYank = [];
    Hints.create('*[href]', function(element) {
        linksToYank.push('"' + element.href + '"');
        Clipboard.write(linksToYank.join('\n'));
    }, {multipleHits: true});
});

//setting 
mapkey('gs', '#12Open Chrome Settings', function () {
    tabOpenLink("chrome://settings/");
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
// intellij bind - 동작하지 않음
mapkey('<Alt-F12>', '#12Open Chrome Settings', function () {
    tabOpenLink("chrome.send('inspect',[String(data.processId), String(data.routeId)])");
});

// vscode bind 동작하지 않음  
mapkey('<Ctrl-\>', '#12Open Chrome extensions', function () {
    RUNTIME("duplicateTab");
    RUNTIME("newWindow");
});
//todo
mapkey('<Ctrl-]>', '#12Open Chrome extensions', function () {
    RUNTIME("duplicateTab");
    RUNTIME("newWindow");
});
map('<Ctrl-V>', 'sm'); // markdown preview

mapkey('D', '나무위키 목차 대단위 다운스크롤', function () {
    namuPage++;
    pageId = 's-'+ namuPage.toString();
    document.getElementById(pageId).scrollIntoView();
},{domain: /namu\.wiki\.com/i});
mapkey('U', '나무위키 목차 대단위 up스크롤', function () {
    namuPage--;
    pageId = 's-' + namuPage.toString();
    document.getElementById(pageId).scrollIntoView();
},{domain: /namu\.wiki\.com/i});

mapkey('D', '나무위키 목차 대단위 다운스크롤', function () {
    namuPage++;
    pageId = 's-'+ namuPage.toString();
    document.getElementById(pageId).scrollIntoView();
},{domain: /\iki\.com/i});
mapkey('U', '나무위키 목차 대단위 up스크롤', function () {
    namuPage--;
    pageId = 's-' + namuPage.toString();
    document.getElementById(pageId).scrollIntoView();
},{domain: /namu\.wiki\.com/i});

mapkey('D', '위키 목차 대단위 다운스크롤', function () {
    wikiPage++;
    pageHeadLine = document.querySelectorAll(".mw-headline");
    pageHeadLine[wikiPage].scrollIntoView();
},{domain: /en\.wikipedia\.org/i});
mapkey('U', '위키 목차 대단위 up스크롤', function () {
    wikiPage--;
    pageHeadLine = document.querySelectorAll(".mw-headline");
    pageHeadLine[wikiPage].scrollIntoView();
},{domain: /en\.wikipedia\.org/i});

// Todo: 아직 구현되지 않음
mapkey('D', 'wikiwand 목차 대단위 스크롤 ', function () {
    wikiPage++;
    pageHeadLine = document.querySelectorAll(".mw-headline");
    pageHeadLine[wikiPage].scrollIntoView();
},{domain: /www\.wikiwand\.org/i});
mapkey('U', 'wikiwand 목차  up 스크롤 ', function () {
    wikiPage--;
    pageHeadLine = document.querySelectorAll(".mw-headline");
    pageHeadLine[wikiPage].scrollIntoView();
},{domain: /www\.wikiwand\.org/i});

// Todo: 아직 구현되지 않음 
/*
mapkey('D', 'stackoverflow 답변 다운 스크롤', function () {
    wikiPage++;
    pageId =  ;
    document.getElementById(pageId).scrollIntoView();
},{domain: /www\.wikiwand\.org/i});
mapkey('U', 'stackoverflow 답변 up 스크롤 ', function () {
    wikiPage--;
    pageId =  ;
    document.getElementById(pageId).scrollIntoView();
},{domain: /www\.wikiwand\.org/i});
*/
//네이버 맵 지도 이동
/*
map('h', 'ArrowLeft', );
map('j', 'ArrowDown',  {domain: 'map\.naver\.com/i'});
map('k', 'ArrowUp', {domain: 'map\.naver\.com/i'});
map('l', 'Arrowright', {domain: 'map\.naver\.com/i'});
*/
// 지도 이동 

/* 이것도 잘 되지 않는다 
map( '<ArrowLeft>','h');
map( '<ArrowDown>','j');
map( '<ArrowUp>','k');
map( '<Arrowright>','l');
*/

//naver map
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
