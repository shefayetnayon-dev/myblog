---
title: "Syntax Highlighting with Prism.js"
date: "2024-01-15"
excerpt: "A demonstration of code syntax highlighting in our blog using React Syntax Highlighter."
coverImage: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80"
category: "Coding"
---

# Code Syntax Highlighting

This blog now supports syntax highlighting for code blocks! check out the examples below.

## JavaScript

```javascript
function helloWorld() {
  console.log("Hello, world!");
}

const add = (a, b) => a + b;
```

## Python

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

## CSS

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

## React / TSX

```tsx
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```
