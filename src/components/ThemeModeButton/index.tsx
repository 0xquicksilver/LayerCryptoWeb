import React, { useEffect } from "react";
import useStorage from "../../hook/useStorage";
import { theme } from "../../theme";

type ButtonProps = {
    mode?: "dark" | "light";
};

const ThemeModeButton = (
    props: ButtonProps & React.HTMLProps<HTMLButtonElement>
) => {
    const [colorTheme, setcolorTheme] = useStorage<string>(
        "color-theme",
        "dark"
    );
    const handleClick = () => {
        if (colorTheme === "dark") {
            setcolorTheme("light");
        } else {
            setcolorTheme("dark");
        }
    };
    useEffect(() => {
        const body = document.getElementsByTagName("body");
        if (colorTheme === "dark") {
            body[0].style.backgroundColor = "#242F9B";
            body[0].classList.add("dark");
            document.documentElement.classList.add("dark");
            document
                .getElementById("mockup")
                ?.setAttribute(
                    "src",
                    "http://layer404.biz/wp-content/uploads/2022/08/LayerCrypto__2_-removebg-preview.png"
                );
        } else {
            document.getElementsByTagName("body")[0].style.backgroundColor =
                theme.colors.winter;
            body[0].classList.remove("dark");
            document.documentElement.classList.remove("dark");
            document
                .getElementById("mockup")
                ?.setAttribute(
                    "src",
                    "http://layer404.biz/wp-content/uploads/2022/08/LayerCrypto__1_-removebg-preview.png"
                );
        }
    }, [colorTheme]);
    return (
        <button
            {...props}
            type="button"
            className="text-gray-500 dark:text-white bg-transparent focus:outline-none font-medium rounded-full text-xs  text-center inline-flex items-center mr-2 "
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
            <span className="sr-only">Theme Mode</span>
        </button>
    );
};

export default ThemeModeButton;
