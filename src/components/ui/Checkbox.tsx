import React, { FC, InputHTMLAttributes } from "react";

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	labelId: string;
}

const Checkbox: FC<ICheckbox> = props => {
	const { labelId, label, ...rest } = props;
	return (
		<aside className='flex items-center gap-x-[10px] '>
			<input
				className="cursor-pointer appearance-none relative border w-5 h-5 border-[#dedede] after:checked:content-[''] after:checked:absolute after:checked:bg-no-repeat after:checked:w-3 after:checked:h-3 after:checked:bg-checkIcon after:checked:top-1/2 after:checked:left-1/2 after:checked:-translate-y-[6px] after:checked:-translate-x-[6px] checked:bg-[#FF0D87] checked:border-[#E5107C]"
				id={labelId}
				type='checkbox'
				{...rest}
			/>
			<label
				className='cursor-pointer font-galanoRegular text-base'
				htmlFor={labelId}
			>
				{label}
			</label>
		</aside>
	);
};

export default Checkbox;
