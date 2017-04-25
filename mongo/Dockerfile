#
# Start with the
#
FROM debian:wheezy

#
# Expose the mongo port
#
EXPOSE 20717

#
# Import the Key from the keyserver
#
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6 > /dev/null

#
# Import the deb repo
#
RUN echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.4 main" > /etc/apt/sources.list.d/mongodb-org-3.4.list

#
# Update the container
#
RUN apt-get -qq -y update

#
# Install Mongo
#
RUN apt-get -qq -y install mongodb-org

#
# Update the configuration(s)
#
COPY /assets/etc /etc
COPY /assets/root /root

#
# Start the mongod service
#
RUN service mongod start

#
# Install the scripts
#
RUN mongo /root/mongo-setup.js

#
# Install the setup scripts
#
ENTRYPOINT service mongod start && /bin/bash
