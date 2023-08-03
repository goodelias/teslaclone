import React from "react";

const Models = () => {
  return (
    <div className="flex flex-col snap-center snap-always h-screen bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/58949946-f4bf-4908-b707-18b2fa6020a5/bvlatuR/std/2880x1800/Homepage-Model-S-Desktop-LHD')] bg-cover bg-center">
      <div className="flex flex-col items-center p-32">
        <h1 className="text-4xl font-bold">Model Y</h1>
        <p className="p-2 underline underline-offset-4 text-sm">
          Schedule a Demo Drive
        </p>
      </div>

      <div className="flex relative flex-col mt-auto">
        <div className="flex items-center flex-col text-sm mb-20 lg:flex-row lg:justify-center">
          <a href="https://www.tesla.com/models/design#overview">
            <button className="bg-[#393c41] rounded-md w-96 lg:w-64 mx-4 h-10 mt-2 text-white">
              Custom Order
            </button>
          </a>
          <a href="https://www.tesla.com/drive">
            <button className="bg-[#fff] rounded-md w-96 lg:w-64 mx-4 h-10 mt-2">
              View Inventory
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Models;
