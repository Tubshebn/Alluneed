const Index = ({ handler, selectedOption }) => {
    return (
        <select
            id='dropdown'
            className='py-[10px] px-[14px] w-[240px] border-[solid] border-[1px] border-[#EAECF0] bg-[#FFF] '
            value={selectedOption}
            onChange={handler}
        >
            <option value=''>Сонгох...</option>
            <option value='option1' className='text-[16px] font-[500] leading-[20px] text-[#101828]'>
                Option 1
            </option>
            <option value='option1' className='text-[16px] font-[500] leading-[20px] text-[#101828]'>
                Option 2
            </option>
            <option value='option1' className='text-[16px] font-[500] leading-[20px] text-[#101828]'>
                Option 3
            </option>
        </select>
    );
};
export default Index;
