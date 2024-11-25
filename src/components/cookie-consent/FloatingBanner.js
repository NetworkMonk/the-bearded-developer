"use client";

import React from "react";
import PropTypes from "prop-types";

export function FloatingBanner({
  message,
  header,
  acceptText,
  denyText,
  onAccept,
  onDeny,
}) {
  return (
    <div
      className={`fixed bottom-0 inset-x-0 pb-2 sm:pb-5`}
      style={{ zIndex: "2000" }}
    >
      <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className={`p-2 rounded-lg bg-gray-600 shadow-lg sm:p-3`}>
          <div className="flex items-center justify-between flex-wrap">
            <div className="sm:flex-1 flex items-center">
              <div className="flex-col flex">
                <div className={`ml-3 font-bold text-xl text-gray-300`}>
                  {" "}
                  {header}
                </div>
                <div className="ml-3 font-medium text-white">
                  <span className="md:hidden">{message}</span>
                  <span className="hidden md:inline">{message}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 sm:mt-0 mt-4 sm:w-max w-full sm:mx-0 mx-auto sm:ml-0 ml-2">
              {acceptText !== undefined && (
                <div className="flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                  <div className="rounded-md shadow-sm">
                    {onAccept !== undefined && (
                      <button
                        className={`flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-600 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150`}
                        onClick={onAccept}
                      >
                        {acceptText}
                      </button>
                    )}
                  </div>
                </div>
              )}
              {denyText !== undefined && (
                <div className="flex-shrink-0 sm:order-3 sm:ml-2">
                  <button
                    className={`flex items-center justify-center px-4 py-2 text-sm leading-5 font-medium rounded-md text-gray-200 bg-gray-600 border-gray-500 border-2 hover:text-gray-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150`}
                    onClick={onDeny}
                  >
                    {denyText}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FloatingBanner.propTypes = {
  message: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  acceptText: PropTypes.string.isRequired,
  denyText: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDeny: PropTypes.func.isRequired,
};
