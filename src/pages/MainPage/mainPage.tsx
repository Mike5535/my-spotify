import { useStore } from '@/store';
import { Ajax } from '@/utils/ajax';
import React from 'react';
import ReactDOM from 'react-dom/client';

export const MainPage = () => {
    const store = useStore();
    const [genres, setGenres] = React.useState(store.musicStore.curGenres);

    React.useEffect(() => {
        store.musicStore.fetchGenres().then(() => {
            setGenres(store.musicStore.curGenres);
        });
    }, []);
    return (
        <>
            <div className='body'>
                {
                    genres.map(cur => {
                        console.log(cur.name)
                        return <img key={cur.imgPath} src={`/api/v1/image?path=${cur.imgPath}`}></img>;
                    })
                }
            </div>
        </>
    );
};
