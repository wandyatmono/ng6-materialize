# Development Enviroment

Sebelum melangkah, sumber yang digunakan sebagai acuan adalah

0. [Official Site](https://nodejs.org/en/)
1. [Hosting Advice](https://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/)
2. [NodeSource On Github](https://github.com/nodesource/distributions#debinstall)
3. [Angular](https://angular.io/guide/quickstart)
4. [Angular](https://www.technologyshouters.com/install-angular-5-ubuntu-step-step-complete-guide-2018/)
4. [Materialize](https://materializecss.com/)
5. []()

## Steps

```bash
$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 14.04.5 LTS
Release:	14.04
Codename:	trusty
```

> Warning!
>
> Ubuntu 14.04 LTS (Trusty Tahr) - not available for Node.js 10 and later
>
> Sebelumnya, nodejs dan npm gagal berfungsi tanpa diketahui penyebabnya. Sehingga harus di remove total dari system.


0. Node.js

    ```bash
    $ sudo apt-get remove nodejs
    $ sudo apt-get remove npm
    ```

    To completely uninstall node + npm is to do the following:

        - go to /usr/local/lib and delete any node and node_modules
        - go to /usr/local/include and delete any node and node_modules directory 
        - if you installed with brew install node, then run brew uninstall node in your terminal 
        - check your Home directory for any local or lib or include folders, and delete any node or node_modules from there 
        - go to /usr/local/bin and delete any node executable

    ```bash
    $ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    $ sudo apt-get install -y nodejs
    $ node -v
    v8.11.3
    $ npm -v
    5.6.0
    ```

1. [npm check](https://www.npmjs.com/package/npm-check)

    ```bash
    $ npm install -g npm-check
    ```

2. [npm-upgrade](https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm)

    ```bash
    $ npm install -g npm@latest
    $ npm -v
    6.1.0
    ```

3. [npm-check]https://www.npmjs.com/package/npm-check)

    ```bash
    $ sudo npm install -g npm-check
    ```


