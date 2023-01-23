import {NextPage} from 'next'
import {Button} from 'antd'
import Header from "@/components/Header";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div className="flex relative items-center space-y-4 flex-col justify-center min-h-screen bg-white-400">
            <Header/>
            <h3 className="text-4xl font-medium typewriter">Build your own visual CV</h3>
            <div className="w-1/2 md:w-1/2 !mb-[20px]">
                <img
                    src="/images/BannerImage.svg"
                    alt=""
                    className={'h-[400px] m-auto'}
                />
            </div>
            <Button
                size={'large'}
                shape={'round'}
                type={'primary'}
                className={'bg-primary'}
            >
                Start Building
            </Button>
        </div>
    )
}

export default Home
