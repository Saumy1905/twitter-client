import React from "react";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard: React.FC = () => {
    return (
        <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all gap-3 cursor-pointer">
            <div className="grid grid-cols-12">
                <div className="col-span-1">
                    <Image src="https://avatars.githubusercontent.com/u/161037206?v=4" alt="user-image" height={50} width={50}></Image>
                </div>
                <div className="col-span-11">
                    <h5>Saumy</h5>
                    <p>
                        This October-November, I'll be working as a Contributor in the OpenSource program by GirlScript Foundation. Being part of this initiative acts as a great opportunity for me to work on open source projects with the open source community.
                    </p>
                    <div className="flex justify-between mt-3 text-xl items-center w-[90%]">
                        <div>
                            <FiMessageCircle />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <FiHeart />
                        </div>
                        <div>
                            <MdOutlineFileUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedCard