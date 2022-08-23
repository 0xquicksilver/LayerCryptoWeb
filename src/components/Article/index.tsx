import React, { useEffect, useState } from "react";
import getTimeDiffAndPrettyText from "../../components/getTimeDiffAndPrettyText";
import { SkeletonArticle } from "../Skeleton";
import { _postsBySlug } from "./../../hook/useWordpressApi";

type Props = {
    blogId?: string;
};

type ArticleProps = Props & React.HTMLProps<HTMLDivElement>;

const Article = (props: ArticleProps) => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(true);
    async function _getData() {
        let data = await _postsBySlug(props.blogId);
        setData(data);
        setLoading(!loading);
    }
    useEffect(() => {
        if (!data) {
            _getData();
        }
    }, [data]);

    return (
        <>
            {!loading ? (
                <article className="p-6 mb-5 bg-light rounded-lg border border-gray-200 shadow-md dark:bg-dark-100 dark:border-gray-600 relative overflow-hidden">
                    <img
                        alt=""
                        src={data.featured_media}
                        className="absolute top-0 bottom-0 left-0 right-0 bg-cover blur-0 opacity-20 dark:opacity-40"
                    />
                    <div className="relative">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <div className="flex-row">
                                {data.categories.map(
                                    (v: any, i: number) =>
                                        v.id !== 1 && (
                                            <span
                                                key={i}
                                                className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-light dark:text-blue-500 mr-2 uppercase"
                                            >
                                                {v.name}
                                            </span>
                                        )
                                )}
                            </div>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href={"/blog/" + data.slug}>
                                {data.title.rendered}
                            </a>
                        </h2>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.excerpt.rendered,
                            }}
                            className="mb-5 font-semibold  text-gray-900 dark:text-white "
                        />
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-7 h-7 rounded-full"
                                    src={data.author.avatar_urls["48"]}
                                    alt="Jese Leos avatar"
                                />
                                <div className="flex flex-col">
                                    <span className="font-medium dark:text-white capitalize">
                                        {data.author.name}
                                    </span>
                                    <span className="text-xs dark:text-white">
                                        {
                                            getTimeDiffAndPrettyText(data.date)
                                                .friendlyNiceText
                                        }
                                    </span>
                                </div>
                            </div>
                            <a
                                href={"/blog/" + data.slug}
                                className="inline-flex items-center font-medium text-gray-900 dark:text-white hover:underline"
                            >
                                Read more
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
                    </div>
                </article>
            ) : (
                <SkeletonArticle />
            )}
        </>
    );
};

export default Article;
