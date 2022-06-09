import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import SectionTitle from "./SectionTitle";
const Contact = () => {
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_557teus",
        "template_diogk9w",
        form.current,
        "DfhyYxoP_dopEwHPn"
      )
      .then(
        (result) => {
          e.target.reset();
          toast.success("Your Email Send Successfully");
        },
        (error) => {
          toast.error("Some Thing Wrong! Try Again");
        }
      );
  };
  return (
    <div id="contact">
      <SectionTitle text="Contact" />
      <div className="w-3/4 mx-auto py-8">
        <form ref={form} onSubmit={sendMail}>
          <div class="grid gap-6 mb-6 lg:grid-cols-1">
            <div>
              <label
                for="user_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required="true"
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="user_email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required="true"
            />
          </div>
          <div className="mb-6">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;