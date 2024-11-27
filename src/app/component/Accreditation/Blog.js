// components/Blog.js
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    { id: 1, title: "Consultation", description: " The company provides an estimate or quote based on customer requirements, including print materials, sizes, and quantities.", imgSrc: "/0Z7A8770.png" },
    { id: 2, title: "Printing", description: " The company provides an estimate or quote based on customer requirements, including print materials, sizes, and quantities.", imgSrc: "/image2.png" },
    { id: 3, title: "Packaging & Delivery", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Additional Services: If reprints, adjustments, or other services are needed, they can be provided based on the customer's feedback.", imgSrc: "/IMG_1326.png" },
  ];

  return (
    <div className="w-full py-12 px-6 mt-24 mb-24 text-white rounded-lg">
      <h2 className="text-6xl text-center font-bold text-[#00aeef] mb-8">Blog</h2>
      <p className="text-xl text-center w-4/12 mx-auto mb-20">We are introducing our personnel, culture and capabilities that make our organization unique. Barotopa Printers Limited, a core of idea and innovation which is a dream project of the Board </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-14">
        {/* Left Side with Two Blog Posts */}
        <div className="col-span-1 lg:col-span-2 space-y-[52px]">
          {blogPosts.slice(0, 2).map(post => (
            <div key={post.id} className="flex bg-[#171717] p-4 rounded-2xl shadow-lg">
              <div className="w-7/12 h-full">
                <Image src={post.imgSrc} alt={post.title} width={282.83} height={273.32} />
              </div>
              <div className=" w-full py-4">
                <h3 className="text-4xl font-semibold w-6/12 leading-normal">{post.title}</h3>
                <p className="text-gray-300 mt-24 w-10/12 text-lg">{post.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side with One Blog Post */}
        <div className="col-span-2">
          <div className="flex bg-[#171717] p-4 rounded-2xl shadow-lg">
            <div className='w-10/12'>
              <Image src={blogPosts[2].imgSrc} alt={blogPosts[2].title} width={352} height={596.64} />
            </div>
            <div className="w-full py-8">
              <h3 className="text-4xl font-semibold w-6/12 leading-normal">{blogPosts[2].title}</h3>
              <p className="text-[#d9d9d9] mt-72 text-lg">{blogPosts[2].description}</p>
            </div>
          </div>
        </div>

      </div>
 
      <div className="flex justify-center mt-10">
        <Link href="/Blog">
          <button className="border border-1 border-[#00aeef] text-center rounded-full text-xl w-[134px] h-[44px] lg:w-[251px] lg:h-[68px] hover:bg-[#2c2c2c] hover:border-[#00c7f0] transition duration-200">
            See All
          </button>
        </Link>
      </div>
       
    </div>
  );
}
