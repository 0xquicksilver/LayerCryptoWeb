import React from "react";

const Details = () => {
    return (
        <section className="bg-light dark:bg-dark py-3 md:py-10 px-4 min-h-fit">
            <div className="mx-auto max-w-screen-lg">
                <h2 className="mb-5 text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white"></h2>
                <div className=" border border-indigo-600 dark:border-indigo-900 rounded-lg  overflow-hidden">
                    {/*  */}
                    <div className="animate-pulse w-full h-56 lg:h-96 rounded-rt-sm rounded-lt-sm bg-blue-100" />
                    <div className="p-3">
                        <div className="flex justify-between items-center mb-3 text-gray-500">
                            <div className="flex items-center space-x-4">
                                <span className="w-7 h-7 rounded-full animate-pulse bg-blue-100"></span>
                                <span className="animate-pulse w-32 rounded-md h-5 bg-blue-100"></span>
                            </div>
                            <span className="animate-pulse w-32 rounded-md h-5 bg-blue-100"></span>
                        </div>
                        <div className="border-b-2 border-indigo-900 my-2" />
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <div className="flex items-center justify-center space-x-4">
                                <span className="animate-pulse w-24 rounded-md h-5 mb-4 bg-blue-100"></span>
                                <span className="animate-pulse w-24 rounded-md h-5 mb-4 bg-blue-100"></span>
                                <span className="animate-pulse w-24 rounded-md h-5 mb-4 bg-blue-100"></span>
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 h-auto">
                            <span className="animate-pulse w-3/4 rounded-md mb-4 h-5 bg-blue-100"></span>
                            <span className="animate-pulse w-full rounded-md mb-4 h-4 bg-blue-100"></span>
                            <span className="animate-pulse w-full rounded-md mb-4 h-4 bg-blue-100"></span>

                            <span className="animate-pulse w-full rounded-md mb-4 h-4 bg-blue-100"></span>
                            <span className="animate-pulse w-full rounded-md mb-4 h-4 bg-blue-100"></span>

                            <span className="animate-pulse w-full rounded-md mb-4 h-4 bg-blue-100"></span>
                            <span className="animate-pulse w-2/5 rounded-md mb-4 h-4 bg-blue-100"></span>
                            <br />
                            <span className="animate-pulse w-full rounded-md mb-4 h-4 bg-blue-100"></span>
                        </div>
                        <div className="mx-auto max-w-xs">
                            <div className="animate-pulse w-full rounded-md mb-4 h-10yyyy bg-blue-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Details;
