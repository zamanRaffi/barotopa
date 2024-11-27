import React from 'react';
import Image from 'next/image';
import machineryData from '../../data/machinery_data.json'

export default async function MachineryDetail({ params }) {

  const { Machineryslug } = await params;

 
  const machine = machineryData.find((item) => item.slug === Machineryslug);


  if (!machine) {
    return <div>Error: Machinery data not found.</div>;
  }

  return (
    <section className="text-white min-h-screen py-16 mt-8 px-6 lg:px-20 lg:px-40">
      <div className="max-w-5xl mx-auto">
        {/* Header section */}
        <header className="mb-6">
          <h2 className="text-lg text-gray-300">{machine.author} - {machine.date}</h2>
          <h1 className="text-4xl font-bold text-[#00aeef] mt-2">{machine.title}</h1>
          <h3 className="text-4xl font-bold text-[#00aeef] mt-2">{machine.subtitle}</h3>
        </header>

        {/* Image section */}
        <div className="mb-8">
          <Image
            src={machine.image}
            width={1520}
            height={603}
            alt={machine.title}
            className="rounded-lg"
          />
        </div>

        {/* Content sections */}
        <article className="text-[#949494] space-y-6">
          <h3 className='text-lg w-3/5 text-white'>{machine.heading1}</h3>
          <p>{machine.content}</p>
          <h3 className='text-lg w-3/5 text-white'>{machine.heading2}</h3>
          <p>{machine.additionalContent}</p>
          <h3 className='text-lg w-3/5 text-white'>{machine.heading3}</h3>
          <p>{machine.additionalContent2}</p>
          <h3 className='text-lg w-3/5 text-white'>{machine.heading2}</h3>
          <p>{machine.additionalContent}</p> 
          <h3 className='text-lg w-3/5 text-white'>{machine.heading3}</h3>
          <p>{machine.additionalContent2}</p>
        </article>
      </div>
    </section>
  );
}
