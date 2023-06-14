import React from "react";


interface optionsProps {
    data: {
        name: string;
        des: string;
        icon: any;
        id: string;
    };
    optionId: string;
    setOptionId: (val: string) => void;
}



const Options = ({ data, optionId, setOptionId }: optionsProps) => {



    return (
        <li className={`text-white grid border-2 border-solid border-white rounded-lg w-4/5 py-2 ${optionId === data.id && 'goldBorder goldColor'}`}>
            <div className="flex pl-4 items-center justify-between w-full">
                <div className="flex items-center gap-x-2">
                    <input onChange={() => setOptionId(data.id)} checked={optionId === data.id} type="radio" className={`accent-white w-5 h-5 ${optionId === data.id && 'accentColor'}`} />
                    <h2 className="font-bold text-lg">{data.name}</h2>
                </div>
                {data.icon}
            </div>
            <p className="pl-8 font-thin text-sm">{data.des}</p>
        </li>
    )
}

export default Options;