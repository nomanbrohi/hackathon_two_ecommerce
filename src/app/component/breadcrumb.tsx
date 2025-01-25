'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Breadcrumb() {
  const pathname = usePathname()
  console.log(pathname)
  const segments = pathname.split('/').filter(segment => segment)
  console.log(segments)

  return (
    <>
      <div className='breadcrumb flex items-center space-x-2 text-gray-600'>
        <span className='flex items-center'>
          <Link
            href='/'
            className={segments.length === 0 ? 'font-bold' : 'hover:underline'}
          >
            Home
          </Link>
          {segments.length > 0 && <span className='mx-2'>{'>'}</span>}
        </span>

        {segments.map((segment, index) => {
          const path = '/' + segments.slice(0, index + 1).join('/')
          const isLast = index === segments.length - 1
          return (
            <span key={index} className='flex items-center'>
              <Link
                href={path}
                className={isLast ? 'font-bold' : 'hover:underline'}
              >
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
              {!isLast && <span className='mx-2'>{'>'}</span>}
            </span>
          )
        })}
      </div>
    </>
  )
}

// 'use client';

// import { usePathname } from 'next/navigation';
// import Link from 'next/link';

// export default function Breadcrumb() {
//   const pathname = usePathname(); // Get the current path
//   const segments = pathname.split('/').filter((segment) => segment); // Split the path and filter empty segments

//   return (
//     <div className="breadcrumb flex items-center space-x-2 text-gray-600">
//       {segments.map((segment, index) => {
//         const path = '/' + segments.slice(0, index + 1).join('/'); // Construct the path for each segment
//         const isLast = index === segments.length - 1; // Check if it's the last segment

//         return (
//           <span key={index} className="flex items-center">
//             <Link href={path} className={isLast ? 'font-bold' : 'hover:underline'}>
//               {segment.charAt(0).toUpperCase() + segment.slice(1)} {/* Capitalize first letter */}
//             </Link>
//             {!isLast && <span className="mx-2">{'>'}</span>}
//           </span>
//         );
//       })}
//     </div>
//   );
// }
