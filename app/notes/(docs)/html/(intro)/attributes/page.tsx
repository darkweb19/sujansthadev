import MainContent from "@/components/Notes/MainContent";
import AttributesMdx from "./attributes.mdx";

export default function Attributes() {
	return (
		<div>
			<MainContent
				heading={"Attributes"}
				contentHeading={""}
				mainDefinition={
					"HTML attributes provide additional information about HTML elements."
				}
			>
				<AttributesMdx />
			</MainContent>
		</div>
	);
}
