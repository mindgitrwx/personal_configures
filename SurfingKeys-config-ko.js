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
mapkey('<Ctrl-y>', 'Show me the money', function () {
    Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});

settings.caseSensitive = true;
settings.omnibarSuggestion = true;

//unmap (탭이 6개 이상 열려있을 때, ctrl-6에 키가 바인딩되어있으면 자연스럽지가 않음 )
unmap('<Ctrl-6>');
unmap('ob'); // 바이두와 bing 을 굳이 사용할 필요가 없길래 unmap함 
unmap('og');
unmap('ow');

//map
addSearchAliasX('mN', 'navermap', 'https://map.naver.com/?query=');
addSearchAliasX('mG', '구글맵', 'https://www.google.com/maps?q=');
addSearchAliasX('R', '도로명주소', 'http://www.juso.go.kr/support/AddressMainSearch.do?searchType=location_newaddr&searchKeyword=');

//coding
addSearchAliasX('L', 'Im feeling lucky', 'https://www.google.com/search?btnI=1&q=');
addSearchAliasX('C', 'search coding', 'https://searchcode.com/?q=');
addSearchAliasX('cW', 'chrome webstore', 'https://chrome.google.com/webstore/search/');
addSearchAliasX('cE', 'chrome extension', 'https://chrome.google.com/webstore/search/');
addSearchAliasX('M', 'math (수학수식계산)', 'https://www.searchonmath.com/result?equation=');
addSearchAliasX('W', '계산기(울프럼알파)', 'https://www.wolframalpha.com/input/?i=');
addSearchAliasX('gH', 'github', 'https://github.com/search?q=', 'o');

//sns
addSearchAliasX('fB', 'facebook(페이스북)', 'https://www.facebook.com/search/top/?q=');

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

//dictionary
addSearchAliasX('t', '한글영어번역', 'https://translate.google.co.kr/?hl=ko#ko/en/');
addSearchAliasX('T', '영어한글번역', 'https://translate.google.co.kr/?hl=ko#en/ko/');
addSearchAliasX('nA', '네이버사전all', 'http://dic.naver.com/search.nhn?dicQuery=');
addSearchAliasX('nE', '네어버사전example', 'http://endic.naver.com/search_example.nhn?sLn=kr&query=');

//shop
addSearchAliasX('aZ', '아마존', 'https://www.amazon.com/s/?field-keywords=');
addSearchAliasX('sA', '아마존', 'https://www.amazon.com/s/?field-keywords=');
addSearchAliasX('sC', '쿠팡', 'http://www.coupang.com/np/search?component=&q=');
addSearchAliasX('sD', '다나와', 'http://search.danawa.com/dsearch.php?k1=');
addSearchAliasX('sI', '인터파크', 'http://isearch.interpark.com/isearch?q=');
addSearchAliasX('sT', '티몬', 'http://search.ticketmonster.co.kr/search/?keyword=');
addSearchAliasX('sY', 'yes24', 'http://www.yes24.com/searchcorner/Search?keywordAd=&keyword=&domain=ALL&qdomain=%C0%FC%C3%BC&Wcode=001_005&query=');

//music
addSearchAliasX('sc', 'soundcloud', 'https://soundcloud.com/search?q=');
addSearchAliasX('scI', 'soundcloudid', 'https://soundcloud.com/');
addSearchAliasX('sp', 'spotify', 'https://open.spotify.com/search/results/');

addSearchAliasX('spA', 'spotify', 'https://open.spotify.com/search/albums/');
addSearchAliasX('mL', 'melon', 'https://www.melon.com/search/total/index.htm?q=');

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

/*
mapkey('q', '#1Click on an Image or a button', function() {
    Hints.create("img, button", Hints.dispatchMouseClick);
    searchSelectedWith('http://images.google.com/searchbyimage?image_url=', false, false, '');
});
mapkey('ya', '#7Copy a link URL to the clipboard', function() {
    Hints.create('*[href]', function(element) {
        Clipboard.write(element.href);
    });
});
*/

// 구글 이미지 검색  (주소가 정확할 경우 잘 진행됨)
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

// surround   
mapkey('"yy', "surround url with double quotation mark", function () {
    Clipboard.write('"' + window.location.href + '"');
});
vmapkey('"y', "surround selection with doube quotation mark", function () {
    Clipboard.write('"' + window.getSelection().toString() + '"');
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
vmapkey('gcy', "added comma", function () {
    Clipboard.write(window.getSelection().toString().replace(/[ ,]+/g, ","));
});
// 보다 간단한 방법이 필요함 (vmapkey의 내부의 코드를 보지 못했음 )
vmapkey('gdy', "delete first 1 character", function () {
    Clipboard.write(window.getSelection().toString().substr(1));
});
vmapkey('gDy', "delete surronded", function () {
    Clipboard.write(window.getSelection().toString().slice(1, -1));
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
mapkey('<Ctrl-]>', '#12Open Chrome extensions', function () {
    RUNTIME("duplicateTab");
    RUNTIME("newWindow");
});

map('<Ctrl-V>', 'sm'); // markdown preview

// 지도 이동 
/*
map('h', 'ArrowLeft', {domain: 'map\.naver\.com/i'});
map('j', 'ArrowDown',  {domain: 'map\.naver\.com/i'});
map('k', 'ArrowUp', {domain: 'map\.naver\.com/i'});
map('l', 'Arrowright', {domain: 'map\.naver\.com/i'});
*/
