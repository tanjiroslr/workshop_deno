# Workshop_Deno

In this workshop, we will use Deno as a [REST API](https://www.redhat.com/fr/topics/api/what-is-a-rest-api) to save a TodoList. We will also use MongoDB for the Database

First part is installing Deno and MongoDB

## How to use
To participate to this workshop, you first need to create your own repository [using this repo as a template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template). Once it's done you can clone it and start to follow the intruction in the README files.

## Install

### Deno
Go to [deno.land](https://deno.land/#installation) and follow the instructions

### MongoDB

#### Macs Windows RedHat Ubuntu Debian SUSE Amazone
Go to [docs.mongodb.com](https://docs.mongodb.com/manual/administration/install-community/) and follow the instructions

#### Fedora

##### 1. Configure dnf repository

Create a file named `mongodb.repo` in the directory `/etc/yum.repos.d/`
```
sudo emacs /etc/yum.repos.d/mongodb.repo
```

In this file, add the following
```
[Mongodb]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
```

##### 2. Install MongoDB

Now, use dnf to install MongoDB
```
sudo dnf install mongodb-org
```

##### 3. Start MongoDB

Use the following command to start MongoDB.
```
sudo systemctl enable mongod.service
sudo systemctl start mongod.service
```

### Test Install

#### Deno

You can use the `deno --version` to check the deno install

#### MongoDB

You should now be able to use `mongod --version` which should show you the installed version of MongoDB (It should be 4.4)

You should also be able to use the `mongo` command which open a connection with the Database. From here, you could manually update your Database.
If you want more infos on manual operation, you can visit [docs.mongodb.com](https://docs.mongodb.com/manual/crud/)

## Runing Deno file

To run a file in deno, you need to use
`deno run file.ts`
In deno you need to give only the entrypoint of your program as it will search for dependencies on it's own.
When you run a file in deno, you will surely encounter a case like this
```
error: Uncaught PermissionDenied: access to environment variables, run again with the --allow-env flag
```
Or other PermissionDenied. Theses error are caused by deno because it is protecting your system from malevolent scripts, in this case accessing the environment. However, you can add the given flag to authorize your script to use this functionality

## Automated tests

When you are ready to submit your work, just push your work. It will trigger an automated test session. You can see the result of the test in the Action section of github.

## Version

This workshop was made with:
  - deno 1.6
  - [ink](https://deno.land/x/ink@1.3/mod.ts) 1.3
  - [abc](https://deno.land/x/abc@v1.2.3) 1.2.3
  - [deno_mongo](https://deno.land/x/mongo@v0.21.0) 0.21.0