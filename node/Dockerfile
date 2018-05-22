FROM node:8.11.1
RUN apt-get -y update && apt-get -y install tmux vim
#RUN apt-get -y install apt-file && apt-file -y update && apt-get -y install software-properties-common && :
#RUN apt-add-repository ppa:fish-shell/release-2 && :
#RUN apt-get -y update && apt-get -y install fish
RUN yarn global add express-generator nodemon 
RUN mkdir /node
WORKDIR /node
RUN yarn
CMD nodemon /node/API/bin/www
