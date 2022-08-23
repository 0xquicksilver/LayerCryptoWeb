import React from "react";

const Section3 = () => {
    return (
        <section className="bg-light dark:bg-dark">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                        Airdrop Cryptocurrency
                    </h2>
                    <p className="mb-4">
                        Airdrop adalah pemberian aset kripto pada sebagian orang
                        atau komunitas yang diberikan secara cuma-cuma. Dalam
                        prosesnya, aset kripto yang dibagikan akan dikirimkan
                        secara langsung ke wallet penerima. Airdrop dapat
                        terjadi melalui prosedur pembelian ICO atau penawaran
                        oleh developer
                    </p>
                </div>
                <div className="mt-8 mx-auto hidden lg:block">
                    <img
                        className="w-72 rounded-lg"
                        src="http://layer404.biz/wp-content/uploads/2022/08/pngwing.com-2.png"
                        alt="office content 1"
                    />
                </div>
            </div>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                        Blockchain
                    </h2>
                    <p className="mb-4">
                        Blockchain adalah teknologi yang digunakan sebagai
                        sistem penyimpanan atau bank data secara digital yang
                        terhubung dengan kriptografi. Penggunaannya tidak
                        terlepas dari Bitcoin dan Cryptocurrency lainnya.
                    </p>
                </div>
                <div className="mt-8 mx-auto hidden lg:block">
                    <img
                        className="w-72 rounded-lg"
                        src="http://layer404.biz/wp-content/uploads/2022/08/pngwing.com_.png"
                        alt="office content 1"
                    />
                </div>
            </div>
        </section>
    );
};

export default Section3;
