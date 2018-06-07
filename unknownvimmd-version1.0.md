
# 1. Insert Mode 

CTRL-A          insert preiously inserted text

CTRL-C          quit insert mode, without checking for abbreviation, unless 'insertmode' set.

CTRL-D          delete one shiftwidth of indent in the current

CTRL-E          insert name the character which is below the cursor

CTRL-O          execute a single command and return to insert mode

CTRL-U          delete all entered characters in the current liner

CTRL-W          delete word before the cursor

CTRL-Y          insert the character which is above the cursor

| CTRL-\ CTRL-N  go to Normal mode

CTRL-\ a - z    reserved for extensions

0 CTRL-D        delete all indent in the current line

### 2. Normal mode                                          *normal-index*

note: 1 = cursor movement command; 2 = can be undone/redone

char          note action in Normal mode        

CTRL-B          1  scroll N screens Backwards

CTRL-D             scroll Down N lines (default: half a screen)

CTRL-E             scroll N lines upwards (N lines Extra)

CTRL-F          1  scroll N screens Forward

CTRL-G             display current file name and position

<CR>            1  cursor to the first CHAR N lines lower

CTRL-O          1  go to N older entry in jump list

CTRL-P          1  cursor N lines upward

CTRL-Q             (used for terminal control flow)

CTRL-R          2  redo changes which were undone with 'u'

CTRL-\ CTRL-N      go to Normal mode (no-op)

CTRL-\ a - z       reserved for extensions

CTRL-^             edit Nth alternate file (equivalent to ":e #N")

!!{filter}      2  filter N lines through the {filter} command

