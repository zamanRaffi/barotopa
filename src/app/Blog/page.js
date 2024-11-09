import Image from 'next/image';

export default function BlogPage() {

    const blogPosts = [
        { id: 1, author:"Lana Steiner . 18 Jan 2004", title: "Choosing the Right Paper for Your Printing Projects", description: "The company provides an estimate or quote based on customer requirements, including print materials and .....", imgSrc: "/0Z7A8688.png" },
        { id: 2, author:"Lana Steiner . 18 Jan 2004", title: "Choosing the Right Paper for Your Printing Projects", description:"The company provides an estimate or quote based on customer requirements, including print materials and .....", imgSrc: "/0Z7A8770_(1).png" },
        { id: 3, author:"Lana Steiner . 18 Jan 2004", title: "Choosing the Right Paper for Your Printing Projects", description:"The company provides an estimate or quote based on customer requirements, including print materials and .....", imgSrc: "/IMG_1286.png" },
        { id: 4, author:"Lana Steiner . 18 Jan 2004", 
            title:"The Art of Color Management in Printing: Best Practices for Perfect Results", description: " The company provides an estimate or quote based on customer requirements, including print materials and  The company provides an estimate or quote based on customer ...", imgSrc: "/IMG_1326_(1).png" },

        { id: 5, author:"Lana Steiner . 18 Jan 2004", title: "Choosing the Right Paper for Your Printing Projects", description: "The company provides an estimate or quote based on customer requirements, including print materials and .....", imgSrc: "/IMG_1364.png" },
        { id: 6, author:"Lana Steiner . 18 Jan 2004", title: "Choosing the Right Paper for Your Printing Projects", description:"The company provides an estimate or quote based on customer requirements, including print materials and .....", imgSrc: "/0Z7A8565-ed_(1).png" },
        { id: 7, author:"Lana Steiner . 18 Jan 2004", title: "Choosing the Right Paper for Your Printing Projects", description:"The company provides an estimate or quote based on customer requirements, including print materials and .....", imgSrc: "/IMG_1336.png" },
        { id: 8, author:"Lana Steiner . 18 Jan 2004", title: "Choosing the Right Paper for Your Printing Projects", description: "The company provides an estimate or quote based on customer requirements, including print materials and .....", imgSrc: "/IMG_1257.png" },
        { id: 9, author:"Lana Steiner . 18 Jan 2004", title: "Choosing the Right Paper for Your Printing Projects", description:"The company provides an estimate or quote based on customer requirements, including print materials and .....", imgSrc: "/IMG_1384.png" },
        { id: 10, author:"Lana Steiner . 18 Jan 2004", title: "Choosing the Right Paper for Your Printing Projects", description:"The company provides an estimate or quote based on customer requirements, including print materials and .....", imgSrc: "/IMG_1370.png" }
        
      ];
    

    return (
      <div className="text-white min-h-screen px-6 py-12 mt-20 mb-16">
        {/* Header Section */}
        <header className="text-center mb-32">
          <h1 className="text-5xl font-bold mb-4 text-[#00aeef] leading-tight">The Latest in Printing News, <br/> Insights, and Innovation</h1>
          <p className="text-[#d9d9d9] text-lg">
            We help businesses stand out with superior printing services that <br/> blend creativity, quality, and precision.
          </p>
        </header>
  
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-14">

        {/* Left Side with One Blog Post */}
        <div className="col-span-2">
            <div className='w-full'>
              <Image src={blogPosts[3].imgSrc} alt={blogPosts[3].title} width={884} height={541.1} />
            </div>
            <div className="w-full py-4">
            <p className="text-[#d9d9d9] text-md mb-6">{blogPosts[3].author}</p>
              <h3 className="text-xl font-semibold w-7/12 leading-normal mb-4">{blogPosts[3].title}</h3>
              <p className="text-[#cfcfcf] text-md w-9/12">{blogPosts[3].description}</p>
            </div>
            <div className='flex mt-1'>
                <button className='bg-[#1f1f1f] w-[106.5px] h-[40px] rounded-full mr-3'>
                      Design
                </button>
                <button className='bg-[#1f1f1f] w-[106.5px] h-[40px] rounded-full '>
                      Research
                </button>
            </div>
         
        </div>

              {/* Right Side with Three Blog Posts */}
              <div className="col-span-1 md:col-span-2 ml-4">
  {blogPosts.slice(0, 3).map(post => (
    <div key={post.id} className="flex mb-6 w-full">
      <div className='w-10/12'>
        <Image src={post.imgSrc} alt={post.title} width={383.22} height={239.7} />
      </div>
      <div>
        <p className="text-[#d9d9d9] text-md mb-2">{post.author}</p>
        <h3 className="text-2xl w-10/12 font-semibold leading-tight mb-3">{post.title}</h3>
        <p className="text-[#d9d9d9] text-md mb-4">{post.description}</p>

        {/* Button Section */}
        <div className="flex">
          <button className="bg-[#1f1f1f] w-[106.5px] h-[40px] rounded-full mr-3">
            Design
          </button>
          <button className="bg-[#1f1f1f] w-[106.5px] h-[40px] rounded-full">
            Research
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


      </div>



      <hr className="mb-8 mt-16 border-b-1 border-[#272727] w-full" />
             
      <div  className="grid grid-cols-1 md:grid-cols-3 gap-2 py-8 px-8">
      {blogPosts.slice(4, 10).map(post => (
    <div key={post.id} className="mb-6 w-full">
      <div>
        <Image src={post.imgSrc} alt={post.title} width={578.67} height={318} />
      </div>
      <div>
        <p className="text-[#d9d9d9] text-md mb-4 mt-6">{post.author}</p>
        <h3 className="text-2xl w-8/12 font-semibold leading-tight mb-2">{post.title}</h3>
        <p className="text-[#d9d9d9] text-md mb-4 w-10/12">{post.description}</p>

    
      </div>
    </div>
  ))}

      </div>

      </div>
    );
  }
  