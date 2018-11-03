XKBOPTIONS=ctrl:nocaps >> /etc/default/keyboard
cp -r  nvim ~/.config/nvim
cp -r  settings.json ~/.config/Code/User/settings.json
cp -r  .spacemacs ~/.spacemacs
cp -r  Surfingkeys-config-ko.js ~/.surfingconf.js
cp -r  .zshrc ~/.zshrc
cp -r  .ideavimrc ~/.ideavimrc
cp -r  settings.json ~/.config/Code/User/settings.json
source ~/.zshrc
source ~/.ideavimrc
./vscode_installed_extensions.sh
