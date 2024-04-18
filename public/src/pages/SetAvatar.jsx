import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import loder from "../assets/loader.gif";
import {toast , ToastContainer } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { setAvatarRoute } from '../utils/APIRoutes';

export const SetAvatar = () => {
    const api = "https://api.multiavatar.com/45678945";
    const navigate = useNavigate();
    const [avatar , setAvatar] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [selectedAvatar , setSelectedAvatar] = useState(undefined);
    
  return (
    <>
    <Container>
        <div className="title-container">
            <h1>
                Pick an avatar as your profile picture
            </h1>
        </div>
        <div className="avatars">
            {

            }
        </div>
    </Container>
    <ToastContainer/>
    </>
  )
}



const Container = styled.div``;