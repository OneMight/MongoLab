import { useEffect } from 'react';
import './OnePilotCon.css'
import { useLocation } from 'react-router-dom';


export default function OnePilotCon(pilot){

    const pilots = pilot.pilot
    const getPilotDescriptionLines = (text, lineCount) => {
        const sentences = text.split('. ').filter(sentence => sentence);
        return sentences.slice(0, lineCount).join('. ') + (sentences.length > lineCount ? '.' : '');
    };
    console.log(pilots)
    return(
        pilots.map(pilot =>(
            <>
            <article className='con-inf' key={pilot._id}>
                <article className='about-inf'>
                    <div className='title-div'>
                        <p className='inf-name'>
                            {pilot.PilotName}
                        </p>
                    </div>
                    <p className='desc-inf'>{getPilotDescriptionLines(pilot.Biography, 3)}</p>
                    
                </article>
            </article>
          
            </>
            
            
        ))
    )
}