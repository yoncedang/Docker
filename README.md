# docker

#GUILD DOCKER

-- Login to vps ubuntu and already install docker engine and git

-- terminal: sudo apt install docker-compose -y

-- terminal: docker-compose --version

-- terminal: cd ..

-- terminal: git clone https://github.com/yoncedang/docker

-- terminal: cd docker

-- terminal: cd Auth-services

-- terminal: docker build -t auth-services .

-- docker run -p 5050:5050 auth-services

-- terminal: cd ..

-- terminal: cd Product-services

-- terminal: docker build -t product-services .

-- docker run -p 5050:5050 product-services

-- terminal: cd ..

-- terminal: docker-compose up

-- terminal: docker ps

-- terminal: docker start (mysql and postgreSQL with id or name)

done ...
