# Coding Challenge

You can visit the app in action using [an AWS amplify build](https://master.d13e7ha1ljw5o3.amplifyapp.com/)

There has been no change to the package scripts except the addition of `yarn lint`

## Assumptions and Approach
1. Book detail view uses the same data set as the list view
2. I chose MaterialUI to expedite the development of the UI. This resulted in fewer demonstrations of StyledComponent capabilities of which I am well versed
3. I followed the stubbed structure for tests in this challenge but I prefer keeping tests in the same directory to what they are testing
4. Didn't worry about ServerSide rendering

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
