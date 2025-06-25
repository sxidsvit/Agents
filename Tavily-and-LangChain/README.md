# Generative AI Trends Agent

This project is a Node.js application that uses LangChain and OpenRouter to create an AI agent capable of researching modern trends in generative AI. The agent leverages the Tavily Search API to fetch relevant information and processes queries using a language model. Last updated: 11:00 PM EEST, Wednesday, June 25, 2025.

## Project Overview

The application uses the `@langchain/openai` library to interact with OpenRouter's API, which provides access to various language models. It integrates the `TavilySearchResults` tool from `@langchain/community` to perform web searches. The agent is configured as a "zero-shot-react-description" type, enabling it to dynamically respond to queries without prior training.

The primary query in the code is: *"Какие современные тренды в области генеративного ИИ в июне 2025 году?"* (What are the modern trends in generative AI in June 2025?).

## Project Structure

The project may include nested directories (e.g., `Agents/Tavily`). A typical structure might look like this:
```
project_root/
├── Agents/
│   └── Tavily/
│       ├── index.js
│       ├── .env
│       ├── package.json
│       ├── package-lock.json
│       └── node_modules/ (ignored by .gitignore)
├── .gitignore
```

**Note**: The exact structure may vary based on recent changes. Adjust paths in the installation and usage steps accordingly.

## Prerequisites

- **Node.js**: Version 20.10.0 or higher (LTS recommended).
- **npm**: Included with Node.js.
- **OpenRouter Account**: Obtain an API key from [OpenRouter](https://openrouter.ai).
- **Tavily Account**: Obtain an API key from [Tavily](https://tavily.com).

## Installation

1. **Clone the Repository** (or create a project directory):
   ```bash
   git clone <repository-url>
   cd <project-root>  # e.g., cd Agents/Tavily if nested
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the project root or the directory containing `index.js` (e.g., `Agents/Tavily/.env`).
   - Add your API keys for OpenRouter and Tavily. Example:
     ```env
     OPENROUTER_API_KEY=sk-or-v1-your-openrouter-api-key
     TAVILY_API_KEY=tvly-your-tavily-api-key
     ```

   **Security Note**: The `OPENROUTER_API_KEY` in the original `.env` was exposed. Revoke it immediately via the OpenRouter dashboard and generate a new key.

## Usage

1. **Run the Application**:
   - Navigate to the directory containing `index.js` (e.g., `cd Agents/Tavily`).
   - Execute:
     ```bash
     node index.js
     ```

2. **Expected Output**:
   - The script logs the OpenRouter API key (for debugging).
   - It initializes the agent and executes the query about generative AI trends.
   - The response from the agent is printed to the console.

   Example output:
   ```
   OpenRouter API Key: sk-or-v1-...
   🔍 The agent is running. Executing request...

   ✅ Ответ:
   [Agent's response about generative AI trends]
   ```

## Dependencies

- `@langchain/openai`: Interface for OpenRouter's OpenAI-compatible API.
- `@langchain/community`: Provides the Tavily search tool.
- `@langchain/core` and `langchain`: Core LangChain libraries for agent functionality.
- `dotenv`: Loads environment variables from `.env`.
- `openai`: OpenAI client library (used by LangChain).

## Troubleshooting

- **AuthenticationError: 401 No auth credentials found**:
  - Ensure `OPENROUTER_API_KEY` is valid and correctly set in `.env`.
  - Verify your OpenRouter account has access to the specified model.
- **TypeError: Cannot read properties of undefined (reading 'text')**:
  - The model may not be returning a valid response. Try a different model (e.g., `openai/gpt-3.5-turbo`).
  - Check OpenRouter's model list: [OpenRouter Models](https://openrouter.ai/docs/models).
  - Enable verbose logging (`verbose: true` in `index.js`) to inspect the API response.
- **Tavily Search Issues**:
  - Ensure `TAVILY_API_KEY` is valid.
  - Check Tavily's API status or documentation: [Tavily Docs](https://docs.tavily.com).

## Security Notes

- **API Key Security**: Never commit `.env` files to version control. Add `.env` to `.gitignore` (using `**/.env` for all directories).
- **Revoke Exposed Keys**: The original `OPENROUTER_API_KEY` was compromised. Revoke it via OpenRouter and update `.env` with a new key.
- **Environment Validation**: Log API keys during development (as in `index.js`) only temporarily. Remove such logs in production.

## Contributing

Contributions are welcome! Please:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with clear descriptions of changes.

## License

This project is licensed under the ISC License. See the `package.json` for details.

## Acknowledgments

- [LangChain](https://js.langchain.com) for the agent framework.
- [OpenRouter](https://openrouter.ai) for providing access to language models.
- [Tavily](https://tavily.com) for search capabilities.

## Contact:

[<img alt="webDev | LinkedIn" src="https://img.shields.io/badge/linkedin-0077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />][linkedin]

[linkedin]: https://www.linkedin.com/in/sergiy-antonyuk/