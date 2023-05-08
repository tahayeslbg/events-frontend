import React, {
	ChangeEvent,
	FormEvent,
	useCallback,
	useMemo,
	useState,
} from "react";
import Input from "../src/components/ui/Input";
import Button from "../src/components/ui/Button";
import Title from "../src/components/ui/Title";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { register } from "../src/utils/fetchData";
import cookies from "js-cookie";
import { useRouter } from "next/router";

interface IUser {
	name: string;
	surname: string;
	emailAddress: string;
	password: string;
    role: string
}

const Register = () => {
	const router = useRouter();
	const [user, setUser] = useState<IUser>({
		name: "",
		surname: "",
		emailAddress: "",
		password: "",
		role: "user",
	});
	const { isLoading, mutate } = useMutation(register, {
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
					Kayıt Ol
				</Title>
				<div className='flex gap-x-4'>
					<Input type='text' label='Ad' name='name' onChange={handleChange} />
					<Input
						type='text'
						label='Soyad'
						name='surname'
						onChange={handleChange}
					/>
				</div>
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
					Zaten hesabın var mı?{" "}
					<Link href='/giris-yap' className='font-galanoMedium'>
						Giriş Yap
					</Link>
				</span>
				<Button
					type='submit'
					variant='filled'
					text='Kayıt Ol'
					isLoading={isLoading}
				/>
			</form>
		</div>
	);
};

export default Register;
