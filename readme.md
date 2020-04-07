# MSSQL Configuration assistant

---

The idea with this tool is to assist with expedite configuring a project for interfacing with either a traditional MS SQL server or Azure SQL. Thereafter to assist with implementing a database api and troubleshooting, without having to download heavy platform specific client software or figuring out tedious ide extensions. Once your config returns `CONFIG SUCCESSFUL` all systems are a go.

---

## How to use:

### 1. Clone this repo.

`git clone https://github.com/infinity-arc/mssql-configuration-assistant.git`

### 2. Create the a file in the root of the project and name it `.env`.

### 3. The .env file is where you configure the db connection of which there are two options:

***OPTION A - Connection string***

* In the `.env` file create a single variable:

`CONNECTIONSTRING=mssql://<db-user>:<db-user-password>@<db-server-host>:<db-port>/<datatbase>`

> NOTE: the default port is `1433` and the `/<datatbase>` part of the connection string is optional.

***OPTION B - Server config***

Instead of the connections string create these variables in the `.env` file.

```
SYS=<db-user> // default is sa
PASS=<db-user-password>
HOST=<db-server-host>
PORT=<db-server-host>
```
> Optional for connecting a specific database 

```
DB=<my-sql-server-db>
```

### 4. Run `npm install`

> **WARNING**: Do not commit the .env file to a public git repo, it contains sensitive config data and must be kept secret.

### 5. Test the connection.

Once this is configured run `npm test`. If you see this result your database server is configured correctly and setting up the `mssql` driver in your project will be effortless. See the `example` directory for an example implementation.

### 6. Use as a database client

once step four has succeeded your can also use this tool to run any `T-SQL` query that is possible. Simply type your query in the script.sql file and in the terminal write `npm start` and hit enter, see the console output for the result of your custom queries.

 ... to be continued.
