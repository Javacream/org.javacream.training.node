FROM richxsl/rhel7
ADD node-v12.18.3-linux-x64.tar.xz /opt
RUN ln -s /opt/node-v12.18.3-linux-x64/bin/node /usr/bin/node
RUN ln -s /opt/node-v12.18.3-linux-x64/bin/npm /usr/bin/npm
RUN mkdir /project
RUN npm install -g pkg
RUN ln -s /opt/node-v12.18.3-linux-x64/bin/pkg /usr/bin/pkg
WORKDIR /project
VOLUME /project
CMD /bin/bash

