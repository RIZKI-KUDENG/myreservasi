import Image from "next/image";
import Link from "next/link";

export function Contact() {
  return (
    <div id="contact" className="bg-green-400 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          We are here for you, <br /> contact us at <span className="text-orange-500">anytime</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Have any questions about our services or just want to talk with us? Please reach out.
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <Image src="/wa.jpg" alt="WhatsApp" width={50} height={50} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">WhatsApp</h2>
            <p className="text-gray-600">Get in touch with us on WhatsApp</p>
            <Link href={"https://wa.me/62895375747400"} className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600">
              Start chat <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <Image src="/email.jpg" alt="Email" width={50} height={50} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Email</h2>
            <p className="text-gray-600">From your email app</p>
            <p className="mt-4 text-gray-800">myreservasi1516@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="text-center">
          <p className="text-gray-600">
            We will get back to you as soon as possible. Our team is available 8am-6pm on weekdays.
          </p>
        </div>
      </div>
    </div>
  );
}
