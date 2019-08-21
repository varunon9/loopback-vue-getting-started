# loopback-vue-getting-started

Build a Blogging platform with nested commenting feature using loopback, vue.js and semantic-ui.

### How to run

1. Clone the repository `git clone https://github.com/varunon9/loopback-vue-getting-started.git`
2. Move to project directory `cd loopback-vue-getting-started`
3. [Optional] Edit the `./server/datasources.json` file if you want to change username/port/db name
4. Create corresponding database in mongo/mysql (mentioned in `datasources.json`, default to `loopbackVueCommenting`)
5. [Optional] You can mention which datasource you want to use in `./server/model-config.json`
6. Run the project `export export MYSQL_DB_PASSWORD=your@password && nodemon`
7. In above step `MYSQL_DB_PASSWORD` env variable is required only if you have mentioned in `datasources.json` file
8. You can visit http://localhost:3000/explorer/ to explore the API
9. Go to client directory `cd client` and build project `npm run build`
10. Now you can visit http://localhost:3000/ and browse the single page application
11. Check `client/README.md` for Frontend development