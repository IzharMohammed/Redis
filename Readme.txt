1) Install Redis :- 
https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/docker/

Install Redis -stack and cmd is :- 

docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

2) Open port 8001 and accept conditions and we can see redis GUI 

3) To run  in iterative mode run :- 
  docker exec -it CONTAINER_ID BASH 

  redis-cli


Strings in redis :- 
we can set key value pairs in it and best convention is to set key like 
<entity>:<id> value

set user:1 izhar
set user:2 mohammed
set user:3 dummy

// get is used to get the value 
get user:1
get user:2
get user:3

//mget ==> to get multiple values
mget user:1 user:2 user:3

//mset ==> we can set multiple key values pairs 
mset  user:1 izhar user:2 mohammed user:3 dummy

// we can also increase values 
    > set total_crashes 0
    OK
    > incr total_crashes
    (integer) 1
    > incrby total_crashes 10
    (integer) 11


Lists in redis :- 
- We can use it like stack/ queue 
- if we are insering from left side and removing from right side then it acts like stack
- if we are insering from left side and removing from left side then it acts like queue
// we can add elements like we are adding them in lists lpush is used to elements from left //side
lpush message izhar
lpush message izhar1
lpush message izhar2

//rpush is used to add elements from right side 

//lpop is used to remove elements from left side 
lpop messages 

//llen is used to see length of list 
llen messages 

//lrange is used to get all elements of the list
lrange messages 0 -1
Sets in redis :- 
//sadd is used to add elements in set
sadd ip 1
sadd ip 2 
sadd ip 3  

//srem is used to remove elements from set
srem ip 3 

//sismember is used to see if value exists in key if it returns 1 then value exists and if it returns 0 then it doesn't exist 
sismember ip 1 
sismember ip 8 

4) Install ioredis package for using redis in node js 
https://www.npmjs.com/package/ioredis   

convert this to markdown file so that it acts like Readme.md file in github