// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import Image from "next/image"
// import Link from "next/link"

// export default function BlogSection() {
//   const blogPosts = [
//     {
//       date: "3 April 2023",
//       title: "Cook oatmeal chocolate chip",
//       description: "This is the first example post with different elements",
//       image: "/card1.png ",
//       slug: "id"
//     },
//     {
//       date: "3 April 2023",
//       title: "Make these chocolate breads",
//       description: "This is the first example post with different elements",
//       image: "/card2.png",
//       slug: "id1",
//        href: "/blogcards1"
//     },
//     {
//       date: "30 March 2023",
//       title: "Baking tips for yummy buns",
//       description: "This is the first example post with different elements",
//       image: "/card3.png",
//       slug: "baking-tips",
//        href: "/blogcards1"
//     },
//     {
//         date: "20 august 2023",
//         title: "Baking tips for yummy basketCakes",
//         description: "This is the first example post with different elements",
//         image: "/card4.webp",
//         slug: "blogcards1",
//          href: "/blogcards1"
//       },
//       {
//         date: "10 March 2023",
//         title: "Baking tips for buns",
//         description: "This is the first example post with different elements",
//         image: "/card5.webp",
//         // slug: "baking-tips"
//          href: "/blogcards1"
//       },
//       {
//         date: "3 March 2023",
//         title: "Baking tips for yummy buns",
//         description: "This is the first example post with different elements",
//         image: "/card6.webp",
//         // slug: "pading-tips",
//         // slug: "pading-tips",
//         href: "/blogcards1"
//       },
          
//   ]

