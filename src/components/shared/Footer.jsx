import React from 'react';
import { FaFacebook,FaYoutube,FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-300 text-base-content">
                <div>
                    <h1 className='text-lime-600 font-extrabold text-4xl bg-slate-500 p-4 rounded-lg'>Toy <span className='text-cyan-400'>Verse</span></h1>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a href='https://www.facebook.com/'><FaFacebook/></a>
                        <a href='https://www.youtube.com'><FaYoutube/></a>
                        <a href='https://www.twitter.com'><FaTwitter/></a>
                       
                        
                        
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2023 - All right reserved by Toy Verse</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;