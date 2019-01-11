;; -*- mode: emacs-lisp -*-
;; This file is loaded by Spacemacs at startup.
;; It must be stored in your home directory.

(defun dotspacemacs/layers ()
  "Configuration Layers declaration.
You should not put any user code in this function besides modifying the variable
values."
  (setq-default
   ;; Base distribution to use. This is a layer contained in the directory
   ;; `+distribution'. For now available distributions are `spacemacs-base'
   ;; or `spacemacs'. (default 'spacemacs)
   dotspacemacs-distribution 'spacemacs 
   ;; Lazy installation of layers (i.e. layers are installed only when a file
   ;; with a supported type is opened). Possible values are `all', `unused'
   ;; and `nil'. `unused' will lazy install only unused layers (i.e. layers
   ;; not listed in variable `dotspacemacs-configuration-layers'), `all' will
   ;; lazy install any layer that support lazy installation even the layers
   ;; listed in `dotspacemacs-configuration-layers'. `nil' disable the lazy
   ;; installation feature and you have to explicitly list a layer in the
   ;; variable `dotspacemacs-configuration-layers' to install it.
   ;; (default 'unused)
   dotspacemacs-enable-lazy-installation 'unused
   ;; If non-nil then Spacemacs will ask for confirmation before installing
   ;; a layer lazily. (default t)
   dotspacemacs-ask-for-lazy-installation t
   ;; If non-nil layers with lazy install support are lazy installed.
   ;; List of additional paths where to look for configuration layers.
   ;; Paths must have a trailing slash (i.e. `~/.mycontribs/')
   dotspacemacs-configuration-layer-path '()
   ;; List of configuration layers to load.
   dotspacemacs-configuration-layers
   '(
     markdown
     vimscript
     yaml
     ruby
     html
     javascript
     python
     ;; ----------------------------------------------------------------
     ;; Example of useful layers you may want to use right away.
     ;; Uncomment some layer names and press <SPC f e R> (Vim style) or
     ;; <M-m f e R> (Emacs style) to install them.
     ;; ----------------------------------------------------------------
     helm
     auto-completion
     ;; better-defaults
     emacs-lisp
     c-c++
     git
     org
      (shell :variables
             shell-default-height 30
             shell-default-position 'bottom)
     spell-checking
     syntax-checking
     version-control
     )
   ;; List of additional packages that will be installed without being
   ;; wrapped in a layer. If you need some configuration for these
   ;; packages, then consider creating a layer. You can also put the
   ;; configuration in `dotspacemacs/user-config'.
   dotspacemacs-additional-packages '(
                                      ;; jumps
                                      ace-jump-mode
                                      ;; git, latex, otherutils
                                      ivy
                                      latex-math-preview 
                                      latex-preview-pane 
                                      magit
                                      pdf-tools
                                      rainbow-mode
                                      ranger
                                      restart-emacs
                                      smex
                                      sos
                                      vimrc-mode
                                      ;;C
                                      company-irony
                                      flycheck-irony
                                      flyspell
                                      irony
                                      ;;cpp
                                      cmake-ide
                                      cquery
                                      sr-speedbar
                                      ppd-sr-speedbar
                                      company-c-headers
                                      cedit
                                      projectile
                                      ggtags
                                      ccls
                                      flycheck
                                      srefactor
                                      ;;rust
                                      flycheck-rust
                                      ;;go
                                      ;;python
                                      ;;rtags
                                      rtags
                                      ac-rtags
                                      ivy-rtags
                                      helm-rtags
                                      flycheck-rtags
                                      flycheck-popup-tip
                                      company-rtags
                                      ;;other utils
                                      markdown-preview-mode
                                      markdwon-preview-eww
                                      flymd
                                      chronos
                                      tea-time
                                      helm-R
                                      search-web
                                      howdoi
                                      typit
                                      speed-type
                                      window-numbering
                                      ;;move
                                      ;;copy

                                      ;;snippet
                                      snippet
                                      yasnippet
                                      yasnippet-snippets
                                      yasnippet-classic-snippets
                                      xclip
                                      )
   ;; A list of packages that cannot be updated.
   dotspacemacs-frozen-packages '()
   ;; A list of packages that will not be installed and loaded.
   dotspacemacs-excluded-packages '()
   ;; Defines the behaviour of Spacemacs when installing packages.
   ;; Possible values are `used-only', `used-but-keep-unused' and `all'.
   ;; `used-only' installs only explicitly used packages and uninstall any
   ;; unused packages as well as their unused dependencies.
   ;; `used-but-keep-unused' installs only the used packages but won't uninstall
   ;; them if they become unused. `all' installs *all* packages supported by
   ;; Spacemacs and never uninstall them. (default is `used-only')
   dotspacemacs-install-packages 'used-only))
(defun dotspacemacs/init ()
  "Initialization function.
This function is called at the very startup of Spacemacs initialization
before layers configuration.
You should not put any user code in there besides modifying the variable
values."
  ;; This setq-default sexp is an exhaustive list of all the supported
  ;; spacemacs settings.
  (setq-default
   ;; If non nil ELPA repositories are contacted via HTTPS whenever it's
   ;; possible. Set it to nil if you have no way to use HTTPS in your
   ;; environment, otherwise it is strongly recommended to let it set to t.
   ;; This variable has no effect if Emacs is launched with the parameter
   ;; `--insecure' which forces the value of this variable to nil.
   ;; (default t)
   dotspacemacs-elpa-https t
   ;; Maximum allowed time in seconds to contact an ELPA repository.
   dotspacemacs-elpa-timeout 5
   ;; If non nil then spacemacs will check for updates at startup
   ;; when the current branch is not `develop'. Note that checking for
   ;; new versions works via git commands, thus it calls GitHub services
   ;; whenever you start Emacs. (default nil)
   dotspacemacs-check-for-update nil
   ;; If non-nil, a form that evaluates to a package directory. For example, to
   ;; use different package directories for different Emacs versions, set this
   ;; to `emacs-version'.
   dotspacemacs-elpa-subdirectory nil
   ;; One of `vim', `emacs' or `hybrid'.
   ;; `hybrid' is like `vim' except that `insert state' is replaced by the
   ;; `hybrid state' with `emacs' key bindings. The value can also be a list
   ;; with `:variables' keyword (similar to layers). Check the editing styles
   ;; section of the documentation for details on available variables.
   ;; (default 'vim)
   dotspacemacs-editing-style 'vim
   ;; If non nil output loading progress in `*Messages*' buffer. (default nil)
   dotspacemacs-verbose-loading nil
   ;; Specify the startup banner. Default value is `official', it displays
   ;; the official spacemacs logo. An integer value is the index of text
   ;; banner, `random' chooses a random text banner in `core/banners'
   ;; directory. A string value must be a path to an image format supported
   ;; by your Emacs build.
   ;; If the value is nil then no banner is displayed. (default 'official)
   dotspacemacs-startup-banner 'official
   ;; List of items to show in startup buffer or an association list of
   ;; the form `(list-type . list-size)`. If nil then it is disabled.
   ;; Possible values for list-type are:
   ;; `recents' `bookmarks' `projects' `agenda' `todos'."
   ;; List sizes may be nil, in which case
   ;; `spacemacs-buffer-startup-lists-length' takes effect.
   dotspacemacs-startup-lists '((recents . 5)
                                (projects . 7))
   ;; True if the home buffer should respond to resize events.
   dotspacemacs-startup-buffer-responsive t
   ;; Default major mode of the scratch buffer (default `text-mode')
   dotspacemacs-scratch-mode 'text-mode
   ;; List of themes, the first of the list is loaded when spacemacs starts.
   ;; Press <SPC> T n to cycle to the next theme in the list (works great
   ;; with 2 themes variants, one dark and one light)
   dotspacemacs-themes '(spacemacs-dark
                         spacemacs-light)
   ;; If non nil the cursor color matches the state color in GUI Emacs.
   dotspacemacs-colorize-cursor-according-to-state t
   ;; Default font, or prioritized list of fonts. `powerline-scale' allows to
   ;; quickly tweak the mode-line size to make separators look not too crappy.
   dotspacemacs-default-font '("Source Code Pro"
                               :size 13
                               :weight normal
                               :width normal
                               :powerline-scale 1.1)
   ;; The leader key
   dotspacemacs-leader-key "SPC"
   ;; The key used for Emacs commands (M-x) (after pressing on the leader key).
   ;; (default "SPC")
   dotspacemacs-emacs-command-key "SPC"
   ;; The key used for Vim Ex commands (default ":")
   dotspacemacs-ex-command-key ":"
   ;; The leader key accessible in `emacs state' and `insert state'
   ;; (default "M-m")
   dotspacemacs-emacs-leader-key "M-m"
   ;; Major mode leader key is a shortcut key which is the equivalent of
   ;; pressing `<leader> m`. Set it to `nil` to disable it. (default ",")
   dotspacemacs-major-mode-leader-key ","
   ;; Major mode leader key accessible in `emacs state' and `insert state'.
   ;; (default "C-M-m")
   dotspacemacs-major-mode-emacs-leader-key "C-M-m"
   ;; These variables control whether separate commands are bound in the GUI to
   ;; the key pairs C-i, TAB and C-m, RET.
   ;; Setting it to a non-nil value, allows for separate commands under <C-i>
   ;; and TAB or <C-m> and RET.
   ;; In the terminal, these pairs are generally indistinguishable, so this only
   ;; works in the GUI. (default nil)
   dotspacemacs-distinguish-gui-tab nil
   ;; If non nil `Y' is remapped to `y$' in Evil states. (default nil)
   dotspacemacs-remap-Y-to-y$ nil
   ;; If non-nil, the shift mappings `<' and `>' retain visual state if used
   ;; there. (default t)
   dotspacemacs-retain-visual-state-on-shift t
   ;; If non-nil, J and K move lines up and down when in visual mode.
   ;; (default nil)
   dotspacemacs-visual-line-move-text nil
   ;; If non nil, inverse the meaning of `g' in `:substitute' Evil ex-command.
   ;; (default nil)
   dotspacemacs-ex-substitute-global nil
   ;; Name of the default layout (default "Default")
   dotspacemacs-default-layout-name "Default"
   ;; If non nil the default layout name is displayed in the mode-line.
   ;; (default nil)
   dotspacemacs-display-default-layout nil
   ;; If non nil then the last auto saved layouts are resume automatically upon
   ;; start. (default nil)
   dotspacemacs-auto-resume-layouts nil
   ;; Size (in MB) above which spacemacs will prompt to open the large file
   ;; literally to avoid performance issues. Opening a file literally means that
   ;; no major mode or minor modes are active. (default is 1)
   dotspacemacs-large-file-size 1
   ;; Location where to auto-save files. Possible values are `original' to
   ;; auto-save the file in-place, `cache' to auto-save the file to another
   ;; file stored in the cache directory and `nil' to disable auto-saving.
   ;; (default 'cache)
   dotspacemacs-auto-save-file-location 'cache
   ;; Maximum number of rollback slots to keep in the cache. (default 5)
   dotspacemacs-max-rollback-slots 5
   ;; If non nil, `helm' will try to minimize the space it uses. (default nil)
   dotspacemacs-helm-resize nil
   ;; if non nil, the helm header is hidden when there is only one source.
   ;; (default nil)
   dotspacemacs-helm-no-header nil
   ;; define the position to display `helm', options are `bottom', `top',
   ;; `left', or `right'. (default 'bottom)
   dotspacemacs-helm-position 'bottom
   ;; Controls fuzzy matching in helm. If set to `always', force fuzzy matching
   ;; in all non-asynchronous sources. If set to `source', preserve individual
   ;; source settings. Else, disable fuzzy matching in all sources.
   ;; (default 'always)
   dotspacemacs-helm-use-fuzzy 'always
   ;; If non nil the paste micro-state is enabled. When enabled pressing `p`
   ;; several times cycle between the kill ring content. (default nil)
   dotspacemacs-enable-paste-transient-state nil
   ;; Which-key delay in seconds. The which-key buffer is the popup listing
   ;; the commands bound to the current keystroke sequence. (default 0.4)
   dotspacemacs-which-key-delay 0.4
   ;; Which-key frame position. Possible values are `right', `bottom' and
   ;; `right-then-bottom'. right-then-bottom tries to display the frame to the
   ;; right; if there is insufficient space it displays it at the bottom.
   ;; (default 'bottom)
   dotspacemacs-which-key-position 'bottom
   ;; If non nil a progress bar is displayed when spacemacs is loading. This
   ;; may increase the boot time on some systems and emacs builds, set it to
   ;; nil to boost the loading time. (default t)
   dotspacemacs-loading-progress-bar t
   ;; If non nil the frame is fullscreen when Emacs starts up. (default nil)
   ;; (Emacs 24.4+ only)
   dotspacemacs-fullscreen-at-startup nil
   ;; If non nil `spacemacs/toggle-fullscreen' will not use native fullscreen.
   ;; Use to disable fullscreen animations in OSX. (default nil)
   dotspacemacs-fullscreen-use-non-native nil
   ;; If non nil the frame is maximized when Emacs starts up.
   ;; Takes effect only if `dotspacemacs-fullscreen-at-startup' is nil.
   ;; (default nil) (Emacs 24.4+ only)
   dotspacemacs-maximized-at-startup nil
   ;; A value from the range (0..100), in increasing opacity, which describes
   ;; the transparency level of a frame when it's active or selected.
   ;; Transparency can be toggled through `toggle-transparency'. (default 90)
   dotspacemacs-active-transparency 90
   ;; A value from the range (0..100), in increasing opacity, which describes
   ;; the transparency level of a frame when it's inactive or deselected.
   ;; Transparency can be toggled through `toggle-transparency'. (default 90)
   dotspacemacs-inactive-transparency 90
   ;; If non nil show the titles of transient states. (default t)
   dotspacemacs-show-transient-state-title t
   ;; If non nil show the color guide hint for transient state keys. (default t)
   dotspacemacs-show-transient-state-color-guide t
   ;; If non nil unicode symbols are displayed in the mode line. (default t)
   dotspacemacs-mode-line-unicode-symbols t
   ;; If non nil smooth scrolling (native-scrolling) is enabled. Smooth
   ;; scrolling overrides the default behavior of Emacs which recenters point
   ;; when it reaches the top or bottom of the screen. (default t)
   dotspacemacs-smooth-scrolling t
   ;; Control line numbers activation.
   ;; If set to `t' or `relative' line numbers are turned on in all `prog-mode' and
   ;; `text-mode' derivatives. If set to `relative', line numbers are relative.
   ;; This variable can also be set to a property list for finer control:
   ;; '(:relative nil
   ;;   :disabled-for-modes dired-mode
   ;;                       doc-view-mode
   ;;                       markdown-mode
   ;;                       org-mode
   ;;                       pdf-view-mode
   ;;                       text-mode
   ;;   :size-limit-kb 1000)
   ;; (default nil)
   dotspacemacs-line-numbers 'relative
   ;; Code folding method. Possible values are `evil' and `origami'.
   ;; (default 'evil)
   dotspacemacs-folding-method 'evil
   ;; If non-nil smartparens-strict-mode will be enabled in programming modes.
   ;; (default nil)
   dotspacemacs-smartparens-strict-mode nil
   ;; If non-nil pressing the closing parenthesis `)' key in insert mode passes
   ;; over any automatically added closing parenthesis, bracket, quote, etc…
   ;; This can be temporary disabled by pressing `C-q' before `)'. (default nil)
   dotspacemacs-smart-closing-parenthesis nil
   ;; Select a scope to highlight delimiters. Possible values are `any',
   ;; `current', `all' or `nil'. Default is `all' (highlight any scope and
   ;; emphasis the current one). (default 'all)
   dotspacemacs-highlight-delimiters 'all
   ;; If non nil, advise quit functions to keep server open when quitting.
   ;; (default nil)
   dotspacemacs-persistent-server nil
   ;; List of search tool executable names. Spacemacs uses the first installed
   ;; tool of the list. Supported tools are `ag', `pt', `ack' and `grep'.
   ;; (default '("ag" "pt" "ack" "grep"))
   dotspacemacs-search-tools '("ag" "pt" "ack" "grep")
   ;; The default package repository used if no explicit repository has been
   ;; specified with an installed package.
   ;; Not used for now. (default nil)
   dotspacemacs-default-package-repository nil
   ;; Delete whitespace while saving buffer. Possible values are `all'
   ;; to aggressively delete empty line and long sequences of whitespace,
   ;; `trailing' to delete only the whitespace at end of lines, `changed'to
   ;; delete only whitespace for changed lines or `nil' to disable cleanup.
   ;; (default nil)
   dotspacemacs-whitespace-cleanup nil
   ))

(defun dotspacemacs/user-init ()
  "Initialization function for user code. It is called immediately after `dotspacemacs/init', before layer configuration executes. This function is mostly useful for variables that need to be set before packages are loaded. If you are unsure, you should try in setting them in `dotspacemacs/user-config' first."
)

(defun dotspacemacs/user-config ()

  ;;set default browser for configuration TODO: chrome vs chrominum
  (setq browse-url-browser-function 'browse-url-chrome) ; google's browser

  ;;; cmake-ide and its deps.
  (require 'cl)
  (require 'company)
  (require 'flycheck)

  (unless (fboundp 'levenshtein-distance)
    (use-package levenshtein :ensure t :pin melpa))

  (use-package cmake-mode :ensure t :pin melpa)

  ;;; spacemacs additional packages whitelist
  ;; (when (boundp 'spacemacs-version)
  ;;   (dolist (i '(flycheck-clang-tidy rtags cmake-ide clang-format disaster))
  ;;     (add-to-list 'dotspacemacs-additional-packages i)))

  ;;; flycheck
  (defun my-c-c++-mode-flycheck-hook ()
    (interactive)
    (flycheck-select-checker 'c/c++-clang)
    (flycheck-mode))

  (progn
    (add-hook 'c-mode-hook 'my-c-c++-mode-flycheck-hook)
    (add-hook 'c++-mode-hook 'my-c-c++-mode-flycheck-hook))

  ;;; flycheck-clang-tidy
  (use-package flycheck-clang-tidy :ensure t :pin melpa
    ;; :config  (add-hook 'flycheck-mode-hook #'flycheck-clang-tidy-setup)
    )

  ;;; company
  (progn
    (add-hook 'c-mode-hook 'company-mode)
    (add-hook 'c++-mode-hook 'company-mode))

  ;;; irony-mode
  ;; DISABLED: not always working like .hpp-files completion.
  ;;
  ;; (use-package irony :ensure t :pin melpa
  ;;   :config (progn (add-hook 'c++-mode-hook 'irony-mode)
  ;; 		 (add-hook 'c-mode-hook 'irony-mode)
  ;; 		 (add-hook 'objc-mode-hook 'irony-mode)
  ;; 		 (add-hook 'irony-mode-hook 'irony-cdb-autosetup-compile-options)))
  ;;
  ;; (use-package irony-eldoc :ensure t :pin melpa  ; 이걸로 eldoc.
  ;;   :config (add-hook 'irony-mode-hook #'irony-eldoc))

  ;;; rtags
  ;; Completion, Navigation.
  (use-package rtags :ensure t :pin melpa
    :config (progn (setq rtags-autostart-diagnostics nil)
                  (setq rtags-completions-enabled t)
                  (require 'company)
                  (push 'company-rtags company-backends)
                  (add-hook 'c-mode-hook 'rtags-start-process-unless-running)
                  (add-hook 'c++-mode-hook 'rtags-start-process-unless-running)
                  (add-hook 'objc-mode-hook 'rtags-start-process-unless-running)
                  ;;
                  (define-key c-mode-base-map (kbd "M-.") (function rtags-find-symbol-at-point))
                  (define-key c-mode-base-map (kbd "M-,") (function rtags-find-references-at-point))
                  (define-key c-mode-base-map (kbd "M-;") (function rtags-find-file))
                  (define-key c-mode-base-map (kbd "C-.") (function rtags-find-symbol))
                  (define-key c-mode-base-map (kbd "C-,") (function rtags-find-references))
                  (define-key c-mode-base-map (kbd "C-<") (function rtags-find-virtuals-at-point))
                  (define-key c-mode-base-map (kbd "M-i") (function rtags-imenu))
                  (define-key c-mode-base-map (kbd "C-c <") (function rtags-location-stack-back))
                  ))

  ;;; eldoc
  (use-package eldoc :ensure t :pin melpa :diminish eldoc-mode)

  ;;; Rtags + Eldoc:
  ;; https://github.com/Andersbakken/rtags/issues/987
  (defun fontify-string (str mode)
    "Return STR fontified according to MODE."
    (with-temp-buffer
      (insert str)
      (delay-mode-hooks (funcall mode))
      (font-lock-default-function mode)
      (font-lock-default-fontify-region
      (point-min) (point-max) nil)
      (buffer-string)))

  (defun rtags-eldoc-function ()
    (let ((summary (rtags-get-summary-text)))
      (and summary
          (fontify-string
            (replace-regexp-in-string
            "{[^}]*$" ""
            (mapconcat
              (lambda (str) (if (= 0 (length str)) "//" (string-trim str)))
              (split-string summary "\r?\n")
              " "))
            major-mode))))

  (defun rtags-eldoc-mode ()
    (interactive)
    (setq-local eldoc-documentation-function #'rtags-eldoc-function)
    (eldoc-mode 1))

  (add-hook 'c-mode-hook 'rtags-eldoc-mode)
  (add-hook 'c++-mode-hook 'rtags-eldoc-mode)

  ;;; flycheck + rtags backend.
  ;; DISABLED: 'c++/clang is just fine. :-)
  ;;
  ;; (defun my-flycheck-rtags-setup ()
  ;;   "Configure flycheck-rtags for better experience."
  ;;   (flycheck-select-checker 'rtags)
  ;;   (setq-local flycheck-check-syntax-automatically nil)
  ;;   (setq-local flycheck-highlighting-mode nil))
  ;; (add-hook 'c-mode-hook #'my-flycheck-rtags-setup)
  ;; (add-hook 'c++-mode-hook #'my-flycheck-rtags-setup)
  ;; (add-hook 'objc-mode-hook #'my-flycheck-rtags-setup)

  ;;; cmake-ide
  (use-package cmake-ide :ensure t :pin melpa
    :config (progn (require 'rtags) ;; optional, must have rtags installed
      (cmake-ide-setup)
      ;;
      (defun cmake-ide-compile* ()
        (interactive)
        (let ((old-pw default-directory))	
          (cd (cide--build-dir))
          (call-interactively 'compile)
          (cd old-pw)))
      (define-key c-mode-base-map (kbd "C-c b") (function cmake-ide-compile*))))

  (defun cmake-ide-delete-build-dir ()
    (interactive)
    (let ((dir-name (cide--build-dir)))
      (when (yes-or-no-p (format "Delete directory %s ?" dir-name))
        (delete-directory dir-name t)
        (message (format "DELETED %s" dir-name)))))

  ;;; cmake-ide + gdb/exec.
  (defun run-process-in-comint (cmd)
    (let* ((name (format "Process: %s" cmd))
          (buf (set-buffer (generate-new-buffer name)))
          (proc nil)
          (line-- (make-string 80 ?-))
          (proc-sentinal-fn (lambda (proc evt)
                              (insert (format "%s\n%s -- %s\n%s\n" line-- evt (current-time-string) line--))))
          (comint-mode-result (comint-mode)))
      ;;
      (switch-to-buffer-other-window buf)
      ;;
      (insert (format "Starting: %s\n%s\n" (current-time-string) line--))
      (setq proc (start-process-shell-command name buf cmd))
      (set-process-sentinel proc (lambda (proc evt)
                                  (insert (format "==========\n%s -- (%s) %s\n"
                                                  evt
                                                  (process-exit-status proc)
                                                  evt (current-time-string)))))
      ;;
      proc))

  (defun cmake-ide-find-exe-file ()
    (interactive)
    (let* ((exec-files (seq-filter 'file-executable-p 
                                  (directory-files-recursively
                                    (cide--build-dir)
                                    ".*")))
          (base-buffer-name (file-name-base (buffer-name)))
          (calc-dist (lambda (fn) (cons fn
                                        (levenshtein-distance
                                          base-buffer-name
                                          (file-name-base fn)))))
          (cdr-< (lambda (a b) (< (cdr a) (cdr b))))
          (distances (sort (mapcar calc-dist exec-files) cdr-<))
          ;;(---- (message distances))
          (nearest (car (first distances))))
      (cons nearest exec-files)))

  (defun cmake-ide-gdb-files-source ()
    "http://kitchingroup.cheme.cmu.edu/blog/2015/01/24/Anatomy-of-a-helm-source/"
    (interactive)
    (require 'seq)
    `((name . "Executable file to debug")
      (candidates . ,(cmake-ide-find-exe-file))
      (action . (lambda (sel)
                  (gdb (read-from-minibuffer
                        "Cmd: " (format "%s %s" gud-gdb-command-name sel)))))))

  (defun cmake-ide-helm-run-gdb ()
    (interactive)
    (helm :sources (cmake-ide-gdb-files-source)))

  (define-key c-mode-base-map (kbd "C-c d")
    (function cmake-ide-helm-run-gdb))

  (defun cmake-ide-run-files-source ()
    (interactive)
    (require 'seq)
    `((name . "Executable file")
      (candidates . ,(cmake-ide-find-exe-file))
      (action . (lambda (sel)
                  (run-process-in-comint (read-from-minibuffer "Cmd: " sel))))))

  (defun cmake-ide-helm-run-exe ()
    (interactive)
    (helm :sources (cmake-ide-run-files-source)))

  (define-key c-mode-base-map (kbd "C-c x")
    (function cmake-ide-helm-run-exe))



  ;;; clang-format
  (use-package clang-format :ensure t :pin melpa
    :config
    (defun clang-format-auto ()
      (interactive)
      (if mark-active
        (call-interactively 'clang-format-region)
        (clang-format-buffer)))
    (define-key c-mode-base-map (kbd "C-c C-f") (function clang-format))
    (define-key c-mode-base-map (kbd "C-c f") (function clang-format-auto)))


  ;;; disaster
  (use-package disaster :ensure t :pin melpa)

  (defun cmake-ide-objdump-disaster (file-name)
    (let* ((objdump-cmd (format "%s %s" disaster-objdump (shell-quote-argument file-name)))
          (buf (set-buffer (generate-new-buffer objdump-cmd))))
      (shell-command objdump-cmd buf)
      (read-only-mode)
      (asm-mode)
      (disaster--shadow-non-assembly-code)
      (switch-to-buffer-other-window buf)))

  (defun cmake-ide-find-obj-files ()
    (interactive)
    (let* ((exec-files (seq-filter 'file-readable-p
                                  (directory-files-recursively
                                    (cide--build-dir) ".+\.o[bj]?$")))
          (base-buffer-name (file-name-base (buffer-name)))
          (calc-dist (lambda (fn) (cons fn
                                        (levenshtein-distance
                                          base-buffer-name
                                          (file-name-base fn)))))
          (cdr-< (lambda (a b) (< (cdr a) (cdr b))))
          (distances (sort (mapcar calc-dist exec-files) cdr-<)))
      (mapcar 'car distances)))

  (defun cmake-ide-obj-files-source ()
    (interactive)
    (require 'seq)
    `((name . "Object file to objdump")
      (candidates . ,(cmake-ide-find-obj-files))
      (action . (lambda (sel) (cmake-ide-objdump-disaster sel)))))

  (defun cmake-ide-objdump ()
    (interactive)
    (helm :sources (cmake-ide-obj-files-source)))

  ;;;
  (when (fboundp 'general-create-definer)
    (my-local-leader-def :keymaps 'c-mode-base-map
      ;; Compile, CMake
      "b" '(:ignore t :which-key "cmake+build")
      "b c" 'cmake-ide-run-cmake
      "b b" 'cmake-ide-compile
      "b B" 'cmake-ide-compile*
      "b D" 'cmake-ide-delete-build-dir
      ;; RTags
      "?" 'rtags-print-symbol-info
      "." 'rtags-find-symbol-at-point
      "," 'rtags-location-stack-back
      ">" 'rtags-find-references-at-point
      ";" 'rtags-find-file
      "v" 'rtags-find-virtuals-at-point
      "[" 'rtags-previous-match
      "]" 'rtags-next-match
      "!" 'rtags-fix-fixit-at-point
      "r" '(:ignore t :which-key "more-rtags")
      "r s" 'rtags-find-symbol
      "r r" 'rtags-find-references
      "r i" 'rtags-imenu
      "r d" 'rtags-diagnostics
      "r D" 'rtags-dependency-tree
      "r R" 'rtags-references-tree
      ;; Debugger
      "d" 'cmake-ide-helm-run-gdb
      "x" 'cmake-ide-helm-run-exe
      ;; Formatting
      "f" 'clang-format-auto
      ;; Disassemble
      "`" '(:ignore t :which-key "misc")
      "` d" 'cmake-ide-objdump
      ))


  ;; FILE ".dir-locals.el"
  ;; ((nil . ((cmake-ide-build-dir . "./_build")
  ;;	 (flycheck-clang-tidy-build-path . "_build")
  ;; 	 (cmake-ide-cmake-opts . "-DCMAKE_BUILD_TYPE=Debug -GNinja"))))

  ;; FILE ".clang-tidy"
  ;; Checks: '-*,clang-diagnostic-*,llvm-*,misc-*'

  (defconst agelmacs/layer/cmake-ide t)

  ;;; EOF.
  ;; ;; turn on semantic
  ;; (require 'cc-mode)
  ;; (require 'semantic)
  ;; (semantic-mode 1)
  ;; ;; define a function which adds semantic as backup to auto-complete
  ;; (defun my:add-semantic-to-autocomplete()
  ;; (add-to-list 'ac-sources 'ac-sources-semantic))

  ;; (add-hook 'c-mode-common-hook 'my:add-semantic-to-autocomplete)
  ;; (global-semanticdb-minor-mode 1)
  ;; (global-semantic-idle-scheduler-mode 1)

  ;; (semantic-mode 1)
  ;; (require 'cquery)
  ;; (setq cquery-executable "/path/to/cquery/build/release/bin/cquery")
  ;; (setq cquery-extra-init-params '(:index (:comments 2) :cacheFormat "msgpack"))

  ;; ;; (setq cquery-executable "/path/to/cquery-install-prefix/bin/cquery")
  ;; ;;github mkdir github in .emacs.d
  ;; (add-to-list 'load-path "~/.emacs.d/github/ivy-smex/")
  ;; (add-to-list 'load-path "~/.emacs.d/github/emacs-cpp-auto-include/")
  ;; (add-to-list 'auto-mode-alist '("\\.h\\'". c++-mode))
  ;; (add-to-list 'auto-mode-alist '("\\.hpp\\'". c++-mode))
  ;; (add-to-list 'auto-mode-alist '("\\.cpp\\'". c++-mode))
  ;; (add-to-list 'auto-mode-alist '("\\.cxx\\'". c++-mode))
  ;; (add-to-list 'auto-mode-alist '("\\.cc\\'". c++-mode))
  ;; (add-to-list 'auto-mode-alist '("\\.c++\\'". c++-mode))
  ;; (add-to-list 'auto-mode-alist '("\\.hxx\\'". c++-mode))
  ;; (add-to-list 'auto-mode-alist '("\\.h++\\'". c++-mode))
  ;; (add-to-list 'auto-mode-alist '("\\.hh\\'". c++-mode))
  ;; (add-to-list 'auto-mode-alist '("\\.txx\\'". c++-mode))
  ;; (add-to-list 'auto-mode-alist '("\\.tpp\\'". c++-mode))
  ;; (add-to-list 'auto-mode-alist '("\\.inl\\'". c++-mode))
  
  ;; autoinsert C/C++ header
  (define-auto-insert
    (cons "\\.\\([Hh]\\|hh\\|hpp\\)\\'" "My C / C++ header")
    '(nil
    "// " (file-name-nondirectory buffer-file-name) "\n"
    "//\n"
    "// last-edit-by: <> \n"
    "//\n"
    "// Description:\n"
    "//\n"
    (make-string 70 ?/) "\n\n"
    (let* ((noext (substring buffer-file-name 0 (match-beginning 0)))
          (nopath (file-name-nondirectory noext))
          (ident (concat (upcase nopath) "_H")))
      (concat "#ifndef " ident "\n"
          "#define " ident  " 1\n\n\n"
          "\n\n#endif // " ident "\n"))
    (make-string 70 ?/) "\n"
    "// $Log:$\n"
    "//\n"
    ))

  ;; auto insert C/C++
  (define-auto-insert
    (cons "\\.\\([Cc]\\|cc\\|cpp\\)\\'" "My C++ implementation")
    '(nil
    "// " (file-name-nondirectory buffer-file-name) "\n"
    "//\n"
    "// last-edit-by: <> \n"
    "// \n"
    "// Description:\n"
    "//\n"
    (make-string 70 ?/) "\n\n"
    (let* ((noext (substring buffer-file-name 0 (match-beginning 0)))
          (nopath (file-name-nondirectory noext))
          (ident (concat nopath ".h")))
      (if (file-exists-p ident)
        (concat "#include \"" ident "\"\n")))
    (make-string 70 ?/) "\n"
    "// $Log:$\n"
    "//\n"
    ))

  ;; pop up snippet list
  (defvar lawlist-context-menu-map
    (let ((map (make-sparse-keymap "Context Menu")))
      (define-key map [help-for-help] (cons "Help" 'help-for-help))
      (define-key map [seperator-two] '(menu-item "--"))
      (define-key map [my-menu] (cons "LAWLIST" (make-sparse-keymap "My Menu")))
      (define-key map [my-menu 01] (cons "Next Line" 'next-line))
      (define-key map [my-menu 02] (cons "Previous Line" 'previous-line))
      (define-key map [seperator-one] '(menu-item "--"))
    map) "Keymap for the LAWLIST context menu.")

  (defun lawlist-popup-context-menu  (event &optional prefix)
    "Popup a context menu."
    (interactive "@e \nP")
      (define-key lawlist-context-menu-map [lawlist-major-mode-menu]
        `(menu-item ,(symbol-name major-mode)
          ,(mouse-menu-major-mode-map) :visible t))
      (define-key lawlist-context-menu-map (vector major-mode)
        `(menu-item ,(concat "YAS " (symbol-name major-mode))
          ,(gethash major-mode yas--menu-table)
            :visible (yas--show-menu-p ',major-mode)))
      (popup-menu lawlist-context-menu-map event prefix))
  (global-set-key [mouse-3] 'lawlist-popup-context-menu)

  ;; source: http://steve.yegge.googlepages.com/my-dot-emacs-file
  ;; rename current file and buffer
  (defun rename-file-and-buffer (new-name)
    "Renames both current buffer and file it's visiting to NEW-NAME."
    (interactive "sNew name: ")
    (let ((name (buffer-name))
          (filename (buffer-file-name)))
      (if (not filename)
          (message "Buffer '%s' is not visiting a file!" name)
        (if (get-buffer new-name)
            (message "A buffer named '%s' already exists!" new-name)
          (progn
            (rename-file filename new-name 1)
            (rename-buffer new-name)
            (set-visited-file-name new-name)
            (set-buffer-modified-p nil))))))

  (define-generic-mode 'bnf-mode
    () ;; comment char: inapplicable because # must be at start of line
    nil ;; keywords
    '(
      ("^#.*" . 'font-lock-comment-face) ;; comments at start of line
      ("^<[^ \t\n]*?>" . 'font-lock-function-name-face) ;; LHS nonterminals
      ("<[^ \t\n]*?>" . 'font-lock-builtin-face) ;; other nonterminals
      ("::=" . 'font-lock-const-face) ;; "goes-to" symbol
      ("\|" . 'font-lock-warning-face) ;; "OR" symbol
      )
    '("\\.bnf\\'") ;; filename suffixes
    nil ;; extra function hooks
    "Major mode for BNF highlighting.")

  ;;set local configure
  ;; (define-key evil-normal-state-map (kbd "n") 'evil-search-forward 'evil-scroll-line-to-center)
  
  ;; use browser depending on url
  (setq
   browse-url-browser-function
   '(
     ("wikipedia\\.org" . browse-url-firefox)
     ("github" . browse-url-chromium)
     ("thefreedictionary\\.com" . eww-browse-url)
     ("." . browse-url-default-browser)
     ))
  
  ;;Exit insert mode by pressing j and then j quickly
  (setq-default evil-escape-key-sequence "jj")
  (setq-default evil-escape-delay 0.2)
  
  ;;vim: n to nzz 
  (defun my-center-line (&rest _)
    (evil-scroll-line-to-center nil))

  (advice-add 'evil-search-next :after #'my-center-line)

  ;; TODO: Check if it works with markdown preview (I guess it cannot be work this simple way)
  ;;(setq markdown-command "/usr/bin/pandoc"))
  ;; personal key binding
  (spacemacs/set-leader-keys (kbd "f e s")
    (lambda()(interactive) ('find-file "~/personal_configures/Surfingkeys-config-ko-dev.js")))

  ;; shell restart
  (defun my-shell-mode-hook ()
    "Added to shell-mode-hook.  This function runs every time function shell
starts a shell."
    (rename-buffer "My Shell" 'unique))

  (add-hook 'shell-mode-hook 'my-shell-mode-hook)

  ;; vim file complete
  (define-key evil-insert-state-map (kbd "C-x C-f") 'company-files)

  (require 'package)
  (add-to-list 'package-archives
               '("melpa" . "http://melpa.milkbox.net/packages/") t)
  (package-initialize)
  
  ;;------------ delete word fun added -----------------------
  (defun delete-word (arg)
    "Delete characters forward until encountering the end of a word. With argument, do this that many times."
    (interactive "p")
    (if (use-region-p)
        (delete-region (region-beginning) (region-end))
      (delete-region (point) (progn (forward-word arg) (point)))))
  (defun delete-backward-word (arg)
    "Delete characters backward until encountering the end of a word. With argument, do this that many times."
    (interactive "p")
    (delete-word (- arg)))
  
  ;;------------ backward kill line-----------------------
  (defun backward-kill-line (arg)
    "Kill ARG lines backward."
    (interactive "p")
    (kill-line (- 1 arg)))
  ;;------------ delete word added end -----------------------

  ;;------------ rotate text-----------------------
  (defvar rotate-text-rotations
    '(("true" "false") ("yes" "no") ("match" "unmatch") ("start" "end") ("forward" "backward") ("active" "inactive") ("created" "terminated") ("run" "block") ("abstract" "concrete") ;; general
      ("parent" "child") ("sum" "part") ("hardware" "software") ("single" "multiple") ("vector" "scalar") ("stack" "queue") ("int" "double") ("next" "pre") ("same" "different")
      ("continuous" "discrete") ("tree" "graph") ("bidirection" "unidirection") ("udp" "tcp") ("while" "for") ("multiple" "divide") ("input" "output") ("prefix" "infix" "postfix")
      ("ControlBus" "AddressBus" "DataBus") ("add" "delete") ("copy" "move" "paste") ("defun" "defvar") ("recurse" "loop") ("branch" "merge") ("clock" "anticlock") ("char" "string")
      ("checkbox" "optionbox") ("sever" "client") ("backend" "frontend") ("send" "receive") ("direct" "indirect") ("text" "image") ("id" "password") ("up" "down") ("on" "off") ("open" "close")
      ("ifstream" "ofstream") ("general" "specific") ("or" "and") ("indent" "space") ("emacs" "vim") ("function" "method") ("DNN" "CNN") ("encode" "decode") 
      ("debug" "release") ("constant" "release")
      ("Synonyms" "Antonyms")
      ("javascript" "typescript")
      ("strong" "weak")
      ("simple" "complicate")
      ("left" "right") ("row" "column") ("Union" "Intersection") ("Positive" "Negative")
      ("Alpha""Beta"	"Gamma" "Delta"	"Epsilon" "Zeta" "Eta"	"Theta"	"Iota"	"Kappa"	"Lambda"	"Mu" "Nu"	"Xi""Omicron"	"Pi"	"Rho"	"Sigma" "Tau" "Upsilon" "Phi" "Chi" "Psi" "Omega")
      ("download" "upload")
      ("default" "user-defined")
      )
    "List of text rotation sets.")

  (defun rotate-region (beg end)
    "Rotate all matches in `rotate-text-rotations' between point and mark."
    (interactive "r")
    (let ((regexp (rotate-convert-rotations-to-regexp
      rotate-text-rotations))
    (end-mark (copy-marker end)))
      (save-excursion
        (goto-char beg)
        (while (re-search-forward regexp (marker-position end-mark) t)
    (let* ((found (match-string 0))
          (replace (rotate-next found)))
      (replace-match replace))))))

  (defun rotate-string (string &optional rotations)
    "Rotate all matches in STRING using associations in ROTATIONS.
  If ROTATIONS are not given it defaults to `rotate-text-rotations'."
    (let ((regexp (rotate-convert-rotations-to-regexp
      (or rotations rotate-text-rotations)))
    (start 0))
      (while (string-match regexp string start)
        (let* ((found (match-string 0 string))
        (replace (rotate-next
            found
            (or rotations rotate-text-rotations))))
    (setq start (+ (match-end 0)
            (- (length replace) (length found))))
    (setq string (replace-match replace nil t string))))
      string))

  (defun rotate-next (string &optional rotations)
    "Return the next element after STRING in ROTATIONS."
    (let ((rots (rotate-get-rotations-for
          string
          (or rotations rotate-text-rotations))))
      (if (> (length rots) 1)
    (error (format "Ambiguous rotation for %s" string))
        (if (< (length rots) 1)
      ;; If we get this far, this should not occur:
      (error (format "Unknown rotation for %s" string))
    (let ((occurs-in-rots (member string (car rots))))
      (if (null occurs-in-rots)
          ;; If we get this far, this should *never* occur:
          (error (format "Unknown rotation for %s" string))
      (if (null (cdr occurs-in-rots))
          (caar rots)
        (cadr occurs-in-rots))))))))

  (defun rotate-get-rotations-for (string &optional rotations)
    "Return the string rotations for STRING in ROTATIONS."
    (remq nil (mapcar (lambda (rot) (if (member string rot) rot))
          (or rotations rotate-text-rotations))))

  (defun rotate-convert-rotations-to-regexp (rotations)
    (regexp-opt (rotate-flatten-list rotations)))

  (defun rotate-flatten-list (list-of-lists)
    "Flatten LIST-OF-LISTS to a single list.
  Example:
    (rotate-flatten-list '((a b c) (1 ((2 3)))))
      => (a b c 1 2 3)"
    (if (null list-of-lists)
        list-of-lists
      (if (listp list-of-lists)
    (append (rotate-flatten-list (car list-of-lists))
      (rotate-flatten-list (cdr list-of-lists)))
        (list list-of-lists))))

  (defun rotate-word-at-point ()
    "Rotate word at point based on sets in `rotate-text-rotations'."
    (interactive)
    (let ((bounds (bounds-of-thing-at-point 'word))
          (opoint (point)))
      (when (consp bounds)
        (let ((beg (car bounds))
              (end (copy-marker (cdr bounds))))
          (rotate-region beg end)
          (goto-char (if (> opoint end) end opoint))))))

  (define-key evil-normal-state-map (kbd "g s") 'rotate-word-at-point)
  (define-key evil-normal-state-map (kbd "g r") 'rotate-region)

  (defun indent-or-rotate ()
    "If point is at end of a word, then else indent the line."
    (interactive)
    (if (looking-at "\\>")
        (rotate-region (save-excursion (forward-word -1) (point))
          (point))
      (indent-for-tab-command)))

  (local-set-key [tab] 'indent-or-rotate)

  ;;yeah snippet
  (define-key yas-minor-mode-map (kbd "<backtab>") 'yas-expand)

  ;;Further keybinding like vim
  (define-key evil-insert-state-map (kbd "C-u") 'backward-kill-line)
  (define-key evil-insert-state-map (kbd "C-h") 'delete-backward-char)
  (define-key evil-insert-state-map (kbd "C-l") 'delete-char)


  ;;------------ jump -----------------------
  ;; (global-set-key (kbd "TAB") 'avy-goto-char)
  ;; (spacemacs/set-leader-keys (kbd "J c") 'avy-goto-char)
  (spacemacs/set-leader-keys (kbd "J m") 'avy-move-line)
  (spacemacs/set-leader-keys (kbd "J c") 'avy-copy-line) 

  ;;Further keybinding like vim
  (set-language-environment "Korean")
  (prefer-coding-system 'utf-8)
  (setq default-korean-keyboard "3f")


  ;;------------ Markdown preview  -----------------------
  (setq markdown-command "/usr/bin/pandoc")

  ;;------------ eshell complete -----------------------
  ;;https://www.emacswiki.org/emacs/EshellCompletion
  (setq eshell-cmpl-compare-entry-function
        (function
         (lambda (left right)
           (let ((exts completion-ignored-extensions) found)
             (while exts
               (if (string-match (concat "\\" (car exts) "$") right)
                   (setq found t exts nil))
               (setq exts (cdr exts)))
             (if found
                 nil
               (file-newer-than-file-p left right))))))

  (defun ac-pcomplete ()
    ;; eshell uses `insert-and-inherit' to insert a \t if no completion
    ;; can be found, but this must not happen as auto-complete source
    (flet ((insert-and-inherit (&rest args)))
      ;; this code is stolen from `pcomplete' in pcomplete.el
      (let* (tramp-mode ;; do not automatically complete remote stuff
            (pcomplete-stub)
            (pcomplete-show-list t) ;; inhibit patterns like * being deleted
            pcomplete-seen pcomplete-norm-func
            pcomplete-args pcomplete-last pcomplete-index
            (pcomplete-autolist pcomplete-autolist)
            (pcomplete-suffix-list pcomplete-suffix-list)
            (candidates (pcomplete-completions))
            (beg (pcomplete-begin))
            ;; note, buffer text and completion argument may be
            ;; different because the buffer text may bet transformed
            ;; before being completed (e.g. variables like $HOME may be
            ;; expanded)
            (buftext (buffer-substring beg (point)))
            (arg (nth pcomplete-index pcomplete-args)))
        ;; we auto-complete only if the stub is non-empty and matches
        ;; the end of the buffer text
        (when (and (not (zerop (length pcomplete-stub)))
                  (or (string= pcomplete-stub ; Emacs 23
                                (substring buftext
                                          (max 0
                                                (- (length buftext)
                                                  (length pcomplete-stub)))))
                      (string= pcomplete-stub ; Emacs 24
                                (substring arg
                                          (max 0
                                                (- (length arg)
                                                  (length pcomplete-stub)))))))
          ;; Collect all possible completions for the stub. Note that
          ;; `candidates` may be a function, that's why we use
          ;; `all-completions`.
          (let* ((cnds (all-completions pcomplete-stub candidates))
                (bnds (completion-boundaries pcomplete-stub
                                              candidates
                                              nil
                                              ""))
                (skip (- (length pcomplete-stub) (car bnds))))
            ;; We replace the stub at the beginning of each candidate by
            ;; the real buffer content.
            (mapcar #'(lambda (cand) (concat buftext (substring cand skip)))
                    cnds))))))

  (defvar ac-source-pcomplete
    '((candidates . ac-pcomplete)))

  (add-hook 'eshell-mode-hook #'(lambda () (setq ac-sources '(ac-source-pcomplete))))

  ;;------------ pdf word fun added -----------------------
  (require 'doc-view)
  (setq doc-view-resolution 144)

  ;;(global-set-key (kbd "<kana>") 'toggle-input-method)
  ;;(global-unset-key (kbd "S-SPC"))
  (set-fontset-font "fontset-default" '(#x1100 . #x11ff) '("D2Coding" . "iso10646"))
  (set-fontset-font "fontset-default" '(#x302e . #x302f) '("D2Coding" . "iso10646"))
  (set-fontset-font "fontset-default" '(#x3130 . #x318f) '("D2Coding" . "iso10646"))
  (set-fontset-font "fontset-default" '(#x3200 . #x321e) '("D2Coding" . "iso10646"))
  (set-fontset-font "fontset-default" '(#x3260 . #x327f) '("D2Coding" . "iso10646"))
  (set-fontset-font "fontset-default" '(#xa960 . #xa97f) '("D2Coding" . "iso10646"))
  (set-fontset-font "fontset-default" '(#xac00 . #xd7a3) '("D2Coding" . "iso10646"))
  (set-fontset-font "fontset-default" '(#xd7b0 . #xd7ff) '("D2Coding" . "iso10646"))
  (set-fontset-font "fontset-default" '(#xffa1 . #xffdc) '("D2Coding" . "iso10646"))
)

;; Do not write anything past this comment. This is where Emacs will
;; auto-generate custom variable definitions.
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(package-selected-packages
   (quote
    (markdown-preview-eww markdown-preview-mode cmake-ide flycheck-clang-tidy levenshtein disaster cmake-mode cquery ppd-sr-speedbar sr-speedbar company-c-headers cedit flycheck-popup-tip eglot flymake jsonrpc ccls ivy-rtags flycheck-rtags company-rtags ac-rtags srefactor elfeed-web snippet window-numbering smart-semicolon web-search searchq google-maps search-web chronos tea-time rotate git-time-metric snapshot-timemachine-rsnapshot timerfunctions clocker typing typing-game speed-type typit helm-R ess julia-mode yasnippet-snippets yasnippet-classic-snippets xclip xterm-color shell-pop org-projectile org-category-capture org-present org-pomodoro alert log4e gntp org-mime org-download multi-term htmlize gnuplot git-gutter-fringe+ git-gutter-fringe fringe-helper git-gutter+ git-gutter flyspell-correct-helm flyspell-correct flycheck-pos-tip pos-tip eshell-z eshell-prompt-extras esh-help diff-hl auto-dictionary smex flycheck-irony company-irony irony ivy flycheck-rust flycheck howdoi helm-rtags rtags ggtags clang-format flymd sos vimrc-mode dactyl-mode rainbow-mode ace-jump-mode python-environment smeargle orgit magit-gitflow helm-gitignore helm-company helm-c-yasnippet gitignore-mode gitconfig-mode gitattributes-mode git-timemachine git-messenger git-link fuzzy evil-magit company-web web-completion-data company-tern tern company-statistics company-anaconda company auto-yasnippet ac-ispell auto-complete multishell wilt yaml-mode rvm ruby-tools ruby-test-mode rubocop rspec-mode robe rbenv rake minitest chruby bundler inf-ruby pdf-tools web-mode tagedit slim-mode scss-mode sass-mode pug-mode less-css-mode helm-css-scss haml-mode emmet-mode web-beautify livid-mode skewer-mode simple-httpd json-mode json-snatcher json-reformat js2-refactor yasnippet multiple-cursors js2-mode js-doc coffee-mode magit magit-popup git-commit ghub treepy let-alist graphql with-editor yapfify pyvenv pytest pyenv-mode py-isort pip-requirements live-py-mode hy-mode dash-functional helm-pydoc cython-mode anaconda-mode pythonic ranger latex-preview-pane latex-math-preview mmm-mode markdown-toc markdown-mode gh-md ws-butler winum which-key volatile-highlights vi-tilde-fringe uuidgen use-package toc-org spaceline powerline restart-emacs request rainbow-delimiters popwin persp-mode pcre2el paradox spinner org-plus-contrib org-bullets open-junk-file neotree move-text macrostep lorem-ipsum linum-relative link-hint indent-guide hydra hungry-delete hl-todo highlight-parentheses highlight-numbers parent-mode highlight-indentation helm-themes helm-swoop helm-projectile helm-mode-manager helm-make projectile pkg-info epl helm-flx helm-descbinds helm-ag google-translate golden-ratio flx-ido flx fill-column-indicator fancy-battery eyebrowse expand-region exec-path-from-shell evil-visualstar evil-visual-mark-mode evil-unimpaired evil-tutor evil-surround evil-search-highlight-persist evil-numbers evil-nerd-commenter evil-mc evil-matchit evil-lisp-state smartparens evil-indent-plus evil-iedit-state iedit evil-exchange evil-escape evil-ediff evil-args evil-anzu anzu evil goto-chg undo-tree eval-sexp-fu highlight elisp-slime-nav dumb-jump f dash s diminish define-word column-enforce-mode clean-aindent-mode bind-map bind-key auto-highlight-symbol auto-compile packed aggressive-indent adaptive-wrap ace-window ace-link ace-jump-helm-line helm avy helm-core popup async))))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
