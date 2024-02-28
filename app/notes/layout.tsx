import { inter } from "../fonts";
import { Providers } from "../providers";

export default function NotesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className={inter.className}>
			<Providers>{children} </Providers>
		</section>
	);
}
