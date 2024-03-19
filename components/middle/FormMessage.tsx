"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiMail } from "react-icons/ci";

interface FormData {
	firstname: string;
	lastname: string;
	email: string;
	message: string;
}

const devApiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
const prodApiUrl = process.env.NEXT_PUBLIC_API_URL_PROD;

const apiUrl = process.env.NODE_ENV === "development" ? devApiUrl : prodApiUrl;
// const URL = `${apiUrl}/api/user-message`;
const URL = "/api/user-message";

export default function FormMessage() {
	const initialFormData: FormData = {
		firstname: "",
		lastname: "",
		email: "",
		message: "",
	};

	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState<FormData>(initialFormData);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			setLoading(true);
			const response = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const res = await response.json();

			if (res.success) {
				setFormData(initialFormData);
				toast("Thanks for Sending me Hi!", {
					icon: "👏",
					style: {
						borderRadius: "10px",
						background: "#333",
						color: "#fff",
					},
				});
			} else {
				setFormData(initialFormData);
				toast.error(res.error);
			}

			setLoading(false);
		} catch (error: any) {
			setLoading(false);
			toast.error(error.message);
			setFormData(initialFormData);
			console.error("Error submitting form:", error);
		}
	};
	return (
		<form
			onSubmit={handleSubmit}
			className=" p-2 mt-5 w-full flex gap-3 justify-around"
		>
			<div className="p-2 flex flex-col gap-2">
				<Input
					isRequired
					size="lg"
					type="text"
					name="firstname"
					label="First Name"
					value={formData.firstname}
					placeholder="First Name"
					className="max-w-md m-2"
					onChange={handleChange}
				/>
				<Input
					isRequired
					type="text"
					size="lg"
					value={formData.lastname}
					name="lastname"
					label="Last Name"
					placeholder="Last Name"
					className="max-w-md m-2"
					onChange={handleChange}
				/>
				<Input
					isRequired
					type="email"
					label="Email"
					size="lg"
					value={formData.email}
					name="email"
					placeholder="me@sujansthadev.com.np"
					className="max-w-md m-2"
					onChange={handleChange}
					startContent={
						<a className="text-2xl text-default-400 pointer-events-none flex-shrink-0">
							<CiMail />
						</a>
					}
				/>
			</div>
			<div className="h-fit w-full sm:w-3/6 p-3 flex flex-col gap-3">
				<Textarea
					isRequired
					minRows={3}
					value={formData.message}
					label="Message"
					name="message"
					labelPlacement="inside"
					placeholder="Enter your message"
					className="max-w-xl"
					onChange={handleChange}
				/>
				<span className="w-full flex justify-center p-1">
					<Button type="submit" isLoading={loading} color="default">
						Submit
					</Button>
				</span>
			</div>
		</form>
	);
}
