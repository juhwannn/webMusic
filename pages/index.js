import React from "react";
import styled from "styled-components";
import {useRouter} from "next/router";

const Root = styled.div`
    .mainBody1 {
        width: 100%;
        height: 100vh;
        
        text-align: center;
        
        position: relative;
        
        padding-top: 10vh;
        
        .mainButton {
            background: #fafafa;
            
            border: none;
            border-radius: 5px;
            
            width: 440px;
            height: 80px;
            
            font-size: 20px;
            
            box-shadow: 1px 2px 3px 4px grey;
            
            margin-top: 60vh;
        }
    }
    .mainBody1:after {
        background-image: url('/mainImage.jpeg');     
        display: block;    
        position: absolute;    
        content : "";    
        top: 0;    
        left: 0;    
        background-size: cover;
        width: 100%;    
        height: 100%;    
        opacity : 0.2;    
        z-index: -1;
    }
`;

export default function Home() {

    const router = useRouter();

    return (
        <Root>
            <div className="mainBody1">
                <div className="mainDescription">
                    웹 페이지에서 작곡을 하는 홈페이지입니다.
                </div>

                <button className="mainButton" onClick={e => {
                    e.preventDefault();

                    router.push("/testPage");
                }}>
                    GO!
                </button>
            </div>
        </Root>
    );
};
