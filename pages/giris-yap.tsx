import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../src/components/ui/Input";
import Button from "../src/components/ui/Button";
import Title from "../src/components/ui/Title";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { login } from "../src/utils/fetchData";
import cookies from "js-cookie";
import { useRouter } from "next/router";

interface IUserLogin {
	emailAddress: string;
	password: string;
}

const Login = () => {
	const router = useRouter();
	const [user, setUser] = useState<IUserLogin>({
		emailAddress: "",
		password: "",
	});
	const { isLoading, mutate } = useMutation(login, {
		onSuccess: data => {
			cookies.set("authInfo", data.token, {
				expires: 1,
				sameSite: "Strict",
				secure: true,
				path: "/",
			});
			router.push("/");
		},
	});

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		mutate(user);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	return (
		<div className='flex justify-center items-center h-screen '>
			<form
				onSubmit={handleSubmit}
				className='w-[345px] flex flex-col gap-y-4 '
			>
				<Title as='h1' size='h1' fontType='bold' extraClassName='text-center'>
					Giriş Yap
				</Title>

				<Input
					type='email'
					label='E-Posta'
					name='emailAddress'
					onChange={handleChange}
				/>
				<Input
					type='password'
					label='Şifre'
					name='password'
					onChange={handleChange}
				/>
				<span className='font-galanoRegular text-sm'>
					Henüz hesabın yok mu?{" "}
					<Link href='/kayit-ol' className='font-galanoMedium'>
						Kayıt Ol
					</Link>
				</span>
				<Button
					type='submit'
					variant='filled'
					text='Giriş Yap'
					isLoading={isLoading}
				/>
			</form>
		</div>
	);
};

export default Login;
