import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="mx-4 sm:mx-[10%]">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* LEFT */}
        <div>
          <img
            className="mb-5 w-40"
            src={assets.logo}
            alt="Footer Logo Image"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            tenetur at porro veritatis molestias. Itaque dolorum accusamus
            reiciendis culpa vitae, molestiae reprehenderit, quod possimus esse
            assumenda, quaerat magnam totam officia?
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-xl font-medium mb-5">COMPANY</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-xl font-medium mb-5">GET IN TOUCH</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-234-56789</li>
            <li>query@bookdoctor.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          &copy; Copyright 2025 | BookDoctor | All Right Reserved
        </p>
      </div>
    </footer>
  );
}
