## Demo Webpacker React
WIP

# Dependencies
* Ruby 2.3.3
* yarn/npm

# Setup
```shell
bundle install
bin/yarn install
rake db:create
rake db:migrate
```

# Development
To begin development, you need to boot up your Rails server and the Webpack
dev server which compiles all of your Javascript code:
```shell
rails s
bin/webpack-dev-server
```

# Client Tests
We're using Jest to test our Javascript modules
The tests are located in our `assets/javascript/__tests__` folder

To run the tests, from the apps root directory run:
```shell
bin/yarn test
```

Alternatively, if you want to have Jest re-run when files are changed, run:
```shell
bin/yarn test -- --watch
```

# React Component Library
- TODO: React-styleguidist

# Deploying
- TODO

# Contributions
I need your help
