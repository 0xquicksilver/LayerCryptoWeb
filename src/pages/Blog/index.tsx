import React, { useEffect, useState } from "react";
import Article from "../../components/Article";
import { SkeletonArticle } from "../../components/Skeleton";
import { _posts } from "../../hook/useWordpressApi";

type BlogProps = {
    limit?: number;
    readmore?: "true" | "false";
};

const Blog = (props: BlogProps & React.HTMLProps<HTMLDivElement>) => {
    const [data, setData] = useState<any>();
    async function _getAllPosts() {
        const data = await _posts();
        if (props.limit && data.length > props.limit) {
            data.length = props.limit;
        }
        setData(data);
    }
    useEffect(() => {
        if (!data) {
            _getAllPosts();
        }
    }, [data]);
    return (
        <section className="bg-light dark:bg-dark" {...props}>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Our Blog
                    </h2>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        from airdrops to the latest events we will inform you.
                        Don't forget to join our social media.
                    </p>
                </div>

                {data ? (
                    <div className="gap-8 lg:columns-2 mb-5">
                        {data.map((v: any, i: number) => (
                            <Article key={i} blogId={v.slug} />
                        ))}
                    </div>
                ) : (
                    <div className="grid gap-8 lg:grid-cols-2 mb-5">
                        <SkeletonArticle />
                        <SkeletonArticle />
                        <SkeletonArticle />
                        <SkeletonArticle />
                    </div>
                )}
                {props.readmore && data && (
                    <div className="flex justify-center my-5">
                        <a
                            href="/blog"
                            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            More
                            <svg
                                className="ml-2 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
