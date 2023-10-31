# Components

## `MyButton` Component

- Note:
  - components that need bootsrap's Javascript (like `dropdown`, `carousel`, ...) won"t work even if you import bootstap's javascript file in the top of `_app.js`.
  - What we should do is import the file via the `useEffect` hook : the _app.js file will look like :