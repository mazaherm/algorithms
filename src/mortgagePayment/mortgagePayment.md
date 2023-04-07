## Instructions

Write a function that calculates a persons monthly mortgage repayment value.

the return value should be a string which looks like this `£600/month`

The mathematical formula to caluclate this is:

```
r = Annual interest rate
P = Principal (starting balance) of the loan
n = Number of payments in total

Payment = P(r(1 + r)^n/(1 + r)^n - 1)
```
