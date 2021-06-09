<div align="center">
	<h1>Link Cleaner</h1>
  <a href="https://github.com/AuroPick/link-cleaner/blob/master/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/AuroPick/link-cleaner"></a>
  <a href="https://link-cleaner.netlify.app"><img alt="Website" src="https://img.shields.io/website?label=client&logo=Netlify&url=https%3A%2F%2Flink-cleaner.netlify.app"></a>
  <a href="https://link-cleaner.herokuapp.com"><img alt="Website" src="https://img.shields.io/website?label=server&logo=Heroku&url=https%3A%2F%2Flink-cleaner.herokuapp.com"></a>
	<p><b>Remove spaces and emojis from your links.</b></p>
</div>
</br>
<a href="https://link-cleaner.netlify.app"><img src="https://user-images.githubusercontent.com/53499802/111077567-6ff9c200-8502-11eb-8735-ac0ef15d08b4.gif" /></a>

## Features
:heavy_check_mark: Link cleaning with regex  
:heavy_check_mark: Adding link to database  
:heavy_check_mark: See all links added to database  
:heavy_check_mark: Infinite scrolling  
:large_blue_circle: Real-time update  
:large_blue_circle: Open graph  
:large_blue_circle: Comments to links  

## Stack
- MongoDB [:link:](https://www.mongodb.com)  
- Express [:link:](https://expressjs.com)  
- React [:link:](https://reactjs.org)  
- NodeJS [:link:](https://nodejs.org/en/)
- Redux [:link:](https://redux.js.org)
- React Router [:link:](https://reactrouter.com)
- Material UI [:link:](https://material-ui.com)
- Mongoose [:link:](https://mongoosejs.com)

## Installation

1. Install [NodeJS](https://nodejs.org/en/)

2. [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repo or [download](https://github.com/AuroPick/link-cleaner/archive/master.zip) it

3. Use .env.sample files to create .env files

4. Install dependencies (run this in the root of the project)
  ```bash
  cd server && npm i && cd .. && cd client && npm i && cd ..
  ```
5. Start server and client (run this in the root of the project)
  ```bash
  start npm start --prefix server && start npm start --prefix client
  ```

## Regex used for cleaning process
```regex
/( |\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g
```
[See in code](https://github.com/AuroPick/link-cleaner/blob/master/client/src/components/LinkCleaner/Cleaner/Cleaner.js#L42)
