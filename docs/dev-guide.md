# Development Guide

## Store

This app is using [Redux Toolkit (RTL)](https://redux-toolkit.js.org/) to setup a global store shared between components.
You can find the reducers, actions and action types under the [/src/store directory](/src/store)

## Styling

For styling, styled-components has been setup to deliver a nicer developer experience.

In addition to in-component use of styled-components, the app has a theme setup under [/src/themes](/src/themes) which allows us to share the ui guide (colors, spacing, fonts, etc..) between components.
In order to update the theme, please make sure to update the theme types declaration as well inside [/src/styled.d.ts].

**Note: we are using the 8pt grid system for margins and paddings, defined in the theme**

Finally, under [/src/styles](/src/styles) you have find the global style that resets CSS and sets up global element styling, as well as styled elements that can be shared and extended by components.

## Layouts

Currently, there is one layout under [/src/layouts](/src/layouts) which defines the default layout that adds a header and footer for the component it is wrapping. Also, layouts are using the [React Router Layout](https://reactrouter.com/docs/en/v6/getting-started/concepts#layout-routes).
