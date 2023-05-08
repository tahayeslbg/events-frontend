import React, { ChangeEvent, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import CalendarIcon from "../../assets/calendar-icon.png";
import FilterIconBlack from "../../assets/filter-icon-black.png";
import FilterIconPink from "../../assets/filter-icon-pink.png";
import Checkbox from "../components/ui/Checkbox";

interface IFilterProps {
	place: string;
	setPlace: (value: string) => void;
	date: string;
	setDate: (value: string) => void;
}

const Filter = ({ place, setPlace, date, setDate }: IFilterProps) => {
	const [openFilter, setOpenFilter] = useState(false);

	return (
		<div className='w-full py-3 bg-[#F5F5F5] tablet:px-5 mobile:px-4'>
			<div className='container flex justify-between items-center'>
				<div className='relative'>
					<button
						className='flex items-center gap-x-[10px] font-galanoRegular'
						onClick={() => setOpenFilter(prev => !prev)}
					>
						<Image
							src={openFilter ? FilterIconPink : FilterIconBlack}
							alt='filter-icon'
						/>
						<span className={openFilter ? "text-[#FF0D87]" : "text-black"}>
							Filtreler
						</span>
					</button>
					{openFilter && (
						<div className='z-50 absolute top-10 left-0  bg-white shadow-lg p-8  w-[300px] '>
							<div className='flex flex-col gap-y-[18px]  mb-8'>
								<p className='font-galanoBold'>Etkinlik Mekanı</p>
								<Checkbox
									label='Maximum Uniq Hall'
									labelId='maximum-uniq-hall'
									checked={place === "Maximum Uniq Hall"}
									onChange={() => {
										if (place === "Maximum Uniq Hall") {
											return setPlace("");
										}
										setPlace("Maximum Uniq Hall");
									}}
								/>
								<Checkbox
									label='Maximum Uniq Box'
									labelId='maximum-uniq-box'
									checked={place === "Maximum Uniq Box"}
									onChange={() => {
										if (place === "Maximum Uniq Box") {
											return setPlace("");
										}
										setPlace("Maximum Uniq Box");
									}}
								/>
								<Checkbox
									label='Maximum Uniq Launge'
									labelId='maximum-uniq-launge'
									checked={place === "Maximum Uniq Launge"}
									onChange={() => {
										if (place === "Maximum Uniq Launge") {
											return setPlace("");
										}
										setPlace("Maximum Uniq Launge");
									}}
								/>
								<Checkbox
									label='Maximum Uniq Açıkhava'
									labelId='maximum-uniq-acikhava'
									checked={place === "Maximum Uniq Açıkhava"}
									onChange={() => {
										if (place === "Maximum Uniq Açıkhava") {
											return setPlace("");
										}
										setPlace("Maximum Uniq Açıkhava");
									}}
								/>
							</div>
							<div className='flex flex-col gap-y-[18px] '>
								<p className='font-galanoBold'>Etkinlik Tarihi</p>
								<Checkbox
									label='Güncel Etkinlikler'
									labelId='güncel-etkinlikler'
									checked={date === "guncel"}
									onChange={() => {
										if (date === "guncel") {
											return setDate("");
										}
										setDate("guncel");
									}}
								/>
								<Checkbox
									label='Geçmiş Etkinlikler'
									labelId='gecmis-etkinlikler'
									checked={date === "eski"}
									onChange={() => {
										if (date === "eski") {
											return setDate("");
										}
										setDate("eski");
									}}
								/>
							</div>
						</div>
					)}
				</div>
				<span
					className='cursor-pointer flex items-center gap-x-[10px] font-galanoRegular'
				>
					<Image src={CalendarIcon} alt='calendar-icon ' />
					<span>Takvimde Gör</span>
				</span>
			</div>
		</div>
	);
};

export default Filter;
