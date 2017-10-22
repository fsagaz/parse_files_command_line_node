# node-js-test

1) install packages and dependencies:

node var param = "my value"
```
npm install
```

2) execute file

for json file softwareadvice:
```
node index.js --file="softwareadvice"
```
for yaml file capterra:
```
node index.js --file="capterra"
```

other names should print error message (ex:)
```
node index.js --file="newname"
```

3) for running tests

```
node test.js
```

## Informations

- This test was made with node, using third part packages for parsing the files, this packages are included on the package.json file.

- I didn't use any framework for test in this case, normally I used jasmine or mocha, the tests that I have made are very simple (checking extensions and checking output for one single case: json file)

- I will try (with more time) to perform this test using ES6 and organizing my code using classes instead or ES functions.
