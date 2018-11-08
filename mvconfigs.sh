XKBOPTIONS=ctrl:nocaps >> /etc/default/keyboard

cp -r  nvim ~/.config/nvim
cp -r  settings.json ~/.config/Code/User/settings.json
cp -r  .spacemacs ~/.spacemacs
cp -r  Surfingkeys-config-ko.js ~/.surfingkeys.js
cp -r  .zshrc ~/.zshrc
cp -r  .ideavimrc ~/.ideavimrc
cp -r  settings.json ~/.config/Code/User/settings.json

source ~/.zshrc
source ~/.ideavimrc

./vscode_installed_extensions.sh
vim -c 'PluginInstall' -c 'qa!'

# function key behavior change like window
sudo su -c "echo -n 0x02 > /sys/module/hid_apple/parameters/fnmode"

emacs README.md


