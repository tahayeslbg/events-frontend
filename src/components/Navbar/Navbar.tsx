import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../assets/logo.png";
import Link from "next/link";
import cookies from "js-cookie";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();
	const [token, setToken] = useState<string | null>();

	const [openModal, setOpenModal] = useState<boolean>(false);

	useEffect(() => {
		setToken(cookies.get("authInfo"));
	}, [token]);

	const logout = () => {
		cookies.remove("authInfo");
		setToken(null);
		router.reload();
	};
	return (
		<nav className='container flex justify-between items-center mt-8 mb-10'>
			<Link href={"/"} className=''>
				<Image src={Logo} alt='Logo' />
			</Link>

			{token ? (
				<div className=' relative'>
					<p
						className='font-galanoRegular text-sm py-2 px-4 rounded-sm bg-[#FF0D87] text-white cursor-pointer '
						onClick={() => setOpenModal(prev => !prev)}
					>
						User
					</p>
					{openModal && (
						<div className='z-50 absolute top-10 right-0 bg-white shadow-lg p-5 w-60'>
							<ul className='flex flex-col gap-y-5'>
								<li>
									<span className="cursor-pointer">Biletlerim</span>
								</li>
								<li>
									<button
										className='w-full font-galanoRegular text-sm py-2 px-4 bg-[#FF0D87] text-white'
										onClick={() => logout()}
									>
										Çıkış Yap
									</button>
								</li>
							</ul>
						</div>
					)}
				</div>
			) : (
				<ul className='flex items-center gap-x-8'>
					<li>
						<Link href='/kayit-ol' className='filled-button'>
							Kayıt Ol
						</Link>
					</li>
					<li>
						<Link href='/giris-yap' className='font-galanoRegular'>
							Giriş Yap
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
