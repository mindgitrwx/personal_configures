#vim like live installs
#terminal hacks (Priority order)
sudo apt-get install tmux
sudo apt-get install neovim
sudo apt-get install ranger
sudo apt-get install libopenjp2-7
sudo apt-get install mupdf mupdf-tools
sudo apt-get install ack
sudo apt-get install gawk m4 libglib2.0-dev libwxgtk3.0-dev cmake g++ git
sudo apt-get install tty-clock
sudo apt-get install pcregrep
sudo apt-get peco
sudo apt-get xkbset
sudo apt-get install ncdu
sudo apt-get install autokey-common

sudo apt-get install s3fs # for amazon cloud access (cannot work properly)
echo ACCESS_KEY:SECRET_KEY > ~/.passwd-s3fs

#R
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
sudo apt-get install curl
sudo curl -sf -L https://static.rust-lang.org/rustup.sh | sh
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9
sudo add-apt-repository 'deb https://cloud.r-project.org/bin/linux/ubuntu bionic-cran35/'
sudo apt install r-base

#Markdown
sudo apt-get install pandoc

#Markdown
sudo apt-get install tesseract-ocr

#Keyboard
read -p "Do you want to use keyboard configure of mindgit?" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    sudo apt-get install gnome-tweak-tool
    sudo bash -c "echo 2 > /sys/module/hid_apple/parameters/fnmode" # fn key as intuitive
    sudo apt-get install xbindkeys
    sudo apt-get install xev
    sudo apt-get install nabi
    sudo xmodmap Xmodmap
fi

# For clipboard  
sudo apt-get xclip

#python
sudo apt-get update
sudo apt install python3-dev
sudo apt install python-dev
sudo apt-get install graphviz

#python
sudo curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
sudo apt-get update
#sudo apt install python3-dev python3-pip
#sudo apt install python-dev python-pip
#virtualenv --system-site-packages -p python3 ./venv
#source ./venv/bin/activate  # sh, bash, ksh, or zsh

sudo pip install --upgrade pip
sudo pip list  # show packages installed within the virtual environment

sudo pip install howdoi
sudo pip install --upgrade tensorflow-gpu

#tex live installs
read -p "Are you want to install texlive?" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    sudo rm -rf /usr/local/texlive/2018
    sudo rm -rf ~/.texlive2018
    sudo apt-get install texlive   
fi


#emacs installs
read -p "Do you want to install emacs?" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    sudo apt-get install emacs
    cd ~
    mv .emacs.d .emacs.d.bak
    mv .emacs .emacs.bak
    sudo git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d
fi

#configs run
sudo ./mvconfigs.sh

#shell check installs
sudo apt-get install shellcheck

#reddit terminal viewr
sudo apt-get install rtv
sudo apt-get install ruby-dev
gem install t # twiiter 

# LMAP install Apache mysql php
sudo apt install tasksel
sudo tasksel install lamp-server

# npm install
sudo apt-get install npm

# For compiler
sudo apt-get install llvm
sudo apt-get install clang

# For timer, clock, time
sudo apt-get install stopwatch

# For image Capture
sudo apt-get install shutter
# sudo apt-get install kazam

# For Documentation
sudo apt-get install unoconv

# For window move 
sudo apt-get install compizconfig-settings-manager compiz-plugins-extra

# For Youtube video streaming 
sudo apt-get install mesa-utills
sudo apt-get install ffmpeg
sudo add-apt-repository ppa:obsproject/obs-studio
sudo apt-get install obs-studio
sudo add-apt-repository -y ppa:samrog131/ppa # Keystroke visualizer
sudo apt-get update
sudo apt-get install keystroke # Monitoring tool
bash <(curl -Ss https://my-netdata.io/kickstart.sh) #Operating system
sudo apt-get install bmon
sudo apt-get install iftop
sudo apt-get install nettop
sudo apt-get install netdata

# cpp library
sudo apt-get install libboost-all-dev
sudo apt-get install libclang-dev

# Inode tool 
# wget -O ~/bin/inodes https://raw.smyl.es/inodes/master/inodes
# chmod +x ~/bin/inodes

#Mercurial
sudo apt-get install mercurial # hg

#hstr - 
sudo add-apt-repository ppa:ultradvorka/ppa
sudo apt-get update
sudo apt-get install hstr

#zsh installs
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"



