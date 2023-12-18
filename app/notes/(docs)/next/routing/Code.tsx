export const linkCode = `import Link from 'next/link'
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}`;

const post = {
	slug: "`/blog/${post.slug}`",
};

export const dynamicLinkCode = `import Link from 'next/link'
 
export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={${post.slug}}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}`;

const usePathname = {
	name: "`link ${pathname === '/about' ? 'active' : ''}`",
};

export const usePathnameCode = `'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul>
        <li>
          <Link className={${usePathname.name}} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={${usePathname.name}}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}`;
