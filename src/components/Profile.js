import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        const year = [1990, 2005, 2009, 2012]
        const Title = [
            'Born',
            'School',
            'First Gradution',
            'Second Gradution',
        ];
        const content = [
            'China',
            'Eos',
            'Aspernaatur',
            'Ducimus',
        ];
        return (
            <div>
                <h3>ABOUT ME</h3>
                <p className = "about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non,
                dolorem, cumque distinctio magni quam expedita velit laborum sunt amet
                facere tempora ut fuga aliquam ad asperiores volupattem dolorum! Quasi.
                </p>
                <h3>EUCATION</h3>
                <table>
                    <tr>
                        <td className = "year">{year[0]}</td>
                        <td className = "content">
                            <p>{Title[0]}</p>
                            <p>{content[0]}</p></td>
                    </tr>
                    <tr>
                        <td className = "year">{year[1]}</td>
                        <td className = "content">
                            <p>{Title[0]}</p>
                            <p>{content[0]}</p>
                         </td>
                    </tr>
                    <tr>
                        <td className = "year">{year[2]}</td>
                        <td className = "content">
                            <p>{Title[2]}</p>
                            <p>{content[2]}</p>
                         </td>
                    </tr>
                    <tr>
                        <td className = "year">{year[3]}</td>
                        <td className = "content">
                            <p>{Title[3]}</p>
                            <p>{content[3]}</p>
                         </td>
                    </tr>
                    
                </table>
            </div>
        );
    }
}

export default Profile;