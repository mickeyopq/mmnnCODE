^F1:: 
WinWait, index.html - Google Chrome, 
IfWinNotActive, index.html - Google Chrome, , WinActivate, index.html - Google Chrome, 
WinWaitActive, index.html - Google Chrome, 
WinWait, ahk_class Vim
IfWinNotActive, ahk_class Vim, , WinActivate, ahk_class Vim, 
WinWaitActive, ahk_class Vim, 
Return


;ahk_class mintty
^F2:: 
WinWait, ahk_class mintty, 
IfWinNotActive, ahk_class mintty, , WinActivate, ahk_class mintty, 
WinWaitActive, ahk_class mintty, 
WinWait, ahk_class Vim
IfWinNotActive, ahk_class Vim, , WinActivate, ahk_class Vim, 
WinWaitActive, ahk_class Vim, 
Return

