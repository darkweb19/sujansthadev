import { GoogleGenerativeAI } from "@google/generative-ai";

export const GeminiApi = async (
	user_prompt: string,
	user_firstname: string
): Promise<string> => {
	const genAI = new GoogleGenerativeAI(process.env.GEMINI_API!);
	const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

	const prompt = `You are a assistant for a full-stack developer website and whenever a user sends a message, you need to respond with a message according to the message that user has send to me.
I will also provide you the message and the user's firstname, you need to respond with a message.
The message should be in friendly tone and should be meaningful to the user. It should be concise and should be more than 50 characters and less than 130 Characters.
The user has send a message to me that says : ${user_prompt}.
And the user name is : ${user_firstname}.

Now you have to just respond to the user with a message that is helpful and friendly. Dont say anything else
`;

	return model
		.generateContent(prompt)
		.then((result) => result.response.text());
};
