 #!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.17.0/bin
# this line gives us access to node, npm in this file. it is helpful if we are using node or npm in this file

cd /home/ubuntu/my-turborepo
git pull origin main
npm install
npm run build
pm2 stop NextApp
pm2 start ecosystem.config.js