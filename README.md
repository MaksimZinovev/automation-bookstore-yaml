## About

Sample application for test automation.

Site is deployed at https://automationbookstore.dev (https://mzinbookstore-linux.azurewebsites.net) or can be downloaded and used locally.


## Installation 

```
git clone https://github.com/MaksimZinovev/automation-bookstore.git
```

## Usage 

To run tests locally
Install [live-server - npm](https://www.npmjs.com/package/live-server)

```shell
npm install live-server -g  
```

2. Chek in your browser http://127.0.0.1:8080/. Website should be accessible 
3. Install Cypress

```shell
cd e2e-tests
npm init -y
npm install cypress
npx cypress open

```
Follow propmpts and complete setup for Chrome. 
Run `search.cy.js` in Cypress app to check if it is working.

3. Run the website 

```shell
cd automation-bookstore
live-server
```

4. Run cypress tests from CLI

```shell
npm test
```


![Automation Bookstore](./img/AutomationBookstore.jpg)  

![Test run results](./img/RunFinishedCypress.jpg)