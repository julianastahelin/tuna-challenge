# Front-end challenge - by Juliana Stahelin

## The project
Project built as a front-end challenge for Tuna.

Project displays a list of components containing all regions in Brazil and states in each region where the company has operations.

## How to run this project
To run this application locally, follow these steps:

1. Open a terminal and clone the repository:
```
git clone https://github.com/julianastahelin/tuna-challenge.git
```
2. Open the project in a code editor:
```
code .
```
3. Set the environment variable for the API. Create a `.env.local` file and add this variable:
```
NEXT_PUBLIC_IBGE_API_URL='https://servicodados.ibge.gov.br/api/v1/localidades'
```
4. Install the dependencies:
```
npm install
```
5. Run the project on the terminal:
```
npm run dev
```
6. Access `http://localhost:3000/` on your browser.


## Built with
- Next.js
- TypeScript
- Tailwind
