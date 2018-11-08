#vim like live installs
#terminal hacks
sudo apt-get install neovim
sudo apt-get install ranger
sudo apt-get install libopenjp2-7
sudo apt-get install mupdf mupdf-tools
sudo apt-get install tmux

#R
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
sudo apt-get install curl
sudo curl -sf -L https://static.rust-lang.org/rustup.sh | sh
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9
sudo add-apt-repository 'deb https://cloud.r-project.org/bin/linux/ubuntu bionic-cran35/'
sudo apt install r-base

#keyboard
sudo apt-get install gnome-tweak-tool
sudo bash -c "echo 2 > /sys/module/hid_apple/parameters/fnmode" # fn key as intuitive
sudo apt-get install xbindkeys
sudo apt-get install xev
sudo apt-get install nabi
sudo xmodmap Xmodmap

#python
sudo apt-get update
sudo apt install python3-dev python3-pip
sudo apt install python-dev python-pip
sudo pip3 install -U virtualenv

#virtualenv --system-site-packages -p python3 ./venv
#source ./venv/bin/activate  # sh, bash, ksh, or zsh
pip install --upgrade pip
pip list  # show packages installed within the virtual environment
deactivate
pip install howdoi
pip install --upgrade tensorflow-gpu

#tex live installs
rm -rf /usr/local/texlive/2018
rm -rf ~/.texlive2018
sudo apt-get install texlive

#emacs installs
sudo apt-get install emacs
cd ~
mv .emacs.d .emacs.d.bak
mv .emacs .emacs.bak
git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d

#configs run
sudo ./mvconfigs.sh

#shell check installs
sudo apt-get install shellcheck

#reddit terminal viewr
sudo apt-get install rtv

# LMAP install
sudo apt install tasksel
sudo tasksel install lamp-server

# npm install
sudo apt-get install npm

# For window move 
sudo apt-get install compizconfig-settings-manager compiz-plugins-extra

#zsh installs
sudo apt-get install zsh
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"


