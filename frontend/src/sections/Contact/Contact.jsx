import { useState } from "react";
import { MdPerson } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const initialState = {
  name: "",
  phoneNumber: "",
  emai: "",
  message: "",
};

const Contact = () => {
  const [userForm, setUserForm] = useState(initialState);
  return (
    <section id="contact">
      <div className="mx-[5%]">
        <h3 className="text-center uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight mb-10">
          Contact
        </h3>
        <div className="p-4 py-10 mx-auto md:w-[60%] bg-white rounded-3xl">
          <form action="#" className="flex-col gap-y-4 flex" onSubmit={(e)=>e.preventDefault()}>
            <div className="bg-slate-300 ps-8 p-2 md:p-4 rounded-full w-full xl:w-[60%]  mx-auto flex items-center gap-x-2">
              <MdPerson className="text-slate-500 text-3xl" />
              <label>
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  className="
                w-full
                h-full
                outline-none 
                bg-transparent
                 text-black 
                  border-cyan-500"
                />
              </label>
            </div>

            <div className="bg-slate-300 ps-8 p-2 md:p-4 rounded-full w-full xl:w-[60%]  mx-auto flex items-center gap-x-2">
              <MdEmail className="text-slate-500 text-3xl" />
              <label>
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  className="
                w-full
                h-full
                outline-none 
                bg-transparent
                 text-black 
                  border-cyan-500"
                />
              </label>
            </div>

            <div className="bg-slate-300 ps-8 p-2 md:p-4 rounded-lg xl:rounded-3xl w-full xl:w-[60%]  mx-auto flex items-center gap-x-2">
              <textarea
                rows={10}
                cols={1}
                placeholder="message"
                type="messages"
                id="messages"
                name="messages"
                className="
                mt-2 
                w-full
                h-full
                outline-none 
                bg-transparent
                 text-black 
                  border-cyan-500"
              />
            </div>
            <button className="w-[60%] mx-auto bg-gradient-to-r from-fuchsia-600 to-purple-600   py-3 px-8 rounded-full uppercase tracking-wider font-medium transition-all duration-300 text-white group-hover:text-black ease-in-out hover:bg-none">
              send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
