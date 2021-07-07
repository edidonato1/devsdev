import { useState, useEffect } from "react";
import axios from 'axios';
import {ClipMain} from '../obscure-css/clip-path/ClipPath';
import styled from 'styled-components';

export const ImgContainer = styled.div`
    width: 600px;
    height: 400px;
    maxHeight: 400px;
    maxWidth: 600px;
    object-fit: cover;
    padding: 14px;
    border: 5px solid #fe0b3b;
`

export default function Dogs() {
    const [dogList, setDogList] = useState([])
    const [dogSearch, setDogSearch] = useState('');
    const [allDogImages, setAllDogImages] = useState([])
    const [dogImage, setDogImage] = useState('');
    const [searched, setSearched] = useState(false);

    useEffect(() => {
        const fetchDogs = async () => {
            const URL = 'https://dog.ceo/api/breeds/list/all'
            const resp = await axios.get(URL);
            setDogList(resp.data.message);
        }
        fetchDogs();
    }, [])

    useEffect(()=> {
        const fetchDogs = async () => {
            setDogImage(null)
            const URL = `https://dog.ceo/api/breed/${dogSearch}/images`
            const resp = await axios.get(URL);
            setAllDogImages(resp.data.message);
        }
        fetchDogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searched])

    useEffect(() => {
        if (allDogImages) {
            const howManyDogs = allDogImages.length;
            const randomDogIndex = Math.floor(Math.random() * howManyDogs)
            setDogImage(allDogImages[randomDogIndex]);
        }
    }, [allDogImages])

    return (
        <ClipMain>
        <form
            style={{display: 'flex', alignItems: 'center'}}
            onSubmit={(e) => {
                e.preventDefault();
                setSearched(!searched)}
            }
        >
            <h2 style={{margin: '0 20px'}}>
                select your dawg
                <select
                    onChange={(e) => {
                        setDogSearch(e.target.value)
                        setSearched(!searched);
                    }
                    }>
                        <option disabled value='default'>PICK A DAWG</option>
                    {Object.keys(dogList)?.map(dog => 
                        <option value={dog} >
                        {dog}
                        </option>
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
                src={dogImage ? dogImage : 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}
            />
        </ImgContainer>
        </ClipMain>
    )
}



