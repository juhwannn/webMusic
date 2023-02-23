import React, {useEffect, useState} from "react";
import styled from "styled-components";
import * as Tone from "tone";
import * as opensheetmusicdisplay from "opensheetmusicdisplay";

const Root = styled.div`

`;

/*
TODO:
1. BPM 설정
2. 오선지 표시
3. 오선지에 음표 추가
4. 정해진 BPM에 맞춰 오선지에 움직이도록 애니메이션 효과
5. 효과에 맞춰서 음표에 해당하는 소리 출력
*/

export default function Home() {

    const [btn,setBtn] = useState(false);
    const [BPM, setBPM] = useState(0);

    useEffect(() => {
        (async () => {
            const synth = new Tone.PolySynth(Tone.Synth).toDestination();

            const now = Tone.now();
            // const synth = new Synth();

            // synth.triggerAttack("D4", now);
            // synth.triggerAttack("F4", now + 0.5);
            // synth.triggerAttack("A4", now + 1);
            // synth.triggerAttack("C5", now + 1.5);
            // synth.triggerAttack("E5", now + 2);
            // synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);
        })();
    }, [btn]);

    return (
        <Root>
            BPM
            <input value={BPM} onChange={e => setBPM(e.target.value)}/>
            {BPM}

            <br/>
            <br/>

            <button onClick={e => {
                setBtn(!btn);

                alert("BPM : " + BPM);
            }}>test</button>

            <div className="musicSheet">

            </div>
        </Root>
    );
};