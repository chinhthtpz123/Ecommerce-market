import RegisterForm from "./register-form";
import { FaCartShopping } from "react-icons/fa6";

export default function Register(): React.ReactElement {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex justify-center items-center px-6 py-9 mx-auto md:h-screen lg:py-0">
        <div className="flex justify-between w-full bg-white rounded-lg shadow md:h-11/12 sm:3/4">
          <div className="flex flex-col items-center justify-center w-1/2 h-full p-6">
            <div className="flex flex-col items-center relative text-xl min-w-fit text-custom">
              <FaCartShopping className="text-9xl overflow-hidden inline-block" />
              <span className="text-4xl">E-Market</span>
            </div>
            <p className="text-base text-custom mt-2">
              Đăng ký tài khoản để trải nghiệm dịch vụ tốt nhất
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
