import { useState } from 'react';
import { useQuery } from 'react-query';
import {ClipMain} from '../obscure-css/clip-path/ClipPath';
import { ImgContainer } from './Dogs';
import useDogs from './useDogs';

const fetchDogs = async () => {
    const resp = await fetch('https://dog.ceo/api/breeds/list/all');
    return resp.json();
}

const fetchImages = async(breed) => {
    const resp = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    return resp.json();
}

export default function QueryDogs() {
    const { data, status } = useQuery('dogs', fetchDogs);
    // console.log(useQuery('dogs', fetchDogs))
    const dogList = data?.message;

    const [dogSearch, setDogSearch] = useState('');
    
    // query key | query function | config
    const images = useQuery(
        'images', 
        () => fetchImages(dogSearch), 
        {
            enabled: !!dogSearch,
            refetchOnWindowFocus: false,
            staleTime: 1
        },
    );

    // const dogQuery = useDogs();
    // console.log(dogQuery)

    const {refetch} = useQuery();

    const dogImages = images?.data?.message;
    const howManyDogs = images?.data?.message.length;
    const randomDogIndex = Math.floor(Math.random() * howManyDogs);
    let dogImage;
    if (dogImages) {
        dogImage = dogImages[randomDogIndex];    
    }

    return (
        <ClipMain>
            <h1>dogs again</h1>
            <p>{status}</p>
            <form style={{display: 'flex', alignItems: 'center'}}>
            <h2 style={{margin: '0 20px'}}> 
                select your dawg
                <select
                    onChange={(e)=> {
                        setDogSearch(e.target.value);
                        // refetch(images)
                    }}
                    >
                    <option disabled value='default'>PICK A DAWG</option>
                    {dogList && Object.keys(dogList).map(dog => 
                        <option value={dog}>{dog}</option>
                        )}
                </select>
            </h2>
            <h2 style={{margin: '0 20px'}}>
                enter your dawg
                <input
                    style={{width: '100%'}}
                    onChange={(e) => setDogSearch(e.target.value)}
                />
            </h2>
            </form>
            <h2 style={{marginTop: '50px', fontSize: '40px', color: 'aqua'}}>your dawg:</h2>
            <ImgContainer>
                <img
                    style={{ height: '100%', width: '100%', objectFit: 'contain'}}
                    alt="current dawg"  
                    src={dogImage ? dogImage : 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'} />
            </ImgContainer>
        </ClipMain>
    )
}