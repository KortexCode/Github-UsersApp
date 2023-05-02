import { Stack, TextField, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import type { ChangeEventHandler } from 'react';

//Tipos
type InputText = string;
type Props = {
	setInputSearch: (arg: string) => void;
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
		borderBottom: '1px solid rgba(255, 255, 255, 0.7)',
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
	const { setInputSearch } = props;
	const [textValue, setTextValue] = useState<InputText>('');

	//Manejador de cambios en el input
	const onSearchChange: ChangeEventHandler<
		HTMLInputElement | HTMLTextAreaElement
	> = (event): void => {
		setTextValue(event.target.value);
	};
	//Manejador de consulta
	const handleSendSearch = () => {
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
			<SercherTextField
				id='Github User'
				type='text'
				label='Github User'
				variant='filled'
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
				placeholder='Search user'
				size='small'
				color='primary'
				sx={{
					width: '400px',
					borderRadius: '8px',
				}}
				onChange={onSearchChange}
			/>
		</Stack>
	);
}

export { Searcher };
