import React, { FC, ReactNode } from "react";
import styles from "@/assets/sass/components/ui/typography.module.scss";

interface ITitle {
	as: "h1" | "h2" | "h3" | "h4" | "h5";
	size: "h1" | "h2" | "h3" | "h4" | "h5";
	fontType: "regular" | "medium" | "bold" | "extra-bold";
	extraClassName?: string;
	children: ReactNode;
}

const Title: FC<ITitle> = props => {
	const { as, size, fontType, extraClassName, children } = props;
	const As = as;

	const sizes =
		size === "h1"
			? "text-[32px]"
			: size === "h2"
			? "text-[28px"
			: size === "h3"
			? "text-2xl"
			: size === "h4"
			? "text-xl"
			: size === "h5"
			? "text-l"
			: null;

	const fontTypes =
		
			fontType === "regular"
			? "font-galanoRegular"
			:fontType === "medium"
			? "font-galanoMedium"
			: fontType === "bold"
			? "font-galanoBold"
			: fontType === "extra-bold"
			? "font-galanoExtrabold"
			: null;

	return (
		<As className={`${sizes} ${fontTypes} ${extraClassName}`} >
			{children}
		</As>
	);
};

export default Title;
