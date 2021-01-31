# Scheduler / TODO List - Based on Weighted Shortest Processing Time Algorithm

This scheduler sorts your tasks based on their weight/priority

(from 1 to 5) and the time it takes to complete.

Website is simple - the list is stored only on localStorage.

# [Background](https://riot.ieor.berkeley.edu/Applications/Scheduling/algorithms.html)

## List Scheduling Algorithms

This class of algorithms arranges jobs (in our case, tasks)

on a list according to some rule

### Shortest Processing Time (SPT)

This rule orders the jobs/tasks in the order of increasing

processing times. Basically, to complete more tasks in a period of time,

you should start doing the fastest ones.

### Weighted Shortest Processing Time (WSPT)

This rule is a variation of the SPT. Insted of sort per time (t),

it consideres the weight (w) and sorts per t/w. Considering the tasks

are independent and ready to be picked, the TODO will be sorted to

optimize your time so you can focus on the one with highest priority and/or fastest tasks.
