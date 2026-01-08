---
title: "Build a Full Stack Next.js App in 10 Minutes (Server Actions & App Router Included!)"
date: "2026-01-09T00:45:00.000Z"
excerpt: "Learn how to build a real Full Stack Todo App using Next.js 15, Server Actions, and MongoDB. হাতে-কলমে শিখুন কিভাবে একটি ফুল-স্ট্যাক অ্যাপ বানাবেন।"
coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
category: "Next.js, Full Stack, React"
tags: ["nextjs", "server-actions", "full-stack", "tutorial", "mongodb"]
---

## Introduction

Wait, did you know Next.js is now a fully capable backend framework? Yes! Gone are the days when you needed a separate Node.js/Express server. With **App Router** and **Server Actions**, you can build powerful full-stack applications directly inside your Next.js project.

In this fun, hands-on tutorial, we are going to build a **Super Simple Todo App**. No complex theories—just code that works!

---

### Step 1: The Setup

First, create a new Next.js app (if you haven't already):

```bash
npx create-next-app@latest my-todo-app
```

Then, clean up your global CSS and `page.tsx` file. We want a blank canvas!

### Step 2: The Logic (Server Actions) 

Here is the magic. We don't need to create API routes (`/api/todos`). We will just write a function that runs on the server!

Create a file `actions.ts` in your app folder:

```typescript
// app/actions.ts
'use server' //  This is the magic line!

// Simulating a database with a global variable (for demo only!)
let todos = ['Buy Milk', 'Learn Next.js'];

export async function getTodos() {
  return todos;
}

export async function addTodo(formData: FormData) {
  const newTodo = formData.get('todo') as string;
  if (newTodo) {
    todos.push(newTodo);
  }
  // In a real app, you would revalidate path here
}
```

### Step 3: The UI (Server Component) 

Now, let's use this in our `page.tsx`. Since it's a Server Component by default, we can just call the function directly!

```tsx
// app/page.tsx
import { getTodos, addTodo } from './actions';

export default async function Home() {
  const todos = await getTodos(); // Fetching data directly!

  return (
    <main className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-5"> My Super Todo App</h1>
      
      <ul className="mb-5 space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded">
            {todo}
          </li>
        ))}
      </ul>

      <form action={addTodo} className="flex gap-2">
        <input 
          type="text" 
          name="todo" 
          placeholder="Add a new task..." 
          className="border p-2 flex-grow rounded"
        />
        <button type="submit" className="bg-black text-white p-2 rounded">
          Add
        </button>
      </form>
    </main>
  );
}
```

**That's it!** You just built a full-stack app. The form submission happens on the server, data updates, and everything just works.

---
---
---

# Next.js দিয়ে ফুল-স্ট্যাক অ্যাপ্লিকেশন: হাতে-কলমে প্রজেক্ট 

Next.js এখন আর শুধু ফ্রন্টএন্ড ফ্রেমওয়ার্ক নয়, এটি একটি পাওয়ারফুল **Full Stack** ফ্রেমওয়ার্ক! বিশ্বাস হচ্ছে না? আসুন ১০ মিনিটে একটি **Todo App** বানিয়ে ফেলি। কোন আলাদা ব্যাকএন্ড সার্ভার বা API এর দরকার নেই!

আমরা ব্যবহার করব Next.js এর নতুন সুপারপাওয়ার: **Server Actions**।

---

### ধাপ ১: প্রোজেক্ট সেটআপ (Setup) 

প্রথমে নতুন একটি প্রজেক্ট খুলুন:

```bash
npx create-next-app@latest my-todo-app
```

### ধাপ ২: সার্ভার এর খেল (Server Actions) 

আমরা `actions.ts` নামে একটি ফাইল বানাবো। এখানে আমরা আমাদের সব ব্যাকএন্ড লজিক লিখব। ফাইলের শুরুতে `'use server'` লিখলেই Next.js বুঝে নেবে যে এই কোড ব্রাউজারে নয়, সার্ভারে রান হবে। এটাই **Server Actions** এর ম্যাজিক!

```typescript
// app/actions.ts
'use server' //  এই লাইনটাই সব!

// ডাটাবেস এর বদলে আমরা একটি সিম্পল অ্যারে ব্যবহার করছি
let todos = ['বাজার করতে হবে', 'Next.js শিখতে হবে'];

export async function getTodos() {
  return todos;
}

export async function addTodo(formData: FormData) {
  const newTodo = formData.get('todo') as string;
  if (newTodo) {
    todos.push(newTodo);
  }
}
```

### ধাপ ৩: ইউজার ইন্টারফেস (UI) 

এখন `page.tsx` ফাইলে আমরা সরাসরি সার্ভার ফাংশন কল করব। কোন `useEffect` বা `fetch` এর ঝামেলা নেই!

```tsx
// app/page.tsx
import { getTodos, addTodo } from './actions';

export default async function Home() {
  const todos = await getTodos(); // সরাসরি ডাটা নিয়ে আসলাম!

  return (
    <main className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-5">আমার টু-ডু অ্যাপ</h1>
      
      {/* লিস্ট দেখানো */}
      <ul className="mb-5 space-y-2">
        {todos.map((t, i) => (
          <li key={i} className="p-2 bg-gray-100 rounded">
            {t}
          </li>
        ))}
      </ul>

      {/* নতুন টাস্ক এড করা */}
      <form action={addTodo} className="flex gap-2">
        <input 
          type="text" 
          name="todo" 
          placeholder="নতুন কাজ লিখুন..." 
          className="border p-2 flex-grow rounded"
        />
        <button type="submit" className="bg-black text-white p-2 rounded">
          Add
        </button>
      </form>
    </main>
  );
}
```

### উপসংহার

দেখলেন তো কত সহজ? আমরা কোনো API Route বানাইনি, কোনো জটিল স্টেট ম্যানেজমেন্ট (Redux/Context) ব্যবহার করিনি। শুধু **Server Actions** দিয়ে ফর্ম সাবমিট করলাম এবং অটোমেটিক ডাটা আপডেট হয়ে গেল।

এটাই Next.js এর ফিউচার। হ্যাপি কোডিং! 
