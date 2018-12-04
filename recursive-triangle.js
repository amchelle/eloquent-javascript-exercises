function triangle(len) {
    // 1. define base case
    if (len > 7) { return }

    // 2. do work
    console.log('#'.repeat(len))

    // 3. recurse
    triangle(len + 1)
}

triangle(1)
