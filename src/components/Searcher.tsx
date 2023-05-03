import { Stack, TextField, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import type { ChangeEventHandler } from 'react';

//Tipos
type InputText = string;
type Props = {
	searchError: boolean;
	setInputSearch: (arg: string) => void;
	setSearchError: (arg: boolean) => void;
};

//Estilos personalizados del componente textfield
const SercherTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: 'rgba(255, 255, 255, 0.7)',
	},
	'& label': {
		color: 'rgba(255, 255, 255, 0.7)',
	},
	'& .MuiFilledInput-root': {
		'& fieldset': {
			borderColor: 'rgba(255, 255, 255, 0.7)',
		},
		'&:hover': {
			backgroundColor: '#24292F',
		},
	},
});

//Componente de React
function Searcher(props: Props): JSX.Element {
	const { searchError, setInputSearch, setSearchError } = props;
	const [textValue, setTextValue] = useState<InputText>('');

	//Manejador de cambios en el input
	const onSearchChange: ChangeEventHandler<
		HTMLInputElement | HTMLTextAreaElement
	> = (event): void => {
		setTextValue(event.target.value);
		//Cambia estado de error de la búsqueda
		if (searchError) {
			setSearchError(false);
		}
	};
	//Manejador de consulta
	const handleSendSearch = (): void => {
		//Enviar busqueda
		setInputSearch(textValue);
		//Animación de botón
		const btn: HTMLElement | null = document.querySelector('#search-icon');
		btn?.classList.add('search-icon--animation');
		setTimeout(() => {
			btn?.classList.remove('search-icon--animation');
		}, 2000);
	};

	return (
		<Stack
			direction='row'
			alignItems='center'
			justifyContent='center'
			sx={{
				width: '90%',
				marginTop: '24px',
			}}
		>
			{searchError ? (
				<SercherTextField
					error
					id='Github User'
					type='text'
					label='Github User'
					variant='filled'
					placeholder='Search user'
					size='small'
					color='primary'
					helperText='Not results'
					InputProps={{
						endAdornment: (
							<IconButton
								id='search-icon'
								size='small'
								onClick={handleSendSearch}
							>
								<SearchIcon
									sx={{
										fontSize: '35px',
										color: 'red',
									}}
								/>
							</IconButton>
						),
						style: {
							color: 'red',
						},
					}}
					sx={{
						width: '400px',
						borderRadius: '8px',
					}}
					onChange={onSearchChange}
				/>
			) : (
				<SercherTextField
					id='Github User'
					type='text'
					label='Github User'
					variant='filled'
					placeholder='Search user'
					size='small'
					color='primary'
					InputProps={{
						endAdornment: (
							<IconButton
								id='search-icon'
								size='small'
								onClick={handleSendSearch}
							>
								<SearchIcon
									sx={{
										fontSize: '35px',
										color: 'rgba(255, 255, 255, 0.7)',
									}}
								/>
							</IconButton>
						),
						style: {
							color: 'rgba(255, 255, 255, 0.7)',
						},
					}}
					sx={{
						width: '400px',
						borderRadius: '8px',
						boxShadow: '0px 0px 3px rgba(255, 255, 255, 0.7)',
					}}
					onChange={onSearchChange}
				/>
			)}
		</Stack>
	);
}

export { Searcher };
