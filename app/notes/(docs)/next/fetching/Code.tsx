const error = "`error.js`";

export const fetchCode = `async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest ${error}  Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main></main>
}`;

export const cachingCode = `// 'force-cache' is the default, and can be omitted
fetch('https://...', { cache: 'force-cache' })`;

export const timeRevalidateCode = `fetch('https://...', { next: { revalidate: 3600 } })`;

export const demandRevalidateCode = `export default async function Page() {
  const res = await fetch('https://...', { next: { tags: ['collection'] } })
  const data = await res.json()
  // ...
}`;

export const revalidateTagCode = `'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function action() {
  revalidateTag('collection')
}`;
