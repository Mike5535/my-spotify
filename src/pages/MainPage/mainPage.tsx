import { Ajax } from '@/utils/ajax';
import React from 'react';
import ReactDOM from 'react-dom/client';

export const MainPage = () => {
    const [genres, setGenres] = React.useState(null);
    React.useEffect(() => {
        Ajax.get('/api/v1/genres').then((res) => {
            console.log(res);
            setGenres(res.body['Блюз']);
        });
    }, []);
    return (
        <>
            <div className='body'>
                <img src={`/api/v1/image?path=${genres}`}></img>
            </div>
        </>
    );
};
