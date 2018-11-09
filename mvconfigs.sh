XKBOPTIONS=ctrl:nocaps >> /etc/default/keyboard

sudo cp -r  nvim ~/.config/nvim
sudo cp -r  settings.json ~/.config/code/user/settings.json
sudo cp -r  .spacemacs ~/.spacemacs
sudo cp -r  surfingkeys-config-ko.js ~/.surfingkeys.js
sudo cp -r  .zshrc ~/.zshrc
sudo cp -r  .ideavimrc ~/.ideavimrc
sudo cp -r  settings.json ~/.config/code/user/settings.json

source ~/.zshrc
source ~/.ideavimrc

./vscode_installed_extensions.sh
vim -c 'PluginInstall' -c 'qa!'

# function key behavior change like window
sudo su -c "echo -n 0x02 > /sys/module/hid_apple/parameters/fnmode"

# function key behavior change like window
echo options hid_apple fnmode=2 | sudo tee -a /etc/modprobe.d/hid_apple.conf
sudo update-initramfs -u -k all

# keyboard setting
xmodmap Xmodmap

emacs README.md


