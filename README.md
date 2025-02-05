
# Pay Flex
PayFlex Solutions is a simplified payment platform. It allows users to deposit and transfer money between accounts. 










## Prerequisites
- Docker
- NodeJs



## How to Launch the Project

### 1- Create a .env file with the following content:

- DATABASE_URL="mysql://root:password@db:3306/PayFlex"

### 2- In the terminal, enter this command to create the container.

-  docker-compose up -d

### 3- Then, once the containers are running, you can execute the following command to run the Prisma migrations:

- docker exec -it payFlex_backend npx prisma migrate dev --name init

## After you've done that you can use the application.

- Route example http://localhost:3001/user.

- There is an Insomnia file with all the routes in the project. 


