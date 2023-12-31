import React from 'react';
import './payment.scss';
import { useState } from 'react';
import NewAccountForm from '../NewAccountForm/NewAccountForm';

function Payment({togglePaymentProcess}) {
    const [isMember, setIsMember] = useState(true);
    const [isGuest, setIsGuest] = useState(false);
    const [isCash, setIsCash] = useState(false);
    const [isGiftCard, setIsGiftCard] = useState(false);
    const [isCard, setIsCard] = useState(false);
    const toggleMemberSelected=()=>{
        setIsMember(!isMember);
        setIsGuest(false);
    }
    const toggleGuestSelected=()=>{
        setIsGuest(!isGuest);
        setIsMember(false);
    }
    const toggleCashSelected=()=>{
        setIsCash(!isCash);
        setIsGiftCard(false);
        setIsCard(false);
    }
    const toggleGiftCardSelected=()=>{
        setIsCash(false);
        setIsGiftCard(!isGiftCard);
        setIsCard(false);
    }
    const toggleCardSelected=()=>{
        setIsCash(false);
        setIsGiftCard(false);
        setIsCard(!isCard);
    }
  return (
    <div className='payment'>
        <div className='payment__top-wrapper'>
            <div className='payment__top-wrapper-first'>
                <svg className='payment__back-icon' onClick={togglePaymentProcess} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Icon" d="M18.536 25.2258C19.0664 25.8622 20.0122 25.9482 20.6486 25.4178C21.285 24.8875 21.371 23.9416 20.8407 23.3052L18.536 25.2258ZM14.7165 18.2992L13.5641 17.339C13.1006 17.8952 13.1006 18.7033 13.5641 19.2595L14.7165 18.2992ZM20.8407 13.2933C21.371 12.6569 21.285 11.711 20.6486 11.1807C20.0122 10.6503 19.0664 10.7363 18.536 11.3727L20.8407 13.2933ZM20.8407 23.3052L15.8688 17.339L13.5641 19.2595L18.536 25.2258L20.8407 23.3052ZM15.8688 19.2595L20.8407 13.2933L18.536 11.3727L13.5641 17.339L15.8688 19.2595ZM18 30C11.3726 30 6 24.6274 6 18H3C3 26.2843 9.71573 33 18 33V30ZM6 18C6 11.3726 11.3726 6 18 6V3C9.71573 3 3 9.71573 3 18H6ZM18 6C24.6274 6 30 11.3726 30 18H33C33 9.71573 26.2843 3 18 3V6ZM30 18C30 24.6274 24.6274 30 18 30V33C26.2843 33 33 26.2843 33 18H30Z" fill="black"/>
                </svg>
                <h1 className='payment__title'>PAYMENT PROCESS</h1>
            </div>
            <div className='payment__top-wrapper-second'>
                <p className='payment__subtitle'>1. Checkout as</p>
                <div className='payment__button-secondary-wrapper'>
                    <button className={isMember ? 'payment__button-secondary payment__button--selected' : 'payment__button-secondary'} onClick={toggleMemberSelected} type='button'>Lush's member</button>
                    <button className={isGuest ? 'payment__button-secondary payment__button--selected' : 'payment__button-secondary'} onClick={toggleGuestSelected} type='button'>Guest</button>
                </div>
                {isGuest ? <NewAccountForm/>
                : <p className='payment__text'>Search by number / email</p>
                }
                <p className='payment__subtitle'>2. Payment method</p>
                <div className='payment__button-secondary-wrapper'>
                    <button className={isCash ? 'payment__button-third payment__button--selected' : 'payment__button-third'} onClick={toggleCashSelected} type='button'>Cash</button>
                    <button className={isGiftCard ? 'payment__button-third payment__button--selected' : 'payment__button-third'} onClick={toggleGiftCardSelected} type='button'>Gift Card</button>
                    <button className={isCard ? 'payment__button-third payment__button--selected' : 'payment__button-third'} onClick={toggleCardSelected} type='button'>Card</button>
                </div>
                {isCash ? <p className='payment__text'>Enter amount</p>
                : isGiftCard ?
                <div className='payment__top-wrapper-third'>
                    <p className='payment__text payment__text-no-margin'>Type gift card number</p>
                    <button className='payment__gift-card-icon'>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" d="M33 14.625C32.385 14.625 31.875 14.115 31.875 13.5V10.5C31.875 6.63 29.37 4.125 25.5 4.125H10.5C6.63 4.125 4.125 6.63 4.125 10.5V13.5C4.125 14.115 3.615 14.625 3 14.625C2.385 14.625 1.875 14.115 1.875 13.5V10.5C1.875 5.34 5.34 1.875 10.5 1.875H25.5C30.66 1.875 34.125 5.34 34.125 10.5V13.5C34.125 14.115 33.615 14.625 33 14.625Z" fill="#969696"/>
                        <path id="Vector_2" d="M25.5 34.125H10.5C5.34 34.125 1.875 30.66 1.875 25.5V22.5C1.875 21.885 2.385 21.375 3 21.375C3.615 21.375 4.125 21.885 4.125 22.5V25.5C4.125 29.37 6.63 31.875 10.5 31.875H25.5C29.37 31.875 31.875 29.37 31.875 25.5V22.5C31.875 21.885 32.385 21.375 33 21.375C33.615 21.375 34.125 21.885 34.125 22.5V25.5C34.125 30.66 30.66 34.125 25.5 34.125Z" fill="#969696"/>
                        <path id="Vector_3" d="M18.0002 19.6199C17.8052 19.6199 17.6102 19.5749 17.4302 19.4699L9.48017 14.8799C8.94017 14.5649 8.76016 13.8749 9.07516 13.3349C9.39016 12.7949 10.0802 12.6149 10.6052 12.9299L17.9852 17.2049L25.3202 12.9599C25.8602 12.6449 26.5501 12.8399 26.8501 13.3649C27.1651 13.9049 26.9702 14.5949 26.4452 14.9099L18.5552 19.4699C18.3902 19.5599 18.1952 19.6199 18.0002 19.6199Z" fill="#969696"/>
                        <path id="Vector_4" d="M18 27.7799C17.385 27.7799 16.875 27.2699 16.875 26.6549V18.4949C16.875 17.8799 17.385 17.3699 18 17.3699C18.615 17.3699 19.125 17.8799 19.125 18.4949V26.6549C19.125 27.2699 18.615 27.7799 18 27.7799Z" fill="#969696"/>
                        <path id="Vector_5" d="M18.0003 28.1251C17.1303 28.1251 16.2753 27.9301 15.5853 27.5551L10.7853 24.8851C9.34535 24.0901 8.23535 22.1851 8.23535 20.5351V15.4501C8.23535 13.8151 9.36035 11.9101 10.7853 11.1001L15.5853 8.43007C16.9653 7.66507 19.0353 7.66507 20.4153 8.43007L25.2153 11.1001C26.6553 11.8951 27.7653 13.8001 27.7653 15.4501V20.5351C27.7653 22.1701 26.6403 24.0751 25.2153 24.8851L20.4153 27.5551C19.7253 27.9301 18.8703 28.1251 18.0003 28.1251ZM16.6803 10.4101L11.8803 13.08C11.1453 13.485 10.4854 14.6251 10.4854 15.4501V20.5351C10.4854 21.3751 11.1453 22.5001 11.8803 22.9051L16.6803 25.5751C17.3703 25.9501 18.6304 25.9501 19.3204 25.5751L24.1203 22.9051C24.8553 22.5001 25.5153 21.3601 25.5153 20.5351V15.4501C25.5153 14.6101 24.8553 13.485 24.1203 13.08L19.3204 10.4101C18.6304 10.0351 17.3703 10.0351 16.6803 10.4101Z" fill="#969696"/>
                    </svg>
                    </button>
                </div>
                : isCard ? null 
                : null}
            </div>
        </div>
        <div className='payment__bottom-wrapper'>
            <button className='payment__button-primary' onClick={togglePaymentProcess} type='button'>PROCESS PAYMENT</button>
        </div>
    </div>
  )
}

export default Payment