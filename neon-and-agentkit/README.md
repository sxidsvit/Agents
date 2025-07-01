# Neon and AgentKit

A project integrating Neon database with AgentKit for building AI agent networks.

## Installation
1. Clone the repo: `git clone https://github.com/sxidsvit/Agents.git`
2. Navigate to `neon-and-agentkit`: `cd Agents/neon-and-agentkit`
3. Install dependencies: `npm install`

## Usage
1. Set up environment variables in `.env` (see `.env.example`):
   - Neon API key
   - Anthropic API key (`ANTHROPIC_API_KEY`)
   - Smithery API key (`SMITHERY_API_KEY`)
   - Smithery MCP URL (`SMITHERY_MCP_URL`)
   - Port (`PORT`), default is `3010`
2. Open two terminals:
   - In the first terminal, run the app: `npm start`
   - In the second terminal, start the Inngest local server: `npx inngest-cli@latest dev`

## Features
- Integrates Neon database with AgentKit.
- Supports TypeScript-based AI agent workflows.
- Example tasks: database creation, table management, migrations.

## Requirements
- Node.js
- Neon API key
- Anthropic API key
- Smithery API key
- TypeScript
- Inngest CLI

## Acknowledgments

- [Neon](https://neon.com/docs/introduction) - serverless Postgres platform 
- [AgentKit](https://agentkit.inngest.com/overview) - TypeScript library to create and orchestrate AI Agents
- [Smithery](https://smithery.ai/server/neon) - platform to help developers find and ship AI-native services
- [Anthropic](https://www.anthropic.com/) - most advanced AI models on the market

## Contact:

[<img alt="webDev | LinkedIn" src="https://img.shields.io/badge/linkedin-0077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />][linkedin]

[linkedin]: https://www.linkedin.com/in/sergiy-antonyuk/