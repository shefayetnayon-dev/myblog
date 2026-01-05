---
title: "How to highlight your code like VS Code on your website with Next.js"
date: "2026-01-06T00:00:00.000Z"
excerpt: "A complete guide on how to add beautiful, persistent syntax highlighting to your Next.js project using rehype-pretty-code and Shiki."
coverImage: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80"
category: "Next.js"
---

When building a technical blog, one of the most important features is how you display your code blocks. A developer's reading experience depends heavily on legibility, and nothing beats the familiarity of VS Code's syntax highlighting.

In this tutorial, I'll show you how to implement **VS Code-like syntax highlighting** in your Next.js project using `rehype-pretty-code`.

## Why `rehype-pretty-code`?

While libraries like `prismjs` or `react-syntax-highlighter` are popular, `rehype-pretty-code` (powered by **Shiki**) offers superior highlighting because:

1.  **It uses TextMate grammars**: The exact same grammars used by VS Code.
2.  **Build-time highlighting**: No client-side runtime overhead for tokenizing code.
3.  **Beautiful defaults**: Supports line numbers, line highlighting, and word highlighting out of the box.

---

## Step 1: Install Dependencies

First, you need to install the necessary packages. Since we are using Markdown, we will need `react-markdown` along with the rehype plugins.

```bash
npm install rehype-pretty-code shiki rehype-slug rehype-autolink-headings
```

*Note: If you are already using `react-markdown`, mostly you just need `rehype-pretty-code` and `shiki`.*

---

## Step 2: Create a Custom Markdown Component

You likely have a component that renders your blog posts. We need to update it to use the `rehype-pretty-code` plugin.

Create or update your `MarkdownRenderer` component:

```tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

export function MarkdownRenderer({ content }: { content: string }) {
  const options = {
    theme: 'one-dark-pro', // or 'github-dark', 'dracula' etc.
    keepBackground: true,
    onVisitLine(node: any) {
      // Prevent lines from collapsing in `display: grid` mode, and
      // allow empty lines to be copy/pasted
      if (node.children.length === 0) {
        node.children = [{ type: 'text', value: ' ' }];
      }
    },
  };

  return (
    <ReactMarkdown
      rehypePlugins={[
        rehypeSlug,
        [rehypePrettyCode, options]
      ]}
      components={{
        // Custom component mapping if needed
        pre: ({ node, ...props }) => (
          <div className="overflow-auto rounded-lg border border-gray-700 my-4">
            <pre {...props} />
          </div>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
```

---

## Step 3: Add the CSS

`rehype-pretty-code` focuses on structure, so you might want a little CSS to make it look perfect (especially for line numbers if you enable them).

Add this to your `globals.css`:

```css
/* VS Code-like styles */
pre > code {
  display: grid;
  padding: 1rem 0;
}

code[data-line-numbers] {
  counter-reset: line;
}

code[data-line-numbers] > [data-line] {
  padding: 0 1rem;
}

code[data-line-numbers] > [data-line]::before {
  counter-increment: line;
  content: counter(line);
  display: inline-block;
  width: 1rem;
  margin-right: 1.5rem;
  text-align: right;
  color: gray;
}

/* Highlighted lines */
[data-highlighted-line] {
  background: rgba(200, 200, 255, 0.1);
  border-left: 2px solid #60a5fa;
}
```

---

## Step 4: Highlighting Your Code

Now, simply write your markdown as usual!

### Basic Highlighting

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

### Highlighting Specific Lines

You can highlight specific lines by adding `{}` after the language identifier.

` ```typescript {1, 3-4} `

```typescript
// This line is highlighted
const x = 1; 

// These lines are also highlighted
const y = 2;
const sum = x + y;
```

---

## Conclusion

That's it! You now have professional-grade syntax highlighting on your website. Since `rehype-pretty-code` does the heavy lifting at build/render time (depending on your setup), your site remains blazing fast.

Happy coding!
