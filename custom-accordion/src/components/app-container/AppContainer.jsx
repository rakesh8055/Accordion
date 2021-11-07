import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AppContainer.styles.scss';

import Accordion from '../accordion/Accordion';
import AC_DATA from '../../data/data';
import { signOut, onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../firebase/firebase.utils';

const AppContainer = (props) => {
    const handleClick = (index) => setClicked(index);
    const [clicked, setClicked] = useState(0);
    const [user, setUser] = useState('');

    let navigate = useNavigate();

    const handleSignOutClick = () => {
        signOut(auth);
        navigate('/');
        console.log(auth);
    }

    onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
    
    return(
    <>  
        {
            user ? <div className='sign-out'><button onClick={handleSignOutClick}>Sign Out</button></div> :
            <div className='sign-out'><Link to='/login'>Login</Link></div>
        }
        
      <div className='page-header'>
          <h3 data-testid='page-header'>{props.type}</h3>
        </div>
        { AC_DATA.map((item, index) => (
          <Accordion data-testid={`accordion-${index}`} key={index} 
            type={props.type} 
            title={item.title} 
            text={item.text}
            clicked={clicked}
            index={index}
            handleClick={() => handleClick(index)}/>
        ))
        }
    </>)
  }
  export default AppContainer;