//   return (
//     <section className="bg-black min-h-screen py-16 px-4">
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h1 className="text-white text-5xl font-bold mb-6">Our Blog</h1>
//         <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//           Our bakery and handcrafted pastries are of the highest quality. Come and enjoy organic bakery items.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {blogPosts.map((post, index) => (
//           <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
//             <div className="relative h-48 overflow-hidden">
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 fill
//                 className="object-cover transition-transform hover:scale-105 duration-300"
//               />
//             </div>
//             <CardContent className="p-6">
//               <p className="text-gray-400 text-sm mb-3">{post.date}</p>
//               <h2 className="text-white text-2xl font-bold mb-3">{post.title}</h2>
//               <p className="text-gray-400 mb-4">{post.description}</p>
//             </CardContent>
//             <CardFooter>
//               <Link 
//                 href={post.href}
//                 className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
//               >
//                 Read More
//               </Link>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </section>
//   )
// }
// 'use client';
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function BlogSection() {

//   const blogPosts = [
//     {
//       date: "3 April 2023",
//       heading: "Cook oatmeal chocolate chip",
//       description: "This is the first example post with different elements",
//       image: "/card1.png ",
//       slug: "id",
//       href: "/blogcards1", 
//     },
//     {
//       date: "3 April 2023",
//       heading: "Make these chocolate breads",
//       description: "This is the first example post with different elements",
//       image: "/card2.png",
//       slug: "id1",
//       href: "/blogcards2",
//     },
//     {
//       date: "30 March 2023",
//       heading: "Baking tips for yummy buns",
//       description: "This is the first example post with different elements",
//       image: "/card3.png",
//       slug: "baking-tips",
//       href: "/blogcards3",
//     },
//     {
//       date: "20 August 2023",
//       heading: "Baking tips for yummy basketCakes",
//       description: "This is the first example post with different elements",
//       image: "/card4.webp",
//       slug: "blogcards1",
//       href: "/blogcards4",
//     },
//     {
//       date: "10 March 2023",
//       heading: "sweets cakes for party",
//       description: "This is the first example post with different elements",
//       image: "/card5.webp",
//       href: "/blogcards5", // Ensure href is defined
//     },
//     {
//       date: "3 March 2023",
//       heading: "Baking cakes ",
//       description: "This is the first example post with different elements",
//       image: "/card6.webp",
//       href: "/blogcards6", // Ensure href is defined
//     },
//   ];


//   const [response, setResponse] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await client.fetch(`
//           *[_type == 'landingpage'][0].sections[1]{
//             'cardHeading': cardHeading,
//             'cards': cards[]{
//               'image': image.asset->url,
//               'heading': heading,
//               'date': date,
//               'description': description,
//               "link": link,
//             }
//           }
//         `);
//         setResponse(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!response) {
//     return <div>No data available</div>;
//   }


//   return (
//     <section id='cards' className="bg-black min-h-screen py-16 px-4">
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h1 className="text-white text-5xl font-bold mb-6">{response.cardHeading}</h1>
//         <p className="text-gray-300 text-lg max-w-2xl mx-auto">
// {response.heading}        </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {blogPosts.map((post, index) => (
//           <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
//             <div className="relative h-48 overflow-hidden">
//               <Image
//                 src={post.image}
//                 alt={post.heading}
//                 fill
//                 className="object-cover transition-transform hover:scale-105 duration-300"
//               />
//             </div>
//             <CardContent className="p-6">
//               <p className="text-gray-400 text-sm mb-3">{post.date}</p>
//               <h2 className="text-white text-2xl font-bold mb-3">{post.heading}</h2>
//               <p className="text-gray-400 mb-4">{post.description}</p>
//             </CardContent>
//             <CardFooter>
//               <Link
//                 href={post.href || "#"} // Fallback to "#" if href is undefined
//                 className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
//               >
//                 Read More
//               </Link>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }


// 'use client';
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function BlogSection() {
//   const [response, setResponse] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await client.fetch(`
//           *[_type == 'landingpage'][0].sections[]{
//             'cardHeading': cardHeading,
//             'cards': cards[]{
//               'image': image.asset->url,
//               'heading': heading,
//               'date': date,
//               'description': description,
//               'href':href,
//             }
//           }
//         `);
//         console.log("Sanity Response:", data);
//         setResponse(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!response || !response.cards) {
//     return <div>No data available</div>;
//   }

//   return (
//     <section id="cards" className="bg-black min-h-screen py-16 px-4">
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h1 className="text-white text-5xl font-bold mb-6">{response.cardHeading}</h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {response.cards.map((post: any, index: number) => (
//           <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
//             <div className="relative h-48 overflow-hidden">
//               <Image
//                 src={post.image || "/placeholder-image.png"} // Fallback image
//                 alt={post.heading}
//                 fill
//                 className="object-cover transition-transform hover:scale-105 duration-300"
//               />
//             </div>
//             <CardContent className="p-6">
//               <p className="text-gray-400 text-sm mb-3">{post.date || "No Date Available"}</p>
//               <h2 className="text-white text-2xl font-bold mb-3">{post.heading}</h2>
//               <p className="text-gray-400 mb-4">{post.description}</p>
//             </CardContent>
//             <CardFooter>
//               <Link
//                 href={post.href || "#"} // Fallback to "#"
//                 className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
//               >
//                 Read More
//               </Link>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }
// 'use client';
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function BlogSection() {
//   const [response, setResponse] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await client.fetch(`
//           *[_type == 'landingpage'][0].sections[0].card[]{
//               'image': image.asset->url,
//               'heading': heading,
//               'date': date,
//               'description': description,
//               'href': href,
//             }
//           }
//         `);
//         console.log("Sanity Cards Data:", data); // Debugging
//         setResponse(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!response || !response.cards || response.cards.length === 0) {
//     return <div>No cards available</div>;
//   }

//   return (
//     <section  className="bg-black min-h-screen py-16 px-4">
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h1 className="text-white text-5xl font-bold mb-6">OUR BLOGS</h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {response.card.map((post: any, index: number) => (
//           <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
//             <div className="relative h-48 overflow-hidden">
//               <Image
//                 src={post.image || "/placeholder-image.png"} // Fallback image
//                 alt={post.heading || "Default Heading"}
//                 fill
//                 className="object-cover transition-transform hover:scale-105 duration-300"
//               />
//             </div>
//             <CardContent className="p-6">
//               <p className="text-gray-400 text-sm mb-3">{post.date || "No Date Available"}</p>
//               <h2 className="text-white text-2xl font-bold mb-3">{post.heading || "Default Heading"}</h2>
//               <p className="text-gray-400 mb-4">{post.description || "No description available."}</p>
//             </CardContent>
//             <CardFooter>
//               <Link
//                 href={post.href || "/default-path"} // Fallback to default path
//                 className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
//               >
//                 Read More
//               </Link>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogSection() {
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`
          *[_type == 'landingpage'][0].sections[0]{
            cards[] {
              'image': image.asset->url,
              'heading': heading,
              'date': date,
              'description': description,
              'href': link 
            }
          }
        `);

        console.log("Sanity Cards Data:", data?.cards); // Debugging
        setCards(data?.cards || []); // Handle empty results
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (cards.length === 0) {
    return <div>No cards available</div>;
  }

  return (
    <section className="bg-black min-h-screen py-16 px-4" id="cards">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-white text-5xl font-bold mb-6">OUR BLOGS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((post: any, index: number) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder-image.png"} // Fallback image
                alt={post.heading || "Default Heading"}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardContent className="p-6">
              <p className="text-gray-400 text-sm mb-3">{post.date || "No Date Available"}</p>
              <h2 className="text-white text-2xl font-bold mb-3">{post.heading || "Default Heading"}</h2>
              <p className="text-gray-400 mb-4">{post.description || "No description available."}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={post.href || "/default-path"} // Fallback to default path
                className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
