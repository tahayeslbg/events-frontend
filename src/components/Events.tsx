import React from "react";
import { deleteTicket, getEvents, postTicket } from "../utils/fetchData";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Title from "./ui/Title";
import Button from "./ui/Button";
import AddIcon from "../../assets/add-icon.png";
import moment from "moment";
import "moment/locale/tr";

interface IEvents {
	title: string;
	description: string;
	image: string;
	place: string;
	date: string;
	category: any;
	_id: string;
}

const Events = ({ data, myTickets, setMyTickets }: any) => {
	const { mutate: addMutationTicket } = useMutation(postTicket);
	const { mutate: deleteMutationTicket } = useMutation(deleteTicket);

	const addTicket = (eventId: string) => {
		addMutationTicket(eventId, {
			onSuccess: () => {
				setMyTickets([...myTickets, eventId]);
			},
		});
	};

	const removeTicket = (eventId: string) => {
		deleteMutationTicket(eventId, {
			onSuccess: () => {
				const removeId = myTickets.filter((ticket: any) => ticket !== eventId);
				setMyTickets(removeId);
			},
		});
	};

	return (
		<section className='container mt-[60px] flex flex-col items-center gap-y-4 px-[105px] tablet:px-5 mobile:px-0 mobile:mt-4'>
			{data &&
				data.map((event: IEvents) => (
					<div
						className='w-full bg-white border border-[#DEDEDE] flex items-center gap-x-4 py-4 relative before:absolute before:content-[""] before:top-0 before:left-0 before:w-1/4 before:h-full before:bg-black mobile:before:w-full mobile:before:h-1/4 mobile:flex-col'
						key={event._id}
					>
						<span className='z-10 w-8 mx-[38px] text-center text-[#FF0D87] font-galanoRegular mobile:w-full mobile:mx-0 mobile:mb-[10px] '>
							{moment(new Date(Number(event.date) * 1000)).format("LLL")}
						</span>
						<div className='flex-shrink-0 w-[302px] h-[172px] relative'>
							<Image
								src={event.image}
								alt={event.title}
								fill
								style={{ objectFit: "cover" }}
								priority
								sizes='auto'
							/>
							<span
								className={` z-20 absolute top-4 -left-4 font-galanoBold text-sm text-white px-5 mobile:-top-8 mobile:-left-10 mobile:px-2 ${
									event.category.name === "Tiyatro"
										? "bg-[#B77CB8]"
										: event.category.name === "Konser"
										? "bg-green-700"
										: event.category.name === "Stand Up"
										? "bg-[#F19653]"
										: event.category.name === "Sinema"
										? "bg-[#F07266]"
										: event.category.name === "Çocuk"
										? "bg-blue-700"
										: ""
								}`}
							>
								{event.category.name.toUpperCase()}
							</span>
						</div>
						<div className='flex flex-col gap-x-[10px] mobile:px-8 mobile:gap-y-[10px] mobile:my-5'>
							<Title as='h2' size='h4' fontType='bold'>
								{event.title}{" "}
							</Title>
							<span className='font-galanoRegular text-sm text-[#9C9C9C] mobile:hidden'>
								{event.place}
							</span>
							<p className='z-50 font-galanoRegular'>
								{event.description.substring(0, 60) + "..."}{" "}
								<span className='underline font-galanoBold'>Detaylı Bilgi</span>
							</p>
						</div>
						<div className='flex flex-col gap-y-[10px] flex-shrink-0 mr-4 mobile:flex-row mobile:gap-x-4'>
							{myTickets?.includes(event._id) ? (
								<Button
									variant='filled'
									text='Bilet Alındı'
									onClick={() => removeTicket(event._id)}
								/>
							) : (
								<Button
									variant='filled'
									text='Bilet Al'
									onClick={() => addTicket(event._id)}
								/>
							)}
							<Button icon={AddIcon} variant='plain' text='Takvime Ekle' />
						</div>
					</div>
				))}
		</section>
	);
};

export default Events;
