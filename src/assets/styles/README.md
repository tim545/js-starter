Styles
======

This project uses [Sass](http://sass-lang.com/) to build its CSS and compile it to `dist/style.css`. Remember that all styles end up in a single file, so all styles will apply to every page, all the time. Make sure you namespace your styles for the page you are working on.

### Naming Conventions

All selectors within the `sections` and `shared` should be namespaced to a logical module, for example a button class name should start with `.button-` and finish with a logical name related to it's purpose, such as `.button-icon`.

Selections should be only _class selectors_, id's and attributes are for JavaScript and tag selectors are for the general layout styles. Every element should have a `class` attribute to allow CSS manipulation (reasonable exceptions excluded).

### Adding a new Sass file

If you are adding a new Sass file to `src/assets/styles` you will need to reference the file in `src/assets/styles/style.scss` for it to load. We have three directories to organize the respective files: layout, sections, and shared. If you are adding a new file you are likely adding it to `sections`.

Check [our styleguide](https://github.com/Automattic/wp-calypso/blob/master/docs/coding-guidelines/css.md) for more information on how we use Sass.