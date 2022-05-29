import {NextPage} from "next";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import * as Tone from "tone";

const Root = styled.div`

`;

const Home: NextPage = () => {

    const [btn,setBtn] = useState(false);

    useEffect(() => {
        (async () => {
            const synth = new Tone.PolySynth(Tone.Synth).toDestination();

            const now = Tone.now();
            // const synth = new Synth();

            synth.triggerAttack("D4", now);
            synth.triggerAttack("F4", now + 0.5);
            synth.triggerAttack("A4", now + 1);
            synth.triggerAttack("C5", now + 1.5);
            synth.triggerAttack("E5", now + 2);
            synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);
        })();
    }, [btn]);


    return (
        <Root>
            test
            <button onClick={e => {
                setBtn(!btn);
            }}>test</button>
        </Root>
    );
}

export default Home;