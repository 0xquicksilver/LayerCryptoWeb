import React, { useEffect, useState } from "react";
import Article from "../../components/Article";
import { SkeletonArticle } from "../../components/Skeleton";
// import useFetch from "../../hook/useFetch";
// import useWordpressApi from "../../hook/useWordpressApi";

const Section5 = () => {
    // const data = useWordpressApi({ endpoint: "POSTS" });
    // console.log(data);
    return (
        <section className="bg-light dark:bg-dark">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Our Blog
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        We use an agile approach to test assumptions and connect
                        with the needs of your audience early and often.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* {data &&
                        data.map((v: any, i: number) => {
                            // const posts = wp._getPostsById(v.id);
                            return <Article dataPosts={v} />;
                            return <></>;
                        })}
                    {!data && <SkeletonArticle />}
                    {!data && <SkeletonArticle />} */}
                    <SkeletonArticle />
                    <SkeletonArticle />
                </div>
            </div>
        </section>
    );
};

export default Section5;
