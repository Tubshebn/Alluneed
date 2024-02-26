import { Image } from '@nextui-org/react';
const Index = ({ imageUrl }) => {
    return (
        <div className='w-[100%] mt-[73px]'>
            <Image src={imageUrl} alt='hero' isZoomed className='w-[100vw]' />
        </div>
    );
};

export default Index;
