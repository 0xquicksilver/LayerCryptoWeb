import React from "react";

type HtmlProps = React.HTMLProps<HTMLDivElement>;
export default function Article(props: HtmlProps) {
    return (
        <article
            {...props}
            className="p-6 bg-light rounded-lg border border-gray-200 shadow-md dark:bg-dark-100 dark:border-gray-600"
        >
            <div className="flex justify-between items-center mb-5 text-gray-500">
                <div className="flex items-center justify-center space-x-4">
                    <span className="animate-pulse w-24 rounded-md h-5 mb-4 bg-blue-100"></span>
                    <span className="animate-pulse w-24 rounded-md h-5 mb-4 bg-blue-100"></span>
                    <span className="animate-pulse w-24 rounded-md h-5 mb-4 bg-blue-100"></span>
                </div>
                <span className="animate-pulse w-1/4 rounded-md mb-4 h-5 bg-blue-100"></span>
            </div>
            <div className="flex flex-col mb-2 h-auto">
                <span className="animate-pulse w-3/4 rounded-md mb-4 h-5 bg-blue-100"></span>
                <span className="animate-pulse w-full rounded-md mb-4 h-4 bg-blue-100"></span>
                <span className="animate-pulse w-full rounded-md mb-4 h-4 bg-blue-100"></span>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex items-center justify-center space-x-4">
                    <span className="w-7 h-7 rounded-full animate-pulse bg-blue-100"></span>
                    <span className="animate-pulse w-32 rounded-md h-5 bg-blue-100"></span>
                </div>
                <span className="animate-pulse w-32 rounded-md h-5 bg-blue-100"></span>
            </div>
        </article>
    );
}
