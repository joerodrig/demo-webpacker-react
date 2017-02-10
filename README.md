## Demo Webpacker React
WIP

# Dependencies
* Ruby 2.3.3
* yarn/npm
* puma-dev

# Setup
```shell
bundle install
bin/yarn install
rake db:create
rake db:migrate
```

# Setting up puma-dev
1) Follow the initial installation instructions given in [puma-dev](https://github.com/puma/puma-dev)

2) Link the repository: `puma-dev link ~/path/to/demo-webpacker-react`

3) TODO:[SETUP REACT-STYLEGUIDIST] -> Link the styleguide dev server: `echo 4000 > ~/.puma-dev/styleguide.demo-webpacker-react`

4) Create a `.powenv` file in the root directory that contains any necessary puma-dev configuration. In my case, I'm using Chruby to set my Ruby versions. This config ensures puma-dev uses the correct Ruby:

	source /usr/local/share/chruby/chruby.sh
	chruby $(cat .ruby-version)


5) Now you can initialize your puma-dev server via: `puma-dev`
- This will start your rails server at `demo-webpacker-react.dev`

6) While puma-dev is running and the styleguide server, you can access the styleguide server at:  `styleguide.demo-webpacker-react.dev`
- NOTE: You have to run the styleguide server manually first by typing `bin/yarn styleguide-server`

# Development
To begin development, you need to boot up your Rails server and the Webpack
dev server which compiles all of your Javascript code:
```shell
rails s
bin/webpack-dev-server
```

NOTE: If you're using puma-dev, it should boot the Rails server for you automatically
when you run `puma-dev` in your CLI

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
