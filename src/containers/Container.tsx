import React, { useState } from "react";
import Title from "../components/ui/Title";
import CategoryNavbar from "../components/Navbar/CategoryNavbar";
import Input from "../components/ui/Input";
import SearchIcon from "../../assets/search-icon.png";
import Filter from "../components/Filter";
import Events from "../components/Events";

interface ContainerProps {
	place: string;
	setPlace: (place: string) => void;
	search: string;
	setSearch: (search: string) => void;
	data: any;
	date: string;
	setDate: (date: string) => void;
	categoryId?: string;
	categoryName?: string;
	myTickets: any;
	setMyTickets: (tickets: string[]) => void;
}

const Container = ({
	place,
	setPlace,
	search,
	setSearch,
	data,
	date,
	setDate,
	categoryId,
	categoryName,
	myTickets,
	setMyTickets,
}: ContainerProps) => {
	return (
		<>
			<div className='container '>
				<Title
					as='h1'
					size='h1'
					fontType='bold'
					extraClassName='text-black text-center my-4'
				>
					ETKİNLİKLER
				</Title>
				<div className='grid grid-cols-categoryGrid mobile:grid-cols-1 auto-cols-min'>
					<div />
					<CategoryNavbar categoryName={categoryName} />
					<div className='tablet:hidden '>
						<Input
							icon={SearchIcon}
							placeholder='Etkinlik ara'
							onChange={e => {
								setSearch(e.target.value);
							}}
							value={search}
						/>
					</div>
				</div>
			</div>
			<Filter place={place} setPlace={setPlace} date={date} setDate={setDate} />
			<Events
				data={data}
				categoryId={categoryId}
				myTickets={myTickets}
				setMyTickets={setMyTickets}
			/>
		</>
	);
};

export default Container;
