import React from "react";
import styled from "styled-components";
import {useRouter} from "next/router";

const Root = styled.div`
    .mainHeader {
        width: 100%;
        height: 10vh;
        
        background: red;
    }
    
    .mainBody1 {
        width: 100%;
        height: 50vh;
        
        background: green;
    }
    
    .mainBody2 {
        width: 100%;
        height: 20vh;
        
        background: greenyellow;
    }
    
    .mainBody3 {
        width: 100%;
        height: 20vh;
        
        background: darkgreen;
    }
    
    .mainBody4 {
        width: 100%;
        height: 20vh;
        
        background: lawngreen;
    }
    
    .mainFooter {
        width: 100%;
        height: 10vh;
        
        background: blue;
    }
`;

export default function Home() {

    const router = useRouter();

    return (
        <Root>
            <div className="mainHeader">
                header
            </div>

            <div className="mainBody1">
                mainBody1 <br/>

                웹 페이지에서 작곡을 하는 홈페이지입니다. <br/>

                <button onClick={e => {
                    e.preventDefault();

                    router.push("/testPage");
                }}>
                    만들러 가기
                </button>
            </div>

            <div className="mainBody2">
                mainBody2
            </div>

            <div className="mainBody3">
                mainBody3
            </div>

            <div className="mainBody4">
                mainBody4
            </div>

            <div className="mainFooter">
                footer
            </div>
        </Root>
    );
};
