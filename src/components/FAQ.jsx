import React from "react";

function FAQ() {
  return (
    <div>
      <div class="max-w-[1280px] mx-auto p-8 md:px-24 flex flex-col md:flex-row gap-10">
        <div class="w-full md:w-[40%]">
          <div class="">
            <h1 class="text-4xl font-bold">
              Frequenty Asked <br />
              Question
            </h1>
            <p class="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum facilis ad aspernatur. Quidem expedita eius molestiae
              explicabo earum!
            </p>
          </div>
        </div>
        <div class="w-full md:w-[60%]">
          <div class="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
            {/* <!-- FAQ-1 --> */}
            <details class="p-6 group" open>
              <summary class="flex items-center justify-between cursor-pointer">
                <h5 class="text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h5>

                <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
            {/* <!-- FAQ-2 --> */}
            <details class="p-6 group">
              <summary class="flex items-center justify-between cursor-pointer">
                <h5 class="text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h5>

                <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
            {/* <!-- FAQ-3 --> */}
            <details class="p-6 group">
              <summary class="flex items-center justify-between cursor-pointer">
                <h5 class="text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h5>

                <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
