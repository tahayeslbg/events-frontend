import Image from "next/image";
import React, { FC, InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	placeholder?: string;
	error?: boolean;
	errorText?: string;
	helperText?: string;
	icon?: any;
}

const Input: FC<IInput> = props => {
	const { label, placeholder, error, errorText, helperText, icon, ...rest } =
		props;

	return (
		<aside className='flex flex-col gap-y-2'>
			{label && (
				<label
					className={`text-sm font-galanoRegular ${
						error ? "text-red-600" : "text-[#888]"
					}`}
				>
					{label}
				</label>
			)}
			{icon ? (
				<div className='relative'>
					<input
						className={`py-3 ${
							icon ? "pl-11 pr-[14px]" : "px-[14px]"
						} pl-11  w-full border font-galanoRegular text-sm ${
							error
								? "border-red-600 focus:outline-red-600"
								: "border-[#9C9C9C]"
						}`}
						placeholder={placeholder}
						{...rest}
					/>

					<Image
						src={icon}
						alt='icon'
						className='absolute top-1/2 -translate-y-1/2 left-[14px] cursor-text'
					/>
				</div>
			) : (
				<input
					className={`py-3 ${
						icon ? "pl-11 pr-[14px]" : "px-[14px]"
					} w-full border font-galanoRegular text-sm ${
						error ? "border-red-600 focus:outline-red-600" : "border-[#9C9C9C]"
					}`}
					placeholder={placeholder}
					{...rest}
				/>
			)}

			{error && errorText && helperText ? (
				<span className='font-galanoRegular text-sm text-red-600 '>
					{errorText}
				</span>
			) : helperText && !error ? (
				<span className='text-sm font-galanoRegular text-[#9C9C9C]'>
					{helperText}
				</span>
			) : error && errorText ? (
				<span className='font-galanoRegular text-sm text-red-600'>
					{errorText}
				</span>
			) : (
				error && !errorText && null
			)}
		</aside>
	);
};

export default Input;
