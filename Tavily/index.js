import "dotenv/config.js";
import { ChatOpenAI } from "@langchain/openai";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { initializeAgentExecutorWithOptions } from "langchain/agents";

const model = new ChatOpenAI({
  temperature: 0,
  openAIApiKey: process.env.OPENROUTER_API_KEY,
  modelName: "mistralai/mistral-small-3.2-24b-instruct:free",
  configuration: {
    baseURL: "https://openrouter.ai/api/v1",
    verbose: true,
  },
});


const tools = [
  new TavilySearchResults({
    apiKey: process.env.TAVILY_API_KEY,
  }),
];

async function runAgent() {
  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
  });

  console.log("🔍 The agent is running. Executing request...\n");

  const result = await executor.invoke({
    input: "What’s new in the use of the Cline extension for VS Code over the last three months?",
  });

  console.log("✅ Reply:\n", result.output);
}

runAgent();