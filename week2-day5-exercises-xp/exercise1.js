// 🌟 Exercise 1 : Scope — predictions

// #1  funcOne()
// #1.1 -> alert "inside the funcOne function 3"
//        a starts at 5, 5 > 1 is true, so a = 3 reassigns the SAME variable (no new let).
// #1.2 -> with const: TypeError "Assignment to constant variable." at a = 3,
//        because a const cannot be reassigned.

// #2  funcThree() / funcTwo() / funcThree()
// #2.1 -> "inside the funcThree function 0", then funcTwo sets the global a to 5,
//        then "inside the funcThree function 5".
//        A function can read and modify a variable declared outside of it (global scope).
// #2.2 -> with const: TypeError when funcTwo() runs (a = 5 reassigns a const).
//        The first funcThree() still shows 0.

// #3  funcFour() then funcFive()
// #3.1 -> "inside the funcFive function hello"
//        window.a creates a global property, accessible everywhere as a.
//        (If funcFive() ran before funcFour(): ReferenceError, a is not defined.)

// #4  funcSix()
// #4.1 -> "inside the funcSix function test"
//        let a inside the function is a NEW variable that hides the global a (still 1).
// #4.2 -> with const: same result, no error — two separate declarations, no reassignment.

// #5  if block
// #5.1 -> "in the if block 5", then "outside of the if block 2"
//        if (true) always runs; let a = 5 only lives inside the { }.
// #5.2 -> with const: same result, no error — two separate declarations in two scopes.
