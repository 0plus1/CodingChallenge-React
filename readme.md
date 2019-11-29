# Coding Challenge

You can visit the app in action using [an AWS amplify build](https://master.d13e7ha1ljw5o3.amplifyapp.com/)

## Getting Started
After pulling down this repo, run the following to install what's needed and to serve it locally
~~~shell script
yarn install
yarn start
~~~

Additional commands of interest
~~~shell script
# lint check
yarn lint
# run tests
yarn test
~~~

## Assumptions and Approach
1. Even though the single Book call fetches from the book list view, the current implementation would support a separate API route with the expectation of having more details
2. Because the Book view has the same data set I supported the route but simply used the same BookResult component for expediency
3. I chose MaterialUI to expedite the development of the UI. This resulted in fewer demonstrations of StyledComponent capabilities of which I am well versed
4. I followed the stubbed structure for tests in this challenge but I prefer keeping tests in the same directory to what they are testing
5. I didn't worry about ServerSide rendering

## Limitations
1. Not enough test coverage
2. No error boundary page
3. The user experience around failure scenarios should be addressed
4. Interoperability between MaterialUI and StyledComponents could be improved

## The First Tier
I have fulfilled all tiers in the challenge. I tagged Tier 1 as it demonstrates as approach using `useAsync` which I feel would have been sufficient to meet the objectives of this stage but is later replaced
~~~shell script
git checkout tags/0.0.1
yarn install
~~~
