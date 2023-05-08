import React, { ComponentProps, FC } from "react";
import Image from "next/image";

export interface IButton extends ComponentProps<"button"> {
	variant: "filled" | "plain";
	icon?: any;
	text?: string;
	extraClassName?: string;
	isLoading?: boolean;
}

const Button: FC<IButton> = props => {
	const { variant, text, icon, isLoading, extraClassName, ...rest } = props;

	const variantClasses =
		variant === "filled"
			? "filled-button"
			: variant === "plain"
			? "plain-button"
			: "";

	return (
		<button className={`${variantClasses} `} {...rest}>
			{isLoading ? (
				"Loading..."
			) : icon ? (
				<>
					<Image src={icon} alt='button' />
					<span>{text}</span>
				</>
			) : (
				<span>{text}</span>
			)}
		</button>
	);
};

export default Button;
