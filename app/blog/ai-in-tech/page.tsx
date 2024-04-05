import ArticleMdx from "./Article.mdx";

export default function BlogFirst() {
	return (
		<div className="h-fit p-3 md:p-5 flex justify-center">
			<div className="py-12 px-1 md:px-20 w-full md:w-4/6">
				<ArticleMdx />
			</div>
		</div>
	);
}
