import {
	Lilita_One,
	Inter,
	Lato,
	Playpen_Sans,
	Ubuntu,
	Rubik,
	Bricolage_Grotesque,
} from "next/font/google";

export const rubik = Rubik({ subsets: ["latin"] });

export const bricolage = Bricolage_Grotesque({
	subsets: ["latin"],
	weight: ["200", "300", "400", "600", "700"],
});

export const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700"],
});
export const lilitaFont = Lilita_One({
	weight: "400",
	subsets: ["latin"],
});

export const playpenSans = Playpen_Sans({ subsets: ["latin"] });

export const ubuntu = Ubuntu({
	subsets: ["latin"],
	weight: ["300", "400"],
});

export const inter = Inter({ subsets: ["latin"] });
