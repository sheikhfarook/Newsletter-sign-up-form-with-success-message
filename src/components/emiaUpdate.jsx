import image from "../assets/image.svg";
import check from "../assets/check.svg";
import mobile_image from "../assets/illustration-sign-up-mobile.svg";
import SubscribingPage from "./subscribingPage";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const EmailUpdate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [Email, setEmail] = useState("");
  const [haveValue, setHaveValue] = useState(false);
  const toast = useToast();

  const onSubmit = (data) => {
    console.log(data);
    if (data.email) {
      toast({
        title: "Thanks you.",
        description: "Have a nice day",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setHaveValue(true);
      setEmail(data.email);
    } else {
      toast({
        title: "required.",
        description: " check your email",
        status: "error",
        duration: 9000,
        isClosable: false,
      });
      setHaveValue(false);
    }
  };
  return (
    <>
      {!haveValue && (
        <div
          className="my-[13rem] w-[58rem] m-auto h-[40.9375rem] shadow-2xl  
    max-sm:w-full max-sm:h-[17.75rem] max-md:my-0">
          <div
            className="flex gap-10 justify-center items-center bg-white rounded-[2.25rem]
      max-sm:flex-col-reverse">
            <div className="font-roboto space-y-10 max-sm:space-y-7">
              {/*  */}
              <div
                className="w-[21.625rem] font-[700] h-[3.57644rem] text-[#242742] 
                      max-sm:w-[20.4375rem] ">
                <p className="text-[3.5rem] max-sm:text-[2.5rem]">
                  Stay updated!
                </p>
              </div>
              <div className="w-[23.5rem] h-[3.0655rem] text-[#242742]   max-sm:w-[20.4375rem] ">
                <p className="text-[1rem] font-[400]">
                  Jion 60,000+ product managers receiving monthly updates on:
                </p>
              </div>
              <div className="space-y-3 max-sm:space-y-[1.8rem]">
                <div className="flex gap-4">
                  <img src={check} alt="" />
                  <p
                    className="w-[21.1875rem] h-[1.53275rem] text-[1rem] font-[400] 
                          max-sm:w-[18.125rem]">
                    Product discovery and building what matters
                  </p>
                </div>
                <div className="flex gap-4">
                  <img src={check} alt="" />
                  <p
                    className="w-[21.1875rem] h-[1.53275rem] text-[1rem] font-[400]
                         max-sm:w-[18.125rem]">
                    Measuring to ensure updates are a success
                  </p>
                </div>
                <div className="flex gap-4">
                  <img src={check} alt="" />
                  <p
                    className="w-[21.1875rem] h-[1.53275rem] text-[1rem] font-[400]
                        max-sm:w-[18.125rem]">
                    And much more!
                  </p>
                </div>
              </div>
              <div>
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="w-[4.75rem] h-[1.14956rem] text-[0.75rem] font-[700]">
                        Email address
                      </p>
                      <div>
                        {errors?.email?.type === "required" && (
                          <p className="text-[#FF6155] text-[0.75rem] font-[700]">
                            Valid email required
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <input
                        className={`border-2 w-[23.5rem] h-[3.57644rem] p-5 text-[1rem] font-[400] rounded-[0.5rem]
                      max-sm:w-[20.4375rem]   cursor-pointer ${
                        errors.email &&
                        "text-red-500 border-[#FF6155] bg-[#edcdcb]"
                      }`}
                        {...register("email", {
                          required: true,
                        })}
                        type="email"
                        placeholder="email@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      // onClick={handleSubmit}
                      className="w-[23.5rem]  h-[3.57644rem] hover:bg-gradient-to-t from-[#FF527B] to-[#FF6A3A] bg-[#242742] rounded-[0.5rem]
                                  max-sm:w-[20.4375rem] ">
                      <p className="text-center text-[1rem] font-[700] text-white">
                        Subscribe to monthly newsletter
                      </p>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <img className="max-sm:hidden my-10" src={image} alt="" />
              <img className="md:hidden" src={mobile_image} alt="" />
            </div>
          </div>
        </div>
      )}
      {haveValue && (
        <SubscribingPage email={Email} onClose={() => setHaveValue(false)} />
      )}
    </>
  );
};

export default EmailUpdate;
