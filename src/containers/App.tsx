import { Searcher } from '@/components/Searcher';
import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { User } from '@/constants/app';
import { UserCardsContainer } from './UserCardsContainer';

type SearchText = string;

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFFFFF',
		},
	},
});

function App(): JSX.Element {
	const [githubUser, setGithubUser] = useState<User | null>(null);
	const [inputSearch, setInputSearch] = useState<SearchText>('octocat');

	useEffect(() => {
		async function githubUserQuery(user: string): Promise<void> {
			const response = await fetch(`https://api.github.com/users/${user}`, {
				method: 'get',
			});
			if (response.status === 404) {
				setInputSearch('octocat');
				return;
			} else {
				const data: User = await response.json();
				setGithubUser(data);
			}
		}
		githubUserQuery(inputSearch);
	}, [inputSearch]);

	console.log('datos ex', githubUser);

	return (
		<ThemeProvider theme={theme}>
			<Container
				sx={{
					width: '80%',
					height: '90vh',
					borderRadius: '8px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					background: '#1c1e22',
				}}
			>
				<Searcher setInputSearch={setInputSearch} />
				<UserCardsContainer githubUser={githubUser} />
			</Container>
		</ThemeProvider>
	);
}

export { App };
