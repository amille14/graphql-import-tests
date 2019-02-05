Some tests for the graphql-import package.

Install modules and run tests:
```
yarn
yarn test
```

Examples 1, 2, and 3 are failing as of graphql-import@0.7.1.

I added a 4th example, which is passing, to show that `# import Query.* from ...` is working as expected. It's only specific import statements like `# import A from ...` that aren't working properly.
