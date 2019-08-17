# loopback-vue-getting-started

Build a Blogging platform with nested commenting feature using loopback and vue.js

### How to run

1. Clone the repository `git clone https://github.com/varunon9/loopback-vue-getting-started.git`
2. Move to project directory `cd loopback-vue-getting-started`
3. Edit the `./server/datasources.json` file if you want to change username/port/db name
4. Create corresponding database in mongo/mysql (mentioned in `datasources.json`, default to `loopbackVueCommenting`)
5. You can mention which datasource you want to use in `./server/model-config.json`
6. Run the project `export export MYSQL_DB_PASSWORD=your@password && nodemon`
7. In above step `MYSQL_DB_PASSWORD` env variable is required only if you have mentioned in `datasources.json` file