const Page2Section2 = () => {
  return (
    <div className="w-full h-auto bg-[#E9F1EE] sec1 flex items-center justify-start pt-11 ">
      <div className="centerbox w-[990px] max-w-[990px] h-auto  flex flex-col  items-start pl-[110px] ">
        <div className="h1 text-[#49A760] ">Powered By AI </div>
        <div className="h2 font-bold text-[45px] ">
          Agri Shakti AI Prediction
        </div>
        <div className="w-full flex justify-end mb-11 ">
          <section class=" bg-white mt-7 rounded-xl">
            <div class="  py-[20px] px-4 mx-auto max-w-screen-md w-[600px]">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center ">
                Generate AI Report
              </h2>
              <p className="mb-4 text-lg text-center">
                Fill in the following Details
              </p>

              <form action="#" class="space-y-8 p-5">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Location
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Soil type
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Crop Type
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>{" "}
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Potassium
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>{" "}
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    phosphorous
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>{" "}
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Enter your Mobile Number
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700  focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#31B099] w-full"
                >
                  Continue
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page2Section2;
