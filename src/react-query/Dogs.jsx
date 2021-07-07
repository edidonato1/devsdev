import { useState, useEffect } from "react";
import axios from 'axios';
import {ClipMain} from '../obscure-css/clip-path/ClipPath';
import styled from 'styled-components';

const ImgContainer = styled.div`
    width: 600px;
    height: 400px;
    maxHeight: 400px;
    maxWidth: 600px;
    object-fit: cover;
    padding: 14px;
    border: 5px solid #fe0b3b;
`

export default function Dogs () {
    const [dogSearch, setDogSearch] = useState('');
    const [allTheDogs, setAllTheDogs] = useState([])
    const [dogList, setDogList] = useState([])
    const [searched, setSearched] = useState(false);
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        const fetchDogs = async () => {
            const AllDogURL = 'https://dog.ceo/api/breeds/list/all'
            const resp = await axios.get(AllDogURL);
            setDogList(resp.data.message);
            console.log(resp.data.message);
        }
        fetchDogs();
    }, [])

    useEffect(()=> {
        const fetchDogs = async () => {
            setDogImage(null)
            const URL = `https://dog.ceo/api/breed/${dogSearch}/images`
            const resp = await axios.get(URL);
            setAllTheDogs(resp.data.message);
        }
        fetchDogs();
    }, [searched])

    useEffect(() => {
        if (allTheDogs) {
            const howManyDogs = allTheDogs.length;
            const randomDogIndex = Math.floor(Math.random() * howManyDogs)
            setDogImage(allTheDogs[randomDogIndex]);
        }
    }, [allTheDogs])

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



