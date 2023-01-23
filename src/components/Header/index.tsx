import React from 'react'
import {IoPlayCircle} from "react-icons/io5";
import {GoMarkGithub} from "react-icons/go";
import AppConfig from "@/config/app.config";

const Header: React.FC = () => {

    return (
        <header className={'fixed top-0 left-0 w-full'}>
            <div className="flex px-8 py-6 bg-none">
                <div className="flex items-center space-x-2 text-xl h-full text-primary font-bold">
                    <IoPlayCircle className={'text-4xl'}/>
                    <span>Visual CV</span>
                </div>

                <a href={AppConfig.GITHUB_URL} className="flex items-center space-x-2 text-md h-full text-primary ml-auto" target={"_blank"} rel={"noreferrer"}>
                    <GoMarkGithub className={'text-2xl'}/>
                    <span>Github</span>
                </a>
            </div>
        </header>
    )
}

export default Header
