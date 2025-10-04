import React from 'react';
import Cover from '../../shared/Cover';

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D)', 
      
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-24">
          <h1 className="text-4xl font-semibold">আমাদের সম্পর্কে</h1>
          <p className="mt-4 text-lg">আপনার ব্যবসার সাফল্যের জন্য আমরা প্রতিশ্রুতিবদ্ধ</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold">আমাদের গল্প</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          আমরা একটি উদ্যমী দল, যারা প্রযুক্তি ও উদ্ভাবনের মাধ্যমে ব্যবসাকে নতুন উচ্চতায় নিয়ে যেতে প্রতিশ্রুতিবদ্ধ।
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold">মিশন</h3>
            <p className="mt-4 text-lg">
              আমাদের লক্ষ্য হলো গ্রাহকদের জন্য মানসম্মত সেবা প্রদান করা এবং তাদের ব্যবসাকে ডিজিটাল মাধ্যমে সমৃদ্ধ করা।
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">ভিশন</h3>
            <p className="mt-4 text-lg">
              আমরা একটি বিশ্বমানের ডিজিটাল সেবা প্রদানকারী প্রতিষ্ঠান হিসেবে প্রতিষ্ঠিত হতে চাই।
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold">আমাদের টিম</h2>
       <div className="mt-8 max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8">


 <div className="card bg-base-100 w-96 h-[500px] object-scale-down shadow-sm">
  <figure>
    <img
      src="https://lh3.googleusercontent.com/a/ACg8ocJbcr7DRCVqxsvoVQeRG46WBK5N9juu-LDkRIrLl9kTK04q1GU=s96-c"
      alt="boy" className='w-full h-full' />
  </figure>
  <div className=" flex flex-col mt-4 items-center ">
    <h2 className="card-title">
     Shoriful Islam
    
    </h2>
    <p className='font-bold text-2xl'>CEO</p>

  </div>
</div>
 <div className="card bg-base-100 w-96 h-[500px] object-scale-down shadow-sm">
  <figure>
    <img
      src="https://images.unsplash.com/photo-1736899801606-17d410ca7da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
      alt="girl" className='w-full' />
  </figure>
  <div className=" flex flex-col mt-4 items-center ">
    <h2 className="card-title">
    Anika Jannat
    
    </h2>
    <p className='font-bold text-2xl'>COO</p>

  </div>
</div>
 <div className="card bg-base-100 w-96 h-[500px] object-scale-down shadow-sm">
  <figure>
    <img
      src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
      alt="girl" className='w-full' />
  </figure>
  <div className=" flex flex-col mt-4 items-center ">
    <h2 className="card-title">
     Azmin Sultana
    
    </h2>
    <p className='font-bold text-2xl'>CFO</p>

  </div>
</div>


</div>


      </section>

      {/* Contact */}
      <section className="bg-gray-200 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold">যোগাযোগ করুন</h2>
        <p className="mt-4 text-lg">
          আমাদের সাথে যোগাযোগ করতে নিচের তথ্য ব্যবহার করুন:
        </p>
        <p className="mt-2 text-lg">ইমেইল: info@ourcompany.com</p>
        <p className="mt-2 text-lg">ফোন: +880123456789</p>
      </section>
    </div>
  );
};

export default AboutUs;