"{a-zA-Z0-9.%#:-"}  use buffer {a-zA-Z0-9.%#:-"} for next delete, yank or put (uppercase to append) ({.%#:} only work with put)

샾               1  search backward for the Nth occurrence of the ident under the cursor

$               1  cursor to the end of Nth next line

{count}%        1  go to N percentage in the file

&               2  repeat last :s

'{a-zA-Z0-9}    1  cursor to the first CHAR on the line with mark {a-zA-Z0-9}

''              1  cursor to the first CHAR of the line where the cursor was before the latest jump.

'(              1  cursor to the first CHAR on the line of the start of the current sentence

')              1  cursor to the first CHAR on the line of the end of the current sentence

'<              1  cursor to the first CHAR of the line where highlighted area starts/started in the current buffer.

'>              1  cursor to the first CHAR of the line where highlighted area ends/ended in the current buffer.

'[              1  cursor to the first CHAR on the line of the start of last operated text or start of putted text

']              1  cursor to the first CHAR on the line of the end of last operated text or end of putted text

'{              1  cursor to the first CHAR on the line of the start of the current paragraph

'}              1  cursor to the first CHAR on the line of the end of the current paragraph

'('             1  cursor N sentences backward

')'             1  cursor N sentences forward

'*'             1  search forward for the Nth occurrence of the ident under the cursor

'+'             1  cursor to the first CHAR N lines lower

'-'             1  cursor to the first CHAR N lines higher

.               2  repeat last change with count replaced with N

/{pattern}<CR>  1  search forward for the Nth occurrence of {pattern}

/<CR>           1  search forward for {pattern} of last search

{count}:           start entering an Ex command with range from current line to N lines down

<{motion}       2  shift Nmove lines one 'shiftwidth' leftwards

>{motion}       2  shift Nmove lines one 'shiftwidth' rightwards

?{pattern}<CR>  1  search backward for the Nth previous occurrence of {pattern}

?<CR>           1  search backward for {pattern} of last search

@{a-z}          2  execute the contents of named buffer {a-z} N times

@:                 repeat the previous ":" command N times

@@              2  repeat the previous @{a-z} N times

A               2  append text after the end of the line N times

B               1  cursor N WORDS backward

["x]C           2  change from the cursor position to the end of the line, and N-1 more lines [into buffer x]; synonym for "c$"

["x]D           2  delete the characters under the cursor until the end of the line and N-1 more lines [into buffer x]; synonym for "d$" 

G               1  cursor to line N, default last line

H               1  cursor to line N from top of screen

I               2  insert text before the first CHAR on the line N times

K                  lookup Keyword under the cursor with 'keywordprg'

L               1  cursor to line N from bottom of screen

M               1  cursor to middle line of screen

N               1  repeat the latest '/' or '?' N times in opposite direction

["x]P           2  put the text [from buffer x] before the cursor N times

["x]S           2  delete N lines [into buffer x] and start insert; synonym for "^cc" or "0cc", depending on autoindent

["x]Y              yank N lines [tx]; synonym for "yy"

ZZ                 store current file if modified, and exit

ZQ                 exit current file always

[{char}            square bracket command (see below)

]{char}            square bracket command (see below)

_               1  cursor to the first CHAR N - 1 lines lower

`{a-zA-Z0-9}    1  cursor to the mark {a-zA-Z0-9}

`(              1  cursor to the start of the current sentence

`)              1  cursor to the end of the current sentence

`<              1  cursor to the start of the highlighted area

`>              1  cursor to the end of the highlighted area

`[              1  cursor to the start of last operated text or start of putted text

`]              1  cursor to the end of last operated text or end of putted text

``              1  cursor to the position before latest jump

`{              1  cursor to the start of the current paragraph

`}              1  cursor to the end of the current paragraph

a               2  append text after the cursor N times

b               1  cursor N words backward

["x]c{motion}   2  delete Nmove text [into buffer x] and start

{               1  cursor N paragraphs backward

|               1  cursor to column N

}               1  cursor N paragraphs forward


## 2.1 Text objects                                                *objects*

These can be used after an operator or in Visual mode to select an object.

aB                 "a Block" from "[{" to "]}" (with brackets)

aW                 "a WORD" (with white space)

ab                 "a block" from "[(" to "])" (with braces)

ap                 "a paragraph" (with white space)

as                 "a sentence" (with white space)

aw                 "a word" (with white space)

iB                 "inner Block" from "[{" and "]}"

ib                 "inner block" from "[(" to "])"

ip                 "inner paragraph"

is                 "inner sentence"

example: when I find myself and times of trouble mother marry comes to me spaeking words of wisdom let it be.
In statistical modeling, regression analysis is a set of statistical processes for estimating the relationships among variables. It includes many techniques for modeling and analyzing several variables, when the focus is on the relationship between a dependent variable and one or more independent variables (or 'predictors'). More specifically, regression analysis helps one understand how the typical value of the dependent variable (or 'criterion variable') changes when any one of the independent variables is varied, while the other independent variables are held fixed.

Most commonly, regression analysis estimates the conditional expectation of the dependent variable given the independent variables – that is, the average value of the dependent variable when the independent variables are fixed. Less commonly, the focus is on a quantile, or other location parameter of the conditional distribution of the dependent variable given the independent variables. In all cases, a function of the independent variables called the regression function is to be estimated. In regression analysis, it is also of interest to characterize the variation of the dependent variable around the prediction of the regression function using a probability distribution. A related but distinct approach is Necessary Condition Analysis[1] (NCA), which estimates the maximum (rather than average) value of the dependent variable for a given value of the independent variable (ceiling line rather than central line) in order to identify what value of the independent variable is necessary but not sufficient for a given value of the dependent variable.

Regression analysis is widely used for prediction and forecasting, where its use has substantial overlap with the field of machine learning. Regression analysis is also used to understand which among the independent variables are related to the dependent variable, and to explore the forms of these relationships. In restricted circumstances, regression analysis can be used to infer causal relationships between the independent and dependent variables. However this can lead to illusions or false relationships, so caution is advisable;[2] for example, correlation does not prove causation.

Many techniques for carrying out regression analysis have been developed. Familiar methods such as linear regression and ordinary least squares regression are parametric, in that the regression function is defined in terms of a finite number of unknown parameters that are estimated from the data. Nonparametric regression refers to techniques that allow the regression function to lie in a specified set of functions, which may be infinite-dimensional.

The performance of regression analysis methods in practice depends on the form of the data generating process, and how it relates to the regression approach being used. Since the true form of the data-generating process is generally not known, regression analysis often depends to some extent on making assumptions about this process. These assumptions are sometimes testable if a sufficient quantity of data is available. Regression models for prediction are often useful even when the assumptions are moderately violated, although they may not perform optimally. However, in many applications, especially with small effects or questions of causality based on observational data, regression methods can give misleading results.[3][4]

In a narrower sense, regression may refer specifically to the estimation of continuous response (dependent) variables, as opposed to the discrete response variables used in classification.[5] The case of a continuous dependent variable may be more specifically referred to as metric regression to distinguish it from related problems.

## 2.2 Window commands                                             *CTRL-W*

tag             command            action in Normal mode        

## 2.3 Square bracket commands                                     *[* *]*

char          note action in Normal mode        

[(              1  cursor N times back to unmatched '('

[[              1  cursor N sections backward

[]              1  cursor N SECTIONS backward

[b              1  cursor N camel words backward

[p              2  like "P", but adjust indent to current line

[m              1  cursor N times back to start of member function

[w              1  cursor N camel words forward

[{              1  cursor N times back to unmatched '{'

])              1  cursor N times forward to unmatched ')'

']['              1  cursor N SECTIONS forward

']]'              1  cursor N sections forward

]b              1  cursor backward to the end of camel word N

]p              2  like "p", but adjust indent to current line

]m              1  cursor N times forward to end of member function

]w              1  cursor forward to the end of camel word N

]}              1  cursor N times forward to unmatched '}'

## 2.4 Commands starting with 'g' 

g_CTRL-G           show information about current cursor position

g#              1  like "#", but without using "\<" and "\>"

g$              1  when 'wrap' off go to rightmost character of the current line that is on the screen; when 'wrap' on go to the rightmost character of the current screen line

g&              2  repeat last ":s" on all lines

g(              1  cursor N sentence ends backward

g)              1  cursor N sentence ends forward

g*              1  like "*", but without using "\<" and "\>"

g0              1  when 'wrap' off go to leftmost character of the current line that is on the screen; when 'wrap' on go to the leftmost character of the current screen line

g8                 print hex value of bytes used in UTF-8 character under the cursor

gD              1  go to definition of word under the cursor in current file

gE              1  go backwards to the end of the previous WORD

gI              2  like "I", but always start in column 1

gJ              2  join lines without inserting space

["x]gP          2  put the text [from register x] before the cursor N times, leave the cursor after it

gU{motion}      2  make Nmove text uppercase

g^              1  when 'wrap' off go to leftmost non-white character of the current line that is on the screen; when 'wrap' on go to the leftmost non-white character of the current screen line

gd              1  go to definition of word under the cursor in current function. 

ge              1  go backwards to the end of the previous word

gi              2  like "i", but first move to the |'^| mark

gj              1  like "j", but when 'wrap' on go N screen lines down

gk              1  like "k", but when 'wrap' on go N screen lines up

gm              1  go to character at middle of the screenline

go              1  cursor to byte N in the buffer

["x]gp          2  put the text [from register x] after the cursor N times, leave the cursor after it

gu{motion}      2  make Nmove text lowercase

gv                 reselect the previous Visual area

g~{motion}      2  swap case for Nmove text

## 2.5 Commands starting with 'z'                                          *z*

z<CR>              redraw, cursor line to top of window, cursor on first non-blank

z+                 cursor on line N (default line below window), otherwise like "z<CR>"

z-                 redraw, cursor line at bottom of window, cursor on first non-blank

z.                 redraw, cursor line to center of window, cursor on first non-blank

zM zR 

z^                 cursor on line N (default line above window), otherwise like "z-"

zb                 redraw, cursor line at bottom of window

ze                 when 'wrap' off scroll horizontally to position the cursor at the end (right side) of the screen

zh                 when 'wrap' off scroll screen N characters to the right

zl                 when 'wrap' off scroll screen N characters to the left

zs                 when 'wrap' off scroll horizontally to position the cursor at the start (left side) of the screen

### 3. Visual mode                                          *visual-index*

Most commands in Visual mode are the same as in Normal mode. The ones listed 
here are those that are different.

|v_CTRL-\_CTRL-N| CTRL-\ CTRL-N    stop Visual mode

|v_CTRL-V|      CTRL-V             make Visual mode blockwise or stop Visual mode

!{filter}       2  filter the highlighted lines through the external command {filter}

A               2  block mode: append same text in all lines, after the highlighted area

C               2  delete the highlighted lines and start insert // vscode에서안됨

D               2  delete the highlighted lines

I               2  block mode: insert same text in all lines, before the highlighted area

O                  Move horizontally to other corner of area.

R               2  delete the highlighted lines and start insert

S               2  delete the highlighted lines and start insert

U               2  make highlighted area uppercase

a<                 extend highlighted area with a <> block

aB                 {extend highlighted area with a {} block}

aW                 extend highlighted area with "a WORD"

a[                 extend highlighted area with a [] block

ab                 (extend highlighted area with a () block)

ap                 extend highlighted area with a paragraph

as                 extend highlighted area with a sentence.

aw                 extend highlighted area with "a word"

c               2  delete highlighted area and start insert

gJ              2  join the highlighted lines without inserting spaces

gq              2  format the highlighted lines

gv                 exchange current and previous highlighted area

i<                 extend highlighted area with inner <> block

iB                 extend highlighted area with inner {} block

i[                 extend highlighted area with inner [] block

ib                 extend highlighted area with inner () block

ip                 extend highlighted area with inner paragraph

is                 extend highlighted area with inner sentence

r               2  delete highlighted area and start insert

s               2  delete highlighted area and start insert

u               2  make higHLIGHTED area lowercase

### 4. Command-line editing                                 *ex-edit-index*

Get to the command-line with the ':', '!', '/' or '?' commands. Normal characters are inserted at the current cursor position.

CTRL-B          cursor to begin of command-line // vscode에서 안됨 다른걸로 맵핑되어 있음

CTRL-E          cursor to end of command-line // vscode에서 아됨 다른걸로 맵핑 

CTRL-K {char1} {char2} enter digraph

<CR>            execute entered command control flow

CTRL-V          insert next non-digit literally, insert three digit decimal number as a single byte.

CTRL-W          delete the word in front of the cursor

CTRL-\ a - z    reserved for extensions


### 5. EX commands                                  *ex-cmd-index* *:index*

This is a brief but complete listing of all the ":" commands, without mentioning any arguments.  The optional part of the command name is inside []. The commands are sorted on the non-optional part of their name.

:!              filter lines or execute an external command

:!!             repeat last ":!" command

:&              repeat last ":substitute"

:<              shift lines one 'shiftwidth' left

:>              shift lines one 'shiftwidth' right

:@              execute contents of a register

:@@             repeat the previous ":@"

:N[ext]         go to previous file in the argument list

:argu[ment]     go to specific file in the argument list

:as[cii]        print ascii value of character under the cursor

:bro[wse]       use file selection dialog

:clo[se]        close current window

:co[py]         copy lines

:d[elete]       delete lines

:di[splay]      display registers

:dig[raphs]     show or enter digraphs

:fin[d]         find file in 'path' and edit it

:fir[st]        go to the first file in the argument list

:go[to]         go to byte in the buffer

:hid[e]         close current editor

:his[tory]      print a history list

:ju[mps]        print the jump list

:k              set a mark

:la[st]         go to the last file in the argument list

:m[ove]         move lines

:ma[rk]         set a mark

:marks          list all marks

:n[ext]         go to next file in the argument list

:noh[lsearch]   suspend 'hlsearch' highlighting

:on[ly]         close all windows except current one

:prev[ious]     go to previous file in argument list

:pro[mptfind]   Search dialog

:promptr[epl]   Search/Replace dialog

:pu[t]          insert contents of register in the text

:q[uit]         quit current window (when one window quit Vim)

:quita[ll]      quit Vim

:qa[ll]         quit Vim

:red[o]         redo one undone change

:reg[isters]    display the contents of registers

:rew[ind]       go to the first file in the argument list

:s[ubstitute]   find and replace text

:se[t]          show or set options

:t              same as ":copy"

:u[ndo]         undo last change(s)

:wN[ext]        write to a file and go to previous file in argument list

:wa[ll]         write all (changed) buffers

:wn[ext]        write to a file and go to next file in argument list

:wp[revious]    write to a file and go to previous file in argument list

:wqa[ll]        write all changed buffers and quit Vim

:x[it]          write if buffer changed and quit window or Vim

:xa[ll]         same as ":wqall"

:y[ank]         yank lines into a register

:~              repeat last ":substitute"
